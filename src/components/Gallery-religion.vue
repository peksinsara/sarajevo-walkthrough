 <template>
<div id="gallery-religion">
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
        img-src="https://i.pinimg.com/564x/af/60/44/af60449fefcad6d3b06b09cba5c5164f.jpg"
      ></b-carousel-slide>

      <b-carousel-slide
        caption="Source: Dream Team"
        text=""
        img-src="https://i.pinimg.com/564x/73/c7/98/73c7986474dfec512ef911e0770c88f8.jpg"
      ></b-carousel-slide>

      <b-carousel-slide
        caption="Source: Dream Team"
        text=""
        img-src="https://i.pinimg.com/564x/52/1e/ac/521eace23168946c65e2f6da5eba73d0.jpg"
      ></b-carousel-slide>

        <b-carousel-slide
        caption="Source: Dream Team"
        text=""
        img-src="https://i.pinimg.com/564x/b0/8c/eb/b08ceb665186a3371a003991af80f4fe.jpg"
      ></b-carousel-slide>

        <b-carousel-slide
        caption="Source: Dream Team"
        text=""
        img-src="https://i.pinimg.com/564x/a2/24/39/a22439786bcee27e2205fa9128410f5f.jpg"
      ></b-carousel-slide>

    </b-carousel>
  </div>
</template>

<script>
export default {
  name: "Gallery-religion",
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
#gallery-religion{
  height:500px;
}
</style>
