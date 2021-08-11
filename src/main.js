import Vue from 'vue'
import App from './App.vue'
import "./assets/css/tailwind.css"
import VueRouter from 'vue-router'

import store from './store/store'


import About from './components/About'
import Home from './components/Home'
import Works from './components/Works'
import Contact from './components/Contact'
import Introduction from './components/Intro'



Vue.config.productionTip = false

Vue.use(VueRouter);

const routes = [

  { path: '/about', component: About},
  { path: '/home', component: Home},
  { path: '/works', component: Works},
  { path: '/contact', component: Contact},
  { path: '/introduction', component: Introduction},


];

const router = new VueRouter({
  routes, 
  mode: 'history'
});

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
