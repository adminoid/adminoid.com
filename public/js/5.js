webpackJsonp([5],{

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/pages/price/Clock.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_gsap__ = __webpack_require__("./node_modules/gsap/index.js");


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      timeline: {},
      animation: {
        leftValue: 0,
        minuteValue: 0,
        hourValue: 0
      },
      touched: false
    };
  },

  watch: {
    touched: function touched(is) {
      if (is) {
        this.timeline.pause().play();
      } else {
        this.timeline.pause().reverse();
      }
    }
  },

  mounted: function mounted() {
    this.compileTimeline();
  },
  methods: {
    // todo: add onTouch
    // todo: may be add click cursor for mobile screen
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
    onHover: function onHover(e) {
      if (e.type !== "touchstart") {
        this.timeline.pause().play();
      }
    },
    onLeave: function onLeave(e) {
      if (e.type !== "touchstart") {
        this.timeline.pause().reverse();
      }
    },
    onTouchStart: function onTouchStart() {
      this.touched = !this.touched;
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
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/pages/price/Clock.vue")
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
Component.options.__file = "resources/assets/js/components/pages/price/Clock.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-27789354", Component.options)
  } else {
    hotAPI.reload("data-v-27789354", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3BhZ2VzL3ByaWNlL0Nsb2NrLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvcGFnZXMvcHJpY2UvQ2xvY2sudnVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBREE7QUFFQTtBQUNBLG9CQURBO0FBRUEsc0JBRkE7QUFHQTtBQUhBLE9BRkE7QUFPQTtBQVBBO0FBU0EsR0FYQTs7QUFhQTtBQUNBLFdBREEsbUJBQ0EsRUFEQSxFQUNBO0FBQ0E7QUFDQTtBQUNBLE9BRkEsTUFFQTtBQUNBO0FBQ0E7QUFDQTtBQVBBLEdBYkE7O0FBdUJBO0FBQ0E7QUFDQSxHQXpCQTtBQTBCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0ZBQ0E7QUFDQSxvQkFEQTtBQUVBLHNCQUZBO0FBR0E7QUFIQSxPQURBLEVBS0E7QUFDQSxzQkFEQTtBQUVBLHdCQUZBO0FBR0E7QUFIQSxPQUxBLEdBVUEsQ0FWQTtBQVdBO0FBQ0E7QUFDQSxLQWxCQTtBQW1CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBdkJBO0FBd0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0E1QkE7QUE2QkEsZ0JBN0JBLDBCQTZCQTtBQUNBO0FBQ0E7QUEvQkEsR0ExQkE7QUEyREE7QUFDQTtBQUNBO0FBQ0EsS0FIQTtBQUlBO0FBQ0E7QUFDQSxLQU5BO0FBT0E7QUFDQTtBQUNBO0FBVEE7QUEzREEsRzs7Ozs7OztBQ0ZBO0FBQ0E7QUFDQTtBQUNBLGtiQUFzUjtBQUN0UjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDOztBQUVEIiwiZmlsZSI6ImpzLzUuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8c2NyaXB0PlxuaW1wb3J0IHtUaW1lbGluZUxpdGUsIFR3ZWVuTGl0ZX0gZnJvbSAnZ3NhcCdcbmV4cG9ydCBkZWZhdWx0IHtcbiAgZGF0YTogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB7XG4gICAgICB0aW1lbGluZToge30sXG4gICAgICBhbmltYXRpb246IHtcbiAgICAgICAgbGVmdFZhbHVlOiAwLFxuICAgICAgICBtaW51dGVWYWx1ZTogMCxcbiAgICAgICAgaG91clZhbHVlOiAwXG4gICAgICB9LFxuICAgICAgdG91Y2hlZDogZmFsc2UsXG4gICAgfVxuICB9LFxuXG4gIHdhdGNoOiB7XG4gICAgdG91Y2hlZChpcykge1xuICAgICAgaWYgKGlzKSB7XG4gICAgICAgIHRoaXMudGltZWxpbmUucGF1c2UoKS5wbGF5KClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMudGltZWxpbmUucGF1c2UoKS5yZXZlcnNlKClcbiAgICAgIH1cbiAgICB9XG4gIH0sXG5cbiAgbW91bnRlZDogZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuY29tcGlsZVRpbWVsaW5lKClcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIC8vIHRvZG86IGFkZCBvblRvdWNoXG4gICAgLy8gdG9kbzogbWF5IGJlIGFkZCBjbGljayBjdXJzb3IgZm9yIG1vYmlsZSBzY3JlZW5cbiAgICBjb21waWxlVGltZWxpbmU6IGZ1bmN0aW9uICgpIHtcbiAgICAgIGNvbnN0IHRpbWVsaW5lID0gbmV3IFRpbWVsaW5lTGl0ZSh7cGF1c2VkOiB0cnVlfSlcbiAgICAgIHRpbWVsaW5lLmFkZChUd2VlbkxpdGUuZnJvbVRvKHRoaXMuYW5pbWF0aW9uLCAwLjUsXG4gICAgICAgICAge1xuICAgICAgICAgICAgbGVmdFZhbHVlOiAwLFxuICAgICAgICAgICAgbWludXRlVmFsdWU6IDAsXG4gICAgICAgICAgICBob3VyVmFsdWU6IDBcbiAgICAgICAgICB9LCB7XG4gICAgICAgICAgICBsZWZ0VmFsdWU6IDI1MSxcbiAgICAgICAgICAgIG1pbnV0ZVZhbHVlOiAzNjAsXG4gICAgICAgICAgICBob3VyVmFsdWU6IDMwXG4gICAgICAgICAgfVxuICAgICAgKSwgMClcbiAgICAgIHRpbWVsaW5lLmFkZChUd2VlbkxpdGUuZnJvbVRvKCdnI3dvcmstdGV4dCcsIDAuMSwge2ZpbGw6ICdyZ2IoMTgsIDg0LCAxNzYpJ30sIHtmaWxsOiAncmdiKDI1NSwgMjU1LCAyNTUpJ30pLCAwLjEpXG4gICAgICB0aGlzLnRpbWVsaW5lID0gdGltZWxpbmVcbiAgICB9LFxuICAgIG9uSG92ZXI6IGZ1bmN0aW9uIChlKSB7XG4gICAgICBpZiAoZS50eXBlICE9PSBcInRvdWNoc3RhcnRcIikge1xuICAgICAgICB0aGlzLnRpbWVsaW5lLnBhdXNlKCkucGxheSgpXG4gICAgICB9XG4gICAgfSxcbiAgICBvbkxlYXZlOiBmdW5jdGlvbiAoZSkge1xuICAgICAgaWYgKGUudHlwZSAhPT0gXCJ0b3VjaHN0YXJ0XCIpIHtcbiAgICAgICAgdGhpcy50aW1lbGluZS5wYXVzZSgpLnJldmVyc2UoKVxuICAgICAgfVxuICAgIH0sXG4gICAgb25Ub3VjaFN0YXJ0KCkge1xuICAgICAgdGhpcy50b3VjaGVkID0gIXRoaXMudG91Y2hlZFxuICAgIH0sXG4gIH0sXG4gIGNvbXB1dGVkOiB7XG4gICAgcGllRGFzaEFycmF5OiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gYCR7KHRoaXMuYW5pbWF0aW9uLmxlZnRWYWx1ZSkgPyB0aGlzLmFuaW1hdGlvbi5sZWZ0VmFsdWUgOiAwfSAyNTFgXG4gICAgfSxcbiAgICBtaW51dGVUcmFuc2Zvcm06IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBgcm90YXRlKCR7KHRoaXMuYW5pbWF0aW9uLm1pbnV0ZVZhbHVlKSA/IHRoaXMuYW5pbWF0aW9uLm1pbnV0ZVZhbHVlIDogMH0sIDYsIDc4KWBcbiAgICB9LFxuICAgIGhvdXJUcmFuc2Zvcm06IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBgdHJhbnNsYXRlKC0xNSwzKSByb3RhdGUoJHsodGhpcy5hbmltYXRpb24uaG91clZhbHVlKSA/IHRoaXMuYW5pbWF0aW9uLmhvdXJWYWx1ZSA6IDB9LCAyMSwgNzUpYFxuICAgIH1cbiAgfVxufVxuPC9zY3JpcHQ+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3BhZ2VzL3ByaWNlL0Nsb2NrLnZ1ZSIsInZhciBkaXNwb3NlZCA9IGZhbHNlXG52YXIgbm9ybWFsaXplQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIilcbi8qIHNjcmlwdCAqL1xudmFyIF9fdnVlX3NjcmlwdF9fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVudlxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZSxcXFwidGFyZ2V0c1xcXCI6e1xcXCJicm93c2Vyc1xcXCI6W1xcXCI+IDIlXFxcIl0sXFxcInVnbGlmeVxcXCI6dHJ1ZX19XV0sXFxcInBsdWdpbnNcXFwiOltcXFwidHJhbnNmb3JtLW9iamVjdC1yZXN0LXNwcmVhZFxcXCIsW1xcXCJ0cmFuc2Zvcm0tcnVudGltZVxcXCIse1xcXCJwb2x5ZmlsbFxcXCI6ZmFsc2UsXFxcImhlbHBlcnNcXFwiOmZhbHNlfV1dfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL0Nsb2NrLnZ1ZVwiKVxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gbnVsbFxuLyogdGVtcGxhdGUgZnVuY3Rpb25hbCAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyA9IGZhbHNlXG4vKiBzdHlsZXMgKi9cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IG51bGxcbi8qIHNjb3BlSWQgKi9cbnZhciBfX3Z1ZV9zY29wZUlkX18gPSBudWxsXG4vKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbnZhciBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fID0gbnVsbFxudmFyIENvbXBvbmVudCA9IG5vcm1hbGl6ZUNvbXBvbmVudChcbiAgX192dWVfc2NyaXB0X18sXG4gIF9fdnVlX3RlbXBsYXRlX18sXG4gIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyxcbiAgX192dWVfc3R5bGVzX18sXG4gIF9fdnVlX3Njb3BlSWRfXyxcbiAgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfX1xuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvcGFnZXMvcHJpY2UvQ2xvY2sudnVlXCJcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1sb2FkZXIvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTI3Nzg5MzU0XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtMjc3ODkzNTRcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgZGlzcG9zZWQgPSB0cnVlXG4gIH0pXG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9wYWdlcy9wcmljZS9DbG9jay52dWVcbi8vIG1vZHVsZSBpZCA9IC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3BhZ2VzL3ByaWNlL0Nsb2NrLnZ1ZVxuLy8gbW9kdWxlIGNodW5rcyA9IDUiXSwic291cmNlUm9vdCI6IiJ9