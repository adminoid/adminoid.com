webpackJsonp([0],{

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

      border: 150

    };
  },
  created: function created() {
    //      this.calculateSizesAndProportions()
    window.addEventListener('resize', this.calculateSizesAndProportions);
  },

  mounted: function mounted() {
    this.makeStartUpData();
    // setTimeout(this.calculateSizesAndProportions, 500);
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
      this.cursor.x = parseInt('' + xPos, 10);
      this.cursor.y = parseInt('' + yPos, 10);
    }

  },
  computed: {

    left: function left() {
      if (this.cursor.x) {
        return -(this.cursor.x * this.initialData.widthProportion - this.cursor.x - this.border * 1.5);
      }
    },

    top: function top() {
      if (this.cursor.y) {
        return -(this.cursor.y * this.initialData.heightProportion - this.cursor.y - this.border * 1.5);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3BhZ2VzL3BvcnRmb2xpby9ab29tLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvcGFnZXMvcG9ydGZvbGlvL1pvb20udnVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLGtCQURBO0FBRUE7QUFGQTs7QUFEQSxHQUZBOztBQVVBO0FBQ0E7O0FBRUE7QUFDQSx1QkFEQTtBQUVBLHdCQUZBO0FBR0EscUJBSEE7QUFJQSxzQkFKQTtBQUtBLDBCQUxBO0FBTUEsMkJBTkE7QUFPQSxpQ0FQQTtBQVFBO0FBUkEsT0FGQTs7QUFhQTtBQUNBO0FBREEsT0FiQTs7QUFpQkE7QUFDQSxZQURBO0FBRUE7QUFGQSxPQWpCQTs7QUFzQkEsa0JBdEJBOztBQXdCQSxnQkF4QkE7O0FBMEJBOztBQTFCQTtBQTZCQSxHQXhDQTtBQXlDQTtBQUNBO0FBQ0E7QUFDQSxHQTVDQTs7QUE4Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQWxEQTs7QUFvREE7QUFDQTtBQUNBLEdBdERBOztBQXdEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBSkE7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQWJBOztBQWVBO0FBQ0E7QUFDQTtBQUNBLEtBbEJBOztBQW9CQTtBQUNBO0FBQ0EsS0F0QkE7O0FBd0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0E1QkE7O0FBOEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFuQ0EsR0F4REE7QUE4RkE7O0FBRUE7QUFDQTtBQUNBLGlCQUNBLG9GQURBO0FBR0E7QUFDQSxLQVJBOztBQVVBO0FBQ0E7QUFDQSxpQkFDQSxxRkFEQTtBQUdBO0FBQ0E7O0FBaEJBOztBQTlGQSxHOzs7Ozs7O0FDSkE7QUFDQTtBQUNBO0FBQ0EscWJBQXNSO0FBQ3RSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7O0FBRUQiLCJmaWxlIjoianMvMC44ZmQ4MTA1ZGI3NGZkZDE3ZTFiNi5qcyIsInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQ+XG5cbiAgaW1wb3J0ICQgZnJvbSAnanF1ZXJ5J1xuXG4gIGV4cG9ydCBkZWZhdWx0IHtcblxuICAgIHByb3BzOiB7XG4gICAgICBpbWFnZToge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIGRlZmF1bHQ6ICcuem9vbSdcbiAgICAgIH1cbiAgICAgIFxuICAgIH0sXG5cbiAgICBkYXRhOiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4ge1xuXG4gICAgICAgIGluaXRpYWxEYXRhOiB7XG4gICAgICAgICAgd3JhcHBlcldpZHRoOiAwLFxuICAgICAgICAgIHdyYXBwZXJIZWlnaHQ6IDAsXG4gICAgICAgICAgaW1hZ2VXaWR0aDogMCxcbiAgICAgICAgICBpbWFnZUhlaWdodDogMCxcbiAgICAgICAgICB3aWR0aFByb3BvcnRpb246IDEsXG4gICAgICAgICAgaGVpZ2h0UHJvcG9ydGlvbjogMSxcbiAgICAgICAgICBzdGFydExlZnQ6IHRoaXMuc3RhcnRMZWZ0LFxuICAgICAgICAgIHN0YXJ0VG9wOiB0aGlzLnN0YXJ0VG9wXG4gICAgICAgIH0sXG5cbiAgICAgICAgc2VsZWN0b3JzOiB7XG4gICAgICAgICAgaW1hZ2U6IHRoaXMuaW1hZ2VcbiAgICAgICAgfSxcblxuICAgICAgICBjdXJzb3I6IHtcbiAgICAgICAgICB4OiAwLFxuICAgICAgICAgIHk6IDBcbiAgICAgICAgfSxcblxuICAgICAgICAkd3JhcHBlcjoge30sXG5cbiAgICAgICAgJGltYWdlOiB7fSxcblxuICAgICAgICBib3JkZXI6IDE1MCxcblxuICAgICAgfVxuICAgIH0sXG4gICAgY3JlYXRlZDogZnVuY3Rpb24gKCkge1xuLy8gICAgICB0aGlzLmNhbGN1bGF0ZVNpemVzQW5kUHJvcG9ydGlvbnMoKVxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMuY2FsY3VsYXRlU2l6ZXNBbmRQcm9wb3J0aW9ucyk7XG4gICAgfSxcblxuICAgIG1vdW50ZWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHRoaXMubWFrZVN0YXJ0VXBEYXRhKCk7XG4gICAgICAvLyBzZXRUaW1lb3V0KHRoaXMuY2FsY3VsYXRlU2l6ZXNBbmRQcm9wb3J0aW9ucywgNTAwKTtcbiAgICAgIHRoaXMuY2FsY3VsYXRlU2l6ZXNBbmRQcm9wb3J0aW9ucygpO1xuICAgIH0sXG5cbiAgICBiZWZvcmVEZXN0cm95OiBmdW5jdGlvbiAoKSB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5jYWxjdWxhdGVTaXplc0FuZFByb3BvcnRpb25zKTtcbiAgICB9LFxuXG4gICAgbWV0aG9kczoge1xuICAgICAgbWFrZVN0YXJ0VXBEYXRhOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuJHdyYXBwZXIgPSAkKHRoaXMuJGVsKTtcbiAgICAgICAgdGhpcy4kaW1hZ2UgPSB0aGlzLiR3cmFwcGVyLmZpbmQodGhpcy5zZWxlY3RvcnMuaW1hZ2UpO1xuICAgICAgfSxcblxuICAgICAgY2FsY3VsYXRlU2l6ZXNBbmRQcm9wb3J0aW9uczogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmluaXRpYWxEYXRhLndyYXBwZXJXaWR0aCA9IHRoaXMuJHdyYXBwZXIud2lkdGgoKTtcbiAgICAgICAgdGhpcy5pbml0aWFsRGF0YS53cmFwcGVySGVpZ2h0ID0gdGhpcy4kd3JhcHBlci5oZWlnaHQoKTtcbiAgICAgICAgdGhpcy5pbml0aWFsRGF0YS5pbWFnZVdpZHRoID0gdGhpcy4kaW1hZ2VbMF0ubmF0dXJhbFdpZHRoICsgdGhpcy5ib3JkZXIgKiAyO1xuICAgICAgICB0aGlzLmluaXRpYWxEYXRhLmltYWdlSGVpZ2h0ID0gdGhpcy4kaW1hZ2VbMF0ubmF0dXJhbEhlaWdodCArIHRoaXMuYm9yZGVyICogMjtcbiAgICAgICAgdGhpcy5pbml0aWFsRGF0YS53aWR0aFByb3BvcnRpb24gPSB0aGlzLmluaXRpYWxEYXRhLmltYWdlV2lkdGggLyB0aGlzLmluaXRpYWxEYXRhLndyYXBwZXJXaWR0aDtcbiAgICAgICAgdGhpcy5pbml0aWFsRGF0YS5oZWlnaHRQcm9wb3J0aW9uID0gdGhpcy5pbml0aWFsRGF0YS5pbWFnZUhlaWdodCAvIHRoaXMuaW5pdGlhbERhdGEud3JhcHBlckhlaWdodDtcbiAgICAgIH0sXG5cbiAgICAgIHN0YXJ0Wm9vbTogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgdGhpcy4kaW1hZ2UuY3NzKCdwb3NpdGlvbicsICdhYnNvbHV0ZScpO1xuICAgICAgICB0aGlzLiRpbWFnZS5yZW1vdmVDbGFzcygndWkgZmx1aWQgaW1hZ2UnKTtcbiAgICAgIH0sXG5cbiAgICAgIG9uWm9vbTogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgdGhpcy5jYWxjdWxhdGVDdXJzb3JQb3NpdGlvbihlKTtcbiAgICAgIH0sXG5cbiAgICAgIHN0b3Bab29tOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIHJlc3RvcmUgdG8gb3JpZ2luYWxcbiAgICAgICAgdGhpcy4kaW1hZ2UuY3NzKCdwb3NpdGlvbicsICdzdGF0aWMnKTtcbiAgICAgICAgdGhpcy4kaW1hZ2UuYWRkQ2xhc3MoJ3VpIGZsdWlkIGltYWdlJyk7XG4gICAgICB9LFxuXG4gICAgICBjYWxjdWxhdGVDdXJzb3JQb3NpdGlvbjogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgbGV0IHhQb3MgPSBlLnBhZ2VYIC0gdGhpcy4kd3JhcHBlci5vZmZzZXQoKS5sZWZ0O1xuICAgICAgICBsZXQgeVBvcyA9IGUucGFnZVkgLSB0aGlzLiR3cmFwcGVyLm9mZnNldCgpLnRvcDtcbiAgICAgICAgdGhpcy5jdXJzb3IueCA9IHBhcnNlSW50KCcnKyB4UG9zLCAxMCk7XG4gICAgICAgIHRoaXMuY3Vyc29yLnkgPSBwYXJzZUludCgnJysgeVBvcywgMTApO1xuICAgICAgfVxuXG4gICAgfSxcbiAgICBjb21wdXRlZDoge1xuXG4gICAgICBsZWZ0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLmN1cnNvci54KSB7XG4gICAgICAgICAgcmV0dXJuIC0oXG4gICAgICAgICAgICAgIHRoaXMuY3Vyc29yLnggKiB0aGlzLmluaXRpYWxEYXRhLndpZHRoUHJvcG9ydGlvbiAtIHRoaXMuY3Vyc29yLnggLSB0aGlzLmJvcmRlciAqIDEuNVxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfSxcblxuICAgICAgdG9wOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLmN1cnNvci55KSB7XG4gICAgICAgICAgcmV0dXJuIC0oXG4gICAgICAgICAgICAgIHRoaXMuY3Vyc29yLnkgKiB0aGlzLmluaXRpYWxEYXRhLmhlaWdodFByb3BvcnRpb24gLSB0aGlzLmN1cnNvci55IC0gdGhpcy5ib3JkZXIgKiAxLjVcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgIH1cblxuICB9XG48L3NjcmlwdD5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyByZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvcGFnZXMvcG9ydGZvbGlvL1pvb20udnVlIiwidmFyIGRpc3Bvc2VkID0gZmFsc2VcbnZhciBub3JtYWxpemVDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKVxuLyogc2NyaXB0ICovXG52YXIgX192dWVfc2NyaXB0X18gPSByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZW52XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlLFxcXCJ0YXJnZXRzXFxcIjp7XFxcImJyb3dzZXJzXFxcIjpbXFxcIj4gMiVcXFwiXSxcXFwidWdsaWZ5XFxcIjp0cnVlfX1dXSxcXFwicGx1Z2luc1xcXCI6W1xcXCJ0cmFuc2Zvcm0tb2JqZWN0LXJlc3Qtc3ByZWFkXFxcIixbXFxcInRyYW5zZm9ybS1ydW50aW1lXFxcIix7XFxcInBvbHlmaWxsXFxcIjpmYWxzZSxcXFwiaGVscGVyc1xcXCI6ZmFsc2V9XV19IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vWm9vbS52dWVcIilcbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfdGVtcGxhdGVfXyA9IG51bGxcbi8qIHRlbXBsYXRlIGZ1bmN0aW9uYWwgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18gPSBmYWxzZVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBudWxsXG4vKiBzY29wZUlkICovXG52YXIgX192dWVfc2NvcGVJZF9fID0gbnVsbFxuLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG52YXIgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfXyA9IG51bGxcbnZhciBDb21wb25lbnQgPSBub3JtYWxpemVDb21wb25lbnQoXG4gIF9fdnVlX3NjcmlwdF9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18sXG4gIF9fdnVlX3N0eWxlc19fLFxuICBfX3Z1ZV9zY29wZUlkX18sXG4gIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX19cbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3BhZ2VzL3BvcnRmb2xpby9ab29tLnZ1ZVwiXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtbG9hZGVyL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi1hNjBiNTNjOFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LWE2MGI1M2M4XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvcGFnZXMvcG9ydGZvbGlvL1pvb20udnVlXG4vLyBtb2R1bGUgaWQgPSAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9wYWdlcy9wb3J0Zm9saW8vWm9vbS52dWVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==