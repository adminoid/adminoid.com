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
      touched: false,
      touch: false
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
    this.touch = window.navigator.userAgent.indexOf('Mobile') !== -1;
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
    onHover: function onHover() {
      if (!this.touch) {
        this.timeline.pause().play();
      }
    },
    onLeave: function onLeave() {
      if (!this.touch) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3BhZ2VzL3ByaWNlL0Nsb2NrLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvcGFnZXMvcHJpY2UvQ2xvY2sudnVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBREE7QUFFQTtBQUNBLG9CQURBO0FBRUEsc0JBRkE7QUFHQTtBQUhBLE9BRkE7QUFPQSxvQkFQQTtBQVFBO0FBUkE7QUFVQSxHQVpBOztBQWNBO0FBQ0EsV0FEQSxtQkFDQSxFQURBLEVBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FGQSxNQUVBO0FBQ0E7QUFDQTtBQUNBO0FBUEEsR0FkQTs7QUF3QkE7QUFDQTtBQUNBO0FBQ0EsR0EzQkE7QUE0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtGQUNBO0FBQ0Esb0JBREE7QUFFQSxzQkFGQTtBQUdBO0FBSEEsT0FEQSxFQUtBO0FBQ0Esc0JBREE7QUFFQSx3QkFGQTtBQUdBO0FBSEEsT0FMQSxHQVVBLENBVkE7QUFXQTtBQUNBO0FBQ0EsS0FsQkE7QUFtQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQXZCQTtBQXdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBNUJBO0FBNkJBLGdCQTdCQSwwQkE2QkE7QUFDQTtBQUNBO0FBL0JBLEdBNUJBO0FBNkRBO0FBQ0E7QUFDQTtBQUNBLEtBSEE7QUFJQTtBQUNBO0FBQ0EsS0FOQTtBQU9BO0FBQ0E7QUFDQTtBQVRBO0FBN0RBLEc7Ozs7Ozs7QUNGQTtBQUNBO0FBQ0E7QUFDQSxrYkFBc1I7QUFDdFI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7QUFFRCIsImZpbGUiOiJqcy81LmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHNjcmlwdD5cbmltcG9ydCB7VGltZWxpbmVMaXRlLCBUd2VlbkxpdGV9IGZyb20gJ2dzYXAnXG5leHBvcnQgZGVmYXVsdCB7XG4gIGRhdGE6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdGltZWxpbmU6IHt9LFxuICAgICAgYW5pbWF0aW9uOiB7XG4gICAgICAgIGxlZnRWYWx1ZTogMCxcbiAgICAgICAgbWludXRlVmFsdWU6IDAsXG4gICAgICAgIGhvdXJWYWx1ZTogMFxuICAgICAgfSxcbiAgICAgIHRvdWNoZWQ6IGZhbHNlLFxuICAgICAgdG91Y2g6IGZhbHNlLFxuICAgIH1cbiAgfSxcblxuICB3YXRjaDoge1xuICAgIHRvdWNoZWQoaXMpIHtcbiAgICAgIGlmIChpcykge1xuICAgICAgICB0aGlzLnRpbWVsaW5lLnBhdXNlKCkucGxheSgpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnRpbWVsaW5lLnBhdXNlKCkucmV2ZXJzZSgpXG4gICAgICB9XG4gICAgfVxuICB9LFxuXG4gIG1vdW50ZWQ6IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLnRvdWNoID0gd2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZignTW9iaWxlJykgIT09IC0xXG4gICAgdGhpcy5jb21waWxlVGltZWxpbmUoKVxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgLy8gdG9kbzogYWRkIG9uVG91Y2hcbiAgICAvLyB0b2RvOiBtYXkgYmUgYWRkIGNsaWNrIGN1cnNvciBmb3IgbW9iaWxlIHNjcmVlblxuICAgIGNvbXBpbGVUaW1lbGluZTogZnVuY3Rpb24gKCkge1xuICAgICAgY29uc3QgdGltZWxpbmUgPSBuZXcgVGltZWxpbmVMaXRlKHtwYXVzZWQ6IHRydWV9KVxuICAgICAgdGltZWxpbmUuYWRkKFR3ZWVuTGl0ZS5mcm9tVG8odGhpcy5hbmltYXRpb24sIDAuNSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBsZWZ0VmFsdWU6IDAsXG4gICAgICAgICAgICBtaW51dGVWYWx1ZTogMCxcbiAgICAgICAgICAgIGhvdXJWYWx1ZTogMFxuICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgIGxlZnRWYWx1ZTogMjUxLFxuICAgICAgICAgICAgbWludXRlVmFsdWU6IDM2MCxcbiAgICAgICAgICAgIGhvdXJWYWx1ZTogMzBcbiAgICAgICAgICB9XG4gICAgICApLCAwKVxuICAgICAgdGltZWxpbmUuYWRkKFR3ZWVuTGl0ZS5mcm9tVG8oJ2cjd29yay10ZXh0JywgMC4xLCB7ZmlsbDogJ3JnYigxOCwgODQsIDE3NiknfSwge2ZpbGw6ICdyZ2IoMjU1LCAyNTUsIDI1NSknfSksIDAuMSlcbiAgICAgIHRoaXMudGltZWxpbmUgPSB0aW1lbGluZVxuICAgIH0sXG4gICAgb25Ib3ZlcjogZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKCF0aGlzLnRvdWNoKSB7XG4gICAgICAgIHRoaXMudGltZWxpbmUucGF1c2UoKS5wbGF5KClcbiAgICAgIH1cbiAgICB9LFxuICAgIG9uTGVhdmU6IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICghdGhpcy50b3VjaCkge1xuICAgICAgICB0aGlzLnRpbWVsaW5lLnBhdXNlKCkucmV2ZXJzZSgpXG4gICAgICB9XG4gICAgfSxcbiAgICBvblRvdWNoU3RhcnQoKSB7XG4gICAgICB0aGlzLnRvdWNoZWQgPSAhdGhpcy50b3VjaGVkXG4gICAgfSxcbiAgfSxcbiAgY29tcHV0ZWQ6IHtcbiAgICBwaWVEYXNoQXJyYXk6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBgJHsodGhpcy5hbmltYXRpb24ubGVmdFZhbHVlKSA/IHRoaXMuYW5pbWF0aW9uLmxlZnRWYWx1ZSA6IDB9IDI1MWBcbiAgICB9LFxuICAgIG1pbnV0ZVRyYW5zZm9ybTogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGByb3RhdGUoJHsodGhpcy5hbmltYXRpb24ubWludXRlVmFsdWUpID8gdGhpcy5hbmltYXRpb24ubWludXRlVmFsdWUgOiAwfSwgNiwgNzgpYFxuICAgIH0sXG4gICAgaG91clRyYW5zZm9ybTogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGB0cmFuc2xhdGUoLTE1LDMpIHJvdGF0ZSgkeyh0aGlzLmFuaW1hdGlvbi5ob3VyVmFsdWUpID8gdGhpcy5hbmltYXRpb24uaG91clZhbHVlIDogMH0sIDIxLCA3NSlgXG4gICAgfVxuICB9XG59XG48L3NjcmlwdD5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyByZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvcGFnZXMvcHJpY2UvQ2xvY2sudnVlIiwidmFyIGRpc3Bvc2VkID0gZmFsc2VcbnZhciBub3JtYWxpemVDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKVxuLyogc2NyaXB0ICovXG52YXIgX192dWVfc2NyaXB0X18gPSByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZW52XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlLFxcXCJ0YXJnZXRzXFxcIjp7XFxcImJyb3dzZXJzXFxcIjpbXFxcIj4gMiVcXFwiXSxcXFwidWdsaWZ5XFxcIjp0cnVlfX1dXSxcXFwicGx1Z2luc1xcXCI6W1xcXCJ0cmFuc2Zvcm0tb2JqZWN0LXJlc3Qtc3ByZWFkXFxcIixbXFxcInRyYW5zZm9ybS1ydW50aW1lXFxcIix7XFxcInBvbHlmaWxsXFxcIjpmYWxzZSxcXFwiaGVscGVyc1xcXCI6ZmFsc2V9XV19IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vQ2xvY2sudnVlXCIpXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSBudWxsXG4vKiB0ZW1wbGF0ZSBmdW5jdGlvbmFsICovXG52YXIgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fID0gZmFsc2Vcbi8qIHN0eWxlcyAqL1xudmFyIF9fdnVlX3N0eWxlc19fID0gbnVsbFxuLyogc2NvcGVJZCAqL1xudmFyIF9fdnVlX3Njb3BlSWRfXyA9IG51bGxcbi8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xudmFyIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSBudWxsXG52YXIgQ29tcG9uZW50ID0gbm9ybWFsaXplQ29tcG9uZW50KFxuICBfX3Z1ZV9zY3JpcHRfXyxcbiAgX192dWVfdGVtcGxhdGVfXyxcbiAgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fLFxuICBfX3Z1ZV9zdHlsZXNfXyxcbiAgX192dWVfc2NvcGVJZF9fLFxuICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9wYWdlcy9wcmljZS9DbG9jay52dWVcIlxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWxvYWRlci9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtMjc3ODkzNTRcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi0yNzc4OTM1NFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBkaXNwb3NlZCA9IHRydWVcbiAgfSlcbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3BhZ2VzL3ByaWNlL0Nsb2NrLnZ1ZVxuLy8gbW9kdWxlIGlkID0gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvcGFnZXMvcHJpY2UvQ2xvY2sudnVlXG4vLyBtb2R1bGUgY2h1bmtzID0gNSJdLCJzb3VyY2VSb290IjoiIn0=