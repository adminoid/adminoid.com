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
      console.log(field);
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
      this.errors.record(errors.errors);
    }
  }]);

  return Form;
}();

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      form: new Form({
        email: '',
        text: ''
        // first_name: '',
        // last_name: '',
        // phone: '',
      })
    };
  },

  methods: {
    onSubmit: function onSubmit() {
      var _this2 = this;

      this.form.submit('post', '/feedback-messages').then(function (data) {
        _this2.message = data.message;
        // console.log(data)
      });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL0ZlZWRiYWNrRm9ybS52dWUiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9Ub3BNZW51LnZ1ZSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9ib290c3RyYXAuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL0ZlZWRiYWNrRm9ybS52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL1RvcE1lbnUudnVlIl0sIm5hbWVzIjpbInJlcXVpcmUiLCJ3aW5kb3ciLCJWdWUiLCJjb21wb25lbnQiLCJyZXNvbHZlIiwiYXBwIiwiZWwiLCJjb21wb25lbnRzIiwiVG9wTWVudSIsIkZlZWRiYWNrRm9ybSIsIl8iLCIkIiwialF1ZXJ5IiwiZSIsImF4aW9zIiwiZGVmYXVsdHMiLCJoZWFkZXJzIiwiY29tbW9uIiwidG9rZW4iLCJkb2N1bWVudCIsImhlYWQiLCJxdWVyeVNlbGVjdG9yIiwiY29udGVudCIsImNvbnNvbGUiLCJlcnJvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNBOztJQUNBLE07QUFDQTtBQUFBOztBQUNBO0FBQ0E7Ozs7d0JBQ0EsSyxFQUFBO0FBQ0E7QUFDQTs7OzBCQUNBO0FBQ0E7QUFDQTs7O3dCQUNBLEssRUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OzsyQkFDQSxNLEVBQUE7QUFDQTtBQUNBOzs7MEJBQ0EsSyxFQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7SUFHQSxJO0FBQ0E7QUFBQTs7QUFDQTtBQUNB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LENBQThCQyxNQUE5QixDQUFxQyxrQkFBckMsSUFBMkQsZ0JBQTNEOztBQUVBOzs7Ozs7QUFNQSxJQUFJQyxRQUFRQyxTQUFTQyxJQUFULENBQWNDLGFBQWQsQ0FBNEIseUJBQTVCLENBQVo7O0FBRUEsSUFBSUgsS0FBSixFQUFXO0FBQ1BqQixTQUFPYSxLQUFQLENBQWFDLFFBQWIsQ0FBc0JDLE9BQXRCLENBQThCQyxNQUE5QixDQUFxQyxjQUFyQyxJQUF1REMsTUFBTUksT0FBN0Q7QUFDSCxDQUZELE1BRU87QUFDSEMsVUFBUUMsS0FBUixDQUFjLHVFQUFkO0FBQ0g7O0FBRUQ7Ozs7OztBQU1BOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE07Ozs7Ozs7QUNwREE7QUFDQTtBQUNBO0FBQ0EsNmFBQXNSO0FBQ3RSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7O0FBRUQ7Ozs7Ozs7O0FDeENBO0FBQ0E7QUFDQTtBQUNBLHdhQUFzUjtBQUN0UjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDOztBQUVEIiwiZmlsZSI6Ii9qcy9hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8c2NyaXB0PlxuICBpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG4gIGNsYXNzIEVycm9ycyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICB0aGlzLmVycm9ycyA9IHt9XG4gICAgfVxuICAgIGhhcyhmaWVsZCkge1xuICAgICAgcmV0dXJuIHRoaXMuZXJyb3JzLmhhc093blByb3BlcnR5KGZpZWxkKVxuICAgIH1cbiAgICBhbnkoKSB7XG4gICAgICByZXR1cm4gT2JqZWN0LmtleXModGhpcy5lcnJvcnMpLmxlbmd0aCA+IDBcbiAgICB9XG4gICAgZ2V0KGZpZWxkKSB7XG4gICAgICBjb25zb2xlLmxvZyhmaWVsZCk7XG4gICAgICBpZiAodGhpcy5lcnJvcnNbZmllbGRdKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVycm9yc1tmaWVsZF1bMF1cbiAgICAgIH1cbiAgICB9XG4gICAgcmVjb3JkKGVycm9ycykge1xuICAgICAgdGhpcy5lcnJvcnMgPSBlcnJvcnNcbiAgICB9XG4gICAgY2xlYXIoZmllbGQpIHtcbiAgICAgIGlmIChmaWVsZCkge1xuICAgICAgICBkZWxldGUgdGhpcy5lcnJvcnNbZmllbGRdXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgdGhpcy5lcnJvcnMgPSB7fVxuICAgIH1cbiAgfVxuXG4gIGNsYXNzIEZvcm0ge1xuICAgIGNvbnN0cnVjdG9yKGRhdGEpIHtcbiAgICAgIHRoaXMub3JpZ2luYWxEYXRhID0gZGF0YTtcbiAgICAgIGZvciAobGV0IGZpZWxkIGluIGRhdGEpIHtcbiAgICAgICAgdGhpc1tmaWVsZF0gPSBkYXRhW2ZpZWxkXVxuICAgICAgfVxuICAgICAgdGhpcy5lcnJvcnMgPSBuZXcgRXJyb3JzKClcbiAgICAgIHRoaXMuc3VjY2VzcyA9IGZhbHNlXG4gICAgfVxuICAgIGRhdGEoKSB7XG4gICAgICBsZXQgZGF0YSA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMpXG4gICAgICBkZWxldGUgZGF0YS5vcmlnaW5hbERhdGFcbiAgICAgIGRlbGV0ZSBkYXRhLmVycm9yc1xuICAgICAgcmV0dXJuIGRhdGFcbiAgICB9XG4gICAgcmVzZXQoKSB7XG4gICAgICBmb3IgKGxldCBmaWVsZCBpbiB0aGlzLm9yaWdpbmFsRGF0YSkge1xuICAgICAgICB0aGlzW2ZpZWxkXSA9ICcnXG4gICAgICB9XG4gICAgICB0aGlzLmVycm9ycy5jbGVhcigpXG4gICAgfVxuICAgIHN1Ym1pdChyZXF1ZXN0VHlwZSwgdXJsKSB7XG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICBheGlvc1tyZXF1ZXN0VHlwZV0odXJsLCB0aGlzLmRhdGEoKSlcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgIHRoaXMub25TdWNjZXNzKHJlc3BvbnNlLmRhdGEpXG4gICAgICAgICAgcmVzb2x2ZShyZXNwb25zZS5kYXRhKVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgIHRoaXMub25GYWlsKGVycm9yLnJlc3BvbnNlLmRhdGEpXG4gICAgICAgIH0pXG4gICAgICB9KVxuICAgIH1cbiAgICBvblN1Y2Nlc3MoZGF0YSkge1xuICAgICAgdGhpcy5yZXNldCgpO1xuICAgICAgdGhpcy5tZXNzYWdlID0gZGF0YS5tZXNzYWdlO1xuICAgICAgdGhpcy5zdWNjZXNzID0gdHJ1ZTtcbiAgICB9XG4gICAgb25GYWlsKGVycm9ycykge1xuICAgICAgdGhpcy5lcnJvcnMucmVjb3JkKGVycm9ycy5lcnJvcnMpO1xuICAgIH1cbiAgfVxuXG4gIGV4cG9ydCBkZWZhdWx0IHtcbiAgICBkYXRhICgpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGZvcm06IG5ldyBGb3JtKHtcbiAgICAgICAgICBlbWFpbDogJycsXG4gICAgICAgICAgdGV4dDogJycsXG4gICAgICAgICAgLy8gZmlyc3RfbmFtZTogJycsXG4gICAgICAgICAgLy8gbGFzdF9uYW1lOiAnJyxcbiAgICAgICAgICAvLyBwaG9uZTogJycsXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICBvblN1Ym1pdCgpIHtcbiAgICAgICAgdGhpcy5mb3JtLnN1Ym1pdCgncG9zdCcsICcvZmVlZGJhY2stbWVzc2FnZXMnKVxuICAgICAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgdGhpcy5tZXNzYWdlID0gZGF0YS5tZXNzYWdlO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZGF0YSlcbiAgICAgICAgICB9KTtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgLmNhdGNoKGVycm9ycyA9PiBjb25zb2xlLmxvZyhlcnJvcnMpKVxuICAgICAgfVxuICAgIH1cbiAgfVxuPC9zY3JpcHQ+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL0ZlZWRiYWNrRm9ybS52dWUiLCI8c2NyaXB0PlxuICBpbXBvcnQge1R3ZWVuTWF4LCBUaW1lbGluZUxpdGV9IGZyb20gJ2dzYXAnXG4gIGV4cG9ydCBkZWZhdWx0IHtcbiAgICBkYXRhICgpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC8vIGJyb3dzZXI6IDAsXG4gICAgICAgIHRpbWVsaW5lOiBudWxsLFxuICAgICAgICB0b3BPZmZzZXQ6IDAsXG4gICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgdG9wT2Zmc2V0Rm9yVG9nZ2xlQW5pbWF0aW9uOiAzMDBcbiAgICAgICAgfSxcbiAgICAgICAgY3Vyc29yOiB7XG4gICAgICAgICAgeDogMCxcbiAgICAgICAgICB5OiAwXG4gICAgICAgIH0sXG4gICAgICAgIHNlbGVjdG9yczoge1xuICAgICAgICAgIGdzYXA6IHtcbiAgICAgICAgICAgIHN2Z0xvZ286ICcjaGVhZGVyLWxvZ28tc3ZnJyxcbiAgICAgICAgICAgIGxlZnRIYW5kOiAnI2xlZnQtaGFuZCcsXG4gICAgICAgICAgICByaWdodEhhbmQ6ICcjcmlnaHQtaGFuZCcsXG4gICAgICAgICAgICBtYW5Cb2R5OiAnI21hbi1mdWxsJyxcbiAgICAgICAgICAgIGhlYWQ6ICcjaGVhZCcsXG4gICAgICAgICAgICBleWVQdXBpbDogJyNleWUtcHVwaWwnLFxuICAgICAgICAgICAgdGV4dEFkbWlub2lkOiAnI3N0cmlwcGVkLWxvZ28tdGV4dCcsXG4gICAgICAgICAgICB0ZXh0c1dlYm1hc3RlcjogJyN3ZWItTWFzdGVyJyxcbiAgICAgICAgICAgIHRleHRzV2VibWFzdGVyTGV0dGVyOiAnLndtLXRsJyxcbiAgICAgICAgICAgIHRleHRXZWI6ICd0c3BhbiN3ZWInLFxuICAgICAgICAgICAgdGV4dE1hc3RlcjogJ3RzcGFuI21hc3RlcicsXG4gICAgICAgICAgICB0ZXh0c1dlYm1hc3RlcldyYXBwZXI6ICcjUmVjdGFuZ2xlLTIxJyxcbiAgICAgICAgICAgIHRvcE1lbnU6ICcjdG9wLW1lbnUnLFxuICAgICAgICAgICAgdG9wTWVudUl0ZW06ICcuaXRlbScsXG4gICAgICAgICAgICAvLyBmbGlja2VyXG4gICAgICAgICAgICByZWN0YW5nbGVDZW50ZXJDb2xvcjogJyNSZWN0YW5nbGUtR3JlZW4nLFxuICAgICAgICAgICAgcmVjdGFuZ2xlc0JvcmRlckNvbG9yOiAnLlJlY3RhbmdsZS1SZWQnXG4gICAgICAgICAgfSxcbiAgICAgICAgICBleWU6ICcjZXllLXB1cGlsJ1xuICAgICAgICB9LFxuICAgICAgICByZWR1Y2VkOiBmYWxzZSxcbiAgICAgICAgJGV5ZToge30sXG4gICAgICAgIGV5ZVRyYW5zZm9ybVdpdGhBbmdsZTogJ3RyYW5zbGF0ZSgxMy4wMDAwMDAsIDM2LjAwMDAwMCkgcm90YXRlKDQwLjAwMDAwMCkgdHJhbnNsYXRlKC0xMy4wMDAwMDAsIC0zNi4wMDAwMDApIHRyYW5zbGF0ZSg4LjAwMDAwMCwgMzEuMDAwMDAwKSdcbiAgICAgIH1cbiAgICB9LFxuICAgIG1vdW50ZWQgKCkge1xuICAgICAgdGhpcy5jaGVja1RvcE9mZnNldCgpO1xuICAgICAgdGhpcy5pbml0RmxpY2tlcigpO1xuICAgICAgdGhpcy50aW1lbGluZSA9IHRoaXMuY29tcGlsZVRpbWVsaW5lKCk7XG4gICAgICB0aGlzLiRleWUgPSAkKHRoaXMuJGVsKS5maW5kKHRoaXMuc2VsZWN0b3JzLmV5ZSk7XG5cbiAgICAgIC8vIHRoaXMuYnJvd3NlciA9IHRoaXMuZGV0ZWN0QnJvd3NlcigpO1xuICAgIH0sXG4gICAgY3JlYXRlZDogZnVuY3Rpb24gKCkge1xuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuY2hlY2tUb3BPZmZzZXQpO1xuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMuZXllTW92ZSk7XG4gICAgfSxcbiAgICBiZWZvcmVEZXN0cm95OiBmdW5jdGlvbiAoKSB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5jaGVja1RvcE9mZnNldCk7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5leWVNb3ZlKTtcbiAgICB9LFxuICAgIHdhdGNoOiB7XG4gICAgICB0b3BPZmZzZXQ6IGZ1bmN0aW9uICh2YWwsIG9sZFZhbCkge1xuICAgICAgICBpZiAob2xkVmFsIDwgdGhpcy5zZXR0aW5ncy50b3BPZmZzZXRGb3JUb2dnbGVBbmltYXRpb24gJiYgdmFsID49IHRoaXMuc2V0dGluZ3MudG9wT2Zmc2V0Rm9yVG9nZ2xlQW5pbWF0aW9uKSB7XG4gICAgICAgICAgdGhpcy5ydW5Mb2dvQW5pbWF0aW9uKClcbiAgICAgICAgfSBlbHNlIGlmIChvbGRWYWwgPj0gdGhpcy5zZXR0aW5ncy50b3BPZmZzZXRGb3JUb2dnbGVBbmltYXRpb24gJiYgdmFsIDwgdGhpcy5zZXR0aW5ncy50b3BPZmZzZXRGb3JUb2dnbGVBbmltYXRpb24pIHtcbiAgICAgICAgICB0aGlzLnJ1bkxvZ29BbmltYXRpb24oJ2JhY2t3YXJkJylcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgd3JpdGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbGV0ICRtb2RhbCA9ICQoJyNzdXBlci1tb2RhbCcpO1xuICAgICAgICAkbW9kYWxcbiAgICAgICAgLm1vZGFsKCdzZXR0aW5nJywgJ3RyYW5zaXRpb24nLCAnaG9yaXpvbnRhbCBmbGlwJylcbiAgICAgICAgLm1vZGFsKCd0b2dnbGUnKTtcbiAgICAgIH0sXG5cbiAgICAgIGV5ZU1vdmU6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGlmICghdGhpcy5yZWR1Y2VkKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIHRoaXMuY3Vyc29yLnggPSBlLnBhZ2VYO1xuICAgICAgICB0aGlzLmN1cnNvci55ID0gZS5wYWdlWTtcblxuICAgICAgICAvLyBsZXQgYWRqdXN0bWVudDtcbiAgICAgICAgLy8gc3dpdGNoICh0aGlzLmJyb3dzZXIpIHtcbiAgICAgICAgLy8gICBjYXNlICdjaHJvbWUnOlxuICAgICAgICAvLyAgICAgYWRqdXN0bWVudCA9IDEwODI7XG4gICAgICAgIC8vICAgICBicmVhaztcbiAgICAgICAgLy8gICBjYXNlICdzYWZhcmknOlxuICAgICAgICAvLyAgICAgYWRqdXN0bWVudCA9IDg4MjtcbiAgICAgICAgLy8gICAgIGJyZWFrO1xuICAgICAgICAvLyAgIGNhc2UgJ2ZpcmVmb3gnOlxuICAgICAgICAvLyAgICAgYWRqdXN0bWVudCA9IDM4MjtcbiAgICAgICAgLy8gICAgIGJyZWFrO1xuICAgICAgICAvLyB9XG5cbiAgICAgICAgLy8gbGV0IGV5ZUNlbnRlciA9IFt0aGlzLiRleWVbMF0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdCArIHRoaXMuJGV5ZS53aWR0aCgpIC8gMiwgdGhpcy4kZXllWzBdLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCArIGFkanVzdG1lbnQgKyB0aGlzLiRleWUuaGVpZ2h0KCkgLyAyXTtcbiAgICAgICAgbGV0IGV5ZUNlbnRlciA9IFt0aGlzLiRleWVbMF0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdCArIHRoaXMuZ2V0U2Nyb2xsT2Zmc2V0KCkubGVmdCArIHRoaXMuJGV5ZS53aWR0aCgpIC8gMiwgdGhpcy4kZXllWzBdLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCArIHRoaXMuZ2V0U2Nyb2xsT2Zmc2V0KCkudG9wICsgdGhpcy4kZXllLmhlaWdodCgpIC8gMl07XG4gICAgICAgIGxldCBleWVBbmdsZSA9IE1hdGguYXRhbjIoZS5wYWdlWCAtIGV5ZUNlbnRlclswXSwgLShlLnBhZ2VZIC0gZXllQ2VudGVyWzFdKSkgKiAoMTgwIC8gTWF0aC5QSSkgLSA5MDtcblxuICAgICAgICB0aGlzLmV5ZVRyYW5zZm9ybVdpdGhBbmdsZSA9ICd0cmFuc2xhdGUoMTMuMDAwMDAwLCAzNi4wMDAwMDApIHJvdGF0ZSgnICsgZXllQW5nbGUgKyAnKSB0cmFuc2xhdGUoLTEzLjAwMDAwMCwgLTM2LjAwMDAwMCkgdHJhbnNsYXRlKDguMDAwMDAwLCAzMS4wMDAwMDApJztcbiAgICAgIH0sXG5cbiAgICAgIGdldFNjcm9sbE9mZnNldCAoKSB7XG4gICAgICAgIGNvbnN0IGRvYyA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBsZWZ0OiAod2luZG93LnBhZ2VYT2Zmc2V0IHx8IGRvYy5zY3JvbGxMZWZ0KSAtIChkb2MuY2xpZW50TGVmdCB8fCAwKSxcbiAgICAgICAgICB0b3A6ICh3aW5kb3cucGFnZVlPZmZzZXQgfHwgZG9jLnNjcm9sbFRvcCkgIC0gKGRvYy5jbGllbnRUb3AgfHwgMCksXG4gICAgICAgIH07XG4gICAgICB9LFxuXG4gICAgICAvLyBkZXRlY3RCcm93c2VyICgpIHtcbiAgICAgIC8vICAgY29uc3QgdWEgPSBuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCk7XG4gICAgICAvLyAgIC8vIGNvbnNvbGUubG9nKHVhKTtcbiAgICAgIC8vXG4gICAgICAvLyAgIGlmICh1YS5pbmRleE9mKCdmaXJlZm94JykgIT0gLTEpIHtcbiAgICAgIC8vICAgICByZXR1cm4gJ2ZpcmVmb3gnO1xuICAgICAgLy8gICB9XG4gICAgICAvLyAgIGVsc2UgaWYgKHVhLmluZGV4T2YoJ3NhZmFyaScpICE9IC0xKSB7XG4gICAgICAvLyAgICAgaWYgKHVhLmluZGV4T2YoJ2Nocm9tZScpID4gLTEpIHtcbiAgICAgIC8vICAgICAgIHJldHVybiAnY2hyb21lJztcbiAgICAgIC8vICAgICB9IGVsc2Uge1xuICAgICAgLy8gICAgICAgcmV0dXJuICdzYWZhcmknO1xuICAgICAgLy8gICAgIH1cbiAgICAgIC8vICAgfVxuICAgICAgLy8gfSxcblxuICAgICAgdG9nZ2xlU2lkZWJhcjogZnVuY3Rpb24gKCkge1xuICAgICAgICAkKCcjdG9wLW1lbnUtc2lkZWJhcicpXG4gICAgICAgIC5zaWRlYmFyKHtcbiAgICAgICAgICB0cmFuc2l0aW9uOiAnb3ZlcmxheSdcbiAgICAgICAgfSlcbiAgICAgICAgLnNpZGViYXIoJ3RvZ2dsZScpO1xuICAgICAgfSxcblxuICAgICAgaW5pdEZsaWNrZXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3Qgc3RlcCA9IDE7XG4gICAgICAgIFR3ZWVuTWF4LnRvKHRoaXMuc2VsZWN0b3JzLmdzYXAucmVjdGFuZ2xlQ2VudGVyQ29sb3IsIHN0ZXAsIHtcbiAgICAgICAgICBmaWxsOiAnI0NEMkU0MScsXG4gICAgICAgICAgcmVwZWF0OiAtMSxcbiAgICAgICAgICB5b3lvOiB0cnVlLFxuICAgICAgICAgIHJlcGVhdERlbGF5OiBzdGVwICogM1xuICAgICAgICB9KTtcbiAgICAgICAgVHdlZW5NYXgudG8odGhpcy5zZWxlY3RvcnMuZ3NhcC5yZWN0YW5nbGVzQm9yZGVyQ29sb3IsIHN0ZXAsIHtcbiAgICAgICAgICBmaWxsOiAnIzFENjBCNScsXG4gICAgICAgICAgcmVwZWF0OiAtMSxcbiAgICAgICAgICB5b3lvOiB0cnVlLFxuICAgICAgICAgIHJlcGVhdERlbGF5OiBzdGVwICogMyxcbiAgICAgICAgICBkZWxheTogc3RlcCAqIDNcbiAgICAgICAgfSk7XG4gICAgICAgIFR3ZWVuTWF4LmZyb21Ubyh0aGlzLnNlbGVjdG9ycy5nc2FwLnRleHRXZWIsIHN0ZXAgKiAyLFxuICAgICAgICB7XG4gICAgICAgICAgZmlsbDogJyNGRkZGRkYnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBmaWxsOiAnI0ZGOTgxQycsXG4gICAgICAgICAgcmVwZWF0OiAtMSxcbiAgICAgICAgICByZXBlYXREZWxheTogc3RlcCAqIDIsXG4gICAgICAgICAgeW95bzogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgVHdlZW5NYXguZnJvbVRvKHRoaXMuc2VsZWN0b3JzLmdzYXAudGV4dE1hc3Rlciwgc3RlcCAqIDIsXG4gICAgICAgIHtcbiAgICAgICAgICBmaWxsOiAnI0ZGOTgxQydcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGZpbGw6ICcjRkZGRkZGJyxcbiAgICAgICAgICByZXBlYXQ6IC0xLFxuICAgICAgICAgIHJlcGVhdERlbGF5OiBzdGVwICogMixcbiAgICAgICAgICB5b3lvOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgfSxcblxuICAgICAgcnVuTG9nb0FuaW1hdGlvbjogZnVuY3Rpb24gKGRpcmVjdGlvbiA9ICdmb3J3YXJkJykge1xuICAgICAgICBpZiAoZGlyZWN0aW9uID09PSAnZm9yd2FyZCcpIHtcbiAgICAgICAgICB0aGlzLnJlZHVjZWQgPSB0cnVlO1xuICAgICAgICAgIHRoaXMudGltZWxpbmUucGF1c2UoKS5wbGF5KCk7XG4gICAgICAgIH0gZWxzZSBpZiAoZGlyZWN0aW9uID09PSAnYmFja3dhcmQnKSB7XG4gICAgICAgICAgdGhpcy5yZWR1Y2VkID0gZmFsc2U7XG4gICAgICAgICAgdGhpcy50aW1lbGluZS5wYXVzZSgpLnJldmVyc2UoKTtcbiAgICAgICAgfVxuICAgICAgfSxcblxuICAgICAgY2hlY2tUb3BPZmZzZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy50b3BPZmZzZXQgPSB3aW5kb3cucGFnZVlPZmZzZXRcbiAgICAgIH0sXG5cbiAgICAgIGNvbXBpbGVUaW1lbGluZTogZnVuY3Rpb24gKCkge1xuICAgICAgICBsZXQgcGFydDF0aW1lID0gMC4yLFxuICAgICAgICBwYXJ0MnRpbWUgPSAwLjUsXG4gICAgICAgICRsb2dvID0gJCh0aGlzLnNlbGVjdG9ycy5nc2FwLnN2Z0xvZ28pLFxuICAgICAgICAkbGVmdEhhbmQgPSAkbG9nby5maW5kKHRoaXMuc2VsZWN0b3JzLmdzYXAubGVmdEhhbmQpLFxuICAgICAgICAkcmlnaHRIYW5kID0gJGxvZ28uZmluZCh0aGlzLnNlbGVjdG9ycy5nc2FwLnJpZ2h0SGFuZCksXG4gICAgICAgICRtYW5Cb2R5ID0gJGxvZ28uZmluZCh0aGlzLnNlbGVjdG9ycy5nc2FwLm1hbkJvZHkpLFxuICAgICAgICAkaGVhZCA9ICRsb2dvLmZpbmQodGhpcy5zZWxlY3RvcnMuZ3NhcC5oZWFkKSxcbiAgICAgICAgJGV5ZVB1cGlsID0gJGxvZ28uZmluZCh0aGlzLnNlbGVjdG9ycy5nc2FwLmV5ZVB1cGlsKSxcbiAgICAgICAgJHRleHRBZG1pbm9pZCA9ICRsb2dvLmZpbmQodGhpcy5zZWxlY3RvcnMuZ3NhcC50ZXh0QWRtaW5vaWQpLFxuICAgICAgICBsZXR0ZXJzV2VibWFzdGVyID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoXG4gICAgICAgICRsb2dvLmZpbmQodGhpcy5zZWxlY3RvcnMuZ3NhcC50ZXh0c1dlYm1hc3RlcikuZmluZCh0aGlzLnNlbGVjdG9ycy5nc2FwLnRleHRzV2VibWFzdGVyTGV0dGVyKVxuICAgICAgICApLFxuICAgICAgICB0ZXh0c1dlYm1hc3RlcldyYXBwZXIgPSAkbG9nby5maW5kKHRoaXMuc2VsZWN0b3JzLmdzYXAudGV4dHNXZWJtYXN0ZXJXcmFwcGVyKSxcbiAgICAgICAgJHRvcE1lbnUgPSAkKGRvY3VtZW50KS5maW5kKHRoaXMuc2VsZWN0b3JzLmdzYXAudG9wTWVudSksXG4gICAgICAgIHRvcE1lbnVJdGVtc0ZvclJlc2l6aW5nID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoJHRvcE1lbnUuZmluZCh0aGlzLnNlbGVjdG9ycy5nc2FwLnRvcE1lbnVJdGVtKSk7XG5cbiAgICAgICAgdG9wTWVudUl0ZW1zRm9yUmVzaXppbmcucHVzaCgkdG9wTWVudSk7XG5cbiAgICAgICAgbGV0IHRsTGVmdEhhbmQgPSBuZXcgVGltZWxpbmVMaXRlKCk7XG5cbiAgICAgICAgLy8gSGFuZHMgKHdhdmluZylcbiAgICAgICAgdGxMZWZ0SGFuZC5hZGQoVHdlZW5NYXguZnJvbVRvKCRsZWZ0SGFuZCwgMC4wOCwge1xuICAgICAgICAgIHJvdGF0aW9uOiAwXG4gICAgICAgIH0sIHtcbiAgICAgICAgICByb3RhdGlvbjogMzUsXG4gICAgICAgICAgdHJhbnNmb3JtT3JpZ2luOiAnOTAlIDEwMCUnXG4gICAgICAgIH0pKVxuICAgICAgICAuYWRkKFR3ZWVuTWF4LnRvKCRsZWZ0SGFuZCwgMC4wOCwge3JvdGF0aW9uOiAtNTAsIHRyYW5zZm9ybU9yaWdpbjogJzkwJSAxMDAlJ30pKVxuICAgICAgICAuYWRkKFR3ZWVuTWF4LnRvKCRsZWZ0SGFuZCwgMC4wOCwge3JvdGF0aW9uOiAzNSwgdHJhbnNmb3JtT3JpZ2luOiAnOTAlIDEwMCUnfSkpXG4gICAgICAgIC5hZGQoVHdlZW5NYXgudG8oJGxlZnRIYW5kLCAwLjA4LCB7cm90YXRpb246IC01MCwgdHJhbnNmb3JtT3JpZ2luOiAnOTAlIDEwMCUnfSkpXG4gICAgICAgIC5hZGQoVHdlZW5NYXgudG8oJGxlZnRIYW5kLCAwLjA4LCB7cm90YXRpb246IDM1LCB0cmFuc2Zvcm1PcmlnaW46ICc5MCUgMTAwJSd9KSlcbiAgICAgICAgLmFkZChUd2Vlbk1heC50bygkbGVmdEhhbmQsIDAuMDgsIHtyb3RhdGlvbjogLTUwLCB0cmFuc2Zvcm1PcmlnaW46ICc5MCUgMTAwJSd9KSlcbiAgICAgICAgLmFkZChUd2Vlbk1heC50bygkbGVmdEhhbmQsIDAuMTAsIHtyb3RhdGlvbjogMzUsIHRyYW5zZm9ybU9yaWdpbjogJzkwJSAxMDAlJ30pKVxuICAgICAgICAuYWRkKFR3ZWVuTWF4LnRvKCRsZWZ0SGFuZCwgMC4xNSwge3JvdGF0aW9uOiAtNzUsIHRyYW5zZm9ybU9yaWdpbjogJzkwJSAxMDAlJ30pKTtcblxuICAgICAgICBsZXQgdGxSaWdodEhhbmQgPSBuZXcgVGltZWxpbmVMaXRlKCk7XG4gICAgICAgIHRsUmlnaHRIYW5kLmFkZChUd2Vlbk1heC5mcm9tVG8oJHJpZ2h0SGFuZCwgMC4wOCwge1xuICAgICAgICAgIHJvdGF0aW9uOiAwXG4gICAgICAgIH0sIHtcbiAgICAgICAgICByb3RhdGlvbjogLTM1LFxuICAgICAgICAgIHRyYW5zZm9ybU9yaWdpbjogJzEwJSAxMDAlJ1xuICAgICAgICB9KSk7XG4gICAgICAgIHRsUmlnaHRIYW5kLmFkZChUd2Vlbk1heC50bygkcmlnaHRIYW5kLCAwLjA4LCB7cm90YXRpb246IDUwLCB0cmFuc2Zvcm1PcmlnaW46ICcxMCUgMTAwJSd9KSk7XG4gICAgICAgIHRsUmlnaHRIYW5kLmFkZChUd2Vlbk1heC50bygkcmlnaHRIYW5kLCAwLjA4LCB7cm90YXRpb246IC0zNSwgdHJhbnNmb3JtT3JpZ2luOiAnMTAlIDEwMCUnfSkpO1xuICAgICAgICB0bFJpZ2h0SGFuZC5hZGQoVHdlZW5NYXgudG8oJHJpZ2h0SGFuZCwgMC4wOCwge3JvdGF0aW9uOiA1MCwgdHJhbnNmb3JtT3JpZ2luOiAnMTAlIDEwMCUnfSkpO1xuICAgICAgICB0bFJpZ2h0SGFuZC5hZGQoVHdlZW5NYXgudG8oJHJpZ2h0SGFuZCwgMC4wOCwge3JvdGF0aW9uOiAtMzUsIHRyYW5zZm9ybU9yaWdpbjogJzEwJSAxMDAlJ30pKTtcbiAgICAgICAgdGxSaWdodEhhbmQuYWRkKFR3ZWVuTWF4LnRvKCRyaWdodEhhbmQsIDAuMDgsIHtyb3RhdGlvbjogNTAsIHRyYW5zZm9ybU9yaWdpbjogJzEwJSAxMDAlJ30pKTtcbiAgICAgICAgdGxSaWdodEhhbmQuYWRkKFR3ZWVuTWF4LnRvKCRyaWdodEhhbmQsIDAuMTAsIHtyb3RhdGlvbjogLTM1LCB0cmFuc2Zvcm1PcmlnaW46ICcxMCUgMTAwJSd9KSk7XG4gICAgICAgIHRsUmlnaHRIYW5kLmFkZChUd2Vlbk1heC50bygkcmlnaHRIYW5kLCAwLjE1LCB7cm90YXRpb246IDc1LCB0cmFuc2Zvcm1PcmlnaW46ICcxMCUgMTAwJSd9KSk7XG4gICAgICAgIGxldCB0bEhhbmRzID0gbmV3IFRpbWVsaW5lTGl0ZSgpO1xuICAgICAgICB0bEhhbmRzLmFkZCh0bExlZnRIYW5kLCAwKTtcbiAgICAgICAgdGxIYW5kcy5hZGQodGxSaWdodEhhbmQsIDApO1xuXG4gICAgICAgIC8vIEJvZHksIHBhcnQgMVxuICAgICAgICBsZXQgdGxCb2R5ID0gbmV3IFRpbWVsaW5lTGl0ZSgpO1xuICAgICAgICB0bEJvZHkuYWRkKFR3ZWVuTWF4LnRvKCRtYW5Cb2R5LCAwLjIsXG4gICAgICAgIHt5OiAwLCB4OiAwLCByb3RhdGlvbjogMH0sXG4gICAgICAgIHt5OiAtMTAsIHg6IDIwLCByb3RhdGlvbjogMzUsIHRyYW5zZm9ybU9yaWdpbjogJzUwJSA1MCUnfVxuICAgICAgICApKVxuICAgICAgICAvLyBCb2R5LCBwYXJ0IDJcbiAgICAgICAgLmFkZChUd2Vlbk1heC50bygkbWFuQm9keSwgMC41LFxuICAgICAgICB7eTogLTUsIHg6IDE4MCwgcm90YXRpb246IDkwLCB0cmFuc2Zvcm1PcmlnaW46ICc1MCUgNTAlJ31cbiAgICAgICAgKSk7XG5cbiAgICAgICAgLy8gSGVhZFxuICAgICAgICBsZXQgdGxIZWFkID0gbmV3IFRpbWVsaW5lTGl0ZSgpO1xuICAgICAgICB0bEhlYWQuZnJvbVRvKCRoZWFkLCAwLjMsXG4gICAgICAgIHthdXRvQWxwaGE6IDF9LFxuICAgICAgICB7YXV0b0FscGhhOiAwfVxuICAgICAgICApO1xuXG4gICAgICAgIC8vIFNWRyBpbWcgc2l6ZSAoYmVnaW4gZnJvbSBwYXJ0MXRpbWUpXG4gICAgICAgIGxldCB0bExvZ29TaXplID0gbmV3IFRpbWVsaW5lTGl0ZSgpO1xuICAgICAgICB0bExvZ29TaXplLmFkZChUd2Vlbk1heC50bygkbG9nbywgcGFydDF0aW1lLFxuICAgICAgICB7YXR0cjoge3ZpZXdCb3g6ICcwIDAgMjE5IDQyJ30sIHdpZHRoOiAyMTksIGhlaWdodDogNDJ9XG4gICAgICAgICksIHBhcnQxdGltZSk7XG5cbiAgICAgICAgLy8gRXllLXB1cGlsXG4gICAgICAgIGxldCB0bEV5ZVB1cGlsID0gbmV3IFRpbWVsaW5lTGl0ZSgpO1xuICAgICAgICB0bEV5ZVB1cGlsLmFkZChUd2Vlbk1heC50bygkZXllUHVwaWwsIHBhcnQxdGltZSxcbiAgICAgICAge2F1dG9BbHBoYTogMX1cbiAgICAgICAgKSwgcGFydDF0aW1lKTtcblxuICAgICAgICAvLyBUZXh0IGFkbWlub2lkXG4gICAgICAgIGxldCB0bFRleHRBZG1pbm9pZCA9IG5ldyBUaW1lbGluZUxpdGUoKTtcbiAgICAgICAgdGxUZXh0QWRtaW5vaWQuYWRkKFR3ZWVuTWF4LmZyb21UbygkdGV4dEFkbWlub2lkLCBwYXJ0MXRpbWUgKyBwYXJ0MnRpbWUsXG4gICAgICAgIHt4OiAwLCB5OiAyNH0sXG4gICAgICAgIHt4OiAtNTAsIHk6IDd9XG4gICAgICAgICkpO1xuXG4gICAgICAgIC8vIFRleHQgd2VibWFzdGVyIHRleHRzV2VibWFzdGVyXG4gICAgICAgIGxldCB0bFRleHRXZWJtYXN0ZXIgPSBuZXcgVGltZWxpbmVMaXRlKCk7XG4gICAgICAgIHRsVGV4dFdlYm1hc3Rlci5hZGQoXG4gICAgICAgIFR3ZWVuTWF4LnN0YWdnZXJGcm9tVG8obGV0dGVyc1dlYm1hc3Rlci5yZXZlcnNlKCksICgwLjEpLFxuICAgICAgICB7YXV0b0FscGhhOiAxLCByb3RhdGVYOiAwfSxcbiAgICAgICAge2F1dG9BbHBoYTogMCwgcm90YXRlWDogMTB9LFxuICAgICAgICAwLjA1XG4gICAgICAgIClcbiAgICAgICAgKTtcblxuICAgICAgICAvLyBXZWJtYXN0ZXIgV3JhcHBlclxuICAgICAgICBsZXQgdGxUZXh0V2VibWFzdGVyV3JhcHBlciA9IG5ldyBUaW1lbGluZUxpdGUoKTtcbiAgICAgICAgdGxUZXh0V2VibWFzdGVyV3JhcHBlci5hZGQoVHdlZW5NYXguZnJvbVRvKHRleHRzV2VibWFzdGVyV3JhcHBlciwgMC41LFxuICAgICAgICB7YXV0b0FscGhhOiAxfSxcbiAgICAgICAge2F1dG9BbHBoYTogMH1cbiAgICAgICAgKSwgMC4yKTtcblxuICAgICAgICAvLyBUb3BNZW51IGhlaWdodCByZWR1Y3Rpb24vaW5jcmVhc2VcbiAgICAgICAgbGV0IHRsVG9wTWVudSA9IG5ldyBUaW1lbGluZUxpdGUoKTtcbiAgICAgICAgdGxUb3BNZW51LmFkZChUd2Vlbk1heC5zdGFnZ2VyRnJvbVRvKHRvcE1lbnVJdGVtc0ZvclJlc2l6aW5nLCBwYXJ0MXRpbWUsXG4gICAgICAgIHtoZWlnaHQ6ICc0LjY2NjY3cmVtJywgb3BhY2l0eTogMX0sXG4gICAgICAgIHtoZWlnaHQ6ICczLjY2NjY3cmVtJywgb3BhY2l0eTogMC45M30sXG4gICAgICAgIDBcbiAgICAgICAgKSwgcGFydDF0aW1lKTtcblxuICAgICAgICAvLyBDb25jbHVzaW9uXG4gICAgICAgIGxldCB0aW1lbGluZSA9IG5ldyBUaW1lbGluZUxpdGUoe3BhdXNlZDogdHJ1ZX0pO1xuICAgICAgICB0aW1lbGluZS5wYXVzZSgpO1xuICAgICAgICB0aW1lbGluZS5hZGQodGxIYW5kcywgMCk7XG4gICAgICAgIHRpbWVsaW5lLmFkZCh0bEJvZHksIDApO1xuICAgICAgICB0aW1lbGluZS5hZGQodGxIZWFkLCAwKTtcbiAgICAgICAgdGltZWxpbmUuYWRkKHRsTG9nb1NpemUsIDApO1xuICAgICAgICB0aW1lbGluZS5hZGQodGxFeWVQdXBpbCwgMCk7XG4gICAgICAgIHRpbWVsaW5lLmFkZCh0bFRleHRBZG1pbm9pZCwgMCk7XG4gICAgICAgIHRpbWVsaW5lLmFkZCh0bFRleHRXZWJtYXN0ZXIsIDApO1xuICAgICAgICB0aW1lbGluZS5hZGQodGxUZXh0V2VibWFzdGVyV3JhcHBlciwgMCk7XG4gICAgICAgIHRpbWVsaW5lLmFkZCh0bFRvcE1lbnUsIDApO1xuICAgICAgICByZXR1cm4gdGltZWxpbmU7XG4gICAgICB9XG4gICAgfVxuICB9XG48L3NjcmlwdD5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyByZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvVG9wTWVudS52dWUiLCIvKiBnbG9iYWxzIF9fVlVFX1NTUl9DT05URVhUX18gKi9cblxuLy8gSU1QT1JUQU5UOiBEbyBOT1QgdXNlIEVTMjAxNSBmZWF0dXJlcyBpbiB0aGlzIGZpbGUuXG4vLyBUaGlzIG1vZHVsZSBpcyBhIHJ1bnRpbWUgdXRpbGl0eSBmb3IgY2xlYW5lciBjb21wb25lbnQgbW9kdWxlIG91dHB1dCBhbmQgd2lsbFxuLy8gYmUgaW5jbHVkZWQgaW4gdGhlIGZpbmFsIHdlYnBhY2sgdXNlciBidW5kbGUuXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gbm9ybWFsaXplQ29tcG9uZW50IChcbiAgcmF3U2NyaXB0RXhwb3J0cyxcbiAgY29tcGlsZWRUZW1wbGF0ZSxcbiAgZnVuY3Rpb25hbFRlbXBsYXRlLFxuICBpbmplY3RTdHlsZXMsXG4gIHNjb3BlSWQsXG4gIG1vZHVsZUlkZW50aWZpZXIgLyogc2VydmVyIG9ubHkgKi9cbikge1xuICB2YXIgZXNNb2R1bGVcbiAgdmFyIHNjcmlwdEV4cG9ydHMgPSByYXdTY3JpcHRFeHBvcnRzID0gcmF3U2NyaXB0RXhwb3J0cyB8fCB7fVxuXG4gIC8vIEVTNiBtb2R1bGVzIGludGVyb3BcbiAgdmFyIHR5cGUgPSB0eXBlb2YgcmF3U2NyaXB0RXhwb3J0cy5kZWZhdWx0XG4gIGlmICh0eXBlID09PSAnb2JqZWN0JyB8fCB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgZXNNb2R1bGUgPSByYXdTY3JpcHRFeHBvcnRzXG4gICAgc2NyaXB0RXhwb3J0cyA9IHJhd1NjcmlwdEV4cG9ydHMuZGVmYXVsdFxuICB9XG5cbiAgLy8gVnVlLmV4dGVuZCBjb25zdHJ1Y3RvciBleHBvcnQgaW50ZXJvcFxuICB2YXIgb3B0aW9ucyA9IHR5cGVvZiBzY3JpcHRFeHBvcnRzID09PSAnZnVuY3Rpb24nXG4gICAgPyBzY3JpcHRFeHBvcnRzLm9wdGlvbnNcbiAgICA6IHNjcmlwdEV4cG9ydHNcblxuICAvLyByZW5kZXIgZnVuY3Rpb25zXG4gIGlmIChjb21waWxlZFRlbXBsYXRlKSB7XG4gICAgb3B0aW9ucy5yZW5kZXIgPSBjb21waWxlZFRlbXBsYXRlLnJlbmRlclxuICAgIG9wdGlvbnMuc3RhdGljUmVuZGVyRm5zID0gY29tcGlsZWRUZW1wbGF0ZS5zdGF0aWNSZW5kZXJGbnNcbiAgICBvcHRpb25zLl9jb21waWxlZCA9IHRydWVcbiAgfVxuXG4gIC8vIGZ1bmN0aW9uYWwgdGVtcGxhdGVcbiAgaWYgKGZ1bmN0aW9uYWxUZW1wbGF0ZSkge1xuICAgIG9wdGlvbnMuZnVuY3Rpb25hbCA9IHRydWVcbiAgfVxuXG4gIC8vIHNjb3BlZElkXG4gIGlmIChzY29wZUlkKSB7XG4gICAgb3B0aW9ucy5fc2NvcGVJZCA9IHNjb3BlSWRcbiAgfVxuXG4gIHZhciBob29rXG4gIGlmIChtb2R1bGVJZGVudGlmaWVyKSB7IC8vIHNlcnZlciBidWlsZFxuICAgIGhvb2sgPSBmdW5jdGlvbiAoY29udGV4dCkge1xuICAgICAgLy8gMi4zIGluamVjdGlvblxuICAgICAgY29udGV4dCA9XG4gICAgICAgIGNvbnRleHQgfHwgLy8gY2FjaGVkIGNhbGxcbiAgICAgICAgKHRoaXMuJHZub2RlICYmIHRoaXMuJHZub2RlLnNzckNvbnRleHQpIHx8IC8vIHN0YXRlZnVsXG4gICAgICAgICh0aGlzLnBhcmVudCAmJiB0aGlzLnBhcmVudC4kdm5vZGUgJiYgdGhpcy5wYXJlbnQuJHZub2RlLnNzckNvbnRleHQpIC8vIGZ1bmN0aW9uYWxcbiAgICAgIC8vIDIuMiB3aXRoIHJ1bkluTmV3Q29udGV4dDogdHJ1ZVxuICAgICAgaWYgKCFjb250ZXh0ICYmIHR5cGVvZiBfX1ZVRV9TU1JfQ09OVEVYVF9fICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb250ZXh0ID0gX19WVUVfU1NSX0NPTlRFWFRfX1xuICAgICAgfVxuICAgICAgLy8gaW5qZWN0IGNvbXBvbmVudCBzdHlsZXNcbiAgICAgIGlmIChpbmplY3RTdHlsZXMpIHtcbiAgICAgICAgaW5qZWN0U3R5bGVzLmNhbGwodGhpcywgY29udGV4dClcbiAgICAgIH1cbiAgICAgIC8vIHJlZ2lzdGVyIGNvbXBvbmVudCBtb2R1bGUgaWRlbnRpZmllciBmb3IgYXN5bmMgY2h1bmsgaW5mZXJyZW5jZVxuICAgICAgaWYgKGNvbnRleHQgJiYgY29udGV4dC5fcmVnaXN0ZXJlZENvbXBvbmVudHMpIHtcbiAgICAgICAgY29udGV4dC5fcmVnaXN0ZXJlZENvbXBvbmVudHMuYWRkKG1vZHVsZUlkZW50aWZpZXIpXG4gICAgICB9XG4gICAgfVxuICAgIC8vIHVzZWQgYnkgc3NyIGluIGNhc2UgY29tcG9uZW50IGlzIGNhY2hlZCBhbmQgYmVmb3JlQ3JlYXRlXG4gICAgLy8gbmV2ZXIgZ2V0cyBjYWxsZWRcbiAgICBvcHRpb25zLl9zc3JSZWdpc3RlciA9IGhvb2tcbiAgfSBlbHNlIGlmIChpbmplY3RTdHlsZXMpIHtcbiAgICBob29rID0gaW5qZWN0U3R5bGVzXG4gIH1cblxuICBpZiAoaG9vaykge1xuICAgIHZhciBmdW5jdGlvbmFsID0gb3B0aW9ucy5mdW5jdGlvbmFsXG4gICAgdmFyIGV4aXN0aW5nID0gZnVuY3Rpb25hbFxuICAgICAgPyBvcHRpb25zLnJlbmRlclxuICAgICAgOiBvcHRpb25zLmJlZm9yZUNyZWF0ZVxuXG4gICAgaWYgKCFmdW5jdGlvbmFsKSB7XG4gICAgICAvLyBpbmplY3QgY29tcG9uZW50IHJlZ2lzdHJhdGlvbiBhcyBiZWZvcmVDcmVhdGUgaG9va1xuICAgICAgb3B0aW9ucy5iZWZvcmVDcmVhdGUgPSBleGlzdGluZ1xuICAgICAgICA/IFtdLmNvbmNhdChleGlzdGluZywgaG9vaylcbiAgICAgICAgOiBbaG9va11cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gZm9yIHRlbXBsYXRlLW9ubHkgaG90LXJlbG9hZCBiZWNhdXNlIGluIHRoYXQgY2FzZSB0aGUgcmVuZGVyIGZuIGRvZXNuJ3RcbiAgICAgIC8vIGdvIHRocm91Z2ggdGhlIG5vcm1hbGl6ZXJcbiAgICAgIG9wdGlvbnMuX2luamVjdFN0eWxlcyA9IGhvb2tcbiAgICAgIC8vIHJlZ2lzdGVyIGZvciBmdW5jdGlvYWwgY29tcG9uZW50IGluIHZ1ZSBmaWxlXG4gICAgICBvcHRpb25zLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcldpdGhTdHlsZUluamVjdGlvbiAoaCwgY29udGV4dCkge1xuICAgICAgICBob29rLmNhbGwoY29udGV4dClcbiAgICAgICAgcmV0dXJuIGV4aXN0aW5nKGgsIGNvbnRleHQpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBlc01vZHVsZTogZXNNb2R1bGUsXG4gICAgZXhwb3J0czogc2NyaXB0RXhwb3J0cyxcbiAgICBvcHRpb25zOiBvcHRpb25zXG4gIH1cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyLmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplci5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDciLCJcbi8qKlxuICogRmlyc3Qgd2Ugd2lsbCBsb2FkIGFsbCBvZiB0aGlzIHByb2plY3QncyBKYXZhU2NyaXB0IGRlcGVuZGVuY2llcyB3aGljaFxuICogaW5jbHVkZXMgVnVlIGFuZCBvdGhlciBsaWJyYXJpZXMuIEl0IGlzIGEgZ3JlYXQgc3RhcnRpbmcgcG9pbnQgd2hlblxuICogYnVpbGRpbmcgcm9idXN0LCBwb3dlcmZ1bCB3ZWIgYXBwbGljYXRpb25zIHVzaW5nIFZ1ZSBhbmQgTGFyYXZlbC5cbiAqL1xuXG5yZXF1aXJlKCcuL2Jvb3RzdHJhcCcpO1xuXG53aW5kb3cuVnVlID0gcmVxdWlyZSgndnVlJyk7XG5cbi8qKlxuICogTmV4dCwgd2Ugd2lsbCBjcmVhdGUgYSBmcmVzaCBWdWUgYXBwbGljYXRpb24gaW5zdGFuY2UgYW5kIGF0dGFjaCBpdCB0b1xuICogdGhlIHBhZ2UuIFRoZW4sIHlvdSBtYXkgYmVnaW4gYWRkaW5nIGNvbXBvbmVudHMgdG8gdGhpcyBhcHBsaWNhdGlvblxuICogb3IgY3VzdG9taXplIHRoZSBKYXZhU2NyaXB0IHNjYWZmb2xkaW5nIHRvIGZpdCB5b3VyIHVuaXF1ZSBuZWVkcy5cbiAqL1xuXG5pbXBvcnQgVG9wTWVudSBmcm9tICcuL2NvbXBvbmVudHMvVG9wTWVudSdcbmltcG9ydCBGZWVkYmFja0Zvcm0gZnJvbSAnLi9jb21wb25lbnRzL0ZlZWRiYWNrRm9ybSdcblxuVnVlLmNvbXBvbmVudChcImNsb3Vkc1wiLCBmdW5jdGlvbiAocmVzb2x2ZSkge1xuICByZXF1aXJlKFsnLi9jb21wb25lbnRzL3BhZ2VzL2luZGV4L0Nsb3VkcyddLCByZXNvbHZlKVxufSlcblxuVnVlLmNvbXBvbmVudChcImN1YmVcIiwgZnVuY3Rpb24gKHJlc29sdmUpIHtcbiAgcmVxdWlyZShbJy4vY29tcG9uZW50cy9wYWdlcy9pbmRleC9DdWJlJ10sIHJlc29sdmUpXG59KVxuXG5WdWUuY29tcG9uZW50KFwiY2xvY2tcIiwgZnVuY3Rpb24gKHJlc29sdmUpIHtcbiAgcmVxdWlyZShbJy4vY29tcG9uZW50cy9wYWdlcy9wcmljZS9DbG9jay52dWUnXSwgcmVzb2x2ZSlcbn0pXG5cblZ1ZS5jb21wb25lbnQoXCJ0b29scy1ibG9ja1wiLCBmdW5jdGlvbiAocmVzb2x2ZSkge1xuICByZXF1aXJlKFsnLi9jb21wb25lbnRzL3BhZ2VzL3Rvb2xzL1Rvb2xzQmxvY2sudnVlJ10sIHJlc29sdmUpXG59KVxuXG5WdWUuY29tcG9uZW50KFwiem9vbVwiLCBmdW5jdGlvbiAocmVzb2x2ZSkge1xuICByZXF1aXJlKFsnLi9jb21wb25lbnRzL3BhZ2VzL3BvcnRmb2xpby9ab29tLnZ1ZSddLCByZXNvbHZlKVxufSlcblxuVnVlLmNvbXBvbmVudChcImhhbGYtcm90YXRlXCIsIGZ1bmN0aW9uIChyZXNvbHZlKSB7XG4gIHJlcXVpcmUoWycuL2NvbXBvbmVudHMvcGFnZXMvd29ya2Zsb3cvSGFsZlJvdGF0ZS52dWUnXSwgcmVzb2x2ZSlcbn0pXG5cbmNvbnN0IGFwcCA9IG5ldyBWdWUoe1xuICBlbDogJyNhcHAnLFxuICBjb21wb25lbnRzOiB7XG4gICAgVG9wTWVudSwgRmVlZGJhY2tGb3JtXG4gIH1cbn0pXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2FwcC5qcyIsIlxud2luZG93Ll8gPSByZXF1aXJlKCdsb2Rhc2gnKTtcblxuLyoqXG4gKiBXZSdsbCBsb2FkIGpRdWVyeSBhbmQgdGhlIEJvb3RzdHJhcCBqUXVlcnkgcGx1Z2luIHdoaWNoIHByb3ZpZGVzIHN1cHBvcnRcbiAqIGZvciBKYXZhU2NyaXB0IGJhc2VkIEJvb3RzdHJhcCBmZWF0dXJlcyBzdWNoIGFzIG1vZGFscyBhbmQgdGFicy4gVGhpc1xuICogY29kZSBtYXkgYmUgbW9kaWZpZWQgdG8gZml0IHRoZSBzcGVjaWZpYyBuZWVkcyBvZiB5b3VyIGFwcGxpY2F0aW9uLlxuICovXG5cbnRyeSB7XG4gICAgd2luZG93LiQgPSB3aW5kb3cualF1ZXJ5ID0gcmVxdWlyZSgnanF1ZXJ5Jyk7XG5cbiAgICAvLyByZXF1aXJlKCdib290c3RyYXAtc2FzcycpO1xufSBjYXRjaCAoZSkge31cblxuLyoqXG4gKiBXZSdsbCBsb2FkIHRoZSBheGlvcyBIVFRQIGxpYnJhcnkgd2hpY2ggYWxsb3dzIHVzIHRvIGVhc2lseSBpc3N1ZSByZXF1ZXN0c1xuICogdG8gb3VyIExhcmF2ZWwgYmFjay1lbmQuIFRoaXMgbGlicmFyeSBhdXRvbWF0aWNhbGx5IGhhbmRsZXMgc2VuZGluZyB0aGVcbiAqIENTUkYgdG9rZW4gYXMgYSBoZWFkZXIgYmFzZWQgb24gdGhlIHZhbHVlIG9mIHRoZSBcIlhTUkZcIiB0b2tlbiBjb29raWUuXG4gKi9cblxud2luZG93LmF4aW9zID0gcmVxdWlyZSgnYXhpb3MnKTtcblxud2luZG93LmF4aW9zLmRlZmF1bHRzLmhlYWRlcnMuY29tbW9uWydYLVJlcXVlc3RlZC1XaXRoJ10gPSAnWE1MSHR0cFJlcXVlc3QnO1xuXG4vKipcbiAqIE5leHQgd2Ugd2lsbCByZWdpc3RlciB0aGUgQ1NSRiBUb2tlbiBhcyBhIGNvbW1vbiBoZWFkZXIgd2l0aCBBeGlvcyBzbyB0aGF0XG4gKiBhbGwgb3V0Z29pbmcgSFRUUCByZXF1ZXN0cyBhdXRvbWF0aWNhbGx5IGhhdmUgaXQgYXR0YWNoZWQuIFRoaXMgaXMganVzdFxuICogYSBzaW1wbGUgY29udmVuaWVuY2Ugc28gd2UgZG9uJ3QgaGF2ZSB0byBhdHRhY2ggZXZlcnkgdG9rZW4gbWFudWFsbHkuXG4gKi9cblxubGV0IHRva2VuID0gZG9jdW1lbnQuaGVhZC5xdWVyeVNlbGVjdG9yKCdtZXRhW25hbWU9XCJjc3JmLXRva2VuXCJdJyk7XG5cbmlmICh0b2tlbikge1xuICAgIHdpbmRvdy5heGlvcy5kZWZhdWx0cy5oZWFkZXJzLmNvbW1vblsnWC1DU1JGLVRPS0VOJ10gPSB0b2tlbi5jb250ZW50O1xufSBlbHNlIHtcbiAgICBjb25zb2xlLmVycm9yKCdDU1JGIHRva2VuIG5vdCBmb3VuZDogaHR0cHM6Ly9sYXJhdmVsLmNvbS9kb2NzL2NzcmYjY3NyZi14LWNzcmYtdG9rZW4nKTtcbn1cblxuLyoqXG4gKiBFY2hvIGV4cG9zZXMgYW4gZXhwcmVzc2l2ZSBBUEkgZm9yIHN1YnNjcmliaW5nIHRvIGNoYW5uZWxzIGFuZCBsaXN0ZW5pbmdcbiAqIGZvciBldmVudHMgdGhhdCBhcmUgYnJvYWRjYXN0IGJ5IExhcmF2ZWwuIEVjaG8gYW5kIGV2ZW50IGJyb2FkY2FzdGluZ1xuICogYWxsb3dzIHlvdXIgdGVhbSB0byBlYXNpbHkgYnVpbGQgcm9idXN0IHJlYWwtdGltZSB3ZWIgYXBwbGljYXRpb25zLlxuICovXG5cbi8vIGltcG9ydCBFY2hvIGZyb20gJ2xhcmF2ZWwtZWNobydcblxuLy8gd2luZG93LlB1c2hlciA9IHJlcXVpcmUoJ3B1c2hlci1qcycpO1xuXG4vLyB3aW5kb3cuRWNobyA9IG5ldyBFY2hvKHtcbi8vICAgICBicm9hZGNhc3RlcjogJ3B1c2hlcicsXG4vLyAgICAga2V5OiAneW91ci1wdXNoZXIta2V5J1xuLy8gfSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Jvb3RzdHJhcC5qcyIsInZhciBkaXNwb3NlZCA9IGZhbHNlXG52YXIgbm9ybWFsaXplQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIilcbi8qIHNjcmlwdCAqL1xudmFyIF9fdnVlX3NjcmlwdF9fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVudlxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZSxcXFwidGFyZ2V0c1xcXCI6e1xcXCJicm93c2Vyc1xcXCI6W1xcXCI+IDIlXFxcIl0sXFxcInVnbGlmeVxcXCI6dHJ1ZX19XV0sXFxcInBsdWdpbnNcXFwiOltcXFwidHJhbnNmb3JtLW9iamVjdC1yZXN0LXNwcmVhZFxcXCIsW1xcXCJ0cmFuc2Zvcm0tcnVudGltZVxcXCIse1xcXCJwb2x5ZmlsbFxcXCI6ZmFsc2UsXFxcImhlbHBlcnNcXFwiOmZhbHNlfV1dfSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL0ZlZWRiYWNrRm9ybS52dWVcIilcbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfdGVtcGxhdGVfXyA9IG51bGxcbi8qIHRlbXBsYXRlIGZ1bmN0aW9uYWwgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18gPSBmYWxzZVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBudWxsXG4vKiBzY29wZUlkICovXG52YXIgX192dWVfc2NvcGVJZF9fID0gbnVsbFxuLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG52YXIgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfXyA9IG51bGxcbnZhciBDb21wb25lbnQgPSBub3JtYWxpemVDb21wb25lbnQoXG4gIF9fdnVlX3NjcmlwdF9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18sXG4gIF9fdnVlX3N0eWxlc19fLFxuICBfX3Z1ZV9zY29wZUlkX18sXG4gIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX19cbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL0ZlZWRiYWNrRm9ybS52dWVcIlxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWxvYWRlci9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtZTFkZGQxYzBcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi1lMWRkZDFjMFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBkaXNwb3NlZCA9IHRydWVcbiAgfSlcbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL0ZlZWRiYWNrRm9ybS52dWVcbi8vIG1vZHVsZSBpZCA9IC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL0ZlZWRiYWNrRm9ybS52dWVcbi8vIG1vZHVsZSBjaHVua3MgPSA3IiwidmFyIGRpc3Bvc2VkID0gZmFsc2VcbnZhciBub3JtYWxpemVDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKVxuLyogc2NyaXB0ICovXG52YXIgX192dWVfc2NyaXB0X18gPSByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZW52XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlLFxcXCJ0YXJnZXRzXFxcIjp7XFxcImJyb3dzZXJzXFxcIjpbXFxcIj4gMiVcXFwiXSxcXFwidWdsaWZ5XFxcIjp0cnVlfX1dXSxcXFwicGx1Z2luc1xcXCI6W1xcXCJ0cmFuc2Zvcm0tb2JqZWN0LXJlc3Qtc3ByZWFkXFxcIixbXFxcInRyYW5zZm9ybS1ydW50aW1lXFxcIix7XFxcInBvbHlmaWxsXFxcIjpmYWxzZSxcXFwiaGVscGVyc1xcXCI6ZmFsc2V9XV19IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vVG9wTWVudS52dWVcIilcbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfdGVtcGxhdGVfXyA9IG51bGxcbi8qIHRlbXBsYXRlIGZ1bmN0aW9uYWwgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18gPSBmYWxzZVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBudWxsXG4vKiBzY29wZUlkICovXG52YXIgX192dWVfc2NvcGVJZF9fID0gbnVsbFxuLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG52YXIgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfXyA9IG51bGxcbnZhciBDb21wb25lbnQgPSBub3JtYWxpemVDb21wb25lbnQoXG4gIF9fdnVlX3NjcmlwdF9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18sXG4gIF9fdnVlX3N0eWxlc19fLFxuICBfX3Z1ZV9zY29wZUlkX18sXG4gIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX19cbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL1RvcE1lbnUudnVlXCJcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1sb2FkZXIvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTYyOGQ2YTZkXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtNjI4ZDZhNmRcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgZGlzcG9zZWQgPSB0cnVlXG4gIH0pXG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9Ub3BNZW51LnZ1ZVxuLy8gbW9kdWxlIGlkID0gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvVG9wTWVudS52dWVcbi8vIG1vZHVsZSBjaHVua3MgPSA3Il0sInNvdXJjZVJvb3QiOiIifQ==