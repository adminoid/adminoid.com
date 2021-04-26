webpackJsonp([8],{

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
        // this.$parent.$emit('stop-write',true);
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

  props: ['write'],

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
      eyeTransformWithAngle: 'translate(13.000000, 36.000000) rotate(40.000000) translate(-13.000000, -36.000000) translate(8.000000, 31.000000)',
      touch: false
    };
  },
  mounted: function mounted() {
    this.touch = window.navigator.userAgent.indexOf('Mobile') !== -1;
    this.checkTopOffset();
    // this.initFlicker();
    this.timeline = this.compileTimeline();
    this.$eye = $(this.$el).find(this.selectors.eye);

    // this.browser = this.detectBrowser();
  },


  created: function created() {
    // todo: addEventListener for touch
    window.addEventListener('scroll', this.checkTopOffset);
    window.addEventListener('mousemove', this.eyeMove);
    window.addEventListener('touchstart', this.eyeMove);
    window.addEventListener('touchmove', this.eyeMove);
  },

  beforeDestroy: function beforeDestroy() {
    window.removeEventListener('scroll', this.checkTopOffset);
    window.removeEventListener('mousemove', this.eyeMove);
    window.removeEventListener('touchstart', this.eyeMove);
    window.removeEventListener('touchmove', this.eyeMove);
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
    toWrite: function toWrite() {
      this.$parent.$emit('go-write', true);
    },

    // todo: init below method onTouch
    eyeMove: function eyeMove(e) {
      if (!this.reduced) return false;

      if (this.touch) {
        if (e.type !== 'mousemove') {
          this.cursor.x = e.changedTouches[0].clientX + this.getScrollOffset().left;
          this.cursor.y = e.changedTouches[0].clientY + this.getScrollOffset().top;
        }
      } else {
        this.cursor.x = e.pageX;
        this.cursor.y = e.pageY;
      }

      this.setAngle();
    },

    setAngle: function setAngle() {
      var eyeCenter = [this.$eye[0].getBoundingClientRect().left + this.getScrollOffset().left + this.$eye.width() / 2, this.$eye[0].getBoundingClientRect().top + this.getScrollOffset().top + this.$eye.height() / 2];
      var eyeAngle = Math.atan2(this.cursor.x - eyeCenter[0], -(this.cursor.y - eyeCenter[1])) * (180 / Math.PI) - 90;
      this.eyeTransformWithAngle = 'translate(13.000000, 36.000000) rotate(' + eyeAngle + ') translate(-13.000000, -36.000000) translate(8.000000, 31.000000)';
    },
    getScrollOffset: function getScrollOffset() {
      var doc = document.documentElement;
      return {
        left: (window.pageXOffset || doc.scrollLeft) - (doc.clientLeft || 0),
        top: (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0)
      };
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

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/WriteLink.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "WriteLink",

  methods: {
    goWrite: function goWrite() {
      this.$parent.$emit('go-write', true);
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-22324fd2\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/WriteLink.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "\na[data-v-22324fd2] {\n  font-weight: bold;\n}\n\n", "", {"version":3,"sources":["/Users/petja/PhpstormProjects/sites/adminoid.com/resources/assets/js/components/resources/assets/js/components/WriteLink.vue"],"names":[],"mappings":";AAkBA;EACA,kBAAA;CACA","file":"WriteLink.vue","sourcesContent":["<template>\n  <a href=\"#\" @click.prevent.stop=\"goWrite\"><slot></slot></a>\n</template>\n\n<script>\n  export default {\n    name: \"WriteLink\",\n\n    methods: {\n      goWrite () {\n        this.$parent.$emit('go-write',true);\n      }\n    }\n  }\n</script>\n\n<style scoped>\n\n  a {\n    font-weight: bold;\n  }\n\n</style>\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


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

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-22324fd2\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/WriteLink.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "a",
    {
      attrs: { href: "#" },
      on: {
        click: function($event) {
          $event.preventDefault()
          $event.stopPropagation()
          return _vm.goWrite($event)
        }
      }
    },
    [_vm._t("default")],
    2
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-loader/node_modules/vue-hot-reload-api")      .rerender("data-v-22324fd2", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-22324fd2\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/WriteLink.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-22324fd2\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/WriteLink.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("0d7186ce", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js?sourceMap!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-22324fd2\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./WriteLink.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js?sourceMap!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-22324fd2\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./WriteLink.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/vue-style-loader/lib/addStylesClient.js":
/***/ (function(module, exports, __webpack_require__) {

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/

var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

var listToStyles = __webpack_require__("./node_modules/vue-style-loader/lib/listToStyles.js")

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

module.exports = function (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),

/***/ "./node_modules/vue-style-loader/lib/listToStyles.js":
/***/ (function(module, exports) {

/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
module.exports = function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_WriteLink__ = __webpack_require__("./resources/assets/js/components/WriteLink.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_WriteLink___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_WriteLink__);

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
  __webpack_require__.e/* require */(6).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("./resources/assets/js/components/pages/index/Clouds.vue")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
});

Vue.component("cube", function (resolve) {
  __webpack_require__.e/* require */(2).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("./resources/assets/js/components/pages/index/Cube.vue")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
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

Vue.component("video-background", function (resolve) {
  __webpack_require__.e/* require */(1).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("./resources/assets/js/components/pages/portfolio/VideoBackground.vue")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
});

Vue.component("half-rotate", function (resolve) {
  __webpack_require__.e/* require */(3).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("./resources/assets/js/components/pages/workflow/HalfRotate.vue")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
});

var app = new Vue({

  el: '#app',

  components: {
    TopMenu: __WEBPACK_IMPORTED_MODULE_0__components_TopMenu___default.a, FeedbackForm: __WEBPACK_IMPORTED_MODULE_1__components_FeedbackForm___default.a, WriteLink: __WEBPACK_IMPORTED_MODULE_2__components_WriteLink___default.a
  },

  data: function data() {
    return {
      write: false
    };
  }
});

app.$on('go-write', function () {

  app.write = true;

  var $modal = $('#super-modal');
  // .modal('setting', 'transition', 'horizontal flip').modal('toggle');

  $modal.modal({
    transition: 'horizontal flip',
    onHide: function onHide() {
      setTimeout(function () {
        app.write = false;
      }, 333);
    }
  }).modal('show');
}).$on('stop-write', function () {

  setTimeout(function () {
    app.write = false;
  }, 333);
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

/***/ "./resources/assets/js/components/WriteLink.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-22324fd2\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/WriteLink.vue")
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/WriteLink.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-22324fd2\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/WriteLink.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-22324fd2"
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
Component.options.__file = "resources/assets/js/components/WriteLink.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-22324fd2", Component.options)
  } else {
    hotAPI.reload("data-v-22324fd2", Component.options)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL0ZlZWRiYWNrRm9ybS52dWUiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9Ub3BNZW51LnZ1ZSIsIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL1dyaXRlTGluay52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL1dyaXRlTGluay52dWU/NzU0NyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9Xcml0ZUxpbmsudnVlP2IyZTQiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL1dyaXRlTGluay52dWU/MWUxMiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9saXN0VG9TdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9ib290c3RyYXAuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL0ZlZWRiYWNrRm9ybS52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL1RvcE1lbnUudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9Xcml0ZUxpbmsudnVlIl0sIm5hbWVzIjpbInJlcXVpcmUiLCJ3aW5kb3ciLCJWdWUiLCJjb21wb25lbnQiLCJyZXNvbHZlIiwiYXBwIiwiZWwiLCJjb21wb25lbnRzIiwiVG9wTWVudSIsIkZlZWRiYWNrRm9ybSIsIldyaXRlTGluayIsImRhdGEiLCJ3cml0ZSIsIiRvbiIsIiRtb2RhbCIsIiQiLCJtb2RhbCIsInRyYW5zaXRpb24iLCJvbkhpZGUiLCJzZXRUaW1lb3V0IiwiXyIsImpRdWVyeSIsImUiLCJheGlvcyIsImRlZmF1bHRzIiwiaGVhZGVycyIsImNvbW1vbiIsInRva2VuIiwiZG9jdW1lbnQiLCJoZWFkIiwicXVlcnlTZWxlY3RvciIsImNvbnRlbnQiLCJjb25zb2xlIiwiZXJyb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDQTs7SUFDQSxNO0FBQ0E7QUFBQTs7QUFDQTtBQUNBOzs7O3dCQUNBLEssRUFBQTtBQUNBO0FBQ0E7OzswQkFDQTtBQUNBO0FBQ0E7Ozt3QkFDQSxLLEVBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7MkJBQ0EsTSxFQUFBO0FBQ0E7QUFDQTs7OzBCQUNBLEssRUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0lBR0EsSTtBQUNBO0FBQUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7MkJBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7NEJBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7MkJBQ0EsVyxFQUFBLEcsRUFBQTtBQUFBOztBQUNBO0FBQ0Esc0ZBQ0EsSUFEQSxDQUNBO0FBQ0E7QUFDQTtBQUNBLFNBSkEsRUFLQSxLQUxBLENBS0E7QUFDQTtBQUNBLFNBUEE7QUFRQSxPQVRBO0FBVUE7Ozs4QkFDQSxJLEVBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OzJCQUNBLE0sRUFBQTtBQUNBO0FBQ0E7Ozs7OztBQUdBO0FBQ0EsTUFEQSxrQkFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFEQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFEQTtBQVNBLEdBWEE7O0FBWUE7QUFDQSxZQURBLHNCQUNBO0FBQUE7O0FBQ0EscURBQ0EsSUFEQSxDQUNBO0FBQ0E7QUFDQTtBQUNBLE9BSkE7QUFLQTtBQUNBO0FBUkE7QUFaQSxHOzs7Ozs7Ozs7OztBQ3hFQTtBQUNBOztBQUVBLGtCQUZBOztBQUlBLE1BSkEsa0JBSUE7QUFDQTtBQUNBO0FBQ0Esb0JBRkE7QUFHQSxrQkFIQTtBQUlBO0FBQ0E7QUFEQSxPQUpBO0FBT0E7QUFDQSxZQURBO0FBRUE7QUFGQSxPQVBBO0FBV0E7QUFDQTtBQUNBLHFDQURBO0FBRUEsZ0NBRkE7QUFHQSxrQ0FIQTtBQUlBLDhCQUpBO0FBS0EsdUJBTEE7QUFNQSxnQ0FOQTtBQU9BLDZDQVBBO0FBUUEsdUNBUkE7QUFTQSx3Q0FUQTtBQVVBLDhCQVZBO0FBV0Esb0NBWEE7QUFZQSxnREFaQTtBQWFBLDhCQWJBO0FBY0EsOEJBZEE7QUFlQTtBQUNBLGtEQWhCQTtBQWlCQTtBQWpCQSxTQURBO0FBb0JBO0FBcEJBLE9BWEE7QUFpQ0Esb0JBakNBO0FBa0NBLGNBbENBO0FBbUNBLGlKQW5DQTtBQW9DQTtBQXBDQTtBQXNDQSxHQTNDQTtBQTZDQSxTQTdDQSxxQkE2Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FyREE7OztBQXVEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQTdEQTs7QUErREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBcEVBOztBQXNFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BRkEsTUFFQTtBQUNBO0FBQ0E7QUFDQTtBQVBBLEdBdEVBOztBQWdGQTtBQUNBO0FBQ0E7QUFDQSxLQUhBOztBQUtBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FMQSxNQUtBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBRUEsS0FyQkE7O0FBdUJBLFlBdkJBLHNCQXVCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBM0JBO0FBNkJBLG1CQTdCQSw2QkE2QkE7QUFDQTtBQUNBO0FBQ0EsNEVBREE7QUFFQTtBQUZBO0FBSUEsS0FuQ0E7OztBQXFDQTtBQUNBLDZCQUNBLE9BREEsQ0FDQTtBQUNBO0FBREEsT0FEQSxFQUlBLE9BSkEsQ0FJQSxRQUpBO0FBS0EsS0EzQ0E7O0FBNkNBO0FBQ0E7QUFDQTtBQUNBLHVCQURBO0FBRUEsa0JBRkE7QUFHQSxrQkFIQTtBQUlBO0FBSkE7QUFNQTtBQUNBLHVCQURBO0FBRUEsa0JBRkE7QUFHQSxrQkFIQTtBQUlBLDZCQUpBO0FBS0E7QUFMQTtBQU9BLG1HQUNBO0FBQ0E7QUFEQSxPQURBLEVBSUE7QUFDQSx1QkFEQTtBQUVBLGtCQUZBO0FBR0EsNkJBSEE7QUFJQTtBQUpBLE9BSkE7QUFVQSxzR0FDQTtBQUNBO0FBREEsT0FEQSxFQUlBO0FBQ0EsdUJBREE7QUFFQSxrQkFGQTtBQUdBLDZCQUhBO0FBSUE7QUFKQSxPQUpBO0FBVUEsS0FoRkE7O0FBa0ZBO0FBQUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FIQSxNQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0ExRkE7O0FBNEZBO0FBQ0E7QUFDQSxLQTlGQTs7QUFnR0E7QUFDQTtBQUFBLFVBQ0EsZUFEQTtBQUFBLFVBRUEsc0NBRkE7QUFBQSxVQUdBLG9EQUhBO0FBQUEsVUFJQSxzREFKQTtBQUFBLFVBS0Esa0RBTEE7QUFBQSxVQU1BLDRDQU5BO0FBQUEsVUFPQSxvREFQQTtBQUFBLFVBUUEsNERBUkE7QUFBQSxVQVNBLDhDQUNBLDZGQURBLENBVEE7QUFBQSxVQVlBLDZFQVpBO0FBQUEsVUFhQSx3REFiQTtBQUFBLFVBY0Esb0dBZEE7O0FBZ0JBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQURBLFNBRUE7QUFDQSxvQkFEQTtBQUVBO0FBRkEsT0FGQSxHQU1BLEdBTkEsQ0FNQSxrSEFOQSxFQU9BLEdBUEEsQ0FPQSxpSEFQQSxFQVFBLEdBUkEsQ0FRQSxrSEFSQSxFQVNBLEdBVEEsQ0FTQSxpSEFUQSxFQVVBLEdBVkEsQ0FVQSxrSEFWQSxFQVdBLEdBWEEsQ0FXQSxpSEFYQSxFQVlBLEdBWkEsQ0FZQSxrSEFaQTs7QUFjQTtBQUNBO0FBQ0E7QUFEQSxTQUVBO0FBQ0EscUJBREE7QUFFQTtBQUZBLE9BRkE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0ZBQ0EsMkJBREEsRUFFQSwyREFGQTtBQUlBO0FBSkEsT0FLQSxHQUxBLENBS0EsaUVBQ0EsMkRBREEsQ0FMQTs7QUFTQTtBQUNBO0FBQ0EsZ0NBQ0EsZ0JBREEsRUFFQSxnQkFGQTs7QUFLQTtBQUNBO0FBQ0EseUZBQ0EsMkRBREEsR0FFQSxTQUZBOztBQUlBO0FBQ0E7QUFDQSw2RkFDQSxnQkFEQSxHQUVBLFNBRkE7O0FBSUE7QUFDQTtBQUNBLHFIQUNBLGVBREEsRUFFQSxnQkFGQTs7QUFLQTtBQUNBO0FBQ0EsMEJBQ0EsOEZBQ0EsNEJBREEsRUFFQSw2QkFGQSxFQUdBLElBSEEsQ0FEQTs7QUFRQTtBQUNBO0FBQ0EsbUhBQ0EsZ0JBREEsRUFFQSxnQkFGQSxHQUdBLEdBSEE7O0FBS0E7QUFDQTtBQUNBLHFIQUNBLG9DQURBLEVBRUEsdUNBRkEsRUFHQSxDQUhBLEdBSUEsU0FKQTs7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBak9BO0FBaEZBLEc7Ozs7Ozs7Ozs7Ozs7O0FDR0E7QUFDQSxtQkFEQTs7QUFHQTtBQUNBLFdBREEscUJBQ0E7QUFDQTtBQUNBO0FBSEE7QUFIQSxHOzs7Ozs7O0FDTEE7QUFDQTs7O0FBR0E7QUFDQSwrQ0FBZ0Qsc0JBQXNCLEdBQUcsWUFBWSwrS0FBK0ssTUFBTSxXQUFXLDBLQUEwSyw0Q0FBNEMsb0JBQW9CLDhDQUE4QyxTQUFTLE9BQU8sS0FBSyxzQ0FBc0Msd0JBQXdCLEtBQUssaUNBQWlDOztBQUV0cUI7Ozs7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyxnQkFBZ0I7QUFDbkQsSUFBSTtBQUNKO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixpQkFBaUI7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLG9CQUFvQjtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvREFBb0QsY0FBYzs7QUFFbEU7QUFDQTs7Ozs7Ozs7QUMzRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ3RHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsWUFBWTtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7QUM1QkE7O0FBRUE7QUFDQSxzVUFBa087QUFDbE87QUFDQTtBQUNBO0FBQ0EseUhBQXdIO0FBQ3hIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0pBQWdKLGlGQUFpRjtBQUNqTyx5SkFBeUosaUZBQWlGO0FBQzFPO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLGdDQUFnQyxVQUFVLEVBQUU7QUFDNUMsQzs7Ozs7OztBQ3BCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSxpQkFBaUI7QUFDM0I7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG1CQUFtQixtQkFBbUI7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsbUJBQW1CLHNCQUFzQjtBQUN6QztBQUNBO0FBQ0EsdUJBQXVCLDJCQUEyQjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQixtQkFBbUI7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsMkJBQTJCO0FBQ2hEO0FBQ0E7QUFDQSxZQUFZLHVCQUF1QjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EscUJBQXFCLHVCQUF1QjtBQUM1QztBQUNBO0FBQ0EsOEJBQThCO0FBQzlCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUM3TkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsaUJBQWlCO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyx3QkFBd0I7QUFDM0QsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekJBOzs7Ozs7QUFNQSxtQkFBQUEsQ0FBUSxvQ0FBUjs7QUFFQUMsT0FBT0MsR0FBUCxHQUFhLG1CQUFBRixDQUFRLHVDQUFSLENBQWI7O0FBRUE7Ozs7OztBQU1BO0FBQ0E7QUFDQTs7QUFFQUUsSUFBSUMsU0FBSixDQUFjLFFBQWQsRUFBd0IsVUFBVUMsT0FBVixFQUFtQjtBQUN6Q0osRUFBQSx3REFBUSxxQ0FBQyw4RUFBRCxDQUFSLElBQTZDSSxPLDhDQUE3QztBQUNELENBRkQ7O0FBSUFGLElBQUlDLFNBQUosQ0FBYyxNQUFkLEVBQXNCLFVBQVVDLE9BQVYsRUFBbUI7QUFDdkNKLEVBQUEsd0RBQVEscUNBQUMsNEVBQUQsQ0FBUixJQUEyQ0ksTyw4Q0FBM0M7QUFDRCxDQUZEOztBQUlBRixJQUFJQyxTQUFKLENBQWMsT0FBZCxFQUF1QixVQUFVQyxPQUFWLEVBQW1CO0FBQ3hDSixFQUFBLHdEQUFRLHFDQUFDLDZFQUFELENBQVIsSUFBZ0RJLE8sOENBQWhEO0FBQ0QsQ0FGRDs7QUFJQUYsSUFBSUMsU0FBSixDQUFjLGFBQWQsRUFBNkIsVUFBVUMsT0FBVixFQUFtQjtBQUM5Q0osRUFBQSx3REFBUSxxQ0FBQyxrRkFBRCxDQUFSLElBQXFESSxPLDhDQUFyRDtBQUNELENBRkQ7O0FBSUFGLElBQUlDLFNBQUosQ0FBYyxNQUFkLEVBQXNCLFVBQVVDLE9BQVYsRUFBbUI7QUFDdkNKLEVBQUEsd0RBQVEscUNBQUMsZ0ZBQUQsQ0FBUixJQUFtREksTyw4Q0FBbkQ7QUFDRCxDQUZEOztBQUlBRixJQUFJQyxTQUFKLENBQWMsa0JBQWQsRUFBa0MsVUFBVUMsT0FBVixFQUFtQjtBQUNuREosRUFBQSx3REFBUSxxQ0FBQywyRkFBRCxDQUFSLElBQThESSxPLDhDQUE5RDtBQUNELENBRkQ7O0FBSUFGLElBQUlDLFNBQUosQ0FBYyxhQUFkLEVBQTZCLFVBQVVDLE9BQVYsRUFBbUI7QUFDOUNKLEVBQUEsd0RBQVEscUNBQUMscUZBQUQsQ0FBUixJQUF3REksTyw4Q0FBeEQ7QUFDRCxDQUZEOztBQUlBLElBQU1DLE1BQU0sSUFBSUgsR0FBSixDQUFROztBQUVsQkksTUFBSSxNQUZjOztBQUlsQkMsY0FBWTtBQUNWQyxhQUFBLDJEQURVLEVBQ0RDLGNBQUEsZ0VBREMsRUFDYUMsV0FBQSw2REFBQUE7QUFEYixHQUpNOztBQVFsQkMsTUFSa0Isa0JBUVY7QUFDTixXQUFPO0FBQ0xDLGFBQU87QUFERixLQUFQO0FBR0Q7QUFaaUIsQ0FBUixDQUFaOztBQWdCQVAsSUFDR1EsR0FESCxDQUNPLFVBRFAsRUFDbUIsWUFBTTs7QUFFckJSLE1BQUlPLEtBQUosR0FBWSxJQUFaOztBQUVBLE1BQUlFLFNBQVNDLEVBQUUsY0FBRixDQUFiO0FBQ0E7O0FBRUFELFNBQU9FLEtBQVAsQ0FBYTtBQUNYQyxnQkFBWSxpQkFERDtBQUVYQyxZQUFRLGtCQUFVO0FBQ2hCQyxpQkFBVyxZQUFNO0FBQ2ZkLFlBQUlPLEtBQUosR0FBWSxLQUFaO0FBQ0QsT0FGRCxFQUVHLEdBRkg7QUFHRDtBQU5VLEdBQWIsRUFPR0ksS0FQSCxDQU9TLE1BUFQ7QUFTRCxDQWpCSCxFQWtCR0gsR0FsQkgsQ0FrQk8sWUFsQlAsRUFrQnFCLFlBQU07O0FBRXZCTSxhQUFXLFlBQU07QUFDZmQsUUFBSU8sS0FBSixHQUFZLEtBQVo7QUFDRCxHQUZELEVBRUcsR0FGSDtBQUlELENBeEJILEU7Ozs7Ozs7O0FDaEVBWCxPQUFPbUIsQ0FBUCxHQUFXLG1CQUFBcEIsQ0FBUSxpQ0FBUixDQUFYOztBQUVBOzs7Ozs7QUFNQSxJQUFJO0FBQ0FDLFNBQU9jLENBQVAsR0FBV2QsT0FBT29CLE1BQVAsR0FBZ0IsbUJBQUFyQixDQUFRLHNDQUFSLENBQTNCOztBQUVBO0FBQ0gsQ0FKRCxDQUlFLE9BQU9zQixDQUFQLEVBQVUsQ0FBRTs7QUFFZDs7Ozs7O0FBTUFyQixPQUFPc0IsS0FBUCxHQUFlLG1CQUFBdkIsQ0FBUSwrQkFBUixDQUFmOztBQUVBQyxPQUFPc0IsS0FBUCxDQUFhQyxRQUFiLENBQXNCQyxPQUF0QixDQUE4QkMsTUFBOUIsQ0FBcUMsa0JBQXJDLElBQTJELGdCQUEzRDs7QUFFQTs7Ozs7O0FBTUEsSUFBSUMsUUFBUUMsU0FBU0MsSUFBVCxDQUFjQyxhQUFkLENBQTRCLHlCQUE1QixDQUFaOztBQUVBLElBQUlILEtBQUosRUFBVztBQUNQMUIsU0FBT3NCLEtBQVAsQ0FBYUMsUUFBYixDQUFzQkMsT0FBdEIsQ0FBOEJDLE1BQTlCLENBQXFDLGNBQXJDLElBQXVEQyxNQUFNSSxPQUE3RDtBQUNILENBRkQsTUFFTztBQUNIQyxVQUFRQyxLQUFSLENBQWMsdUVBQWQ7QUFDSDs7QUFFRDs7Ozs7O0FBTUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTTs7Ozs7OztBQ3BEQTtBQUNBO0FBQ0E7QUFDQSw2YUFBc1I7QUFDdFI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7QUFFRDs7Ozs7Ozs7QUN4Q0E7QUFDQTtBQUNBO0FBQ0Esd2FBQXNSO0FBQ3RSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7O0FBRUQ7Ozs7Ozs7O0FDeENBO0FBQ0E7QUFDQTtBQUNBLG1XQUFrTTtBQUNsTTtBQUNBO0FBQ0E7QUFDQSwwYUFBc1I7QUFDdFI7QUFDQSxrU0FBK0s7QUFDL0s7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDOztBQUVEIiwiZmlsZSI6Ii9qcy9hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8c2NyaXB0PlxuICBpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG4gIGNsYXNzIEVycm9ycyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICB0aGlzLmVycm9ycyA9IHt9XG4gICAgfVxuICAgIGhhcyhmaWVsZCkge1xuICAgICAgcmV0dXJuIHRoaXMuZXJyb3JzLmhhc093blByb3BlcnR5KGZpZWxkKVxuICAgIH1cbiAgICBhbnkoKSB7XG4gICAgICByZXR1cm4gT2JqZWN0LmtleXModGhpcy5lcnJvcnMpLmxlbmd0aCA+IDBcbiAgICB9XG4gICAgZ2V0KGZpZWxkKSB7XG4gICAgICBjb25zb2xlLmxvZyhmaWVsZCk7XG4gICAgICBpZiAodGhpcy5lcnJvcnNbZmllbGRdKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVycm9yc1tmaWVsZF1bMF1cbiAgICAgIH1cbiAgICB9XG4gICAgcmVjb3JkKGVycm9ycykge1xuICAgICAgdGhpcy5lcnJvcnMgPSBlcnJvcnNcbiAgICB9XG4gICAgY2xlYXIoZmllbGQpIHtcbiAgICAgIGlmIChmaWVsZCkge1xuICAgICAgICBkZWxldGUgdGhpcy5lcnJvcnNbZmllbGRdXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgdGhpcy5lcnJvcnMgPSB7fVxuICAgIH1cbiAgfVxuXG4gIGNsYXNzIEZvcm0ge1xuICAgIGNvbnN0cnVjdG9yKGRhdGEpIHtcbiAgICAgIHRoaXMub3JpZ2luYWxEYXRhID0gZGF0YTtcbiAgICAgIGZvciAobGV0IGZpZWxkIGluIGRhdGEpIHtcbiAgICAgICAgdGhpc1tmaWVsZF0gPSBkYXRhW2ZpZWxkXVxuICAgICAgfVxuICAgICAgdGhpcy5lcnJvcnMgPSBuZXcgRXJyb3JzKClcbiAgICAgIHRoaXMuc3VjY2VzcyA9IGZhbHNlXG4gICAgfVxuICAgIGRhdGEoKSB7XG4gICAgICBsZXQgZGF0YSA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMpXG4gICAgICBkZWxldGUgZGF0YS5vcmlnaW5hbERhdGFcbiAgICAgIGRlbGV0ZSBkYXRhLmVycm9yc1xuICAgICAgcmV0dXJuIGRhdGFcbiAgICB9XG4gICAgcmVzZXQoKSB7XG4gICAgICBmb3IgKGxldCBmaWVsZCBpbiB0aGlzLm9yaWdpbmFsRGF0YSkge1xuICAgICAgICB0aGlzW2ZpZWxkXSA9ICcnXG4gICAgICB9XG4gICAgICB0aGlzLmVycm9ycy5jbGVhcigpXG4gICAgfVxuICAgIHN1Ym1pdChyZXF1ZXN0VHlwZSwgdXJsKSB7XG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICBheGlvc1tyZXF1ZXN0VHlwZV0odXJsLCB0aGlzLmRhdGEoKSlcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgIHRoaXMub25TdWNjZXNzKHJlc3BvbnNlLmRhdGEpXG4gICAgICAgICAgcmVzb2x2ZShyZXNwb25zZS5kYXRhKVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgIHRoaXMub25GYWlsKGVycm9yLnJlc3BvbnNlLmRhdGEpXG4gICAgICAgIH0pXG4gICAgICB9KVxuICAgIH1cbiAgICBvblN1Y2Nlc3MoZGF0YSkge1xuICAgICAgdGhpcy5yZXNldCgpO1xuICAgICAgdGhpcy5tZXNzYWdlID0gZGF0YS5tZXNzYWdlO1xuICAgICAgdGhpcy5zdWNjZXNzID0gdHJ1ZTtcbiAgICB9XG4gICAgb25GYWlsKGVycm9ycykge1xuICAgICAgdGhpcy5lcnJvcnMucmVjb3JkKGVycm9ycy5lcnJvcnMpO1xuICAgIH1cbiAgfVxuXG4gIGV4cG9ydCBkZWZhdWx0IHtcbiAgICBkYXRhICgpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGZvcm06IG5ldyBGb3JtKHtcbiAgICAgICAgICBlbWFpbDogJycsXG4gICAgICAgICAgdGV4dDogJycsXG4gICAgICAgICAgLy8gZmlyc3RfbmFtZTogJycsXG4gICAgICAgICAgLy8gbGFzdF9uYW1lOiAnJyxcbiAgICAgICAgICAvLyBwaG9uZTogJycsXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICBvblN1Ym1pdCgpIHtcbiAgICAgICAgdGhpcy5mb3JtLnN1Ym1pdCgncG9zdCcsICcvZmVlZGJhY2stbWVzc2FnZXMnKVxuICAgICAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgdGhpcy5tZXNzYWdlID0gZGF0YS5tZXNzYWdlO1xuICAgICAgICAgICAgLy8gdGhpcy4kcGFyZW50LiRlbWl0KCdzdG9wLXdyaXRlJyx0cnVlKTtcbiAgICAgICAgICB9KTtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgLmNhdGNoKGVycm9ycyA9PiBjb25zb2xlLmxvZyhlcnJvcnMpKVxuICAgICAgfVxuICAgIH1cbiAgfVxuPC9zY3JpcHQ+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL0ZlZWRiYWNrRm9ybS52dWUiLCI8c2NyaXB0PlxuaW1wb3J0IHtUd2Vlbk1heCwgVGltZWxpbmVMaXRlfSBmcm9tICdnc2FwJ1xuZXhwb3J0IGRlZmF1bHQge1xuXG4gIHByb3BzOiBbJ3dyaXRlJ10sXG5cbiAgZGF0YSAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIC8vIGJyb3dzZXI6IDAsXG4gICAgICB0aW1lbGluZTogbnVsbCxcbiAgICAgIHRvcE9mZnNldDogMCxcbiAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgIHRvcE9mZnNldEZvclRvZ2dsZUFuaW1hdGlvbjogMzAwXG4gICAgICB9LFxuICAgICAgY3Vyc29yOiB7XG4gICAgICAgIHg6IDAsXG4gICAgICAgIHk6IDBcbiAgICAgIH0sXG4gICAgICBzZWxlY3RvcnM6IHtcbiAgICAgICAgZ3NhcDoge1xuICAgICAgICAgIHN2Z0xvZ286ICcjaGVhZGVyLWxvZ28tc3ZnJyxcbiAgICAgICAgICBsZWZ0SGFuZDogJyNsZWZ0LWhhbmQnLFxuICAgICAgICAgIHJpZ2h0SGFuZDogJyNyaWdodC1oYW5kJyxcbiAgICAgICAgICBtYW5Cb2R5OiAnI21hbi1mdWxsJyxcbiAgICAgICAgICBoZWFkOiAnI2hlYWQnLFxuICAgICAgICAgIGV5ZVB1cGlsOiAnI2V5ZS1wdXBpbCcsXG4gICAgICAgICAgdGV4dEFkbWlub2lkOiAnI3N0cmlwcGVkLWxvZ28tdGV4dCcsXG4gICAgICAgICAgdGV4dHNXZWJtYXN0ZXI6ICcjd2ViLU1hc3RlcicsXG4gICAgICAgICAgdGV4dHNXZWJtYXN0ZXJMZXR0ZXI6ICcud20tdGwnLFxuICAgICAgICAgIHRleHRXZWI6ICd0c3BhbiN3ZWInLFxuICAgICAgICAgIHRleHRNYXN0ZXI6ICd0c3BhbiNtYXN0ZXInLFxuICAgICAgICAgIHRleHRzV2VibWFzdGVyV3JhcHBlcjogJyNSZWN0YW5nbGUtMjEnLFxuICAgICAgICAgIHRvcE1lbnU6ICcjdG9wLW1lbnUnLFxuICAgICAgICAgIHRvcE1lbnVJdGVtOiAnLml0ZW0nLFxuICAgICAgICAgIC8vIGZsaWNrZXJcbiAgICAgICAgICByZWN0YW5nbGVDZW50ZXJDb2xvcjogJyNSZWN0YW5nbGUtR3JlZW4nLFxuICAgICAgICAgIHJlY3RhbmdsZXNCb3JkZXJDb2xvcjogJy5SZWN0YW5nbGUtUmVkJ1xuICAgICAgICB9LFxuICAgICAgICBleWU6ICcjZXllLXB1cGlsJ1xuICAgICAgfSxcbiAgICAgIHJlZHVjZWQ6IGZhbHNlLFxuICAgICAgJGV5ZToge30sXG4gICAgICBleWVUcmFuc2Zvcm1XaXRoQW5nbGU6ICd0cmFuc2xhdGUoMTMuMDAwMDAwLCAzNi4wMDAwMDApIHJvdGF0ZSg0MC4wMDAwMDApIHRyYW5zbGF0ZSgtMTMuMDAwMDAwLCAtMzYuMDAwMDAwKSB0cmFuc2xhdGUoOC4wMDAwMDAsIDMxLjAwMDAwMCknLFxuICAgICAgdG91Y2g6IGZhbHNlLFxuICAgIH1cbiAgfSxcblxuICBtb3VudGVkICgpIHtcbiAgICB0aGlzLnRvdWNoID0gd2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZignTW9iaWxlJykgIT09IC0xXG4gICAgdGhpcy5jaGVja1RvcE9mZnNldCgpO1xuICAgIC8vIHRoaXMuaW5pdEZsaWNrZXIoKTtcbiAgICB0aGlzLnRpbWVsaW5lID0gdGhpcy5jb21waWxlVGltZWxpbmUoKTtcbiAgICB0aGlzLiRleWUgPSAkKHRoaXMuJGVsKS5maW5kKHRoaXMuc2VsZWN0b3JzLmV5ZSk7XG5cbiAgICAvLyB0aGlzLmJyb3dzZXIgPSB0aGlzLmRldGVjdEJyb3dzZXIoKTtcbiAgfSxcblxuICBjcmVhdGVkOiBmdW5jdGlvbiAoKSB7XG4gICAgLy8gdG9kbzogYWRkRXZlbnRMaXN0ZW5lciBmb3IgdG91Y2hcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5jaGVja1RvcE9mZnNldClcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5leWVNb3ZlKVxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgdGhpcy5leWVNb3ZlKVxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCB0aGlzLmV5ZU1vdmUpXG4gIH0sXG5cbiAgYmVmb3JlRGVzdHJveTogZnVuY3Rpb24gKCkge1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLmNoZWNrVG9wT2Zmc2V0KVxuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzLmV5ZU1vdmUpXG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCB0aGlzLmV5ZU1vdmUpXG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIHRoaXMuZXllTW92ZSlcbiAgfSxcblxuICB3YXRjaDoge1xuICAgIHRvcE9mZnNldDogZnVuY3Rpb24gKHZhbCwgb2xkVmFsKSB7XG4gICAgICBpZiAob2xkVmFsIDwgdGhpcy5zZXR0aW5ncy50b3BPZmZzZXRGb3JUb2dnbGVBbmltYXRpb24gJiYgdmFsID49IHRoaXMuc2V0dGluZ3MudG9wT2Zmc2V0Rm9yVG9nZ2xlQW5pbWF0aW9uKSB7XG4gICAgICAgIHRoaXMucnVuTG9nb0FuaW1hdGlvbigpXG4gICAgICB9IGVsc2UgaWYgKG9sZFZhbCA+PSB0aGlzLnNldHRpbmdzLnRvcE9mZnNldEZvclRvZ2dsZUFuaW1hdGlvbiAmJiB2YWwgPCB0aGlzLnNldHRpbmdzLnRvcE9mZnNldEZvclRvZ2dsZUFuaW1hdGlvbikge1xuICAgICAgICB0aGlzLnJ1bkxvZ29BbmltYXRpb24oJ2JhY2t3YXJkJylcbiAgICAgIH1cbiAgICB9XG4gIH0sXG5cbiAgbWV0aG9kczoge1xuICAgIHRvV3JpdGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHRoaXMuJHBhcmVudC4kZW1pdCgnZ28td3JpdGUnLHRydWUpO1xuICAgIH0sXG5cbiAgICAvLyB0b2RvOiBpbml0IGJlbG93IG1ldGhvZCBvblRvdWNoXG4gICAgZXllTW92ZTogZnVuY3Rpb24gKGUpIHtcbiAgICAgIGlmICghdGhpcy5yZWR1Y2VkKSByZXR1cm4gZmFsc2VcblxuICAgICAgaWYgKHRoaXMudG91Y2gpIHtcbiAgICAgICAgaWYgKGUudHlwZSAhPT0gJ21vdXNlbW92ZScpIHtcbiAgICAgICAgICB0aGlzLmN1cnNvci54ID0gZS5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRYICsgdGhpcy5nZXRTY3JvbGxPZmZzZXQoKS5sZWZ0XG4gICAgICAgICAgdGhpcy5jdXJzb3IueSA9IGUuY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WSArIHRoaXMuZ2V0U2Nyb2xsT2Zmc2V0KCkudG9wXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY3Vyc29yLnggPSBlLnBhZ2VYXG4gICAgICAgIHRoaXMuY3Vyc29yLnkgPSBlLnBhZ2VZXG4gICAgICB9XG5cbiAgICAgIHRoaXMuc2V0QW5nbGUoKVxuXG4gICAgfSxcblxuICAgIHNldEFuZ2xlKCkge1xuICAgICAgbGV0IGV5ZUNlbnRlciA9IFt0aGlzLiRleWVbMF0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdCArIHRoaXMuZ2V0U2Nyb2xsT2Zmc2V0KCkubGVmdCArIHRoaXMuJGV5ZS53aWR0aCgpIC8gMiwgdGhpcy4kZXllWzBdLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCArIHRoaXMuZ2V0U2Nyb2xsT2Zmc2V0KCkudG9wICsgdGhpcy4kZXllLmhlaWdodCgpIC8gMl1cbiAgICAgIGxldCBleWVBbmdsZSA9IE1hdGguYXRhbjIodGhpcy5jdXJzb3IueCAtIGV5ZUNlbnRlclswXSwgLSh0aGlzLmN1cnNvci55IC0gZXllQ2VudGVyWzFdKSkgKiAoMTgwIC8gTWF0aC5QSSkgLSA5MFxuICAgICAgdGhpcy5leWVUcmFuc2Zvcm1XaXRoQW5nbGUgPSAndHJhbnNsYXRlKDEzLjAwMDAwMCwgMzYuMDAwMDAwKSByb3RhdGUoJyArIGV5ZUFuZ2xlICsgJykgdHJhbnNsYXRlKC0xMy4wMDAwMDAsIC0zNi4wMDAwMDApIHRyYW5zbGF0ZSg4LjAwMDAwMCwgMzEuMDAwMDAwKSc7XG4gICAgfSxcblxuICAgIGdldFNjcm9sbE9mZnNldCAoKSB7XG4gICAgICBjb25zdCBkb2MgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBsZWZ0OiAod2luZG93LnBhZ2VYT2Zmc2V0IHx8IGRvYy5zY3JvbGxMZWZ0KSAtIChkb2MuY2xpZW50TGVmdCB8fCAwKSxcbiAgICAgICAgdG9wOiAod2luZG93LnBhZ2VZT2Zmc2V0IHx8IGRvYy5zY3JvbGxUb3ApICAtIChkb2MuY2xpZW50VG9wIHx8IDApLFxuICAgICAgfTtcbiAgICB9LFxuXG4gICAgdG9nZ2xlU2lkZWJhcjogZnVuY3Rpb24gKCkge1xuICAgICAgJCgnI3RvcC1tZW51LXNpZGViYXInKVxuICAgICAgICAgIC5zaWRlYmFyKHtcbiAgICAgICAgICAgIHRyYW5zaXRpb246ICdvdmVybGF5J1xuICAgICAgICAgIH0pXG4gICAgICAgICAgLnNpZGViYXIoJ3RvZ2dsZScpXG4gICAgfSxcblxuICAgIGluaXRGbGlja2VyOiBmdW5jdGlvbiAoKSB7XG4gICAgICBjb25zdCBzdGVwID0gMTtcbiAgICAgIFR3ZWVuTWF4LnRvKHRoaXMuc2VsZWN0b3JzLmdzYXAucmVjdGFuZ2xlQ2VudGVyQ29sb3IsIHN0ZXAsIHtcbiAgICAgICAgZmlsbDogJyNDRDJFNDEnLFxuICAgICAgICByZXBlYXQ6IC0xLFxuICAgICAgICB5b3lvOiB0cnVlLFxuICAgICAgICByZXBlYXREZWxheTogc3RlcCAqIDNcbiAgICAgIH0pO1xuICAgICAgVHdlZW5NYXgudG8odGhpcy5zZWxlY3RvcnMuZ3NhcC5yZWN0YW5nbGVzQm9yZGVyQ29sb3IsIHN0ZXAsIHtcbiAgICAgICAgZmlsbDogJyMxRDYwQjUnLFxuICAgICAgICByZXBlYXQ6IC0xLFxuICAgICAgICB5b3lvOiB0cnVlLFxuICAgICAgICByZXBlYXREZWxheTogc3RlcCAqIDMsXG4gICAgICAgIGRlbGF5OiBzdGVwICogM1xuICAgICAgfSk7XG4gICAgICBUd2Vlbk1heC5mcm9tVG8odGhpcy5zZWxlY3RvcnMuZ3NhcC50ZXh0V2ViLCBzdGVwICogMixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBmaWxsOiAnI0ZGRkZGRidcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGZpbGw6ICcjRkY5ODFDJyxcbiAgICAgICAgICAgIHJlcGVhdDogLTEsXG4gICAgICAgICAgICByZXBlYXREZWxheTogc3RlcCAqIDIsXG4gICAgICAgICAgICB5b3lvOiB0cnVlXG4gICAgICAgICAgfSk7XG4gICAgICBUd2Vlbk1heC5mcm9tVG8odGhpcy5zZWxlY3RvcnMuZ3NhcC50ZXh0TWFzdGVyLCBzdGVwICogMixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBmaWxsOiAnI0ZGOTgxQydcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGZpbGw6ICcjRkZGRkZGJyxcbiAgICAgICAgICAgIHJlcGVhdDogLTEsXG4gICAgICAgICAgICByZXBlYXREZWxheTogc3RlcCAqIDIsXG4gICAgICAgICAgICB5b3lvOiB0cnVlXG4gICAgICAgICAgfSk7XG4gICAgfSxcblxuICAgIHJ1bkxvZ29BbmltYXRpb246IGZ1bmN0aW9uIChkaXJlY3Rpb24gPSAnZm9yd2FyZCcpIHtcbiAgICAgIGlmIChkaXJlY3Rpb24gPT09ICdmb3J3YXJkJykge1xuICAgICAgICB0aGlzLnJlZHVjZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLnRpbWVsaW5lLnBhdXNlKCkucGxheSgpO1xuICAgICAgfSBlbHNlIGlmIChkaXJlY3Rpb24gPT09ICdiYWNrd2FyZCcpIHtcbiAgICAgICAgdGhpcy5yZWR1Y2VkID0gZmFsc2U7XG4gICAgICAgIHRoaXMudGltZWxpbmUucGF1c2UoKS5yZXZlcnNlKCk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIGNoZWNrVG9wT2Zmc2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICB0aGlzLnRvcE9mZnNldCA9IHdpbmRvdy5wYWdlWU9mZnNldFxuICAgIH0sXG5cbiAgICBjb21waWxlVGltZWxpbmU6IGZ1bmN0aW9uICgpIHtcbiAgICAgIGxldCBwYXJ0MXRpbWUgPSAwLjIsXG4gICAgICAgICAgcGFydDJ0aW1lID0gMC41LFxuICAgICAgICAgICRsb2dvID0gJCh0aGlzLnNlbGVjdG9ycy5nc2FwLnN2Z0xvZ28pLFxuICAgICAgICAgICRsZWZ0SGFuZCA9ICRsb2dvLmZpbmQodGhpcy5zZWxlY3RvcnMuZ3NhcC5sZWZ0SGFuZCksXG4gICAgICAgICAgJHJpZ2h0SGFuZCA9ICRsb2dvLmZpbmQodGhpcy5zZWxlY3RvcnMuZ3NhcC5yaWdodEhhbmQpLFxuICAgICAgICAgICRtYW5Cb2R5ID0gJGxvZ28uZmluZCh0aGlzLnNlbGVjdG9ycy5nc2FwLm1hbkJvZHkpLFxuICAgICAgICAgICRoZWFkID0gJGxvZ28uZmluZCh0aGlzLnNlbGVjdG9ycy5nc2FwLmhlYWQpLFxuICAgICAgICAgICRleWVQdXBpbCA9ICRsb2dvLmZpbmQodGhpcy5zZWxlY3RvcnMuZ3NhcC5leWVQdXBpbCksXG4gICAgICAgICAgJHRleHRBZG1pbm9pZCA9ICRsb2dvLmZpbmQodGhpcy5zZWxlY3RvcnMuZ3NhcC50ZXh0QWRtaW5vaWQpLFxuICAgICAgICAgIGxldHRlcnNXZWJtYXN0ZXIgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChcbiAgICAgICAgICAgICAgJGxvZ28uZmluZCh0aGlzLnNlbGVjdG9ycy5nc2FwLnRleHRzV2VibWFzdGVyKS5maW5kKHRoaXMuc2VsZWN0b3JzLmdzYXAudGV4dHNXZWJtYXN0ZXJMZXR0ZXIpXG4gICAgICAgICAgKSxcbiAgICAgICAgICB0ZXh0c1dlYm1hc3RlcldyYXBwZXIgPSAkbG9nby5maW5kKHRoaXMuc2VsZWN0b3JzLmdzYXAudGV4dHNXZWJtYXN0ZXJXcmFwcGVyKSxcbiAgICAgICAgICAkdG9wTWVudSA9ICQoZG9jdW1lbnQpLmZpbmQodGhpcy5zZWxlY3RvcnMuZ3NhcC50b3BNZW51KSxcbiAgICAgICAgICB0b3BNZW51SXRlbXNGb3JSZXNpemluZyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKCR0b3BNZW51LmZpbmQodGhpcy5zZWxlY3RvcnMuZ3NhcC50b3BNZW51SXRlbSkpO1xuXG4gICAgICB0b3BNZW51SXRlbXNGb3JSZXNpemluZy5wdXNoKCR0b3BNZW51KTtcblxuICAgICAgbGV0IHRsTGVmdEhhbmQgPSBuZXcgVGltZWxpbmVMaXRlKCk7XG5cbiAgICAgIC8vIEhhbmRzICh3YXZpbmcpXG4gICAgICB0bExlZnRIYW5kLmFkZChUd2Vlbk1heC5mcm9tVG8oJGxlZnRIYW5kLCAwLjA4LCB7XG4gICAgICAgIHJvdGF0aW9uOiAwXG4gICAgICB9LCB7XG4gICAgICAgIHJvdGF0aW9uOiAzNSxcbiAgICAgICAgdHJhbnNmb3JtT3JpZ2luOiAnOTAlIDEwMCUnXG4gICAgICB9KSlcbiAgICAgICAgICAuYWRkKFR3ZWVuTWF4LnRvKCRsZWZ0SGFuZCwgMC4wOCwge3JvdGF0aW9uOiAtNTAsIHRyYW5zZm9ybU9yaWdpbjogJzkwJSAxMDAlJ30pKVxuICAgICAgICAgIC5hZGQoVHdlZW5NYXgudG8oJGxlZnRIYW5kLCAwLjA4LCB7cm90YXRpb246IDM1LCB0cmFuc2Zvcm1PcmlnaW46ICc5MCUgMTAwJSd9KSlcbiAgICAgICAgICAuYWRkKFR3ZWVuTWF4LnRvKCRsZWZ0SGFuZCwgMC4wOCwge3JvdGF0aW9uOiAtNTAsIHRyYW5zZm9ybU9yaWdpbjogJzkwJSAxMDAlJ30pKVxuICAgICAgICAgIC5hZGQoVHdlZW5NYXgudG8oJGxlZnRIYW5kLCAwLjA4LCB7cm90YXRpb246IDM1LCB0cmFuc2Zvcm1PcmlnaW46ICc5MCUgMTAwJSd9KSlcbiAgICAgICAgICAuYWRkKFR3ZWVuTWF4LnRvKCRsZWZ0SGFuZCwgMC4wOCwge3JvdGF0aW9uOiAtNTAsIHRyYW5zZm9ybU9yaWdpbjogJzkwJSAxMDAlJ30pKVxuICAgICAgICAgIC5hZGQoVHdlZW5NYXgudG8oJGxlZnRIYW5kLCAwLjEwLCB7cm90YXRpb246IDM1LCB0cmFuc2Zvcm1PcmlnaW46ICc5MCUgMTAwJSd9KSlcbiAgICAgICAgICAuYWRkKFR3ZWVuTWF4LnRvKCRsZWZ0SGFuZCwgMC4xNSwge3JvdGF0aW9uOiAtNzUsIHRyYW5zZm9ybU9yaWdpbjogJzkwJSAxMDAlJ30pKTtcblxuICAgICAgbGV0IHRsUmlnaHRIYW5kID0gbmV3IFRpbWVsaW5lTGl0ZSgpO1xuICAgICAgdGxSaWdodEhhbmQuYWRkKFR3ZWVuTWF4LmZyb21UbygkcmlnaHRIYW5kLCAwLjA4LCB7XG4gICAgICAgIHJvdGF0aW9uOiAwXG4gICAgICB9LCB7XG4gICAgICAgIHJvdGF0aW9uOiAtMzUsXG4gICAgICAgIHRyYW5zZm9ybU9yaWdpbjogJzEwJSAxMDAlJ1xuICAgICAgfSkpO1xuICAgICAgdGxSaWdodEhhbmQuYWRkKFR3ZWVuTWF4LnRvKCRyaWdodEhhbmQsIDAuMDgsIHtyb3RhdGlvbjogNTAsIHRyYW5zZm9ybU9yaWdpbjogJzEwJSAxMDAlJ30pKTtcbiAgICAgIHRsUmlnaHRIYW5kLmFkZChUd2Vlbk1heC50bygkcmlnaHRIYW5kLCAwLjA4LCB7cm90YXRpb246IC0zNSwgdHJhbnNmb3JtT3JpZ2luOiAnMTAlIDEwMCUnfSkpO1xuICAgICAgdGxSaWdodEhhbmQuYWRkKFR3ZWVuTWF4LnRvKCRyaWdodEhhbmQsIDAuMDgsIHtyb3RhdGlvbjogNTAsIHRyYW5zZm9ybU9yaWdpbjogJzEwJSAxMDAlJ30pKTtcbiAgICAgIHRsUmlnaHRIYW5kLmFkZChUd2Vlbk1heC50bygkcmlnaHRIYW5kLCAwLjA4LCB7cm90YXRpb246IC0zNSwgdHJhbnNmb3JtT3JpZ2luOiAnMTAlIDEwMCUnfSkpO1xuICAgICAgdGxSaWdodEhhbmQuYWRkKFR3ZWVuTWF4LnRvKCRyaWdodEhhbmQsIDAuMDgsIHtyb3RhdGlvbjogNTAsIHRyYW5zZm9ybU9yaWdpbjogJzEwJSAxMDAlJ30pKTtcbiAgICAgIHRsUmlnaHRIYW5kLmFkZChUd2Vlbk1heC50bygkcmlnaHRIYW5kLCAwLjEwLCB7cm90YXRpb246IC0zNSwgdHJhbnNmb3JtT3JpZ2luOiAnMTAlIDEwMCUnfSkpO1xuICAgICAgdGxSaWdodEhhbmQuYWRkKFR3ZWVuTWF4LnRvKCRyaWdodEhhbmQsIDAuMTUsIHtyb3RhdGlvbjogNzUsIHRyYW5zZm9ybU9yaWdpbjogJzEwJSAxMDAlJ30pKTtcbiAgICAgIGxldCB0bEhhbmRzID0gbmV3IFRpbWVsaW5lTGl0ZSgpO1xuICAgICAgdGxIYW5kcy5hZGQodGxMZWZ0SGFuZCwgMCk7XG4gICAgICB0bEhhbmRzLmFkZCh0bFJpZ2h0SGFuZCwgMCk7XG5cbiAgICAgIC8vIEJvZHksIHBhcnQgMVxuICAgICAgbGV0IHRsQm9keSA9IG5ldyBUaW1lbGluZUxpdGUoKTtcbiAgICAgIHRsQm9keS5hZGQoVHdlZW5NYXgudG8oJG1hbkJvZHksIDAuMixcbiAgICAgICAgICB7eTogMCwgeDogMCwgcm90YXRpb246IDB9LFxuICAgICAgICAgIHt5OiAtMTAsIHg6IDIwLCByb3RhdGlvbjogMzUsIHRyYW5zZm9ybU9yaWdpbjogJzUwJSA1MCUnfVxuICAgICAgKSlcbiAgICAgICAgICAvLyBCb2R5LCBwYXJ0IDJcbiAgICAgICAgICAuYWRkKFR3ZWVuTWF4LnRvKCRtYW5Cb2R5LCAwLjUsXG4gICAgICAgICAgICAgIHt5OiAtNSwgeDogMTgwLCByb3RhdGlvbjogOTAsIHRyYW5zZm9ybU9yaWdpbjogJzUwJSA1MCUnfVxuICAgICAgICAgICkpO1xuXG4gICAgICAvLyBIZWFkXG4gICAgICBsZXQgdGxIZWFkID0gbmV3IFRpbWVsaW5lTGl0ZSgpO1xuICAgICAgdGxIZWFkLmZyb21UbygkaGVhZCwgMC4zLFxuICAgICAgICAgIHthdXRvQWxwaGE6IDF9LFxuICAgICAgICAgIHthdXRvQWxwaGE6IDB9XG4gICAgICApO1xuXG4gICAgICAvLyBTVkcgaW1nIHNpemUgKGJlZ2luIGZyb20gcGFydDF0aW1lKVxuICAgICAgbGV0IHRsTG9nb1NpemUgPSBuZXcgVGltZWxpbmVMaXRlKCk7XG4gICAgICB0bExvZ29TaXplLmFkZChUd2Vlbk1heC50bygkbG9nbywgcGFydDF0aW1lLFxuICAgICAgICAgIHthdHRyOiB7dmlld0JveDogJzAgMCAyMTkgNDInfSwgd2lkdGg6IDIxOSwgaGVpZ2h0OiA0Mn1cbiAgICAgICksIHBhcnQxdGltZSk7XG5cbiAgICAgIC8vIEV5ZS1wdXBpbFxuICAgICAgbGV0IHRsRXllUHVwaWwgPSBuZXcgVGltZWxpbmVMaXRlKCk7XG4gICAgICB0bEV5ZVB1cGlsLmFkZChUd2Vlbk1heC50bygkZXllUHVwaWwsIHBhcnQxdGltZSxcbiAgICAgICAgICB7YXV0b0FscGhhOiAxfVxuICAgICAgKSwgcGFydDF0aW1lKTtcblxuICAgICAgLy8gVGV4dCBhZG1pbm9pZFxuICAgICAgbGV0IHRsVGV4dEFkbWlub2lkID0gbmV3IFRpbWVsaW5lTGl0ZSgpO1xuICAgICAgdGxUZXh0QWRtaW5vaWQuYWRkKFR3ZWVuTWF4LmZyb21UbygkdGV4dEFkbWlub2lkLCBwYXJ0MXRpbWUgKyBwYXJ0MnRpbWUsXG4gICAgICAgICAge3g6IDAsIHk6IDI0fSxcbiAgICAgICAgICB7eDogLTUwLCB5OiA3fVxuICAgICAgKSk7XG5cbiAgICAgIC8vIFRleHQgd2VibWFzdGVyIHRleHRzV2VibWFzdGVyXG4gICAgICBsZXQgdGxUZXh0V2VibWFzdGVyID0gbmV3IFRpbWVsaW5lTGl0ZSgpO1xuICAgICAgdGxUZXh0V2VibWFzdGVyLmFkZChcbiAgICAgICAgICBUd2Vlbk1heC5zdGFnZ2VyRnJvbVRvKGxldHRlcnNXZWJtYXN0ZXIucmV2ZXJzZSgpLCAoMC4xKSxcbiAgICAgICAgICAgICAge2F1dG9BbHBoYTogMSwgcm90YXRlWDogMH0sXG4gICAgICAgICAgICAgIHthdXRvQWxwaGE6IDAsIHJvdGF0ZVg6IDEwfSxcbiAgICAgICAgICAgICAgMC4wNVxuICAgICAgICAgIClcbiAgICAgICk7XG5cbiAgICAgIC8vIFdlYm1hc3RlciBXcmFwcGVyXG4gICAgICBsZXQgdGxUZXh0V2VibWFzdGVyV3JhcHBlciA9IG5ldyBUaW1lbGluZUxpdGUoKTtcbiAgICAgIHRsVGV4dFdlYm1hc3RlcldyYXBwZXIuYWRkKFR3ZWVuTWF4LmZyb21Ubyh0ZXh0c1dlYm1hc3RlcldyYXBwZXIsIDAuNSxcbiAgICAgICAgICB7YXV0b0FscGhhOiAxfSxcbiAgICAgICAgICB7YXV0b0FscGhhOiAwfVxuICAgICAgKSwgMC4yKTtcblxuICAgICAgLy8gVG9wTWVudSBoZWlnaHQgcmVkdWN0aW9uL2luY3JlYXNlXG4gICAgICBsZXQgdGxUb3BNZW51ID0gbmV3IFRpbWVsaW5lTGl0ZSgpO1xuICAgICAgdGxUb3BNZW51LmFkZChUd2Vlbk1heC5zdGFnZ2VyRnJvbVRvKHRvcE1lbnVJdGVtc0ZvclJlc2l6aW5nLCBwYXJ0MXRpbWUsXG4gICAgICAgICAge2hlaWdodDogJzQuNjY2NjdyZW0nLCBvcGFjaXR5OiAxfSxcbiAgICAgICAgICB7aGVpZ2h0OiAnMy42NjY2N3JlbScsIG9wYWNpdHk6IDAuOTN9LFxuICAgICAgICAgIDBcbiAgICAgICksIHBhcnQxdGltZSk7XG5cbiAgICAgIC8vIENvbmNsdXNpb25cbiAgICAgIGxldCB0aW1lbGluZSA9IG5ldyBUaW1lbGluZUxpdGUoe3BhdXNlZDogdHJ1ZX0pO1xuICAgICAgdGltZWxpbmUucGF1c2UoKTtcbiAgICAgIHRpbWVsaW5lLmFkZCh0bEhhbmRzLCAwKTtcbiAgICAgIHRpbWVsaW5lLmFkZCh0bEJvZHksIDApO1xuICAgICAgdGltZWxpbmUuYWRkKHRsSGVhZCwgMCk7XG4gICAgICB0aW1lbGluZS5hZGQodGxMb2dvU2l6ZSwgMCk7XG4gICAgICB0aW1lbGluZS5hZGQodGxFeWVQdXBpbCwgMCk7XG4gICAgICB0aW1lbGluZS5hZGQodGxUZXh0QWRtaW5vaWQsIDApO1xuICAgICAgdGltZWxpbmUuYWRkKHRsVGV4dFdlYm1hc3RlciwgMCk7XG4gICAgICB0aW1lbGluZS5hZGQodGxUZXh0V2VibWFzdGVyV3JhcHBlciwgMCk7XG4gICAgICB0aW1lbGluZS5hZGQodGxUb3BNZW51LCAwKTtcbiAgICAgIHJldHVybiB0aW1lbGluZTtcbiAgICB9XG4gIH1cbn1cbjwvc2NyaXB0PlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHJlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9Ub3BNZW51LnZ1ZSIsIjx0ZW1wbGF0ZT5cbiAgPGEgaHJlZj1cIiNcIiBAY2xpY2sucHJldmVudC5zdG9wPVwiZ29Xcml0ZVwiPjxzbG90Pjwvc2xvdD48L2E+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICBleHBvcnQgZGVmYXVsdCB7XG4gICAgbmFtZTogXCJXcml0ZUxpbmtcIixcblxuICAgIG1ldGhvZHM6IHtcbiAgICAgIGdvV3JpdGUgKCkge1xuICAgICAgICB0aGlzLiRwYXJlbnQuJGVtaXQoJ2dvLXdyaXRlJyx0cnVlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkPlxuXG4gIGEge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG5cbjwvc3R5bGU+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL1dyaXRlTGluay52dWUiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHRydWUpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuYVtkYXRhLXYtMjIzMjRmZDJdIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG5cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiL1VzZXJzL3BldGphL1BocHN0b3JtUHJvamVjdHMvc2l0ZXMvYWRtaW5vaWQuY29tL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvV3JpdGVMaW5rLnZ1ZVwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBa0JBO0VBQ0Esa0JBQUE7Q0FDQVwiLFwiZmlsZVwiOlwiV3JpdGVMaW5rLnZ1ZVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI8dGVtcGxhdGU+XFxuICA8YSBocmVmPVxcXCIjXFxcIiBAY2xpY2sucHJldmVudC5zdG9wPVxcXCJnb1dyaXRlXFxcIj48c2xvdD48L3Nsb3Q+PC9hPlxcbjwvdGVtcGxhdGU+XFxuXFxuPHNjcmlwdD5cXG4gIGV4cG9ydCBkZWZhdWx0IHtcXG4gICAgbmFtZTogXFxcIldyaXRlTGlua1xcXCIsXFxuXFxuICAgIG1ldGhvZHM6IHtcXG4gICAgICBnb1dyaXRlICgpIHtcXG4gICAgICAgIHRoaXMuJHBhcmVudC4kZW1pdCgnZ28td3JpdGUnLHRydWUpO1xcbiAgICAgIH1cXG4gICAgfVxcbiAgfVxcbjwvc2NyaXB0PlxcblxcbjxzdHlsZSBzY29wZWQ+XFxuXFxuICBhIHtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICB9XFxuXFxuPC9zdHlsZT5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1widnVlXCI6dHJ1ZSxcImlkXCI6XCJkYXRhLXYtMjIzMjRmZDJcIixcInNjb3BlZFwiOnRydWUsXCJoYXNJbmxpbmVDb25maWdcIjp0cnVlfSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL1dyaXRlTGluay52dWVcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcInZ1ZVwiOnRydWUsXCJpZFwiOlwiZGF0YS12LTIyMzI0ZmQyXCIsXCJzY29wZWRcIjp0cnVlLFwiaGFzSW5saW5lQ29uZmlnXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9Xcml0ZUxpbmsudnVlXG4vLyBtb2R1bGUgY2h1bmtzID0gOCIsIi8qXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbih1c2VTb3VyY2VNYXApIHtcblx0dmFyIGxpc3QgPSBbXTtcblxuXHQvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cdGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcblx0XHRyZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcblx0XHRcdHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXHRcdFx0aWYoaXRlbVsyXSkge1xuXHRcdFx0XHRyZXR1cm4gXCJAbWVkaWEgXCIgKyBpdGVtWzJdICsgXCJ7XCIgKyBjb250ZW50ICsgXCJ9XCI7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gY29udGVudDtcblx0XHRcdH1cblx0XHR9KS5qb2luKFwiXCIpO1xuXHR9O1xuXG5cdC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cdGxpc3QuaSA9IGZ1bmN0aW9uKG1vZHVsZXMsIG1lZGlhUXVlcnkpIHtcblx0XHRpZih0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIilcblx0XHRcdG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcblx0XHR2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXHRcdFx0aWYodHlwZW9mIGlkID09PSBcIm51bWJlclwiKVxuXHRcdFx0XHRhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG5cdFx0fVxuXHRcdGZvcihpID0gMDsgaSA8IG1vZHVsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gbW9kdWxlc1tpXTtcblx0XHRcdC8vIHNraXAgYWxyZWFkeSBpbXBvcnRlZCBtb2R1bGVcblx0XHRcdC8vIHRoaXMgaW1wbGVtZW50YXRpb24gaXMgbm90IDEwMCUgcGVyZmVjdCBmb3Igd2VpcmQgbWVkaWEgcXVlcnkgY29tYmluYXRpb25zXG5cdFx0XHQvLyAgd2hlbiBhIG1vZHVsZSBpcyBpbXBvcnRlZCBtdWx0aXBsZSB0aW1lcyB3aXRoIGRpZmZlcmVudCBtZWRpYSBxdWVyaWVzLlxuXHRcdFx0Ly8gIEkgaG9wZSB0aGlzIHdpbGwgbmV2ZXIgb2NjdXIgKEhleSB0aGlzIHdheSB3ZSBoYXZlIHNtYWxsZXIgYnVuZGxlcylcblx0XHRcdGlmKHR5cGVvZiBpdGVtWzBdICE9PSBcIm51bWJlclwiIHx8ICFhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG5cdFx0XHRcdGlmKG1lZGlhUXVlcnkgJiYgIWl0ZW1bMl0pIHtcblx0XHRcdFx0XHRpdGVtWzJdID0gbWVkaWFRdWVyeTtcblx0XHRcdFx0fSBlbHNlIGlmKG1lZGlhUXVlcnkpIHtcblx0XHRcdFx0XHRpdGVtWzJdID0gXCIoXCIgKyBpdGVtWzJdICsgXCIpIGFuZCAoXCIgKyBtZWRpYVF1ZXJ5ICsgXCIpXCI7XG5cdFx0XHRcdH1cblx0XHRcdFx0bGlzdC5wdXNoKGl0ZW0pO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcblx0cmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuXHR2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7XG5cdHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblx0aWYgKCFjc3NNYXBwaW5nKSB7XG5cdFx0cmV0dXJuIGNvbnRlbnQ7XG5cdH1cblxuXHRpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0dmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG5cdFx0dmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcblx0XHRcdHJldHVybiAnLyojIHNvdXJjZVVSTD0nICsgY3NzTWFwcGluZy5zb3VyY2VSb290ICsgc291cmNlICsgJyAqLydcblx0XHR9KTtcblxuXHRcdHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuXHR9XG5cblx0cmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn1cblxuLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcblx0dmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG5cdHZhciBkYXRhID0gJ3NvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LCcgKyBiYXNlNjQ7XG5cblx0cmV0dXJuICcvKiMgJyArIGRhdGEgKyAnICovJztcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDgiLCIvKiBnbG9iYWxzIF9fVlVFX1NTUl9DT05URVhUX18gKi9cblxuLy8gSU1QT1JUQU5UOiBEbyBOT1QgdXNlIEVTMjAxNSBmZWF0dXJlcyBpbiB0aGlzIGZpbGUuXG4vLyBUaGlzIG1vZHVsZSBpcyBhIHJ1bnRpbWUgdXRpbGl0eSBmb3IgY2xlYW5lciBjb21wb25lbnQgbW9kdWxlIG91dHB1dCBhbmQgd2lsbFxuLy8gYmUgaW5jbHVkZWQgaW4gdGhlIGZpbmFsIHdlYnBhY2sgdXNlciBidW5kbGUuXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gbm9ybWFsaXplQ29tcG9uZW50IChcbiAgcmF3U2NyaXB0RXhwb3J0cyxcbiAgY29tcGlsZWRUZW1wbGF0ZSxcbiAgZnVuY3Rpb25hbFRlbXBsYXRlLFxuICBpbmplY3RTdHlsZXMsXG4gIHNjb3BlSWQsXG4gIG1vZHVsZUlkZW50aWZpZXIgLyogc2VydmVyIG9ubHkgKi9cbikge1xuICB2YXIgZXNNb2R1bGVcbiAgdmFyIHNjcmlwdEV4cG9ydHMgPSByYXdTY3JpcHRFeHBvcnRzID0gcmF3U2NyaXB0RXhwb3J0cyB8fCB7fVxuXG4gIC8vIEVTNiBtb2R1bGVzIGludGVyb3BcbiAgdmFyIHR5cGUgPSB0eXBlb2YgcmF3U2NyaXB0RXhwb3J0cy5kZWZhdWx0XG4gIGlmICh0eXBlID09PSAnb2JqZWN0JyB8fCB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgZXNNb2R1bGUgPSByYXdTY3JpcHRFeHBvcnRzXG4gICAgc2NyaXB0RXhwb3J0cyA9IHJhd1NjcmlwdEV4cG9ydHMuZGVmYXVsdFxuICB9XG5cbiAgLy8gVnVlLmV4dGVuZCBjb25zdHJ1Y3RvciBleHBvcnQgaW50ZXJvcFxuICB2YXIgb3B0aW9ucyA9IHR5cGVvZiBzY3JpcHRFeHBvcnRzID09PSAnZnVuY3Rpb24nXG4gICAgPyBzY3JpcHRFeHBvcnRzLm9wdGlvbnNcbiAgICA6IHNjcmlwdEV4cG9ydHNcblxuICAvLyByZW5kZXIgZnVuY3Rpb25zXG4gIGlmIChjb21waWxlZFRlbXBsYXRlKSB7XG4gICAgb3B0aW9ucy5yZW5kZXIgPSBjb21waWxlZFRlbXBsYXRlLnJlbmRlclxuICAgIG9wdGlvbnMuc3RhdGljUmVuZGVyRm5zID0gY29tcGlsZWRUZW1wbGF0ZS5zdGF0aWNSZW5kZXJGbnNcbiAgICBvcHRpb25zLl9jb21waWxlZCA9IHRydWVcbiAgfVxuXG4gIC8vIGZ1bmN0aW9uYWwgdGVtcGxhdGVcbiAgaWYgKGZ1bmN0aW9uYWxUZW1wbGF0ZSkge1xuICAgIG9wdGlvbnMuZnVuY3Rpb25hbCA9IHRydWVcbiAgfVxuXG4gIC8vIHNjb3BlZElkXG4gIGlmIChzY29wZUlkKSB7XG4gICAgb3B0aW9ucy5fc2NvcGVJZCA9IHNjb3BlSWRcbiAgfVxuXG4gIHZhciBob29rXG4gIGlmIChtb2R1bGVJZGVudGlmaWVyKSB7IC8vIHNlcnZlciBidWlsZFxuICAgIGhvb2sgPSBmdW5jdGlvbiAoY29udGV4dCkge1xuICAgICAgLy8gMi4zIGluamVjdGlvblxuICAgICAgY29udGV4dCA9XG4gICAgICAgIGNvbnRleHQgfHwgLy8gY2FjaGVkIGNhbGxcbiAgICAgICAgKHRoaXMuJHZub2RlICYmIHRoaXMuJHZub2RlLnNzckNvbnRleHQpIHx8IC8vIHN0YXRlZnVsXG4gICAgICAgICh0aGlzLnBhcmVudCAmJiB0aGlzLnBhcmVudC4kdm5vZGUgJiYgdGhpcy5wYXJlbnQuJHZub2RlLnNzckNvbnRleHQpIC8vIGZ1bmN0aW9uYWxcbiAgICAgIC8vIDIuMiB3aXRoIHJ1bkluTmV3Q29udGV4dDogdHJ1ZVxuICAgICAgaWYgKCFjb250ZXh0ICYmIHR5cGVvZiBfX1ZVRV9TU1JfQ09OVEVYVF9fICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb250ZXh0ID0gX19WVUVfU1NSX0NPTlRFWFRfX1xuICAgICAgfVxuICAgICAgLy8gaW5qZWN0IGNvbXBvbmVudCBzdHlsZXNcbiAgICAgIGlmIChpbmplY3RTdHlsZXMpIHtcbiAgICAgICAgaW5qZWN0U3R5bGVzLmNhbGwodGhpcywgY29udGV4dClcbiAgICAgIH1cbiAgICAgIC8vIHJlZ2lzdGVyIGNvbXBvbmVudCBtb2R1bGUgaWRlbnRpZmllciBmb3IgYXN5bmMgY2h1bmsgaW5mZXJyZW5jZVxuICAgICAgaWYgKGNvbnRleHQgJiYgY29udGV4dC5fcmVnaXN0ZXJlZENvbXBvbmVudHMpIHtcbiAgICAgICAgY29udGV4dC5fcmVnaXN0ZXJlZENvbXBvbmVudHMuYWRkKG1vZHVsZUlkZW50aWZpZXIpXG4gICAgICB9XG4gICAgfVxuICAgIC8vIHVzZWQgYnkgc3NyIGluIGNhc2UgY29tcG9uZW50IGlzIGNhY2hlZCBhbmQgYmVmb3JlQ3JlYXRlXG4gICAgLy8gbmV2ZXIgZ2V0cyBjYWxsZWRcbiAgICBvcHRpb25zLl9zc3JSZWdpc3RlciA9IGhvb2tcbiAgfSBlbHNlIGlmIChpbmplY3RTdHlsZXMpIHtcbiAgICBob29rID0gaW5qZWN0U3R5bGVzXG4gIH1cblxuICBpZiAoaG9vaykge1xuICAgIHZhciBmdW5jdGlvbmFsID0gb3B0aW9ucy5mdW5jdGlvbmFsXG4gICAgdmFyIGV4aXN0aW5nID0gZnVuY3Rpb25hbFxuICAgICAgPyBvcHRpb25zLnJlbmRlclxuICAgICAgOiBvcHRpb25zLmJlZm9yZUNyZWF0ZVxuXG4gICAgaWYgKCFmdW5jdGlvbmFsKSB7XG4gICAgICAvLyBpbmplY3QgY29tcG9uZW50IHJlZ2lzdHJhdGlvbiBhcyBiZWZvcmVDcmVhdGUgaG9va1xuICAgICAgb3B0aW9ucy5iZWZvcmVDcmVhdGUgPSBleGlzdGluZ1xuICAgICAgICA/IFtdLmNvbmNhdChleGlzdGluZywgaG9vaylcbiAgICAgICAgOiBbaG9va11cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gZm9yIHRlbXBsYXRlLW9ubHkgaG90LXJlbG9hZCBiZWNhdXNlIGluIHRoYXQgY2FzZSB0aGUgcmVuZGVyIGZuIGRvZXNuJ3RcbiAgICAgIC8vIGdvIHRocm91Z2ggdGhlIG5vcm1hbGl6ZXJcbiAgICAgIG9wdGlvbnMuX2luamVjdFN0eWxlcyA9IGhvb2tcbiAgICAgIC8vIHJlZ2lzdGVyIGZvciBmdW5jdGlvYWwgY29tcG9uZW50IGluIHZ1ZSBmaWxlXG4gICAgICBvcHRpb25zLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcldpdGhTdHlsZUluamVjdGlvbiAoaCwgY29udGV4dCkge1xuICAgICAgICBob29rLmNhbGwoY29udGV4dClcbiAgICAgICAgcmV0dXJuIGV4aXN0aW5nKGgsIGNvbnRleHQpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBlc01vZHVsZTogZXNNb2R1bGUsXG4gICAgZXhwb3J0czogc2NyaXB0RXhwb3J0cyxcbiAgICBvcHRpb25zOiBvcHRpb25zXG4gIH1cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyLmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplci5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDgiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiYVwiLFxuICAgIHtcbiAgICAgIGF0dHJzOiB7IGhyZWY6IFwiI1wiIH0sXG4gICAgICBvbjoge1xuICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgICByZXR1cm4gX3ZtLmdvV3JpdGUoJGV2ZW50KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBbX3ZtLl90KFwiZGVmYXVsdFwiKV0sXG4gICAgMlxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxubW9kdWxlLmV4cG9ydHMgPSB7IHJlbmRlcjogcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZucyB9XG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICByZXF1aXJlKFwidnVlLWxvYWRlci9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpXCIpICAgICAgLnJlcmVuZGVyKFwiZGF0YS12LTIyMzI0ZmQyXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi0yMjMyNGZkMlwiLFwiaGFzU2NvcGVkXCI6dHJ1ZSxcImJ1YmxlXCI6e1widHJhbnNmb3Jtc1wiOnt9fX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL1dyaXRlTGluay52dWVcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4LmpzP3tcImlkXCI6XCJkYXRhLXYtMjIzMjRmZDJcIixcImhhc1Njb3BlZFwiOnRydWUsXCJidWJsZVwiOntcInRyYW5zZm9ybXNcIjp7fX19IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9Xcml0ZUxpbmsudnVlXG4vLyBtb2R1bGUgY2h1bmtzID0gOCIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi0yMjMyNGZkMlxcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL1dyaXRlTGluay52dWVcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKShcIjBkNzE4NmNlXCIsIGNvbnRlbnQsIGZhbHNlLCB7fSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi0yMjMyNGZkMlxcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL1dyaXRlTGluay52dWVcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMjIzMjRmZDJcXFwiLFxcXCJzY29wZWRcXFwiOnRydWUsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9Xcml0ZUxpbmsudnVlXCIpO1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyIS4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyP3tcInZ1ZVwiOnRydWUsXCJpZFwiOlwiZGF0YS12LTIyMzI0ZmQyXCIsXCJzY29wZWRcIjp0cnVlLFwiaGFzSW5saW5lQ29uZmlnXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9Xcml0ZUxpbmsudnVlXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcInZ1ZVwiOnRydWUsXCJpZFwiOlwiZGF0YS12LTIyMzI0ZmQyXCIsXCJzY29wZWRcIjp0cnVlLFwiaGFzSW5saW5lQ29uZmlnXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9Xcml0ZUxpbmsudnVlXG4vLyBtb2R1bGUgY2h1bmtzID0gOCIsIi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiAgTW9kaWZpZWQgYnkgRXZhbiBZb3UgQHl5eDk5MDgwM1xuKi9cblxudmFyIGhhc0RvY3VtZW50ID0gdHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJ1xuXG5pZiAodHlwZW9mIERFQlVHICE9PSAndW5kZWZpbmVkJyAmJiBERUJVRykge1xuICBpZiAoIWhhc0RvY3VtZW50KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICd2dWUtc3R5bGUtbG9hZGVyIGNhbm5vdCBiZSB1c2VkIGluIGEgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnQuICcgK1xuICAgIFwiVXNlIHsgdGFyZ2V0OiAnbm9kZScgfSBpbiB5b3VyIFdlYnBhY2sgY29uZmlnIHRvIGluZGljYXRlIGEgc2VydmVyLXJlbmRlcmluZyBlbnZpcm9ubWVudC5cIlxuICApIH1cbn1cblxudmFyIGxpc3RUb1N0eWxlcyA9IHJlcXVpcmUoJy4vbGlzdFRvU3R5bGVzJylcblxuLypcbnR5cGUgU3R5bGVPYmplY3QgPSB7XG4gIGlkOiBudW1iZXI7XG4gIHBhcnRzOiBBcnJheTxTdHlsZU9iamVjdFBhcnQ+XG59XG5cbnR5cGUgU3R5bGVPYmplY3RQYXJ0ID0ge1xuICBjc3M6IHN0cmluZztcbiAgbWVkaWE6IHN0cmluZztcbiAgc291cmNlTWFwOiA/c3RyaW5nXG59XG4qL1xuXG52YXIgc3R5bGVzSW5Eb20gPSB7LypcbiAgW2lkOiBudW1iZXJdOiB7XG4gICAgaWQ6IG51bWJlcixcbiAgICByZWZzOiBudW1iZXIsXG4gICAgcGFydHM6IEFycmF5PChvYmo/OiBTdHlsZU9iamVjdFBhcnQpID0+IHZvaWQ+XG4gIH1cbiovfVxuXG52YXIgaGVhZCA9IGhhc0RvY3VtZW50ICYmIChkb2N1bWVudC5oZWFkIHx8IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF0pXG52YXIgc2luZ2xldG9uRWxlbWVudCA9IG51bGxcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMFxudmFyIGlzUHJvZHVjdGlvbiA9IGZhbHNlXG52YXIgbm9vcCA9IGZ1bmN0aW9uICgpIHt9XG52YXIgb3B0aW9ucyA9IG51bGxcbnZhciBzc3JJZEtleSA9ICdkYXRhLXZ1ZS1zc3ItaWQnXG5cbi8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxudmFyIGlzT2xkSUUgPSB0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyAmJiAvbXNpZSBbNi05XVxcYi8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkpXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHBhcmVudElkLCBsaXN0LCBfaXNQcm9kdWN0aW9uLCBfb3B0aW9ucykge1xuICBpc1Byb2R1Y3Rpb24gPSBfaXNQcm9kdWN0aW9uXG5cbiAgb3B0aW9ucyA9IF9vcHRpb25zIHx8IHt9XG5cbiAgdmFyIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhwYXJlbnRJZCwgbGlzdClcbiAgYWRkU3R5bGVzVG9Eb20oc3R5bGVzKVxuXG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUgKG5ld0xpc3QpIHtcbiAgICB2YXIgbWF5UmVtb3ZlID0gW11cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGl0ZW0gPSBzdHlsZXNbaV1cbiAgICAgIHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdXG4gICAgICBkb21TdHlsZS5yZWZzLS1cbiAgICAgIG1heVJlbW92ZS5wdXNoKGRvbVN0eWxlKVxuICAgIH1cbiAgICBpZiAobmV3TGlzdCkge1xuICAgICAgc3R5bGVzID0gbGlzdFRvU3R5bGVzKHBhcmVudElkLCBuZXdMaXN0KVxuICAgICAgYWRkU3R5bGVzVG9Eb20oc3R5bGVzKVxuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXMgPSBbXVxuICAgIH1cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG1heVJlbW92ZS5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGRvbVN0eWxlID0gbWF5UmVtb3ZlW2ldXG4gICAgICBpZiAoZG9tU3R5bGUucmVmcyA9PT0gMCkge1xuICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgZG9tU3R5bGUucGFydHNbal0oKVxuICAgICAgICB9XG4gICAgICAgIGRlbGV0ZSBzdHlsZXNJbkRvbVtkb21TdHlsZS5pZF1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYWRkU3R5bGVzVG9Eb20gKHN0eWxlcyAvKiBBcnJheTxTdHlsZU9iamVjdD4gKi8pIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IHN0eWxlc1tpXVxuICAgIHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdXG4gICAgaWYgKGRvbVN0eWxlKSB7XG4gICAgICBkb21TdHlsZS5yZWZzKytcbiAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgZG9tU3R5bGUucGFydHNbal0oaXRlbS5wYXJ0c1tqXSlcbiAgICAgIH1cbiAgICAgIGZvciAoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICBkb21TdHlsZS5wYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0pKVxuICAgICAgfVxuICAgICAgaWYgKGRvbVN0eWxlLnBhcnRzLmxlbmd0aCA+IGl0ZW0ucGFydHMubGVuZ3RoKSB7XG4gICAgICAgIGRvbVN0eWxlLnBhcnRzLmxlbmd0aCA9IGl0ZW0ucGFydHMubGVuZ3RoXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBwYXJ0cyA9IFtdXG4gICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgcGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdKSlcbiAgICAgIH1cbiAgICAgIHN0eWxlc0luRG9tW2l0ZW0uaWRdID0geyBpZDogaXRlbS5pZCwgcmVmczogMSwgcGFydHM6IHBhcnRzIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlU3R5bGVFbGVtZW50ICgpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJylcbiAgc3R5bGVFbGVtZW50LnR5cGUgPSAndGV4dC9jc3MnXG4gIGhlYWQuYXBwZW5kQ2hpbGQoc3R5bGVFbGVtZW50KVxuICByZXR1cm4gc3R5bGVFbGVtZW50XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlIChvYmogLyogU3R5bGVPYmplY3RQYXJ0ICovKSB7XG4gIHZhciB1cGRhdGUsIHJlbW92ZVxuICB2YXIgc3R5bGVFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcignc3R5bGVbJyArIHNzcklkS2V5ICsgJ349XCInICsgb2JqLmlkICsgJ1wiXScpXG5cbiAgaWYgKHN0eWxlRWxlbWVudCkge1xuICAgIGlmIChpc1Byb2R1Y3Rpb24pIHtcbiAgICAgIC8vIGhhcyBTU1Igc3R5bGVzIGFuZCBpbiBwcm9kdWN0aW9uIG1vZGUuXG4gICAgICAvLyBzaW1wbHkgZG8gbm90aGluZy5cbiAgICAgIHJldHVybiBub29wXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGhhcyBTU1Igc3R5bGVzIGJ1dCBpbiBkZXYgbW9kZS5cbiAgICAgIC8vIGZvciBzb21lIHJlYXNvbiBDaHJvbWUgY2FuJ3QgaGFuZGxlIHNvdXJjZSBtYXAgaW4gc2VydmVyLXJlbmRlcmVkXG4gICAgICAvLyBzdHlsZSB0YWdzIC0gc291cmNlIG1hcHMgaW4gPHN0eWxlPiBvbmx5IHdvcmtzIGlmIHRoZSBzdHlsZSB0YWcgaXNcbiAgICAgIC8vIGNyZWF0ZWQgYW5kIGluc2VydGVkIGR5bmFtaWNhbGx5LiBTbyB3ZSByZW1vdmUgdGhlIHNlcnZlciByZW5kZXJlZFxuICAgICAgLy8gc3R5bGVzIGFuZCBpbmplY3QgbmV3IG9uZXMuXG4gICAgICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpXG4gICAgfVxuICB9XG5cbiAgaWYgKGlzT2xkSUUpIHtcbiAgICAvLyB1c2Ugc2luZ2xldG9uIG1vZGUgZm9yIElFOS5cbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrK1xuICAgIHN0eWxlRWxlbWVudCA9IHNpbmdsZXRvbkVsZW1lbnQgfHwgKHNpbmdsZXRvbkVsZW1lbnQgPSBjcmVhdGVTdHlsZUVsZW1lbnQoKSlcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50LCBzdHlsZUluZGV4LCBmYWxzZSlcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50LCBzdHlsZUluZGV4LCB0cnVlKVxuICB9IGVsc2Uge1xuICAgIC8vIHVzZSBtdWx0aS1zdHlsZS10YWcgbW9kZSBpbiBhbGwgb3RoZXIgY2FzZXNcbiAgICBzdHlsZUVsZW1lbnQgPSBjcmVhdGVTdHlsZUVsZW1lbnQoKVxuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQpXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuICAgICAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KVxuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZShvYmopXG5cbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlIChuZXdPYmogLyogU3R5bGVPYmplY3RQYXJ0ICovKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiZcbiAgICAgICAgICBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJlxuICAgICAgICAgIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKVxuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKVxuICAgIH1cbiAgfVxufVxuXG52YXIgcmVwbGFjZVRleHQgPSAoZnVuY3Rpb24gKCkge1xuICB2YXIgdGV4dFN0b3JlID0gW11cblxuICByZXR1cm4gZnVuY3Rpb24gKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudFxuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpXG4gIH1cbn0pKClcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyAoc3R5bGVFbGVtZW50LCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLmNzc1xuXG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKVxuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKVxuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGVFbGVtZW50LmNoaWxkTm9kZXNcbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSlcbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChjc3NOb2RlKVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnIChzdHlsZUVsZW1lbnQsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzc1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWFcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXBcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKVxuICB9XG4gIGlmIChvcHRpb25zLnNzcklkKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShzc3JJZEtleSwgb2JqLmlkKVxuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCkge1xuICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLmNocm9tZS5jb20vZGV2dG9vbHMvZG9jcy9qYXZhc2NyaXB0LWRlYnVnZ2luZ1xuICAgIC8vIHRoaXMgbWFrZXMgc291cmNlIG1hcHMgaW5zaWRlIHN0eWxlIHRhZ3Mgd29yayBwcm9wZXJseSBpbiBDaHJvbWVcbiAgICBjc3MgKz0gJ1xcbi8qIyBzb3VyY2VVUkw9JyArIHNvdXJjZU1hcC5zb3VyY2VzWzBdICsgJyAqLydcbiAgICAvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yNjYwMzg3NVxuICAgIGNzcyArPSAnXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCwnICsgYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSArICcgKi8nXG4gIH1cblxuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzXG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpXG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKVxuICB9XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDgiLCIvKipcbiAqIFRyYW5zbGF0ZXMgdGhlIGxpc3QgZm9ybWF0IHByb2R1Y2VkIGJ5IGNzcy1sb2FkZXIgaW50byBzb21ldGhpbmdcbiAqIGVhc2llciB0byBtYW5pcHVsYXRlLlxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGxpc3RUb1N0eWxlcyAocGFyZW50SWQsIGxpc3QpIHtcbiAgdmFyIHN0eWxlcyA9IFtdXG4gIHZhciBuZXdTdHlsZXMgPSB7fVxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV1cbiAgICB2YXIgaWQgPSBpdGVtWzBdXG4gICAgdmFyIGNzcyA9IGl0ZW1bMV1cbiAgICB2YXIgbWVkaWEgPSBpdGVtWzJdXG4gICAgdmFyIHNvdXJjZU1hcCA9IGl0ZW1bM11cbiAgICB2YXIgcGFydCA9IHtcbiAgICAgIGlkOiBwYXJlbnRJZCArICc6JyArIGksXG4gICAgICBjc3M6IGNzcyxcbiAgICAgIG1lZGlhOiBtZWRpYSxcbiAgICAgIHNvdXJjZU1hcDogc291cmNlTWFwXG4gICAgfVxuICAgIGlmICghbmV3U3R5bGVzW2lkXSkge1xuICAgICAgc3R5bGVzLnB1c2gobmV3U3R5bGVzW2lkXSA9IHsgaWQ6IGlkLCBwYXJ0czogW3BhcnRdIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIG5ld1N0eWxlc1tpZF0ucGFydHMucHVzaChwYXJ0KVxuICAgIH1cbiAgfVxuICByZXR1cm4gc3R5bGVzXG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9saXN0VG9TdHlsZXMuanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2xpc3RUb1N0eWxlcy5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDgiLCJcbi8qKlxuICogRmlyc3Qgd2Ugd2lsbCBsb2FkIGFsbCBvZiB0aGlzIHByb2plY3QncyBKYXZhU2NyaXB0IGRlcGVuZGVuY2llcyB3aGljaFxuICogaW5jbHVkZXMgVnVlIGFuZCBvdGhlciBsaWJyYXJpZXMuIEl0IGlzIGEgZ3JlYXQgc3RhcnRpbmcgcG9pbnQgd2hlblxuICogYnVpbGRpbmcgcm9idXN0LCBwb3dlcmZ1bCB3ZWIgYXBwbGljYXRpb25zIHVzaW5nIFZ1ZSBhbmQgTGFyYXZlbC5cbiAqL1xuXG5yZXF1aXJlKCcuL2Jvb3RzdHJhcCcpO1xuXG53aW5kb3cuVnVlID0gcmVxdWlyZSgndnVlJyk7XG5cbi8qKlxuICogTmV4dCwgd2Ugd2lsbCBjcmVhdGUgYSBmcmVzaCBWdWUgYXBwbGljYXRpb24gaW5zdGFuY2UgYW5kIGF0dGFjaCBpdCB0b1xuICogdGhlIHBhZ2UuIFRoZW4sIHlvdSBtYXkgYmVnaW4gYWRkaW5nIGNvbXBvbmVudHMgdG8gdGhpcyBhcHBsaWNhdGlvblxuICogb3IgY3VzdG9taXplIHRoZSBKYXZhU2NyaXB0IHNjYWZmb2xkaW5nIHRvIGZpdCB5b3VyIHVuaXF1ZSBuZWVkcy5cbiAqL1xuXG5pbXBvcnQgVG9wTWVudSBmcm9tICcuL2NvbXBvbmVudHMvVG9wTWVudSdcbmltcG9ydCBGZWVkYmFja0Zvcm0gZnJvbSAnLi9jb21wb25lbnRzL0ZlZWRiYWNrRm9ybSdcbmltcG9ydCBXcml0ZUxpbmsgZnJvbSAnLi9jb21wb25lbnRzL1dyaXRlTGluaydcblxuVnVlLmNvbXBvbmVudChcImNsb3Vkc1wiLCBmdW5jdGlvbiAocmVzb2x2ZSkge1xuICByZXF1aXJlKFsnLi9jb21wb25lbnRzL3BhZ2VzL2luZGV4L0Nsb3VkcyddLCByZXNvbHZlKVxufSk7XG5cblZ1ZS5jb21wb25lbnQoXCJjdWJlXCIsIGZ1bmN0aW9uIChyZXNvbHZlKSB7XG4gIHJlcXVpcmUoWycuL2NvbXBvbmVudHMvcGFnZXMvaW5kZXgvQ3ViZSddLCByZXNvbHZlKVxufSk7XG5cblZ1ZS5jb21wb25lbnQoXCJjbG9ja1wiLCBmdW5jdGlvbiAocmVzb2x2ZSkge1xuICByZXF1aXJlKFsnLi9jb21wb25lbnRzL3BhZ2VzL3ByaWNlL0Nsb2NrLnZ1ZSddLCByZXNvbHZlKVxufSk7XG5cblZ1ZS5jb21wb25lbnQoXCJ0b29scy1ibG9ja1wiLCBmdW5jdGlvbiAocmVzb2x2ZSkge1xuICByZXF1aXJlKFsnLi9jb21wb25lbnRzL3BhZ2VzL3Rvb2xzL1Rvb2xzQmxvY2sudnVlJ10sIHJlc29sdmUpXG59KTtcblxuVnVlLmNvbXBvbmVudChcInpvb21cIiwgZnVuY3Rpb24gKHJlc29sdmUpIHtcbiAgcmVxdWlyZShbJy4vY29tcG9uZW50cy9wYWdlcy9wb3J0Zm9saW8vWm9vbS52dWUnXSwgcmVzb2x2ZSlcbn0pO1xuXG5WdWUuY29tcG9uZW50KFwidmlkZW8tYmFja2dyb3VuZFwiLCBmdW5jdGlvbiAocmVzb2x2ZSkge1xuICByZXF1aXJlKFsnLi9jb21wb25lbnRzL3BhZ2VzL3BvcnRmb2xpby9WaWRlb0JhY2tncm91bmQudnVlJ10sIHJlc29sdmUpXG59KTtcblxuVnVlLmNvbXBvbmVudChcImhhbGYtcm90YXRlXCIsIGZ1bmN0aW9uIChyZXNvbHZlKSB7XG4gIHJlcXVpcmUoWycuL2NvbXBvbmVudHMvcGFnZXMvd29ya2Zsb3cvSGFsZlJvdGF0ZS52dWUnXSwgcmVzb2x2ZSlcbn0pO1xuXG5jb25zdCBhcHAgPSBuZXcgVnVlKHtcblxuICBlbDogJyNhcHAnLFxuXG4gIGNvbXBvbmVudHM6IHtcbiAgICBUb3BNZW51LCBGZWVkYmFja0Zvcm0sIFdyaXRlTGlua1xuICB9LFxuXG4gIGRhdGEgKCkge1xuICAgIHJldHVybiB7XG4gICAgICB3cml0ZTogZmFsc2UsXG4gICAgfVxuICB9LFxuXG59KTtcblxuYXBwXG4gIC4kb24oJ2dvLXdyaXRlJywgKCkgPT4ge1xuXG4gICAgYXBwLndyaXRlID0gdHJ1ZTtcblxuICAgIGxldCAkbW9kYWwgPSAkKCcjc3VwZXItbW9kYWwnKTtcbiAgICAvLyAubW9kYWwoJ3NldHRpbmcnLCAndHJhbnNpdGlvbicsICdob3Jpem9udGFsIGZsaXAnKS5tb2RhbCgndG9nZ2xlJyk7XG5cbiAgICAkbW9kYWwubW9kYWwoe1xuICAgICAgdHJhbnNpdGlvbjogJ2hvcml6b250YWwgZmxpcCcsXG4gICAgICBvbkhpZGU6IGZ1bmN0aW9uKCl7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIGFwcC53cml0ZSA9IGZhbHNlO1xuICAgICAgICB9LCAzMzMpO1xuICAgICAgfSxcbiAgICB9KS5tb2RhbCgnc2hvdycpO1xuXG4gIH0pXG4gIC4kb24oJ3N0b3Atd3JpdGUnLCAoKSA9PiB7XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGFwcC53cml0ZSA9IGZhbHNlO1xuICAgIH0sIDMzMyk7XG5cbiAgfSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2FwcC5qcyIsIlxud2luZG93Ll8gPSByZXF1aXJlKCdsb2Rhc2gnKTtcblxuLyoqXG4gKiBXZSdsbCBsb2FkIGpRdWVyeSBhbmQgdGhlIEJvb3RzdHJhcCBqUXVlcnkgcGx1Z2luIHdoaWNoIHByb3ZpZGVzIHN1cHBvcnRcbiAqIGZvciBKYXZhU2NyaXB0IGJhc2VkIEJvb3RzdHJhcCBmZWF0dXJlcyBzdWNoIGFzIG1vZGFscyBhbmQgdGFicy4gVGhpc1xuICogY29kZSBtYXkgYmUgbW9kaWZpZWQgdG8gZml0IHRoZSBzcGVjaWZpYyBuZWVkcyBvZiB5b3VyIGFwcGxpY2F0aW9uLlxuICovXG5cbnRyeSB7XG4gICAgd2luZG93LiQgPSB3aW5kb3cualF1ZXJ5ID0gcmVxdWlyZSgnanF1ZXJ5Jyk7XG5cbiAgICAvLyByZXF1aXJlKCdib290c3RyYXAtc2FzcycpO1xufSBjYXRjaCAoZSkge31cblxuLyoqXG4gKiBXZSdsbCBsb2FkIHRoZSBheGlvcyBIVFRQIGxpYnJhcnkgd2hpY2ggYWxsb3dzIHVzIHRvIGVhc2lseSBpc3N1ZSByZXF1ZXN0c1xuICogdG8gb3VyIExhcmF2ZWwgYmFjay1lbmQuIFRoaXMgbGlicmFyeSBhdXRvbWF0aWNhbGx5IGhhbmRsZXMgc2VuZGluZyB0aGVcbiAqIENTUkYgdG9rZW4gYXMgYSBoZWFkZXIgYmFzZWQgb24gdGhlIHZhbHVlIG9mIHRoZSBcIlhTUkZcIiB0b2tlbiBjb29raWUuXG4gKi9cblxud2luZG93LmF4aW9zID0gcmVxdWlyZSgnYXhpb3MnKTtcblxud2luZG93LmF4aW9zLmRlZmF1bHRzLmhlYWRlcnMuY29tbW9uWydYLVJlcXVlc3RlZC1XaXRoJ10gPSAnWE1MSHR0cFJlcXVlc3QnO1xuXG4vKipcbiAqIE5leHQgd2Ugd2lsbCByZWdpc3RlciB0aGUgQ1NSRiBUb2tlbiBhcyBhIGNvbW1vbiBoZWFkZXIgd2l0aCBBeGlvcyBzbyB0aGF0XG4gKiBhbGwgb3V0Z29pbmcgSFRUUCByZXF1ZXN0cyBhdXRvbWF0aWNhbGx5IGhhdmUgaXQgYXR0YWNoZWQuIFRoaXMgaXMganVzdFxuICogYSBzaW1wbGUgY29udmVuaWVuY2Ugc28gd2UgZG9uJ3QgaGF2ZSB0byBhdHRhY2ggZXZlcnkgdG9rZW4gbWFudWFsbHkuXG4gKi9cblxubGV0IHRva2VuID0gZG9jdW1lbnQuaGVhZC5xdWVyeVNlbGVjdG9yKCdtZXRhW25hbWU9XCJjc3JmLXRva2VuXCJdJyk7XG5cbmlmICh0b2tlbikge1xuICAgIHdpbmRvdy5heGlvcy5kZWZhdWx0cy5oZWFkZXJzLmNvbW1vblsnWC1DU1JGLVRPS0VOJ10gPSB0b2tlbi5jb250ZW50O1xufSBlbHNlIHtcbiAgICBjb25zb2xlLmVycm9yKCdDU1JGIHRva2VuIG5vdCBmb3VuZDogaHR0cHM6Ly9sYXJhdmVsLmNvbS9kb2NzL2NzcmYjY3NyZi14LWNzcmYtdG9rZW4nKTtcbn1cblxuLyoqXG4gKiBFY2hvIGV4cG9zZXMgYW4gZXhwcmVzc2l2ZSBBUEkgZm9yIHN1YnNjcmliaW5nIHRvIGNoYW5uZWxzIGFuZCBsaXN0ZW5pbmdcbiAqIGZvciBldmVudHMgdGhhdCBhcmUgYnJvYWRjYXN0IGJ5IExhcmF2ZWwuIEVjaG8gYW5kIGV2ZW50IGJyb2FkY2FzdGluZ1xuICogYWxsb3dzIHlvdXIgdGVhbSB0byBlYXNpbHkgYnVpbGQgcm9idXN0IHJlYWwtdGltZSB3ZWIgYXBwbGljYXRpb25zLlxuICovXG5cbi8vIGltcG9ydCBFY2hvIGZyb20gJ2xhcmF2ZWwtZWNobydcblxuLy8gd2luZG93LlB1c2hlciA9IHJlcXVpcmUoJ3B1c2hlci1qcycpO1xuXG4vLyB3aW5kb3cuRWNobyA9IG5ldyBFY2hvKHtcbi8vICAgICBicm9hZGNhc3RlcjogJ3B1c2hlcicsXG4vLyAgICAga2V5OiAneW91ci1wdXNoZXIta2V5J1xuLy8gfSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Jvb3RzdHJhcC5qcyIsInZhciBkaXNwb3NlZCA9IGZhbHNlXG52YXIgbm9ybWFsaXplQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIilcbi8qIHNjcmlwdCAqL1xudmFyIF9fdnVlX3NjcmlwdF9fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVudlxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZSxcXFwidGFyZ2V0c1xcXCI6e1xcXCJicm93c2Vyc1xcXCI6W1xcXCI+IDIlXFxcIl0sXFxcInVnbGlmeVxcXCI6dHJ1ZX19XV0sXFxcInBsdWdpbnNcXFwiOltcXFwidHJhbnNmb3JtLW9iamVjdC1yZXN0LXNwcmVhZFxcXCIsW1xcXCJ0cmFuc2Zvcm0tcnVudGltZVxcXCIse1xcXCJwb2x5ZmlsbFxcXCI6ZmFsc2UsXFxcImhlbHBlcnNcXFwiOmZhbHNlfV1dfSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL0ZlZWRiYWNrRm9ybS52dWVcIilcbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfdGVtcGxhdGVfXyA9IG51bGxcbi8qIHRlbXBsYXRlIGZ1bmN0aW9uYWwgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18gPSBmYWxzZVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBudWxsXG4vKiBzY29wZUlkICovXG52YXIgX192dWVfc2NvcGVJZF9fID0gbnVsbFxuLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG52YXIgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfXyA9IG51bGxcbnZhciBDb21wb25lbnQgPSBub3JtYWxpemVDb21wb25lbnQoXG4gIF9fdnVlX3NjcmlwdF9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18sXG4gIF9fdnVlX3N0eWxlc19fLFxuICBfX3Z1ZV9zY29wZUlkX18sXG4gIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX19cbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL0ZlZWRiYWNrRm9ybS52dWVcIlxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWxvYWRlci9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtZTFkZGQxYzBcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi1lMWRkZDFjMFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBkaXNwb3NlZCA9IHRydWVcbiAgfSlcbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL0ZlZWRiYWNrRm9ybS52dWVcbi8vIG1vZHVsZSBpZCA9IC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL0ZlZWRiYWNrRm9ybS52dWVcbi8vIG1vZHVsZSBjaHVua3MgPSA4IiwidmFyIGRpc3Bvc2VkID0gZmFsc2VcbnZhciBub3JtYWxpemVDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKVxuLyogc2NyaXB0ICovXG52YXIgX192dWVfc2NyaXB0X18gPSByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZW52XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlLFxcXCJ0YXJnZXRzXFxcIjp7XFxcImJyb3dzZXJzXFxcIjpbXFxcIj4gMiVcXFwiXSxcXFwidWdsaWZ5XFxcIjp0cnVlfX1dXSxcXFwicGx1Z2luc1xcXCI6W1xcXCJ0cmFuc2Zvcm0tb2JqZWN0LXJlc3Qtc3ByZWFkXFxcIixbXFxcInRyYW5zZm9ybS1ydW50aW1lXFxcIix7XFxcInBvbHlmaWxsXFxcIjpmYWxzZSxcXFwiaGVscGVyc1xcXCI6ZmFsc2V9XV19IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vVG9wTWVudS52dWVcIilcbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfdGVtcGxhdGVfXyA9IG51bGxcbi8qIHRlbXBsYXRlIGZ1bmN0aW9uYWwgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18gPSBmYWxzZVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBudWxsXG4vKiBzY29wZUlkICovXG52YXIgX192dWVfc2NvcGVJZF9fID0gbnVsbFxuLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG52YXIgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfXyA9IG51bGxcbnZhciBDb21wb25lbnQgPSBub3JtYWxpemVDb21wb25lbnQoXG4gIF9fdnVlX3NjcmlwdF9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18sXG4gIF9fdnVlX3N0eWxlc19fLFxuICBfX3Z1ZV9zY29wZUlkX18sXG4gIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX19cbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL1RvcE1lbnUudnVlXCJcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1sb2FkZXIvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTYyOGQ2YTZkXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtNjI4ZDZhNmRcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgZGlzcG9zZWQgPSB0cnVlXG4gIH0pXG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9Ub3BNZW51LnZ1ZVxuLy8gbW9kdWxlIGlkID0gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvVG9wTWVudS52dWVcbi8vIG1vZHVsZSBjaHVua3MgPSA4IiwidmFyIGRpc3Bvc2VkID0gZmFsc2VcbmZ1bmN0aW9uIGluamVjdFN0eWxlIChzc3JDb250ZXh0KSB7XG4gIGlmIChkaXNwb3NlZCkgcmV0dXJuXG4gIHJlcXVpcmUoXCIhIXZ1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4P3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi0yMjMyNGZkMlxcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL1dyaXRlTGluay52dWVcIilcbn1cbnZhciBub3JtYWxpemVDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKVxuLyogc2NyaXB0ICovXG52YXIgX192dWVfc2NyaXB0X18gPSByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZW52XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlLFxcXCJ0YXJnZXRzXFxcIjp7XFxcImJyb3dzZXJzXFxcIjpbXFxcIj4gMiVcXFwiXSxcXFwidWdsaWZ5XFxcIjp0cnVlfX1dXSxcXFwicGx1Z2luc1xcXCI6W1xcXCJ0cmFuc2Zvcm0tb2JqZWN0LXJlc3Qtc3ByZWFkXFxcIixbXFxcInRyYW5zZm9ybS1ydW50aW1lXFxcIix7XFxcInBvbHlmaWxsXFxcIjpmYWxzZSxcXFwiaGVscGVyc1xcXCI6ZmFsc2V9XV19IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vV3JpdGVMaW5rLnZ1ZVwiKVxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMjIzMjRmZDJcXFwiLFxcXCJoYXNTY29wZWRcXFwiOnRydWUsXFxcImJ1YmxlXFxcIjp7XFxcInRyYW5zZm9ybXNcXFwiOnt9fX0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL1dyaXRlTGluay52dWVcIilcbi8qIHRlbXBsYXRlIGZ1bmN0aW9uYWwgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18gPSBmYWxzZVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBpbmplY3RTdHlsZVxuLyogc2NvcGVJZCAqL1xudmFyIF9fdnVlX3Njb3BlSWRfXyA9IFwiZGF0YS12LTIyMzI0ZmQyXCJcbi8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xudmFyIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSBudWxsXG52YXIgQ29tcG9uZW50ID0gbm9ybWFsaXplQ29tcG9uZW50KFxuICBfX3Z1ZV9zY3JpcHRfXyxcbiAgX192dWVfdGVtcGxhdGVfXyxcbiAgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fLFxuICBfX3Z1ZV9zdHlsZXNfXyxcbiAgX192dWVfc2NvcGVJZF9fLFxuICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9Xcml0ZUxpbmsudnVlXCJcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1sb2FkZXIvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTIyMzI0ZmQyXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtMjIzMjRmZDJcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgZGlzcG9zZWQgPSB0cnVlXG4gIH0pXG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9Xcml0ZUxpbmsudnVlXG4vLyBtb2R1bGUgaWQgPSAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9Xcml0ZUxpbmsudnVlXG4vLyBtb2R1bGUgY2h1bmtzID0gOCJdLCJzb3VyY2VSb290IjoiIn0=