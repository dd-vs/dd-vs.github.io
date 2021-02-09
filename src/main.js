import "./assets/bootstrap/bootstrap.min.css";
import "./assets/fa-fonts/css/all.min.css";
import "./assets/particle.css";
import "./assets/style.css";
import router from "./router.js";
import { createApp } from "vue";
import App from "./App.vue";

const app = createApp(App);
app.use(router);
app.mount("#app");
