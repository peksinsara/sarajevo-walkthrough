<template>
  <div id="gallery-nlife">
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="180"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Text slides with image -->
      <b-carousel-slide
        caption=""
        text="Source: Pinterest"
        img-src="https://i.pinimg.com/564x/b4/a7/fc/b4a7fc9641555a2b84ed25f9911426ac.jpg"
      ></b-carousel-slide>

      <b-carousel-slide
             caption=""
        text="Source: Pinterest"
        img-src="https://i.pinimg.com/564x/09/23/f5/0923f54cf8b6aac864843e59b2a71ce9.jpg"
      ></b-carousel-slide>

      <b-carousel-slide
                caption=""
        text="Source: Pinterest"
        img-src="https://i.pinimg.com/564x/8b/d4/26/8bd426ae74e3c24411cc40f0631f0124.jpg"
      ></b-carousel-slide>


    </b-carousel>
  </div>
</template>

<script>
export default {
  name: "Gallery-nlife",
  components: {},
  data() {
    return {
      slide: 0,
      sliding: null,
    };
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true;
    },
    onSlideEnd(slide) {
      this.sliding = false;
    },
  },
};
</script>

<style scoped>
body{
  background-color:black !important;
}

.img-src{
  max-width:900px !important;
  max-height:300px !important;
}
</style>