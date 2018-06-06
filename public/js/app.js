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
                message: '',
                first_name: '',
                last_name: '',
                phone: ''
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_gsap__ = __webpack_require__("./node_modules/gsap/esm/index.js");


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
  __webpack_require__.e/* require */(2).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("./resources/assets/js/components/pages/index/Clouds.vue")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
});

Vue.component("cube", function (resolve) {
  __webpack_require__.e/* require */(1).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("./resources/assets/js/components/pages/index/Cube.vue")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
});

Vue.component("clock", function (resolve) {
  __webpack_require__.e/* require */(5).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("./resources/assets/js/components/pages/price/Clock.vue")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
});

Vue.component("tools-block", function (resolve) {
  __webpack_require__.e/* require */(4).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("./resources/assets/js/components/pages/tools/ToolsBlock.vue")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
});

Vue.component("zoom", function (resolve) {
  __webpack_require__.e/* require */(0).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("./resources/assets/js/components/pages/portfolio/Zoom.vue")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
});

Vue.component("half-rotate", function (resolve) {
  __webpack_require__.e/* require */(3).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("./resources/assets/js/components/pages/workflow/HalfRotate.vue")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
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