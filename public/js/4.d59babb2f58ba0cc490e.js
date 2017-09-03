webpackJsonp([4],{

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/pages/process/HalfRotate.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__("./node_modules/jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);


var framePaddingAndBorder = 40; // 40 it is a padding and border
var heightAngleLimit = 10;
var widthAngleLimit = 5;
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      initData: {
        width: 0,
        height: 0,
        leftOffset: 0,
        topOffset: 0
      },
      cursor: {
        x: 0,
        y: 0
      },
      angles: {
        vertical: 0,
        horizontal: 0
      },
      $block: {},
      moved: false
    };
  },
  created: function created() {
    window.addEventListener('resize', this.makeInitData);
  },
  mounted: function mounted() {
    this.makeInitData();
  },
  beforeDestroy: function beforeDestroy() {
    window.removeEventListener('resize', this.makeInitData);
  },
  methods: {
    makeInitData: function makeInitData() {
      var $el = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this.$el);
      this.$block = $el;
      this.initData.leftOffset = $el.offset().left;
      this.initData.topOffset = $el.offset().top;
      this.initData.width = $el.width() + framePaddingAndBorder;
      this.initData.height = $el.height() + framePaddingAndBorder;
    },
    onHover: function onHover(e) {
      this.moved = true;
      this.cursor.x = e.pageX;
      this.cursor.y = e.pageY;
    },
    onLeave: function onLeave() {
      this.moved = false;
      this.widthAngle = 0;
      this.heightAngle = 0;
    }
  },
  computed: {
    widthAngle: function widthAngle() {
      if (!this.moved) return 0;
      var percent = parseInt(Math.round((this.cursor.x - this.initData.leftOffset) / (this.initData.width / 100)), 10);
      var factor = percent / 100;
      var angle;
      if (percent > 0 && percent <= 50) {
        var angleFactor = 1 - factor * 2;
        angle = -(widthAngleLimit * angleFactor);
      } else if (percent > 50 && percent <= 100) {
        var _angleFactor = (factor - 0.5) * 2;
        angle = widthAngleLimit * _angleFactor;
      }
      return -angle || 0;
    },
    heightAngle: function heightAngle() {
      if (!this.moved) return 0;
      var percent = parseInt(Math.round((this.cursor.y - this.initData.topOffset) / (this.initData.height / 100)), 10);
      var factor = percent / 100;
      var angle;
      if (percent > 0 && percent <= 50) {
        var angleFactor = 1 - factor * 2;
        angle = -(heightAngleLimit * angleFactor);
      } else if (percent > 50 && percent <= 100) {
        var _angleFactor2 = (factor - 0.5) * 2;
        angle = heightAngleLimit * _angleFactor2;
      }
      return angle || 0;
    }
  }
});

/***/ }),

/***/ "./resources/assets/js/components/pages/process/HalfRotate.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")(
  /* script */
  __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/pages/process/HalfRotate.vue"),
  /* template */
  null,
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/petja/PhpstormProjects/adminoid.com/resources/assets/js/components/pages/process/HalfRotate.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-03535c3b", Component.options)
  } else {
    hotAPI.reload("data-v-03535c3b", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});