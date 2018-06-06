webpackJsonp([3],{

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/pages/workflow/HalfRotate.vue":
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

/***/ "./resources/assets/js/components/pages/workflow/HalfRotate.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/pages/workflow/HalfRotate.vue")
/* template */
var __vue_template__ = null
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/pages/workflow/HalfRotate.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0624dd8c", Component.options)
  } else {
    hotAPI.reload("data-v-0624dd8c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});