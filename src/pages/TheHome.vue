<template>
  <section class="home-banner relative">
    <DParticles />
    <DBubbles />
    <div class="container-fluid initial">
      <carousel
        :items-to-show="1"
        transition="500ms"
        :wrapAround="true"
        :breakpoints="breakpoints"
      >
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
  </section>
</template>

<script>
import DParticles from "../components/UI/DParticles.vue";
import DBubbles from "../components/UI/DBubbles.vue";
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
export default {
  components: {
    DParticles,
    DBubbles,
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
          img: "/images/webdevelopment.svg",
          text1: "Web",
          text2: "Development",
        },
        {
          img: "/images/e-commerce.svg",
          text1: "E-Commerce",
          text2: "Solutions",
        },
      ],
      breakpoints: {
        // 700px and up
        700: {
          itemsToShow: 1,
          snapAlign: "center",
        },
        // 1024 and up
        1024: {
          itemsToShow: 1,
          snapAlign: "start",
        },
      },
    };
  },
};
</script>
