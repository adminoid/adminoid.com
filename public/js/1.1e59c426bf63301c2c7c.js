webpackJsonp([1],{

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/pages/index/Cube.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Cube_CubeItem__ = __webpack_require__("./resources/assets/js/components/pages/index/Cube/CubeItem.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Cube_CubeItem___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Cube_CubeItem__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_session__ = __webpack_require__("./node_modules/vue-session/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_session___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vue_session__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



Vue.use(__WEBPACK_IMPORTED_MODULE_1_vue_session___default.a);

var ItemsLoop = function () {
    function ItemsLoop(items) {
        _classCallCheck(this, ItemsLoop);

        this.items = items;
        this.last = items.length - 1, this.curr = 0;
        this.next = 1;
        this.prev = this.last;
    }

    _createClass(ItemsLoop, [{
        key: 'setActive',
        value: function setActive(name) {
            var newIndex = _.indexOf(this.items, name);
            this.curr = newIndex;
            if (newIndex == 0) {
                this.next = newIndex + 1;
                this.prev = this.last;
            } else if (newIndex == this.last) {
                this.next = 0;
                this.prev = newIndex - 1;
            } else {
                this.next = newIndex + 1;
                this.prev = newIndex - 1;
            }
        }
    }, {
        key: 'getPrev',
        value: function getPrev() {
            return this.items[this.prev];
        }
    }, {
        key: 'getNext',
        value: function getNext() {
            return this.items[this.next];
        }
    }]);

    return ItemsLoop;
}();

/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            observer: new ItemsLoop(['reliability', 'frontend', 'backend', 'server', 'design']),
            $wrapper: {}
        };
    },
    components: { 'cube-item': __WEBPACK_IMPORTED_MODULE_0__Cube_CubeItem___default.a },
    mounted: function mounted() {
        this.init('#shape-gallery');
    },

    methods: {
        init: function init(selector) {
            this.$wrapper = $(selector);
            var sessionSavedActiveBlockName = this.$session.get('cube_current_block'),
                hasSessionSavedActiveBlock = !!sessionSavedActiveBlockName,
                $lastActiveBlock = this.$wrapper.find('.side.active');
            if (hasSessionSavedActiveBlock) {
                $lastActiveBlock.removeClass('active');
                var $actualActiveBlock = this.$wrapper.find('#' + sessionSavedActiveBlockName);
                $actualActiveBlock.addClass('active');
                this.$session.set('cube_current_block', name);
                this.observer.setActive(sessionSavedActiveBlockName);
            } else {
                var id = $lastActiveBlock.attr('id');
                this.$session.set('cube_current_block', name);
                this.observer.setActive(id);
            }
        },
        moveLeft: function moveLeft() {
            console.log('flipLeft');
            var self = this;
            console.info('Next: ' + self.observer.getPrev());
            this.$wrapper.shape({
                onChange: function onChange() {
                    self.$session.set('cube_current_block', this.id);
                    self.observer.setActive(this.id);
                }
            });
            this.$wrapper.shape('set next side', '.side.' + self.observer.getPrev()).shape('flip left');
        },
        moveUp: function moveUp() {
            console.log('flipDown');
            var self = this;
            console.info('Next: ' + self.observer.getPrev());
            this.$wrapper.shape({
                onChange: function onChange() {
                    self.$session.set('cube_current_block', this.id);
                    self.observer.setActive(this.id);
                }
            });
            this.$wrapper.shape('set next side', '.side.' + self.observer.getNext()).shape('flip down');
        },
        moveDown: function moveDown() {
            console.log('flipUp');
            var self = this;
            console.info('Next: ' + self.observer.getPrev());
            this.$wrapper.shape({
                onChange: function onChange() {
                    self.$session.set('cube_current_block', this.id);
                    self.observer.setActive(this.id);
                }
            });
            this.$wrapper.shape('set next side', '.side.' + self.observer.getPrev()).shape('flip up');
        },
        moveRight: function moveRight() {
            console.log('flipRight');
            var self = this;
            console.info('Next: ' + self.observer.getNext());
            this.$wrapper.shape({
                onChange: function onChange() {
                    self.$session.set('cube_current_block', this.id);
                    self.observer.setActive(this.id);
                }
            });
            this.$wrapper.shape('set next side', '.side.' + self.observer.getNext()).shape('flip right');
        }
    }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/pages/index/Cube/CubeItem.vue":
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
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/pages/index/Cube.vue")
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
Component.options.__file = "resources/assets/js/components/pages/index/Cube.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-23f7d234", Component.options)
  } else {
    hotAPI.reload("data-v-23f7d234", Component.options)
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
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/pages/index/Cube/CubeItem.vue")
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
Component.options.__file = "resources/assets/js/components/pages/index/Cube/CubeItem.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-dc4a759a", Component.options)
  } else {
    hotAPI.reload("data-v-dc4a759a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});