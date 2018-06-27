webpackJsonp([0],{

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
        this.last = items.length - 1;
        this.curr = 0;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3BhZ2VzL2luZGV4L0N1YmUudnVlIiwid2VicGFjazovLy9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvcGFnZXMvaW5kZXgvQ3ViZS9DdWJlSXRlbS52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3BhZ2VzL2luZGV4L0N1YmUudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9wYWdlcy9pbmRleC9DdWJlL0N1YmVJdGVtLnZ1ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7O0lBQ0EsUztBQUNBO0FBQUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O2tDQUNBLEksRUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUhBLE1BSUE7QUFDQTtBQUNBO0FBQ0EsYUFIQSxNQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztrQ0FDQTtBQUNBO0FBQ0E7OztrQ0FDQTtBQUNBO0FBQ0E7Ozs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBLHFDQUNBLGFBREEsRUFFQSxVQUZBLEVBR0EsU0FIQSxFQUlBLFFBSkEsRUFLQSxRQUxBLEVBREE7QUFRQTtBQVJBO0FBVUEsS0FaQTtBQWFBLHVGQWJBO0FBY0EsV0FkQSxxQkFjQTtBQUNBO0FBQ0EsS0FoQkE7O0FBaUJBO0FBQ0EsWUFEQSxnQkFDQSxRQURBLEVBQ0E7QUFDQTtBQUNBO0FBQUEsZ0JBQ0EsMERBREE7QUFBQSxnQkFFQSxxREFGQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBTkEsTUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FqQkE7QUFrQkEsZ0JBbEJBLHNCQWtCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUNBLEtBREEsQ0FDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkEsYUFEQTtBQU9BLDBCQUNBLEtBREEsQ0FDQSxlQURBLEVBQ0Esa0NBREEsRUFFQSxLQUZBLENBRUEsV0FGQTtBQUdBLFNBaENBO0FBaUNBLGNBakNBLG9CQWlDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUNBLEtBREEsQ0FDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkEsYUFEQTtBQU9BLDBCQUNBLEtBREEsQ0FDQSxlQURBLEVBQ0Esa0NBREEsRUFFQSxLQUZBLENBRUEsV0FGQTtBQUdBLFNBL0NBO0FBZ0RBLGdCQWhEQSxzQkFnREE7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFDQSxLQURBLENBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBLGFBREE7QUFPQSwwQkFDQSxLQURBLENBQ0EsZUFEQSxFQUNBLGtDQURBLEVBRUEsS0FGQSxDQUVBLFNBRkE7QUFJQSxTQS9EQTtBQWdFQSxpQkFoRUEsdUJBZ0VBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQ0EsS0FEQSxDQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQSxhQURBO0FBT0EsMEJBQ0EsS0FEQSxDQUNBLGVBREEsRUFDQSxrQ0FEQSxFQUVBLEtBRkEsQ0FFQSxZQUZBO0FBR0E7QUE5RUE7QUFqQkEsRzs7Ozs7Ozs7OztBQ2pDQTtBQUNBLFFBREEsa0JBQ0E7QUFDQTtBQUNBLGlEQURBO0FBRUEsNEJBRkE7QUFHQSx1QkFIQTtBQUlBO0FBSkE7QUFNQSxLQVJBO0FBU0EsV0FUQSxxQkFTQTtBQUNBO0FBQ0E7QUFDQSxLQVpBOztBQWFBO0FBQ0EsZUFEQSxxQkFDQTtBQUNBO0FBQ0E7QUFDQSxTQUpBO0FBS0EsaUJBTEEsdUJBS0E7QUFDQTtBQUNBO0FBQ0E7QUFSQTtBQWJBLEc7Ozs7Ozs7QUNEQTtBQUNBO0FBQ0E7QUFDQSxpYkFBc1I7QUFDdFI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7QUFFRDs7Ozs7Ozs7QUN4Q0E7QUFDQTtBQUNBO0FBQ0EsMGJBQXNSO0FBQ3RSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7O0FBRUQiLCJmaWxlIjoianMvMC5lYzFjZjA2ZTg5ODJiNWQzZWY2Ni5qcyIsInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQ+XG4gICAgaW1wb3J0IEN1YmVJdGVtIGZyb20gJy4vQ3ViZS9DdWJlSXRlbSdcbiAgICBpbXBvcnQgVnVlU2Vzc2lvbiBmcm9tICd2dWUtc2Vzc2lvbidcbiAgICBWdWUudXNlKFZ1ZVNlc3Npb24pXG4gICAgY2xhc3MgSXRlbXNMb29wIHtcbiAgICAgICAgY29uc3RydWN0b3IoaXRlbXMpIHtcbiAgICAgICAgICAgIHRoaXMuaXRlbXMgPSBpdGVtc1xuICAgICAgICAgICAgdGhpcy5sYXN0ID0gaXRlbXMubGVuZ3RoIC0gMVxuICAgICAgICAgICAgdGhpcy5jdXJyID0gMFxuICAgICAgICAgICAgdGhpcy5uZXh0ID0gMVxuICAgICAgICAgICAgdGhpcy5wcmV2ID0gdGhpcy5sYXN0XG4gICAgICAgIH1cbiAgICAgICAgc2V0QWN0aXZlKG5hbWUpIHtcbiAgICAgICAgICAgIGxldCBuZXdJbmRleCA9IF8uaW5kZXhPZih0aGlzLml0ZW1zLCBuYW1lKVxuICAgICAgICAgICAgdGhpcy5jdXJyID0gbmV3SW5kZXhcbiAgICAgICAgICAgIGlmIChuZXdJbmRleCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5uZXh0ID0gbmV3SW5kZXggKyAxXG4gICAgICAgICAgICAgICAgdGhpcy5wcmV2ID0gdGhpcy5sYXN0XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChuZXdJbmRleCA9PSB0aGlzLmxhc3QpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm5leHQgPSAwXG4gICAgICAgICAgICAgICAgdGhpcy5wcmV2ID0gbmV3SW5kZXggLSAxXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMubmV4dCA9IG5ld0luZGV4ICsgMVxuICAgICAgICAgICAgICAgIHRoaXMucHJldiA9IG5ld0luZGV4IC0gMVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGdldFByZXYoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pdGVtc1t0aGlzLnByZXZdXG4gICAgICAgIH1cbiAgICAgICAgZ2V0TmV4dCgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLml0ZW1zW3RoaXMubmV4dF1cbiAgICAgICAgfVxuICAgIH1cbiAgICBleHBvcnQgZGVmYXVsdHtcbiAgICAgICAgZGF0YTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBvYnNlcnZlcjogbmV3IEl0ZW1zTG9vcChbXG4gICAgICAgICAgICAgICAgICAgICdyZWxpYWJpbGl0eScsXG4gICAgICAgICAgICAgICAgICAgICdmcm9udGVuZCcsXG4gICAgICAgICAgICAgICAgICAgICdiYWNrZW5kJyxcbiAgICAgICAgICAgICAgICAgICAgJ3NlcnZlcicsXG4gICAgICAgICAgICAgICAgICAgICdkZXNpZ24nXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgJHdyYXBwZXI6IHt9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGNvbXBvbmVudHM6IHsnY3ViZS1pdGVtJzogQ3ViZUl0ZW19LFxuICAgICAgICBtb3VudGVkKCkge1xuICAgICAgICAgICAgdGhpcy5pbml0KCcjc2hhcGUtZ2FsbGVyeScpXG4gICAgICAgIH0sXG4gICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgIGluaXQoc2VsZWN0b3IpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiR3cmFwcGVyID0gJChzZWxlY3RvcilcbiAgICAgICAgICAgICAgICBsZXQgc2Vzc2lvblNhdmVkQWN0aXZlQmxvY2tOYW1lID0gdGhpcy4kc2Vzc2lvbi5nZXQoJ2N1YmVfY3VycmVudF9ibG9jaycpLFxuICAgICAgICAgICAgICAgICAgICAgICAgaGFzU2Vzc2lvblNhdmVkQWN0aXZlQmxvY2sgPSAhIXNlc3Npb25TYXZlZEFjdGl2ZUJsb2NrTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICRsYXN0QWN0aXZlQmxvY2sgPSB0aGlzLiR3cmFwcGVyLmZpbmQoJy5zaWRlLmFjdGl2ZScpXG4gICAgICAgICAgICAgICAgaWYgKGhhc1Nlc3Npb25TYXZlZEFjdGl2ZUJsb2NrKSB7XG4gICAgICAgICAgICAgICAgICAgICRsYXN0QWN0aXZlQmxvY2sucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpXG4gICAgICAgICAgICAgICAgICAgIHZhciAkYWN0dWFsQWN0aXZlQmxvY2sgPSB0aGlzLiR3cmFwcGVyLmZpbmQoJyMnICsgc2Vzc2lvblNhdmVkQWN0aXZlQmxvY2tOYW1lKVxuICAgICAgICAgICAgICAgICAgICAkYWN0dWFsQWN0aXZlQmxvY2suYWRkQ2xhc3MoJ2FjdGl2ZScpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHNlc3Npb24uc2V0KCdjdWJlX2N1cnJlbnRfYmxvY2snLCBuYW1lKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLm9ic2VydmVyLnNldEFjdGl2ZShzZXNzaW9uU2F2ZWRBY3RpdmVCbG9ja05hbWUpXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGlkID0gJGxhc3RBY3RpdmVCbG9jay5hdHRyKCdpZCcpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHNlc3Npb24uc2V0KCdjdWJlX2N1cnJlbnRfYmxvY2snLCBuYW1lKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLm9ic2VydmVyLnNldEFjdGl2ZShpZClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbW92ZUxlZnQoKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2ZsaXBMZWZ0JylcbiAgICAgICAgICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgICAgICAgICAgY29uc29sZS5pbmZvKCdOZXh0OiAnICsgc2VsZi5vYnNlcnZlci5nZXRQcmV2KCkpXG4gICAgICAgICAgICAgICAgdGhpcy4kd3JhcHBlclxuICAgICAgICAgICAgICAgICAgICAgICAgLnNoYXBlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLiRzZXNzaW9uLnNldCgnY3ViZV9jdXJyZW50X2Jsb2NrJywgdGhpcy5pZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5vYnNlcnZlci5zZXRBY3RpdmUodGhpcy5pZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIHRoaXMuJHdyYXBwZXJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zaGFwZSgnc2V0IG5leHQgc2lkZScsICcuc2lkZS4nICsgc2VsZi5vYnNlcnZlci5nZXRQcmV2KCkpXG4gICAgICAgICAgICAgICAgICAgICAgICAuc2hhcGUoJ2ZsaXAgbGVmdCcpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbW92ZVVwKCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdmbGlwRG93bicpXG4gICAgICAgICAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuaW5mbygnTmV4dDogJyArIHNlbGYub2JzZXJ2ZXIuZ2V0UHJldigpKVxuICAgICAgICAgICAgICAgIHRoaXMuJHdyYXBwZXJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zaGFwZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi4kc2Vzc2lvbi5zZXQoJ2N1YmVfY3VycmVudF9ibG9jaycsIHRoaXMuaWQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYub2JzZXJ2ZXIuc2V0QWN0aXZlKHRoaXMuaWQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB0aGlzLiR3cmFwcGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAuc2hhcGUoJ3NldCBuZXh0IHNpZGUnLCAnLnNpZGUuJyArIHNlbGYub2JzZXJ2ZXIuZ2V0TmV4dCgpKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnNoYXBlKCdmbGlwIGRvd24nKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG1vdmVEb3duKCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdmbGlwVXAnKVxuICAgICAgICAgICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgICAgICAgICBjb25zb2xlLmluZm8oJ05leHQ6ICcgKyBzZWxmLm9ic2VydmVyLmdldFByZXYoKSlcbiAgICAgICAgICAgICAgICB0aGlzLiR3cmFwcGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAuc2hhcGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuJHNlc3Npb24uc2V0KCdjdWJlX2N1cnJlbnRfYmxvY2snLCB0aGlzLmlkKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLm9ic2VydmVyLnNldEFjdGl2ZSh0aGlzLmlkKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgdGhpcy4kd3JhcHBlclxuICAgICAgICAgICAgICAgICAgICAgICAgLnNoYXBlKCdzZXQgbmV4dCBzaWRlJywgJy5zaWRlLicgKyBzZWxmLm9ic2VydmVyLmdldFByZXYoKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zaGFwZSgnZmxpcCB1cCcpXG5cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtb3ZlUmlnaHQoKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2ZsaXBSaWdodCcpXG4gICAgICAgICAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuaW5mbygnTmV4dDogJyArIHNlbGYub2JzZXJ2ZXIuZ2V0TmV4dCgpKVxuICAgICAgICAgICAgICAgIHRoaXMuJHdyYXBwZXJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zaGFwZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi4kc2Vzc2lvbi5zZXQoJ2N1YmVfY3VycmVudF9ibG9jaycsIHRoaXMuaWQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYub2JzZXJ2ZXIuc2V0QWN0aXZlKHRoaXMuaWQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB0aGlzLiR3cmFwcGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAuc2hhcGUoJ3NldCBuZXh0IHNpZGUnLCAnLnNpZGUuJyArIHNlbGYub2JzZXJ2ZXIuZ2V0TmV4dCgpKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnNoYXBlKCdmbGlwIHJpZ2h0JylcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHJlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9wYWdlcy9pbmRleC9DdWJlLnZ1ZSIsIjxzY3JpcHQ+XG4gICAgZXhwb3J0IGRlZmF1bHR7XG4gICAgICAgIGRhdGEoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGhlYWRlcjogJy51aS50b3AubGVmdC5hdHRhY2hlZC5sYWJlbCcsXG4gICAgICAgICAgICAgICAgdGV4dDogJ2Rpdi50ZXh0JyxcbiAgICAgICAgICAgICAgICAkaGVhZGVyOiB7fSxcbiAgICAgICAgICAgICAgICAkdGV4dDoge31cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgbW91bnRlZCgpIHtcbiAgICAgICAgICAgIHRoaXMuJGhlYWRlciA9ICQodGhpcy4kZWwpLmZpbmQodGhpcy5oZWFkZXIpXG4gICAgICAgICAgICB0aGlzLiR0ZXh0ID0gJCh0aGlzLiRlbCkuZmluZCh0aGlzLnRleHQpXG4gICAgICAgIH0sXG4gICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgIG9uSG92ZXIoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kaGVhZGVyLmZhZGVUbygnZmFzdCcsIDAuNDUpXG4gICAgICAgICAgICAgICAgdGhpcy4kdGV4dC5mYWRlVG8oJ2Zhc3QnLCAwLjQ1KVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9uVW5ob3ZlcigpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRoZWFkZXIuZmFkZVRvKCdmYXN0JywgMSlcbiAgICAgICAgICAgICAgICB0aGlzLiR0ZXh0LmZhZGVUbygnZmFzdCcsIDEpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG48L3NjcmlwdD5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyByZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvcGFnZXMvaW5kZXgvQ3ViZS9DdWJlSXRlbS52dWUiLCJ2YXIgZGlzcG9zZWQgPSBmYWxzZVxudmFyIG5vcm1hbGl6ZUNvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpXG4vKiBzY3JpcHQgKi9cbnZhciBfX3Z1ZV9zY3JpcHRfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlbnZcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2UsXFxcInRhcmdldHNcXFwiOntcXFwiYnJvd3NlcnNcXFwiOltcXFwiPiAyJVxcXCJdLFxcXCJ1Z2xpZnlcXFwiOnRydWV9fV1dLFxcXCJwbHVnaW5zXFxcIjpbXFxcInRyYW5zZm9ybS1vYmplY3QtcmVzdC1zcHJlYWRcXFwiLFtcXFwidHJhbnNmb3JtLXJ1bnRpbWVcXFwiLHtcXFwicG9seWZpbGxcXFwiOmZhbHNlLFxcXCJoZWxwZXJzXFxcIjpmYWxzZX1dXX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9DdWJlLnZ1ZVwiKVxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gbnVsbFxuLyogdGVtcGxhdGUgZnVuY3Rpb25hbCAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyA9IGZhbHNlXG4vKiBzdHlsZXMgKi9cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IG51bGxcbi8qIHNjb3BlSWQgKi9cbnZhciBfX3Z1ZV9zY29wZUlkX18gPSBudWxsXG4vKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbnZhciBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fID0gbnVsbFxudmFyIENvbXBvbmVudCA9IG5vcm1hbGl6ZUNvbXBvbmVudChcbiAgX192dWVfc2NyaXB0X18sXG4gIF9fdnVlX3RlbXBsYXRlX18sXG4gIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyxcbiAgX192dWVfc3R5bGVzX18sXG4gIF9fdnVlX3Njb3BlSWRfXyxcbiAgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfX1xuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvcGFnZXMvaW5kZXgvQ3ViZS52dWVcIlxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWxvYWRlci9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtMjNmN2QyMzRcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi0yM2Y3ZDIzNFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBkaXNwb3NlZCA9IHRydWVcbiAgfSlcbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3BhZ2VzL2luZGV4L0N1YmUudnVlXG4vLyBtb2R1bGUgaWQgPSAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9wYWdlcy9pbmRleC9DdWJlLnZ1ZVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgZGlzcG9zZWQgPSBmYWxzZVxudmFyIG5vcm1hbGl6ZUNvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpXG4vKiBzY3JpcHQgKi9cbnZhciBfX3Z1ZV9zY3JpcHRfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlbnZcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2UsXFxcInRhcmdldHNcXFwiOntcXFwiYnJvd3NlcnNcXFwiOltcXFwiPiAyJVxcXCJdLFxcXCJ1Z2xpZnlcXFwiOnRydWV9fV1dLFxcXCJwbHVnaW5zXFxcIjpbXFxcInRyYW5zZm9ybS1vYmplY3QtcmVzdC1zcHJlYWRcXFwiLFtcXFwidHJhbnNmb3JtLXJ1bnRpbWVcXFwiLHtcXFwicG9seWZpbGxcXFwiOmZhbHNlLFxcXCJoZWxwZXJzXFxcIjpmYWxzZX1dXX0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9DdWJlSXRlbS52dWVcIilcbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfdGVtcGxhdGVfXyA9IG51bGxcbi8qIHRlbXBsYXRlIGZ1bmN0aW9uYWwgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18gPSBmYWxzZVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBudWxsXG4vKiBzY29wZUlkICovXG52YXIgX192dWVfc2NvcGVJZF9fID0gbnVsbFxuLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG52YXIgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfXyA9IG51bGxcbnZhciBDb21wb25lbnQgPSBub3JtYWxpemVDb21wb25lbnQoXG4gIF9fdnVlX3NjcmlwdF9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18sXG4gIF9fdnVlX3N0eWxlc19fLFxuICBfX3Z1ZV9zY29wZUlkX18sXG4gIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX19cbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3BhZ2VzL2luZGV4L0N1YmUvQ3ViZUl0ZW0udnVlXCJcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1sb2FkZXIvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LWRjNGE3NTlhXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtZGM0YTc1OWFcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgZGlzcG9zZWQgPSB0cnVlXG4gIH0pXG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9wYWdlcy9pbmRleC9DdWJlL0N1YmVJdGVtLnZ1ZVxuLy8gbW9kdWxlIGlkID0gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvcGFnZXMvaW5kZXgvQ3ViZS9DdWJlSXRlbS52dWVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==