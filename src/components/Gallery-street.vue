<template>
  <div id="gallery-street">
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
        
        img-src="https://i.pinimg.com/564x/25/eb/79/25eb797f4fe4267466772ea33c34b2f7.jpg"
      ></b-carousel-slide>

      <b-carousel-slide
        caption="Source: Dream Team"
        text=""
        img-src="https://i.pinimg.com/564x/27/01/b7/2701b70167c3f7a1ac5fd7645a5c8c7b.jpg"
      ></b-carousel-slide>

  



    </b-carousel>
  </div>
</template>

<script>
export default {
  name: "Gallery-street",
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
