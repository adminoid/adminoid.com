webpackJsonp([4],{

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/pages/portfolio/Zoom.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__("./node_modules/jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);


/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    image: {
      type: String,
      default: '.zoom'
    }
  },
  data: function data() {
    return {
      initialData: {
        wrapperWidth: 0,
        wrapperHeight: 0,
        imageWidth: 0,
        imageHeight: 0,
        widthProportion: 1,
        heightProportion: 1,
        startLeft: this.startLeft,
        startTop: this.startTop
      },
      selectors: {
        image: this.image
      },
      cursor: {
        x: 0,
        y: 0
      },
      $wrapper: {},
      $image: {},
      border: 100
    };
  },
  created: function created() {
    //      this.calculateSizesAndProportions()
    window.addEventListener('resize', this.calculateSizesAndProportions);
  },
  mounted: function mounted() {
    this.makeStartUpData();
    this.calculateSizesAndProportions();
  },
  beforeDestroy: function beforeDestroy() {
    window.removeEventListener('resize', this.calculateSizesAndProportions);
  },
  methods: {
    makeStartUpData: function makeStartUpData() {
      this.$wrapper = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this.$el);
      this.$image = this.$wrapper.find(this.selectors.image);
    },
    calculateSizesAndProportions: function calculateSizesAndProportions() {
      this.initialData.wrapperWidth = this.$wrapper.width();
      this.initialData.wrapperHeight = this.$wrapper.height();
      this.initialData.imageWidth = this.$image[0].naturalWidth + this.border * 2;
      this.initialData.imageHeight = this.$image[0].naturalHeight + this.border * 2;
      this.initialData.widthProportion = this.initialData.imageWidth / this.initialData.wrapperWidth;
      this.initialData.heightProportion = this.initialData.imageHeight / this.initialData.wrapperHeight;
    },
    startZoom: function startZoom(e) {
      this.$image.css('position', 'absolute');
      this.$image.removeClass('ui fluid image');
    },
    onZoom: function onZoom(e) {
      this.calculateCursorPosition(e);
    },
    stopZoom: function stopZoom() {
      // restore to original
      this.$image.css('position', 'static');
      this.$image.addClass('ui fluid image');
    },
    calculateCursorPosition: function calculateCursorPosition(e) {
      var xPos = e.pageX - this.$wrapper.offset().left;
      var yPos = e.pageY - this.$wrapper.offset().top;
      this.cursor.x = parseInt(xPos, 10);
      this.cursor.y = parseInt(yPos, 10);
    }
  },
  computed: {
    left: function left() {
      if (this.cursor.x) {
        return -(this.cursor.x * this.initialData.widthProportion - this.cursor.x - this.border);
      }
    },
    top: function top() {
      if (this.cursor.y) {
        return -(this.cursor.y * this.initialData.heightProportion - this.cursor.y - this.border);
      }
    }
  }
});

/***/ }),

/***/ "./resources/assets/js/components/pages/portfolio/Zoom.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/pages/portfolio/Zoom.vue")
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
Component.options.__file = "resources/assets/js/components/pages/portfolio/Zoom.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-a60b53c8", Component.options)
  } else {
    hotAPI.reload("data-v-a60b53c8", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3BhZ2VzL3BvcnRmb2xpby9ab29tLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvcGFnZXMvcG9ydGZvbGlvL1pvb20udnVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQURBO0FBRUE7QUFGQTtBQURBLEdBREE7QUFPQTtBQUNBO0FBQ0E7QUFDQSx1QkFEQTtBQUVBLHdCQUZBO0FBR0EscUJBSEE7QUFJQSxzQkFKQTtBQUtBLDBCQUxBO0FBTUEsMkJBTkE7QUFPQSxpQ0FQQTtBQVFBO0FBUkEsT0FEQTtBQVdBO0FBQ0E7QUFEQSxPQVhBO0FBY0E7QUFDQSxZQURBO0FBRUE7QUFGQSxPQWRBO0FBa0JBLGtCQWxCQTtBQW1CQSxnQkFuQkE7QUFvQkE7QUFwQkE7QUFzQkEsR0E5QkE7QUErQkE7QUFDQTtBQUNBO0FBQ0EsR0FsQ0E7QUFtQ0E7QUFDQTtBQUNBO0FBQ0EsR0F0Q0E7QUF1Q0E7QUFDQTtBQUNBLEdBekNBO0FBMENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FKQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FaQTtBQWFBO0FBQ0E7QUFDQTtBQUNBLEtBaEJBO0FBaUJBO0FBQ0E7QUFDQSxLQW5CQTtBQW9CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBeEJBO0FBeUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQTlCQSxHQTFDQTtBQTBFQTtBQUNBO0FBQ0E7QUFDQSxpQkFDQSw4RUFEQTtBQUdBO0FBQ0EsS0FQQTtBQVFBO0FBQ0E7QUFDQSxpQkFDQSwrRUFEQTtBQUdBO0FBQ0E7QUFkQTtBQTFFQSxHOzs7Ozs7O0FDRkE7QUFDQTtBQUNBO0FBQ0EscWJBQXNSO0FBQ3RSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7O0FBRUQiLCJmaWxlIjoianMvNC5hOTkyOWZlNjY2ZDMwMjgwMjI1OS5qcyIsInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQ+XG4gIGltcG9ydCAkIGZyb20gJ2pxdWVyeSdcbiAgZXhwb3J0IGRlZmF1bHQge1xuICAgIHByb3BzOiB7XG4gICAgICBpbWFnZToge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIGRlZmF1bHQ6ICcuem9vbSdcbiAgICAgIH1cbiAgICB9LFxuICAgIGRhdGE6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGluaXRpYWxEYXRhOiB7XG4gICAgICAgICAgd3JhcHBlcldpZHRoOiAwLFxuICAgICAgICAgIHdyYXBwZXJIZWlnaHQ6IDAsXG4gICAgICAgICAgaW1hZ2VXaWR0aDogMCxcbiAgICAgICAgICBpbWFnZUhlaWdodDogMCxcbiAgICAgICAgICB3aWR0aFByb3BvcnRpb246IDEsXG4gICAgICAgICAgaGVpZ2h0UHJvcG9ydGlvbjogMSxcbiAgICAgICAgICBzdGFydExlZnQ6IHRoaXMuc3RhcnRMZWZ0LFxuICAgICAgICAgIHN0YXJ0VG9wOiB0aGlzLnN0YXJ0VG9wXG4gICAgICAgIH0sXG4gICAgICAgIHNlbGVjdG9yczoge1xuICAgICAgICAgIGltYWdlOiB0aGlzLmltYWdlXG4gICAgICAgIH0sXG4gICAgICAgIGN1cnNvcjoge1xuICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgeTogMFxuICAgICAgICB9LFxuICAgICAgICAkd3JhcHBlcjoge30sXG4gICAgICAgICRpbWFnZToge30sXG4gICAgICAgIGJvcmRlcjogMTAwXG4gICAgICB9XG4gICAgfSxcbiAgICBjcmVhdGVkOiBmdW5jdGlvbiAoKSB7XG4vLyAgICAgIHRoaXMuY2FsY3VsYXRlU2l6ZXNBbmRQcm9wb3J0aW9ucygpXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5jYWxjdWxhdGVTaXplc0FuZFByb3BvcnRpb25zKVxuICAgIH0sXG4gICAgbW91bnRlZDogZnVuY3Rpb24gKCkge1xuICAgICAgdGhpcy5tYWtlU3RhcnRVcERhdGEoKVxuICAgICAgdGhpcy5jYWxjdWxhdGVTaXplc0FuZFByb3BvcnRpb25zKClcbiAgICB9LFxuICAgIGJlZm9yZURlc3Ryb3k6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLmNhbGN1bGF0ZVNpemVzQW5kUHJvcG9ydGlvbnMpXG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICBtYWtlU3RhcnRVcERhdGE6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy4kd3JhcHBlciA9ICQodGhpcy4kZWwpXG4gICAgICAgIHRoaXMuJGltYWdlID0gdGhpcy4kd3JhcHBlci5maW5kKHRoaXMuc2VsZWN0b3JzLmltYWdlKVxuICAgICAgfSxcbiAgICAgIGNhbGN1bGF0ZVNpemVzQW5kUHJvcG9ydGlvbnM6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5pbml0aWFsRGF0YS53cmFwcGVyV2lkdGggPSB0aGlzLiR3cmFwcGVyLndpZHRoKClcbiAgICAgICAgdGhpcy5pbml0aWFsRGF0YS53cmFwcGVySGVpZ2h0ID0gdGhpcy4kd3JhcHBlci5oZWlnaHQoKVxuICAgICAgICB0aGlzLmluaXRpYWxEYXRhLmltYWdlV2lkdGggPSB0aGlzLiRpbWFnZVswXS5uYXR1cmFsV2lkdGggKyB0aGlzLmJvcmRlciAqIDJcbiAgICAgICAgdGhpcy5pbml0aWFsRGF0YS5pbWFnZUhlaWdodCA9IHRoaXMuJGltYWdlWzBdLm5hdHVyYWxIZWlnaHQgKyB0aGlzLmJvcmRlciAqIDJcbiAgICAgICAgdGhpcy5pbml0aWFsRGF0YS53aWR0aFByb3BvcnRpb24gPSB0aGlzLmluaXRpYWxEYXRhLmltYWdlV2lkdGggLyB0aGlzLmluaXRpYWxEYXRhLndyYXBwZXJXaWR0aFxuICAgICAgICB0aGlzLmluaXRpYWxEYXRhLmhlaWdodFByb3BvcnRpb24gPSB0aGlzLmluaXRpYWxEYXRhLmltYWdlSGVpZ2h0IC8gdGhpcy5pbml0aWFsRGF0YS53cmFwcGVySGVpZ2h0XG4gICAgICB9LFxuICAgICAgc3RhcnRab29tOiBmdW5jdGlvbiAoZSkge1xuICAgICAgICB0aGlzLiRpbWFnZS5jc3MoJ3Bvc2l0aW9uJywgJ2Fic29sdXRlJylcbiAgICAgICAgdGhpcy4kaW1hZ2UucmVtb3ZlQ2xhc3MoJ3VpIGZsdWlkIGltYWdlJylcbiAgICAgIH0sXG4gICAgICBvblpvb206IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHRoaXMuY2FsY3VsYXRlQ3Vyc29yUG9zaXRpb24oZSlcbiAgICAgIH0sXG4gICAgICBzdG9wWm9vbTogZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyByZXN0b3JlIHRvIG9yaWdpbmFsXG4gICAgICAgIHRoaXMuJGltYWdlLmNzcygncG9zaXRpb24nLCAnc3RhdGljJylcbiAgICAgICAgdGhpcy4kaW1hZ2UuYWRkQ2xhc3MoJ3VpIGZsdWlkIGltYWdlJylcbiAgICAgIH0sXG4gICAgICBjYWxjdWxhdGVDdXJzb3JQb3NpdGlvbjogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgbGV0IHhQb3MgPSBlLnBhZ2VYIC0gdGhpcy4kd3JhcHBlci5vZmZzZXQoKS5sZWZ0XG4gICAgICAgIGxldCB5UG9zID0gZS5wYWdlWSAtIHRoaXMuJHdyYXBwZXIub2Zmc2V0KCkudG9wXG4gICAgICAgIHRoaXMuY3Vyc29yLnggPSBwYXJzZUludCh4UG9zLCAxMClcbiAgICAgICAgdGhpcy5jdXJzb3IueSA9IHBhcnNlSW50KHlQb3MsIDEwKVxuICAgICAgfVxuICAgIH0sXG4gICAgY29tcHV0ZWQ6IHtcbiAgICAgIGxlZnQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMuY3Vyc29yLngpIHtcbiAgICAgICAgICByZXR1cm4gLShcbiAgICAgICAgICAgICAgdGhpcy5jdXJzb3IueCAqIHRoaXMuaW5pdGlhbERhdGEud2lkdGhQcm9wb3J0aW9uIC0gdGhpcy5jdXJzb3IueCAtIHRoaXMuYm9yZGVyXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgdG9wOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLmN1cnNvci55KSB7XG4gICAgICAgICAgcmV0dXJuIC0oXG4gICAgICAgICAgICAgIHRoaXMuY3Vyc29yLnkgKiB0aGlzLmluaXRpYWxEYXRhLmhlaWdodFByb3BvcnRpb24gLSB0aGlzLmN1cnNvci55IC0gdGhpcy5ib3JkZXJcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbjwvc2NyaXB0PlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHJlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9wYWdlcy9wb3J0Zm9saW8vWm9vbS52dWUiLCJ2YXIgZGlzcG9zZWQgPSBmYWxzZVxudmFyIG5vcm1hbGl6ZUNvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpXG4vKiBzY3JpcHQgKi9cbnZhciBfX3Z1ZV9zY3JpcHRfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlbnZcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2UsXFxcInRhcmdldHNcXFwiOntcXFwiYnJvd3NlcnNcXFwiOltcXFwiPiAyJVxcXCJdLFxcXCJ1Z2xpZnlcXFwiOnRydWV9fV1dLFxcXCJwbHVnaW5zXFxcIjpbXFxcInRyYW5zZm9ybS1vYmplY3QtcmVzdC1zcHJlYWRcXFwiLFtcXFwidHJhbnNmb3JtLXJ1bnRpbWVcXFwiLHtcXFwicG9seWZpbGxcXFwiOmZhbHNlLFxcXCJoZWxwZXJzXFxcIjpmYWxzZX1dXX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9ab29tLnZ1ZVwiKVxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gbnVsbFxuLyogdGVtcGxhdGUgZnVuY3Rpb25hbCAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyA9IGZhbHNlXG4vKiBzdHlsZXMgKi9cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IG51bGxcbi8qIHNjb3BlSWQgKi9cbnZhciBfX3Z1ZV9zY29wZUlkX18gPSBudWxsXG4vKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbnZhciBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fID0gbnVsbFxudmFyIENvbXBvbmVudCA9IG5vcm1hbGl6ZUNvbXBvbmVudChcbiAgX192dWVfc2NyaXB0X18sXG4gIF9fdnVlX3RlbXBsYXRlX18sXG4gIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyxcbiAgX192dWVfc3R5bGVzX18sXG4gIF9fdnVlX3Njb3BlSWRfXyxcbiAgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfX1xuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvcGFnZXMvcG9ydGZvbGlvL1pvb20udnVlXCJcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1sb2FkZXIvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LWE2MGI1M2M4XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtYTYwYjUzYzhcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgZGlzcG9zZWQgPSB0cnVlXG4gIH0pXG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9wYWdlcy9wb3J0Zm9saW8vWm9vbS52dWVcbi8vIG1vZHVsZSBpZCA9IC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3BhZ2VzL3BvcnRmb2xpby9ab29tLnZ1ZVxuLy8gbW9kdWxlIGNodW5rcyA9IDQiXSwic291cmNlUm9vdCI6IiJ9