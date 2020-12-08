<template>
  <div class="cardpage">
    <mdb-card v-for="place in places" :key="place.id">
      <mdb-card-image :src="place.image"></mdb-card-image>
      <mdb-card-body style="color:white; white-space: normal;">
        <mdb-card-title style="color:white;white-space: normal;">{{
          place.name
        }}</mdb-card-title>
        <mdb-card-text style="color:white;white-space: normal;">{{
          place.text
        }}</mdb-card-text>
        <a :href="place.description">MORE</a>
      </mdb-card-body>
    </mdb-card>
  </div>
</template>

<script>
import {
  mdbCard,
  mdbCardImage,
  mdbCardBody,
  mdbCardTitle,
  mdbCardText,
  mdbBtn,
} from "mdbvue";
export default {
  name: "CardPage",
  components: {
    mdbCard,
    mdbCardImage,
    mdbCardBody,
    mdbCardTitle,
    mdbCardText,
    mdbBtn,
  },
  data() {
    return {
      places: [
        {
          id: "0",
          image:
            "https://i.pinimg.com/564x/dd/a5/35/dda535db2ac7026a41e18a36812b4bc3.jpg",
          name: "ALTA",
          description: "https://www.alta.ba",
          text:
            "Alta is located in the heart of Sarajevo's central business district and features six levels of retail stores that include a lower level and two underground parking levels. Modern glass facades on multiple entrances offer openness to the main entrance square and the main road across from the BiH Parliament building. The upper floors and rooftop restaurants offer views of the picturesque valley behind. The exterior facades have complex intertwined concrete slabs that symbolize the Bosnian junction of the entrance to the old commercial part on the one hand and modern development on the other. ",
        },
        {
          id: "1",
          image:
            "https://i.pinimg.com/564x/88/d0/c3/88d0c3111405a1c3c2f59faa121aae0d.jpg",
          name: "BAŠČARŠIJA",
          description: "http://www.bbicentar.ba/bh/",
          text:
            "Bascarsija is old Sarajevo`s bazaar, and historical and cultural center of the city. It was built in the 15th century when in this area were 45 bazaars. People from Sarajevo eventually merged the whole area and called it Bascarsija. ",
        },
        {
          id: "2",
          image:
            "https://i.pinimg.com/564x/70/21/53/7021533c9f7e88ba62436d5b8d134360.jpg",
          name: "BBI",
          text:
            "BBI center is a shopping and business center in the center of Sarajevo, built on the site of the former department store Sarajka. It was officially opened on April 6, 2009. It spreads over 43,000 square meters of office space with 464 parking spaces spread over 3 floors.",
        },
        {
          id: "3",
          image:
            "https://i.pinimg.com/564x/37/d3/e3/37d3e3dd815b47426b5ee7949e6968d1.jpg",
          name: "BKC",
          description: "https://bkc.ba/",
          text:
            "Bosnian Cultural Center, the magnificent Jewish (Sephardic) Temple, today the temple of culture is located in the center of Sarajevo, the capital of Bosnia and Herzegovina.Built according to the project of the architect Rudolf Lubinski, the temple was completed in 1930, and was characterized by, at that time, the third largest copper dome in Europe.",
        },
        {
          id: "4",
          image:
            "https://i.pinimg.com/564x/db/7e/f4/db7ef417226ff6f12813deff3ce5f41c.jpg",
          name: "The Cathedral of the Heart of Jesus ",
          description: "https://katedrala-sarajevo.com/",
          text:
            "The Cathedral of the Heart of Jesus is the church of the Vrhbosna Archdiocese, built in 1889 in the neo-Gothic style. The cathedral was a completely new and authentic building. The interior of the church was richly decorated, and the famous Italian-German painter Alexander Maximilian Seitz was in charge of the fresco painting. The cathedral is located in the old part of Sarajevo.",
        },
        {
          id: "5",
          image:
            "https://i.pinimg.com/564x/88/69/7e/88697e39f3f505aa8c0a7c6a068d2b63.jpg",
          name: "ART GALLERY",
          description: "https://ugbih.ba/",
          text:
            "The Art Gallery of Bosnia and Herzegovina, founded in 1946, studies and preserves over 6,000 works of modern and contemporary art, representing, from the point of view of visual art, the oldest and most important museum institution in Bosnia and Herzegovina. The building in which it is located today was built around 1912 as a department store of Yeshua and Mojca Salom. It is presumed to be the work of Josip Vancaš. ",
        },
        {
          id: "6",
          image: "",
          name: "VIJEĆNICA",
          description: "https://www.vijecnica.ba/",
          text:
            "Sarajevo City Hall, known as Vijećnica, is located in the city of Sarajevo. It was designed in 1891 by the Czech architect Karel Pařík, but criticisms by the minister, Baron Benjamin Kallay, caused him to stop working on the project. It was initially the largest and most representative building of the Austro-Hungarian period in Sarajevo and served as the city hall. On 25 August 1992, Serbian shelling during the Siege of Sarajevo caused the complete destruction of the library; among the losses were about 700 manuscripts and incunabula and a unique collection of Bosnian serial publications, some from the middle of the 19th century Bosnian cultural revival",
        },
        {
          id: "8",
          image:
            "https://i.pinimg.com/564x/69/87/55/6987551395f0a33e1d57d3c90e54e65f.jpg",
          name: "HOTEL EUROPE",
          text:
            "Hotel Europe - which has been operating under the name Hotel Europe since 2008 - is the first modern hotel built in Sarajevo. It was built in 1882 by Gligorije Jeftanović, the zenjil of Sarajevo, as the official paper calls it on that occasion. The street in which the hotel was built was also named after him. The hotel was designed by Karlo Paržik, and was officially opened on December 12, 1882.",
        },
        {
          id: "9",
          image:
            "https://i.pinimg.com/564x/9d/4b/3d/9d4b3d6bf6489715d309f4e40b145642.jpg",
          name: "NATIONAL MUSEUM",
          text:
            "It was established in 1888, having originally been conceived around 1850. In 1913, the museum building was expanded by the Czech architect Karel Pařík who designed a structure of four symmetric pavilions with a facade in the Italian Renaissance Revival style. The four pavilions contain the departments of archaeology, ethnology, natural history, and a library.",
        },
        {
          id: "10",
          image:
            "https://i.pinimg.com/564x/86/f4/73/86f473a3ed83fd95a345f86b9a36664b.jpg",
          name: "BEZISTAN",
          description:
            "https://hr.wikipedia.org/wiki/Gazi_Husrev-begov_bezistan",
          text:
            "Gazi Husrev-beg's bezistan is one of the preserved bezistan in Sarajevo, which still serves its purpose-trade. Bezistan is part of the endowment of Gazi Husrev-beg. It was built in 1555 in the immediate vicinity of the Kursumli Madrasa, the Bey's Mosque and the Clock Tower, with which it is connected by an eastern entrance. It is rectangular in shape with entrances, which border a 109 m long street in which small shops are located. ",
        },
        {
          id: "11",
          image:
            "https://i.pinimg.com/564x/dd/37/ab/dd37ab486cd56c6a38a3fc3761ae5541.jpg",
          name: "CAFFEE ĆEJF",
          description: "https://www.instagram.com/ministryofcejf/?hl=hr",
          text:
            "Ministry of Ćejf is a coffee house located a short walk from Sebilj, in the Kovači street, Sarajevo’s most famous landmark. The cafe was opened by Reshad who wanted the cafe to be his base where he would rest, enjoy and he wanted it to be in the bazaar. Reshad has arranged a cafe in his interesting style, which serves Bosnian, Arabic, but also Italian coffee, various homemade juices, salep, baklava and other Bosnian cakes.",
        },
      ],
    };
  },
};
</script>

<style scoped>
* {
  margin: 5px;
}
.cardpage {
  width: 100%;
  align-content: center;
  align-items: center;
  margin-top: 80%;
}
.card {
  align-content: center;
  display: inline-flex;
  flex-direction: row;
  background: rgba(0, 0, 0, 0.8);
  align-content: flex-start;
  flex-wrap: nowrap;
}

.img-fluid {
  width: 666px;
  height: 500px !important;
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
  font-size: 14px;
  font-weight: bold;
  padding: 11px 22px;
  top: 90%;
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
