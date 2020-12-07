<template>
  <div class="places">
        <NavBar></NavBar>
    <div class="about-container">


      <div class="about-text">
        <h1>What are places you want to visit?</h1>
        <h4>Check out this Google map and find all the places from down bellow.</h4>
      </div> 
      <div class="formaps">
              <iframe src="https://www.google.com/maps/embed?pb=!1m21!1m12!1m3!1d92063.36925631024!2d18.34303647948212!3d43.85623721243627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m6!3e6!4m0!4m3!3m2!1d43.856259!2d18.413076!5e0!3m2!1shr!2sba!4v1607130764152!5m2!1shr!2sba" width="700" height="550" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
</div>
    </div>

 <div class="cardpage">
    <CardPage></CardPage>
    </div>
    <Footer></Footer>
  </div>
</template>
<script>
import Footer from '../components/Footer.vue';
import Background from'../components/Background.vue';
export default {
    name:"Places",
    components:{Footer},
};
</script>
<style scoped>
.places {
width:80%;
height:100%;
top:20%;
margin:auto;
  align-items: center;
  align-content:center;
   
    object-fit: cover;

}
.about-container {
  width: 70%;
  height: 330px;
left:13%;
  background: #FFFAFA;
  border-radius: 20px;
  box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.2);

 align-items:center;
 text-align: center;
display:flex;
  margin: -2% auto 10 20;
  position: absolute;
  justify-content: space-evenly;
top:10%;
   height: 350px;
}
.formaps{
  margin:0;
top:80%;
  position:absolute;
  align-content: center;
  align-items: center;
 

}






</style>
