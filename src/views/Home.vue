<template>
  <div class="home">
	<div class="carousel slide" data-ride="carousel" id="carouselExampleIndicators">
		<ol class="carousel-indicators">
			<li class="active" data-slide-to="0" data-target="#carouselExampleIndicators"></li>
			<li data-slide-to="1" data-target="#carouselExampleIndicators"></li>
			<li data-slide-to="2" data-target="#carouselExampleIndicators"></li>
		</ol>
		<div class="carousel-inner">
			<div class="carousel-item active">
				<img alt="First slide" class="d-block w-100" src="../assets/bg.png">
				<div class="carousel-caption d-none d-md-block">
					<h5 class="animated bounceInRight" style="animation-delay: 1s">Sarajevo Walkthrough</h5>
					<p class="animated bounceInLeft" style="animation-delay: 2s">We are new organization on market, made for encouraging and promoting tourisam in Sarajevo, Bosnia and Herzegovina.</p>
					<p class="animated bounceInRight" style="animation-delay: 3s"><a href="../#/about">More Info</a></p>
				</div>
			</div>
			<div class="carousel-item">
				<img alt="Second slide" class="d-block w-100" src="../assets/cor2.jpg">
				<div class="carousel-caption d-none d-md-block">
					<h5 class="animated slideInDown" style="animation-delay: 1s">Explore Sarajevo</h5>
					<p class="animated fadeInUp" style="animation-delay: 2s">Check out some of the places Sarajevo offers, we promise you will be amazaed.</p>
					<p class="animated zoomIn" style="animation-delay: 3s"><a href="../#/gallery">More Info</a></p>
				</div>
			</div>
			<div class="carousel-item">
				<img alt="Third slide" class="d-block w-100" src="../assets/cor3.jpg">
				<div class="carousel-caption d-none d-md-block">
					<h5 class="animated zoomIn" style="animation-delay: 1s">Contact Us</h5>
					<p class="animated fadeInLeft" style="animation-delay: 2s">If you want to be a part of our group or you have some quoestions-contact us</p>
					<p class="animated zoomIn" style="animation-delay: 3s"><a href="../#/contact">More Info</a></p>
				</div>
			</div>
		</div><a class="carousel-control-prev" data-slide="prev" href="#carouselExampleIndicators" role="button"><span aria-hidden="true" class="carousel-control-prev-icon"></span> <span class="sr-only">Previous</span></a> <a class="carousel-control-next" data-slide="next" href="#carouselExampleIndicators" role="button"><span aria-hidden="true" class="carousel-control-next-icon"></span> <span class="sr-only">Next</span></a>
	</div>
	
	<Footer></Footer>
  </div>
</template>

<script>
import Footer from '../components/Footer.vue'
export default {
  components: { Footer },
	name:'Home',
	props:{
		data:String,
		msg:String
	}, methods:{
		openpage()
		{
			window.open('../#/places')
			}
	}
}
</script>

<style scoped>

.carousel-item {
	height: 100vh;
	min-height: 300px;
}
.carousel-caption {
	bottom: 320px;
}
.carousel-caption h5 {
	font-size: 45px;
	text-transform: uppercase;
	letter-spacing: 2px;
	margin-top: 25px;
	font-family: merienda;
}
.carousel-caption p {
	width: 60%;
	margin: auto;
	font-size: 18px;
	line-height: 1.9;
	font-family: poppins;
}
.carousel-caption a {
	text-transform: uppercase;
	background: #262626;
	padding: 10px 30px;
	display: inline-block;
	color: #fff;
	margin-top: 15px;
}
.navbar-nav a {
	font-family: poppins;
	font-size: 18px;
	text-transform: uppercase;
	font-weight: bold;
}
.navbar-light .navbar-brand {
	color: #fff;
	font-size: 25px;
	text-transform: uppercase;
	font-weight: bold;
	letter-spacing: 2px;
}
.navbar-light .navbar-nav .active>.nav-link, .navbar-light .navbar-nav .nav-link.active, .navbar-light .navbar-nav .nav-link.show, .navbar-light .navbar-nav .show>.nav-link {
	color: #fff;
}
.navbar-light .navbar-nav .nav-link {
	color: #fff;
}
.navbar-nav {
	text-align: center;
}
.nav-link {
	padding: .2rem 1rem;
}
.nav-link.active, .nav-link:focus {
	color: #fff;
}
.navbar-toggler {
	padding: 1px 5px;
	font-size: 18px;
	line-height: 0.3;
	background: #fff;
}
.navbar-light .navbar-nav .nav-link:focus, .navbar-light .navbar-nav .nav-link:hover {
	color: #fff;
}
.w-100 {
	height: 100vh;
}
@media only screen and (max-width: 767px) {
	.navbar-nav.ml-auto {
		background: rgba(0, 0, 0, 0.5);
	}
	.navbar-nav a {
		font-size: 14px;
		font-weight: normal;
	}
}

</style>
