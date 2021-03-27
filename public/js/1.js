webpackJsonp([1],{

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/pages/portfolio/VideoBackground.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({

  props: {
    video: {
      type: String
    }
  },

  data: function data() {
    return {
      play: true
    };
  },


  computed: {
    action: function action() {
      return this.play ? 'pause' : 'play';
    },
    imgSrc: function imgSrc() {
      return "/static/img/adminoid/pages/portfolio/video/" + this.action + ".svg";
    }
  },

  methods: {
    togglePlay: function togglePlay() {
      var video = this.$refs.video;
      if (this.play) {
        video.pause();
        this.play = false;
      } else {
        video.play();
        this.play = true;
      }
    }
  },

  filters: {
    capitalize: function capitalize(value) {
      if (!value) return '';
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    }
  }

});

/***/ }),

/***/ "./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-44a01450\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/pages/portfolio/VideoBackground.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "\n.video {\n  text-align: center;\n  position: relative;\n}\n.video video{\n  margin: 0 auto;\n}\n.video__description {\n  text-align: left;\n  margin-bottom: 20px;\n}\n.video__button {\n  display: block;\n  position: absolute;\n  right: 50px;\n  bottom: 40px;\n  opacity: .8;\n  text-align: center;\n  width: 200px;\n}\n.video__button.play {\n  padding-left: 40px;\n}\n.video__button img {\n  display: inline-block;\n}\n\n", "", {"version":3,"sources":["/Users/petja/PhpstormProjects/sites/adminoid.com/resources/assets/js/components/pages/portfolio/resources/assets/js/components/pages/portfolio/VideoBackground.vue"],"names":[],"mappings":";AAoEA;EACA,mBAAA;EACA,mBAAA;CACA;AAEA;EACA,eAAA;CACA;AAEA;EACA,iBAAA;EACA,oBAAA;CACA;AAEA;EACA,eAAA;EACA,mBAAA;EACA,YAAA;EACA,aAAA;EACA,YAAA;EACA,mBAAA;EACA,aAAA;CACA;AAEA;EACA,mBAAA;CACA;AAEA;EACA,sBAAA;CACA","file":"VideoBackground.vue","sourcesContent":["<template>\n  <div class=\"video\">\n\n    <div class=\"video__description\">\n      <slot/>\n    </div>\n\n    <video ref=\"video\" class=\"video__background\" autoplay loop muted playsinline width=\"100%\" height=\"100%\" src=\"https://adminoid.com/static/img/adminoid/pages/cc/motion.mp4\" type=\"video/mp4\"/>\n\n    <a class=\"video__button\" :class=\"action\" href=\"#\" @click.prevent=\"togglePlay\">\n      <img :src=\"imgSrc\" :alt=\"action | capitalize\">\n    </a>\n\n  </div>\n</template>\n\n<script>\n  export default {\n\n    props: {\n      video: {\n        type: String,\n      }\n    },\n\n    data() {\n      return {\n        play: true,\n      }\n    },\n\n    computed: {\n      action() {\n        return (this.play) ? 'pause' : 'play';\n      },\n\n      imgSrc() {\n        return \"/static/img/adminoid/pages/portfolio/video/\" + this.action + \".svg\";\n      }\n    },\n\n    methods: {\n      togglePlay () {\n        let video = this.$refs.video;\n        if ( this.play ) {\n          video.pause();\n          this.play = false;\n        }\n        else {\n          video.play();\n          this.play = true;\n        }\n      },\n    },\n\n    filters: {\n      capitalize: function (value) {\n        if (!value) return '';\n        value = value.toString();\n        return value.charAt(0).toUpperCase() + value.slice(1);\n      }\n    }\n\n  }\n</script>\n\n<style>\n\n  .video {\n    text-align: center;\n    position: relative;\n  }\n\n  .video video{\n    margin: 0 auto;\n  }\n\n  .video__description {\n    text-align: left;\n    margin-bottom: 20px;\n  }\n\n  .video__button {\n    display: block;\n    position: absolute;\n    right: 50px;\n    bottom: 40px;\n    opacity: .8;\n    text-align: center;\n    width: 200px;\n  }\n\n  .video__button.play {\n    padding-left: 40px;\n  }\n\n  .video__button img {\n    display: inline-block;\n  }\n\n</style>\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-44a01450\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/pages/portfolio/VideoBackground.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "video" }, [
    _c("div", { staticClass: "video__description" }, [_vm._t("default")], 2),
    _vm._v(" "),
    _c("video", {
      ref: "video",
      staticClass: "video__background",
      attrs: {
        autoplay: "",
        loop: "",
        muted: "",
        playsinline: "",
        width: "100%",
        height: "100%",
        src: "https://adminoid.com/static/img/adminoid/pages/cc/motion.mp4",
        type: "video/mp4"
      },
      domProps: { muted: true }
    }),
    _vm._v(" "),
    _c(
      "a",
      {
        staticClass: "video__button",
        class: _vm.action,
        attrs: { href: "#" },
        on: {
          click: function($event) {
            $event.preventDefault()
            return _vm.togglePlay($event)
          }
        }
      },
      [
        _c("img", {
          attrs: { src: _vm.imgSrc, alt: _vm._f("capitalize")(_vm.action) }
        })
      ]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-loader/node_modules/vue-hot-reload-api")      .rerender("data-v-44a01450", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-44a01450\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/pages/portfolio/VideoBackground.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-44a01450\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/pages/portfolio/VideoBackground.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("d278cfe0", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-44a01450\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./VideoBackground.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-44a01450\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./VideoBackground.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./resources/assets/js/components/pages/portfolio/VideoBackground.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-44a01450\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/pages/portfolio/VideoBackground.vue")
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/pages/portfolio/VideoBackground.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-44a01450\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/pages/portfolio/VideoBackground.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
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
Component.options.__file = "resources/assets/js/components/pages/portfolio/VideoBackground.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-44a01450", Component.options)
  } else {
    hotAPI.reload("data-v-44a01450", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3BhZ2VzL3BvcnRmb2xpby9WaWRlb0JhY2tncm91bmQudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9wYWdlcy9wb3J0Zm9saW8vVmlkZW9CYWNrZ3JvdW5kLnZ1ZT9mMzRjIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9wYWdlcy9wb3J0Zm9saW8vVmlkZW9CYWNrZ3JvdW5kLnZ1ZT9jYWE3Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9wYWdlcy9wb3J0Zm9saW8vVmlkZW9CYWNrZ3JvdW5kLnZ1ZT9iZDdjIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9wYWdlcy9wb3J0Zm9saW8vVmlkZW9CYWNrZ3JvdW5kLnZ1ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQkE7O0FBRUE7QUFDQTtBQUNBO0FBREE7QUFEQSxHQUZBOztBQVFBLE1BUkEsa0JBUUE7QUFDQTtBQUNBO0FBREE7QUFHQSxHQVpBOzs7QUFjQTtBQUNBLFVBREEsb0JBQ0E7QUFDQTtBQUNBLEtBSEE7QUFLQSxVQUxBLG9CQUtBO0FBQ0E7QUFDQTtBQVBBLEdBZEE7O0FBd0JBO0FBQ0EsY0FEQSx3QkFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FIQSxNQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFYQSxHQXhCQTs7QUFzQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7O0FBdENBLEc7Ozs7Ozs7QUNqQkE7QUFDQTs7O0FBR0E7QUFDQSxtQ0FBb0MsdUJBQXVCLHVCQUF1QixHQUFHLGVBQWUsbUJBQW1CLEdBQUcsdUJBQXVCLHFCQUFxQix3QkFBd0IsR0FBRyxrQkFBa0IsbUJBQW1CLHVCQUF1QixnQkFBZ0IsaUJBQWlCLGdCQUFnQix1QkFBdUIsaUJBQWlCLEdBQUcsdUJBQXVCLHVCQUF1QixHQUFHLHNCQUFzQiwwQkFBMEIsR0FBRyxZQUFZLHFOQUFxTixNQUFNLFdBQVcsV0FBVyxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssV0FBVyxXQUFXLEtBQUssS0FBSyxVQUFVLFdBQVcsVUFBVSxVQUFVLFVBQVUsV0FBVyxVQUFVLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLDBrQkFBMGtCLGdCQUFnQixnQkFBZ0IsZ0NBQWdDLE9BQU8saUJBQWlCLGdCQUFnQiw4QkFBOEIsT0FBTyxvQkFBb0Isa0JBQWtCLGdEQUFnRCxTQUFTLHFCQUFxQiwwRkFBMEYsU0FBUyxPQUFPLG1CQUFtQix1QkFBdUIsdUNBQXVDLDRCQUE0QiwwQkFBMEIsOEJBQThCLFdBQVcsZ0JBQWdCLHlCQUF5Qiw2QkFBNkIsV0FBVyxTQUFTLFFBQVEsbUJBQW1CLHNDQUFzQyxnQ0FBZ0MsbUNBQW1DLGdFQUFnRSxTQUFTLE9BQU8sT0FBTyxvQ0FBb0MseUJBQXlCLHlCQUF5QixLQUFLLG1CQUFtQixxQkFBcUIsS0FBSywyQkFBMkIsdUJBQXVCLDBCQUEwQixLQUFLLHNCQUFzQixxQkFBcUIseUJBQXlCLGtCQUFrQixtQkFBbUIsa0JBQWtCLHlCQUF5QixtQkFBbUIsS0FBSywyQkFBMkIseUJBQXlCLEtBQUssMEJBQTBCLDRCQUE0QixLQUFLLGlDQUFpQzs7QUFFOXhGOzs7Ozs7OztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHVCQUF1QjtBQUMzQyxlQUFlLG9DQUFvQztBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxpQkFBaUI7QUFDakIsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixZQUFZO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7QUNwREE7O0FBRUE7QUFDQSw2VkFBK087QUFDL087QUFDQTtBQUNBO0FBQ0EseUhBQThIO0FBQzlIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEpBQTRKLGtGQUFrRjtBQUM5TyxxS0FBcUssa0ZBQWtGO0FBQ3ZQO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLGdDQUFnQyxVQUFVLEVBQUU7QUFDNUMsQzs7Ozs7OztBQ3BCQTtBQUNBO0FBQ0E7QUFDQSwwWEFBeU07QUFDek07QUFDQTtBQUNBO0FBQ0EsZ2NBQXNSO0FBQ3RSO0FBQ0EseVRBQXNMO0FBQ3RMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7QUFFRCIsImZpbGUiOiJqcy8xLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwidmlkZW9cIj5cblxuICAgIDxkaXYgY2xhc3M9XCJ2aWRlb19fZGVzY3JpcHRpb25cIj5cbiAgICAgIDxzbG90Lz5cbiAgICA8L2Rpdj5cblxuICAgIDx2aWRlbyByZWY9XCJ2aWRlb1wiIGNsYXNzPVwidmlkZW9fX2JhY2tncm91bmRcIiBhdXRvcGxheSBsb29wIG11dGVkIHBsYXlzaW5saW5lIHdpZHRoPVwiMTAwJVwiIGhlaWdodD1cIjEwMCVcIiBzcmM9XCJodHRwczovL2FkbWlub2lkLmNvbS9zdGF0aWMvaW1nL2FkbWlub2lkL3BhZ2VzL2NjL21vdGlvbi5tcDRcIiB0eXBlPVwidmlkZW8vbXA0XCIvPlxuXG4gICAgPGEgY2xhc3M9XCJ2aWRlb19fYnV0dG9uXCIgOmNsYXNzPVwiYWN0aW9uXCIgaHJlZj1cIiNcIiBAY2xpY2sucHJldmVudD1cInRvZ2dsZVBsYXlcIj5cbiAgICAgIDxpbWcgOnNyYz1cImltZ1NyY1wiIDphbHQ9XCJhY3Rpb24gfCBjYXBpdGFsaXplXCI+XG4gICAgPC9hPlxuXG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgZXhwb3J0IGRlZmF1bHQge1xuXG4gICAgcHJvcHM6IHtcbiAgICAgIHZpZGVvOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgZGF0YSgpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHBsYXk6IHRydWUsXG4gICAgICB9XG4gICAgfSxcblxuICAgIGNvbXB1dGVkOiB7XG4gICAgICBhY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiAodGhpcy5wbGF5KSA/ICdwYXVzZScgOiAncGxheSc7XG4gICAgICB9LFxuXG4gICAgICBpbWdTcmMoKSB7XG4gICAgICAgIHJldHVybiBcIi9zdGF0aWMvaW1nL2FkbWlub2lkL3BhZ2VzL3BvcnRmb2xpby92aWRlby9cIiArIHRoaXMuYWN0aW9uICsgXCIuc3ZnXCI7XG4gICAgICB9XG4gICAgfSxcblxuICAgIG1ldGhvZHM6IHtcbiAgICAgIHRvZ2dsZVBsYXkgKCkge1xuICAgICAgICBsZXQgdmlkZW8gPSB0aGlzLiRyZWZzLnZpZGVvO1xuICAgICAgICBpZiAoIHRoaXMucGxheSApIHtcbiAgICAgICAgICB2aWRlby5wYXVzZSgpO1xuICAgICAgICAgIHRoaXMucGxheSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIHZpZGVvLnBsYXkoKTtcbiAgICAgICAgICB0aGlzLnBsYXkgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgIH0sXG5cbiAgICBmaWx0ZXJzOiB7XG4gICAgICBjYXBpdGFsaXplOiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgaWYgKCF2YWx1ZSkgcmV0dXJuICcnO1xuICAgICAgICB2YWx1ZSA9IHZhbHVlLnRvU3RyaW5nKCk7XG4gICAgICAgIHJldHVybiB2YWx1ZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHZhbHVlLnNsaWNlKDEpO1xuICAgICAgfVxuICAgIH1cblxuICB9XG48L3NjcmlwdD5cblxuPHN0eWxlPlxuXG4gIC52aWRlbyB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuXG4gIC52aWRlbyB2aWRlb3tcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgfVxuXG4gIC52aWRlb19fZGVzY3JpcHRpb24ge1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgfVxuXG4gIC52aWRlb19fYnV0dG9uIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDUwcHg7XG4gICAgYm90dG9tOiA0MHB4O1xuICAgIG9wYWNpdHk6IC44O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB3aWR0aDogMjAwcHg7XG4gIH1cblxuICAudmlkZW9fX2J1dHRvbi5wbGF5IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDQwcHg7XG4gIH1cblxuICAudmlkZW9fX2J1dHRvbiBpbWcge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgfVxuXG48L3N0eWxlPlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHJlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9wYWdlcy9wb3J0Zm9saW8vVmlkZW9CYWNrZ3JvdW5kLnZ1ZSIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodHJ1ZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG4udmlkZW8ge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4udmlkZW8gdmlkZW97XFxuICBtYXJnaW46IDAgYXV0bztcXG59XFxuLnZpZGVvX19kZXNjcmlwdGlvbiB7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuLnZpZGVvX19idXR0b24ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogNTBweDtcXG4gIGJvdHRvbTogNDBweDtcXG4gIG9wYWNpdHk6IC44O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgd2lkdGg6IDIwMHB4O1xcbn1cXG4udmlkZW9fX2J1dHRvbi5wbGF5IHtcXG4gIHBhZGRpbmctbGVmdDogNDBweDtcXG59XFxuLnZpZGVvX19idXR0b24gaW1nIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuXFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIi9Vc2Vycy9wZXRqYS9QaHBzdG9ybVByb2plY3RzL3NpdGVzL2FkbWlub2lkLmNvbS9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvcGFnZXMvcG9ydGZvbGlvL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9wYWdlcy9wb3J0Zm9saW8vVmlkZW9CYWNrZ3JvdW5kLnZ1ZVwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBb0VBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtDQUNBO0FBRUE7RUFDQSxlQUFBO0NBQ0E7QUFFQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7Q0FDQTtBQUVBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0NBQ0E7QUFFQTtFQUNBLG1CQUFBO0NBQ0E7QUFFQTtFQUNBLHNCQUFBO0NBQ0FcIixcImZpbGVcIjpcIlZpZGVvQmFja2dyb3VuZC52dWVcIixcInNvdXJjZXNDb250ZW50XCI6W1wiPHRlbXBsYXRlPlxcbiAgPGRpdiBjbGFzcz1cXFwidmlkZW9cXFwiPlxcblxcbiAgICA8ZGl2IGNsYXNzPVxcXCJ2aWRlb19fZGVzY3JpcHRpb25cXFwiPlxcbiAgICAgIDxzbG90Lz5cXG4gICAgPC9kaXY+XFxuXFxuICAgIDx2aWRlbyByZWY9XFxcInZpZGVvXFxcIiBjbGFzcz1cXFwidmlkZW9fX2JhY2tncm91bmRcXFwiIGF1dG9wbGF5IGxvb3AgbXV0ZWQgcGxheXNpbmxpbmUgd2lkdGg9XFxcIjEwMCVcXFwiIGhlaWdodD1cXFwiMTAwJVxcXCIgc3JjPVxcXCJodHRwczovL2FkbWlub2lkLmNvbS9zdGF0aWMvaW1nL2FkbWlub2lkL3BhZ2VzL2NjL21vdGlvbi5tcDRcXFwiIHR5cGU9XFxcInZpZGVvL21wNFxcXCIvPlxcblxcbiAgICA8YSBjbGFzcz1cXFwidmlkZW9fX2J1dHRvblxcXCIgOmNsYXNzPVxcXCJhY3Rpb25cXFwiIGhyZWY9XFxcIiNcXFwiIEBjbGljay5wcmV2ZW50PVxcXCJ0b2dnbGVQbGF5XFxcIj5cXG4gICAgICA8aW1nIDpzcmM9XFxcImltZ1NyY1xcXCIgOmFsdD1cXFwiYWN0aW9uIHwgY2FwaXRhbGl6ZVxcXCI+XFxuICAgIDwvYT5cXG5cXG4gIDwvZGl2PlxcbjwvdGVtcGxhdGU+XFxuXFxuPHNjcmlwdD5cXG4gIGV4cG9ydCBkZWZhdWx0IHtcXG5cXG4gICAgcHJvcHM6IHtcXG4gICAgICB2aWRlbzoge1xcbiAgICAgICAgdHlwZTogU3RyaW5nLFxcbiAgICAgIH1cXG4gICAgfSxcXG5cXG4gICAgZGF0YSgpIHtcXG4gICAgICByZXR1cm4ge1xcbiAgICAgICAgcGxheTogdHJ1ZSxcXG4gICAgICB9XFxuICAgIH0sXFxuXFxuICAgIGNvbXB1dGVkOiB7XFxuICAgICAgYWN0aW9uKCkge1xcbiAgICAgICAgcmV0dXJuICh0aGlzLnBsYXkpID8gJ3BhdXNlJyA6ICdwbGF5JztcXG4gICAgICB9LFxcblxcbiAgICAgIGltZ1NyYygpIHtcXG4gICAgICAgIHJldHVybiBcXFwiL3N0YXRpYy9pbWcvYWRtaW5vaWQvcGFnZXMvcG9ydGZvbGlvL3ZpZGVvL1xcXCIgKyB0aGlzLmFjdGlvbiArIFxcXCIuc3ZnXFxcIjtcXG4gICAgICB9XFxuICAgIH0sXFxuXFxuICAgIG1ldGhvZHM6IHtcXG4gICAgICB0b2dnbGVQbGF5ICgpIHtcXG4gICAgICAgIGxldCB2aWRlbyA9IHRoaXMuJHJlZnMudmlkZW87XFxuICAgICAgICBpZiAoIHRoaXMucGxheSApIHtcXG4gICAgICAgICAgdmlkZW8ucGF1c2UoKTtcXG4gICAgICAgICAgdGhpcy5wbGF5ID0gZmFsc2U7XFxuICAgICAgICB9XFxuICAgICAgICBlbHNlIHtcXG4gICAgICAgICAgdmlkZW8ucGxheSgpO1xcbiAgICAgICAgICB0aGlzLnBsYXkgPSB0cnVlO1xcbiAgICAgICAgfVxcbiAgICAgIH0sXFxuICAgIH0sXFxuXFxuICAgIGZpbHRlcnM6IHtcXG4gICAgICBjYXBpdGFsaXplOiBmdW5jdGlvbiAodmFsdWUpIHtcXG4gICAgICAgIGlmICghdmFsdWUpIHJldHVybiAnJztcXG4gICAgICAgIHZhbHVlID0gdmFsdWUudG9TdHJpbmcoKTtcXG4gICAgICAgIHJldHVybiB2YWx1ZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHZhbHVlLnNsaWNlKDEpO1xcbiAgICAgIH1cXG4gICAgfVxcblxcbiAgfVxcbjwvc2NyaXB0PlxcblxcbjxzdHlsZT5cXG5cXG4gIC52aWRlbyB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgfVxcblxcbiAgLnZpZGVvIHZpZGVve1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG4gIH1cXG5cXG4gIC52aWRlb19fZGVzY3JpcHRpb24ge1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgfVxcblxcbiAgLnZpZGVvX19idXR0b24ge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICByaWdodDogNTBweDtcXG4gICAgYm90dG9tOiA0MHB4O1xcbiAgICBvcGFjaXR5OiAuODtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB3aWR0aDogMjAwcHg7XFxuICB9XFxuXFxuICAudmlkZW9fX2J1dHRvbi5wbGF5IHtcXG4gICAgcGFkZGluZy1sZWZ0OiA0MHB4O1xcbiAgfVxcblxcbiAgLnZpZGVvX19idXR0b24gaW1nIHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgfVxcblxcbjwvc3R5bGU+XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyP3tcInZ1ZVwiOnRydWUsXCJpZFwiOlwiZGF0YS12LTQ0YTAxNDUwXCIsXCJzY29wZWRcIjpmYWxzZSxcImhhc0lubGluZUNvbmZpZ1wiOnRydWV9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvcGFnZXMvcG9ydGZvbGlvL1ZpZGVvQmFja2dyb3VuZC52dWVcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcInZ1ZVwiOnRydWUsXCJpZFwiOlwiZGF0YS12LTQ0YTAxNDUwXCIsXCJzY29wZWRcIjpmYWxzZSxcImhhc0lubGluZUNvbmZpZ1wiOnRydWV9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvcGFnZXMvcG9ydGZvbGlvL1ZpZGVvQmFja2dyb3VuZC52dWVcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInZpZGVvXCIgfSwgW1xuICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidmlkZW9fX2Rlc2NyaXB0aW9uXCIgfSwgW192bS5fdChcImRlZmF1bHRcIildLCAyKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFwidmlkZW9cIiwge1xuICAgICAgcmVmOiBcInZpZGVvXCIsXG4gICAgICBzdGF0aWNDbGFzczogXCJ2aWRlb19fYmFja2dyb3VuZFwiLFxuICAgICAgYXR0cnM6IHtcbiAgICAgICAgYXV0b3BsYXk6IFwiXCIsXG4gICAgICAgIGxvb3A6IFwiXCIsXG4gICAgICAgIG11dGVkOiBcIlwiLFxuICAgICAgICBwbGF5c2lubGluZTogXCJcIixcbiAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgICBoZWlnaHQ6IFwiMTAwJVwiLFxuICAgICAgICBzcmM6IFwiaHR0cHM6Ly9hZG1pbm9pZC5jb20vc3RhdGljL2ltZy9hZG1pbm9pZC9wYWdlcy9jYy9tb3Rpb24ubXA0XCIsXG4gICAgICAgIHR5cGU6IFwidmlkZW8vbXA0XCJcbiAgICAgIH0sXG4gICAgICBkb21Qcm9wczogeyBtdXRlZDogdHJ1ZSB9XG4gICAgfSksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcbiAgICAgIFwiYVwiLFxuICAgICAge1xuICAgICAgICBzdGF0aWNDbGFzczogXCJ2aWRlb19fYnV0dG9uXCIsXG4gICAgICAgIGNsYXNzOiBfdm0uYWN0aW9uLFxuICAgICAgICBhdHRyczogeyBocmVmOiBcIiNcIiB9LFxuICAgICAgICBvbjoge1xuICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICByZXR1cm4gX3ZtLnRvZ2dsZVBsYXkoJGV2ZW50KVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFtcbiAgICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICAgIGF0dHJzOiB7IHNyYzogX3ZtLmltZ1NyYywgYWx0OiBfdm0uX2YoXCJjYXBpdGFsaXplXCIpKF92bS5hY3Rpb24pIH1cbiAgICAgICAgfSlcbiAgICAgIF1cbiAgICApXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxubW9kdWxlLmV4cG9ydHMgPSB7IHJlbmRlcjogcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZucyB9XG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICByZXF1aXJlKFwidnVlLWxvYWRlci9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpXCIpICAgICAgLnJlcmVuZGVyKFwiZGF0YS12LTQ0YTAxNDUwXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi00NGEwMTQ1MFwiLFwiaGFzU2NvcGVkXCI6ZmFsc2UsXCJidWJsZVwiOntcInRyYW5zZm9ybXNcIjp7fX19IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9wYWdlcy9wb3J0Zm9saW8vVmlkZW9CYWNrZ3JvdW5kLnZ1ZVxuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXguanM/e1wiaWRcIjpcImRhdGEtdi00NGEwMTQ1MFwiLFwiaGFzU2NvcGVkXCI6ZmFsc2UsXCJidWJsZVwiOntcInRyYW5zZm9ybXNcIjp7fX19IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9wYWdlcy9wb3J0Zm9saW8vVmlkZW9CYWNrZ3JvdW5kLnZ1ZVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNDRhMDE0NTBcXFwiLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vVmlkZW9CYWNrZ3JvdW5kLnZ1ZVwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpKFwiZDI3OGNmZTBcIiwgY29udGVudCwgZmFsc2UsIHt9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTQ0YTAxNDUwXFxcIixcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL1ZpZGVvQmFja2dyb3VuZC52dWVcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNDRhMDE0NTBcXFwiLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vVmlkZW9CYWNrZ3JvdW5kLnZ1ZVwiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlciEuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlcj97XCJ2dWVcIjp0cnVlLFwiaWRcIjpcImRhdGEtdi00NGEwMTQ1MFwiLFwic2NvcGVkXCI6ZmFsc2UsXCJoYXNJbmxpbmVDb25maWdcIjp0cnVlfSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3BhZ2VzL3BvcnRmb2xpby9WaWRlb0JhY2tncm91bmQudnVlXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcInZ1ZVwiOnRydWUsXCJpZFwiOlwiZGF0YS12LTQ0YTAxNDUwXCIsXCJzY29wZWRcIjpmYWxzZSxcImhhc0lubGluZUNvbmZpZ1wiOnRydWV9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvcGFnZXMvcG9ydGZvbGlvL1ZpZGVvQmFja2dyb3VuZC52dWVcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwidmFyIGRpc3Bvc2VkID0gZmFsc2VcbmZ1bmN0aW9uIGluamVjdFN0eWxlIChzc3JDb250ZXh0KSB7XG4gIGlmIChkaXNwb3NlZCkgcmV0dXJuXG4gIHJlcXVpcmUoXCIhIXZ1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4P3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi00NGEwMTQ1MFxcXCIsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9WaWRlb0JhY2tncm91bmQudnVlXCIpXG59XG52YXIgbm9ybWFsaXplQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIilcbi8qIHNjcmlwdCAqL1xudmFyIF9fdnVlX3NjcmlwdF9fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVudlxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZSxcXFwidGFyZ2V0c1xcXCI6e1xcXCJicm93c2Vyc1xcXCI6W1xcXCI+IDIlXFxcIl0sXFxcInVnbGlmeVxcXCI6dHJ1ZX19XV0sXFxcInBsdWdpbnNcXFwiOltcXFwidHJhbnNmb3JtLW9iamVjdC1yZXN0LXNwcmVhZFxcXCIsW1xcXCJ0cmFuc2Zvcm0tcnVudGltZVxcXCIse1xcXCJwb2x5ZmlsbFxcXCI6ZmFsc2UsXFxcImhlbHBlcnNcXFwiOmZhbHNlfV1dfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL1ZpZGVvQmFja2dyb3VuZC52dWVcIilcbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LTQ0YTAxNDUwXFxcIixcXFwiaGFzU2NvcGVkXFxcIjpmYWxzZSxcXFwiYnVibGVcXFwiOntcXFwidHJhbnNmb3Jtc1xcXCI6e319fSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vVmlkZW9CYWNrZ3JvdW5kLnZ1ZVwiKVxuLyogdGVtcGxhdGUgZnVuY3Rpb25hbCAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyA9IGZhbHNlXG4vKiBzdHlsZXMgKi9cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IGluamVjdFN0eWxlXG4vKiBzY29wZUlkICovXG52YXIgX192dWVfc2NvcGVJZF9fID0gbnVsbFxuLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG52YXIgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfXyA9IG51bGxcbnZhciBDb21wb25lbnQgPSBub3JtYWxpemVDb21wb25lbnQoXG4gIF9fdnVlX3NjcmlwdF9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18sXG4gIF9fdnVlX3N0eWxlc19fLFxuICBfX3Z1ZV9zY29wZUlkX18sXG4gIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX19cbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3BhZ2VzL3BvcnRmb2xpby9WaWRlb0JhY2tncm91bmQudnVlXCJcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1sb2FkZXIvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTQ0YTAxNDUwXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtNDRhMDE0NTBcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgZGlzcG9zZWQgPSB0cnVlXG4gIH0pXG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9wYWdlcy9wb3J0Zm9saW8vVmlkZW9CYWNrZ3JvdW5kLnZ1ZVxuLy8gbW9kdWxlIGlkID0gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvcGFnZXMvcG9ydGZvbGlvL1ZpZGVvQmFja2dyb3VuZC52dWVcbi8vIG1vZHVsZSBjaHVua3MgPSAxIl0sInNvdXJjZVJvb3QiOiIifQ==