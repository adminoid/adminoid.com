
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

import Vue from "vue";

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

import TopMenu from './components/TopMenu'
import FeedbackForm from './components/FeedbackForm'
import WriteLink from './components/WriteLink'
import mitt from "mitt";

Vue.prototype.$bus = mitt();

Vue.component("clouds", function (resolve) {
  require(['./components/pages/index/Clouds'], resolve)
});

Vue.component("cube", function (resolve) {
  require(['./components/pages/index/Cube'], resolve)
});

Vue.component("clock", function (resolve) {
  require(['./components/pages/price/Clock.vue'], resolve)
});

Vue.component("tools-block", function (resolve) {
  require(['./components/pages/tools/ToolsBlock.vue'], resolve)
});

Vue.component("zoom", function (resolve) {
  require(['./components/pages/portfolio/Zoom.vue'], resolve)
});

Vue.component("video-background", function (resolve) {
  require(['./components/pages/portfolio/VideoBackground.vue'], resolve)
});

Vue.component("half-rotate", function (resolve) {
  require(['./components/pages/workflow/HalfRotate.vue'], resolve)
});

window.Vue = Vue;

const app = new window.Vue({

  el: '#app',

  components: {
    TopMenu, FeedbackForm, WriteLink
  },

  data () {
    return {
      write: false,
    }
  },

});

app
  .$on('go-write', () => {
    let scriptEle = document.createElement("script");
    scriptEle.setAttribute("src", `https://www.google.com/recaptcha/api.js?render=${window.rcKey}`);
    scriptEle.addEventListener("load", () => {
        // here must get recaptcha code
        grecaptcha.ready(function() {
            grecaptcha.execute(window.rcKey, {action: 'submit'}).then((token) => {
                // send mitt event
                Vue.prototype.$bus.emit("rc-loaded", token);
            });
        });
    });
    scriptEle.addEventListener("error", (ev) => {
        console.log("Error on loading file", ev);
    });
    document.body.appendChild(scriptEle);
    app.write = true;
    $('#super-modal').modal({
      transition: 'horizontal flip',
      onHide: function(){
        setTimeout(() => {
          app.write = false;
        }, 333);
      },
    }).modal('show');
  })
  .$on('stop-write', () => {
    setTimeout(() => {
      app.write = false;
    }, 333);
  });
