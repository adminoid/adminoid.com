
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

import TopMenu from './components/TopMenu'
import FeedbackForm from './components/FeedbackForm'

Vue.component("clouds", function (resolve) {
  require(['./components/pages/index/Clouds'], resolve)
})

Vue.component("cube", function (resolve) {
  require(['./components/pages/index/Cube'], resolve)
})

Vue.component("clock", function (resolve) {
  require(['./components/pages/price/Clock.vue'], resolve)
})

Vue.component("tools-block", function (resolve) {
  require(['./components/pages/tools/ToolsBlock.vue'], resolve)
})

Vue.component("zoom", function (resolve) {
  require(['./components/pages/portfolio/Zoom.vue'], resolve)
})

Vue.component("half-rotate", function (resolve) {
  require(['./components/pages/process/HalfRotate.vue'], resolve)
})

const app = new Vue({
  el: '#app',
  components: {
    TopMenu, FeedbackForm
  }
})
