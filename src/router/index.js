import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Places from '../views/Places.vue'
import Contact from '../views/Contact.vue'
import Gallery from '../views/Gallery.vue'
import Landing_page from '../views/Landing_page.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/landingpage',
    name: 'Landing_page',
    component: Landing_page
  },
  {
    path: '/about',
    name: 'About',
    component:About
  },
  {
    path: '/places',
    name: 'Places',
    component: Places
  },
  {
    path: '/contact',
    name: 'Contact',
    component:Contact
  },
  {
    path: '/gallery',
    name: 'Gallery',
    component: Gallery
  }
]

const router = new VueRouter({
  routes
})

export default router
