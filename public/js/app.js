webpackJsonp([7],{

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/FeedbackForm.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__("./node_modules/axios/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var Errors = function () {
    function Errors() {
        _classCallCheck(this, Errors);

        this.errors = {};
    }

    _createClass(Errors, [{
        key: 'has',
        value: function has(field) {
            return this.errors.hasOwnProperty(field);
        }
    }, {
        key: 'any',
        value: function any() {
            return Object.keys(this.errors).length > 0;
        }
    }, {
        key: 'get',
        value: function get(field) {
            if (this.errors[field]) {
                return this.errors[field][0];
            }
        }
    }, {
        key: 'record',
        value: function record(errors) {
            this.errors = errors;
        }
    }, {
        key: 'clear',
        value: function clear(field) {
            if (field) {
                delete this.errors[field];
                return;
            }
            this.errors = {};
        }
    }]);

    return Errors;
}();

var Form = function () {
    function Form(data) {
        _classCallCheck(this, Form);

        this.originalData = data;
        for (var field in data) {
            this[field] = data[field];
        }
        this.errors = new Errors();
        this.success = false;
    }

    _createClass(Form, [{
        key: 'data',
        value: function data() {
            var data = Object.assign({}, this);
            delete data.originalData;
            delete data.errors;
            return data;
        }
    }, {
        key: 'reset',
        value: function reset() {
            for (var field in this.originalData) {
                this[field] = '';
            }
            this.errors.clear();
        }
    }, {
        key: 'submit',
        value: function submit(requestType, url) {
            var _this = this;

            return new Promise(function (resolve, reject) {
                __WEBPACK_IMPORTED_MODULE_0_axios___default.a[requestType](url, _this.data()).then(function (response) {
                    _this.onSuccess(response.data);
                    resolve(response.data);
                }).catch(function (error) {
                    _this.onFail(error.response.data);
                    //                            reject(error.response.data)
                });
            });
        }
    }, {
        key: 'onSuccess',
        value: function onSuccess(data) {
            this.reset();
            this.message = data.message;
            this.success = true;
        }
    }, {
        key: 'onFail',
        value: function onFail(errors) {
            this.errors.record(errors);
        }
    }]);

    return Form;
}();

/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            form: new Form({
                email: '',
                message: ''
                // first_name: '',
                // last_name: '',
                // phone: '',
            })
        };
    },

    methods: {
        onSubmit: function onSubmit() {
            this.form.submit('post', '/feedback-messages');
            //                        .then(data => console.log(data))
            //                        .catch(errors => console.log(errors))
        }
    }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/TopMenu.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_gsap__ = __webpack_require__("./node_modules/gsap/index.js");


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      // browser: 0,
      timeline: null,
      topOffset: 0,
      settings: {
        topOffsetForToggleAnimation: 300
      },
      cursor: {
        x: 0,
        y: 0
      },
      selectors: {
        gsap: {
          svgLogo: '#header-logo-svg',
          leftHand: '#left-hand',
          rightHand: '#right-hand',
          manBody: '#man-full',
          head: '#head',
          eyePupil: '#eye-pupil',
          textAdminoid: '#stripped-logo-text',
          textsWebmaster: '#web-Master',
          textsWebmasterLetter: '.wm-tl',
          textWeb: 'tspan#web',
          textMaster: 'tspan#master',
          textsWebmasterWrapper: '#Rectangle-21',
          topMenu: '#top-menu',
          topMenuItem: '.item',
          // flicker
          rectangleCenterColor: '#Rectangle-Green',
          rectanglesBorderColor: '.Rectangle-Red'
        },
        eye: '#eye-pupil'
      },
      reduced: false,
      $eye: {},
      eyeTransformWithAngle: 'translate(13.000000, 36.000000) rotate(40.000000) translate(-13.000000, -36.000000) translate(8.000000, 31.000000)'
    };
  },
  mounted: function mounted() {
    this.checkTopOffset();
    this.initFlicker();
    this.timeline = this.compileTimeline();
    this.$eye = $(this.$el).find(this.selectors.eye);

    // this.browser = this.detectBrowser();
  },

  created: function created() {
    window.addEventListener('scroll', this.checkTopOffset);
    window.addEventListener('mousemove', this.eyeMove);
  },
  beforeDestroy: function beforeDestroy() {
    window.removeEventListener('scroll', this.checkTopOffset);
    window.removeEventListener('mousemove', this.eyeMove);
  },
  watch: {
    topOffset: function topOffset(val, oldVal) {
      if (oldVal < this.settings.topOffsetForToggleAnimation && val >= this.settings.topOffsetForToggleAnimation) {
        this.runLogoAnimation();
      } else if (oldVal >= this.settings.topOffsetForToggleAnimation && val < this.settings.topOffsetForToggleAnimation) {
        this.runLogoAnimation('backward');
      }
    }
  },
  methods: {
    write: function write() {
      var $modal = $('#super-modal');
      $modal.modal('setting', 'transition', 'horizontal flip').modal('toggle');
    },

    eyeMove: function eyeMove(e) {
      if (!this.reduced) return false;
      this.cursor.x = e.pageX;
      this.cursor.y = e.pageY;

      // let adjustment;
      // switch (this.browser) {
      //   case 'chrome':
      //     adjustment = 1082;
      //     break;
      //   case 'safari':
      //     adjustment = 882;
      //     break;
      //   case 'firefox':
      //     adjustment = 382;
      //     break;
      // }

      // let eyeCenter = [this.$eye[0].getBoundingClientRect().left + this.$eye.width() / 2, this.$eye[0].getBoundingClientRect().top + adjustment + this.$eye.height() / 2];
      var eyeCenter = [this.$eye[0].getBoundingClientRect().left + this.getScrollOffset().left + this.$eye.width() / 2, this.$eye[0].getBoundingClientRect().top + this.getScrollOffset().top + this.$eye.height() / 2];
      var eyeAngle = Math.atan2(e.pageX - eyeCenter[0], -(e.pageY - eyeCenter[1])) * (180 / Math.PI) - 90;

      this.eyeTransformWithAngle = 'translate(13.000000, 36.000000) rotate(' + eyeAngle + ') translate(-13.000000, -36.000000) translate(8.000000, 31.000000)';
    },

    getScrollOffset: function getScrollOffset() {
      var doc = document.documentElement;
      return {
        left: (window.pageXOffset || doc.scrollLeft) - (doc.clientLeft || 0),
        top: (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0)
      };
    },


    // detectBrowser () {
    //   const ua = navigator.userAgent.toLowerCase();
    //   // console.log(ua);
    //
    //   if (ua.indexOf('firefox') != -1) {
    //     return 'firefox';
    //   }
    //   else if (ua.indexOf('safari') != -1) {
    //     if (ua.indexOf('chrome') > -1) {
    //       return 'chrome';
    //     } else {
    //       return 'safari';
    //     }
    //   }
    // },

    toggleSidebar: function toggleSidebar() {
      $('#top-menu-sidebar').sidebar({
        transition: 'overlay'
      }).sidebar('toggle');
    },

    initFlicker: function initFlicker() {
      var step = 1;
      __WEBPACK_IMPORTED_MODULE_0_gsap__["TweenMax"].to(this.selectors.gsap.rectangleCenterColor, step, {
        fill: '#CD2E41',
        repeat: -1,
        yoyo: true,
        repeatDelay: step * 3
      });
      __WEBPACK_IMPORTED_MODULE_0_gsap__["TweenMax"].to(this.selectors.gsap.rectanglesBorderColor, step, {
        fill: '#1D60B5',
        repeat: -1,
        yoyo: true,
        repeatDelay: step * 3,
        delay: step * 3
      });
      __WEBPACK_IMPORTED_MODULE_0_gsap__["TweenMax"].fromTo(this.selectors.gsap.textWeb, step * 2, {
        fill: '#FFFFFF'
      }, {
        fill: '#FF981C',
        repeat: -1,
        repeatDelay: step * 2,
        yoyo: true
      });
      __WEBPACK_IMPORTED_MODULE_0_gsap__["TweenMax"].fromTo(this.selectors.gsap.textMaster, step * 2, {
        fill: '#FF981C'
      }, {
        fill: '#FFFFFF',
        repeat: -1,
        repeatDelay: step * 2,
        yoyo: true
      });
    },

    runLogoAnimation: function runLogoAnimation() {
      var direction = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'forward';

      if (direction === 'forward') {
        this.reduced = true;
        this.timeline.pause().play();
      } else if (direction === 'backward') {
        this.reduced = false;
        this.timeline.pause().reverse();
      }
    },

    checkTopOffset: function checkTopOffset() {
      this.topOffset = window.pageYOffset;
    },

    compileTimeline: function compileTimeline() {
      var part1time = 0.2,
          part2time = 0.5,
          $logo = $(this.selectors.gsap.svgLogo),
          $leftHand = $logo.find(this.selectors.gsap.leftHand),
          $rightHand = $logo.find(this.selectors.gsap.rightHand),
          $manBody = $logo.find(this.selectors.gsap.manBody),
          $head = $logo.find(this.selectors.gsap.head),
          $eyePupil = $logo.find(this.selectors.gsap.eyePupil),
          $textAdminoid = $logo.find(this.selectors.gsap.textAdminoid),
          lettersWebmaster = Array.prototype.slice.call($logo.find(this.selectors.gsap.textsWebmaster).find(this.selectors.gsap.textsWebmasterLetter)),
          textsWebmasterWrapper = $logo.find(this.selectors.gsap.textsWebmasterWrapper),
          $topMenu = $(document).find(this.selectors.gsap.topMenu),
          topMenuItemsForResizing = Array.prototype.slice.call($topMenu.find(this.selectors.gsap.topMenuItem));

      topMenuItemsForResizing.push($topMenu);

      var tlLeftHand = new __WEBPACK_IMPORTED_MODULE_0_gsap__["TimelineLite"]();

      // Hands (waving)
      tlLeftHand.add(__WEBPACK_IMPORTED_MODULE_0_gsap__["TweenMax"].fromTo($leftHand, 0.08, {
        rotation: 0
      }, {
        rotation: 35,
        transformOrigin: '90% 100%'
      })).add(__WEBPACK_IMPORTED_MODULE_0_gsap__["TweenMax"].to($leftHand, 0.08, { rotation: -50, transformOrigin: '90% 100%' })).add(__WEBPACK_IMPORTED_MODULE_0_gsap__["TweenMax"].to($leftHand, 0.08, { rotation: 35, transformOrigin: '90% 100%' })).add(__WEBPACK_IMPORTED_MODULE_0_gsap__["TweenMax"].to($leftHand, 0.08, { rotation: -50, transformOrigin: '90% 100%' })).add(__WEBPACK_IMPORTED_MODULE_0_gsap__["TweenMax"].to($leftHand, 0.08, { rotation: 35, transformOrigin: '90% 100%' })).add(__WEBPACK_IMPORTED_MODULE_0_gsap__["TweenMax"].to($leftHand, 0.08, { rotation: -50, transformOrigin: '90% 100%' })).add(__WEBPACK_IMPORTED_MODULE_0_gsap__["TweenMax"].to($leftHand, 0.10, { rotation: 35, transformOrigin: '90% 100%' })).add(__WEBPACK_IMPORTED_MODULE_0_gsap__["TweenMax"].to($leftHand, 0.15, { rotation: -75, transformOrigin: '90% 100%' }));

      var tlRightHand = new __WEBPACK_IMPORTED_MODULE_0_gsap__["TimelineLite"]();
      tlRightHand.add(__WEBPACK_IMPORTED_MODULE_0_gsap__["TweenMax"].fromTo($rightHand, 0.08, {
        rotation: 0
      }, {
        rotation: -35,
        transformOrigin: '10% 100%'
      }));
      tlRightHand.add(__WEBPACK_IMPORTED_MODULE_0_gsap__["TweenMax"].to($rightHand, 0.08, { rotation: 50, transformOrigin: '10% 100%' }));
      tlRightHand.add(__WEBPACK_IMPORTED_MODULE_0_gsap__["TweenMax"].to($rightHand, 0.08, { rotation: -35, transformOrigin: '10% 100%' }));
      tlRightHand.add(__WEBPACK_IMPORTED_MODULE_0_gsap__["TweenMax"].to($rightHand, 0.08, { rotation: 50, transformOrigin: '10% 100%' }));
      tlRightHand.add(__WEBPACK_IMPORTED_MODULE_0_gsap__["TweenMax"].to($rightHand, 0.08, { rotation: -35, transformOrigin: '10% 100%' }));
      tlRightHand.add(__WEBPACK_IMPORTED_MODULE_0_gsap__["TweenMax"].to($rightHand, 0.08, { rotation: 50, transformOrigin: '10% 100%' }));
      tlRightHand.add(__WEBPACK_IMPORTED_MODULE_0_gsap__["TweenMax"].to($rightHand, 0.10, { rotation: -35, transformOrigin: '10% 100%' }));
      tlRightHand.add(__WEBPACK_IMPORTED_MODULE_0_gsap__["TweenMax"].to($rightHand, 0.15, { rotation: 75, transformOrigin: '10% 100%' }));
      var tlHands = new __WEBPACK_IMPORTED_MODULE_0_gsap__["TimelineLite"]();
      tlHands.add(tlLeftHand, 0);
      tlHands.add(tlRightHand, 0);

      // Body, part 1
      var tlBody = new __WEBPACK_IMPORTED_MODULE_0_gsap__["TimelineLite"]();
      tlBody.add(__WEBPACK_IMPORTED_MODULE_0_gsap__["TweenMax"].to($manBody, 0.2, { y: 0, x: 0, rotation: 0 }, { y: -10, x: 20, rotation: 35, transformOrigin: '50% 50%' }))
      // Body, part 2
      .add(__WEBPACK_IMPORTED_MODULE_0_gsap__["TweenMax"].to($manBody, 0.5, { y: -5, x: 180, rotation: 90, transformOrigin: '50% 50%' }));

      // Head
      var tlHead = new __WEBPACK_IMPORTED_MODULE_0_gsap__["TimelineLite"]();
      tlHead.fromTo($head, 0.3, { autoAlpha: 1 }, { autoAlpha: 0 });

      // SVG img size (begin from part1time)
      var tlLogoSize = new __WEBPACK_IMPORTED_MODULE_0_gsap__["TimelineLite"]();
      tlLogoSize.add(__WEBPACK_IMPORTED_MODULE_0_gsap__["TweenMax"].to($logo, part1time, { attr: { viewBox: '0 0 219 42' }, width: 219, height: 42 }), part1time);

      // Eye-pupil
      var tlEyePupil = new __WEBPACK_IMPORTED_MODULE_0_gsap__["TimelineLite"]();
      tlEyePupil.add(__WEBPACK_IMPORTED_MODULE_0_gsap__["TweenMax"].to($eyePupil, part1time, { autoAlpha: 1 }), part1time);

      // Text adminoid
      var tlTextAdminoid = new __WEBPACK_IMPORTED_MODULE_0_gsap__["TimelineLite"]();
      tlTextAdminoid.add(__WEBPACK_IMPORTED_MODULE_0_gsap__["TweenMax"].fromTo($textAdminoid, part1time + part2time, { x: 0, y: 24 }, { x: -50, y: 7 }));

      // Text webmaster textsWebmaster
      var tlTextWebmaster = new __WEBPACK_IMPORTED_MODULE_0_gsap__["TimelineLite"]();
      tlTextWebmaster.add(__WEBPACK_IMPORTED_MODULE_0_gsap__["TweenMax"].staggerFromTo(lettersWebmaster.reverse(), 0.1, { autoAlpha: 1, rotateX: 0 }, { autoAlpha: 0, rotateX: 10 }, 0.05));

      // Webmaster Wrapper
      var tlTextWebmasterWrapper = new __WEBPACK_IMPORTED_MODULE_0_gsap__["TimelineLite"]();
      tlTextWebmasterWrapper.add(__WEBPACK_IMPORTED_MODULE_0_gsap__["TweenMax"].fromTo(textsWebmasterWrapper, 0.5, { autoAlpha: 1 }, { autoAlpha: 0 }), 0.2);

      // TopMenu height reduction/increase
      var tlTopMenu = new __WEBPACK_IMPORTED_MODULE_0_gsap__["TimelineLite"]();
      tlTopMenu.add(__WEBPACK_IMPORTED_MODULE_0_gsap__["TweenMax"].staggerFromTo(topMenuItemsForResizing, part1time, { height: '4.66667rem', opacity: 1 }, { height: '3.66667rem', opacity: 0.93 }, 0), part1time);

      // Conclusion
      var timeline = new __WEBPACK_IMPORTED_MODULE_0_gsap__["TimelineLite"]({ paused: true });
      timeline.pause();
      timeline.add(tlHands, 0);
      timeline.add(tlBody, 0);
      timeline.add(tlHead, 0);
      timeline.add(tlLogoSize, 0);
      timeline.add(tlEyePupil, 0);
      timeline.add(tlTextAdminoid, 0);
      timeline.add(tlTextWebmaster, 0);
      timeline.add(tlTextWebmasterWrapper, 0);
      timeline.add(tlTopMenu, 0);
      return timeline;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/component-normalizer.js":
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file.
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  functionalTemplate,
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
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
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
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
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

/***/ "./resources/assets/js/app.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_TopMenu__ = __webpack_require__("./resources/assets/js/components/TopMenu.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_TopMenu___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_TopMenu__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_FeedbackForm__ = __webpack_require__("./resources/assets/js/components/FeedbackForm.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_FeedbackForm___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_FeedbackForm__);

/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

__webpack_require__("./resources/assets/js/bootstrap.js");

window.Vue = __webpack_require__("./node_modules/vue/dist/vue.common.js");

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */




Vue.component("clouds", function (resolve) {
  __webpack_require__.e/* require */(5).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("./resources/assets/js/components/pages/index/Clouds.vue")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
});

Vue.component("cube", function (resolve) {
  __webpack_require__.e/* require */(0).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("./resources/assets/js/components/pages/index/Cube.vue")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
});

Vue.component("clock", function (resolve) {
  __webpack_require__.e/* require */(3).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("./resources/assets/js/components/pages/price/Clock.vue")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
});

Vue.component("tools-block", function (resolve) {
  __webpack_require__.e/* require */(2).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("./resources/assets/js/components/pages/tools/ToolsBlock.vue")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
});

Vue.component("zoom", function (resolve) {
  __webpack_require__.e/* require */(4).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("./resources/assets/js/components/pages/portfolio/Zoom.vue")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
});

Vue.component("half-rotate", function (resolve) {
  __webpack_require__.e/* require */(1).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("./resources/assets/js/components/pages/workflow/HalfRotate.vue")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
});

var app = new Vue({
  el: '#app',
  components: {
    TopMenu: __WEBPACK_IMPORTED_MODULE_0__components_TopMenu___default.a, FeedbackForm: __WEBPACK_IMPORTED_MODULE_1__components_FeedbackForm___default.a
  }
});

/***/ }),

/***/ "./resources/assets/js/bootstrap.js":
/***/ (function(module, exports, __webpack_require__) {


window._ = __webpack_require__("./node_modules/lodash/lodash.js");

/**
 * We'll load jQuery and the Bootstrap jQuery plugin which provides support
 * for JavaScript based Bootstrap features such as modals and tabs. This
 * code may be modified to fit the specific needs of your application.
 */

try {
  window.$ = window.jQuery = __webpack_require__("./node_modules/jquery/dist/jquery.js");

  // require('bootstrap-sass');
} catch (e) {}

/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

window.axios = __webpack_require__("./node_modules/axios/index.js");

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

/**
 * Next we will register the CSRF Token as a common header with Axios so that
 * all outgoing HTTP requests automatically have it attached. This is just
 * a simple convenience so we don't have to attach every token manually.
 */

var token = document.head.querySelector('meta[name="csrf-token"]');

if (token) {
  window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
} else {
  console.error('CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token');
}

/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */

// import Echo from 'laravel-echo'

// window.Pusher = require('pusher-js');

// window.Echo = new Echo({
//     broadcaster: 'pusher',
//     key: 'your-pusher-key'
// });

/***/ }),

/***/ "./resources/assets/js/components/FeedbackForm.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/FeedbackForm.vue")
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
Component.options.__file = "resources/assets/js/components/FeedbackForm.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-e1ddd1c0", Component.options)
  } else {
    hotAPI.reload("data-v-e1ddd1c0", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/js/components/TopMenu.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/TopMenu.vue")
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
Component.options.__file = "resources/assets/js/components/TopMenu.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-628d6a6d", Component.options)
  } else {
    hotAPI.reload("data-v-628d6a6d", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./resources/assets/js/app.js");


/***/ })

},[0]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL0ZlZWRiYWNrRm9ybS52dWUiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9Ub3BNZW51LnZ1ZSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9ib290c3RyYXAuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL0ZlZWRiYWNrRm9ybS52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL1RvcE1lbnUudnVlIl0sIm5hbWVzIjpbInJlcXVpcmUiLCJ3aW5kb3ciLCJWdWUiLCJjb21wb25lbnQiLCJyZXNvbHZlIiwiYXBwIiwiZWwiLCJjb21wb25lbnRzIiwiVG9wTWVudSIsIkZlZWRiYWNrRm9ybSIsIl8iLCIkIiwialF1ZXJ5IiwiZSIsImF4aW9zIiwiZGVmYXVsdHMiLCJoZWFkZXJzIiwiY29tbW9uIiwidG9rZW4iLCJkb2N1bWVudCIsImhlYWQiLCJxdWVyeVNlbGVjdG9yIiwiY29udGVudCIsImNvbnNvbGUiLCJlcnJvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNBOztJQUNBLE07QUFDQTtBQUFBOztBQUNBO0FBQ0E7Ozs7NEJBQ0EsSyxFQUFBO0FBQ0E7QUFDQTs7OzhCQUNBO0FBQ0E7QUFDQTs7OzRCQUNBLEssRUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7K0JBQ0EsTSxFQUFBO0FBQ0E7QUFDQTs7OzhCQUNBLEssRUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0lBR0EsSTtBQUNBO0FBQUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7K0JBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Z0NBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7K0JBQ0EsVyxFQUFBLEcsRUFBQTtBQUFBOztBQUNBO0FBQ0EsOEZBQ0EsSUFEQSxDQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUpBLEVBS0EsS0FMQSxDQUtBO0FBQ0E7QUFDQTtBQUNBLGlCQVJBO0FBU0EsYUFWQTtBQVdBOzs7a0NBQ0EsSSxFQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OzsrQkFDQSxNLEVBQUE7QUFDQTtBQUNBOzs7Ozs7QUFHQTtBQUNBLFFBREEsa0JBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBREE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBREE7QUFTQSxLQVhBOztBQVlBO0FBQ0EsZ0JBREEsc0JBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBWkEsRzs7Ozs7Ozs7Ozs7QUN4RUE7QUFDQTtBQUNBLE1BREEsa0JBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBRkE7QUFHQSxrQkFIQTtBQUlBO0FBQ0E7QUFEQSxPQUpBO0FBT0E7QUFDQSxZQURBO0FBRUE7QUFGQSxPQVBBO0FBV0E7QUFDQTtBQUNBLHFDQURBO0FBRUEsZ0NBRkE7QUFHQSxrQ0FIQTtBQUlBLDhCQUpBO0FBS0EsdUJBTEE7QUFNQSxnQ0FOQTtBQU9BLDZDQVBBO0FBUUEsdUNBUkE7QUFTQSx3Q0FUQTtBQVVBLDhCQVZBO0FBV0Esb0NBWEE7QUFZQSxnREFaQTtBQWFBLDhCQWJBO0FBY0EsOEJBZEE7QUFlQTtBQUNBLGtEQWhCQTtBQWlCQTtBQWpCQSxTQURBO0FBb0JBO0FBcEJBLE9BWEE7QUFpQ0Esb0JBakNBO0FBa0NBLGNBbENBO0FBbUNBO0FBbkNBO0FBcUNBLEdBdkNBO0FBd0NBLFNBeENBLHFCQXdDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0EvQ0E7O0FBZ0RBO0FBQ0E7QUFDQTtBQUNBLEdBbkRBO0FBb0RBO0FBQ0E7QUFDQTtBQUNBLEdBdkRBO0FBd0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FGQSxNQUVBO0FBQ0E7QUFDQTtBQUNBO0FBUEEsR0F4REE7QUFpRUE7QUFDQTtBQUNBO0FBQ0EsYUFDQSxLQURBLENBQ0EsU0FEQSxFQUNBLFlBREEsRUFDQSxpQkFEQSxFQUVBLEtBRkEsQ0FFQSxRQUZBO0FBR0EsS0FOQTs7QUFRQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0EvQkE7O0FBaUNBLG1CQWpDQSw2QkFpQ0E7QUFDQTtBQUNBO0FBQ0EsNEVBREE7QUFFQTtBQUZBO0FBSUEsS0F2Q0E7OztBQXlDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw2QkFDQSxPQURBLENBQ0E7QUFDQTtBQURBLE9BREEsRUFJQSxPQUpBLENBSUEsUUFKQTtBQUtBLEtBL0RBOztBQWlFQTtBQUNBO0FBQ0E7QUFDQSx1QkFEQTtBQUVBLGtCQUZBO0FBR0Esa0JBSEE7QUFJQTtBQUpBO0FBTUE7QUFDQSx1QkFEQTtBQUVBLGtCQUZBO0FBR0Esa0JBSEE7QUFJQSw2QkFKQTtBQUtBO0FBTEE7QUFPQSxtR0FDQTtBQUNBO0FBREEsT0FEQSxFQUlBO0FBQ0EsdUJBREE7QUFFQSxrQkFGQTtBQUdBLDZCQUhBO0FBSUE7QUFKQSxPQUpBO0FBVUEsc0dBQ0E7QUFDQTtBQURBLE9BREEsRUFJQTtBQUNBLHVCQURBO0FBRUEsa0JBRkE7QUFHQSw2QkFIQTtBQUlBO0FBSkEsT0FKQTtBQVVBLEtBcEdBOztBQXNHQTtBQUFBOztBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BSEEsTUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBOUdBOztBQWdIQTtBQUNBO0FBQ0EsS0FsSEE7O0FBb0hBO0FBQ0E7QUFBQSxVQUNBLGVBREE7QUFBQSxVQUVBLHNDQUZBO0FBQUEsVUFHQSxvREFIQTtBQUFBLFVBSUEsc0RBSkE7QUFBQSxVQUtBLGtEQUxBO0FBQUEsVUFNQSw0Q0FOQTtBQUFBLFVBT0Esb0RBUEE7QUFBQSxVQVFBLDREQVJBO0FBQUEsVUFTQSw4Q0FDQSw2RkFEQSxDQVRBO0FBQUEsVUFZQSw2RUFaQTtBQUFBLFVBYUEsd0RBYkE7QUFBQSxVQWNBLG9HQWRBOztBQWdCQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFEQSxTQUVBO0FBQ0Esb0JBREE7QUFFQTtBQUZBLE9BRkEsR0FNQSxHQU5BLENBTUEsa0hBTkEsRUFPQSxHQVBBLENBT0EsaUhBUEEsRUFRQSxHQVJBLENBUUEsa0hBUkEsRUFTQSxHQVRBLENBU0EsaUhBVEEsRUFVQSxHQVZBLENBVUEsa0hBVkEsRUFXQSxHQVhBLENBV0EsaUhBWEEsRUFZQSxHQVpBLENBWUEsa0hBWkE7O0FBY0E7QUFDQTtBQUNBO0FBREEsU0FFQTtBQUNBLHFCQURBO0FBRUE7QUFGQSxPQUZBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGtGQUNBLDJCQURBLEVBRUEsMkRBRkE7QUFJQTtBQUpBLE9BS0EsR0FMQSxDQUtBLGlFQUNBLDJEQURBLENBTEE7O0FBU0E7QUFDQTtBQUNBLGdDQUNBLGdCQURBLEVBRUEsZ0JBRkE7O0FBS0E7QUFDQTtBQUNBLHlGQUNBLDJEQURBLEdBRUEsU0FGQTs7QUFJQTtBQUNBO0FBQ0EsNkZBQ0EsZ0JBREEsR0FFQSxTQUZBOztBQUlBO0FBQ0E7QUFDQSxxSEFDQSxlQURBLEVBRUEsZ0JBRkE7O0FBS0E7QUFDQTtBQUNBLDBCQUNBLDhGQUNBLDRCQURBLEVBRUEsNkJBRkEsRUFHQSxJQUhBLENBREE7O0FBUUE7QUFDQTtBQUNBLG1IQUNBLGdCQURBLEVBRUEsZ0JBRkEsR0FHQSxHQUhBOztBQUtBO0FBQ0E7QUFDQSxxSEFDQSxvQ0FEQSxFQUVBLHVDQUZBLEVBR0EsQ0FIQSxHQUlBLFNBSkE7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXJQQTtBQWpFQSxHOzs7Ozs7O0FDRkE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNyR0E7Ozs7OztBQU1BLG1CQUFBQSxDQUFRLG9DQUFSOztBQUVBQyxPQUFPQyxHQUFQLEdBQWEsbUJBQUFGLENBQVEsdUNBQVIsQ0FBYjs7QUFFQTs7Ozs7O0FBTUE7QUFDQTs7QUFFQUUsSUFBSUMsU0FBSixDQUFjLFFBQWQsRUFBd0IsVUFBVUMsT0FBVixFQUFtQjtBQUN6Q0osRUFBQSx3REFBUSxxQ0FBQyw4RUFBRCxDQUFSLElBQTZDSSxPLDhDQUE3QztBQUNELENBRkQ7O0FBSUFGLElBQUlDLFNBQUosQ0FBYyxNQUFkLEVBQXNCLFVBQVVDLE9BQVYsRUFBbUI7QUFDdkNKLEVBQUEsd0RBQVEscUNBQUMsNEVBQUQsQ0FBUixJQUEyQ0ksTyw4Q0FBM0M7QUFDRCxDQUZEOztBQUlBRixJQUFJQyxTQUFKLENBQWMsT0FBZCxFQUF1QixVQUFVQyxPQUFWLEVBQW1CO0FBQ3hDSixFQUFBLHdEQUFRLHFDQUFDLDZFQUFELENBQVIsSUFBZ0RJLE8sOENBQWhEO0FBQ0QsQ0FGRDs7QUFJQUYsSUFBSUMsU0FBSixDQUFjLGFBQWQsRUFBNkIsVUFBVUMsT0FBVixFQUFtQjtBQUM5Q0osRUFBQSx3REFBUSxxQ0FBQyxrRkFBRCxDQUFSLElBQXFESSxPLDhDQUFyRDtBQUNELENBRkQ7O0FBSUFGLElBQUlDLFNBQUosQ0FBYyxNQUFkLEVBQXNCLFVBQVVDLE9BQVYsRUFBbUI7QUFDdkNKLEVBQUEsd0RBQVEscUNBQUMsZ0ZBQUQsQ0FBUixJQUFtREksTyw4Q0FBbkQ7QUFDRCxDQUZEOztBQUlBRixJQUFJQyxTQUFKLENBQWMsYUFBZCxFQUE2QixVQUFVQyxPQUFWLEVBQW1CO0FBQzlDSixFQUFBLHdEQUFRLHFDQUFDLHFGQUFELENBQVIsSUFBd0RJLE8sOENBQXhEO0FBQ0QsQ0FGRDs7QUFJQSxJQUFNQyxNQUFNLElBQUlILEdBQUosQ0FBUTtBQUNsQkksTUFBSSxNQURjO0FBRWxCQyxjQUFZO0FBQ1ZDLGFBQUEsMkRBRFUsRUFDREMsY0FBQSxnRUFBQUE7QUFEQztBQUZNLENBQVIsQ0FBWixDOzs7Ozs7OztBQzNDQVIsT0FBT1MsQ0FBUCxHQUFXLG1CQUFBVixDQUFRLGlDQUFSLENBQVg7O0FBRUE7Ozs7OztBQU1BLElBQUk7QUFDQUMsU0FBT1UsQ0FBUCxHQUFXVixPQUFPVyxNQUFQLEdBQWdCLG1CQUFBWixDQUFRLHNDQUFSLENBQTNCOztBQUVBO0FBQ0gsQ0FKRCxDQUlFLE9BQU9hLENBQVAsRUFBVSxDQUFFOztBQUVkOzs7Ozs7QUFNQVosT0FBT2EsS0FBUCxHQUFlLG1CQUFBZCxDQUFRLCtCQUFSLENBQWY7O0FBRUFDLE9BQU9hLEtBQVAsQ0FBYUMsUUFBYixDQUFzQkMsT0FBdEIsQ0FBOEJDLE1BQTlCLENBQXFDLGtCQUFyQyxJQUEyRCxnQkFBM0Q7O0FBRUE7Ozs7OztBQU1BLElBQUlDLFFBQVFDLFNBQVNDLElBQVQsQ0FBY0MsYUFBZCxDQUE0Qix5QkFBNUIsQ0FBWjs7QUFFQSxJQUFJSCxLQUFKLEVBQVc7QUFDUGpCLFNBQU9hLEtBQVAsQ0FBYUMsUUFBYixDQUFzQkMsT0FBdEIsQ0FBOEJDLE1BQTlCLENBQXFDLGNBQXJDLElBQXVEQyxNQUFNSSxPQUE3RDtBQUNILENBRkQsTUFFTztBQUNIQyxVQUFRQyxLQUFSLENBQWMsdUVBQWQ7QUFDSDs7QUFFRDs7Ozs7O0FBTUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTTs7Ozs7OztBQ3BEQTtBQUNBO0FBQ0E7QUFDQSw2YUFBc1I7QUFDdFI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7QUFFRDs7Ozs7Ozs7QUN4Q0E7QUFDQTtBQUNBO0FBQ0Esd2FBQXNSO0FBQ3RSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7O0FBRUQiLCJmaWxlIjoiL2pzL2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQ+XG4gICAgaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuICAgIGNsYXNzIEVycm9ycyB7XG4gICAgICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAgICAgdGhpcy5lcnJvcnMgPSB7fVxuICAgICAgICB9XG4gICAgICAgIGhhcyhmaWVsZCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZXJyb3JzLmhhc093blByb3BlcnR5KGZpZWxkKVxuICAgICAgICB9XG4gICAgICAgIGFueSgpIHtcbiAgICAgICAgICAgIHJldHVybiBPYmplY3Qua2V5cyh0aGlzLmVycm9ycykubGVuZ3RoID4gMFxuICAgICAgICB9XG4gICAgICAgIGdldChmaWVsZCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuZXJyb3JzW2ZpZWxkXSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmVycm9yc1tmaWVsZF1bMF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZWNvcmQoZXJyb3JzKSB7XG4gICAgICAgICAgICB0aGlzLmVycm9ycyA9IGVycm9yc1xuICAgICAgICB9XG4gICAgICAgIGNsZWFyKGZpZWxkKSB7XG4gICAgICAgICAgICBpZiAoZmllbGQpIHtcbiAgICAgICAgICAgICAgICBkZWxldGUgdGhpcy5lcnJvcnNbZmllbGRdXG4gICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmVycm9ycyA9IHt9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjbGFzcyBGb3JtIHtcbiAgICAgICAgY29uc3RydWN0b3IoZGF0YSkge1xuICAgICAgICAgICAgdGhpcy5vcmlnaW5hbERhdGEgPSBkYXRhO1xuICAgICAgICAgICAgZm9yIChsZXQgZmllbGQgaW4gZGF0YSkge1xuICAgICAgICAgICAgICAgIHRoaXNbZmllbGRdID0gZGF0YVtmaWVsZF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuZXJyb3JzID0gbmV3IEVycm9ycygpXG4gICAgICAgICAgICB0aGlzLnN1Y2Nlc3MgPSBmYWxzZVxuICAgICAgICB9XG4gICAgICAgIGRhdGEoKSB7XG4gICAgICAgICAgICBsZXQgZGF0YSA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMpXG4gICAgICAgICAgICBkZWxldGUgZGF0YS5vcmlnaW5hbERhdGFcbiAgICAgICAgICAgIGRlbGV0ZSBkYXRhLmVycm9yc1xuICAgICAgICAgICAgcmV0dXJuIGRhdGFcbiAgICAgICAgfVxuICAgICAgICByZXNldCgpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGZpZWxkIGluIHRoaXMub3JpZ2luYWxEYXRhKSB7XG4gICAgICAgICAgICAgICAgdGhpc1tmaWVsZF0gPSAnJ1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5lcnJvcnMuY2xlYXIoKVxuICAgICAgICB9XG4gICAgICAgIHN1Ym1pdChyZXF1ZXN0VHlwZSwgdXJsKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgICAgIGF4aW9zW3JlcXVlc3RUeXBlXSh1cmwsIHRoaXMuZGF0YSgpKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub25TdWNjZXNzKHJlc3BvbnNlLmRhdGEpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXNwb25zZS5kYXRhKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vbkZhaWwoZXJyb3IucmVzcG9uc2UuZGF0YSlcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnJvci5yZXNwb25zZS5kYXRhKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgb25TdWNjZXNzKGRhdGEpIHtcbiAgICAgICAgICAgIHRoaXMucmVzZXQoKVxuICAgICAgICAgICAgdGhpcy5tZXNzYWdlID0gZGF0YS5tZXNzYWdlXG4gICAgICAgICAgICB0aGlzLnN1Y2Nlc3MgPSB0cnVlXG4gICAgICAgIH1cbiAgICAgICAgb25GYWlsKGVycm9ycykge1xuICAgICAgICAgICAgdGhpcy5lcnJvcnMucmVjb3JkKGVycm9ycylcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgZGF0YSAoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGZvcm06IG5ldyBGb3JtKHtcbiAgICAgICAgICAgICAgICAgICAgZW1haWw6ICcnLFxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgLy8gZmlyc3RfbmFtZTogJycsXG4gICAgICAgICAgICAgICAgICAgIC8vIGxhc3RfbmFtZTogJycsXG4gICAgICAgICAgICAgICAgICAgIC8vIHBob25lOiAnJyxcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICBvblN1Ym1pdCgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmZvcm0uc3VibWl0KCdwb3N0JywgJy9mZWVkYmFjay1tZXNzYWdlcycpXG4vLyAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKGRhdGEgPT4gY29uc29sZS5sb2coZGF0YSkpXG4vLyAgICAgICAgICAgICAgICAgICAgICAgIC5jYXRjaChlcnJvcnMgPT4gY29uc29sZS5sb2coZXJyb3JzKSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHJlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9GZWVkYmFja0Zvcm0udnVlIiwiPHNjcmlwdD5cbiAgaW1wb3J0IHtUd2Vlbk1heCwgVGltZWxpbmVMaXRlfSBmcm9tICdnc2FwJ1xuICBleHBvcnQgZGVmYXVsdCB7XG4gICAgZGF0YSAoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAvLyBicm93c2VyOiAwLFxuICAgICAgICB0aW1lbGluZTogbnVsbCxcbiAgICAgICAgdG9wT2Zmc2V0OiAwLFxuICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgIHRvcE9mZnNldEZvclRvZ2dsZUFuaW1hdGlvbjogMzAwXG4gICAgICAgIH0sXG4gICAgICAgIGN1cnNvcjoge1xuICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgeTogMFxuICAgICAgICB9LFxuICAgICAgICBzZWxlY3RvcnM6IHtcbiAgICAgICAgICBnc2FwOiB7XG4gICAgICAgICAgICBzdmdMb2dvOiAnI2hlYWRlci1sb2dvLXN2ZycsXG4gICAgICAgICAgICBsZWZ0SGFuZDogJyNsZWZ0LWhhbmQnLFxuICAgICAgICAgICAgcmlnaHRIYW5kOiAnI3JpZ2h0LWhhbmQnLFxuICAgICAgICAgICAgbWFuQm9keTogJyNtYW4tZnVsbCcsXG4gICAgICAgICAgICBoZWFkOiAnI2hlYWQnLFxuICAgICAgICAgICAgZXllUHVwaWw6ICcjZXllLXB1cGlsJyxcbiAgICAgICAgICAgIHRleHRBZG1pbm9pZDogJyNzdHJpcHBlZC1sb2dvLXRleHQnLFxuICAgICAgICAgICAgdGV4dHNXZWJtYXN0ZXI6ICcjd2ViLU1hc3RlcicsXG4gICAgICAgICAgICB0ZXh0c1dlYm1hc3RlckxldHRlcjogJy53bS10bCcsXG4gICAgICAgICAgICB0ZXh0V2ViOiAndHNwYW4jd2ViJyxcbiAgICAgICAgICAgIHRleHRNYXN0ZXI6ICd0c3BhbiNtYXN0ZXInLFxuICAgICAgICAgICAgdGV4dHNXZWJtYXN0ZXJXcmFwcGVyOiAnI1JlY3RhbmdsZS0yMScsXG4gICAgICAgICAgICB0b3BNZW51OiAnI3RvcC1tZW51JyxcbiAgICAgICAgICAgIHRvcE1lbnVJdGVtOiAnLml0ZW0nLFxuICAgICAgICAgICAgLy8gZmxpY2tlclxuICAgICAgICAgICAgcmVjdGFuZ2xlQ2VudGVyQ29sb3I6ICcjUmVjdGFuZ2xlLUdyZWVuJyxcbiAgICAgICAgICAgIHJlY3RhbmdsZXNCb3JkZXJDb2xvcjogJy5SZWN0YW5nbGUtUmVkJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAgZXllOiAnI2V5ZS1wdXBpbCdcbiAgICAgICAgfSxcbiAgICAgICAgcmVkdWNlZDogZmFsc2UsXG4gICAgICAgICRleWU6IHt9LFxuICAgICAgICBleWVUcmFuc2Zvcm1XaXRoQW5nbGU6ICd0cmFuc2xhdGUoMTMuMDAwMDAwLCAzNi4wMDAwMDApIHJvdGF0ZSg0MC4wMDAwMDApIHRyYW5zbGF0ZSgtMTMuMDAwMDAwLCAtMzYuMDAwMDAwKSB0cmFuc2xhdGUoOC4wMDAwMDAsIDMxLjAwMDAwMCknXG4gICAgICB9XG4gICAgfSxcbiAgICBtb3VudGVkICgpIHtcbiAgICAgIHRoaXMuY2hlY2tUb3BPZmZzZXQoKTtcbiAgICAgIHRoaXMuaW5pdEZsaWNrZXIoKTtcbiAgICAgIHRoaXMudGltZWxpbmUgPSB0aGlzLmNvbXBpbGVUaW1lbGluZSgpO1xuICAgICAgdGhpcy4kZXllID0gJCh0aGlzLiRlbCkuZmluZCh0aGlzLnNlbGVjdG9ycy5leWUpO1xuXG4gICAgICAvLyB0aGlzLmJyb3dzZXIgPSB0aGlzLmRldGVjdEJyb3dzZXIoKTtcbiAgICB9LFxuICAgIGNyZWF0ZWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLmNoZWNrVG9wT2Zmc2V0KTtcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzLmV5ZU1vdmUpO1xuICAgIH0sXG4gICAgYmVmb3JlRGVzdHJveTogZnVuY3Rpb24gKCkge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuY2hlY2tUb3BPZmZzZXQpO1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMuZXllTW92ZSk7XG4gICAgfSxcbiAgICB3YXRjaDoge1xuICAgICAgdG9wT2Zmc2V0OiBmdW5jdGlvbiAodmFsLCBvbGRWYWwpIHtcbiAgICAgICAgaWYgKG9sZFZhbCA8IHRoaXMuc2V0dGluZ3MudG9wT2Zmc2V0Rm9yVG9nZ2xlQW5pbWF0aW9uICYmIHZhbCA+PSB0aGlzLnNldHRpbmdzLnRvcE9mZnNldEZvclRvZ2dsZUFuaW1hdGlvbikge1xuICAgICAgICAgIHRoaXMucnVuTG9nb0FuaW1hdGlvbigpXG4gICAgICAgIH0gZWxzZSBpZiAob2xkVmFsID49IHRoaXMuc2V0dGluZ3MudG9wT2Zmc2V0Rm9yVG9nZ2xlQW5pbWF0aW9uICYmIHZhbCA8IHRoaXMuc2V0dGluZ3MudG9wT2Zmc2V0Rm9yVG9nZ2xlQW5pbWF0aW9uKSB7XG4gICAgICAgICAgdGhpcy5ydW5Mb2dvQW5pbWF0aW9uKCdiYWNrd2FyZCcpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgIHdyaXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGxldCAkbW9kYWwgPSAkKCcjc3VwZXItbW9kYWwnKTtcbiAgICAgICAgJG1vZGFsXG4gICAgICAgIC5tb2RhbCgnc2V0dGluZycsICd0cmFuc2l0aW9uJywgJ2hvcml6b250YWwgZmxpcCcpXG4gICAgICAgIC5tb2RhbCgndG9nZ2xlJyk7XG4gICAgICB9LFxuXG4gICAgICBleWVNb3ZlOiBmdW5jdGlvbiAoZSkge1xuICAgICAgICBpZiAoIXRoaXMucmVkdWNlZCkgcmV0dXJuIGZhbHNlO1xuICAgICAgICB0aGlzLmN1cnNvci54ID0gZS5wYWdlWDtcbiAgICAgICAgdGhpcy5jdXJzb3IueSA9IGUucGFnZVk7XG5cbiAgICAgICAgLy8gbGV0IGFkanVzdG1lbnQ7XG4gICAgICAgIC8vIHN3aXRjaCAodGhpcy5icm93c2VyKSB7XG4gICAgICAgIC8vICAgY2FzZSAnY2hyb21lJzpcbiAgICAgICAgLy8gICAgIGFkanVzdG1lbnQgPSAxMDgyO1xuICAgICAgICAvLyAgICAgYnJlYWs7XG4gICAgICAgIC8vICAgY2FzZSAnc2FmYXJpJzpcbiAgICAgICAgLy8gICAgIGFkanVzdG1lbnQgPSA4ODI7XG4gICAgICAgIC8vICAgICBicmVhaztcbiAgICAgICAgLy8gICBjYXNlICdmaXJlZm94JzpcbiAgICAgICAgLy8gICAgIGFkanVzdG1lbnQgPSAzODI7XG4gICAgICAgIC8vICAgICBicmVhaztcbiAgICAgICAgLy8gfVxuXG4gICAgICAgIC8vIGxldCBleWVDZW50ZXIgPSBbdGhpcy4kZXllWzBdLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQgKyB0aGlzLiRleWUud2lkdGgoKSAvIDIsIHRoaXMuJGV5ZVswXS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgKyBhZGp1c3RtZW50ICsgdGhpcy4kZXllLmhlaWdodCgpIC8gMl07XG4gICAgICAgIGxldCBleWVDZW50ZXIgPSBbdGhpcy4kZXllWzBdLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQgKyB0aGlzLmdldFNjcm9sbE9mZnNldCgpLmxlZnQgKyB0aGlzLiRleWUud2lkdGgoKSAvIDIsIHRoaXMuJGV5ZVswXS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgKyB0aGlzLmdldFNjcm9sbE9mZnNldCgpLnRvcCArIHRoaXMuJGV5ZS5oZWlnaHQoKSAvIDJdO1xuICAgICAgICBsZXQgZXllQW5nbGUgPSBNYXRoLmF0YW4yKGUucGFnZVggLSBleWVDZW50ZXJbMF0sIC0oZS5wYWdlWSAtIGV5ZUNlbnRlclsxXSkpICogKDE4MCAvIE1hdGguUEkpIC0gOTA7XG5cbiAgICAgICAgdGhpcy5leWVUcmFuc2Zvcm1XaXRoQW5nbGUgPSAndHJhbnNsYXRlKDEzLjAwMDAwMCwgMzYuMDAwMDAwKSByb3RhdGUoJyArIGV5ZUFuZ2xlICsgJykgdHJhbnNsYXRlKC0xMy4wMDAwMDAsIC0zNi4wMDAwMDApIHRyYW5zbGF0ZSg4LjAwMDAwMCwgMzEuMDAwMDAwKSc7XG4gICAgICB9LFxuXG4gICAgICBnZXRTY3JvbGxPZmZzZXQgKCkge1xuICAgICAgICBjb25zdCBkb2MgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgbGVmdDogKHdpbmRvdy5wYWdlWE9mZnNldCB8fCBkb2Muc2Nyb2xsTGVmdCkgLSAoZG9jLmNsaWVudExlZnQgfHwgMCksXG4gICAgICAgICAgdG9wOiAod2luZG93LnBhZ2VZT2Zmc2V0IHx8IGRvYy5zY3JvbGxUb3ApICAtIChkb2MuY2xpZW50VG9wIHx8IDApLFxuICAgICAgICB9O1xuICAgICAgfSxcblxuICAgICAgLy8gZGV0ZWN0QnJvd3NlciAoKSB7XG4gICAgICAvLyAgIGNvbnN0IHVhID0gbmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpO1xuICAgICAgLy8gICAvLyBjb25zb2xlLmxvZyh1YSk7XG4gICAgICAvL1xuICAgICAgLy8gICBpZiAodWEuaW5kZXhPZignZmlyZWZveCcpICE9IC0xKSB7XG4gICAgICAvLyAgICAgcmV0dXJuICdmaXJlZm94JztcbiAgICAgIC8vICAgfVxuICAgICAgLy8gICBlbHNlIGlmICh1YS5pbmRleE9mKCdzYWZhcmknKSAhPSAtMSkge1xuICAgICAgLy8gICAgIGlmICh1YS5pbmRleE9mKCdjaHJvbWUnKSA+IC0xKSB7XG4gICAgICAvLyAgICAgICByZXR1cm4gJ2Nocm9tZSc7XG4gICAgICAvLyAgICAgfSBlbHNlIHtcbiAgICAgIC8vICAgICAgIHJldHVybiAnc2FmYXJpJztcbiAgICAgIC8vICAgICB9XG4gICAgICAvLyAgIH1cbiAgICAgIC8vIH0sXG5cbiAgICAgIHRvZ2dsZVNpZGViYXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCgnI3RvcC1tZW51LXNpZGViYXInKVxuICAgICAgICAuc2lkZWJhcih7XG4gICAgICAgICAgdHJhbnNpdGlvbjogJ292ZXJsYXknXG4gICAgICAgIH0pXG4gICAgICAgIC5zaWRlYmFyKCd0b2dnbGUnKTtcbiAgICAgIH0sXG5cbiAgICAgIGluaXRGbGlja2VyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0IHN0ZXAgPSAxO1xuICAgICAgICBUd2Vlbk1heC50byh0aGlzLnNlbGVjdG9ycy5nc2FwLnJlY3RhbmdsZUNlbnRlckNvbG9yLCBzdGVwLCB7XG4gICAgICAgICAgZmlsbDogJyNDRDJFNDEnLFxuICAgICAgICAgIHJlcGVhdDogLTEsXG4gICAgICAgICAgeW95bzogdHJ1ZSxcbiAgICAgICAgICByZXBlYXREZWxheTogc3RlcCAqIDNcbiAgICAgICAgfSk7XG4gICAgICAgIFR3ZWVuTWF4LnRvKHRoaXMuc2VsZWN0b3JzLmdzYXAucmVjdGFuZ2xlc0JvcmRlckNvbG9yLCBzdGVwLCB7XG4gICAgICAgICAgZmlsbDogJyMxRDYwQjUnLFxuICAgICAgICAgIHJlcGVhdDogLTEsXG4gICAgICAgICAgeW95bzogdHJ1ZSxcbiAgICAgICAgICByZXBlYXREZWxheTogc3RlcCAqIDMsXG4gICAgICAgICAgZGVsYXk6IHN0ZXAgKiAzXG4gICAgICAgIH0pO1xuICAgICAgICBUd2Vlbk1heC5mcm9tVG8odGhpcy5zZWxlY3RvcnMuZ3NhcC50ZXh0V2ViLCBzdGVwICogMixcbiAgICAgICAge1xuICAgICAgICAgIGZpbGw6ICcjRkZGRkZGJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgZmlsbDogJyNGRjk4MUMnLFxuICAgICAgICAgIHJlcGVhdDogLTEsXG4gICAgICAgICAgcmVwZWF0RGVsYXk6IHN0ZXAgKiAyLFxuICAgICAgICAgIHlveW86IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIFR3ZWVuTWF4LmZyb21Ubyh0aGlzLnNlbGVjdG9ycy5nc2FwLnRleHRNYXN0ZXIsIHN0ZXAgKiAyLFxuICAgICAgICB7XG4gICAgICAgICAgZmlsbDogJyNGRjk4MUMnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBmaWxsOiAnI0ZGRkZGRicsXG4gICAgICAgICAgcmVwZWF0OiAtMSxcbiAgICAgICAgICByZXBlYXREZWxheTogc3RlcCAqIDIsXG4gICAgICAgICAgeW95bzogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgIH0sXG5cbiAgICAgIHJ1bkxvZ29BbmltYXRpb246IGZ1bmN0aW9uIChkaXJlY3Rpb24gPSAnZm9yd2FyZCcpIHtcbiAgICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gJ2ZvcndhcmQnKSB7XG4gICAgICAgICAgdGhpcy5yZWR1Y2VkID0gdHJ1ZTtcbiAgICAgICAgICB0aGlzLnRpbWVsaW5lLnBhdXNlKCkucGxheSgpO1xuICAgICAgICB9IGVsc2UgaWYgKGRpcmVjdGlvbiA9PT0gJ2JhY2t3YXJkJykge1xuICAgICAgICAgIHRoaXMucmVkdWNlZCA9IGZhbHNlO1xuICAgICAgICAgIHRoaXMudGltZWxpbmUucGF1c2UoKS5yZXZlcnNlKCk7XG4gICAgICAgIH1cbiAgICAgIH0sXG5cbiAgICAgIGNoZWNrVG9wT2Zmc2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMudG9wT2Zmc2V0ID0gd2luZG93LnBhZ2VZT2Zmc2V0XG4gICAgICB9LFxuXG4gICAgICBjb21waWxlVGltZWxpbmU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbGV0IHBhcnQxdGltZSA9IDAuMixcbiAgICAgICAgcGFydDJ0aW1lID0gMC41LFxuICAgICAgICAkbG9nbyA9ICQodGhpcy5zZWxlY3RvcnMuZ3NhcC5zdmdMb2dvKSxcbiAgICAgICAgJGxlZnRIYW5kID0gJGxvZ28uZmluZCh0aGlzLnNlbGVjdG9ycy5nc2FwLmxlZnRIYW5kKSxcbiAgICAgICAgJHJpZ2h0SGFuZCA9ICRsb2dvLmZpbmQodGhpcy5zZWxlY3RvcnMuZ3NhcC5yaWdodEhhbmQpLFxuICAgICAgICAkbWFuQm9keSA9ICRsb2dvLmZpbmQodGhpcy5zZWxlY3RvcnMuZ3NhcC5tYW5Cb2R5KSxcbiAgICAgICAgJGhlYWQgPSAkbG9nby5maW5kKHRoaXMuc2VsZWN0b3JzLmdzYXAuaGVhZCksXG4gICAgICAgICRleWVQdXBpbCA9ICRsb2dvLmZpbmQodGhpcy5zZWxlY3RvcnMuZ3NhcC5leWVQdXBpbCksXG4gICAgICAgICR0ZXh0QWRtaW5vaWQgPSAkbG9nby5maW5kKHRoaXMuc2VsZWN0b3JzLmdzYXAudGV4dEFkbWlub2lkKSxcbiAgICAgICAgbGV0dGVyc1dlYm1hc3RlciA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKFxuICAgICAgICAkbG9nby5maW5kKHRoaXMuc2VsZWN0b3JzLmdzYXAudGV4dHNXZWJtYXN0ZXIpLmZpbmQodGhpcy5zZWxlY3RvcnMuZ3NhcC50ZXh0c1dlYm1hc3RlckxldHRlcilcbiAgICAgICAgKSxcbiAgICAgICAgdGV4dHNXZWJtYXN0ZXJXcmFwcGVyID0gJGxvZ28uZmluZCh0aGlzLnNlbGVjdG9ycy5nc2FwLnRleHRzV2VibWFzdGVyV3JhcHBlciksXG4gICAgICAgICR0b3BNZW51ID0gJChkb2N1bWVudCkuZmluZCh0aGlzLnNlbGVjdG9ycy5nc2FwLnRvcE1lbnUpLFxuICAgICAgICB0b3BNZW51SXRlbXNGb3JSZXNpemluZyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKCR0b3BNZW51LmZpbmQodGhpcy5zZWxlY3RvcnMuZ3NhcC50b3BNZW51SXRlbSkpO1xuXG4gICAgICAgIHRvcE1lbnVJdGVtc0ZvclJlc2l6aW5nLnB1c2goJHRvcE1lbnUpO1xuXG4gICAgICAgIGxldCB0bExlZnRIYW5kID0gbmV3IFRpbWVsaW5lTGl0ZSgpO1xuXG4gICAgICAgIC8vIEhhbmRzICh3YXZpbmcpXG4gICAgICAgIHRsTGVmdEhhbmQuYWRkKFR3ZWVuTWF4LmZyb21UbygkbGVmdEhhbmQsIDAuMDgsIHtcbiAgICAgICAgICByb3RhdGlvbjogMFxuICAgICAgICB9LCB7XG4gICAgICAgICAgcm90YXRpb246IDM1LFxuICAgICAgICAgIHRyYW5zZm9ybU9yaWdpbjogJzkwJSAxMDAlJ1xuICAgICAgICB9KSlcbiAgICAgICAgLmFkZChUd2Vlbk1heC50bygkbGVmdEhhbmQsIDAuMDgsIHtyb3RhdGlvbjogLTUwLCB0cmFuc2Zvcm1PcmlnaW46ICc5MCUgMTAwJSd9KSlcbiAgICAgICAgLmFkZChUd2Vlbk1heC50bygkbGVmdEhhbmQsIDAuMDgsIHtyb3RhdGlvbjogMzUsIHRyYW5zZm9ybU9yaWdpbjogJzkwJSAxMDAlJ30pKVxuICAgICAgICAuYWRkKFR3ZWVuTWF4LnRvKCRsZWZ0SGFuZCwgMC4wOCwge3JvdGF0aW9uOiAtNTAsIHRyYW5zZm9ybU9yaWdpbjogJzkwJSAxMDAlJ30pKVxuICAgICAgICAuYWRkKFR3ZWVuTWF4LnRvKCRsZWZ0SGFuZCwgMC4wOCwge3JvdGF0aW9uOiAzNSwgdHJhbnNmb3JtT3JpZ2luOiAnOTAlIDEwMCUnfSkpXG4gICAgICAgIC5hZGQoVHdlZW5NYXgudG8oJGxlZnRIYW5kLCAwLjA4LCB7cm90YXRpb246IC01MCwgdHJhbnNmb3JtT3JpZ2luOiAnOTAlIDEwMCUnfSkpXG4gICAgICAgIC5hZGQoVHdlZW5NYXgudG8oJGxlZnRIYW5kLCAwLjEwLCB7cm90YXRpb246IDM1LCB0cmFuc2Zvcm1PcmlnaW46ICc5MCUgMTAwJSd9KSlcbiAgICAgICAgLmFkZChUd2Vlbk1heC50bygkbGVmdEhhbmQsIDAuMTUsIHtyb3RhdGlvbjogLTc1LCB0cmFuc2Zvcm1PcmlnaW46ICc5MCUgMTAwJSd9KSk7XG5cbiAgICAgICAgbGV0IHRsUmlnaHRIYW5kID0gbmV3IFRpbWVsaW5lTGl0ZSgpO1xuICAgICAgICB0bFJpZ2h0SGFuZC5hZGQoVHdlZW5NYXguZnJvbVRvKCRyaWdodEhhbmQsIDAuMDgsIHtcbiAgICAgICAgICByb3RhdGlvbjogMFxuICAgICAgICB9LCB7XG4gICAgICAgICAgcm90YXRpb246IC0zNSxcbiAgICAgICAgICB0cmFuc2Zvcm1PcmlnaW46ICcxMCUgMTAwJSdcbiAgICAgICAgfSkpO1xuICAgICAgICB0bFJpZ2h0SGFuZC5hZGQoVHdlZW5NYXgudG8oJHJpZ2h0SGFuZCwgMC4wOCwge3JvdGF0aW9uOiA1MCwgdHJhbnNmb3JtT3JpZ2luOiAnMTAlIDEwMCUnfSkpO1xuICAgICAgICB0bFJpZ2h0SGFuZC5hZGQoVHdlZW5NYXgudG8oJHJpZ2h0SGFuZCwgMC4wOCwge3JvdGF0aW9uOiAtMzUsIHRyYW5zZm9ybU9yaWdpbjogJzEwJSAxMDAlJ30pKTtcbiAgICAgICAgdGxSaWdodEhhbmQuYWRkKFR3ZWVuTWF4LnRvKCRyaWdodEhhbmQsIDAuMDgsIHtyb3RhdGlvbjogNTAsIHRyYW5zZm9ybU9yaWdpbjogJzEwJSAxMDAlJ30pKTtcbiAgICAgICAgdGxSaWdodEhhbmQuYWRkKFR3ZWVuTWF4LnRvKCRyaWdodEhhbmQsIDAuMDgsIHtyb3RhdGlvbjogLTM1LCB0cmFuc2Zvcm1PcmlnaW46ICcxMCUgMTAwJSd9KSk7XG4gICAgICAgIHRsUmlnaHRIYW5kLmFkZChUd2Vlbk1heC50bygkcmlnaHRIYW5kLCAwLjA4LCB7cm90YXRpb246IDUwLCB0cmFuc2Zvcm1PcmlnaW46ICcxMCUgMTAwJSd9KSk7XG4gICAgICAgIHRsUmlnaHRIYW5kLmFkZChUd2Vlbk1heC50bygkcmlnaHRIYW5kLCAwLjEwLCB7cm90YXRpb246IC0zNSwgdHJhbnNmb3JtT3JpZ2luOiAnMTAlIDEwMCUnfSkpO1xuICAgICAgICB0bFJpZ2h0SGFuZC5hZGQoVHdlZW5NYXgudG8oJHJpZ2h0SGFuZCwgMC4xNSwge3JvdGF0aW9uOiA3NSwgdHJhbnNmb3JtT3JpZ2luOiAnMTAlIDEwMCUnfSkpO1xuICAgICAgICBsZXQgdGxIYW5kcyA9IG5ldyBUaW1lbGluZUxpdGUoKTtcbiAgICAgICAgdGxIYW5kcy5hZGQodGxMZWZ0SGFuZCwgMCk7XG4gICAgICAgIHRsSGFuZHMuYWRkKHRsUmlnaHRIYW5kLCAwKTtcblxuICAgICAgICAvLyBCb2R5LCBwYXJ0IDFcbiAgICAgICAgbGV0IHRsQm9keSA9IG5ldyBUaW1lbGluZUxpdGUoKTtcbiAgICAgICAgdGxCb2R5LmFkZChUd2Vlbk1heC50bygkbWFuQm9keSwgMC4yLFxuICAgICAgICB7eTogMCwgeDogMCwgcm90YXRpb246IDB9LFxuICAgICAgICB7eTogLTEwLCB4OiAyMCwgcm90YXRpb246IDM1LCB0cmFuc2Zvcm1PcmlnaW46ICc1MCUgNTAlJ31cbiAgICAgICAgKSlcbiAgICAgICAgLy8gQm9keSwgcGFydCAyXG4gICAgICAgIC5hZGQoVHdlZW5NYXgudG8oJG1hbkJvZHksIDAuNSxcbiAgICAgICAge3k6IC01LCB4OiAxODAsIHJvdGF0aW9uOiA5MCwgdHJhbnNmb3JtT3JpZ2luOiAnNTAlIDUwJSd9XG4gICAgICAgICkpO1xuXG4gICAgICAgIC8vIEhlYWRcbiAgICAgICAgbGV0IHRsSGVhZCA9IG5ldyBUaW1lbGluZUxpdGUoKTtcbiAgICAgICAgdGxIZWFkLmZyb21UbygkaGVhZCwgMC4zLFxuICAgICAgICB7YXV0b0FscGhhOiAxfSxcbiAgICAgICAge2F1dG9BbHBoYTogMH1cbiAgICAgICAgKTtcblxuICAgICAgICAvLyBTVkcgaW1nIHNpemUgKGJlZ2luIGZyb20gcGFydDF0aW1lKVxuICAgICAgICBsZXQgdGxMb2dvU2l6ZSA9IG5ldyBUaW1lbGluZUxpdGUoKTtcbiAgICAgICAgdGxMb2dvU2l6ZS5hZGQoVHdlZW5NYXgudG8oJGxvZ28sIHBhcnQxdGltZSxcbiAgICAgICAge2F0dHI6IHt2aWV3Qm94OiAnMCAwIDIxOSA0Mid9LCB3aWR0aDogMjE5LCBoZWlnaHQ6IDQyfVxuICAgICAgICApLCBwYXJ0MXRpbWUpO1xuXG4gICAgICAgIC8vIEV5ZS1wdXBpbFxuICAgICAgICBsZXQgdGxFeWVQdXBpbCA9IG5ldyBUaW1lbGluZUxpdGUoKTtcbiAgICAgICAgdGxFeWVQdXBpbC5hZGQoVHdlZW5NYXgudG8oJGV5ZVB1cGlsLCBwYXJ0MXRpbWUsXG4gICAgICAgIHthdXRvQWxwaGE6IDF9XG4gICAgICAgICksIHBhcnQxdGltZSk7XG5cbiAgICAgICAgLy8gVGV4dCBhZG1pbm9pZFxuICAgICAgICBsZXQgdGxUZXh0QWRtaW5vaWQgPSBuZXcgVGltZWxpbmVMaXRlKCk7XG4gICAgICAgIHRsVGV4dEFkbWlub2lkLmFkZChUd2Vlbk1heC5mcm9tVG8oJHRleHRBZG1pbm9pZCwgcGFydDF0aW1lICsgcGFydDJ0aW1lLFxuICAgICAgICB7eDogMCwgeTogMjR9LFxuICAgICAgICB7eDogLTUwLCB5OiA3fVxuICAgICAgICApKTtcblxuICAgICAgICAvLyBUZXh0IHdlYm1hc3RlciB0ZXh0c1dlYm1hc3RlclxuICAgICAgICBsZXQgdGxUZXh0V2VibWFzdGVyID0gbmV3IFRpbWVsaW5lTGl0ZSgpO1xuICAgICAgICB0bFRleHRXZWJtYXN0ZXIuYWRkKFxuICAgICAgICBUd2Vlbk1heC5zdGFnZ2VyRnJvbVRvKGxldHRlcnNXZWJtYXN0ZXIucmV2ZXJzZSgpLCAoMC4xKSxcbiAgICAgICAge2F1dG9BbHBoYTogMSwgcm90YXRlWDogMH0sXG4gICAgICAgIHthdXRvQWxwaGE6IDAsIHJvdGF0ZVg6IDEwfSxcbiAgICAgICAgMC4wNVxuICAgICAgICApXG4gICAgICAgICk7XG5cbiAgICAgICAgLy8gV2VibWFzdGVyIFdyYXBwZXJcbiAgICAgICAgbGV0IHRsVGV4dFdlYm1hc3RlcldyYXBwZXIgPSBuZXcgVGltZWxpbmVMaXRlKCk7XG4gICAgICAgIHRsVGV4dFdlYm1hc3RlcldyYXBwZXIuYWRkKFR3ZWVuTWF4LmZyb21Ubyh0ZXh0c1dlYm1hc3RlcldyYXBwZXIsIDAuNSxcbiAgICAgICAge2F1dG9BbHBoYTogMX0sXG4gICAgICAgIHthdXRvQWxwaGE6IDB9XG4gICAgICAgICksIDAuMik7XG5cbiAgICAgICAgLy8gVG9wTWVudSBoZWlnaHQgcmVkdWN0aW9uL2luY3JlYXNlXG4gICAgICAgIGxldCB0bFRvcE1lbnUgPSBuZXcgVGltZWxpbmVMaXRlKCk7XG4gICAgICAgIHRsVG9wTWVudS5hZGQoVHdlZW5NYXguc3RhZ2dlckZyb21Ubyh0b3BNZW51SXRlbXNGb3JSZXNpemluZywgcGFydDF0aW1lLFxuICAgICAgICB7aGVpZ2h0OiAnNC42NjY2N3JlbScsIG9wYWNpdHk6IDF9LFxuICAgICAgICB7aGVpZ2h0OiAnMy42NjY2N3JlbScsIG9wYWNpdHk6IDAuOTN9LFxuICAgICAgICAwXG4gICAgICAgICksIHBhcnQxdGltZSk7XG5cbiAgICAgICAgLy8gQ29uY2x1c2lvblxuICAgICAgICBsZXQgdGltZWxpbmUgPSBuZXcgVGltZWxpbmVMaXRlKHtwYXVzZWQ6IHRydWV9KTtcbiAgICAgICAgdGltZWxpbmUucGF1c2UoKTtcbiAgICAgICAgdGltZWxpbmUuYWRkKHRsSGFuZHMsIDApO1xuICAgICAgICB0aW1lbGluZS5hZGQodGxCb2R5LCAwKTtcbiAgICAgICAgdGltZWxpbmUuYWRkKHRsSGVhZCwgMCk7XG4gICAgICAgIHRpbWVsaW5lLmFkZCh0bExvZ29TaXplLCAwKTtcbiAgICAgICAgdGltZWxpbmUuYWRkKHRsRXllUHVwaWwsIDApO1xuICAgICAgICB0aW1lbGluZS5hZGQodGxUZXh0QWRtaW5vaWQsIDApO1xuICAgICAgICB0aW1lbGluZS5hZGQodGxUZXh0V2VibWFzdGVyLCAwKTtcbiAgICAgICAgdGltZWxpbmUuYWRkKHRsVGV4dFdlYm1hc3RlcldyYXBwZXIsIDApO1xuICAgICAgICB0aW1lbGluZS5hZGQodGxUb3BNZW51LCAwKTtcbiAgICAgICAgcmV0dXJuIHRpbWVsaW5lO1xuICAgICAgfVxuICAgIH1cbiAgfVxuPC9zY3JpcHQ+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL1RvcE1lbnUudnVlIiwiLyogZ2xvYmFscyBfX1ZVRV9TU1JfQ09OVEVYVF9fICovXG5cbi8vIElNUE9SVEFOVDogRG8gTk9UIHVzZSBFUzIwMTUgZmVhdHVyZXMgaW4gdGhpcyBmaWxlLlxuLy8gVGhpcyBtb2R1bGUgaXMgYSBydW50aW1lIHV0aWxpdHkgZm9yIGNsZWFuZXIgY29tcG9uZW50IG1vZHVsZSBvdXRwdXQgYW5kIHdpbGxcbi8vIGJlIGluY2x1ZGVkIGluIHRoZSBmaW5hbCB3ZWJwYWNrIHVzZXIgYnVuZGxlLlxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIG5vcm1hbGl6ZUNvbXBvbmVudCAoXG4gIHJhd1NjcmlwdEV4cG9ydHMsXG4gIGNvbXBpbGVkVGVtcGxhdGUsXG4gIGZ1bmN0aW9uYWxUZW1wbGF0ZSxcbiAgaW5qZWN0U3R5bGVzLFxuICBzY29wZUlkLFxuICBtb2R1bGVJZGVudGlmaWVyIC8qIHNlcnZlciBvbmx5ICovXG4pIHtcbiAgdmFyIGVzTW9kdWxlXG4gIHZhciBzY3JpcHRFeHBvcnRzID0gcmF3U2NyaXB0RXhwb3J0cyA9IHJhd1NjcmlwdEV4cG9ydHMgfHwge31cblxuICAvLyBFUzYgbW9kdWxlcyBpbnRlcm9wXG4gIHZhciB0eXBlID0gdHlwZW9mIHJhd1NjcmlwdEV4cG9ydHMuZGVmYXVsdFxuICBpZiAodHlwZSA9PT0gJ29iamVjdCcgfHwgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGVzTW9kdWxlID0gcmF3U2NyaXB0RXhwb3J0c1xuICAgIHNjcmlwdEV4cG9ydHMgPSByYXdTY3JpcHRFeHBvcnRzLmRlZmF1bHRcbiAgfVxuXG4gIC8vIFZ1ZS5leHRlbmQgY29uc3RydWN0b3IgZXhwb3J0IGludGVyb3BcbiAgdmFyIG9wdGlvbnMgPSB0eXBlb2Ygc2NyaXB0RXhwb3J0cyA9PT0gJ2Z1bmN0aW9uJ1xuICAgID8gc2NyaXB0RXhwb3J0cy5vcHRpb25zXG4gICAgOiBzY3JpcHRFeHBvcnRzXG5cbiAgLy8gcmVuZGVyIGZ1bmN0aW9uc1xuICBpZiAoY29tcGlsZWRUZW1wbGF0ZSkge1xuICAgIG9wdGlvbnMucmVuZGVyID0gY29tcGlsZWRUZW1wbGF0ZS5yZW5kZXJcbiAgICBvcHRpb25zLnN0YXRpY1JlbmRlckZucyA9IGNvbXBpbGVkVGVtcGxhdGUuc3RhdGljUmVuZGVyRm5zXG4gICAgb3B0aW9ucy5fY29tcGlsZWQgPSB0cnVlXG4gIH1cblxuICAvLyBmdW5jdGlvbmFsIHRlbXBsYXRlXG4gIGlmIChmdW5jdGlvbmFsVGVtcGxhdGUpIHtcbiAgICBvcHRpb25zLmZ1bmN0aW9uYWwgPSB0cnVlXG4gIH1cblxuICAvLyBzY29wZWRJZFxuICBpZiAoc2NvcGVJZCkge1xuICAgIG9wdGlvbnMuX3Njb3BlSWQgPSBzY29wZUlkXG4gIH1cblxuICB2YXIgaG9va1xuICBpZiAobW9kdWxlSWRlbnRpZmllcikgeyAvLyBzZXJ2ZXIgYnVpbGRcbiAgICBob29rID0gZnVuY3Rpb24gKGNvbnRleHQpIHtcbiAgICAgIC8vIDIuMyBpbmplY3Rpb25cbiAgICAgIGNvbnRleHQgPVxuICAgICAgICBjb250ZXh0IHx8IC8vIGNhY2hlZCBjYWxsXG4gICAgICAgICh0aGlzLiR2bm9kZSAmJiB0aGlzLiR2bm9kZS5zc3JDb250ZXh0KSB8fCAvLyBzdGF0ZWZ1bFxuICAgICAgICAodGhpcy5wYXJlbnQgJiYgdGhpcy5wYXJlbnQuJHZub2RlICYmIHRoaXMucGFyZW50LiR2bm9kZS5zc3JDb250ZXh0KSAvLyBmdW5jdGlvbmFsXG4gICAgICAvLyAyLjIgd2l0aCBydW5Jbk5ld0NvbnRleHQ6IHRydWVcbiAgICAgIGlmICghY29udGV4dCAmJiB0eXBlb2YgX19WVUVfU1NSX0NPTlRFWFRfXyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29udGV4dCA9IF9fVlVFX1NTUl9DT05URVhUX19cbiAgICAgIH1cbiAgICAgIC8vIGluamVjdCBjb21wb25lbnQgc3R5bGVzXG4gICAgICBpZiAoaW5qZWN0U3R5bGVzKSB7XG4gICAgICAgIGluamVjdFN0eWxlcy5jYWxsKHRoaXMsIGNvbnRleHQpXG4gICAgICB9XG4gICAgICAvLyByZWdpc3RlciBjb21wb25lbnQgbW9kdWxlIGlkZW50aWZpZXIgZm9yIGFzeW5jIGNodW5rIGluZmVycmVuY2VcbiAgICAgIGlmIChjb250ZXh0ICYmIGNvbnRleHQuX3JlZ2lzdGVyZWRDb21wb25lbnRzKSB7XG4gICAgICAgIGNvbnRleHQuX3JlZ2lzdGVyZWRDb21wb25lbnRzLmFkZChtb2R1bGVJZGVudGlmaWVyKVxuICAgICAgfVxuICAgIH1cbiAgICAvLyB1c2VkIGJ5IHNzciBpbiBjYXNlIGNvbXBvbmVudCBpcyBjYWNoZWQgYW5kIGJlZm9yZUNyZWF0ZVxuICAgIC8vIG5ldmVyIGdldHMgY2FsbGVkXG4gICAgb3B0aW9ucy5fc3NyUmVnaXN0ZXIgPSBob29rXG4gIH0gZWxzZSBpZiAoaW5qZWN0U3R5bGVzKSB7XG4gICAgaG9vayA9IGluamVjdFN0eWxlc1xuICB9XG5cbiAgaWYgKGhvb2spIHtcbiAgICB2YXIgZnVuY3Rpb25hbCA9IG9wdGlvbnMuZnVuY3Rpb25hbFxuICAgIHZhciBleGlzdGluZyA9IGZ1bmN0aW9uYWxcbiAgICAgID8gb3B0aW9ucy5yZW5kZXJcbiAgICAgIDogb3B0aW9ucy5iZWZvcmVDcmVhdGVcblxuICAgIGlmICghZnVuY3Rpb25hbCkge1xuICAgICAgLy8gaW5qZWN0IGNvbXBvbmVudCByZWdpc3RyYXRpb24gYXMgYmVmb3JlQ3JlYXRlIGhvb2tcbiAgICAgIG9wdGlvbnMuYmVmb3JlQ3JlYXRlID0gZXhpc3RpbmdcbiAgICAgICAgPyBbXS5jb25jYXQoZXhpc3RpbmcsIGhvb2spXG4gICAgICAgIDogW2hvb2tdXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGZvciB0ZW1wbGF0ZS1vbmx5IGhvdC1yZWxvYWQgYmVjYXVzZSBpbiB0aGF0IGNhc2UgdGhlIHJlbmRlciBmbiBkb2Vzbid0XG4gICAgICAvLyBnbyB0aHJvdWdoIHRoZSBub3JtYWxpemVyXG4gICAgICBvcHRpb25zLl9pbmplY3RTdHlsZXMgPSBob29rXG4gICAgICAvLyByZWdpc3RlciBmb3IgZnVuY3Rpb2FsIGNvbXBvbmVudCBpbiB2dWUgZmlsZVxuICAgICAgb3B0aW9ucy5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXJXaXRoU3R5bGVJbmplY3Rpb24gKGgsIGNvbnRleHQpIHtcbiAgICAgICAgaG9vay5jYWxsKGNvbnRleHQpXG4gICAgICAgIHJldHVybiBleGlzdGluZyhoLCBjb250ZXh0KVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgZXNNb2R1bGU6IGVzTW9kdWxlLFxuICAgIGV4cG9ydHM6IHNjcmlwdEV4cG9ydHMsXG4gICAgb3B0aW9uczogb3B0aW9uc1xuICB9XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplci5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXIuanNcbi8vIG1vZHVsZSBjaHVua3MgPSA3IiwiXG4vKipcbiAqIEZpcnN0IHdlIHdpbGwgbG9hZCBhbGwgb2YgdGhpcyBwcm9qZWN0J3MgSmF2YVNjcmlwdCBkZXBlbmRlbmNpZXMgd2hpY2hcbiAqIGluY2x1ZGVzIFZ1ZSBhbmQgb3RoZXIgbGlicmFyaWVzLiBJdCBpcyBhIGdyZWF0IHN0YXJ0aW5nIHBvaW50IHdoZW5cbiAqIGJ1aWxkaW5nIHJvYnVzdCwgcG93ZXJmdWwgd2ViIGFwcGxpY2F0aW9ucyB1c2luZyBWdWUgYW5kIExhcmF2ZWwuXG4gKi9cblxucmVxdWlyZSgnLi9ib290c3RyYXAnKTtcblxud2luZG93LlZ1ZSA9IHJlcXVpcmUoJ3Z1ZScpO1xuXG4vKipcbiAqIE5leHQsIHdlIHdpbGwgY3JlYXRlIGEgZnJlc2ggVnVlIGFwcGxpY2F0aW9uIGluc3RhbmNlIGFuZCBhdHRhY2ggaXQgdG9cbiAqIHRoZSBwYWdlLiBUaGVuLCB5b3UgbWF5IGJlZ2luIGFkZGluZyBjb21wb25lbnRzIHRvIHRoaXMgYXBwbGljYXRpb25cbiAqIG9yIGN1c3RvbWl6ZSB0aGUgSmF2YVNjcmlwdCBzY2FmZm9sZGluZyB0byBmaXQgeW91ciB1bmlxdWUgbmVlZHMuXG4gKi9cblxuaW1wb3J0IFRvcE1lbnUgZnJvbSAnLi9jb21wb25lbnRzL1RvcE1lbnUnXG5pbXBvcnQgRmVlZGJhY2tGb3JtIGZyb20gJy4vY29tcG9uZW50cy9GZWVkYmFja0Zvcm0nXG5cblZ1ZS5jb21wb25lbnQoXCJjbG91ZHNcIiwgZnVuY3Rpb24gKHJlc29sdmUpIHtcbiAgcmVxdWlyZShbJy4vY29tcG9uZW50cy9wYWdlcy9pbmRleC9DbG91ZHMnXSwgcmVzb2x2ZSlcbn0pXG5cblZ1ZS5jb21wb25lbnQoXCJjdWJlXCIsIGZ1bmN0aW9uIChyZXNvbHZlKSB7XG4gIHJlcXVpcmUoWycuL2NvbXBvbmVudHMvcGFnZXMvaW5kZXgvQ3ViZSddLCByZXNvbHZlKVxufSlcblxuVnVlLmNvbXBvbmVudChcImNsb2NrXCIsIGZ1bmN0aW9uIChyZXNvbHZlKSB7XG4gIHJlcXVpcmUoWycuL2NvbXBvbmVudHMvcGFnZXMvcHJpY2UvQ2xvY2sudnVlJ10sIHJlc29sdmUpXG59KVxuXG5WdWUuY29tcG9uZW50KFwidG9vbHMtYmxvY2tcIiwgZnVuY3Rpb24gKHJlc29sdmUpIHtcbiAgcmVxdWlyZShbJy4vY29tcG9uZW50cy9wYWdlcy90b29scy9Ub29sc0Jsb2NrLnZ1ZSddLCByZXNvbHZlKVxufSlcblxuVnVlLmNvbXBvbmVudChcInpvb21cIiwgZnVuY3Rpb24gKHJlc29sdmUpIHtcbiAgcmVxdWlyZShbJy4vY29tcG9uZW50cy9wYWdlcy9wb3J0Zm9saW8vWm9vbS52dWUnXSwgcmVzb2x2ZSlcbn0pXG5cblZ1ZS5jb21wb25lbnQoXCJoYWxmLXJvdGF0ZVwiLCBmdW5jdGlvbiAocmVzb2x2ZSkge1xuICByZXF1aXJlKFsnLi9jb21wb25lbnRzL3BhZ2VzL3dvcmtmbG93L0hhbGZSb3RhdGUudnVlJ10sIHJlc29sdmUpXG59KVxuXG5jb25zdCBhcHAgPSBuZXcgVnVlKHtcbiAgZWw6ICcjYXBwJyxcbiAgY29tcG9uZW50czoge1xuICAgIFRvcE1lbnUsIEZlZWRiYWNrRm9ybVxuICB9XG59KVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9hcHAuanMiLCJcbndpbmRvdy5fID0gcmVxdWlyZSgnbG9kYXNoJyk7XG5cbi8qKlxuICogV2UnbGwgbG9hZCBqUXVlcnkgYW5kIHRoZSBCb290c3RyYXAgalF1ZXJ5IHBsdWdpbiB3aGljaCBwcm92aWRlcyBzdXBwb3J0XG4gKiBmb3IgSmF2YVNjcmlwdCBiYXNlZCBCb290c3RyYXAgZmVhdHVyZXMgc3VjaCBhcyBtb2RhbHMgYW5kIHRhYnMuIFRoaXNcbiAqIGNvZGUgbWF5IGJlIG1vZGlmaWVkIHRvIGZpdCB0aGUgc3BlY2lmaWMgbmVlZHMgb2YgeW91ciBhcHBsaWNhdGlvbi5cbiAqL1xuXG50cnkge1xuICAgIHdpbmRvdy4kID0gd2luZG93LmpRdWVyeSA9IHJlcXVpcmUoJ2pxdWVyeScpO1xuXG4gICAgLy8gcmVxdWlyZSgnYm9vdHN0cmFwLXNhc3MnKTtcbn0gY2F0Y2ggKGUpIHt9XG5cbi8qKlxuICogV2UnbGwgbG9hZCB0aGUgYXhpb3MgSFRUUCBsaWJyYXJ5IHdoaWNoIGFsbG93cyB1cyB0byBlYXNpbHkgaXNzdWUgcmVxdWVzdHNcbiAqIHRvIG91ciBMYXJhdmVsIGJhY2stZW5kLiBUaGlzIGxpYnJhcnkgYXV0b21hdGljYWxseSBoYW5kbGVzIHNlbmRpbmcgdGhlXG4gKiBDU1JGIHRva2VuIGFzIGEgaGVhZGVyIGJhc2VkIG9uIHRoZSB2YWx1ZSBvZiB0aGUgXCJYU1JGXCIgdG9rZW4gY29va2llLlxuICovXG5cbndpbmRvdy5heGlvcyA9IHJlcXVpcmUoJ2F4aW9zJyk7XG5cbndpbmRvdy5heGlvcy5kZWZhdWx0cy5oZWFkZXJzLmNvbW1vblsnWC1SZXF1ZXN0ZWQtV2l0aCddID0gJ1hNTEh0dHBSZXF1ZXN0JztcblxuLyoqXG4gKiBOZXh0IHdlIHdpbGwgcmVnaXN0ZXIgdGhlIENTUkYgVG9rZW4gYXMgYSBjb21tb24gaGVhZGVyIHdpdGggQXhpb3Mgc28gdGhhdFxuICogYWxsIG91dGdvaW5nIEhUVFAgcmVxdWVzdHMgYXV0b21hdGljYWxseSBoYXZlIGl0IGF0dGFjaGVkLiBUaGlzIGlzIGp1c3RcbiAqIGEgc2ltcGxlIGNvbnZlbmllbmNlIHNvIHdlIGRvbid0IGhhdmUgdG8gYXR0YWNoIGV2ZXJ5IHRva2VuIG1hbnVhbGx5LlxuICovXG5cbmxldCB0b2tlbiA9IGRvY3VtZW50LmhlYWQucXVlcnlTZWxlY3RvcignbWV0YVtuYW1lPVwiY3NyZi10b2tlblwiXScpO1xuXG5pZiAodG9rZW4pIHtcbiAgICB3aW5kb3cuYXhpb3MuZGVmYXVsdHMuaGVhZGVycy5jb21tb25bJ1gtQ1NSRi1UT0tFTiddID0gdG9rZW4uY29udGVudDtcbn0gZWxzZSB7XG4gICAgY29uc29sZS5lcnJvcignQ1NSRiB0b2tlbiBub3QgZm91bmQ6IGh0dHBzOi8vbGFyYXZlbC5jb20vZG9jcy9jc3JmI2NzcmYteC1jc3JmLXRva2VuJyk7XG59XG5cbi8qKlxuICogRWNobyBleHBvc2VzIGFuIGV4cHJlc3NpdmUgQVBJIGZvciBzdWJzY3JpYmluZyB0byBjaGFubmVscyBhbmQgbGlzdGVuaW5nXG4gKiBmb3IgZXZlbnRzIHRoYXQgYXJlIGJyb2FkY2FzdCBieSBMYXJhdmVsLiBFY2hvIGFuZCBldmVudCBicm9hZGNhc3RpbmdcbiAqIGFsbG93cyB5b3VyIHRlYW0gdG8gZWFzaWx5IGJ1aWxkIHJvYnVzdCByZWFsLXRpbWUgd2ViIGFwcGxpY2F0aW9ucy5cbiAqL1xuXG4vLyBpbXBvcnQgRWNobyBmcm9tICdsYXJhdmVsLWVjaG8nXG5cbi8vIHdpbmRvdy5QdXNoZXIgPSByZXF1aXJlKCdwdXNoZXItanMnKTtcblxuLy8gd2luZG93LkVjaG8gPSBuZXcgRWNobyh7XG4vLyAgICAgYnJvYWRjYXN0ZXI6ICdwdXNoZXInLFxuLy8gICAgIGtleTogJ3lvdXItcHVzaGVyLWtleSdcbi8vIH0pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9ib290c3RyYXAuanMiLCJ2YXIgZGlzcG9zZWQgPSBmYWxzZVxudmFyIG5vcm1hbGl6ZUNvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpXG4vKiBzY3JpcHQgKi9cbnZhciBfX3Z1ZV9zY3JpcHRfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlbnZcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2UsXFxcInRhcmdldHNcXFwiOntcXFwiYnJvd3NlcnNcXFwiOltcXFwiPiAyJVxcXCJdLFxcXCJ1Z2xpZnlcXFwiOnRydWV9fV1dLFxcXCJwbHVnaW5zXFxcIjpbXFxcInRyYW5zZm9ybS1vYmplY3QtcmVzdC1zcHJlYWRcXFwiLFtcXFwidHJhbnNmb3JtLXJ1bnRpbWVcXFwiLHtcXFwicG9seWZpbGxcXFwiOmZhbHNlLFxcXCJoZWxwZXJzXFxcIjpmYWxzZX1dXX0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9GZWVkYmFja0Zvcm0udnVlXCIpXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSBudWxsXG4vKiB0ZW1wbGF0ZSBmdW5jdGlvbmFsICovXG52YXIgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fID0gZmFsc2Vcbi8qIHN0eWxlcyAqL1xudmFyIF9fdnVlX3N0eWxlc19fID0gbnVsbFxuLyogc2NvcGVJZCAqL1xudmFyIF9fdnVlX3Njb3BlSWRfXyA9IG51bGxcbi8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xudmFyIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSBudWxsXG52YXIgQ29tcG9uZW50ID0gbm9ybWFsaXplQ29tcG9uZW50KFxuICBfX3Z1ZV9zY3JpcHRfXyxcbiAgX192dWVfdGVtcGxhdGVfXyxcbiAgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fLFxuICBfX3Z1ZV9zdHlsZXNfXyxcbiAgX192dWVfc2NvcGVJZF9fLFxuICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9GZWVkYmFja0Zvcm0udnVlXCJcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1sb2FkZXIvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LWUxZGRkMWMwXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtZTFkZGQxYzBcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgZGlzcG9zZWQgPSB0cnVlXG4gIH0pXG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9GZWVkYmFja0Zvcm0udnVlXG4vLyBtb2R1bGUgaWQgPSAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9GZWVkYmFja0Zvcm0udnVlXG4vLyBtb2R1bGUgY2h1bmtzID0gNyIsInZhciBkaXNwb3NlZCA9IGZhbHNlXG52YXIgbm9ybWFsaXplQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIilcbi8qIHNjcmlwdCAqL1xudmFyIF9fdnVlX3NjcmlwdF9fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVudlxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZSxcXFwidGFyZ2V0c1xcXCI6e1xcXCJicm93c2Vyc1xcXCI6W1xcXCI+IDIlXFxcIl0sXFxcInVnbGlmeVxcXCI6dHJ1ZX19XV0sXFxcInBsdWdpbnNcXFwiOltcXFwidHJhbnNmb3JtLW9iamVjdC1yZXN0LXNwcmVhZFxcXCIsW1xcXCJ0cmFuc2Zvcm0tcnVudGltZVxcXCIse1xcXCJwb2x5ZmlsbFxcXCI6ZmFsc2UsXFxcImhlbHBlcnNcXFwiOmZhbHNlfV1dfSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL1RvcE1lbnUudnVlXCIpXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSBudWxsXG4vKiB0ZW1wbGF0ZSBmdW5jdGlvbmFsICovXG52YXIgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fID0gZmFsc2Vcbi8qIHN0eWxlcyAqL1xudmFyIF9fdnVlX3N0eWxlc19fID0gbnVsbFxuLyogc2NvcGVJZCAqL1xudmFyIF9fdnVlX3Njb3BlSWRfXyA9IG51bGxcbi8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xudmFyIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSBudWxsXG52YXIgQ29tcG9uZW50ID0gbm9ybWFsaXplQ29tcG9uZW50KFxuICBfX3Z1ZV9zY3JpcHRfXyxcbiAgX192dWVfdGVtcGxhdGVfXyxcbiAgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fLFxuICBfX3Z1ZV9zdHlsZXNfXyxcbiAgX192dWVfc2NvcGVJZF9fLFxuICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9Ub3BNZW51LnZ1ZVwiXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtbG9hZGVyL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi02MjhkNmE2ZFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTYyOGQ2YTZkXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvVG9wTWVudS52dWVcbi8vIG1vZHVsZSBpZCA9IC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL1RvcE1lbnUudnVlXG4vLyBtb2R1bGUgY2h1bmtzID0gNyJdLCJzb3VyY2VSb290IjoiIn0=