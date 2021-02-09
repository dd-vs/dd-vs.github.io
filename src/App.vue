<template>
  <TheHeader />
  <router-view></router-view>
</template>

<script>
import TheHeader from "./components/UI/TheHeader.vue";

export default {
  components: {
    TheHeader,
  },
};
</script>
