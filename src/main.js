import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap';
import 'popper.js';
import './assets/app.scss';
import jQuery from 'jquery';

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Install BootstrapVue
Vue.use(BootstrapVue)

Vue.use(IconsPlugin)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

window.$ = window.jQuery = jQuery;

Vue.component('Footer', require('./components/Footer.vue').default);
Vue.component('NavBar', require('./components/NavBar-home.vue').default);
Vue.component('CardPage', require('./components/CardPage.vue').default);
Vue.component('Gallery-nature', require('./components/Gallery-nature.vue').default);
Vue.component('Gallery-nlife', require('./components/Gallery-nlife.vue').default);
Vue.component('Gallery-culture', require('./components/Gallery-culture.vue').default);
Vue.component('Gallery-religion', require('./components/Gallery-religion.vue').default);



Vue.use(BootstrapVue)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
