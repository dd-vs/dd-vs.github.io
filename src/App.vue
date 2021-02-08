<template>
  <section class="home-banner relative">
    <DParticles />
    <TheHeader />
    <div class="container-fluid">
      <carousel :items-to-show="1" transition="500ms" :wrapAround="true">
        <slide v-for="slide in slides" :key="slide">
          <div class="row">
            <div class="col-md-6 -txt-">
              <object :data="slide.img" width="450px" />
            </div>
            <div class="col-md-6 v-center">
              <h1 class="hero-text">
                {{ slide.text1 }} <br />
                {{ slide.text2 }}
              </h1>
            </div>
          </div>
        </slide>

        <template #addons>
          <navigation />
          <pagination />
        </template>
      </carousel>
    </div>

    <div class="container-fluid">
      <div class="row">
        <div class="col-md-6 -txt-"></div>
        <div class="col-md-6 v-center">
          <h1 class="hero-text"></h1>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import TheHeader from "./components/UI/TheHeader.vue";
import DParticles from "./components/UI/DParticles.vue";
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
export default {
  components: {
    TheHeader,
    DParticles,
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  data() {
    return {
      slides: [
        {
          img: "/images/mobileAppWireframe.svg",
          text1: "iOS & Android Mobile",
          text2: "app Development",
        },
        {
          img: "/images/coding.svg",
          text1: "Web",
          text2: "Development",
        },
        {
          img: "/images/walking.svg",
          text1: "E-Commerce",
          text2: "Solutions",
        },
      ],
    };
  },
};
</script>
