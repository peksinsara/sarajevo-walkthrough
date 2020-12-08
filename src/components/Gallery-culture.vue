<template>
  <div id="gallery-culture">
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
        caption="Source: Dream Team"
        text=""
        img-src="https://i.pinimg.com/564x/5f/61/e3/5f61e3582653b986d65d767bf6aacd10.jpg"
      ></b-carousel-slide>

      <b-carousel-slide
        caption="Source: Dream Team"
        text=""
        img-src="https://i.pinimg.com/564x/c8/ae/d5/c8aed5c24a7aa0b8e5f66f86a73fa347.jpg"
      ></b-carousel-slide>

      <b-carousel-slide
        caption="Source: Dream Team"
        text=""
        img-src="https://i.pinimg.com/564x/37/d3/e3/37d3e3dd815b47426b5ee7949e6968d1.jpg"
      ></b-carousel-slide>

        <b-carousel-slide
        caption="Source: Dream Team"
        text=""
        img-src="https://i.pinimg.com/564x/e2/32/8c/e2328cdedcb84c8c1d26bd83c413eaa2.jpg"
      ></b-carousel-slide>

        <b-carousel-slide
        caption="Source: Dream Team"
        text=""
        img-src="https://i.pinimg.com/564x/1c/fc/df/1cfcdf915cdd8a525837a88399a4e9cb.jpg"
      ></b-carousel-slide>

    </b-carousel>
  </div>
</template>

<script>
export default {
  name: "Gallery-culture",
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

.img-src {
  height: 400px !Important;
}
.img-src{
  max-width:900px !important;
  max-height:600px !important;
}
</style>
