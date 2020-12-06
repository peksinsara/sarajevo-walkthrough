<template>
  <div class="video-bg">
    <video autoplay muted loop>
      <source
        src="https://cdn.videvo.net/videvo_files/video/free/2020-03/small_watermarked/200207_London%20Streets_1_4k_005_preview.webm"
        type="video/mp4"
      />
    </video>
    <div class="content">
      <h1>Wellcome to Sarajevo Walkthrough</h1>
      <a href="../#/home">Home Page</a>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  name: "Landing_page",
  props: {},
};
</script>
<style scoped>
body {
  font-family: "Poppins", sans-serif;
  padding: 0;
  margin: 0;
}
.video-bg {
  width: 100%;
  height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: centar;
}
.video-bg video {
  position: absolute;
  top: 0;
  left: 0;
  object-fit: cover;
  width: 100%;
  height: 100vh;
  pointer-events: none;
}
.video-bg content {
  position: absolute;
  z-index: 1;
  max-width: 400px;
  justify-content: center;
  margin-top: 50;
  text-align: center;
  align-content: center;
}
.video-bg .content h1 {
  margin-top: 30%;
  font-size: 4em;
  text-transform: uppercase;
  color: white;
  font-weight: 700;
}
a {
  box-shadow: 0px 0px 0px 0px #1c1b18;
  background: linear-gradient(to bottom, #e4af77 5%, #ccc2a6 100%);
  background-color: #eae0c2;
  border-radius: 13px;
  border: 1px solid #333029;
  display: inline-block;
  cursor: pointer;
  color: #505739;
  font-family: "Poppins", sans-serif;
  font-size: 30px;
  font-weight: bold;
  margin-left: 40%;
  padding: 11px 22px;
  text-decoration: none;
  align-items: center;
  align-content: center;
  text-shadow: 0px -1px 14px #ffffff;
}
a:hover {
  background: linear-gradient(to bottom, #ccc2a6 5%, #eae0c2 100%);
  background-color: #ccc2a6;
}
a:active {
  position: relative;
  top: 1px;
}
</style>
