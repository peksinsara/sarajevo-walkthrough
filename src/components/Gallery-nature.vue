<template>
  <div id="gallery-nature">
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
        img-src="https://i.pinimg.com/236x/97/3d/f3/973df3b63b42f787a1f12ac287435068.jpg"
      ></b-carousel-slide>

      <b-carousel-slide
        caption="Source: Dream Team"
        text=""
        img-src="https://i.pinimg.com/564x/e2/32/8c/e2328cdedcb84c8c1d26bd83c413eaa2.jpg"
      ></b-carousel-slide>

      <b-carousel-slide
        caption="Source: Dream Team"
        text=""
        img-src="https://i.pinimg.com/564x/ec/9e/a0/ec9ea0910969f299bc89da95b721bd85.jpg"
      ></b-carousel-slide>


    </b-carousel>
  </div>
</template>

<script>
export default {
  name: "Gallery-nature",
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
#gallery {
  width:50%;
  height: 50% !important;
  padding: 20px;
  align-content: center;
  justify-content: center;
  margin: auto;
}
.img-src {
  height: 400px !Important;
}

</style>
