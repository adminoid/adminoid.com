webpackJsonp([6],{

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/pages/index/Clouds.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_gsap__ = __webpack_require__("./node_modules/gsap/index.js");


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      clouds: {
        minCloud: '#path-clouds-1',
        midCloud: '#path-clouds-3',
        maxCloud: '#path-clouds-5'
      },
      texts: {
        siteNeed: '#site-need',
        veryBeautiful: '#very-beautiful'
      }
    };
  },
  mounted: function mounted() {
    this.init();
  },
  methods: {
    // https://greensock.com/forums/topic/11673-how-to-hide-elements-so-they-arent-visible-before-animation-is-triggered/
    init: function init() {
      __WEBPACK_IMPORTED_MODULE_0_gsap__["TweenLite"].set(this.texts.veryBeautiful, { visibility: 'hidden' });
      var timeline = new __WEBPACK_IMPORTED_MODULE_0_gsap__["TimelineMax"]({ repeat: -1 });
      timeline.to(this.texts.siteNeed, 0.3, { autoAlpha: 0 }, '+=2').to(this.clouds.maxCloud, 0.1, { autoAlpha: 0 }).to(this.clouds.midCloud, 0.1, { autoAlpha: 0 }).to(this.clouds.minCloud, 0.1, { autoAlpha: 0 }).to(this.clouds.minCloud, 0.2, { autoAlpha: 1 }).to(this.clouds.midCloud, 0.2, { autoAlpha: 1 }).to(this.clouds.maxCloud, 0.2, { autoAlpha: 1 }).to(this.texts.veryBeautiful, 0.3, { autoAlpha: 1 }).to(this.texts.veryBeautiful, 0.3, { autoAlpha: 0 }, '+=2').to(this.clouds.maxCloud, 0.1, { autoAlpha: 0 }).to(this.clouds.midCloud, 0.1, { autoAlpha: 0 }).to(this.clouds.minCloud, 0.1, { autoAlpha: 0 }).to(this.clouds.minCloud, 0.2, { autoAlpha: 1 }).to(this.clouds.midCloud, 0.2, { autoAlpha: 1 }).to(this.clouds.maxCloud, 0.2, { autoAlpha: 1 });
    }
  }
});

/***/ }),

/***/ "./resources/assets/js/components/pages/index/Clouds.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/pages/index/Clouds.vue")
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
Component.options.__file = "resources/assets/js/components/pages/index/Clouds.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-80dac6c6", Component.options)
  } else {
    hotAPI.reload("data-v-80dac6c6", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3BhZ2VzL2luZGV4L0Nsb3Vkcy52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3BhZ2VzL2luZGV4L0Nsb3Vkcy52dWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQURBO0FBRUEsa0NBRkE7QUFHQTtBQUhBLE9BREE7QUFNQTtBQUNBLDhCQURBO0FBRUE7QUFGQTtBQU5BO0FBV0EsR0FiQTtBQWNBO0FBQ0E7QUFDQSxHQWhCQTtBQWlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFDQSxFQURBLENBQ0EsbUJBREEsRUFDQSxHQURBLEVBQ0EsZ0JBREEsRUFDQSxLQURBLEVBRUEsRUFGQSxDQUVBLG9CQUZBLEVBRUEsR0FGQSxFQUVBLGdCQUZBLEVBR0EsRUFIQSxDQUdBLG9CQUhBLEVBR0EsR0FIQSxFQUdBLGdCQUhBLEVBSUEsRUFKQSxDQUlBLG9CQUpBLEVBSUEsR0FKQSxFQUlBLGdCQUpBLEVBS0EsRUFMQSxDQUtBLG9CQUxBLEVBS0EsR0FMQSxFQUtBLGdCQUxBLEVBTUEsRUFOQSxDQU1BLG9CQU5BLEVBTUEsR0FOQSxFQU1BLGdCQU5BLEVBT0EsRUFQQSxDQU9BLG9CQVBBLEVBT0EsR0FQQSxFQU9BLGdCQVBBLEVBUUEsRUFSQSxDQVFBLHdCQVJBLEVBUUEsR0FSQSxFQVFBLGdCQVJBLEVBU0EsRUFUQSxDQVNBLHdCQVRBLEVBU0EsR0FUQSxFQVNBLGdCQVRBLEVBU0EsS0FUQSxFQVVBLEVBVkEsQ0FVQSxvQkFWQSxFQVVBLEdBVkEsRUFVQSxnQkFWQSxFQVdBLEVBWEEsQ0FXQSxvQkFYQSxFQVdBLEdBWEEsRUFXQSxnQkFYQSxFQVlBLEVBWkEsQ0FZQSxvQkFaQSxFQVlBLEdBWkEsRUFZQSxnQkFaQSxFQWFBLEVBYkEsQ0FhQSxvQkFiQSxFQWFBLEdBYkEsRUFhQSxnQkFiQSxFQWNBLEVBZEEsQ0FjQSxvQkFkQSxFQWNBLEdBZEEsRUFjQSxnQkFkQSxFQWVBLEVBZkEsQ0FlQSxvQkFmQSxFQWVBLEdBZkEsRUFlQSxnQkFmQTtBQWdCQTtBQXJCQTtBQWpCQSxHOzs7Ozs7O0FDRkE7QUFDQTtBQUNBO0FBQ0EsbWJBQXNSO0FBQ3RSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7O0FBRUQiLCJmaWxlIjoianMvNi4wOTQxNTE0OTc4NmYwNDdiY2VhMy5qcyIsInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQ+XG4gIGltcG9ydCB7VGltZWxpbmVNYXgsIFR3ZWVuTGl0ZX0gZnJvbSAnZ3NhcCdcbiAgZXhwb3J0IGRlZmF1bHQge1xuICAgIGRhdGE6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGNsb3Vkczoge1xuICAgICAgICAgIG1pbkNsb3VkOiAnI3BhdGgtY2xvdWRzLTEnLFxuICAgICAgICAgIG1pZENsb3VkOiAnI3BhdGgtY2xvdWRzLTMnLFxuICAgICAgICAgIG1heENsb3VkOiAnI3BhdGgtY2xvdWRzLTUnXG4gICAgICAgIH0sXG4gICAgICAgIHRleHRzOiB7XG4gICAgICAgICAgc2l0ZU5lZWQ6ICcjc2l0ZS1uZWVkJyxcbiAgICAgICAgICB2ZXJ5QmVhdXRpZnVsOiAnI3ZlcnktYmVhdXRpZnVsJ1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBtb3VudGVkOiBmdW5jdGlvbiAoKSB7XG4gICAgICB0aGlzLmluaXQoKVxuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgLy8gaHR0cHM6Ly9ncmVlbnNvY2suY29tL2ZvcnVtcy90b3BpYy8xMTY3My1ob3ctdG8taGlkZS1lbGVtZW50cy1zby10aGV5LWFyZW50LXZpc2libGUtYmVmb3JlLWFuaW1hdGlvbi1pcy10cmlnZ2VyZWQvXG4gICAgICBpbml0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIFR3ZWVuTGl0ZS5zZXQodGhpcy50ZXh0cy52ZXJ5QmVhdXRpZnVsLCB7dmlzaWJpbGl0eTogJ2hpZGRlbid9KVxuICAgICAgICBjb25zdCB0aW1lbGluZSA9IG5ldyBUaW1lbGluZU1heCh7cmVwZWF0OiAtMX0pXG4gICAgICAgIHRpbWVsaW5lXG4gICAgICAgIC50byh0aGlzLnRleHRzLnNpdGVOZWVkLCAwLjMsIHthdXRvQWxwaGE6IDB9LCAnKz0yJylcbiAgICAgICAgLnRvKHRoaXMuY2xvdWRzLm1heENsb3VkLCAwLjEsIHthdXRvQWxwaGE6IDB9KVxuICAgICAgICAudG8odGhpcy5jbG91ZHMubWlkQ2xvdWQsIDAuMSwge2F1dG9BbHBoYTogMH0pXG4gICAgICAgIC50byh0aGlzLmNsb3Vkcy5taW5DbG91ZCwgMC4xLCB7YXV0b0FscGhhOiAwfSlcbiAgICAgICAgLnRvKHRoaXMuY2xvdWRzLm1pbkNsb3VkLCAwLjIsIHthdXRvQWxwaGE6IDF9KVxuICAgICAgICAudG8odGhpcy5jbG91ZHMubWlkQ2xvdWQsIDAuMiwge2F1dG9BbHBoYTogMX0pXG4gICAgICAgIC50byh0aGlzLmNsb3Vkcy5tYXhDbG91ZCwgMC4yLCB7YXV0b0FscGhhOiAxfSlcbiAgICAgICAgLnRvKHRoaXMudGV4dHMudmVyeUJlYXV0aWZ1bCwgMC4zLCB7YXV0b0FscGhhOiAxfSlcbiAgICAgICAgLnRvKHRoaXMudGV4dHMudmVyeUJlYXV0aWZ1bCwgMC4zLCB7YXV0b0FscGhhOiAwfSwgJys9MicpXG4gICAgICAgIC50byh0aGlzLmNsb3Vkcy5tYXhDbG91ZCwgMC4xLCB7YXV0b0FscGhhOiAwfSlcbiAgICAgICAgLnRvKHRoaXMuY2xvdWRzLm1pZENsb3VkLCAwLjEsIHthdXRvQWxwaGE6IDB9KVxuICAgICAgICAudG8odGhpcy5jbG91ZHMubWluQ2xvdWQsIDAuMSwge2F1dG9BbHBoYTogMH0pXG4gICAgICAgIC50byh0aGlzLmNsb3Vkcy5taW5DbG91ZCwgMC4yLCB7YXV0b0FscGhhOiAxfSlcbiAgICAgICAgLnRvKHRoaXMuY2xvdWRzLm1pZENsb3VkLCAwLjIsIHthdXRvQWxwaGE6IDF9KVxuICAgICAgICAudG8odGhpcy5jbG91ZHMubWF4Q2xvdWQsIDAuMiwge2F1dG9BbHBoYTogMX0pXG4gICAgICB9XG4gICAgfVxuICB9XG48L3NjcmlwdD5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyByZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvcGFnZXMvaW5kZXgvQ2xvdWRzLnZ1ZSIsInZhciBkaXNwb3NlZCA9IGZhbHNlXG52YXIgbm9ybWFsaXplQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIilcbi8qIHNjcmlwdCAqL1xudmFyIF9fdnVlX3NjcmlwdF9fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVudlxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZSxcXFwidGFyZ2V0c1xcXCI6e1xcXCJicm93c2Vyc1xcXCI6W1xcXCI+IDIlXFxcIl0sXFxcInVnbGlmeVxcXCI6dHJ1ZX19XV0sXFxcInBsdWdpbnNcXFwiOltcXFwidHJhbnNmb3JtLW9iamVjdC1yZXN0LXNwcmVhZFxcXCIsW1xcXCJ0cmFuc2Zvcm0tcnVudGltZVxcXCIse1xcXCJwb2x5ZmlsbFxcXCI6ZmFsc2UsXFxcImhlbHBlcnNcXFwiOmZhbHNlfV1dfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL0Nsb3Vkcy52dWVcIilcbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfdGVtcGxhdGVfXyA9IG51bGxcbi8qIHRlbXBsYXRlIGZ1bmN0aW9uYWwgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18gPSBmYWxzZVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBudWxsXG4vKiBzY29wZUlkICovXG52YXIgX192dWVfc2NvcGVJZF9fID0gbnVsbFxuLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG52YXIgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfXyA9IG51bGxcbnZhciBDb21wb25lbnQgPSBub3JtYWxpemVDb21wb25lbnQoXG4gIF9fdnVlX3NjcmlwdF9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18sXG4gIF9fdnVlX3N0eWxlc19fLFxuICBfX3Z1ZV9zY29wZUlkX18sXG4gIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX19cbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3BhZ2VzL2luZGV4L0Nsb3Vkcy52dWVcIlxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWxvYWRlci9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtODBkYWM2YzZcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi04MGRhYzZjNlwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBkaXNwb3NlZCA9IHRydWVcbiAgfSlcbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3BhZ2VzL2luZGV4L0Nsb3Vkcy52dWVcbi8vIG1vZHVsZSBpZCA9IC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3BhZ2VzL2luZGV4L0Nsb3Vkcy52dWVcbi8vIG1vZHVsZSBjaHVua3MgPSA2Il0sInNvdXJjZVJvb3QiOiIifQ==