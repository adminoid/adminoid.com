webpackJsonp([3],{

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/pages/index/Clouds.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_gsap__ = __webpack_require__("./node_modules/gsap/TweenMax.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_gsap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_gsap__);


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

/***/ "./node_modules/vue-loader/lib/component-normalizer.js":
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// this module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate
    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-e16489b0\",\"hasScoped\":false}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/pages/index/Clouds.vue":
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('svg', {
    attrs: {
      "id": "clouds",
      "width": "189px",
      "height": "158px",
      "viewBox": "0 0 189 158",
      "version": "1.1",
      "xmlns": "http://www.w3.org/2000/svg",
      "xmlns:xlink": "http://www.w3.org/1999/xlink"
    }
  }, [_c('title', [_vm._v("static/img/adminoid/pages/main/clouds")]), _vm._v(" "), _c('defs', [_c('ellipse', {
    attrs: {
      "id": "path-clouds-1",
      "cx": "13",
      "cy": "148",
      "rx": "13",
      "ry": "10"
    }
  }), _vm._v(" "), _c('mask', {
    attrs: {
      "id": "mask-clouds-2",
      "maskContentUnits": "userSpaceOnUse",
      "maskUnits": "objectBoundingBox",
      "x": "0",
      "y": "0",
      "width": "26",
      "height": "20",
      "fill": "white"
    }
  }, [_c('use', {
    attrs: {
      "xlink:href": "#path-clouds-1"
    }
  })]), _vm._v(" "), _c('ellipse', {
    attrs: {
      "id": "path-clouds-3",
      "cx": "42",
      "cy": "125",
      "rx": "33",
      "ry": "25"
    }
  }), _vm._v(" "), _c('mask', {
    attrs: {
      "id": "mask-clouds-4",
      "maskContentUnits": "userSpaceOnUse",
      "maskUnits": "objectBoundingBox",
      "x": "0",
      "y": "0",
      "width": "66",
      "height": "50",
      "fill": "white"
    }
  }, [_c('use', {
    attrs: {
      "xlink:href": "#path-clouds-3"
    }
  })]), _vm._v(" "), _c('ellipse', {
    attrs: {
      "id": "path-clouds-5",
      "cx": "106.389262",
      "cy": "62",
      "rx": "82.3892617",
      "ry": "62"
    }
  }), _vm._v(" "), _c('mask', {
    attrs: {
      "id": "mask-clouds-6",
      "maskContentUnits": "userSpaceOnUse",
      "maskUnits": "objectBoundingBox",
      "x": "0",
      "y": "0",
      "width": "164.778523",
      "height": "124",
      "fill": "white"
    }
  }, [_c('use', {
    attrs: {
      "xlink:href": "#path-clouds-5"
    }
  })])]), _vm._v(" "), _c('g', {
    attrs: {
      "id": "Главная-clouds",
      "stroke": "none",
      "stroke-width": "1",
      "fill": "none",
      "fill-rule": "evenodd"
    }
  }, [_c('g', {
    attrs: {
      "id": "Large-Monitor---Главная-clouds",
      "transform": "translate(-276.000000, -122.000000)"
    }
  }, [_c('g', {
    attrs: {
      "id": "adminoid/contents/main-page-content",
      "transform": "translate(94.000000, 96.000000)"
    }
  }, [_c('g', {
    attrs: {
      "id": "intro-clouds",
      "transform": "translate(3.000000, 0.000000)"
    }
  }, [_c('g', {
    attrs: {
      "id": "static/img/adminoid/pages/main/clouds",
      "transform": "translate(179.000000, 26.000000)"
    }
  }, [_c('use', {
    attrs: {
      "id": "Oval-1",
      "stroke": "#1254B0",
      "mask": "url(#mask-clouds-2)",
      "stroke-width": "4",
      "fill": "#FFFFFF",
      "stroke-dasharray": "4",
      "xlink:href": "#path-clouds-1"
    }
  }), _vm._v(" "), _c('use', {
    attrs: {
      "id": "Oval-2",
      "stroke": "#1254B0",
      "mask": "url(#mask-clouds-4)",
      "stroke-width": "4",
      "fill": "#FFFFFF",
      "stroke-dasharray": "4",
      "xlink:href": "#path-clouds-3"
    }
  }), _vm._v(" "), _c('use', {
    attrs: {
      "id": "Oval-3",
      "stroke": "#CD2E41",
      "mask": "url(#mask-clouds-6)",
      "stroke-width": "4",
      "fill": "#FFFFFF",
      "stroke-dasharray": "4",
      "xlink:href": "#path-clouds-5"
    }
  }), _vm._v(" "), _c('text', {
    attrs: {
      "id": "site-need",
      "font-family": "RobotoMono-Regular, Roboto Mono",
      "font-size": "24",
      "font-weight": "normal",
      "fill": "#000000"
    }
  }, [_c('tspan', {
    attrs: {
      "x": "34",
      "y": "70"
    }
  }, [_vm._v("Сайт надо?")])]), _vm._v(" "), _c('text', {
    staticStyle: {
      "visibility": "hidden",
      "opacity": "0"
    },
    attrs: {
      "id": "very-beautiful",
      "font-family": "RobotoMono-Regular, Roboto Mono",
      "font-size": "24",
      "font-weight": "normal",
      "fill": "#000000"
    }
  }, [_c('tspan', {
    attrs: {
      "x": "69.9941406",
      "y": "56"
    }
  }, [_vm._v("Очень")]), _vm._v(" "), _c('tspan', {
    attrs: {
      "x": "48.390625",
      "y": "84"
    }
  }, [_vm._v("красивый")])])])])])])])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-e16489b0", module.exports)
  }
}

/***/ }),

/***/ "./resources/assets/js/components/pages/index/Clouds.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")(
  /* script */
  __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/pages/index/Clouds.vue"),
  /* template */
  __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-e16489b0\",\"hasScoped\":false}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/pages/index/Clouds.vue"),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/petja/PhpstormProjects/adminoid.com/resources/assets/js/components/pages/index/Clouds.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Clouds.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-e16489b0", Component.options)
  } else {
    hotAPI.reload("data-v-e16489b0", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/js/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_pages_index_Clouds__ = __webpack_require__("./resources/assets/js/components/pages/index/Clouds.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_pages_index_Clouds___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_pages_index_Clouds__);


var index = new Vue({
  el: '#index',
  components: {
    Clouds: __WEBPACK_IMPORTED_MODULE_0__components_pages_index_Clouds___default.a
  }
});

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./resources/assets/js/index.js");


/***/ })

},[1]);