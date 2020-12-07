<template>
  <div class="about">
    <section>
      <div class="text-container">
        <p>Hello,</p>
        <p>We are</p>
        <p>Sarajevo Walkthrough</p>
      </div>
    </section>
    <div class="about-container">
      <img src="../assets/logo1.png" />

      <div class="about-text">
        <p>Who are we?</p>
        <p>Supporters of local tourism</p>
        <p>
          Sarajevo Walktrough was founded in late 2020 by few students, to best
          respond to the needs of development, preservation and protection of
          tourist and cultural values ​​in the Sarajevo. As tourism is currently
          the fastest growing industry, Sarajevo Walktrough strives to improve
          the tourist offer, making Sarajevo one of the most desirable tourist
          destinations in Europe.
        </p>
      </div>
    </div>
    <div class="services ">
      <div class="services-text ">
        <p>Why do we exist?</p>
        <p>Eternal question of us all...</p>
        <p>
          Sarajevo Walktrough portal provides users with information on what is
          happening in and around Sarajevo, as well as information on hotels,
          attractions, events and other details about the city, all of which can
          help users plan a perfect trip to this destination.Inspired by their
          passion for travel and adventure our travel writers share advice on
          attractions in destinations around Sarajevo and offer tips and ideas
          for fulfilling journeys.
        </p>
      </div>
      <div class="box-container">
        <!--1------------->
        <div class="box-1">
          <span>1</span>
          <p class="heading">Connect</p>
          <p class="details">
            We want to connect all the people around the city and wide so
            everyone can share different experiences with culture and lifestyle.
          </p>
        </div>
        <!--2------------->
        <div class="box-2">
          <span>2</span>
          <p class="heading">Explore</p>
          <p class="details">
            Our team aims to inspire travel, help travelers decide where to go
            and what to see, and ensure people make the most of their trips.
          </p>
        </div>
        <!--3------------->
        <div class="box-3">
          <span>3</span>
          <p class="heading">Experience</p>
          <p class="details">
            Making sure you have best experience in this town.
          </p>
        </div>
      </div>
    </div>
    <div class="contact-us">
      <p>Have any questions ?</p>
      <a>Contact Us</a>
    </div>
    <div class="footer">
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
import Footer from "../components/Footer.vue";

export default {
  name: "About",
  components: {
    Footer,
  },
};
</script>

<style scoped>
/* CSS Document */
body {
  background-color: #f6f5f5;
  margin: 0px;
  padding: 0px;
}

section {
  width: 100%;
  height: 95vh;
  background-image: url("../assets/bg.png");
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
}

.logo {
  font-family: RoadTest;
  color: #000000;
  font-size: 22px;
}
.active {
  color: #2d2a2a;
  font-weight: bold;
}
.model {
  height: 530px;
  position: absolute;
  bottom: 40px;
  left: 75%;
  transform: translateX(-75%);
}
.text-container p:nth-child(1) {
  font-family: calibri;
  font-weight: bold;
  color: white;
  font-size: 22px;
  line-height: 5px;
}
.text-container p:nth-child(2) {
  font-family: "Poppins", sans-serif;
  font-weight: bold;
  color: white;
  font-size: 30px;
  line-height: 5px;
}
.text-container p:nth-child(3) {
  font-family: "Poppins", sans-serif;
  font-weight: bold;
  letter-spacing: 1px;
  color: white;
  font-size: 80px;
  line-height: 15px;
}

.text-container p {
  margin: 45px 0px 25px;
  line-height: 0px;
}

.text-container {
  position: absolute;
  left: 13%;
  top: 42%;
  transform: translate(-13%, -42%);
}

.about-container {
  width: 80%;
  height: 330px;
  background: #ffffff;
  border-radius: 20px;
  box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.2);
  display: flex;
  margin: -7% auto 20px auto;
  position: relative;
  justify-content: space-evenly;
  align-items: center;
}
.about-container img {
  height: 250px;
}
.about-text {
  width: 500px;
}
.about-text p:nth-child(1) {
  color: #313030;
  font-family: myriad pro;
  font-weight: bold;
  font-size: px;
  line-height: 0px;
}
.about-text p:nth-child(2) {
  color: #2f2e2e;
  font-size: 13px;
  font-family: myriad pro;
  font-weight: bold;
  line-height: 5px;
}
.about-text p:nth-child(3),
.about-text p:nth-child(4) {
  color: #7e7d7d;
  font-family: calibri;
  font-size: 16px;
}
.about-text button {
  width: 120px;
  height: 40px;
  color: #ffffff;
  outline: none;
  border: none;
  font-family: calibri;
  background-color: #262525;
}
.services {
  height: 600px;
  background-color: #ffffff;
  padding: 2% 10% 0px 10%;
}
.services-text p:nth-child(1) {
  font-family: calibri;
  font-weight: bold;
  color: #1d1c1c;
  font-size: 30px;
  line-height: 7px;
}
.services-text p:nth-child(2) {
  font-family: calibri;
  font-weight: bold;
  color: #1d1c1c;
  font-size: 15px;
  line-height: 5px;
}
.services-text p:nth-child(3) {
  font-family: calibri;
  color: #1d1c1c;
  font-size: 15px;
}
.services-text {
  width: 500px;
  margin: 70px 0px;
}
.box-container {
  display: flex;
  justify-content: space-between;
}
.box-1,
.box-2,
.box-3 {
  width: 300px;
  height: 320px;
  background-repeat: no-repeat;
  background-size: cover;
  box-shadow: 2px 2px 18px rgba(0, 0, 0, 0.3);
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  margin: 0px 4px;
}

.box-1 {
  background-image: url("https://cdn.pixabay.com/photo/2018/02/27/15/40/background-3185765_1280.jpg");
}
.box-2 {
  background-image: url("https://cdn.pixabay.com/photo/2016/04/18/16/22/gradient-1336854_1280.jpg");
}
.box-3 {
  background-image: url("https://cdn.pixabay.com/photo/2018/02/27/15/40/background-3185765_1280.jpg");
}
.box-1 span,
.box-2 span,
.box-3 span {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: calibri;
  font-weight: bold;
}
.box-1 p:nth-child(2),
.box-2 p:nth-child(2),
.box-3 p:nth-child(2) {
  color: #ffffff;
  font-family: calibri;
  font-size: 23px;
  line-height: 0px;
}
.box-1 p:nth-child(3),
.box-2 p:nth-child(3),
.box-3 p:nth-child(3) {
  font-family: calibri;
  color: #4a4a4a;
  text-align: center;
  width: 230px;
  margin: 0px 0px 20px 0px;
}

.contact-us {
  width: 100%;
  height: 280px;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url("../assets/bg.png");
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0px 0px 20px 0px;
}
.contact-us p {
  color: #ffffff;
  font-size: 30px;
  font-family: calibri;
  font-weight: bold;
  border-bottom: 2px solid #ffffff;
}
a {
  box-shadow: 0px 0px 0px 0px #1c1b18;
  background: linear-gradient(to bottom, #e4af77 5%, #ccc2a6 100%);
  background-color: #eae0c2;
  border-radius: 13px;
  border: 1px solid #333029;
  display: inline-block;
  cursor: pointer;
  color: #2b2d23;
  font-family: "Poppins", sans-serif;
  font-size: 14px;
  font-weight: bold;
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

@media (max-width: 1000px) {
  * {
    box-sizing: border-box;
  }
  .model {
    height: 460px;
    left: 90%;
    transform: translateX(-90%);
  }
  .text-container {
    top: 46%;
  }
  .text-container button {
    margin: 5px;
  }
  .about-container {
    width: 90%;
    border-radius: 10px;
  }
  .about-container img {
    height: 200px;
  }
  .about-text {
    width: 400px;
  }
  .about-text p:nth-child(1) {
    font-size: 20px;
  }
  .about-text p:nth-child(2) {
    font-size: 10px;
  }

  .about-text p:nth-child(3),
  .about-text p:nth-child(4) {
    font-size: 14px;
  }
  .services {
    padding: 2% 5% 0px 5%;
  }
  .box-container {
    justify-content: center;
    flex-wrap: wrap;
  }
  .services {
    height: auto;
  }
  .box-1,
  .box-2,
  .box-3 {
    flex-grow: 1;
    margin: 10px;
  }
  .contact-me {
    height: 200px;
  }
  .contact-me p {
    font-size: 26px;
  }
}
@media (max-width: 750px) {
  section {
    background-image: none;
    background-color: #f7f7f7;
  }
  .model {
    display: none;
  }
  .toggle {
    display: block;
  }
  .text-container p:nth-child(2) {
    line-height: 40px;
    margin: 0px;
    padding: 0px;
  }
  .text-container {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80%;
  }

  .about-container {
    top: 0px;
    flex-direction: column;
    width: 90%;
    height: auto;
    padding: 30px 0px;
    align-items: center;
  }
  .about-text {
    width: 90%;
    text-align: center;
  }
  .services-text {
    width: 100%;
  }
  .contact-me {
    height: 180px;
  }
  .contact-me p {
    font-size: 18px;
  }
}
</style>
