<template>
  <div class="gallery">
    <div class="nl">
      <h2>Things to Know About Night clubs in Sarajevo</h2>
      <h3>
        Sarajevo’s nightclubs differ from what you may be familiar withback at
        home, and it’s worth mentioning a few things to prepare yourself. Expect
        lots of cigarette smoke in a small enclosed area. <br />
        The level of service varies too, and you could find yourself getting the
        true Yugoslavian experience with stern waiters who seem always toignore
        you.
      </h3>
      <div class="image_contetnt">
        <img src="" /> <Gallery-nlife></Gallery-nlife>
      </div>
    </div>

    <div class="religion">
      <div class="religion-content">
        <h2>European Jerusalem</h2>
        <h3>
          What characterizes Sarajevo speaks of the very welcome and warmth that
          this city offers is that throughout its history they have not brought
          back anyone who found themselves in trouble. The Sephardim arrived
          from Spain and Portugal at the end of the 15th century, while the
          Ashkenazi from Central Europe joined in the 19th century.<br />Sarajevo
          in itself represents a religious mosaic made up of traces of both
          Catholicism and Orthodoxy and Islam and Judaism. It is a combination
          of diversity, multiethnicity, multiculturalism and multireligiousness
          of the center of Europe and can be an example to many other cities.
          The very indication of this is that in just a few hundred meters we
          can come across the religious objects of all 3/4 monotheistic
          religions. With this very phenomenon, the azan and the church bells
          can be heard at the same time.
        </h3>
      </div>
      <div class="image_contetnt">
        <img src="" /> <Gallery-religion></Gallery-religion>
      </div>
    </div>

    <div class="nature">
      <div class="nature-content">
        <h2></h2>
        <h3>
          Its idyllic mountain setting and diverse heritage makes Sarajevo one
          of Europe’s most intriguing cities. Yet it is its indomitable spirit
          that makes it truly special.The best way to do this is to find the
          highest vantage point possible, and with the recent reopening of
          Sarajevo’s iconic cable car, a trip up the mountainside has, once
          again, been made easy.
        </h3>
      </div>
      <div class="image_contetnt">
        <img src="" /> <Gallery-nature></Gallery-nature>
      </div>
    </div>

  </div>
</template>

<style>
body {
  background-image: url("../assets/o-sarajevu 2bg.jpg");
}
.gallery {
  margin-top: 5%;
  display: flex;
  height: 100%;
  flex-direction: column;
  flex-wrap: wrap;
  width: 80%;
  justify-content: center;
  align-items: center;
  align-content: center;
  font-family: "Poppins", sans-serif;
}

.nl {
  height: 850px;
  width: 1300px;
  padding: 60px;
}

.nl h2 {
  z-index: -1;

  width: 700px;
  height: 186px;
  left: 80px;
  top: 30%;
  font-style: normal;
  font-weight: bold;
  font-size: 63px;
  line-height: 80px;

  color: #ffffff;

  backdrop-filter: blur(2px);
}

.nl h3 {
  left: 8%;
  top: 340px;
  position: absolute;
  width: 436px;
  height: 340px;
  font-style: normal;
  font-weight: normal;
  font-size: 28px;
  line-height: 28px;
  color: #ffffff;
}
.nl .image_contetnt {
  position: absolute;
  z-index: -2;
  left: 45%;
  top: 20%;
  width: 820px;

  height: 594.68px;
}

.religion {
  margin: auto;
  display: flex;
  height: 500px;
  top:50%;
}
.religion-content {
  display: inline-block;
}

.religion h2 {
  text-align: left;
  font-style: normal;
  font-weight: bold;
  font-size: 63px;
  line-height: 80px;
 right: 12%;
  margin-bottom: 10px;
  float: right;
  color: #ffffff;
  z-index: -1;
  position: absolute;
  width:fit-content;
  height: 186px;
}

.religion h3 {
  margin: auto;
  float: right;
  top: 30%;
  position: relative;
  text-align: right;
  left: 680px;
  width: 520px;
  height: 340px;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 28px;
  color: #ffffff;
}

.religion .image_contetnt {
  position: absolute;
  z-index: -2;
  margin: auto;
  width: 820px;
  left: 8%;
  height: 500px;
}
.nature {
  height: 850px;
  width: 1300px;
  padding: 60px;
}
.nature-content{
  display:flex;

}
.nature h2 {
  z-index: -1;
  width: 700px;
  height: 186px;
  left: 80px;

  font-style: normal;
  font-weight: bold;
  font-size: 63px;
  line-height: 80px;

  color: #ffffff;

  backdrop-filter: blur(2px);
}

.nature h3 {
  left: 8%;
  top: 2300px;
  position: absolute;
  width: 436px;
  height: 340px;
  font-style: normal;
  font-weight: normal;
  font-size: 28px;
  line-height: 28px;
  color: #ffffff;
}
.nature .image_contetnt {
  position: absolute;
  z-index: -2;
  left: 45%;
  top: 2190px;
  width: 820px;
  height: 594.68px;
}
</style>
