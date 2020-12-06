<template>
  <div class="contact">

    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
      integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN"
      crossorigin="anonymous"
    />
      <div class="content">
        <h2>Contact Us</h2>
        <p>If you have any questions or suggestions contact us. <br> We are happy to help</p>
      </div>

      <div class="container">
        <div class="contactInfo">
          <div class="box">
            <div class="icon">
              <i class="fa fa-map-marker" aria-hidden="true"></i>
            </div>
            <div class="text">
              <h3>Adress</h3>
              <p>Other Dimension</p>
            </div>
          </div>

          <div class="box">
            <div class="icon">
              <i class="fa fa-envelope" aria-hidden="true"></i>
            </div>
            <div class="text">
              <h3>Email</h3>
              <p>info@sarajevowalkthrough.ba</p>
            </div>
          </div>

          <div class="box">
            <div class="icon">
              <i class="fa fa-phone" aria-hidden="true"></i>
            </div>
            <div class="text">
              <h3>Phone</h3>
              <p>+38766879627</p>
            </div>
          </div>
        </div>

        <div class="contactForm">
          <form>
            <h2>Send Message</h2>
            <div class="inputBox">
              <input type="text" name="" required="required" />
              <span>Name</span>
            </div>

            <div class="inputBox">
              <input type="text" name="" required="required" />
              <span>Email</span>
            </div>

            <div class="inputBox">
              <textarea required="required"></textarea>
              <span>Your message...</span>
            </div>

              <div class="inputBox">
              <button onclick="window.alert('Radit će nekad')">Submit</button>
            </div>
          </form>
        </div>
      </div>


        

  </div>
</template>

<script>
import Footer from '../components/Footer.vue'
import NavBarHome from '../components/NavBar-home.vue'

export default {
  components: { Footer, NavBarHome },
	name:'Contact',
	props:{
		data:String,
		msg:String
	}
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}
.contact {
  position: relative;
  min-height: 100vh;
  padding: 50px 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background:url('../assets/bg.png');
  background-size: cover;
}
.contact .content {
  max-width: 800px;
  text-align: center;
}
.contact .content h2 {
  font-size: 36px;
  font-weight: 500;
  color: #fff;
}
.contact .content p {
  font-weight: 300;
  color: white;
}
.container {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  background:rgba(0,0,0,0.5);
  border-radius:15px;
}
.container .contactInfo {
  width: 50%;
  display: flex;
  flex-direction: column;
}
.container .contactInfo .box {
  position: relative;
  padding: 20px 0;
  display: flex;
}
.container .contactInfo .box .icon {
  min-width: 60px;
  height: 60px;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  font-size: 22px;
}
.container .contactInfo .box .text {
  display: flex;
  margin-left: 20px;
  font-size: 16px;
  color: white;
  flex-direction: column;
  font-weight: 300;
}
.container .contactInfo .box .text h3 {
  font-weight: 500;
  color: #e4af77;
}
.contactForm {
  width: 50%;
  padding: 40px;
  background:rgba(0,0,0,0.2);
}
.contactForm h2 {
  font-size: 30px;
  color: #e4af77;
  font-weight: 500;
}
.contactForm .inputBox {
  position: relative;
  width: 100%;
  margin-top: 10px;
}
.contactForm .inputBox input,
.contactForm .inputBox textarea {
  width: 100%;
  padding: 6px 0;
  font-size: 16px;
  margin: 10px 0;
  border: none;
  border-bottom: 2px solid #333;
  outline: none;
  resize: none;
  border-radius:9px;
}
.contactForm .inputBox span {
  position: absolute;
  left: 10px;
  padding: 5px 0;
  font-size: 16px;
  margin: 10px 0;
  pointer-events: none; /*So it won't overwrite placeholder*/
  transition: 0.5s;
  color: #666;
}
.contactForm .inputBox input:focus ~ span,
.contactForm .inputBox input:valid ~ span,
.contactForm .inputBox textarea:focus ~ span,
.contactForm .inputBox textarea:valid ~ span {
  color: #e91e63;
  font-size: 12px;
  transform: translateY(-20px);
}
.contactForm .inputBox input [type="submit"] {
  width: 100px;
  background: #e4af77;
  color: white;
  border: none;
  cursor: pointer;
  padding: 10px;
  font-size: 18px;
}
button{
  	box-shadow: 0px 0px 0px 0px #1c1b18;
	background:linear-gradient(to bottom,  #e4af77 5%, #ccc2a6 100%);
	background-color:#eae0c2;
	border-radius:13px;
	border:1px solid #333029;
	display:inline-block;
	cursor:pointer;
	color:#505739;
  font-family: "Poppins", sans-serif;
	font-size:14px;
	font-weight:bold;
	padding:11px 22px;
	text-decoration:none;
align-items: center;
  align-content: center;
	text-shadow:0px -1px 14px #ffffff;
}
button:hover{
  	background:linear-gradient(to bottom, #ccc2a6 5%, #eae0c2 100%);
	background-color:#ccc2a6;
}
button:active{
  	position:relative;
	top:1px;
}
.footer-edit{
  top:100% !important;
}
@media (max-width: 900px) {
  .contact {
    padding: 50px;
  }
  .container {
    flex-direction: column;
  }
  .container .contactInfo {
    margin-bottom: 40px;
  }
  .container .contactInfo,
  .contactForm {
    width: 100%;
  }
}
</style>
