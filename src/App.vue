<template>
  <section class="home-banner">
    <DParticles />
    <TheHeader />
  </section>
</template>

<script>
import TheHeader from "./components/UI/TheHeader.vue";
import DParticles from "./components/UI/DParticles.vue";
export default {
  components: { TheHeader, DParticles },
};
</script>
