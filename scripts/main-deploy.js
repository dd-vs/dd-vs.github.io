const execa = require("execa");
const fs = require("fs");
const date = new Date();
const fullDate =
  "Auto Deployed on " +
  date.getDate() +
  " - " +
  parseInt(date.getMonth()) +
  1 +
  " - " +
  date.getFullYear() +
  " at " +
  date.getHours() +
  " : " +
  date.getMinutes();

(async () => {
  try {
    await execa("git", ["checkout", "--orphan", "main"]);
    console.log("Building...");
    await execa("npm", ["run", "build"]);
    // Understand if it's dist or build folder
    const folderName = fs.existsSync("dist") ? "dist" : "build";
    await execa("git", ["--work-tree", folderName, "add", "--all"]);
    await execa("git", ["--work-tree", folderName, "commit", "-m", fullDate]);
    console.log("Pushing to main...");
    await execa("git", ["push", "origin", "HEAD:main", "--force"]);
    // await execa("rmdir /q /s", [folderName]);
    await execa("git", ["checkout", "-f", "master"]);
    await execa("git", ["branch", "-D", "main"]);
    console.log("Successfully deployed");
  } catch (e) {
    console.log(e.message);
    process.exit(1);
  }
})();
