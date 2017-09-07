webpackJsonp([4],{

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/pages/price/Clock.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_gsap__ = __webpack_require__("./node_modules/gsap/TweenMax.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_gsap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_gsap__);


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      timeline: {},
      animation: {
        leftValue: 0,
        minuteValue: 0,
        hourValue: 0
      }
    };
  },
  mounted: function mounted() {
    this.compileTimeline();
  },
  methods: {
    onHover: function onHover() {
      this.timeline.pause().play();
    },
    compileTimeline: function compileTimeline() {
      var timeline = new __WEBPACK_IMPORTED_MODULE_0_gsap__["TimelineLite"]({ paused: true });
      timeline.add(__WEBPACK_IMPORTED_MODULE_0_gsap__["TweenLite"].fromTo(this.animation, 0.5, {
        leftValue: 0,
        minuteValue: 0,
        hourValue: 0
      }, {
        leftValue: 251,
        minuteValue: 360,
        hourValue: 30
      }), 0);
      timeline.add(__WEBPACK_IMPORTED_MODULE_0_gsap__["TweenLite"].fromTo('g#work-text', 0.1, { fill: 'rgb(18, 84, 176)' }, { fill: 'rgb(255, 255, 255)' }), 0.1);
      this.timeline = timeline;
    },
    onLeave: function onLeave() {
      this.timeline.pause().reverse(0);
    }
  },
  computed: {
    pieDashArray: function pieDashArray() {
      return (this.animation.leftValue ? this.animation.leftValue : 0) + ' 251';
    },
    minuteTransform: function minuteTransform() {
      return 'rotate(' + (this.animation.minuteValue ? this.animation.minuteValue : 0) + ', 6, 78)';
    },
    hourTransform: function hourTransform() {
      return 'translate(-15,3) rotate(' + (this.animation.hourValue ? this.animation.hourValue : 0) + ', 21, 75)';
    }
  }
});

/***/ }),

/***/ "./resources/assets/js/components/pages/price/Clock.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")(
  /* script */
  __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/pages/price/Clock.vue"),
  /* template */
  null,
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/petja/PhpstormProjects/adminoid.com/resources/assets/js/components/pages/price/Clock.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2a95cb2a", Component.options)
  } else {
    hotAPI.reload("data-v-2a95cb2a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});