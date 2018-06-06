webpackJsonp([2],{

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/pages/index/Clouds.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_gsap__ = __webpack_require__("./node_modules/gsap/esm/index.js");


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

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-80dac6c6\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/pages/index/Clouds.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "svg",
    {
      attrs: {
        id: "clouds",
        width: "189px",
        height: "158px",
        viewBox: "0 0 189 158",
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg",
        "xmlns:xlink": "http://www.w3.org/1999/xlink"
      }
    },
    [
      _c("title", [_vm._v("static/img/adminoid/pages/main/clouds")]),
      _vm._v(" "),
      _c("defs", [
        _c("ellipse", {
          attrs: {
            id: "path-clouds-1",
            cx: "13",
            cy: "148",
            rx: "13",
            ry: "10"
          }
        }),
        _vm._v(" "),
        _c(
          "mask",
          {
            attrs: {
              id: "mask-clouds-2",
              maskContentUnits: "userSpaceOnUse",
              maskUnits: "objectBoundingBox",
              x: "0",
              y: "0",
              width: "26",
              height: "20",
              fill: "white"
            }
          },
          [_c("use", { attrs: { "xlink:href": "#path-clouds-1" } })]
        ),
        _vm._v(" "),
        _c("ellipse", {
          attrs: {
            id: "path-clouds-3",
            cx: "42",
            cy: "125",
            rx: "33",
            ry: "25"
          }
        }),
        _vm._v(" "),
        _c(
          "mask",
          {
            attrs: {
              id: "mask-clouds-4",
              maskContentUnits: "userSpaceOnUse",
              maskUnits: "objectBoundingBox",
              x: "0",
              y: "0",
              width: "66",
              height: "50",
              fill: "white"
            }
          },
          [_c("use", { attrs: { "xlink:href": "#path-clouds-3" } })]
        ),
        _vm._v(" "),
        _c("ellipse", {
          attrs: {
            id: "path-clouds-5",
            cx: "106.389262",
            cy: "62",
            rx: "82.3892617",
            ry: "62"
          }
        }),
        _vm._v(" "),
        _c(
          "mask",
          {
            attrs: {
              id: "mask-clouds-6",
              maskContentUnits: "userSpaceOnUse",
              maskUnits: "objectBoundingBox",
              x: "0",
              y: "0",
              width: "164.778523",
              height: "124",
              fill: "white"
            }
          },
          [_c("use", { attrs: { "xlink:href": "#path-clouds-5" } })]
        )
      ]),
      _vm._v(" "),
      _c(
        "g",
        {
          attrs: {
            id: "Главная-clouds",
            stroke: "none",
            "stroke-width": "1",
            fill: "none",
            "fill-rule": "evenodd"
          }
        },
        [
          _c(
            "g",
            {
              attrs: {
                id: "Large-Monitor---Главная-clouds",
                transform: "translate(-276.000000, -122.000000)"
              }
            },
            [
              _c(
                "g",
                {
                  attrs: {
                    id: "adminoid/contents/main-page-content",
                    transform: "translate(94.000000, 96.000000)"
                  }
                },
                [
                  _c(
                    "g",
                    {
                      attrs: {
                        id: "intro-clouds",
                        transform: "translate(3.000000, 0.000000)"
                      }
                    },
                    [
                      _c(
                        "g",
                        {
                          attrs: {
                            id: "static/img/adminoid/pages/main/clouds",
                            transform: "translate(179.000000, 26.000000)"
                          }
                        },
                        [
                          _c("use", {
                            attrs: {
                              id: "Oval-1",
                              stroke: "#1254B0",
                              mask: "url(#mask-clouds-2)",
                              "stroke-width": "4",
                              fill: "#FFFFFF",
                              "stroke-dasharray": "4",
                              "xlink:href": "#path-clouds-1"
                            }
                          }),
                          _vm._v(" "),
                          _c("use", {
                            attrs: {
                              id: "Oval-2",
                              stroke: "#1254B0",
                              mask: "url(#mask-clouds-4)",
                              "stroke-width": "4",
                              fill: "#FFFFFF",
                              "stroke-dasharray": "4",
                              "xlink:href": "#path-clouds-3"
                            }
                          }),
                          _vm._v(" "),
                          _c("use", {
                            attrs: {
                              id: "Oval-3",
                              stroke: "#CD2E41",
                              mask: "url(#mask-clouds-6)",
                              "stroke-width": "4",
                              fill: "#FFFFFF",
                              "stroke-dasharray": "4",
                              "xlink:href": "#path-clouds-5"
                            }
                          }),
                          _vm._v(" "),
                          _c(
                            "text",
                            {
                              attrs: {
                                id: "site-need",
                                "font-family":
                                  "RobotoMono-Regular, Roboto Mono",
                                "font-size": "24",
                                "font-weight": "normal",
                                fill: "#000000"
                              }
                            },
                            [
                              _c("tspan", { attrs: { x: "34", y: "70" } }, [
                                _vm._v("Сайт надо?")
                              ])
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "text",
                            {
                              staticStyle: {
                                visibility: "hidden",
                                opacity: "0"
                              },
                              attrs: {
                                id: "very-beautiful",
                                "font-family":
                                  "RobotoMono-Regular, Roboto Mono",
                                "font-size": "24",
                                "font-weight": "normal",
                                fill: "#000000"
                              }
                            },
                            [
                              _c(
                                "tspan",
                                { attrs: { x: "69.9941406", y: "56" } },
                                [_vm._v("Очень")]
                              ),
                              _vm._v(" "),
                              _c(
                                "tspan",
                                { attrs: { x: "48.390625", y: "84" } },
                                [_vm._v("красивый")]
                              )
                            ]
                          )
                        ]
                      )
                    ]
                  )
                ]
              )
            ]
          )
        ]
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-loader/node_modules/vue-hot-reload-api")      .rerender("data-v-80dac6c6", module.exports)
  }
}

/***/ }),

/***/ "./resources/assets/js/components/pages/index/Clouds.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/pages/index/Clouds.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-80dac6c6\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/pages/index/Clouds.vue")
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