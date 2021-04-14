<template>
  <div class="canvas">
    <div class="page">
      <h1>My resume</h1>
    </div>
  </div>
  <teleport to="body">
    <div class="mask"></div>
  </teleport>
</template>

<style scoped>
.mask {
  width: 100%;
  margin: 0;
  z-index: 10;
  position: fixed;
  top: 0;
  bottom: 0;
  background-color: rgb(105, 99, 115);
}
.canvas {
  background-color: rgb(122, 122, 122);
}
.page {
  width: 900px;
  height: 1200px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 25px;
  margin-bottom: 25px;
  background-color: #fff;
  position: relative;
  z-index: 11;
  box-shadow: 5px 5px 20px #0e0e0e;
  padding: 50px 35px;
  overflow: hidden;
}
body {
  background-color: black;
}
</style>
