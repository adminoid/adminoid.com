webpackJsonp([2],{

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
    }
  },
  computed: {
    widthAngle: {
      get: function get() {
        if (!this.moved) return 0;
        var percent = parseInt(Math.round((this.cursor.x - this.initData.leftOffset) / (this.initData.width / 100)), 10);
        var factor = percent / 100;
        var angle = void 0;
        if (percent > 0 && percent <= 50) {
          var angleFactor = 1 - factor * 2;
          angle = -(widthAngleLimit * angleFactor);
        } else if (percent > 50 && percent <= 100) {
          var _angleFactor = (factor - 0.5) * 2;
          angle = widthAngleLimit * _angleFactor;
        }
        return -angle || 0;
      },
      set: function set() {}
    },
    heightAngle: {
      get: function get() {
        if (!this.moved) return 0;
        var percent = parseInt(Math.round((this.cursor.y - this.initData.topOffset) / (this.initData.height / 100)), 10);
        var factor = percent / 100;
        var angle = void 0;
        if (percent > 0 && percent <= 50) {
          var angleFactor = 1 - factor * 2;
          angle = -(heightAngleLimit * angleFactor);
        } else if (percent > 50 && percent <= 100) {
          var _angleFactor2 = (factor - 0.5) * 2;
          angle = heightAngleLimit * _angleFactor2;
        }
        return angle || 0;
      },
      set: function set() {}
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3BhZ2VzL3dvcmtmbG93L0hhbGZSb3RhdGUudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9wYWdlcy93b3JrZmxvdy9IYWxmUm90YXRlLnZ1ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQ0E7QUFDQSwrQixDQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBREE7QUFFQSxpQkFGQTtBQUdBLHFCQUhBO0FBSUE7QUFKQSxPQURBO0FBT0E7QUFDQSxZQURBO0FBRUE7QUFGQSxPQVBBO0FBV0E7QUFDQSxtQkFEQTtBQUVBO0FBRkEsT0FYQTtBQWVBLGdCQWZBO0FBZ0JBO0FBaEJBO0FBa0JBLEdBcEJBO0FBcUJBO0FBQ0E7QUFDQSxHQXZCQTtBQXdCQTtBQUNBO0FBQ0EsR0ExQkE7QUEyQkE7QUFDQTtBQUNBLEdBN0JBO0FBOEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQVJBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQWJBO0FBY0E7QUFDQTtBQUNBO0FBaEJBLEdBOUJBO0FBZ0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FIQSxNQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQWRBO0FBZUE7QUFmQSxLQURBO0FBa0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBSEEsTUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FkQTtBQWVBO0FBZkE7QUFsQkE7QUFoREEsRzs7Ozs7OztBQ0xBO0FBQ0E7QUFDQTtBQUNBLDBiQUFzUjtBQUN0UjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDOztBQUVEIiwiZmlsZSI6ImpzLzIuYTUxZTg5MzExODk1NjlkYzg3YmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8c2NyaXB0PlxuICBpbXBvcnQgJCBmcm9tICdqcXVlcnknXG4gIGNvbnN0IGZyYW1lUGFkZGluZ0FuZEJvcmRlciA9IDQwIC8vIDQwIGl0IGlzIGEgcGFkZGluZyBhbmQgYm9yZGVyXG4gIGNvbnN0IGhlaWdodEFuZ2xlTGltaXQgPSAxMFxuICBjb25zdCB3aWR0aEFuZ2xlTGltaXQgPSA1XG4gIGV4cG9ydCBkZWZhdWx0IHtcbiAgICBkYXRhOiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBpbml0RGF0YToge1xuICAgICAgICAgIHdpZHRoOiAwLFxuICAgICAgICAgIGhlaWdodDogMCxcbiAgICAgICAgICBsZWZ0T2Zmc2V0OiAwLFxuICAgICAgICAgIHRvcE9mZnNldDogMFxuICAgICAgICB9LFxuICAgICAgICBjdXJzb3I6IHtcbiAgICAgICAgICB4OiAwLFxuICAgICAgICAgIHk6IDBcbiAgICAgICAgfSxcbiAgICAgICAgYW5nbGVzOiB7XG4gICAgICAgICAgdmVydGljYWw6IDAsXG4gICAgICAgICAgaG9yaXpvbnRhbDogMFxuICAgICAgICB9LFxuICAgICAgICAkYmxvY2s6IHt9LFxuICAgICAgICBtb3ZlZDogZmFsc2VcbiAgICAgIH1cbiAgICB9LFxuICAgIGNyZWF0ZWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLm1ha2VJbml0RGF0YSlcbiAgICB9LFxuICAgIG1vdW50ZWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHRoaXMubWFrZUluaXREYXRhKClcbiAgICB9LFxuICAgIGJlZm9yZURlc3Ryb3k6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLm1ha2VJbml0RGF0YSlcbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgIG1ha2VJbml0RGF0YTogZnVuY3Rpb24gKCkge1xuICAgICAgICBsZXQgJGVsID0gJCh0aGlzLiRlbClcbiAgICAgICAgdGhpcy4kYmxvY2sgPSAkZWxcbiAgICAgICAgdGhpcy5pbml0RGF0YS5sZWZ0T2Zmc2V0ID0gJGVsLm9mZnNldCgpLmxlZnRcbiAgICAgICAgdGhpcy5pbml0RGF0YS50b3BPZmZzZXQgPSAkZWwub2Zmc2V0KCkudG9wXG4gICAgICAgIHRoaXMuaW5pdERhdGEud2lkdGggPSAkZWwud2lkdGgoKSArIGZyYW1lUGFkZGluZ0FuZEJvcmRlclxuICAgICAgICB0aGlzLmluaXREYXRhLmhlaWdodCA9ICRlbC5oZWlnaHQoKSArIGZyYW1lUGFkZGluZ0FuZEJvcmRlclxuICAgICAgfSxcbiAgICAgIG9uSG92ZXI6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHRoaXMubW92ZWQgPSB0cnVlXG4gICAgICAgIHRoaXMuY3Vyc29yLnggPSBlLnBhZ2VYXG4gICAgICAgIHRoaXMuY3Vyc29yLnkgPSBlLnBhZ2VZXG4gICAgICB9LFxuICAgICAgb25MZWF2ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLm1vdmVkID0gZmFsc2VcbiAgICAgIH1cbiAgICB9LFxuICAgIGNvbXB1dGVkOiB7XG4gICAgICB3aWR0aEFuZ2xlOiB7XG4gICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIGlmICghdGhpcy5tb3ZlZCkgcmV0dXJuIDBcbiAgICAgICAgICAgICAgbGV0IHBlcmNlbnQgPSBwYXJzZUludChNYXRoLnJvdW5kKCh0aGlzLmN1cnNvci54IC0gdGhpcy5pbml0RGF0YS5sZWZ0T2Zmc2V0KSAvICh0aGlzLmluaXREYXRhLndpZHRoIC8gMTAwKSksIDEwKVxuICAgICAgICAgICAgICBsZXQgZmFjdG9yID0gKHBlcmNlbnQgLyAxMDApXG4gICAgICAgICAgICAgIGxldCBhbmdsZVxuICAgICAgICAgICAgICBpZiAocGVyY2VudCA+IDAgJiYgcGVyY2VudCA8PSA1MCkge1xuICAgICAgICAgICAgICAgICAgbGV0IGFuZ2xlRmFjdG9yID0gMSAtIGZhY3RvciAqIDJcbiAgICAgICAgICAgICAgICAgIGFuZ2xlID0gLSh3aWR0aEFuZ2xlTGltaXQgKiBhbmdsZUZhY3RvcilcbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChwZXJjZW50ID4gNTAgJiYgcGVyY2VudCA8PSAxMDApIHtcbiAgICAgICAgICAgICAgICAgIGxldCBhbmdsZUZhY3RvciA9IChmYWN0b3IgLSAwLjUpICogMlxuICAgICAgICAgICAgICAgICAgYW5nbGUgPSB3aWR0aEFuZ2xlTGltaXQgKiBhbmdsZUZhY3RvclxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHJldHVybiAtYW5nbGUgfHwgMFxuICAgICAgICAgIH0sXG4gICAgICAgICAgc2V0OiBmdW5jdGlvbiAoKSB7fVxuICAgICAgfSxcbiAgICAgIGhlaWdodEFuZ2xlOiB7XG4gICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIGlmICghdGhpcy5tb3ZlZCkgcmV0dXJuIDBcbiAgICAgICAgICAgICAgbGV0IHBlcmNlbnQgPSBwYXJzZUludChNYXRoLnJvdW5kKCh0aGlzLmN1cnNvci55IC0gdGhpcy5pbml0RGF0YS50b3BPZmZzZXQpIC8gKHRoaXMuaW5pdERhdGEuaGVpZ2h0IC8gMTAwKSksIDEwKVxuICAgICAgICAgICAgICBsZXQgZmFjdG9yID0gKHBlcmNlbnQgLyAxMDApXG4gICAgICAgICAgICAgIGxldCBhbmdsZVxuICAgICAgICAgICAgICBpZiAocGVyY2VudCA+IDAgJiYgcGVyY2VudCA8PSA1MCkge1xuICAgICAgICAgICAgICAgICAgbGV0IGFuZ2xlRmFjdG9yID0gMSAtIGZhY3RvciAqIDJcbiAgICAgICAgICAgICAgICAgIGFuZ2xlID0gLShoZWlnaHRBbmdsZUxpbWl0ICogYW5nbGVGYWN0b3IpXG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAocGVyY2VudCA+IDUwICYmIHBlcmNlbnQgPD0gMTAwKSB7XG4gICAgICAgICAgICAgICAgICBsZXQgYW5nbGVGYWN0b3IgPSAoZmFjdG9yIC0gMC41KSAqIDJcbiAgICAgICAgICAgICAgICAgIGFuZ2xlID0gaGVpZ2h0QW5nbGVMaW1pdCAqIGFuZ2xlRmFjdG9yXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgcmV0dXJuIGFuZ2xlIHx8IDBcbiAgICAgICAgICB9LFxuICAgICAgICAgIHNldDogZnVuY3Rpb24gKCkge31cbiAgICAgIH1cbiAgICB9XG4gIH1cbjwvc2NyaXB0PlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHJlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9wYWdlcy93b3JrZmxvdy9IYWxmUm90YXRlLnZ1ZSIsInZhciBkaXNwb3NlZCA9IGZhbHNlXG52YXIgbm9ybWFsaXplQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIilcbi8qIHNjcmlwdCAqL1xudmFyIF9fdnVlX3NjcmlwdF9fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVudlxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZSxcXFwidGFyZ2V0c1xcXCI6e1xcXCJicm93c2Vyc1xcXCI6W1xcXCI+IDIlXFxcIl0sXFxcInVnbGlmeVxcXCI6dHJ1ZX19XV0sXFxcInBsdWdpbnNcXFwiOltcXFwidHJhbnNmb3JtLW9iamVjdC1yZXN0LXNwcmVhZFxcXCIsW1xcXCJ0cmFuc2Zvcm0tcnVudGltZVxcXCIse1xcXCJwb2x5ZmlsbFxcXCI6ZmFsc2UsXFxcImhlbHBlcnNcXFwiOmZhbHNlfV1dfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL0hhbGZSb3RhdGUudnVlXCIpXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSBudWxsXG4vKiB0ZW1wbGF0ZSBmdW5jdGlvbmFsICovXG52YXIgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fID0gZmFsc2Vcbi8qIHN0eWxlcyAqL1xudmFyIF9fdnVlX3N0eWxlc19fID0gbnVsbFxuLyogc2NvcGVJZCAqL1xudmFyIF9fdnVlX3Njb3BlSWRfXyA9IG51bGxcbi8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xudmFyIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSBudWxsXG52YXIgQ29tcG9uZW50ID0gbm9ybWFsaXplQ29tcG9uZW50KFxuICBfX3Z1ZV9zY3JpcHRfXyxcbiAgX192dWVfdGVtcGxhdGVfXyxcbiAgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fLFxuICBfX3Z1ZV9zdHlsZXNfXyxcbiAgX192dWVfc2NvcGVJZF9fLFxuICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9wYWdlcy93b3JrZmxvdy9IYWxmUm90YXRlLnZ1ZVwiXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtbG9hZGVyL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi0wNjI0ZGQ4Y1wiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTA2MjRkZDhjXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvcGFnZXMvd29ya2Zsb3cvSGFsZlJvdGF0ZS52dWVcbi8vIG1vZHVsZSBpZCA9IC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3BhZ2VzL3dvcmtmbG93L0hhbGZSb3RhdGUudnVlXG4vLyBtb2R1bGUgY2h1bmtzID0gMiJdLCJzb3VyY2VSb290IjoiIn0=