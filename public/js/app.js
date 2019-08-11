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
        //      this.timeline.reverse(0)
        this.$eye = $(this.$el).find(this.selectors.eye);
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

            var eyeCenter = [this.$eye.offset().left + this.$eye.width() / 2, this.$eye.offset().top + this.$eye.height() / 2];
            var eyeAngle = Math.atan2(e.pageX - eyeCenter[0], -(e.pageY - eyeCenter[1])) * (180 / Math.PI) - 90;
            this.eyeTransformWithAngle = 'translate(13.000000, 36.000000) rotate(' + eyeAngle + ') translate(-13.000000, -36.000000) translate(8.000000, 31.000000)';
        },
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
            //                tlLeftHand.pause()
            // Hands (waving)
            tlLeftHand.add(__WEBPACK_IMPORTED_MODULE_0_gsap__["TweenMax"].fromTo($leftHand, 0.08, {
                rotation: 0
            }, {
                rotation: 35,
                transformOrigin: '90% 100%'
            })).add(__WEBPACK_IMPORTED_MODULE_0_gsap__["TweenMax"].to($leftHand, 0.08, { rotation: -50, transformOrigin: '90% 100%' })).add(__WEBPACK_IMPORTED_MODULE_0_gsap__["TweenMax"].to($leftHand, 0.08, { rotation: 35, transformOrigin: '90% 100%' })).add(__WEBPACK_IMPORTED_MODULE_0_gsap__["TweenMax"].to($leftHand, 0.08, { rotation: -50, transformOrigin: '90% 100%' })).add(__WEBPACK_IMPORTED_MODULE_0_gsap__["TweenMax"].to($leftHand, 0.08, { rotation: 35, transformOrigin: '90% 100%' })).add(__WEBPACK_IMPORTED_MODULE_0_gsap__["TweenMax"].to($leftHand, 0.08, { rotation: -50, transformOrigin: '90% 100%' })).add(__WEBPACK_IMPORTED_MODULE_0_gsap__["TweenMax"].to($leftHand, 0.10, { rotation: 35, transformOrigin: '90% 100%' })).add(__WEBPACK_IMPORTED_MODULE_0_gsap__["TweenMax"].to($leftHand, 0.15, { rotation: -75, transformOrigin: '90% 100%' }));

            var tlRightHand = new __WEBPACK_IMPORTED_MODULE_0_gsap__["TimelineLite"]();
            //                tlRightHand.pause()
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
            //                tlHands.pause()
            tlHands.add(tlLeftHand, 0);
            tlHands.add(tlRightHand, 0);
            //                return tlHands

            // Body, part 1
            var tlBody = new __WEBPACK_IMPORTED_MODULE_0_gsap__["TimelineLite"]();
            //                tlBody.pause()
            // let part1time = 0.2, part2time = 0.5,
            //                tlRightHand.add(TweenMax.to($rightHand, 0.08, {rotation: 50, transformOrigin: '10% 100%'}))
            //                tlRightHand.add(TweenMax.to($rightHand, 0.08, {rotation: -35, transformOrigin: '10% 100%'}))
            tlBody.add(__WEBPACK_IMPORTED_MODULE_0_gsap__["TweenMax"].to($manBody, 0.2, { y: 0, x: 0, rotation: 0 }, { y: -10, x: 20, rotation: 35, transformOrigin: '50% 50%' }))
            // Body, part 2
            .add(__WEBPACK_IMPORTED_MODULE_0_gsap__["TweenMax"].to($manBody, 0.5, { y: -5, x: 180, rotation: 90, transformOrigin: '50% 50%' }));

            //                return tlBody
            // Head
            var tlHead = new __WEBPACK_IMPORTED_MODULE_0_gsap__["TimelineLite"]();
            tlHead.fromTo($head, 0.3, { autoAlpha: 1 }, { autoAlpha: 0 });
            // SVG img size (begin from part1time)
            var tlLogoSize = new __WEBPACK_IMPORTED_MODULE_0_gsap__["TimelineLite"]();
            //                tlLogoSize.pause()
            tlLogoSize.add(__WEBPACK_IMPORTED_MODULE_0_gsap__["TweenMax"].to($logo, part1time, { attr: { viewBox: '0 0 219 42' }, width: 219, height: 42 }), part1time);
            // Eye-pupil
            var tlEyePupil = new __WEBPACK_IMPORTED_MODULE_0_gsap__["TimelineLite"]();
            tlEyePupil.add(__WEBPACK_IMPORTED_MODULE_0_gsap__["TweenMax"].to($eyePupil, part1time,
            //                        {autoAlpha: 0},
            { autoAlpha: 1 }), part1time);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL0ZlZWRiYWNrRm9ybS52dWUiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9Ub3BNZW51LnZ1ZSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9ib290c3RyYXAuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL0ZlZWRiYWNrRm9ybS52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL1RvcE1lbnUudnVlIl0sIm5hbWVzIjpbInJlcXVpcmUiLCJ3aW5kb3ciLCJWdWUiLCJjb21wb25lbnQiLCJyZXNvbHZlIiwiYXBwIiwiZWwiLCJjb21wb25lbnRzIiwiVG9wTWVudSIsIkZlZWRiYWNrRm9ybSIsIl8iLCIkIiwialF1ZXJ5IiwiZSIsImF4aW9zIiwiZGVmYXVsdHMiLCJoZWFkZXJzIiwiY29tbW9uIiwidG9rZW4iLCJkb2N1bWVudCIsImhlYWQiLCJxdWVyeVNlbGVjdG9yIiwiY29udGVudCIsImNvbnNvbGUiLCJlcnJvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNBOztJQUNBLE07QUFDQTtBQUFBOztBQUNBO0FBQ0E7Ozs7NEJBQ0EsSyxFQUFBO0FBQ0E7QUFDQTs7OzhCQUNBO0FBQ0E7QUFDQTs7OzRCQUNBLEssRUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7K0JBQ0EsTSxFQUFBO0FBQ0E7QUFDQTs7OzhCQUNBLEssRUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0lBR0EsSTtBQUNBO0FBQUE7O0FBQ0E7QUFDQTtBQUNB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QUFyQyxJQUF1REMsTUFBTUksT0FBN0Q7QUFDSCxDQUZELE1BRU87QUFDSEMsVUFBUUMsS0FBUixDQUFjLHVFQUFkO0FBQ0g7O0FBRUQ7Ozs7OztBQU1BOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE07Ozs7Ozs7QUNwREE7QUFDQTtBQUNBO0FBQ0EsNmFBQXNSO0FBQ3RSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7O0FBRUQ7Ozs7Ozs7O0FDeENBO0FBQ0E7QUFDQTtBQUNBLHdhQUFzUjtBQUN0UjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDOztBQUVEIiwiZmlsZSI6Ii9qcy9hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8c2NyaXB0PlxuICAgIGltcG9ydCBheGlvcyBmcm9tICdheGlvcydcbiAgICBjbGFzcyBFcnJvcnMge1xuICAgICAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgICAgIHRoaXMuZXJyb3JzID0ge31cbiAgICAgICAgfVxuICAgICAgICBoYXMoZmllbGQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmVycm9ycy5oYXNPd25Qcm9wZXJ0eShmaWVsZClcbiAgICAgICAgfVxuICAgICAgICBhbnkoKSB7XG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0LmtleXModGhpcy5lcnJvcnMpLmxlbmd0aCA+IDBcbiAgICAgICAgfVxuICAgICAgICBnZXQoZmllbGQpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmVycm9yc1tmaWVsZF0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5lcnJvcnNbZmllbGRdWzBdXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmVjb3JkKGVycm9ycykge1xuICAgICAgICAgICAgdGhpcy5lcnJvcnMgPSBlcnJvcnNcbiAgICAgICAgfVxuICAgICAgICBjbGVhcihmaWVsZCkge1xuICAgICAgICAgICAgaWYgKGZpZWxkKSB7XG4gICAgICAgICAgICAgICAgZGVsZXRlIHRoaXMuZXJyb3JzW2ZpZWxkXVxuICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5lcnJvcnMgPSB7fVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2xhc3MgRm9ybSB7XG4gICAgICAgIGNvbnN0cnVjdG9yKGRhdGEpIHtcbiAgICAgICAgICAgIHRoaXMub3JpZ2luYWxEYXRhID0gZGF0YTtcbiAgICAgICAgICAgIGZvciAobGV0IGZpZWxkIGluIGRhdGEpIHtcbiAgICAgICAgICAgICAgICB0aGlzW2ZpZWxkXSA9IGRhdGFbZmllbGRdXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmVycm9ycyA9IG5ldyBFcnJvcnMoKVxuICAgICAgICAgICAgdGhpcy5zdWNjZXNzID0gZmFsc2VcbiAgICAgICAgfVxuICAgICAgICBkYXRhKCkge1xuICAgICAgICAgICAgbGV0IGRhdGEgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzKVxuICAgICAgICAgICAgZGVsZXRlIGRhdGEub3JpZ2luYWxEYXRhXG4gICAgICAgICAgICBkZWxldGUgZGF0YS5lcnJvcnNcbiAgICAgICAgICAgIHJldHVybiBkYXRhXG4gICAgICAgIH1cbiAgICAgICAgcmVzZXQoKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBmaWVsZCBpbiB0aGlzLm9yaWdpbmFsRGF0YSkge1xuICAgICAgICAgICAgICAgIHRoaXNbZmllbGRdID0gJydcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuZXJyb3JzLmNsZWFyKClcbiAgICAgICAgfVxuICAgICAgICBzdWJtaXQocmVxdWVzdFR5cGUsIHVybCkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgICAgICBheGlvc1tyZXF1ZXN0VHlwZV0odXJsLCB0aGlzLmRhdGEoKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9uU3VjY2VzcyhyZXNwb25zZS5kYXRhKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzcG9uc2UuZGF0YSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub25GYWlsKGVycm9yLnJlc3BvbnNlLmRhdGEpXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyb3IucmVzcG9uc2UuZGF0YSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIG9uU3VjY2VzcyhkYXRhKSB7XG4gICAgICAgICAgICB0aGlzLnJlc2V0KClcbiAgICAgICAgICAgIHRoaXMubWVzc2FnZSA9IGRhdGEubWVzc2FnZVxuICAgICAgICAgICAgdGhpcy5zdWNjZXNzID0gdHJ1ZVxuICAgICAgICB9XG4gICAgICAgIG9uRmFpbChlcnJvcnMpIHtcbiAgICAgICAgICAgIHRoaXMuZXJyb3JzLnJlY29yZChlcnJvcnMpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIGRhdGEgKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBmb3JtOiBuZXcgRm9ybSh7XG4gICAgICAgICAgICAgICAgICAgIGVtYWlsOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJycsXG4gICAgICAgICAgICAgICAgICAgIC8vIGZpcnN0X25hbWU6ICcnLFxuICAgICAgICAgICAgICAgICAgICAvLyBsYXN0X25hbWU6ICcnLFxuICAgICAgICAgICAgICAgICAgICAvLyBwaG9uZTogJycsXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAgb25TdWJtaXQoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5mb3JtLnN1Ym1pdCgncG9zdCcsICcvZmVlZGJhY2stbWVzc2FnZXMnKVxuLy8gICAgICAgICAgICAgICAgICAgICAgICAudGhlbihkYXRhID0+IGNvbnNvbGUubG9nKGRhdGEpKVxuLy8gICAgICAgICAgICAgICAgICAgICAgICAuY2F0Y2goZXJyb3JzID0+IGNvbnNvbGUubG9nKGVycm9ycykpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG48L3NjcmlwdD5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyByZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvRmVlZGJhY2tGb3JtLnZ1ZSIsIjxzY3JpcHQ+XG4gICAgaW1wb3J0IHtUd2Vlbk1heCwgVGltZWxpbmVMaXRlfSBmcm9tICdnc2FwJ1xuICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgZGF0YSAoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHRpbWVsaW5lOiBudWxsLFxuICAgICAgICAgICAgICAgIHRvcE9mZnNldDogMCxcbiAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgICAgICB0b3BPZmZzZXRGb3JUb2dnbGVBbmltYXRpb246IDMwMFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgY3Vyc29yOiB7XG4gICAgICAgICAgICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgICAgICAgICAgIHk6IDBcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHNlbGVjdG9yczoge1xuICAgICAgICAgICAgICAgICAgICBnc2FwOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdmdMb2dvOiAnI2hlYWRlci1sb2dvLXN2ZycsXG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0SGFuZDogJyNsZWZ0LWhhbmQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHRIYW5kOiAnI3JpZ2h0LWhhbmQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWFuQm9keTogJyNtYW4tZnVsbCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWFkOiAnI2hlYWQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgZXllUHVwaWw6ICcjZXllLXB1cGlsJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHRBZG1pbm9pZDogJyNzdHJpcHBlZC1sb2dvLXRleHQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dHNXZWJtYXN0ZXI6ICcjd2ViLU1hc3RlcicsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0c1dlYm1hc3RlckxldHRlcjogJy53bS10bCcsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0V2ViOiAndHNwYW4jd2ViJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHRNYXN0ZXI6ICd0c3BhbiNtYXN0ZXInLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dHNXZWJtYXN0ZXJXcmFwcGVyOiAnI1JlY3RhbmdsZS0yMScsXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3BNZW51OiAnI3RvcC1tZW51JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcE1lbnVJdGVtOiAnLml0ZW0nLFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gZmxpY2tlclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVjdGFuZ2xlQ2VudGVyQ29sb3I6ICcjUmVjdGFuZ2xlLUdyZWVuJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlY3RhbmdsZXNCb3JkZXJDb2xvcjogJy5SZWN0YW5nbGUtUmVkJ1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBleWU6ICcjZXllLXB1cGlsJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgcmVkdWNlZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgJGV5ZToge30sXG4gICAgICAgICAgICAgICAgZXllVHJhbnNmb3JtV2l0aEFuZ2xlOiAndHJhbnNsYXRlKDEzLjAwMDAwMCwgMzYuMDAwMDAwKSByb3RhdGUoNDAuMDAwMDAwKSB0cmFuc2xhdGUoLTEzLjAwMDAwMCwgLTM2LjAwMDAwMCkgdHJhbnNsYXRlKDguMDAwMDAwLCAzMS4wMDAwMDApJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBtb3VudGVkICgpIHtcbiAgICAgICAgICAgIHRoaXMuY2hlY2tUb3BPZmZzZXQoKVxuICAgICAgICAgICAgdGhpcy5pbml0RmxpY2tlcigpXG4gICAgICAgICAgICB0aGlzLnRpbWVsaW5lID0gdGhpcy5jb21waWxlVGltZWxpbmUoKVxuLy8gICAgICB0aGlzLnRpbWVsaW5lLnJldmVyc2UoMClcbiAgICAgICAgICAgIHRoaXMuJGV5ZSA9ICQodGhpcy4kZWwpLmZpbmQodGhpcy5zZWxlY3RvcnMuZXllKVxuICAgICAgICB9LFxuICAgICAgICBjcmVhdGVkOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5jaGVja1RvcE9mZnNldClcbiAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzLmV5ZU1vdmUpXG4gICAgICAgIH0sXG4gICAgICAgIGJlZm9yZURlc3Ryb3k6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLmNoZWNrVG9wT2Zmc2V0KVxuICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMuZXllTW92ZSlcbiAgICAgICAgfSxcbiAgICAgICAgd2F0Y2g6IHtcbiAgICAgICAgICAgIHRvcE9mZnNldDogZnVuY3Rpb24gKHZhbCwgb2xkVmFsKSB7XG4gICAgICAgICAgICAgICAgaWYgKG9sZFZhbCA8IHRoaXMuc2V0dGluZ3MudG9wT2Zmc2V0Rm9yVG9nZ2xlQW5pbWF0aW9uICYmIHZhbCA+PSB0aGlzLnNldHRpbmdzLnRvcE9mZnNldEZvclRvZ2dsZUFuaW1hdGlvbikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJ1bkxvZ29BbmltYXRpb24oKVxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAob2xkVmFsID49IHRoaXMuc2V0dGluZ3MudG9wT2Zmc2V0Rm9yVG9nZ2xlQW5pbWF0aW9uICYmIHZhbCA8IHRoaXMuc2V0dGluZ3MudG9wT2Zmc2V0Rm9yVG9nZ2xlQW5pbWF0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucnVuTG9nb0FuaW1hdGlvbignYmFja3dhcmQnKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAgd3JpdGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBsZXQgJG1vZGFsID0gJCgnI3N1cGVyLW1vZGFsJylcbiAgICAgICAgICAgICAgICAkbW9kYWxcbiAgICAgICAgICAgICAgICAgICAgICAgIC5tb2RhbCgnc2V0dGluZycsICd0cmFuc2l0aW9uJywgJ2hvcml6b250YWwgZmxpcCcpXG4gICAgICAgICAgICAgICAgICAgICAgICAubW9kYWwoJ3RvZ2dsZScpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXllTW92ZTogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMucmVkdWNlZCkgcmV0dXJuIGZhbHNlXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJzb3IueCA9IGUucGFnZVhcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnNvci55ID0gZS5wYWdlWVxuXG4gICAgICAgICAgICAgICAgbGV0IGV5ZUNlbnRlciA9IFt0aGlzLiRleWUub2Zmc2V0KCkubGVmdCArIHRoaXMuJGV5ZS53aWR0aCgpIC8gMiwgdGhpcy4kZXllLm9mZnNldCgpLnRvcCArIHRoaXMuJGV5ZS5oZWlnaHQoKSAvIDJdXG4gICAgICAgICAgICAgICAgbGV0IGV5ZUFuZ2xlID0gTWF0aC5hdGFuMihlLnBhZ2VYIC0gZXllQ2VudGVyWzBdLCAtKGUucGFnZVkgLSBleWVDZW50ZXJbMV0pKSAqICgxODAgLyBNYXRoLlBJKSAtIDkwXG4gICAgICAgICAgICAgICAgdGhpcy5leWVUcmFuc2Zvcm1XaXRoQW5nbGUgPSAndHJhbnNsYXRlKDEzLjAwMDAwMCwgMzYuMDAwMDAwKSByb3RhdGUoJyArIGV5ZUFuZ2xlICsgJykgdHJhbnNsYXRlKC0xMy4wMDAwMDAsIC0zNi4wMDAwMDApIHRyYW5zbGF0ZSg4LjAwMDAwMCwgMzEuMDAwMDAwKSdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0b2dnbGVTaWRlYmFyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgJCgnI3RvcC1tZW51LXNpZGViYXInKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnNpZGViYXIoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246ICdvdmVybGF5J1xuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zaWRlYmFyKCd0b2dnbGUnKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGluaXRGbGlja2VyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdmFyIHN0ZXAgPSAxXG4gICAgICAgICAgICAgICAgVHdlZW5NYXgudG8odGhpcy5zZWxlY3RvcnMuZ3NhcC5yZWN0YW5nbGVDZW50ZXJDb2xvciwgc3RlcCwge1xuICAgICAgICAgICAgICAgICAgICBmaWxsOiAnI0NEMkU0MScsXG4gICAgICAgICAgICAgICAgICAgIHJlcGVhdDogLTEsXG4gICAgICAgICAgICAgICAgICAgIHlveW86IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHJlcGVhdERlbGF5OiBzdGVwICogM1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgVHdlZW5NYXgudG8odGhpcy5zZWxlY3RvcnMuZ3NhcC5yZWN0YW5nbGVzQm9yZGVyQ29sb3IsIHN0ZXAsIHtcbiAgICAgICAgICAgICAgICAgICAgZmlsbDogJyMxRDYwQjUnLFxuICAgICAgICAgICAgICAgICAgICByZXBlYXQ6IC0xLFxuICAgICAgICAgICAgICAgICAgICB5b3lvOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICByZXBlYXREZWxheTogc3RlcCAqIDMsXG4gICAgICAgICAgICAgICAgICAgIGRlbGF5OiBzdGVwICogM1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgVHdlZW5NYXguZnJvbVRvKHRoaXMuc2VsZWN0b3JzLmdzYXAudGV4dFdlYiwgc3RlcCAqIDIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbDogJyNGRkZGRkYnXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw6ICcjRkY5ODFDJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXBlYXQ6IC0xLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcGVhdERlbGF5OiBzdGVwICogMixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB5b3lvOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIFR3ZWVuTWF4LmZyb21Ubyh0aGlzLnNlbGVjdG9ycy5nc2FwLnRleHRNYXN0ZXIsIHN0ZXAgKiAyLFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw6ICcjRkY5ODFDJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsOiAnI0ZGRkZGRicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVwZWF0OiAtMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXBlYXREZWxheTogc3RlcCAqIDIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeW95bzogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBydW5Mb2dvQW5pbWF0aW9uOiBmdW5jdGlvbiAoZGlyZWN0aW9uID0gJ2ZvcndhcmQnKSB7XG4gICAgICAgICAgICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gJ2ZvcndhcmQnKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVkdWNlZCA9IHRydWVcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50aW1lbGluZS5wYXVzZSgpLnBsYXkoKVxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZGlyZWN0aW9uID09PSAnYmFja3dhcmQnKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVkdWNlZCA9IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGltZWxpbmUucGF1c2UoKS5yZXZlcnNlKClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY2hlY2tUb3BPZmZzZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRvcE9mZnNldCA9IHdpbmRvdy5wYWdlWU9mZnNldFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNvbXBpbGVUaW1lbGluZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGxldCBwYXJ0MXRpbWUgPSAwLjIsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJ0MnRpbWUgPSAwLjUsXG4gICAgICAgICAgICAgICAgICAgICAgICAkbG9nbyA9ICQodGhpcy5zZWxlY3RvcnMuZ3NhcC5zdmdMb2dvKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICRsZWZ0SGFuZCA9ICRsb2dvLmZpbmQodGhpcy5zZWxlY3RvcnMuZ3NhcC5sZWZ0SGFuZCksXG4gICAgICAgICAgICAgICAgICAgICAgICAkcmlnaHRIYW5kID0gJGxvZ28uZmluZCh0aGlzLnNlbGVjdG9ycy5nc2FwLnJpZ2h0SGFuZCksXG4gICAgICAgICAgICAgICAgICAgICAgICAkbWFuQm9keSA9ICRsb2dvLmZpbmQodGhpcy5zZWxlY3RvcnMuZ3NhcC5tYW5Cb2R5KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICRoZWFkID0gJGxvZ28uZmluZCh0aGlzLnNlbGVjdG9ycy5nc2FwLmhlYWQpLFxuICAgICAgICAgICAgICAgICAgICAgICAgJGV5ZVB1cGlsID0gJGxvZ28uZmluZCh0aGlzLnNlbGVjdG9ycy5nc2FwLmV5ZVB1cGlsKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICR0ZXh0QWRtaW5vaWQgPSAkbG9nby5maW5kKHRoaXMuc2VsZWN0b3JzLmdzYXAudGV4dEFkbWlub2lkKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldHRlcnNXZWJtYXN0ZXIgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGxvZ28uZmluZCh0aGlzLnNlbGVjdG9ycy5nc2FwLnRleHRzV2VibWFzdGVyKS5maW5kKHRoaXMuc2VsZWN0b3JzLmdzYXAudGV4dHNXZWJtYXN0ZXJMZXR0ZXIpXG4gICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dHNXZWJtYXN0ZXJXcmFwcGVyID0gJGxvZ28uZmluZCh0aGlzLnNlbGVjdG9ycy5nc2FwLnRleHRzV2VibWFzdGVyV3JhcHBlciksXG4gICAgICAgICAgICAgICAgICAgICAgICAkdG9wTWVudSA9ICQoZG9jdW1lbnQpLmZpbmQodGhpcy5zZWxlY3RvcnMuZ3NhcC50b3BNZW51KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcE1lbnVJdGVtc0ZvclJlc2l6aW5nID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoJHRvcE1lbnUuZmluZCh0aGlzLnNlbGVjdG9ycy5nc2FwLnRvcE1lbnVJdGVtKSk7XG5cbiAgICAgICAgICAgICAgICB0b3BNZW51SXRlbXNGb3JSZXNpemluZy5wdXNoKCR0b3BNZW51KVxuXG4gICAgICAgICAgICAgICAgbGV0IHRsTGVmdEhhbmQgPSBuZXcgVGltZWxpbmVMaXRlKCk7XG4vLyAgICAgICAgICAgICAgICB0bExlZnRIYW5kLnBhdXNlKClcbiAgICAgICAgICAgICAgICAvLyBIYW5kcyAod2F2aW5nKVxuICAgICAgICAgICAgICAgIHRsTGVmdEhhbmQuYWRkKFR3ZWVuTWF4LmZyb21UbygkbGVmdEhhbmQsIDAuMDgsIHtcbiAgICAgICAgICAgICAgICAgICAgcm90YXRpb246IDBcbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIHJvdGF0aW9uOiAzNSxcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtT3JpZ2luOiAnOTAlIDEwMCUnXG4gICAgICAgICAgICAgICAgfSkpXG4gICAgICAgICAgICAgICAgLmFkZChUd2Vlbk1heC50bygkbGVmdEhhbmQsIDAuMDgsIHtyb3RhdGlvbjogLTUwLCB0cmFuc2Zvcm1PcmlnaW46ICc5MCUgMTAwJSd9KSlcbiAgICAgICAgICAgICAgICAuYWRkKFR3ZWVuTWF4LnRvKCRsZWZ0SGFuZCwgMC4wOCwge3JvdGF0aW9uOiAzNSwgdHJhbnNmb3JtT3JpZ2luOiAnOTAlIDEwMCUnfSkpXG4gICAgICAgICAgICAgICAgLmFkZChUd2Vlbk1heC50bygkbGVmdEhhbmQsIDAuMDgsIHtyb3RhdGlvbjogLTUwLCB0cmFuc2Zvcm1PcmlnaW46ICc5MCUgMTAwJSd9KSlcbiAgICAgICAgICAgICAgICAuYWRkKFR3ZWVuTWF4LnRvKCRsZWZ0SGFuZCwgMC4wOCwge3JvdGF0aW9uOiAzNSwgdHJhbnNmb3JtT3JpZ2luOiAnOTAlIDEwMCUnfSkpXG4gICAgICAgICAgICAgICAgLmFkZChUd2Vlbk1heC50bygkbGVmdEhhbmQsIDAuMDgsIHtyb3RhdGlvbjogLTUwLCB0cmFuc2Zvcm1PcmlnaW46ICc5MCUgMTAwJSd9KSlcbiAgICAgICAgICAgICAgICAuYWRkKFR3ZWVuTWF4LnRvKCRsZWZ0SGFuZCwgMC4xMCwge3JvdGF0aW9uOiAzNSwgdHJhbnNmb3JtT3JpZ2luOiAnOTAlIDEwMCUnfSkpXG4gICAgICAgICAgICAgICAgLmFkZChUd2Vlbk1heC50bygkbGVmdEhhbmQsIDAuMTUsIHtyb3RhdGlvbjogLTc1LCB0cmFuc2Zvcm1PcmlnaW46ICc5MCUgMTAwJSd9KSlcblxuICAgICAgICAgICAgICAgIGxldCB0bFJpZ2h0SGFuZCA9IG5ldyBUaW1lbGluZUxpdGUoKVxuLy8gICAgICAgICAgICAgICAgdGxSaWdodEhhbmQucGF1c2UoKVxuICAgICAgICAgICAgICAgIHRsUmlnaHRIYW5kLmFkZChUd2Vlbk1heC5mcm9tVG8oJHJpZ2h0SGFuZCwgMC4wOCwge1xuICAgICAgICAgICAgICAgICAgICByb3RhdGlvbjogMFxuICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgcm90YXRpb246IC0zNSxcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtT3JpZ2luOiAnMTAlIDEwMCUnXG4gICAgICAgICAgICAgICAgfSkpXG4gICAgICAgICAgICAgICAgdGxSaWdodEhhbmQuYWRkKFR3ZWVuTWF4LnRvKCRyaWdodEhhbmQsIDAuMDgsIHtyb3RhdGlvbjogNTAsIHRyYW5zZm9ybU9yaWdpbjogJzEwJSAxMDAlJ30pKVxuICAgICAgICAgICAgICAgIHRsUmlnaHRIYW5kLmFkZChUd2Vlbk1heC50bygkcmlnaHRIYW5kLCAwLjA4LCB7cm90YXRpb246IC0zNSwgdHJhbnNmb3JtT3JpZ2luOiAnMTAlIDEwMCUnfSkpXG4gICAgICAgICAgICAgICAgdGxSaWdodEhhbmQuYWRkKFR3ZWVuTWF4LnRvKCRyaWdodEhhbmQsIDAuMDgsIHtyb3RhdGlvbjogNTAsIHRyYW5zZm9ybU9yaWdpbjogJzEwJSAxMDAlJ30pKVxuICAgICAgICAgICAgICAgIHRsUmlnaHRIYW5kLmFkZChUd2Vlbk1heC50bygkcmlnaHRIYW5kLCAwLjA4LCB7cm90YXRpb246IC0zNSwgdHJhbnNmb3JtT3JpZ2luOiAnMTAlIDEwMCUnfSkpXG4gICAgICAgICAgICAgICAgdGxSaWdodEhhbmQuYWRkKFR3ZWVuTWF4LnRvKCRyaWdodEhhbmQsIDAuMDgsIHtyb3RhdGlvbjogNTAsIHRyYW5zZm9ybU9yaWdpbjogJzEwJSAxMDAlJ30pKVxuICAgICAgICAgICAgICAgIHRsUmlnaHRIYW5kLmFkZChUd2Vlbk1heC50bygkcmlnaHRIYW5kLCAwLjEwLCB7cm90YXRpb246IC0zNSwgdHJhbnNmb3JtT3JpZ2luOiAnMTAlIDEwMCUnfSkpXG4gICAgICAgICAgICAgICAgdGxSaWdodEhhbmQuYWRkKFR3ZWVuTWF4LnRvKCRyaWdodEhhbmQsIDAuMTUsIHtyb3RhdGlvbjogNzUsIHRyYW5zZm9ybU9yaWdpbjogJzEwJSAxMDAlJ30pKVxuICAgICAgICAgICAgICAgIGxldCB0bEhhbmRzID0gbmV3IFRpbWVsaW5lTGl0ZSgpXG4vLyAgICAgICAgICAgICAgICB0bEhhbmRzLnBhdXNlKClcbiAgICAgICAgICAgICAgICB0bEhhbmRzLmFkZCh0bExlZnRIYW5kLCAwKTtcbiAgICAgICAgICAgICAgICB0bEhhbmRzLmFkZCh0bFJpZ2h0SGFuZCwgMCk7XG4vLyAgICAgICAgICAgICAgICByZXR1cm4gdGxIYW5kc1xuXG4gICAgICAgICAgICAgICAgLy8gQm9keSwgcGFydCAxXG4gICAgICAgICAgICAgICAgbGV0IHRsQm9keSA9IG5ldyBUaW1lbGluZUxpdGUoKVxuLy8gICAgICAgICAgICAgICAgdGxCb2R5LnBhdXNlKClcbiAgICAgICAgICAgICAgICAvLyBsZXQgcGFydDF0aW1lID0gMC4yLCBwYXJ0MnRpbWUgPSAwLjUsXG4vLyAgICAgICAgICAgICAgICB0bFJpZ2h0SGFuZC5hZGQoVHdlZW5NYXgudG8oJHJpZ2h0SGFuZCwgMC4wOCwge3JvdGF0aW9uOiA1MCwgdHJhbnNmb3JtT3JpZ2luOiAnMTAlIDEwMCUnfSkpXG4vLyAgICAgICAgICAgICAgICB0bFJpZ2h0SGFuZC5hZGQoVHdlZW5NYXgudG8oJHJpZ2h0SGFuZCwgMC4wOCwge3JvdGF0aW9uOiAtMzUsIHRyYW5zZm9ybU9yaWdpbjogJzEwJSAxMDAlJ30pKVxuICAgICAgICAgICAgICAgIHRsQm9keS5hZGQoVHdlZW5NYXgudG8oJG1hbkJvZHksIDAuMixcbiAgICAgICAgICAgICAgICAgICAgICAgIHt5OiAwLCB4OiAwLCByb3RhdGlvbjogMH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7eTogLTEwLCB4OiAyMCwgcm90YXRpb246IDM1LCB0cmFuc2Zvcm1PcmlnaW46ICc1MCUgNTAlJ31cbiAgICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgICAgIC8vIEJvZHksIHBhcnQgMlxuICAgICAgICAgICAgICAgIC5hZGQoVHdlZW5NYXgudG8oJG1hbkJvZHksIDAuNSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHt5OiAtNSwgeDogMTgwLCByb3RhdGlvbjogOTAsIHRyYW5zZm9ybU9yaWdpbjogJzUwJSA1MCUnfVxuICAgICAgICAgICAgICAgICkpXG5cbi8vICAgICAgICAgICAgICAgIHJldHVybiB0bEJvZHlcbiAgICAgICAgICAgICAgICAvLyBIZWFkXG4gICAgICAgICAgICAgICAgdmFyIHRsSGVhZCA9IG5ldyBUaW1lbGluZUxpdGUoKVxuICAgICAgICAgICAgICAgIHRsSGVhZC5mcm9tVG8oJGhlYWQsIDAuMyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHthdXRvQWxwaGE6IDF9LFxuICAgICAgICAgICAgICAgICAgICAgICAge2F1dG9BbHBoYTogMH1cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgLy8gU1ZHIGltZyBzaXplIChiZWdpbiBmcm9tIHBhcnQxdGltZSlcbiAgICAgICAgICAgICAgICBsZXQgdGxMb2dvU2l6ZSA9IG5ldyBUaW1lbGluZUxpdGUoKVxuLy8gICAgICAgICAgICAgICAgdGxMb2dvU2l6ZS5wYXVzZSgpXG4gICAgICAgICAgICAgICAgdGxMb2dvU2l6ZS5hZGQoVHdlZW5NYXgudG8oJGxvZ28sIHBhcnQxdGltZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHthdHRyOiB7dmlld0JveDogJzAgMCAyMTkgNDInfSwgd2lkdGg6IDIxOSwgaGVpZ2h0OiA0Mn1cbiAgICAgICAgICAgICAgICApLCBwYXJ0MXRpbWUpXG4gICAgICAgICAgICAgICAgLy8gRXllLXB1cGlsXG4gICAgICAgICAgICAgICAgdmFyIHRsRXllUHVwaWwgPSBuZXcgVGltZWxpbmVMaXRlKClcbiAgICAgICAgICAgICAgICB0bEV5ZVB1cGlsLmFkZChUd2Vlbk1heC50bygkZXllUHVwaWwsIHBhcnQxdGltZSxcbi8vICAgICAgICAgICAgICAgICAgICAgICAge2F1dG9BbHBoYTogMH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7YXV0b0FscGhhOiAxfVxuICAgICAgICAgICAgICAgICksIHBhcnQxdGltZSlcbiAgICAgICAgICAgICAgICAvLyBUZXh0IGFkbWlub2lkXG4gICAgICAgICAgICAgICAgdmFyIHRsVGV4dEFkbWlub2lkID0gbmV3IFRpbWVsaW5lTGl0ZSgpXG4gICAgICAgICAgICAgICAgdGxUZXh0QWRtaW5vaWQuYWRkKFR3ZWVuTWF4LmZyb21UbygkdGV4dEFkbWlub2lkLCBwYXJ0MXRpbWUgKyBwYXJ0MnRpbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB7eDogMCwgeTogMjR9LFxuICAgICAgICAgICAgICAgICAgICAgICAge3g6IC01MCwgeTogN31cbiAgICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgICAgIC8vIFRleHQgd2VibWFzdGVyIHRleHRzV2VibWFzdGVyXG4gICAgICAgICAgICAgICAgdmFyIHRsVGV4dFdlYm1hc3RlciA9IG5ldyBUaW1lbGluZUxpdGUoKVxuICAgICAgICAgICAgICAgIHRsVGV4dFdlYm1hc3Rlci5hZGQoXG4gICAgICAgICAgICAgICAgICAgICAgICBUd2Vlbk1heC5zdGFnZ2VyRnJvbVRvKGxldHRlcnNXZWJtYXN0ZXIucmV2ZXJzZSgpLCAoMC4xKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2F1dG9BbHBoYTogMSwgcm90YXRlWDogMH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHthdXRvQWxwaGE6IDAsIHJvdGF0ZVg6IDEwfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMC4wNVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAvLyBXZWJtYXN0ZXIgV3JhcHBlclxuICAgICAgICAgICAgICAgIHZhciB0bFRleHRXZWJtYXN0ZXJXcmFwcGVyID0gbmV3IFRpbWVsaW5lTGl0ZSgpXG4gICAgICAgICAgICAgICAgdGxUZXh0V2VibWFzdGVyV3JhcHBlci5hZGQoVHdlZW5NYXguZnJvbVRvKHRleHRzV2VibWFzdGVyV3JhcHBlciwgMC41LFxuICAgICAgICAgICAgICAgICAgICAgICAge2F1dG9BbHBoYTogMX0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7YXV0b0FscGhhOiAwfVxuICAgICAgICAgICAgICAgICksIDAuMilcbiAgICAgICAgICAgICAgICAvLyBUb3BNZW51IGhlaWdodCByZWR1Y3Rpb24vaW5jcmVhc2VcbiAgICAgICAgICAgICAgICB2YXIgdGxUb3BNZW51ID0gbmV3IFRpbWVsaW5lTGl0ZSgpXG4gICAgICAgICAgICAgICAgdGxUb3BNZW51LmFkZChUd2Vlbk1heC5zdGFnZ2VyRnJvbVRvKHRvcE1lbnVJdGVtc0ZvclJlc2l6aW5nLCBwYXJ0MXRpbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB7aGVpZ2h0OiAnNC42NjY2N3JlbScsIG9wYWNpdHk6IDF9LFxuICAgICAgICAgICAgICAgICAgICAgICAge2hlaWdodDogJzMuNjY2NjdyZW0nLCBvcGFjaXR5OiAwLjkzfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDBcbiAgICAgICAgICAgICAgICApLCBwYXJ0MXRpbWUpXG4gICAgICAgICAgICAgICAgLy8gQ29uY2x1c2lvblxuICAgICAgICAgICAgICAgIHZhciB0aW1lbGluZSA9IG5ldyBUaW1lbGluZUxpdGUoe3BhdXNlZDogdHJ1ZX0pXG4gICAgICAgICAgICAgICAgdGltZWxpbmUucGF1c2UoKVxuICAgICAgICAgICAgICAgIHRpbWVsaW5lLmFkZCh0bEhhbmRzLCAwKVxuICAgICAgICAgICAgICAgIHRpbWVsaW5lLmFkZCh0bEJvZHksIDApXG4gICAgICAgICAgICAgICAgdGltZWxpbmUuYWRkKHRsSGVhZCwgMClcbiAgICAgICAgICAgICAgICB0aW1lbGluZS5hZGQodGxMb2dvU2l6ZSwgMClcbiAgICAgICAgICAgICAgICB0aW1lbGluZS5hZGQodGxFeWVQdXBpbCwgMClcbiAgICAgICAgICAgICAgICB0aW1lbGluZS5hZGQodGxUZXh0QWRtaW5vaWQsIDApXG4gICAgICAgICAgICAgICAgdGltZWxpbmUuYWRkKHRsVGV4dFdlYm1hc3RlciwgMClcbiAgICAgICAgICAgICAgICB0aW1lbGluZS5hZGQodGxUZXh0V2VibWFzdGVyV3JhcHBlciwgMClcbiAgICAgICAgICAgICAgICB0aW1lbGluZS5hZGQodGxUb3BNZW51LCAwKVxuICAgICAgICAgICAgICAgIHJldHVybiB0aW1lbGluZVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuPC9zY3JpcHQ+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHJlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9Ub3BNZW51LnZ1ZSIsIi8qIGdsb2JhbHMgX19WVUVfU1NSX0NPTlRFWFRfXyAqL1xuXG4vLyBJTVBPUlRBTlQ6IERvIE5PVCB1c2UgRVMyMDE1IGZlYXR1cmVzIGluIHRoaXMgZmlsZS5cbi8vIFRoaXMgbW9kdWxlIGlzIGEgcnVudGltZSB1dGlsaXR5IGZvciBjbGVhbmVyIGNvbXBvbmVudCBtb2R1bGUgb3V0cHV0IGFuZCB3aWxsXG4vLyBiZSBpbmNsdWRlZCBpbiB0aGUgZmluYWwgd2VicGFjayB1c2VyIGJ1bmRsZS5cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBub3JtYWxpemVDb21wb25lbnQgKFxuICByYXdTY3JpcHRFeHBvcnRzLFxuICBjb21waWxlZFRlbXBsYXRlLFxuICBmdW5jdGlvbmFsVGVtcGxhdGUsXG4gIGluamVjdFN0eWxlcyxcbiAgc2NvcGVJZCxcbiAgbW9kdWxlSWRlbnRpZmllciAvKiBzZXJ2ZXIgb25seSAqL1xuKSB7XG4gIHZhciBlc01vZHVsZVxuICB2YXIgc2NyaXB0RXhwb3J0cyA9IHJhd1NjcmlwdEV4cG9ydHMgPSByYXdTY3JpcHRFeHBvcnRzIHx8IHt9XG5cbiAgLy8gRVM2IG1vZHVsZXMgaW50ZXJvcFxuICB2YXIgdHlwZSA9IHR5cGVvZiByYXdTY3JpcHRFeHBvcnRzLmRlZmF1bHRcbiAgaWYgKHR5cGUgPT09ICdvYmplY3QnIHx8IHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICBlc01vZHVsZSA9IHJhd1NjcmlwdEV4cG9ydHNcbiAgICBzY3JpcHRFeHBvcnRzID0gcmF3U2NyaXB0RXhwb3J0cy5kZWZhdWx0XG4gIH1cblxuICAvLyBWdWUuZXh0ZW5kIGNvbnN0cnVjdG9yIGV4cG9ydCBpbnRlcm9wXG4gIHZhciBvcHRpb25zID0gdHlwZW9mIHNjcmlwdEV4cG9ydHMgPT09ICdmdW5jdGlvbidcbiAgICA/IHNjcmlwdEV4cG9ydHMub3B0aW9uc1xuICAgIDogc2NyaXB0RXhwb3J0c1xuXG4gIC8vIHJlbmRlciBmdW5jdGlvbnNcbiAgaWYgKGNvbXBpbGVkVGVtcGxhdGUpIHtcbiAgICBvcHRpb25zLnJlbmRlciA9IGNvbXBpbGVkVGVtcGxhdGUucmVuZGVyXG4gICAgb3B0aW9ucy5zdGF0aWNSZW5kZXJGbnMgPSBjb21waWxlZFRlbXBsYXRlLnN0YXRpY1JlbmRlckZuc1xuICAgIG9wdGlvbnMuX2NvbXBpbGVkID0gdHJ1ZVxuICB9XG5cbiAgLy8gZnVuY3Rpb25hbCB0ZW1wbGF0ZVxuICBpZiAoZnVuY3Rpb25hbFRlbXBsYXRlKSB7XG4gICAgb3B0aW9ucy5mdW5jdGlvbmFsID0gdHJ1ZVxuICB9XG5cbiAgLy8gc2NvcGVkSWRcbiAgaWYgKHNjb3BlSWQpIHtcbiAgICBvcHRpb25zLl9zY29wZUlkID0gc2NvcGVJZFxuICB9XG5cbiAgdmFyIGhvb2tcbiAgaWYgKG1vZHVsZUlkZW50aWZpZXIpIHsgLy8gc2VydmVyIGJ1aWxkXG4gICAgaG9vayA9IGZ1bmN0aW9uIChjb250ZXh0KSB7XG4gICAgICAvLyAyLjMgaW5qZWN0aW9uXG4gICAgICBjb250ZXh0ID1cbiAgICAgICAgY29udGV4dCB8fCAvLyBjYWNoZWQgY2FsbFxuICAgICAgICAodGhpcy4kdm5vZGUgJiYgdGhpcy4kdm5vZGUuc3NyQ29udGV4dCkgfHwgLy8gc3RhdGVmdWxcbiAgICAgICAgKHRoaXMucGFyZW50ICYmIHRoaXMucGFyZW50LiR2bm9kZSAmJiB0aGlzLnBhcmVudC4kdm5vZGUuc3NyQ29udGV4dCkgLy8gZnVuY3Rpb25hbFxuICAgICAgLy8gMi4yIHdpdGggcnVuSW5OZXdDb250ZXh0OiB0cnVlXG4gICAgICBpZiAoIWNvbnRleHQgJiYgdHlwZW9mIF9fVlVFX1NTUl9DT05URVhUX18gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnRleHQgPSBfX1ZVRV9TU1JfQ09OVEVYVF9fXG4gICAgICB9XG4gICAgICAvLyBpbmplY3QgY29tcG9uZW50IHN0eWxlc1xuICAgICAgaWYgKGluamVjdFN0eWxlcykge1xuICAgICAgICBpbmplY3RTdHlsZXMuY2FsbCh0aGlzLCBjb250ZXh0KVxuICAgICAgfVxuICAgICAgLy8gcmVnaXN0ZXIgY29tcG9uZW50IG1vZHVsZSBpZGVudGlmaWVyIGZvciBhc3luYyBjaHVuayBpbmZlcnJlbmNlXG4gICAgICBpZiAoY29udGV4dCAmJiBjb250ZXh0Ll9yZWdpc3RlcmVkQ29tcG9uZW50cykge1xuICAgICAgICBjb250ZXh0Ll9yZWdpc3RlcmVkQ29tcG9uZW50cy5hZGQobW9kdWxlSWRlbnRpZmllcilcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gdXNlZCBieSBzc3IgaW4gY2FzZSBjb21wb25lbnQgaXMgY2FjaGVkIGFuZCBiZWZvcmVDcmVhdGVcbiAgICAvLyBuZXZlciBnZXRzIGNhbGxlZFxuICAgIG9wdGlvbnMuX3NzclJlZ2lzdGVyID0gaG9va1xuICB9IGVsc2UgaWYgKGluamVjdFN0eWxlcykge1xuICAgIGhvb2sgPSBpbmplY3RTdHlsZXNcbiAgfVxuXG4gIGlmIChob29rKSB7XG4gICAgdmFyIGZ1bmN0aW9uYWwgPSBvcHRpb25zLmZ1bmN0aW9uYWxcbiAgICB2YXIgZXhpc3RpbmcgPSBmdW5jdGlvbmFsXG4gICAgICA/IG9wdGlvbnMucmVuZGVyXG4gICAgICA6IG9wdGlvbnMuYmVmb3JlQ3JlYXRlXG5cbiAgICBpZiAoIWZ1bmN0aW9uYWwpIHtcbiAgICAgIC8vIGluamVjdCBjb21wb25lbnQgcmVnaXN0cmF0aW9uIGFzIGJlZm9yZUNyZWF0ZSBob29rXG4gICAgICBvcHRpb25zLmJlZm9yZUNyZWF0ZSA9IGV4aXN0aW5nXG4gICAgICAgID8gW10uY29uY2F0KGV4aXN0aW5nLCBob29rKVxuICAgICAgICA6IFtob29rXVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBmb3IgdGVtcGxhdGUtb25seSBob3QtcmVsb2FkIGJlY2F1c2UgaW4gdGhhdCBjYXNlIHRoZSByZW5kZXIgZm4gZG9lc24ndFxuICAgICAgLy8gZ28gdGhyb3VnaCB0aGUgbm9ybWFsaXplclxuICAgICAgb3B0aW9ucy5faW5qZWN0U3R5bGVzID0gaG9va1xuICAgICAgLy8gcmVnaXN0ZXIgZm9yIGZ1bmN0aW9hbCBjb21wb25lbnQgaW4gdnVlIGZpbGVcbiAgICAgIG9wdGlvbnMucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyV2l0aFN0eWxlSW5qZWN0aW9uIChoLCBjb250ZXh0KSB7XG4gICAgICAgIGhvb2suY2FsbChjb250ZXh0KVxuICAgICAgICByZXR1cm4gZXhpc3RpbmcoaCwgY29udGV4dClcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGVzTW9kdWxlOiBlc01vZHVsZSxcbiAgICBleHBvcnRzOiBzY3JpcHRFeHBvcnRzLFxuICAgIG9wdGlvbnM6IG9wdGlvbnNcbiAgfVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXIuanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gNyIsIlxuLyoqXG4gKiBGaXJzdCB3ZSB3aWxsIGxvYWQgYWxsIG9mIHRoaXMgcHJvamVjdCdzIEphdmFTY3JpcHQgZGVwZW5kZW5jaWVzIHdoaWNoXG4gKiBpbmNsdWRlcyBWdWUgYW5kIG90aGVyIGxpYnJhcmllcy4gSXQgaXMgYSBncmVhdCBzdGFydGluZyBwb2ludCB3aGVuXG4gKiBidWlsZGluZyByb2J1c3QsIHBvd2VyZnVsIHdlYiBhcHBsaWNhdGlvbnMgdXNpbmcgVnVlIGFuZCBMYXJhdmVsLlxuICovXG5cbnJlcXVpcmUoJy4vYm9vdHN0cmFwJyk7XG5cbndpbmRvdy5WdWUgPSByZXF1aXJlKCd2dWUnKTtcblxuLyoqXG4gKiBOZXh0LCB3ZSB3aWxsIGNyZWF0ZSBhIGZyZXNoIFZ1ZSBhcHBsaWNhdGlvbiBpbnN0YW5jZSBhbmQgYXR0YWNoIGl0IHRvXG4gKiB0aGUgcGFnZS4gVGhlbiwgeW91IG1heSBiZWdpbiBhZGRpbmcgY29tcG9uZW50cyB0byB0aGlzIGFwcGxpY2F0aW9uXG4gKiBvciBjdXN0b21pemUgdGhlIEphdmFTY3JpcHQgc2NhZmZvbGRpbmcgdG8gZml0IHlvdXIgdW5pcXVlIG5lZWRzLlxuICovXG5cbmltcG9ydCBUb3BNZW51IGZyb20gJy4vY29tcG9uZW50cy9Ub3BNZW51J1xuaW1wb3J0IEZlZWRiYWNrRm9ybSBmcm9tICcuL2NvbXBvbmVudHMvRmVlZGJhY2tGb3JtJ1xuXG5WdWUuY29tcG9uZW50KFwiY2xvdWRzXCIsIGZ1bmN0aW9uIChyZXNvbHZlKSB7XG4gIHJlcXVpcmUoWycuL2NvbXBvbmVudHMvcGFnZXMvaW5kZXgvQ2xvdWRzJ10sIHJlc29sdmUpXG59KVxuXG5WdWUuY29tcG9uZW50KFwiY3ViZVwiLCBmdW5jdGlvbiAocmVzb2x2ZSkge1xuICByZXF1aXJlKFsnLi9jb21wb25lbnRzL3BhZ2VzL2luZGV4L0N1YmUnXSwgcmVzb2x2ZSlcbn0pXG5cblZ1ZS5jb21wb25lbnQoXCJjbG9ja1wiLCBmdW5jdGlvbiAocmVzb2x2ZSkge1xuICByZXF1aXJlKFsnLi9jb21wb25lbnRzL3BhZ2VzL3ByaWNlL0Nsb2NrLnZ1ZSddLCByZXNvbHZlKVxufSlcblxuVnVlLmNvbXBvbmVudChcInRvb2xzLWJsb2NrXCIsIGZ1bmN0aW9uIChyZXNvbHZlKSB7XG4gIHJlcXVpcmUoWycuL2NvbXBvbmVudHMvcGFnZXMvdG9vbHMvVG9vbHNCbG9jay52dWUnXSwgcmVzb2x2ZSlcbn0pXG5cblZ1ZS5jb21wb25lbnQoXCJ6b29tXCIsIGZ1bmN0aW9uIChyZXNvbHZlKSB7XG4gIHJlcXVpcmUoWycuL2NvbXBvbmVudHMvcGFnZXMvcG9ydGZvbGlvL1pvb20udnVlJ10sIHJlc29sdmUpXG59KVxuXG5WdWUuY29tcG9uZW50KFwiaGFsZi1yb3RhdGVcIiwgZnVuY3Rpb24gKHJlc29sdmUpIHtcbiAgcmVxdWlyZShbJy4vY29tcG9uZW50cy9wYWdlcy93b3JrZmxvdy9IYWxmUm90YXRlLnZ1ZSddLCByZXNvbHZlKVxufSlcblxuY29uc3QgYXBwID0gbmV3IFZ1ZSh7XG4gIGVsOiAnI2FwcCcsXG4gIGNvbXBvbmVudHM6IHtcbiAgICBUb3BNZW51LCBGZWVkYmFja0Zvcm1cbiAgfVxufSlcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvYXBwLmpzIiwiXG53aW5kb3cuXyA9IHJlcXVpcmUoJ2xvZGFzaCcpO1xuXG4vKipcbiAqIFdlJ2xsIGxvYWQgalF1ZXJ5IGFuZCB0aGUgQm9vdHN0cmFwIGpRdWVyeSBwbHVnaW4gd2hpY2ggcHJvdmlkZXMgc3VwcG9ydFxuICogZm9yIEphdmFTY3JpcHQgYmFzZWQgQm9vdHN0cmFwIGZlYXR1cmVzIHN1Y2ggYXMgbW9kYWxzIGFuZCB0YWJzLiBUaGlzXG4gKiBjb2RlIG1heSBiZSBtb2RpZmllZCB0byBmaXQgdGhlIHNwZWNpZmljIG5lZWRzIG9mIHlvdXIgYXBwbGljYXRpb24uXG4gKi9cblxudHJ5IHtcbiAgICB3aW5kb3cuJCA9IHdpbmRvdy5qUXVlcnkgPSByZXF1aXJlKCdqcXVlcnknKTtcblxuICAgIC8vIHJlcXVpcmUoJ2Jvb3RzdHJhcC1zYXNzJyk7XG59IGNhdGNoIChlKSB7fVxuXG4vKipcbiAqIFdlJ2xsIGxvYWQgdGhlIGF4aW9zIEhUVFAgbGlicmFyeSB3aGljaCBhbGxvd3MgdXMgdG8gZWFzaWx5IGlzc3VlIHJlcXVlc3RzXG4gKiB0byBvdXIgTGFyYXZlbCBiYWNrLWVuZC4gVGhpcyBsaWJyYXJ5IGF1dG9tYXRpY2FsbHkgaGFuZGxlcyBzZW5kaW5nIHRoZVxuICogQ1NSRiB0b2tlbiBhcyBhIGhlYWRlciBiYXNlZCBvbiB0aGUgdmFsdWUgb2YgdGhlIFwiWFNSRlwiIHRva2VuIGNvb2tpZS5cbiAqL1xuXG53aW5kb3cuYXhpb3MgPSByZXF1aXJlKCdheGlvcycpO1xuXG53aW5kb3cuYXhpb3MuZGVmYXVsdHMuaGVhZGVycy5jb21tb25bJ1gtUmVxdWVzdGVkLVdpdGgnXSA9ICdYTUxIdHRwUmVxdWVzdCc7XG5cbi8qKlxuICogTmV4dCB3ZSB3aWxsIHJlZ2lzdGVyIHRoZSBDU1JGIFRva2VuIGFzIGEgY29tbW9uIGhlYWRlciB3aXRoIEF4aW9zIHNvIHRoYXRcbiAqIGFsbCBvdXRnb2luZyBIVFRQIHJlcXVlc3RzIGF1dG9tYXRpY2FsbHkgaGF2ZSBpdCBhdHRhY2hlZC4gVGhpcyBpcyBqdXN0XG4gKiBhIHNpbXBsZSBjb252ZW5pZW5jZSBzbyB3ZSBkb24ndCBoYXZlIHRvIGF0dGFjaCBldmVyeSB0b2tlbiBtYW51YWxseS5cbiAqL1xuXG5sZXQgdG9rZW4gPSBkb2N1bWVudC5oZWFkLnF1ZXJ5U2VsZWN0b3IoJ21ldGFbbmFtZT1cImNzcmYtdG9rZW5cIl0nKTtcblxuaWYgKHRva2VuKSB7XG4gICAgd2luZG93LmF4aW9zLmRlZmF1bHRzLmhlYWRlcnMuY29tbW9uWydYLUNTUkYtVE9LRU4nXSA9IHRva2VuLmNvbnRlbnQ7XG59IGVsc2Uge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0NTUkYgdG9rZW4gbm90IGZvdW5kOiBodHRwczovL2xhcmF2ZWwuY29tL2RvY3MvY3NyZiNjc3JmLXgtY3NyZi10b2tlbicpO1xufVxuXG4vKipcbiAqIEVjaG8gZXhwb3NlcyBhbiBleHByZXNzaXZlIEFQSSBmb3Igc3Vic2NyaWJpbmcgdG8gY2hhbm5lbHMgYW5kIGxpc3RlbmluZ1xuICogZm9yIGV2ZW50cyB0aGF0IGFyZSBicm9hZGNhc3QgYnkgTGFyYXZlbC4gRWNobyBhbmQgZXZlbnQgYnJvYWRjYXN0aW5nXG4gKiBhbGxvd3MgeW91ciB0ZWFtIHRvIGVhc2lseSBidWlsZCByb2J1c3QgcmVhbC10aW1lIHdlYiBhcHBsaWNhdGlvbnMuXG4gKi9cblxuLy8gaW1wb3J0IEVjaG8gZnJvbSAnbGFyYXZlbC1lY2hvJ1xuXG4vLyB3aW5kb3cuUHVzaGVyID0gcmVxdWlyZSgncHVzaGVyLWpzJyk7XG5cbi8vIHdpbmRvdy5FY2hvID0gbmV3IEVjaG8oe1xuLy8gICAgIGJyb2FkY2FzdGVyOiAncHVzaGVyJyxcbi8vICAgICBrZXk6ICd5b3VyLXB1c2hlci1rZXknXG4vLyB9KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvYm9vdHN0cmFwLmpzIiwidmFyIGRpc3Bvc2VkID0gZmFsc2VcbnZhciBub3JtYWxpemVDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKVxuLyogc2NyaXB0ICovXG52YXIgX192dWVfc2NyaXB0X18gPSByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZW52XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlLFxcXCJ0YXJnZXRzXFxcIjp7XFxcImJyb3dzZXJzXFxcIjpbXFxcIj4gMiVcXFwiXSxcXFwidWdsaWZ5XFxcIjp0cnVlfX1dXSxcXFwicGx1Z2luc1xcXCI6W1xcXCJ0cmFuc2Zvcm0tb2JqZWN0LXJlc3Qtc3ByZWFkXFxcIixbXFxcInRyYW5zZm9ybS1ydW50aW1lXFxcIix7XFxcInBvbHlmaWxsXFxcIjpmYWxzZSxcXFwiaGVscGVyc1xcXCI6ZmFsc2V9XV19IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vRmVlZGJhY2tGb3JtLnZ1ZVwiKVxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gbnVsbFxuLyogdGVtcGxhdGUgZnVuY3Rpb25hbCAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyA9IGZhbHNlXG4vKiBzdHlsZXMgKi9cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IG51bGxcbi8qIHNjb3BlSWQgKi9cbnZhciBfX3Z1ZV9zY29wZUlkX18gPSBudWxsXG4vKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbnZhciBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fID0gbnVsbFxudmFyIENvbXBvbmVudCA9IG5vcm1hbGl6ZUNvbXBvbmVudChcbiAgX192dWVfc2NyaXB0X18sXG4gIF9fdnVlX3RlbXBsYXRlX18sXG4gIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyxcbiAgX192dWVfc3R5bGVzX18sXG4gIF9fdnVlX3Njb3BlSWRfXyxcbiAgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfX1xuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvRmVlZGJhY2tGb3JtLnZ1ZVwiXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtbG9hZGVyL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi1lMWRkZDFjMFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LWUxZGRkMWMwXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvRmVlZGJhY2tGb3JtLnZ1ZVxuLy8gbW9kdWxlIGlkID0gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvRmVlZGJhY2tGb3JtLnZ1ZVxuLy8gbW9kdWxlIGNodW5rcyA9IDciLCJ2YXIgZGlzcG9zZWQgPSBmYWxzZVxudmFyIG5vcm1hbGl6ZUNvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpXG4vKiBzY3JpcHQgKi9cbnZhciBfX3Z1ZV9zY3JpcHRfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlbnZcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2UsXFxcInRhcmdldHNcXFwiOntcXFwiYnJvd3NlcnNcXFwiOltcXFwiPiAyJVxcXCJdLFxcXCJ1Z2xpZnlcXFwiOnRydWV9fV1dLFxcXCJwbHVnaW5zXFxcIjpbXFxcInRyYW5zZm9ybS1vYmplY3QtcmVzdC1zcHJlYWRcXFwiLFtcXFwidHJhbnNmb3JtLXJ1bnRpbWVcXFwiLHtcXFwicG9seWZpbGxcXFwiOmZhbHNlLFxcXCJoZWxwZXJzXFxcIjpmYWxzZX1dXX0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9Ub3BNZW51LnZ1ZVwiKVxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gbnVsbFxuLyogdGVtcGxhdGUgZnVuY3Rpb25hbCAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyA9IGZhbHNlXG4vKiBzdHlsZXMgKi9cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IG51bGxcbi8qIHNjb3BlSWQgKi9cbnZhciBfX3Z1ZV9zY29wZUlkX18gPSBudWxsXG4vKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbnZhciBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fID0gbnVsbFxudmFyIENvbXBvbmVudCA9IG5vcm1hbGl6ZUNvbXBvbmVudChcbiAgX192dWVfc2NyaXB0X18sXG4gIF9fdnVlX3RlbXBsYXRlX18sXG4gIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyxcbiAgX192dWVfc3R5bGVzX18sXG4gIF9fdnVlX3Njb3BlSWRfXyxcbiAgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfX1xuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvVG9wTWVudS52dWVcIlxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWxvYWRlci9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtNjI4ZDZhNmRcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi02MjhkNmE2ZFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBkaXNwb3NlZCA9IHRydWVcbiAgfSlcbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL1RvcE1lbnUudnVlXG4vLyBtb2R1bGUgaWQgPSAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9Ub3BNZW51LnZ1ZVxuLy8gbW9kdWxlIGNodW5rcyA9IDciXSwic291cmNlUm9vdCI6IiJ9