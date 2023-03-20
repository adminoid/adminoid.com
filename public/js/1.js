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
exports.push([module.i, "\n.video {\n  text-align: center;\n  position: relative;\n}\n.video video{\n  margin: 0 auto;\n}\n.video__description {\n  text-align: left;\n  margin-bottom: 20px;\n}\n.video__button {\n  display: block;\n  position: absolute;\n  right: 50px;\n  bottom: 40px;\n  opacity: .8;\n  text-align: center;\n  width: 200px;\n}\n.video__button.play {\n  padding-left: 40px;\n}\n.video__button img {\n  display: inline-block;\n}\n\n", "", {"version":3,"sources":["/Users/petja/Projects/sites/adminoid.com/resources/assets/js/components/pages/portfolio/resources/assets/js/components/pages/portfolio/VideoBackground.vue"],"names":[],"mappings":";AAoEA;EACA,mBAAA;EACA,mBAAA;CACA;AAEA;EACA,eAAA;CACA;AAEA;EACA,iBAAA;EACA,oBAAA;CACA;AAEA;EACA,eAAA;EACA,mBAAA;EACA,YAAA;EACA,aAAA;EACA,YAAA;EACA,mBAAA;EACA,aAAA;CACA;AAEA;EACA,mBAAA;CACA;AAEA;EACA,sBAAA;CACA","file":"VideoBackground.vue","sourcesContent":["<template>\n  <div class=\"video\">\n\n    <div class=\"video__description\">\n      <slot/>\n    </div>\n\n    <video ref=\"video\" class=\"video__background\" autoplay loop muted playsinline width=\"100%\" height=\"100%\" src=\"https://adminoid.com/static/img/adminoid/pages/cc/motion.mp4\" type=\"video/mp4\"/>\n\n    <a class=\"video__button\" :class=\"action\" href=\"#\" @click.prevent=\"togglePlay\">\n      <img :src=\"imgSrc\" :alt=\"action | capitalize\">\n    </a>\n\n  </div>\n</template>\n\n<script>\n  export default {\n\n    props: {\n      video: {\n        type: String,\n      }\n    },\n\n    data() {\n      return {\n        play: true,\n      }\n    },\n\n    computed: {\n      action() {\n        return (this.play) ? 'pause' : 'play';\n      },\n\n      imgSrc() {\n        return \"/static/img/adminoid/pages/portfolio/video/\" + this.action + \".svg\";\n      }\n    },\n\n    methods: {\n      togglePlay () {\n        let video = this.$refs.video;\n        if ( this.play ) {\n          video.pause();\n          this.play = false;\n        }\n        else {\n          video.play();\n          this.play = true;\n        }\n      },\n    },\n\n    filters: {\n      capitalize: function (value) {\n        if (!value) return '';\n        value = value.toString();\n        return value.charAt(0).toUpperCase() + value.slice(1);\n      }\n    }\n\n  }\n</script>\n\n<style>\n\n  .video {\n    text-align: center;\n    position: relative;\n  }\n\n  .video video{\n    margin: 0 auto;\n  }\n\n  .video__description {\n    text-align: left;\n    margin-bottom: 20px;\n  }\n\n  .video__button {\n    display: block;\n    position: absolute;\n    right: 50px;\n    bottom: 40px;\n    opacity: .8;\n    text-align: center;\n    width: 200px;\n  }\n\n  .video__button.play {\n    padding-left: 40px;\n  }\n\n  .video__button img {\n    display: inline-block;\n  }\n\n</style>\n"],"sourceRoot":""}]);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3BhZ2VzL3BvcnRmb2xpby9WaWRlb0JhY2tncm91bmQudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9wYWdlcy9wb3J0Zm9saW8vVmlkZW9CYWNrZ3JvdW5kLnZ1ZT9mMzRjIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9wYWdlcy9wb3J0Zm9saW8vVmlkZW9CYWNrZ3JvdW5kLnZ1ZT9jYWE3Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9wYWdlcy9wb3J0Zm9saW8vVmlkZW9CYWNrZ3JvdW5kLnZ1ZT9iZDdjIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9wYWdlcy9wb3J0Zm9saW8vVmlkZW9CYWNrZ3JvdW5kLnZ1ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQkE7O0FBRUE7QUFDQTtBQUNBO0FBREE7QUFEQSxHQUZBOztBQVFBLE1BUkEsa0JBUUE7QUFDQTtBQUNBO0FBREE7QUFHQSxHQVpBOzs7QUFjQTtBQUNBLFVBREEsb0JBQ0E7QUFDQTtBQUNBLEtBSEE7QUFLQSxVQUxBLG9CQUtBO0FBQ0E7QUFDQTtBQVBBLEdBZEE7O0FBd0JBO0FBQ0EsY0FEQSx3QkFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FIQSxNQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFYQSxHQXhCQTs7QUFzQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7O0FBdENBLEc7Ozs7Ozs7QUNqQkE7QUFDQTs7O0FBR0E7QUFDQSxtQ0FBb0MsdUJBQXVCLHVCQUF1QixHQUFHLGVBQWUsbUJBQW1CLEdBQUcsdUJBQXVCLHFCQUFxQix3QkFBd0IsR0FBRyxrQkFBa0IsbUJBQW1CLHVCQUF1QixnQkFBZ0IsaUJBQWlCLGdCQUFnQix1QkFBdUIsaUJBQWlCLEdBQUcsdUJBQXVCLHVCQUF1QixHQUFHLHNCQUFzQiwwQkFBMEIsR0FBRyxZQUFZLDZNQUE2TSxNQUFNLFdBQVcsV0FBVyxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssV0FBVyxXQUFXLEtBQUssS0FBSyxVQUFVLFdBQVcsVUFBVSxVQUFVLFVBQVUsV0FBVyxVQUFVLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLDBrQkFBMGtCLGdCQUFnQixnQkFBZ0IsZ0NBQWdDLE9BQU8saUJBQWlCLGdCQUFnQiw4QkFBOEIsT0FBTyxvQkFBb0Isa0JBQWtCLGdEQUFnRCxTQUFTLHFCQUFxQiwwRkFBMEYsU0FBUyxPQUFPLG1CQUFtQix1QkFBdUIsdUNBQXVDLDRCQUE0QiwwQkFBMEIsOEJBQThCLFdBQVcsZ0JBQWdCLHlCQUF5Qiw2QkFBNkIsV0FBVyxTQUFTLFFBQVEsbUJBQW1CLHNDQUFzQyxnQ0FBZ0MsbUNBQW1DLGdFQUFnRSxTQUFTLE9BQU8sT0FBTyxvQ0FBb0MseUJBQXlCLHlCQUF5QixLQUFLLG1CQUFtQixxQkFBcUIsS0FBSywyQkFBMkIsdUJBQXVCLDBCQUEwQixLQUFLLHNCQUFzQixxQkFBcUIseUJBQXlCLGtCQUFrQixtQkFBbUIsa0JBQWtCLHlCQUF5QixtQkFBbUIsS0FBSywyQkFBMkIseUJBQXlCLEtBQUssMEJBQTBCLDRCQUE0QixLQUFLLGlDQUFpQzs7QUFFdHhGOzs7Ozs7OztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHVCQUF1QjtBQUMzQyxlQUFlLG9DQUFvQztBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxpQkFBaUI7QUFDakIsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixZQUFZO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7QUNwREE7O0FBRUE7QUFDQSw2VkFBK087QUFDL087QUFDQTtBQUNBO0FBQ0EseUhBQThIO0FBQzlIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEpBQTRKLGtGQUFrRjtBQUM5TyxxS0FBcUssa0ZBQWtGO0FBQ3ZQO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLGdDQUFnQyxVQUFVLEVBQUU7QUFDNUMsQzs7Ozs7OztBQ3BCQTtBQUNBO0FBQ0E7QUFDQSwwWEFBeU07QUFDek07QUFDQTtBQUNBO0FBQ0EsZ2NBQXNSO0FBQ3RSO0FBQ0EseVRBQXNMO0FBQ3RMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7QUFFRCIsImZpbGUiOiJqcy8xLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwidmlkZW9cIj5cblxuICAgIDxkaXYgY2xhc3M9XCJ2aWRlb19fZGVzY3JpcHRpb25cIj5cbiAgICAgIDxzbG90Lz5cbiAgICA8L2Rpdj5cblxuICAgIDx2aWRlbyByZWY9XCJ2aWRlb1wiIGNsYXNzPVwidmlkZW9fX2JhY2tncm91bmRcIiBhdXRvcGxheSBsb29wIG11dGVkIHBsYXlzaW5saW5lIHdpZHRoPVwiMTAwJVwiIGhlaWdodD1cIjEwMCVcIiBzcmM9XCJodHRwczovL2FkbWlub2lkLmNvbS9zdGF0aWMvaW1nL2FkbWlub2lkL3BhZ2VzL2NjL21vdGlvbi5tcDRcIiB0eXBlPVwidmlkZW8vbXA0XCIvPlxuXG4gICAgPGEgY2xhc3M9XCJ2aWRlb19fYnV0dG9uXCIgOmNsYXNzPVwiYWN0aW9uXCIgaHJlZj1cIiNcIiBAY2xpY2sucHJldmVudD1cInRvZ2dsZVBsYXlcIj5cbiAgICAgIDxpbWcgOnNyYz1cImltZ1NyY1wiIDphbHQ9XCJhY3Rpb24gfCBjYXBpdGFsaXplXCI+XG4gICAgPC9hPlxuXG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgZXhwb3J0IGRlZmF1bHQge1xuXG4gICAgcHJvcHM6IHtcbiAgICAgIHZpZGVvOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgZGF0YSgpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHBsYXk6IHRydWUsXG4gICAgICB9XG4gICAgfSxcblxuICAgIGNvbXB1dGVkOiB7XG4gICAgICBhY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiAodGhpcy5wbGF5KSA/ICdwYXVzZScgOiAncGxheSc7XG4gICAgICB9LFxuXG4gICAgICBpbWdTcmMoKSB7XG4gICAgICAgIHJldHVybiBcIi9zdGF0aWMvaW1nL2FkbWlub2lkL3BhZ2VzL3BvcnRmb2xpby92aWRlby9cIiArIHRoaXMuYWN0aW9uICsgXCIuc3ZnXCI7XG4gICAgICB9XG4gICAgfSxcblxuICAgIG1ldGhvZHM6IHtcbiAgICAgIHRvZ2dsZVBsYXkgKCkge1xuICAgICAgICBsZXQgdmlkZW8gPSB0aGlzLiRyZWZzLnZpZGVvO1xuICAgICAgICBpZiAoIHRoaXMucGxheSApIHtcbiAgICAgICAgICB2aWRlby5wYXVzZSgpO1xuICAgICAgICAgIHRoaXMucGxheSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIHZpZGVvLnBsYXkoKTtcbiAgICAgICAgICB0aGlzLnBsYXkgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgIH0sXG5cbiAgICBmaWx0ZXJzOiB7XG4gICAgICBjYXBpdGFsaXplOiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgaWYgKCF2YWx1ZSkgcmV0dXJuICcnO1xuICAgICAgICB2YWx1ZSA9IHZhbHVlLnRvU3RyaW5nKCk7XG4gICAgICAgIHJldHVybiB2YWx1ZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHZhbHVlLnNsaWNlKDEpO1xuICAgICAgfVxuICAgIH1cblxuICB9XG48L3NjcmlwdD5cblxuPHN0eWxlPlxuXG4gIC52aWRlbyB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuXG4gIC52aWRlbyB2aWRlb3tcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgfVxuXG4gIC52aWRlb19fZGVzY3JpcHRpb24ge1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgfVxuXG4gIC52aWRlb19fYnV0dG9uIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDUwcHg7XG4gICAgYm90dG9tOiA0MHB4O1xuICAgIG9wYWNpdHk6IC44O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB3aWR0aDogMjAwcHg7XG4gIH1cblxuICAudmlkZW9fX2J1dHRvbi5wbGF5IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDQwcHg7XG4gIH1cblxuICAudmlkZW9fX2J1dHRvbiBpbWcge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgfVxuXG48L3N0eWxlPlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHJlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9wYWdlcy9wb3J0Zm9saW8vVmlkZW9CYWNrZ3JvdW5kLnZ1ZSIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodHJ1ZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG4udmlkZW8ge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4udmlkZW8gdmlkZW97XFxuICBtYXJnaW46IDAgYXV0bztcXG59XFxuLnZpZGVvX19kZXNjcmlwdGlvbiB7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuLnZpZGVvX19idXR0b24ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogNTBweDtcXG4gIGJvdHRvbTogNDBweDtcXG4gIG9wYWNpdHk6IC44O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgd2lkdGg6IDIwMHB4O1xcbn1cXG4udmlkZW9fX2J1dHRvbi5wbGF5IHtcXG4gIHBhZGRpbmctbGVmdDogNDBweDtcXG59XFxuLnZpZGVvX19idXR0b24gaW1nIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuXFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIi9Vc2Vycy9wZXRqYS9Qcm9qZWN0cy9zaXRlcy9hZG1pbm9pZC5jb20vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3BhZ2VzL3BvcnRmb2xpby9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvcGFnZXMvcG9ydGZvbGlvL1ZpZGVvQmFja2dyb3VuZC52dWVcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQW9FQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7Q0FDQTtBQUVBO0VBQ0EsZUFBQTtDQUNBO0FBRUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0NBQ0E7QUFFQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtDQUNBO0FBRUE7RUFDQSxtQkFBQTtDQUNBO0FBRUE7RUFDQSxzQkFBQTtDQUNBXCIsXCJmaWxlXCI6XCJWaWRlb0JhY2tncm91bmQudnVlXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjx0ZW1wbGF0ZT5cXG4gIDxkaXYgY2xhc3M9XFxcInZpZGVvXFxcIj5cXG5cXG4gICAgPGRpdiBjbGFzcz1cXFwidmlkZW9fX2Rlc2NyaXB0aW9uXFxcIj5cXG4gICAgICA8c2xvdC8+XFxuICAgIDwvZGl2PlxcblxcbiAgICA8dmlkZW8gcmVmPVxcXCJ2aWRlb1xcXCIgY2xhc3M9XFxcInZpZGVvX19iYWNrZ3JvdW5kXFxcIiBhdXRvcGxheSBsb29wIG11dGVkIHBsYXlzaW5saW5lIHdpZHRoPVxcXCIxMDAlXFxcIiBoZWlnaHQ9XFxcIjEwMCVcXFwiIHNyYz1cXFwiaHR0cHM6Ly9hZG1pbm9pZC5jb20vc3RhdGljL2ltZy9hZG1pbm9pZC9wYWdlcy9jYy9tb3Rpb24ubXA0XFxcIiB0eXBlPVxcXCJ2aWRlby9tcDRcXFwiLz5cXG5cXG4gICAgPGEgY2xhc3M9XFxcInZpZGVvX19idXR0b25cXFwiIDpjbGFzcz1cXFwiYWN0aW9uXFxcIiBocmVmPVxcXCIjXFxcIiBAY2xpY2sucHJldmVudD1cXFwidG9nZ2xlUGxheVxcXCI+XFxuICAgICAgPGltZyA6c3JjPVxcXCJpbWdTcmNcXFwiIDphbHQ9XFxcImFjdGlvbiB8IGNhcGl0YWxpemVcXFwiPlxcbiAgICA8L2E+XFxuXFxuICA8L2Rpdj5cXG48L3RlbXBsYXRlPlxcblxcbjxzY3JpcHQ+XFxuICBleHBvcnQgZGVmYXVsdCB7XFxuXFxuICAgIHByb3BzOiB7XFxuICAgICAgdmlkZW86IHtcXG4gICAgICAgIHR5cGU6IFN0cmluZyxcXG4gICAgICB9XFxuICAgIH0sXFxuXFxuICAgIGRhdGEoKSB7XFxuICAgICAgcmV0dXJuIHtcXG4gICAgICAgIHBsYXk6IHRydWUsXFxuICAgICAgfVxcbiAgICB9LFxcblxcbiAgICBjb21wdXRlZDoge1xcbiAgICAgIGFjdGlvbigpIHtcXG4gICAgICAgIHJldHVybiAodGhpcy5wbGF5KSA/ICdwYXVzZScgOiAncGxheSc7XFxuICAgICAgfSxcXG5cXG4gICAgICBpbWdTcmMoKSB7XFxuICAgICAgICByZXR1cm4gXFxcIi9zdGF0aWMvaW1nL2FkbWlub2lkL3BhZ2VzL3BvcnRmb2xpby92aWRlby9cXFwiICsgdGhpcy5hY3Rpb24gKyBcXFwiLnN2Z1xcXCI7XFxuICAgICAgfVxcbiAgICB9LFxcblxcbiAgICBtZXRob2RzOiB7XFxuICAgICAgdG9nZ2xlUGxheSAoKSB7XFxuICAgICAgICBsZXQgdmlkZW8gPSB0aGlzLiRyZWZzLnZpZGVvO1xcbiAgICAgICAgaWYgKCB0aGlzLnBsYXkgKSB7XFxuICAgICAgICAgIHZpZGVvLnBhdXNlKCk7XFxuICAgICAgICAgIHRoaXMucGxheSA9IGZhbHNlO1xcbiAgICAgICAgfVxcbiAgICAgICAgZWxzZSB7XFxuICAgICAgICAgIHZpZGVvLnBsYXkoKTtcXG4gICAgICAgICAgdGhpcy5wbGF5ID0gdHJ1ZTtcXG4gICAgICAgIH1cXG4gICAgICB9LFxcbiAgICB9LFxcblxcbiAgICBmaWx0ZXJzOiB7XFxuICAgICAgY2FwaXRhbGl6ZTogZnVuY3Rpb24gKHZhbHVlKSB7XFxuICAgICAgICBpZiAoIXZhbHVlKSByZXR1cm4gJyc7XFxuICAgICAgICB2YWx1ZSA9IHZhbHVlLnRvU3RyaW5nKCk7XFxuICAgICAgICByZXR1cm4gdmFsdWUuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB2YWx1ZS5zbGljZSgxKTtcXG4gICAgICB9XFxuICAgIH1cXG5cXG4gIH1cXG48L3NjcmlwdD5cXG5cXG48c3R5bGU+XFxuXFxuICAudmlkZW8ge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIH1cXG5cXG4gIC52aWRlbyB2aWRlb3tcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxuICB9XFxuXFxuICAudmlkZW9fX2Rlc2NyaXB0aW9uIHtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gIH1cXG5cXG4gIC52aWRlb19fYnV0dG9uIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgcmlnaHQ6IDUwcHg7XFxuICAgIGJvdHRvbTogNDBweDtcXG4gICAgb3BhY2l0eTogLjg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgd2lkdGg6IDIwMHB4O1xcbiAgfVxcblxcbiAgLnZpZGVvX19idXR0b24ucGxheSB7XFxuICAgIHBhZGRpbmctbGVmdDogNDBweDtcXG4gIH1cXG5cXG4gIC52aWRlb19fYnV0dG9uIGltZyB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIH1cXG5cXG48L3N0eWxlPlxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlcj97XCJ2dWVcIjp0cnVlLFwiaWRcIjpcImRhdGEtdi00NGEwMTQ1MFwiLFwic2NvcGVkXCI6ZmFsc2UsXCJoYXNJbmxpbmVDb25maWdcIjp0cnVlfSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3BhZ2VzL3BvcnRmb2xpby9WaWRlb0JhY2tncm91bmQudnVlXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XCJ2dWVcIjp0cnVlLFwiaWRcIjpcImRhdGEtdi00NGEwMTQ1MFwiLFwic2NvcGVkXCI6ZmFsc2UsXCJoYXNJbmxpbmVDb25maWdcIjp0cnVlfSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3BhZ2VzL3BvcnRmb2xpby9WaWRlb0JhY2tncm91bmQudnVlXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ2aWRlb1wiIH0sIFtcbiAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInZpZGVvX19kZXNjcmlwdGlvblwiIH0sIFtfdm0uX3QoXCJkZWZhdWx0XCIpXSwgMiksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcInZpZGVvXCIsIHtcbiAgICAgIHJlZjogXCJ2aWRlb1wiLFxuICAgICAgc3RhdGljQ2xhc3M6IFwidmlkZW9fX2JhY2tncm91bmRcIixcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIGF1dG9wbGF5OiBcIlwiLFxuICAgICAgICBsb29wOiBcIlwiLFxuICAgICAgICBtdXRlZDogXCJcIixcbiAgICAgICAgcGxheXNpbmxpbmU6IFwiXCIsXG4gICAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgICAgaGVpZ2h0OiBcIjEwMCVcIixcbiAgICAgICAgc3JjOiBcImh0dHBzOi8vYWRtaW5vaWQuY29tL3N0YXRpYy9pbWcvYWRtaW5vaWQvcGFnZXMvY2MvbW90aW9uLm1wNFwiLFxuICAgICAgICB0eXBlOiBcInZpZGVvL21wNFwiXG4gICAgICB9LFxuICAgICAgZG9tUHJvcHM6IHsgbXV0ZWQ6IHRydWUgfVxuICAgIH0pLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXG4gICAgICBcImFcIixcbiAgICAgIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6IFwidmlkZW9fX2J1dHRvblwiLFxuICAgICAgICBjbGFzczogX3ZtLmFjdGlvbixcbiAgICAgICAgYXR0cnM6IHsgaHJlZjogXCIjXCIgfSxcbiAgICAgICAgb246IHtcbiAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgcmV0dXJuIF92bS50b2dnbGVQbGF5KCRldmVudClcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBbXG4gICAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICBhdHRyczogeyBzcmM6IF92bS5pbWdTcmMsIGFsdDogX3ZtLl9mKFwiY2FwaXRhbGl6ZVwiKShfdm0uYWN0aW9uKSB9XG4gICAgICAgIH0pXG4gICAgICBdXG4gICAgKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbm1vZHVsZS5leHBvcnRzID0geyByZW5kZXI6IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnMgfVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgcmVxdWlyZShcInZ1ZS1sb2FkZXIvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaVwiKSAgICAgIC5yZXJlbmRlcihcImRhdGEtdi00NGEwMTQ1MFwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtNDRhMDE0NTBcIixcImhhc1Njb3BlZFwiOmZhbHNlLFwiYnVibGVcIjp7XCJ0cmFuc2Zvcm1zXCI6e319fSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvcGFnZXMvcG9ydGZvbGlvL1ZpZGVvQmFja2dyb3VuZC52dWVcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4LmpzP3tcImlkXCI6XCJkYXRhLXYtNDRhMDE0NTBcIixcImhhc1Njb3BlZFwiOmZhbHNlLFwiYnVibGVcIjp7XCJ0cmFuc2Zvcm1zXCI6e319fSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvcGFnZXMvcG9ydGZvbGlvL1ZpZGVvQmFja2dyb3VuZC52dWVcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTQ0YTAxNDUwXFxcIixcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL1ZpZGVvQmFja2dyb3VuZC52dWVcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKShcImQyNzhjZmUwXCIsIGNvbnRlbnQsIGZhbHNlLCB7fSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi00NGEwMTQ1MFxcXCIsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9WaWRlb0JhY2tncm91bmQudnVlXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTQ0YTAxNDUwXFxcIixcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL1ZpZGVvQmFja2dyb3VuZC52dWVcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIhLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1widnVlXCI6dHJ1ZSxcImlkXCI6XCJkYXRhLXYtNDRhMDE0NTBcIixcInNjb3BlZFwiOmZhbHNlLFwiaGFzSW5saW5lQ29uZmlnXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9wYWdlcy9wb3J0Zm9saW8vVmlkZW9CYWNrZ3JvdW5kLnZ1ZVxuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9pbmRleC5qcyEuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XCJ2dWVcIjp0cnVlLFwiaWRcIjpcImRhdGEtdi00NGEwMTQ1MFwiLFwic2NvcGVkXCI6ZmFsc2UsXCJoYXNJbmxpbmVDb25maWdcIjp0cnVlfSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3BhZ2VzL3BvcnRmb2xpby9WaWRlb0JhY2tncm91bmQudnVlXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsInZhciBkaXNwb3NlZCA9IGZhbHNlXG5mdW5jdGlvbiBpbmplY3RTdHlsZSAoc3NyQ29udGV4dCkge1xuICBpZiAoZGlzcG9zZWQpIHJldHVyblxuICByZXF1aXJlKFwiISF2dWUtc3R5bGUtbG9hZGVyIWNzcy1sb2FkZXI/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleD97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNDRhMDE0NTBcXFwiLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXN0eWxlcyZpbmRleD0wIS4vVmlkZW9CYWNrZ3JvdW5kLnZ1ZVwiKVxufVxudmFyIG5vcm1hbGl6ZUNvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpXG4vKiBzY3JpcHQgKi9cbnZhciBfX3Z1ZV9zY3JpcHRfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlbnZcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2UsXFxcInRhcmdldHNcXFwiOntcXFwiYnJvd3NlcnNcXFwiOltcXFwiPiAyJVxcXCJdLFxcXCJ1Z2xpZnlcXFwiOnRydWV9fV1dLFxcXCJwbHVnaW5zXFxcIjpbXFxcInRyYW5zZm9ybS1vYmplY3QtcmVzdC1zcHJlYWRcXFwiLFtcXFwidHJhbnNmb3JtLXJ1bnRpbWVcXFwiLHtcXFwicG9seWZpbGxcXFwiOmZhbHNlLFxcXCJoZWxwZXJzXFxcIjpmYWxzZX1dXX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9WaWRlb0JhY2tncm91bmQudnVlXCIpXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi00NGEwMTQ1MFxcXCIsXFxcImhhc1Njb3BlZFxcXCI6ZmFsc2UsXFxcImJ1YmxlXFxcIjp7XFxcInRyYW5zZm9ybXNcXFwiOnt9fX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL1ZpZGVvQmFja2dyb3VuZC52dWVcIilcbi8qIHRlbXBsYXRlIGZ1bmN0aW9uYWwgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18gPSBmYWxzZVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBpbmplY3RTdHlsZVxuLyogc2NvcGVJZCAqL1xudmFyIF9fdnVlX3Njb3BlSWRfXyA9IG51bGxcbi8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xudmFyIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSBudWxsXG52YXIgQ29tcG9uZW50ID0gbm9ybWFsaXplQ29tcG9uZW50KFxuICBfX3Z1ZV9zY3JpcHRfXyxcbiAgX192dWVfdGVtcGxhdGVfXyxcbiAgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fLFxuICBfX3Z1ZV9zdHlsZXNfXyxcbiAgX192dWVfc2NvcGVJZF9fLFxuICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9wYWdlcy9wb3J0Zm9saW8vVmlkZW9CYWNrZ3JvdW5kLnZ1ZVwiXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtbG9hZGVyL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi00NGEwMTQ1MFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTQ0YTAxNDUwXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvcGFnZXMvcG9ydGZvbGlvL1ZpZGVvQmFja2dyb3VuZC52dWVcbi8vIG1vZHVsZSBpZCA9IC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3BhZ2VzL3BvcnRmb2xpby9WaWRlb0JhY2tncm91bmQudnVlXG4vLyBtb2R1bGUgY2h1bmtzID0gMSJdLCJzb3VyY2VSb290IjoiIn0=