<template>
  <div class="gallery">
    <div class="gallery-content">
      <div class="nl">
        <div class="text-content">
          <h2>Things to Know About Night clubs in Sarajevo</h2>
          <h3>
            Sarajevo’s nightclubs differ from what you may be familiar withback
            at home, and it’s worth mentioning a few things to prepare yourself.
            Expect lots of cigarette smoke in a small enclosed area. <br />
            The level of service varies too, and you could find yourself getting
            the true Yugoslavian experience with stern waiters who seem always
            toignore you.
          </h3>
        </div>
        <div class="image_contetnt">
          <img src="" /> <Gallery-nlife></Gallery-nlife>
        </div>
      </div>

      <div class="religion">
        <div class="text-content">
          <h2>European Jerusalem</h2>
          <h3>
            What characterizes Sarajevo speaks of the very welcome and warmth
            that this city offers is that throughout its history they have not
            brought back anyone who found themselves in trouble. The Sephardim
            arrived from Spain and Portugal at the end of the 15th century,
            while the Ashkenazi from Central Europe joined in the 19th
            century.<br />Sarajevo in itself represents a religious mosaic made
            up of traces of both Catholicism and Orthodoxy and Islam and
            Judaism. It is a combination of diversity, multiethnicity,
            multiculturalism and multireligiousness of the center of Europe and
            can be an example to many other cities. The very indication of this
            is that in just a few hundred meters we can come across the
            religious objects of all 3/4 monotheistic religions. With this very
            phenomenon, the azan and the church bells can be heard at the same
            time.
          </h3>
          <div class="image_contetnt">
            <img src="" /> <Gallery-religion></Gallery-religion>
          </div>
        </div>
      </div>
      <!--


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
      -->
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
  width: 100%;
  justify-content: center;
  align-items: center;
  align-content: center;
  font-family: "Poppins", sans-serif;
}
.gallery-content {
  width: 80%;
  height: 100%;
  margin: 30px;
}
.nl {
  width: 100%;
  height: 100vh;
  display: flex;
}
.text-content {
  display: flex;
  flex-direction: column;
  width: 60%;
  position: relative;
  color: white;
  font-family: "Poppins", sans-serif;
}
.text-content h2 {
  font-weight: bold;
  width: 100%;
  font-size: 50px;
}
.text-content h3 {
  font-size: 20px;
  width: 70%;
}
.nl .image_contetnt {
  margin-top: 0px;
  float: right;
  height: 100%;
  width: 60%;
  top: 0;
}
.religion {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction:column;
 
}
.religion .text-content h3{
   text-align: right;
     float: right;
     margin-left:100%;
       font-size: 20px;
     }
.religion .text-content h2 {
  float: right;
  display:flex;
  text-align: right;
   margin-left:100%;
     width: 100%;
       font-size: 50px;
 

}
.religion .image_contetnt {
  float: left;
 height:100%;
  width: 60%;
  position:absolute;

}
</style>
