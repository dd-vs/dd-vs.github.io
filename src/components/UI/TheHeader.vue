<template>
  <header>
    <nav class="navbar navbar-expand-md">
      <div class="container">
        <!-- <img src="" alt="logo" /> -->
        <h1>D D</h1>
        <span
          class="navbar-toggler"
          type="button"
          @click="toggle()"
          ref="toggleBtn"
        >
          <i class="fas fa-align-justify" v-show="display === 'none'"></i>
          <i class="fas fa-times-circle" v-show="display != 'none'"></i>
        </span>
        <div
          class="navbar-collapse"
          id="navbarCollapse"
          :style="{ display: display }"
        >
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <router-link :to="{ name: 'Home' }" class="nav-link"
                >Home</router-link
              >
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Services</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Contact</a>
            </li>
          </ul>
          <form class="form-inline mt-2 mt-md-0"></form>
        </div>
      </div>
    </nav>
    <div class="clear-fix"></div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      display: "none",
    };
  },
  methods: {
    toggle() {
      this.display === "none"
        ? (this.display = "block")
        : (this.display = "none");
    },
  },
};
</script>
