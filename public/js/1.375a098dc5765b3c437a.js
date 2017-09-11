webpackJsonp([1],{

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/pages/index/Cube.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Cube_CubeItem__ = __webpack_require__("./resources/assets/js/components/pages/index/Cube/CubeItem.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Cube_CubeItem___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Cube_CubeItem__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var ItemLoop = function ItemLoop() {
    _classCallCheck(this, ItemLoop);

    this.items = [{ 'index': 0, 'selector': '.side.reliability' }, { 'index': 1, 'selector': '.side.frontend' }, { 'index': 2, 'selector': '.side.backend' }, { 'index': 3, 'selector': '.side.server' }, { 'index': 4, 'selector': '.side.design' }];
    //            this.current =
};

/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            shapeEl: '#shape-gallery'
        };
    },
    components: { 'cube-item': __WEBPACK_IMPORTED_MODULE_0__Cube_CubeItem___default.a },
    methods: {
        flipLeft: function flipLeft() {
            // TODO: https://stackoverflow.com/questions/12505598/get-next-key-value-pair-in-an-object
            $('#shape-gallery').shape('set next side', '.reliability.side');
            $('#shape-gallery').shape('flip left');
        },
        flipUp: function flipUp() {
            $('#shape-gallery').shape('flip up');
        },
        flipDown: function flipDown() {
            $('#shape-gallery').shape('flip down');
        },
        flipRight: function flipRight() {
            $('#shape-gallery').shape('flip right');
        }
    }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/pages/index/Cube/CubeItem.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            header: '.ui.top.left.attached.label',
            text: 'div.text',
            $header: {},
            $text: {}
        };
    },
    mounted: function mounted() {
        this.$header = $(this.$el).find(this.header);
        this.$text = $(this.$el).find(this.text);
    },

    methods: {
        onHover: function onHover() {
            this.$header.fadeTo('fast', 0.45);
            this.$text.fadeTo('fast', 0.45);
        },
        onUnhover: function onUnhover() {
            this.$header.fadeTo('fast', 1);
            this.$text.fadeTo('fast', 1);
        }
    }
});

/***/ }),

/***/ "./resources/assets/js/components/pages/index/Cube.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")(
  /* script */
  __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/pages/index/Cube.vue"),
  /* template */
  null,
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/petja/PhpstormProjects/adminoid.com/resources/assets/js/components/pages/index/Cube.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-346f177f", Component.options)
  } else {
    hotAPI.reload("data-v-346f177f", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/js/components/pages/index/Cube/CubeItem.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")(
  /* script */
  __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/pages/index/Cube/CubeItem.vue"),
  /* template */
  null,
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/petja/PhpstormProjects/adminoid.com/resources/assets/js/components/pages/index/Cube/CubeItem.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-74454448", Component.options)
  } else {
    hotAPI.reload("data-v-74454448", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});