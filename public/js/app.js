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
      eyeTransformWithAngle: 'translate(13.000000, 36.000000) rotate(40.000000) translate(-13.000000, -36.000000) translate(8.000000, 31.000000)'
    };
  },
  mounted: function mounted() {
    this.checkTopOffset();
    // this.initFlicker();
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
    toWrite: function toWrite() {
      this.$parent.$emit('go-write', true);
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
exports.push([module.i, "\na[data-v-22324fd2] {\n  font-weight: bold;\n}\n\n", "", {"version":3,"sources":["/Users/petja/PhpstormProjects/adminoid.com/resources/assets/js/components/resources/assets/js/components/WriteLink.vue"],"names":[],"mappings":";AAkBA;EACA,kBAAA;CACA","file":"WriteLink.vue","sourcesContent":["<template>\n  <a href=\"#\" @click.prevent.stop=\"goWrite\"><slot></slot></a>\n</template>\n\n<script>\n  export default {\n    name: \"WriteLink\",\n\n    methods: {\n      goWrite () {\n        this.$parent.$emit('go-write',true);\n      }\n    }\n  }\n</script>\n\n<style scoped>\n\n  a {\n    font-weight: bold;\n  }\n\n</style>\n"],"sourceRoot":""}]);

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
  __webpack_require__.e/* require */(1).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("./resources/assets/js/components/pages/index/Cube.vue")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
});

Vue.component("clock", function (resolve) {
  __webpack_require__.e/* require */(4).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("./resources/assets/js/components/pages/price/Clock.vue")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
});

Vue.component("tools-block", function (resolve) {
  __webpack_require__.e/* require */(3).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("./resources/assets/js/components/pages/tools/ToolsBlock.vue")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
});

Vue.component("zoom", function (resolve) {
  __webpack_require__.e/* require */(5).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("./resources/assets/js/components/pages/portfolio/Zoom.vue")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
});

Vue.component("video-background", function (resolve) {
  __webpack_require__.e/* require */(0).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("./resources/assets/js/components/pages/portfolio/VideoBackground.vue")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
});

Vue.component("half-rotate", function (resolve) {
  __webpack_require__.e/* require */(2).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("./resources/assets/js/components/pages/workflow/HalfRotate.vue")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL0ZlZWRiYWNrRm9ybS52dWUiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9Ub3BNZW51LnZ1ZSIsIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL1dyaXRlTGluay52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL1dyaXRlTGluay52dWU/NzU0NyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9Xcml0ZUxpbmsudnVlP2IyZTQiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL1dyaXRlTGluay52dWU/MWUxMiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9saXN0VG9TdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9ib290c3RyYXAuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL0ZlZWRiYWNrRm9ybS52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL1RvcE1lbnUudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9Xcml0ZUxpbmsudnVlIl0sIm5hbWVzIjpbInJlcXVpcmUiLCJ3aW5kb3ciLCJWdWUiLCJjb21wb25lbnQiLCJyZXNvbHZlIiwiYXBwIiwiZWwiLCJjb21wb25lbnRzIiwiVG9wTWVudSIsIkZlZWRiYWNrRm9ybSIsIldyaXRlTGluayIsImRhdGEiLCJ3cml0ZSIsIiRvbiIsIiRtb2RhbCIsIiQiLCJtb2RhbCIsInRyYW5zaXRpb24iLCJvbkhpZGUiLCJzZXRUaW1lb3V0IiwiXyIsImpRdWVyeSIsImUiLCJheGlvcyIsImRlZmF1bHRzIiwiaGVhZGVycyIsImNvbW1vbiIsInRva2VuIiwiZG9jdW1lbnQiLCJoZWFkIiwicXVlcnlTZWxlY3RvciIsImNvbnRlbnQiLCJjb25zb2xlIiwiZXJyb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDQTs7SUFDQSxNO0FBQ0E7QUFBQTs7QUFDQTtBQUNBOzs7O3dCQUNBLEssRUFBQTtBQUNBO0FBQ0E7OzswQkFDQTtBQUNBO0FBQ0E7Ozt3QkFDQSxLLEVBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7MkJBQ0EsTSxFQUFBO0FBQ0E7QUFDQTs7OzBCQUNBLEssRUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0lBR0EsSTtBQUNBO0FBQUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7MkJBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7NEJBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7MkJBQ0EsVyxFQUFBLEcsRUFBQTtBQUFBOztBQUNBO0FBQ0Esc0ZBQ0EsSUFEQSxDQUNBO0FBQ0E7QUFDQTtBQUNBLFNBSkEsRUFLQSxLQUxBLENBS0E7QUFDQTtBQUNBLFNBUEE7QUFRQSxPQVRBO0FBVUE7Ozs4QkFDQSxJLEVBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OzJCQUNBLE0sRUFBQTtBQUNBO0FBQ0E7Ozs7OztBQUdBO0FBQ0EsTUFEQSxrQkFDQTtBQUNBO0FBQ0E7QUFDQSxp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Q0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7O0FBRUQiLCJmaWxlIjoiL2pzL2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQ+XG4gIGltcG9ydCBheGlvcyBmcm9tICdheGlvcydcbiAgY2xhc3MgRXJyb3JzIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgIHRoaXMuZXJyb3JzID0ge31cbiAgICB9XG4gICAgaGFzKGZpZWxkKSB7XG4gICAgICByZXR1cm4gdGhpcy5lcnJvcnMuaGFzT3duUHJvcGVydHkoZmllbGQpXG4gICAgfVxuICAgIGFueSgpIHtcbiAgICAgIHJldHVybiBPYmplY3Qua2V5cyh0aGlzLmVycm9ycykubGVuZ3RoID4gMFxuICAgIH1cbiAgICBnZXQoZmllbGQpIHtcbiAgICAgIGNvbnNvbGUubG9nKGZpZWxkKTtcbiAgICAgIGlmICh0aGlzLmVycm9yc1tmaWVsZF0pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZXJyb3JzW2ZpZWxkXVswXVxuICAgICAgfVxuICAgIH1cbiAgICByZWNvcmQoZXJyb3JzKSB7XG4gICAgICB0aGlzLmVycm9ycyA9IGVycm9yc1xuICAgIH1cbiAgICBjbGVhcihmaWVsZCkge1xuICAgICAgaWYgKGZpZWxkKSB7XG4gICAgICAgIGRlbGV0ZSB0aGlzLmVycm9yc1tmaWVsZF1cbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICB0aGlzLmVycm9ycyA9IHt9XG4gICAgfVxuICB9XG5cbiAgY2xhc3MgRm9ybSB7XG4gICAgY29uc3RydWN0b3IoZGF0YSkge1xuICAgICAgdGhpcy5vcmlnaW5hbERhdGEgPSBkYXRhO1xuICAgICAgZm9yIChsZXQgZmllbGQgaW4gZGF0YSkge1xuICAgICAgICB0aGlzW2ZpZWxkXSA9IGRhdGFbZmllbGRdXG4gICAgICB9XG4gICAgICB0aGlzLmVycm9ycyA9IG5ldyBFcnJvcnMoKVxuICAgICAgdGhpcy5zdWNjZXNzID0gZmFsc2VcbiAgICB9XG4gICAgZGF0YSgpIHtcbiAgICAgIGxldCBkYXRhID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcylcbiAgICAgIGRlbGV0ZSBkYXRhLm9yaWdpbmFsRGF0YVxuICAgICAgZGVsZXRlIGRhdGEuZXJyb3JzXG4gICAgICByZXR1cm4gZGF0YVxuICAgIH1cbiAgICByZXNldCgpIHtcbiAgICAgIGZvciAobGV0IGZpZWxkIGluIHRoaXMub3JpZ2luYWxEYXRhKSB7XG4gICAgICAgIHRoaXNbZmllbGRdID0gJydcbiAgICAgIH1cbiAgICAgIHRoaXMuZXJyb3JzLmNsZWFyKClcbiAgICB9XG4gICAgc3VibWl0KHJlcXVlc3RUeXBlLCB1cmwpIHtcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIGF4aW9zW3JlcXVlc3RUeXBlXSh1cmwsIHRoaXMuZGF0YSgpKVxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgICAgdGhpcy5vblN1Y2Nlc3MocmVzcG9uc2UuZGF0YSlcbiAgICAgICAgICByZXNvbHZlKHJlc3BvbnNlLmRhdGEpXG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgdGhpcy5vbkZhaWwoZXJyb3IucmVzcG9uc2UuZGF0YSlcbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgfVxuICAgIG9uU3VjY2VzcyhkYXRhKSB7XG4gICAgICB0aGlzLnJlc2V0KCk7XG4gICAgICB0aGlzLm1lc3NhZ2UgPSBkYXRhLm1lc3NhZ2U7XG4gICAgICB0aGlzLnN1Y2Nlc3MgPSB0cnVlO1xuICAgIH1cbiAgICBvbkZhaWwoZXJyb3JzKSB7XG4gICAgICB0aGlzLmVycm9ycy5yZWNvcmQoZXJyb3JzLmVycm9ycyk7XG4gICAgfVxuICB9XG5cbiAgZXhwb3J0IGRlZmF1bHQge1xuICAgIGRhdGEgKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZm9ybTogbmV3IEZvcm0oe1xuICAgICAgICAgIGVtYWlsOiAnJyxcbiAgICAgICAgICB0ZXh0OiAnJyxcbiAgICAgICAgICAvLyBmaXJzdF9uYW1lOiAnJyxcbiAgICAgICAgICAvLyBsYXN0X25hbWU6ICcnLFxuICAgICAgICAgIC8vIHBob25lOiAnJyxcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgIG9uU3VibWl0KCkge1xuICAgICAgICB0aGlzLmZvcm0uc3VibWl0KCdwb3N0JywgJy9mZWVkYmFjay1tZXNzYWdlcycpXG4gICAgICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICB0aGlzLm1lc3NhZ2UgPSBkYXRhLm1lc3NhZ2U7XG4gICAgICAgICAgICAvLyB0aGlzLiRwYXJlbnQuJGVtaXQoJ3N0b3Atd3JpdGUnLHRydWUpO1xuICAgICAgICAgIH0pO1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAuY2F0Y2goZXJyb3JzID0+IGNvbnNvbGUubG9nKGVycm9ycykpXG4gICAgICB9XG4gICAgfVxuICB9XG48L3NjcmlwdD5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyByZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvRmVlZGJhY2tGb3JtLnZ1ZSIsIjxzY3JpcHQ+XG4gIGltcG9ydCB7VHdlZW5NYXgsIFRpbWVsaW5lTGl0ZX0gZnJvbSAnZ3NhcCdcbiAgZXhwb3J0IGRlZmF1bHQge1xuXG4gICAgcHJvcHM6IFsnd3JpdGUnXSxcblxuICAgIGRhdGEgKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLy8gYnJvd3NlcjogMCxcbiAgICAgICAgdGltZWxpbmU6IG51bGwsXG4gICAgICAgIHRvcE9mZnNldDogMCxcbiAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICB0b3BPZmZzZXRGb3JUb2dnbGVBbmltYXRpb246IDMwMFxuICAgICAgICB9LFxuICAgICAgICBjdXJzb3I6IHtcbiAgICAgICAgICB4OiAwLFxuICAgICAgICAgIHk6IDBcbiAgICAgICAgfSxcbiAgICAgICAgc2VsZWN0b3JzOiB7XG4gICAgICAgICAgZ3NhcDoge1xuICAgICAgICAgICAgc3ZnTG9nbzogJyNoZWFkZXItbG9nby1zdmcnLFxuICAgICAgICAgICAgbGVmdEhhbmQ6ICcjbGVmdC1oYW5kJyxcbiAgICAgICAgICAgIHJpZ2h0SGFuZDogJyNyaWdodC1oYW5kJyxcbiAgICAgICAgICAgIG1hbkJvZHk6ICcjbWFuLWZ1bGwnLFxuICAgICAgICAgICAgaGVhZDogJyNoZWFkJyxcbiAgICAgICAgICAgIGV5ZVB1cGlsOiAnI2V5ZS1wdXBpbCcsXG4gICAgICAgICAgICB0ZXh0QWRtaW5vaWQ6ICcjc3RyaXBwZWQtbG9nby10ZXh0JyxcbiAgICAgICAgICAgIHRleHRzV2VibWFzdGVyOiAnI3dlYi1NYXN0ZXInLFxuICAgICAgICAgICAgdGV4dHNXZWJtYXN0ZXJMZXR0ZXI6ICcud20tdGwnLFxuICAgICAgICAgICAgdGV4dFdlYjogJ3RzcGFuI3dlYicsXG4gICAgICAgICAgICB0ZXh0TWFzdGVyOiAndHNwYW4jbWFzdGVyJyxcbiAgICAgICAgICAgIHRleHRzV2VibWFzdGVyV3JhcHBlcjogJyNSZWN0YW5nbGUtMjEnLFxuICAgICAgICAgICAgdG9wTWVudTogJyN0b3AtbWVudScsXG4gICAgICAgICAgICB0b3BNZW51SXRlbTogJy5pdGVtJyxcbiAgICAgICAgICAgIC8vIGZsaWNrZXJcbiAgICAgICAgICAgIHJlY3RhbmdsZUNlbnRlckNvbG9yOiAnI1JlY3RhbmdsZS1HcmVlbicsXG4gICAgICAgICAgICByZWN0YW5nbGVzQm9yZGVyQ29sb3I6ICcuUmVjdGFuZ2xlLVJlZCdcbiAgICAgICAgICB9LFxuICAgICAgICAgIGV5ZTogJyNleWUtcHVwaWwnXG4gICAgICAgIH0sXG4gICAgICAgIHJlZHVjZWQ6IGZhbHNlLFxuICAgICAgICAkZXllOiB7fSxcbiAgICAgICAgZXllVHJhbnNmb3JtV2l0aEFuZ2xlOiAndHJhbnNsYXRlKDEzLjAwMDAwMCwgMzYuMDAwMDAwKSByb3RhdGUoNDAuMDAwMDAwKSB0cmFuc2xhdGUoLTEzLjAwMDAwMCwgLTM2LjAwMDAwMCkgdHJhbnNsYXRlKDguMDAwMDAwLCAzMS4wMDAwMDApJ1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBtb3VudGVkICgpIHtcbiAgICAgIHRoaXMuY2hlY2tUb3BPZmZzZXQoKTtcbiAgICAgIC8vIHRoaXMuaW5pdEZsaWNrZXIoKTtcbiAgICAgIHRoaXMudGltZWxpbmUgPSB0aGlzLmNvbXBpbGVUaW1lbGluZSgpO1xuICAgICAgdGhpcy4kZXllID0gJCh0aGlzLiRlbCkuZmluZCh0aGlzLnNlbGVjdG9ycy5leWUpO1xuXG4gICAgICAvLyB0aGlzLmJyb3dzZXIgPSB0aGlzLmRldGVjdEJyb3dzZXIoKTtcbiAgICB9LFxuXG4gICAgY3JlYXRlZDogZnVuY3Rpb24gKCkge1xuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuY2hlY2tUb3BPZmZzZXQpO1xuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMuZXllTW92ZSk7XG4gICAgfSxcblxuICAgIGJlZm9yZURlc3Ryb3k6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLmNoZWNrVG9wT2Zmc2V0KTtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzLmV5ZU1vdmUpO1xuICAgIH0sXG5cbiAgICB3YXRjaDoge1xuICAgICAgdG9wT2Zmc2V0OiBmdW5jdGlvbiAodmFsLCBvbGRWYWwpIHtcbiAgICAgICAgaWYgKG9sZFZhbCA8IHRoaXMuc2V0dGluZ3MudG9wT2Zmc2V0Rm9yVG9nZ2xlQW5pbWF0aW9uICYmIHZhbCA+PSB0aGlzLnNldHRpbmdzLnRvcE9mZnNldEZvclRvZ2dsZUFuaW1hdGlvbikge1xuICAgICAgICAgIHRoaXMucnVuTG9nb0FuaW1hdGlvbigpXG4gICAgICAgIH0gZWxzZSBpZiAob2xkVmFsID49IHRoaXMuc2V0dGluZ3MudG9wT2Zmc2V0Rm9yVG9nZ2xlQW5pbWF0aW9uICYmIHZhbCA8IHRoaXMuc2V0dGluZ3MudG9wT2Zmc2V0Rm9yVG9nZ2xlQW5pbWF0aW9uKSB7XG4gICAgICAgICAgdGhpcy5ydW5Mb2dvQW5pbWF0aW9uKCdiYWNrd2FyZCcpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgbWV0aG9kczoge1xuICAgICAgdG9Xcml0ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLiRwYXJlbnQuJGVtaXQoJ2dvLXdyaXRlJyx0cnVlKTtcbiAgICAgIH0sXG5cbiAgICAgIGV5ZU1vdmU6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGlmICghdGhpcy5yZWR1Y2VkKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIHRoaXMuY3Vyc29yLnggPSBlLnBhZ2VYO1xuICAgICAgICB0aGlzLmN1cnNvci55ID0gZS5wYWdlWTtcblxuICAgICAgICAvLyBsZXQgYWRqdXN0bWVudDtcbiAgICAgICAgLy8gc3dpdGNoICh0aGlzLmJyb3dzZXIpIHtcbiAgICAgICAgLy8gICBjYXNlICdjaHJvbWUnOlxuICAgICAgICAvLyAgICAgYWRqdXN0bWVudCA9IDEwODI7XG4gICAgICAgIC8vICAgICBicmVhaztcbiAgICAgICAgLy8gICBjYXNlICdzYWZhcmknOlxuICAgICAgICAvLyAgICAgYWRqdXN0bWVudCA9IDg4MjtcbiAgICAgICAgLy8gICAgIGJyZWFrO1xuICAgICAgICAvLyAgIGNhc2UgJ2ZpcmVmb3gnOlxuICAgICAgICAvLyAgICAgYWRqdXN0bWVudCA9IDM4MjtcbiAgICAgICAgLy8gICAgIGJyZWFrO1xuICAgICAgICAvLyB9XG5cbiAgICAgICAgLy8gbGV0IGV5ZUNlbnRlciA9IFt0aGlzLiRleWVbMF0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdCArIHRoaXMuJGV5ZS53aWR0aCgpIC8gMiwgdGhpcy4kZXllWzBdLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCArIGFkanVzdG1lbnQgKyB0aGlzLiRleWUuaGVpZ2h0KCkgLyAyXTtcbiAgICAgICAgbGV0IGV5ZUNlbnRlciA9IFt0aGlzLiRleWVbMF0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdCArIHRoaXMuZ2V0U2Nyb2xsT2Zmc2V0KCkubGVmdCArIHRoaXMuJGV5ZS53aWR0aCgpIC8gMiwgdGhpcy4kZXllWzBdLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCArIHRoaXMuZ2V0U2Nyb2xsT2Zmc2V0KCkudG9wICsgdGhpcy4kZXllLmhlaWdodCgpIC8gMl07XG4gICAgICAgIGxldCBleWVBbmdsZSA9IE1hdGguYXRhbjIoZS5wYWdlWCAtIGV5ZUNlbnRlclswXSwgLShlLnBhZ2VZIC0gZXllQ2VudGVyWzFdKSkgKiAoMTgwIC8gTWF0aC5QSSkgLSA5MDtcblxuICAgICAgICB0aGlzLmV5ZVRyYW5zZm9ybVdpdGhBbmdsZSA9ICd0cmFuc2xhdGUoMTMuMDAwMDAwLCAzNi4wMDAwMDApIHJvdGF0ZSgnICsgZXllQW5nbGUgKyAnKSB0cmFuc2xhdGUoLTEzLjAwMDAwMCwgLTM2LjAwMDAwMCkgdHJhbnNsYXRlKDguMDAwMDAwLCAzMS4wMDAwMDApJztcbiAgICAgIH0sXG5cbiAgICAgIGdldFNjcm9sbE9mZnNldCAoKSB7XG4gICAgICAgIGNvbnN0IGRvYyA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBsZWZ0OiAod2luZG93LnBhZ2VYT2Zmc2V0IHx8IGRvYy5zY3JvbGxMZWZ0KSAtIChkb2MuY2xpZW50TGVmdCB8fCAwKSxcbiAgICAgICAgICB0b3A6ICh3aW5kb3cucGFnZVlPZmZzZXQgfHwgZG9jLnNjcm9sbFRvcCkgIC0gKGRvYy5jbGllbnRUb3AgfHwgMCksXG4gICAgICAgIH07XG4gICAgICB9LFxuXG4gICAgICAvLyBkZXRlY3RCcm93c2VyICgpIHtcbiAgICAgIC8vICAgY29uc3QgdWEgPSBuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCk7XG4gICAgICAvLyAgIC8vIGNvbnNvbGUubG9nKHVhKTtcbiAgICAgIC8vXG4gICAgICAvLyAgIGlmICh1YS5pbmRleE9mKCdmaXJlZm94JykgIT0gLTEpIHtcbiAgICAgIC8vICAgICByZXR1cm4gJ2ZpcmVmb3gnO1xuICAgICAgLy8gICB9XG4gICAgICAvLyAgIGVsc2UgaWYgKHVhLmluZGV4T2YoJ3NhZmFyaScpICE9IC0xKSB7XG4gICAgICAvLyAgICAgaWYgKHVhLmluZGV4T2YoJ2Nocm9tZScpID4gLTEpIHtcbiAgICAgIC8vICAgICAgIHJldHVybiAnY2hyb21lJztcbiAgICAgIC8vICAgICB9IGVsc2Uge1xuICAgICAgLy8gICAgICAgcmV0dXJuICdzYWZhcmknO1xuICAgICAgLy8gICAgIH1cbiAgICAgIC8vICAgfVxuICAgICAgLy8gfSxcblxuICAgICAgdG9nZ2xlU2lkZWJhcjogZnVuY3Rpb24gKCkge1xuICAgICAgICAkKCcjdG9wLW1lbnUtc2lkZWJhcicpXG4gICAgICAgIC5zaWRlYmFyKHtcbiAgICAgICAgICB0cmFuc2l0aW9uOiAnb3ZlcmxheSdcbiAgICAgICAgfSlcbiAgICAgICAgLnNpZGViYXIoJ3RvZ2dsZScpO1xuICAgICAgfSxcblxuICAgICAgaW5pdEZsaWNrZXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3Qgc3RlcCA9IDE7XG4gICAgICAgIFR3ZWVuTWF4LnRvKHRoaXMuc2VsZWN0b3JzLmdzYXAucmVjdGFuZ2xlQ2VudGVyQ29sb3IsIHN0ZXAsIHtcbiAgICAgICAgICBmaWxsOiAnI0NEMkU0MScsXG4gICAgICAgICAgcmVwZWF0OiAtMSxcbiAgICAgICAgICB5b3lvOiB0cnVlLFxuICAgICAgICAgIHJlcGVhdERlbGF5OiBzdGVwICogM1xuICAgICAgICB9KTtcbiAgICAgICAgVHdlZW5NYXgudG8odGhpcy5zZWxlY3RvcnMuZ3NhcC5yZWN0YW5nbGVzQm9yZGVyQ29sb3IsIHN0ZXAsIHtcbiAgICAgICAgICBmaWxsOiAnIzFENjBCNScsXG4gICAgICAgICAgcmVwZWF0OiAtMSxcbiAgICAgICAgICB5b3lvOiB0cnVlLFxuICAgICAgICAgIHJlcGVhdERlbGF5OiBzdGVwICogMyxcbiAgICAgICAgICBkZWxheTogc3RlcCAqIDNcbiAgICAgICAgfSk7XG4gICAgICAgIFR3ZWVuTWF4LmZyb21Ubyh0aGlzLnNlbGVjdG9ycy5nc2FwLnRleHRXZWIsIHN0ZXAgKiAyLFxuICAgICAgICB7XG4gICAgICAgICAgZmlsbDogJyNGRkZGRkYnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBmaWxsOiAnI0ZGOTgxQycsXG4gICAgICAgICAgcmVwZWF0OiAtMSxcbiAgICAgICAgICByZXBlYXREZWxheTogc3RlcCAqIDIsXG4gICAgICAgICAgeW95bzogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgVHdlZW5NYXguZnJvbVRvKHRoaXMuc2VsZWN0b3JzLmdzYXAudGV4dE1hc3Rlciwgc3RlcCAqIDIsXG4gICAgICAgIHtcbiAgICAgICAgICBmaWxsOiAnI0ZGOTgxQydcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGZpbGw6ICcjRkZGRkZGJyxcbiAgICAgICAgICByZXBlYXQ6IC0xLFxuICAgICAgICAgIHJlcGVhdERlbGF5OiBzdGVwICogMixcbiAgICAgICAgICB5b3lvOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgfSxcblxuICAgICAgcnVuTG9nb0FuaW1hdGlvbjogZnVuY3Rpb24gKGRpcmVjdGlvbiA9ICdmb3J3YXJkJykge1xuICAgICAgICBpZiAoZGlyZWN0aW9uID09PSAnZm9yd2FyZCcpIHtcbiAgICAgICAgICB0aGlzLnJlZHVjZWQgPSB0cnVlO1xuICAgICAgICAgIHRoaXMudGltZWxpbmUucGF1c2UoKS5wbGF5KCk7XG4gICAgICAgIH0gZWxzZSBpZiAoZGlyZWN0aW9uID09PSAnYmFja3dhcmQnKSB7XG4gICAgICAgICAgdGhpcy5yZWR1Y2VkID0gZmFsc2U7XG4gICAgICAgICAgdGhpcy50aW1lbGluZS5wYXVzZSgpLnJldmVyc2UoKTtcbiAgICAgICAgfVxuICAgICAgfSxcblxuICAgICAgY2hlY2tUb3BPZmZzZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy50b3BPZmZzZXQgPSB3aW5kb3cucGFnZVlPZmZzZXRcbiAgICAgIH0sXG5cbiAgICAgIGNvbXBpbGVUaW1lbGluZTogZnVuY3Rpb24gKCkge1xuICAgICAgICBsZXQgcGFydDF0aW1lID0gMC4yLFxuICAgICAgICBwYXJ0MnRpbWUgPSAwLjUsXG4gICAgICAgICRsb2dvID0gJCh0aGlzLnNlbGVjdG9ycy5nc2FwLnN2Z0xvZ28pLFxuICAgICAgICAkbGVmdEhhbmQgPSAkbG9nby5maW5kKHRoaXMuc2VsZWN0b3JzLmdzYXAubGVmdEhhbmQpLFxuICAgICAgICAkcmlnaHRIYW5kID0gJGxvZ28uZmluZCh0aGlzLnNlbGVjdG9ycy5nc2FwLnJpZ2h0SGFuZCksXG4gICAgICAgICRtYW5Cb2R5ID0gJGxvZ28uZmluZCh0aGlzLnNlbGVjdG9ycy5nc2FwLm1hbkJvZHkpLFxuICAgICAgICAkaGVhZCA9ICRsb2dvLmZpbmQodGhpcy5zZWxlY3RvcnMuZ3NhcC5oZWFkKSxcbiAgICAgICAgJGV5ZVB1cGlsID0gJGxvZ28uZmluZCh0aGlzLnNlbGVjdG9ycy5nc2FwLmV5ZVB1cGlsKSxcbiAgICAgICAgJHRleHRBZG1pbm9pZCA9ICRsb2dvLmZpbmQodGhpcy5zZWxlY3RvcnMuZ3NhcC50ZXh0QWRtaW5vaWQpLFxuICAgICAgICBsZXR0ZXJzV2VibWFzdGVyID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoXG4gICAgICAgICRsb2dvLmZpbmQodGhpcy5zZWxlY3RvcnMuZ3NhcC50ZXh0c1dlYm1hc3RlcikuZmluZCh0aGlzLnNlbGVjdG9ycy5nc2FwLnRleHRzV2VibWFzdGVyTGV0dGVyKVxuICAgICAgICApLFxuICAgICAgICB0ZXh0c1dlYm1hc3RlcldyYXBwZXIgPSAkbG9nby5maW5kKHRoaXMuc2VsZWN0b3JzLmdzYXAudGV4dHNXZWJtYXN0ZXJXcmFwcGVyKSxcbiAgICAgICAgJHRvcE1lbnUgPSAkKGRvY3VtZW50KS5maW5kKHRoaXMuc2VsZWN0b3JzLmdzYXAudG9wTWVudSksXG4gICAgICAgIHRvcE1lbnVJdGVtc0ZvclJlc2l6aW5nID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoJHRvcE1lbnUuZmluZCh0aGlzLnNlbGVjdG9ycy5nc2FwLnRvcE1lbnVJdGVtKSk7XG5cbiAgICAgICAgdG9wTWVudUl0ZW1zRm9yUmVzaXppbmcucHVzaCgkdG9wTWVudSk7XG5cbiAgICAgICAgbGV0IHRsTGVmdEhhbmQgPSBuZXcgVGltZWxpbmVMaXRlKCk7XG5cbiAgICAgICAgLy8gSGFuZHMgKHdhdmluZylcbiAgICAgICAgdGxMZWZ0SGFuZC5hZGQoVHdlZW5NYXguZnJvbVRvKCRsZWZ0SGFuZCwgMC4wOCwge1xuICAgICAgICAgIHJvdGF0aW9uOiAwXG4gICAgICAgIH0sIHtcbiAgICAgICAgICByb3RhdGlvbjogMzUsXG4gICAgICAgICAgdHJhbnNmb3JtT3JpZ2luOiAnOTAlIDEwMCUnXG4gICAgICAgIH0pKVxuICAgICAgICAuYWRkKFR3ZWVuTWF4LnRvKCRsZWZ0SGFuZCwgMC4wOCwge3JvdGF0aW9uOiAtNTAsIHRyYW5zZm9ybU9yaWdpbjogJzkwJSAxMDAlJ30pKVxuICAgICAgICAuYWRkKFR3ZWVuTWF4LnRvKCRsZWZ0SGFuZCwgMC4wOCwge3JvdGF0aW9uOiAzNSwgdHJhbnNmb3JtT3JpZ2luOiAnOTAlIDEwMCUnfSkpXG4gICAgICAgIC5hZGQoVHdlZW5NYXgudG8oJGxlZnRIYW5kLCAwLjA4LCB7cm90YXRpb246IC01MCwgdHJhbnNmb3JtT3JpZ2luOiAnOTAlIDEwMCUnfSkpXG4gICAgICAgIC5hZGQoVHdlZW5NYXgudG8oJGxlZnRIYW5kLCAwLjA4LCB7cm90YXRpb246IDM1LCB0cmFuc2Zvcm1PcmlnaW46ICc5MCUgMTAwJSd9KSlcbiAgICAgICAgLmFkZChUd2Vlbk1heC50bygkbGVmdEhhbmQsIDAuMDgsIHtyb3RhdGlvbjogLTUwLCB0cmFuc2Zvcm1PcmlnaW46ICc5MCUgMTAwJSd9KSlcbiAgICAgICAgLmFkZChUd2Vlbk1heC50bygkbGVmdEhhbmQsIDAuMTAsIHtyb3RhdGlvbjogMzUsIHRyYW5zZm9ybU9yaWdpbjogJzkwJSAxMDAlJ30pKVxuICAgICAgICAuYWRkKFR3ZWVuTWF4LnRvKCRsZWZ0SGFuZCwgMC4xNSwge3JvdGF0aW9uOiAtNzUsIHRyYW5zZm9ybU9yaWdpbjogJzkwJSAxMDAlJ30pKTtcblxuICAgICAgICBsZXQgdGxSaWdodEhhbmQgPSBuZXcgVGltZWxpbmVMaXRlKCk7XG4gICAgICAgIHRsUmlnaHRIYW5kLmFkZChUd2Vlbk1heC5mcm9tVG8oJHJpZ2h0SGFuZCwgMC4wOCwge1xuICAgICAgICAgIHJvdGF0aW9uOiAwXG4gICAgICAgIH0sIHtcbiAgICAgICAgICByb3RhdGlvbjogLTM1LFxuICAgICAgICAgIHRyYW5zZm9ybU9yaWdpbjogJzEwJSAxMDAlJ1xuICAgICAgICB9KSk7XG4gICAgICAgIHRsUmlnaHRIYW5kLmFkZChUd2Vlbk1heC50bygkcmlnaHRIYW5kLCAwLjA4LCB7cm90YXRpb246IDUwLCB0cmFuc2Zvcm1PcmlnaW46ICcxMCUgMTAwJSd9KSk7XG4gICAgICAgIHRsUmlnaHRIYW5kLmFkZChUd2Vlbk1heC50bygkcmlnaHRIYW5kLCAwLjA4LCB7cm90YXRpb246IC0zNSwgdHJhbnNmb3JtT3JpZ2luOiAnMTAlIDEwMCUnfSkpO1xuICAgICAgICB0bFJpZ2h0SGFuZC5hZGQoVHdlZW5NYXgudG8oJHJpZ2h0SGFuZCwgMC4wOCwge3JvdGF0aW9uOiA1MCwgdHJhbnNmb3JtT3JpZ2luOiAnMTAlIDEwMCUnfSkpO1xuICAgICAgICB0bFJpZ2h0SGFuZC5hZGQoVHdlZW5NYXgudG8oJHJpZ2h0SGFuZCwgMC4wOCwge3JvdGF0aW9uOiAtMzUsIHRyYW5zZm9ybU9yaWdpbjogJzEwJSAxMDAlJ30pKTtcbiAgICAgICAgdGxSaWdodEhhbmQuYWRkKFR3ZWVuTWF4LnRvKCRyaWdodEhhbmQsIDAuMDgsIHtyb3RhdGlvbjogNTAsIHRyYW5zZm9ybU9yaWdpbjogJzEwJSAxMDAlJ30pKTtcbiAgICAgICAgdGxSaWdodEhhbmQuYWRkKFR3ZWVuTWF4LnRvKCRyaWdodEhhbmQsIDAuMTAsIHtyb3RhdGlvbjogLTM1LCB0cmFuc2Zvcm1PcmlnaW46ICcxMCUgMTAwJSd9KSk7XG4gICAgICAgIHRsUmlnaHRIYW5kLmFkZChUd2Vlbk1heC50bygkcmlnaHRIYW5kLCAwLjE1LCB7cm90YXRpb246IDc1LCB0cmFuc2Zvcm1PcmlnaW46ICcxMCUgMTAwJSd9KSk7XG4gICAgICAgIGxldCB0bEhhbmRzID0gbmV3IFRpbWVsaW5lTGl0ZSgpO1xuICAgICAgICB0bEhhbmRzLmFkZCh0bExlZnRIYW5kLCAwKTtcbiAgICAgICAgdGxIYW5kcy5hZGQodGxSaWdodEhhbmQsIDApO1xuXG4gICAgICAgIC8vIEJvZHksIHBhcnQgMVxuICAgICAgICBsZXQgdGxCb2R5ID0gbmV3IFRpbWVsaW5lTGl0ZSgpO1xuICAgICAgICB0bEJvZHkuYWRkKFR3ZWVuTWF4LnRvKCRtYW5Cb2R5LCAwLjIsXG4gICAgICAgIHt5OiAwLCB4OiAwLCByb3RhdGlvbjogMH0sXG4gICAgICAgIHt5OiAtMTAsIHg6IDIwLCByb3RhdGlvbjogMzUsIHRyYW5zZm9ybU9yaWdpbjogJzUwJSA1MCUnfVxuICAgICAgICApKVxuICAgICAgICAvLyBCb2R5LCBwYXJ0IDJcbiAgICAgICAgLmFkZChUd2Vlbk1heC50bygkbWFuQm9keSwgMC41LFxuICAgICAgICB7eTogLTUsIHg6IDE4MCwgcm90YXRpb246IDkwLCB0cmFuc2Zvcm1PcmlnaW46ICc1MCUgNTAlJ31cbiAgICAgICAgKSk7XG5cbiAgICAgICAgLy8gSGVhZFxuICAgICAgICBsZXQgdGxIZWFkID0gbmV3IFRpbWVsaW5lTGl0ZSgpO1xuICAgICAgICB0bEhlYWQuZnJvbVRvKCRoZWFkLCAwLjMsXG4gICAgICAgIHthdXRvQWxwaGE6IDF9LFxuICAgICAgICB7YXV0b0FscGhhOiAwfVxuICAgICAgICApO1xuXG4gICAgICAgIC8vIFNWRyBpbWcgc2l6ZSAoYmVnaW4gZnJvbSBwYXJ0MXRpbWUpXG4gICAgICAgIGxldCB0bExvZ29TaXplID0gbmV3IFRpbWVsaW5lTGl0ZSgpO1xuICAgICAgICB0bExvZ29TaXplLmFkZChUd2Vlbk1heC50bygkbG9nbywgcGFydDF0aW1lLFxuICAgICAgICB7YXR0cjoge3ZpZXdCb3g6ICcwIDAgMjE5IDQyJ30sIHdpZHRoOiAyMTksIGhlaWdodDogNDJ9XG4gICAgICAgICksIHBhcnQxdGltZSk7XG5cbiAgICAgICAgLy8gRXllLXB1cGlsXG4gICAgICAgIGxldCB0bEV5ZVB1cGlsID0gbmV3IFRpbWVsaW5lTGl0ZSgpO1xuICAgICAgICB0bEV5ZVB1cGlsLmFkZChUd2Vlbk1heC50bygkZXllUHVwaWwsIHBhcnQxdGltZSxcbiAgICAgICAge2F1dG9BbHBoYTogMX1cbiAgICAgICAgKSwgcGFydDF0aW1lKTtcblxuICAgICAgICAvLyBUZXh0IGFkbWlub2lkXG4gICAgICAgIGxldCB0bFRleHRBZG1pbm9pZCA9IG5ldyBUaW1lbGluZUxpdGUoKTtcbiAgICAgICAgdGxUZXh0QWRtaW5vaWQuYWRkKFR3ZWVuTWF4LmZyb21UbygkdGV4dEFkbWlub2lkLCBwYXJ0MXRpbWUgKyBwYXJ0MnRpbWUsXG4gICAgICAgIHt4OiAwLCB5OiAyNH0sXG4gICAgICAgIHt4OiAtNTAsIHk6IDd9XG4gICAgICAgICkpO1xuXG4gICAgICAgIC8vIFRleHQgd2VibWFzdGVyIHRleHRzV2VibWFzdGVyXG4gICAgICAgIGxldCB0bFRleHRXZWJtYXN0ZXIgPSBuZXcgVGltZWxpbmVMaXRlKCk7XG4gICAgICAgIHRsVGV4dFdlYm1hc3Rlci5hZGQoXG4gICAgICAgIFR3ZWVuTWF4LnN0YWdnZXJGcm9tVG8obGV0dGVyc1dlYm1hc3Rlci5yZXZlcnNlKCksICgwLjEpLFxuICAgICAgICB7YXV0b0FscGhhOiAxLCByb3RhdGVYOiAwfSxcbiAgICAgICAge2F1dG9BbHBoYTogMCwgcm90YXRlWDogMTB9LFxuICAgICAgICAwLjA1XG4gICAgICAgIClcbiAgICAgICAgKTtcblxuICAgICAgICAvLyBXZWJtYXN0ZXIgV3JhcHBlclxuICAgICAgICBsZXQgdGxUZXh0V2VibWFzdGVyV3JhcHBlciA9IG5ldyBUaW1lbGluZUxpdGUoKTtcbiAgICAgICAgdGxUZXh0V2VibWFzdGVyV3JhcHBlci5hZGQoVHdlZW5NYXguZnJvbVRvKHRleHRzV2VibWFzdGVyV3JhcHBlciwgMC41LFxuICAgICAgICB7YXV0b0FscGhhOiAxfSxcbiAgICAgICAge2F1dG9BbHBoYTogMH1cbiAgICAgICAgKSwgMC4yKTtcblxuICAgICAgICAvLyBUb3BNZW51IGhlaWdodCByZWR1Y3Rpb24vaW5jcmVhc2VcbiAgICAgICAgbGV0IHRsVG9wTWVudSA9IG5ldyBUaW1lbGluZUxpdGUoKTtcbiAgICAgICAgdGxUb3BNZW51LmFkZChUd2Vlbk1heC5zdGFnZ2VyRnJvbVRvKHRvcE1lbnVJdGVtc0ZvclJlc2l6aW5nLCBwYXJ0MXRpbWUsXG4gICAgICAgIHtoZWlnaHQ6ICc0LjY2NjY3cmVtJywgb3BhY2l0eTogMX0sXG4gICAgICAgIHtoZWlnaHQ6ICczLjY2NjY3cmVtJywgb3BhY2l0eTogMC45M30sXG4gICAgICAgIDBcbiAgICAgICAgKSwgcGFydDF0aW1lKTtcblxuICAgICAgICAvLyBDb25jbHVzaW9uXG4gICAgICAgIGxldCB0aW1lbGluZSA9IG5ldyBUaW1lbGluZUxpdGUoe3BhdXNlZDogdHJ1ZX0pO1xuICAgICAgICB0aW1lbGluZS5wYXVzZSgpO1xuICAgICAgICB0aW1lbGluZS5hZGQodGxIYW5kcywgMCk7XG4gICAgICAgIHRpbWVsaW5lLmFkZCh0bEJvZHksIDApO1xuICAgICAgICB0aW1lbGluZS5hZGQodGxIZWFkLCAwKTtcbiAgICAgICAgdGltZWxpbmUuYWRkKHRsTG9nb1NpemUsIDApO1xuICAgICAgICB0aW1lbGluZS5hZGQodGxFeWVQdXBpbCwgMCk7XG4gICAgICAgIHRpbWVsaW5lLmFkZCh0bFRleHRBZG1pbm9pZCwgMCk7XG4gICAgICAgIHRpbWVsaW5lLmFkZCh0bFRleHRXZWJtYXN0ZXIsIDApO1xuICAgICAgICB0aW1lbGluZS5hZGQodGxUZXh0V2VibWFzdGVyV3JhcHBlciwgMCk7XG4gICAgICAgIHRpbWVsaW5lLmFkZCh0bFRvcE1lbnUsIDApO1xuICAgICAgICByZXR1cm4gdGltZWxpbmU7XG4gICAgICB9XG4gICAgfVxuICB9XG48L3NjcmlwdD5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyByZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvVG9wTWVudS52dWUiLCI8dGVtcGxhdGU+XG4gIDxhIGhyZWY9XCIjXCIgQGNsaWNrLnByZXZlbnQuc3RvcD1cImdvV3JpdGVcIj48c2xvdD48L3Nsb3Q+PC9hPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgZXhwb3J0IGRlZmF1bHQge1xuICAgIG5hbWU6IFwiV3JpdGVMaW5rXCIsXG5cbiAgICBtZXRob2RzOiB7XG4gICAgICBnb1dyaXRlICgpIHtcbiAgICAgICAgdGhpcy4kcGFyZW50LiRlbWl0KCdnby13cml0ZScsdHJ1ZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZD5cblxuICBhIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxuXG48L3N0eWxlPlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHJlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9Xcml0ZUxpbmsudnVlIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh0cnVlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbmFbZGF0YS12LTIyMzI0ZmQyXSB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIi9Vc2Vycy9wZXRqYS9QaHBzdG9ybVByb2plY3RzL2FkbWlub2lkLmNvbS9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL1dyaXRlTGluay52dWVcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQWtCQTtFQUNBLGtCQUFBO0NBQ0FcIixcImZpbGVcIjpcIldyaXRlTGluay52dWVcIixcInNvdXJjZXNDb250ZW50XCI6W1wiPHRlbXBsYXRlPlxcbiAgPGEgaHJlZj1cXFwiI1xcXCIgQGNsaWNrLnByZXZlbnQuc3RvcD1cXFwiZ29Xcml0ZVxcXCI+PHNsb3Q+PC9zbG90PjwvYT5cXG48L3RlbXBsYXRlPlxcblxcbjxzY3JpcHQ+XFxuICBleHBvcnQgZGVmYXVsdCB7XFxuICAgIG5hbWU6IFxcXCJXcml0ZUxpbmtcXFwiLFxcblxcbiAgICBtZXRob2RzOiB7XFxuICAgICAgZ29Xcml0ZSAoKSB7XFxuICAgICAgICB0aGlzLiRwYXJlbnQuJGVtaXQoJ2dvLXdyaXRlJyx0cnVlKTtcXG4gICAgICB9XFxuICAgIH1cXG4gIH1cXG48L3NjcmlwdD5cXG5cXG48c3R5bGUgc2NvcGVkPlxcblxcbiAgYSB7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgfVxcblxcbjwvc3R5bGU+XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyP3tcInZ1ZVwiOnRydWUsXCJpZFwiOlwiZGF0YS12LTIyMzI0ZmQyXCIsXCJzY29wZWRcIjp0cnVlLFwiaGFzSW5saW5lQ29uZmlnXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9Xcml0ZUxpbmsudnVlXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XCJ2dWVcIjp0cnVlLFwiaWRcIjpcImRhdGEtdi0yMjMyNGZkMlwiLFwic2NvcGVkXCI6dHJ1ZSxcImhhc0lubGluZUNvbmZpZ1wiOnRydWV9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvV3JpdGVMaW5rLnZ1ZVxuLy8gbW9kdWxlIGNodW5rcyA9IDgiLCIvKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24odXNlU291cmNlTWFwKSB7XG5cdHZhciBsaXN0ID0gW107XG5cblx0Ly8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXHRsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG5cdFx0cmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG5cdFx0XHR2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblx0XHRcdGlmKGl0ZW1bMl0pIHtcblx0XHRcdFx0cmV0dXJuIFwiQG1lZGlhIFwiICsgaXRlbVsyXSArIFwie1wiICsgY29udGVudCArIFwifVwiO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIGNvbnRlbnQ7XG5cdFx0XHR9XG5cdFx0fSkuam9pbihcIlwiKTtcblx0fTtcblxuXHQvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXHRsaXN0LmkgPSBmdW5jdGlvbihtb2R1bGVzLCBtZWRpYVF1ZXJ5KSB7XG5cdFx0aWYodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpXG5cdFx0XHRtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG5cdFx0dmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGlkID0gdGhpc1tpXVswXTtcblx0XHRcdGlmKHR5cGVvZiBpZCA9PT0gXCJudW1iZXJcIilcblx0XHRcdFx0YWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuXHRcdH1cblx0XHRmb3IoaSA9IDA7IGkgPCBtb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IG1vZHVsZXNbaV07XG5cdFx0XHQvLyBza2lwIGFscmVhZHkgaW1wb3J0ZWQgbW9kdWxlXG5cdFx0XHQvLyB0aGlzIGltcGxlbWVudGF0aW9uIGlzIG5vdCAxMDAlIHBlcmZlY3QgZm9yIHdlaXJkIG1lZGlhIHF1ZXJ5IGNvbWJpbmF0aW9uc1xuXHRcdFx0Ly8gIHdoZW4gYSBtb2R1bGUgaXMgaW1wb3J0ZWQgbXVsdGlwbGUgdGltZXMgd2l0aCBkaWZmZXJlbnQgbWVkaWEgcXVlcmllcy5cblx0XHRcdC8vICBJIGhvcGUgdGhpcyB3aWxsIG5ldmVyIG9jY3VyIChIZXkgdGhpcyB3YXkgd2UgaGF2ZSBzbWFsbGVyIGJ1bmRsZXMpXG5cdFx0XHRpZih0eXBlb2YgaXRlbVswXSAhPT0gXCJudW1iZXJcIiB8fCAhYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuXHRcdFx0XHRpZihtZWRpYVF1ZXJ5ICYmICFpdGVtWzJdKSB7XG5cdFx0XHRcdFx0aXRlbVsyXSA9IG1lZGlhUXVlcnk7XG5cdFx0XHRcdH0gZWxzZSBpZihtZWRpYVF1ZXJ5KSB7XG5cdFx0XHRcdFx0aXRlbVsyXSA9IFwiKFwiICsgaXRlbVsyXSArIFwiKSBhbmQgKFwiICsgbWVkaWFRdWVyeSArIFwiKVwiO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGxpc3QucHVzaChpdGVtKTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG5cdHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcblx0dmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnO1xuXHR2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cdGlmICghY3NzTWFwcGluZykge1xuXHRcdHJldHVybiBjb250ZW50O1xuXHR9XG5cblx0aWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuXHRcdHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG5cdFx0XHRyZXR1cm4gJy8qIyBzb3VyY2VVUkw9JyArIGNzc01hcHBpbmcuc291cmNlUm9vdCArIHNvdXJjZSArICcgKi8nXG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcblx0fVxuXG5cdHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59XG5cbi8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG5cdHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuXHR2YXIgZGF0YSA9ICdzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCwnICsgYmFzZTY0O1xuXG5cdHJldHVybiAnLyojICcgKyBkYXRhICsgJyAqLyc7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcbi8vIG1vZHVsZSBjaHVua3MgPSA4IiwiLyogZ2xvYmFscyBfX1ZVRV9TU1JfQ09OVEVYVF9fICovXG5cbi8vIElNUE9SVEFOVDogRG8gTk9UIHVzZSBFUzIwMTUgZmVhdHVyZXMgaW4gdGhpcyBmaWxlLlxuLy8gVGhpcyBtb2R1bGUgaXMgYSBydW50aW1lIHV0aWxpdHkgZm9yIGNsZWFuZXIgY29tcG9uZW50IG1vZHVsZSBvdXRwdXQgYW5kIHdpbGxcbi8vIGJlIGluY2x1ZGVkIGluIHRoZSBmaW5hbCB3ZWJwYWNrIHVzZXIgYnVuZGxlLlxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIG5vcm1hbGl6ZUNvbXBvbmVudCAoXG4gIHJhd1NjcmlwdEV4cG9ydHMsXG4gIGNvbXBpbGVkVGVtcGxhdGUsXG4gIGZ1bmN0aW9uYWxUZW1wbGF0ZSxcbiAgaW5qZWN0U3R5bGVzLFxuICBzY29wZUlkLFxuICBtb2R1bGVJZGVudGlmaWVyIC8qIHNlcnZlciBvbmx5ICovXG4pIHtcbiAgdmFyIGVzTW9kdWxlXG4gIHZhciBzY3JpcHRFeHBvcnRzID0gcmF3U2NyaXB0RXhwb3J0cyA9IHJhd1NjcmlwdEV4cG9ydHMgfHwge31cblxuICAvLyBFUzYgbW9kdWxlcyBpbnRlcm9wXG4gIHZhciB0eXBlID0gdHlwZW9mIHJhd1NjcmlwdEV4cG9ydHMuZGVmYXVsdFxuICBpZiAodHlwZSA9PT0gJ29iamVjdCcgfHwgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGVzTW9kdWxlID0gcmF3U2NyaXB0RXhwb3J0c1xuICAgIHNjcmlwdEV4cG9ydHMgPSByYXdTY3JpcHRFeHBvcnRzLmRlZmF1bHRcbiAgfVxuXG4gIC8vIFZ1ZS5leHRlbmQgY29uc3RydWN0b3IgZXhwb3J0IGludGVyb3BcbiAgdmFyIG9wdGlvbnMgPSB0eXBlb2Ygc2NyaXB0RXhwb3J0cyA9PT0gJ2Z1bmN0aW9uJ1xuICAgID8gc2NyaXB0RXhwb3J0cy5vcHRpb25zXG4gICAgOiBzY3JpcHRFeHBvcnRzXG5cbiAgLy8gcmVuZGVyIGZ1bmN0aW9uc1xuICBpZiAoY29tcGlsZWRUZW1wbGF0ZSkge1xuICAgIG9wdGlvbnMucmVuZGVyID0gY29tcGlsZWRUZW1wbGF0ZS5yZW5kZXJcbiAgICBvcHRpb25zLnN0YXRpY1JlbmRlckZucyA9IGNvbXBpbGVkVGVtcGxhdGUuc3RhdGljUmVuZGVyRm5zXG4gICAgb3B0aW9ucy5fY29tcGlsZWQgPSB0cnVlXG4gIH1cblxuICAvLyBmdW5jdGlvbmFsIHRlbXBsYXRlXG4gIGlmIChmdW5jdGlvbmFsVGVtcGxhdGUpIHtcbiAgICBvcHRpb25zLmZ1bmN0aW9uYWwgPSB0cnVlXG4gIH1cblxuICAvLyBzY29wZWRJZFxuICBpZiAoc2NvcGVJZCkge1xuICAgIG9wdGlvbnMuX3Njb3BlSWQgPSBzY29wZUlkXG4gIH1cblxuICB2YXIgaG9va1xuICBpZiAobW9kdWxlSWRlbnRpZmllcikgeyAvLyBzZXJ2ZXIgYnVpbGRcbiAgICBob29rID0gZnVuY3Rpb24gKGNvbnRleHQpIHtcbiAgICAgIC8vIDIuMyBpbmplY3Rpb25cbiAgICAgIGNvbnRleHQgPVxuICAgICAgICBjb250ZXh0IHx8IC8vIGNhY2hlZCBjYWxsXG4gICAgICAgICh0aGlzLiR2bm9kZSAmJiB0aGlzLiR2bm9kZS5zc3JDb250ZXh0KSB8fCAvLyBzdGF0ZWZ1bFxuICAgICAgICAodGhpcy5wYXJlbnQgJiYgdGhpcy5wYXJlbnQuJHZub2RlICYmIHRoaXMucGFyZW50LiR2bm9kZS5zc3JDb250ZXh0KSAvLyBmdW5jdGlvbmFsXG4gICAgICAvLyAyLjIgd2l0aCBydW5Jbk5ld0NvbnRleHQ6IHRydWVcbiAgICAgIGlmICghY29udGV4dCAmJiB0eXBlb2YgX19WVUVfU1NSX0NPTlRFWFRfXyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29udGV4dCA9IF9fVlVFX1NTUl9DT05URVhUX19cbiAgICAgIH1cbiAgICAgIC8vIGluamVjdCBjb21wb25lbnQgc3R5bGVzXG4gICAgICBpZiAoaW5qZWN0U3R5bGVzKSB7XG4gICAgICAgIGluamVjdFN0eWxlcy5jYWxsKHRoaXMsIGNvbnRleHQpXG4gICAgICB9XG4gICAgICAvLyByZWdpc3RlciBjb21wb25lbnQgbW9kdWxlIGlkZW50aWZpZXIgZm9yIGFzeW5jIGNodW5rIGluZmVycmVuY2VcbiAgICAgIGlmIChjb250ZXh0ICYmIGNvbnRleHQuX3JlZ2lzdGVyZWRDb21wb25lbnRzKSB7XG4gICAgICAgIGNvbnRleHQuX3JlZ2lzdGVyZWRDb21wb25lbnRzLmFkZChtb2R1bGVJZGVudGlmaWVyKVxuICAgICAgfVxuICAgIH1cbiAgICAvLyB1c2VkIGJ5IHNzciBpbiBjYXNlIGNvbXBvbmVudCBpcyBjYWNoZWQgYW5kIGJlZm9yZUNyZWF0ZVxuICAgIC8vIG5ldmVyIGdldHMgY2FsbGVkXG4gICAgb3B0aW9ucy5fc3NyUmVnaXN0ZXIgPSBob29rXG4gIH0gZWxzZSBpZiAoaW5qZWN0U3R5bGVzKSB7XG4gICAgaG9vayA9IGluamVjdFN0eWxlc1xuICB9XG5cbiAgaWYgKGhvb2spIHtcbiAgICB2YXIgZnVuY3Rpb25hbCA9IG9wdGlvbnMuZnVuY3Rpb25hbFxuICAgIHZhciBleGlzdGluZyA9IGZ1bmN0aW9uYWxcbiAgICAgID8gb3B0aW9ucy5yZW5kZXJcbiAgICAgIDogb3B0aW9ucy5iZWZvcmVDcmVhdGVcblxuICAgIGlmICghZnVuY3Rpb25hbCkge1xuICAgICAgLy8gaW5qZWN0IGNvbXBvbmVudCByZWdpc3RyYXRpb24gYXMgYmVmb3JlQ3JlYXRlIGhvb2tcbiAgICAgIG9wdGlvbnMuYmVmb3JlQ3JlYXRlID0gZXhpc3RpbmdcbiAgICAgICAgPyBbXS5jb25jYXQoZXhpc3RpbmcsIGhvb2spXG4gICAgICAgIDogW2hvb2tdXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGZvciB0ZW1wbGF0ZS1vbmx5IGhvdC1yZWxvYWQgYmVjYXVzZSBpbiB0aGF0IGNhc2UgdGhlIHJlbmRlciBmbiBkb2Vzbid0XG4gICAgICAvLyBnbyB0aHJvdWdoIHRoZSBub3JtYWxpemVyXG4gICAgICBvcHRpb25zLl9pbmplY3RTdHlsZXMgPSBob29rXG4gICAgICAvLyByZWdpc3RlciBmb3IgZnVuY3Rpb2FsIGNvbXBvbmVudCBpbiB2dWUgZmlsZVxuICAgICAgb3B0aW9ucy5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXJXaXRoU3R5bGVJbmplY3Rpb24gKGgsIGNvbnRleHQpIHtcbiAgICAgICAgaG9vay5jYWxsKGNvbnRleHQpXG4gICAgICAgIHJldHVybiBleGlzdGluZyhoLCBjb250ZXh0KVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgZXNNb2R1bGU6IGVzTW9kdWxlLFxuICAgIGV4cG9ydHM6IHNjcmlwdEV4cG9ydHMsXG4gICAgb3B0aW9uczogb3B0aW9uc1xuICB9XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplci5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXIuanNcbi8vIG1vZHVsZSBjaHVua3MgPSA4IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImFcIixcbiAgICB7XG4gICAgICBhdHRyczogeyBocmVmOiBcIiNcIiB9LFxuICAgICAgb246IHtcbiAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgICAgcmV0dXJuIF92bS5nb1dyaXRlKCRldmVudClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgW192bS5fdChcImRlZmF1bHRcIildLFxuICAgIDJcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbm1vZHVsZS5leHBvcnRzID0geyByZW5kZXI6IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnMgfVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgcmVxdWlyZShcInZ1ZS1sb2FkZXIvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaVwiKSAgICAgIC5yZXJlbmRlcihcImRhdGEtdi0yMjMyNGZkMlwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtMjIzMjRmZDJcIixcImhhc1Njb3BlZFwiOnRydWUsXCJidWJsZVwiOntcInRyYW5zZm9ybXNcIjp7fX19IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9Xcml0ZUxpbmsudnVlXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleC5qcz97XCJpZFwiOlwiZGF0YS12LTIyMzI0ZmQyXCIsXCJoYXNTY29wZWRcIjp0cnVlLFwiYnVibGVcIjp7XCJ0cmFuc2Zvcm1zXCI6e319fSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvV3JpdGVMaW5rLnZ1ZVxuLy8gbW9kdWxlIGNodW5rcyA9IDgiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMjIzMjRmZDJcXFwiLFxcXCJzY29wZWRcXFwiOnRydWUsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9Xcml0ZUxpbmsudnVlXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikoXCIwZDcxODZjZVwiLCBjb250ZW50LCBmYWxzZSwge30pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMjIzMjRmZDJcXFwiLFxcXCJzY29wZWRcXFwiOnRydWUsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9Xcml0ZUxpbmsudnVlXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTIyMzI0ZmQyXFxcIixcXFwic2NvcGVkXFxcIjp0cnVlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vV3JpdGVMaW5rLnZ1ZVwiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlciEuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlcj97XCJ2dWVcIjp0cnVlLFwiaWRcIjpcImRhdGEtdi0yMjMyNGZkMlwiLFwic2NvcGVkXCI6dHJ1ZSxcImhhc0lubGluZUNvbmZpZ1wiOnRydWV9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvV3JpdGVMaW5rLnZ1ZVxuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9pbmRleC5qcyEuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XCJ2dWVcIjp0cnVlLFwiaWRcIjpcImRhdGEtdi0yMjMyNGZkMlwiLFwic2NvcGVkXCI6dHJ1ZSxcImhhc0lubGluZUNvbmZpZ1wiOnRydWV9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvV3JpdGVMaW5rLnZ1ZVxuLy8gbW9kdWxlIGNodW5rcyA9IDgiLCIvKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4gIE1vZGlmaWVkIGJ5IEV2YW4gWW91IEB5eXg5OTA4MDNcbiovXG5cbnZhciBoYXNEb2N1bWVudCA9IHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCdcblxuaWYgKHR5cGVvZiBERUJVRyAhPT0gJ3VuZGVmaW5lZCcgJiYgREVCVUcpIHtcbiAgaWYgKCFoYXNEb2N1bWVudCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAndnVlLXN0eWxlLWxvYWRlciBjYW5ub3QgYmUgdXNlZCBpbiBhIG5vbi1icm93c2VyIGVudmlyb25tZW50LiAnICtcbiAgICBcIlVzZSB7IHRhcmdldDogJ25vZGUnIH0gaW4geW91ciBXZWJwYWNrIGNvbmZpZyB0byBpbmRpY2F0ZSBhIHNlcnZlci1yZW5kZXJpbmcgZW52aXJvbm1lbnQuXCJcbiAgKSB9XG59XG5cbnZhciBsaXN0VG9TdHlsZXMgPSByZXF1aXJlKCcuL2xpc3RUb1N0eWxlcycpXG5cbi8qXG50eXBlIFN0eWxlT2JqZWN0ID0ge1xuICBpZDogbnVtYmVyO1xuICBwYXJ0czogQXJyYXk8U3R5bGVPYmplY3RQYXJ0PlxufVxuXG50eXBlIFN0eWxlT2JqZWN0UGFydCA9IHtcbiAgY3NzOiBzdHJpbmc7XG4gIG1lZGlhOiBzdHJpbmc7XG4gIHNvdXJjZU1hcDogP3N0cmluZ1xufVxuKi9cblxudmFyIHN0eWxlc0luRG9tID0gey8qXG4gIFtpZDogbnVtYmVyXToge1xuICAgIGlkOiBudW1iZXIsXG4gICAgcmVmczogbnVtYmVyLFxuICAgIHBhcnRzOiBBcnJheTwob2JqPzogU3R5bGVPYmplY3RQYXJ0KSA9PiB2b2lkPlxuICB9XG4qL31cblxudmFyIGhlYWQgPSBoYXNEb2N1bWVudCAmJiAoZG9jdW1lbnQuaGVhZCB8fCBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdKVxudmFyIHNpbmdsZXRvbkVsZW1lbnQgPSBudWxsXG52YXIgc2luZ2xldG9uQ291bnRlciA9IDBcbnZhciBpc1Byb2R1Y3Rpb24gPSBmYWxzZVxudmFyIG5vb3AgPSBmdW5jdGlvbiAoKSB7fVxudmFyIG9wdGlvbnMgPSBudWxsXG52YXIgc3NySWRLZXkgPSAnZGF0YS12dWUtc3NyLWlkJ1xuXG4vLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbi8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcbnZhciBpc09sZElFID0gdHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCcgJiYgL21zaWUgWzYtOV1cXGIvLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChwYXJlbnRJZCwgbGlzdCwgX2lzUHJvZHVjdGlvbiwgX29wdGlvbnMpIHtcbiAgaXNQcm9kdWN0aW9uID0gX2lzUHJvZHVjdGlvblxuXG4gIG9wdGlvbnMgPSBfb3B0aW9ucyB8fCB7fVxuXG4gIHZhciBzdHlsZXMgPSBsaXN0VG9TdHlsZXMocGFyZW50SWQsIGxpc3QpXG4gIGFkZFN0eWxlc1RvRG9tKHN0eWxlcylcblxuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlIChuZXdMaXN0KSB7XG4gICAgdmFyIG1heVJlbW92ZSA9IFtdXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpdGVtID0gc3R5bGVzW2ldXG4gICAgICB2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXVxuICAgICAgZG9tU3R5bGUucmVmcy0tXG4gICAgICBtYXlSZW1vdmUucHVzaChkb21TdHlsZSlcbiAgICB9XG4gICAgaWYgKG5ld0xpc3QpIHtcbiAgICAgIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhwYXJlbnRJZCwgbmV3TGlzdClcbiAgICAgIGFkZFN0eWxlc1RvRG9tKHN0eWxlcylcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzID0gW11cbiAgICB9XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBtYXlSZW1vdmUubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBkb21TdHlsZSA9IG1heVJlbW92ZVtpXVxuICAgICAgaWYgKGRvbVN0eWxlLnJlZnMgPT09IDApIHtcbiAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICAgIGRvbVN0eWxlLnBhcnRzW2pdKClcbiAgICAgICAgfVxuICAgICAgICBkZWxldGUgc3R5bGVzSW5Eb21bZG9tU3R5bGUuaWRdXG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlc1RvRG9tIChzdHlsZXMgLyogQXJyYXk8U3R5bGVPYmplY3Q+ICovKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBzdHlsZXNbaV1cbiAgICB2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXVxuICAgIGlmIChkb21TdHlsZSkge1xuICAgICAgZG9tU3R5bGUucmVmcysrXG4gICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGRvbVN0eWxlLnBhcnRzW2pdKGl0ZW0ucGFydHNbal0pXG4gICAgICB9XG4gICAgICBmb3IgKDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgZG9tU3R5bGUucGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdKSlcbiAgICAgIH1cbiAgICAgIGlmIChkb21TdHlsZS5wYXJ0cy5sZW5ndGggPiBpdGVtLnBhcnRzLmxlbmd0aCkge1xuICAgICAgICBkb21TdHlsZS5wYXJ0cy5sZW5ndGggPSBpdGVtLnBhcnRzLmxlbmd0aFxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgcGFydHMgPSBbXVxuICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIHBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSkpXG4gICAgICB9XG4gICAgICBzdHlsZXNJbkRvbVtpdGVtLmlkXSA9IHsgaWQ6IGl0ZW0uaWQsIHJlZnM6IDEsIHBhcnRzOiBwYXJ0cyB9XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVN0eWxlRWxlbWVudCAoKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpXG4gIHN0eWxlRWxlbWVudC50eXBlID0gJ3RleHQvY3NzJ1xuICBoZWFkLmFwcGVuZENoaWxkKHN0eWxlRWxlbWVudClcbiAgcmV0dXJuIHN0eWxlRWxlbWVudFxufVxuXG5mdW5jdGlvbiBhZGRTdHlsZSAob2JqIC8qIFN0eWxlT2JqZWN0UGFydCAqLykge1xuICB2YXIgdXBkYXRlLCByZW1vdmVcbiAgdmFyIHN0eWxlRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3N0eWxlWycgKyBzc3JJZEtleSArICd+PVwiJyArIG9iai5pZCArICdcIl0nKVxuXG4gIGlmIChzdHlsZUVsZW1lbnQpIHtcbiAgICBpZiAoaXNQcm9kdWN0aW9uKSB7XG4gICAgICAvLyBoYXMgU1NSIHN0eWxlcyBhbmQgaW4gcHJvZHVjdGlvbiBtb2RlLlxuICAgICAgLy8gc2ltcGx5IGRvIG5vdGhpbmcuXG4gICAgICByZXR1cm4gbm9vcFxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBoYXMgU1NSIHN0eWxlcyBidXQgaW4gZGV2IG1vZGUuXG4gICAgICAvLyBmb3Igc29tZSByZWFzb24gQ2hyb21lIGNhbid0IGhhbmRsZSBzb3VyY2UgbWFwIGluIHNlcnZlci1yZW5kZXJlZFxuICAgICAgLy8gc3R5bGUgdGFncyAtIHNvdXJjZSBtYXBzIGluIDxzdHlsZT4gb25seSB3b3JrcyBpZiB0aGUgc3R5bGUgdGFnIGlzXG4gICAgICAvLyBjcmVhdGVkIGFuZCBpbnNlcnRlZCBkeW5hbWljYWxseS4gU28gd2UgcmVtb3ZlIHRoZSBzZXJ2ZXIgcmVuZGVyZWRcbiAgICAgIC8vIHN0eWxlcyBhbmQgaW5qZWN0IG5ldyBvbmVzLlxuICAgICAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KVxuICAgIH1cbiAgfVxuXG4gIGlmIChpc09sZElFKSB7XG4gICAgLy8gdXNlIHNpbmdsZXRvbiBtb2RlIGZvciBJRTkuXG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKytcbiAgICBzdHlsZUVsZW1lbnQgPSBzaW5nbGV0b25FbGVtZW50IHx8IChzaW5nbGV0b25FbGVtZW50ID0gY3JlYXRlU3R5bGVFbGVtZW50KCkpXG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCwgc3R5bGVJbmRleCwgZmFsc2UpXG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCwgc3R5bGVJbmRleCwgdHJ1ZSlcbiAgfSBlbHNlIHtcbiAgICAvLyB1c2UgbXVsdGktc3R5bGUtdGFnIG1vZGUgaW4gYWxsIG90aGVyIGNhc2VzXG4gICAgc3R5bGVFbGVtZW50ID0gY3JlYXRlU3R5bGVFbGVtZW50KClcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50KVxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudClcbiAgICB9XG4gIH1cblxuICB1cGRhdGUob2JqKVxuXG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZSAobmV3T2JqIC8qIFN0eWxlT2JqZWN0UGFydCAqLykge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmXG4gICAgICAgICAgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiZcbiAgICAgICAgICBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iailcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKClcbiAgICB9XG4gIH1cbn1cblxudmFyIHJlcGxhY2VUZXh0ID0gKGZ1bmN0aW9uICgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdXG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnRcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKVxuICB9XG59KSgpXG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcgKHN0eWxlRWxlbWVudCwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5jc3NcblxuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcylcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcylcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlRWxlbWVudC5jaGlsZE5vZGVzXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZUVsZW1lbnQuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKVxuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoY3NzTm9kZSlcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyAoc3R5bGVFbGVtZW50LCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3NcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwXG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSlcbiAgfVxuICBpZiAob3B0aW9ucy5zc3JJZCkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoc3NySWRLZXksIG9iai5pZClcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXApIHtcbiAgICAvLyBodHRwczovL2RldmVsb3Blci5jaHJvbWUuY29tL2RldnRvb2xzL2RvY3MvamF2YXNjcmlwdC1kZWJ1Z2dpbmdcbiAgICAvLyB0aGlzIG1ha2VzIHNvdXJjZSBtYXBzIGluc2lkZSBzdHlsZSB0YWdzIHdvcmsgcHJvcGVybHkgaW4gQ2hyb21lXG4gICAgY3NzICs9ICdcXG4vKiMgc291cmNlVVJMPScgKyBzb3VyY2VNYXAuc291cmNlc1swXSArICcgKi8nXG4gICAgLy8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjY2MDM4NzVcbiAgICBjc3MgKz0gJ1xcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsJyArIGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSkgKyAnICovJ1xuICB9XG5cbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzc1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKVxuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSlcbiAgfVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcbi8vIG1vZHVsZSBjaHVua3MgPSA4IiwiLyoqXG4gKiBUcmFuc2xhdGVzIHRoZSBsaXN0IGZvcm1hdCBwcm9kdWNlZCBieSBjc3MtbG9hZGVyIGludG8gc29tZXRoaW5nXG4gKiBlYXNpZXIgdG8gbWFuaXB1bGF0ZS5cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBsaXN0VG9TdHlsZXMgKHBhcmVudElkLCBsaXN0KSB7XG4gIHZhciBzdHlsZXMgPSBbXVxuICB2YXIgbmV3U3R5bGVzID0ge31cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldXG4gICAgdmFyIGlkID0gaXRlbVswXVxuICAgIHZhciBjc3MgPSBpdGVtWzFdXG4gICAgdmFyIG1lZGlhID0gaXRlbVsyXVxuICAgIHZhciBzb3VyY2VNYXAgPSBpdGVtWzNdXG4gICAgdmFyIHBhcnQgPSB7XG4gICAgICBpZDogcGFyZW50SWQgKyAnOicgKyBpLFxuICAgICAgY3NzOiBjc3MsXG4gICAgICBtZWRpYTogbWVkaWEsXG4gICAgICBzb3VyY2VNYXA6IHNvdXJjZU1hcFxuICAgIH1cbiAgICBpZiAoIW5ld1N0eWxlc1tpZF0pIHtcbiAgICAgIHN0eWxlcy5wdXNoKG5ld1N0eWxlc1tpZF0gPSB7IGlkOiBpZCwgcGFydHM6IFtwYXJ0XSB9KVxuICAgIH0gZWxzZSB7XG4gICAgICBuZXdTdHlsZXNbaWRdLnBhcnRzLnB1c2gocGFydClcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHN0eWxlc1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvbGlzdFRvU3R5bGVzLmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9saXN0VG9TdHlsZXMuanNcbi8vIG1vZHVsZSBjaHVua3MgPSA4IiwiXG4vKipcbiAqIEZpcnN0IHdlIHdpbGwgbG9hZCBhbGwgb2YgdGhpcyBwcm9qZWN0J3MgSmF2YVNjcmlwdCBkZXBlbmRlbmNpZXMgd2hpY2hcbiAqIGluY2x1ZGVzIFZ1ZSBhbmQgb3RoZXIgbGlicmFyaWVzLiBJdCBpcyBhIGdyZWF0IHN0YXJ0aW5nIHBvaW50IHdoZW5cbiAqIGJ1aWxkaW5nIHJvYnVzdCwgcG93ZXJmdWwgd2ViIGFwcGxpY2F0aW9ucyB1c2luZyBWdWUgYW5kIExhcmF2ZWwuXG4gKi9cblxucmVxdWlyZSgnLi9ib290c3RyYXAnKTtcblxud2luZG93LlZ1ZSA9IHJlcXVpcmUoJ3Z1ZScpO1xuXG4vKipcbiAqIE5leHQsIHdlIHdpbGwgY3JlYXRlIGEgZnJlc2ggVnVlIGFwcGxpY2F0aW9uIGluc3RhbmNlIGFuZCBhdHRhY2ggaXQgdG9cbiAqIHRoZSBwYWdlLiBUaGVuLCB5b3UgbWF5IGJlZ2luIGFkZGluZyBjb21wb25lbnRzIHRvIHRoaXMgYXBwbGljYXRpb25cbiAqIG9yIGN1c3RvbWl6ZSB0aGUgSmF2YVNjcmlwdCBzY2FmZm9sZGluZyB0byBmaXQgeW91ciB1bmlxdWUgbmVlZHMuXG4gKi9cblxuaW1wb3J0IFRvcE1lbnUgZnJvbSAnLi9jb21wb25lbnRzL1RvcE1lbnUnXG5pbXBvcnQgRmVlZGJhY2tGb3JtIGZyb20gJy4vY29tcG9uZW50cy9GZWVkYmFja0Zvcm0nXG5pbXBvcnQgV3JpdGVMaW5rIGZyb20gJy4vY29tcG9uZW50cy9Xcml0ZUxpbmsnXG5cblZ1ZS5jb21wb25lbnQoXCJjbG91ZHNcIiwgZnVuY3Rpb24gKHJlc29sdmUpIHtcbiAgcmVxdWlyZShbJy4vY29tcG9uZW50cy9wYWdlcy9pbmRleC9DbG91ZHMnXSwgcmVzb2x2ZSlcbn0pO1xuXG5WdWUuY29tcG9uZW50KFwiY3ViZVwiLCBmdW5jdGlvbiAocmVzb2x2ZSkge1xuICByZXF1aXJlKFsnLi9jb21wb25lbnRzL3BhZ2VzL2luZGV4L0N1YmUnXSwgcmVzb2x2ZSlcbn0pO1xuXG5WdWUuY29tcG9uZW50KFwiY2xvY2tcIiwgZnVuY3Rpb24gKHJlc29sdmUpIHtcbiAgcmVxdWlyZShbJy4vY29tcG9uZW50cy9wYWdlcy9wcmljZS9DbG9jay52dWUnXSwgcmVzb2x2ZSlcbn0pO1xuXG5WdWUuY29tcG9uZW50KFwidG9vbHMtYmxvY2tcIiwgZnVuY3Rpb24gKHJlc29sdmUpIHtcbiAgcmVxdWlyZShbJy4vY29tcG9uZW50cy9wYWdlcy90b29scy9Ub29sc0Jsb2NrLnZ1ZSddLCByZXNvbHZlKVxufSk7XG5cblZ1ZS5jb21wb25lbnQoXCJ6b29tXCIsIGZ1bmN0aW9uIChyZXNvbHZlKSB7XG4gIHJlcXVpcmUoWycuL2NvbXBvbmVudHMvcGFnZXMvcG9ydGZvbGlvL1pvb20udnVlJ10sIHJlc29sdmUpXG59KTtcblxuVnVlLmNvbXBvbmVudChcInZpZGVvLWJhY2tncm91bmRcIiwgZnVuY3Rpb24gKHJlc29sdmUpIHtcbiAgcmVxdWlyZShbJy4vY29tcG9uZW50cy9wYWdlcy9wb3J0Zm9saW8vVmlkZW9CYWNrZ3JvdW5kLnZ1ZSddLCByZXNvbHZlKVxufSk7XG5cblZ1ZS5jb21wb25lbnQoXCJoYWxmLXJvdGF0ZVwiLCBmdW5jdGlvbiAocmVzb2x2ZSkge1xuICByZXF1aXJlKFsnLi9jb21wb25lbnRzL3BhZ2VzL3dvcmtmbG93L0hhbGZSb3RhdGUudnVlJ10sIHJlc29sdmUpXG59KTtcblxuY29uc3QgYXBwID0gbmV3IFZ1ZSh7XG5cbiAgZWw6ICcjYXBwJyxcblxuICBjb21wb25lbnRzOiB7XG4gICAgVG9wTWVudSwgRmVlZGJhY2tGb3JtLCBXcml0ZUxpbmtcbiAgfSxcblxuICBkYXRhICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgd3JpdGU6IGZhbHNlLFxuICAgIH1cbiAgfSxcblxufSk7XG5cbmFwcFxuICAuJG9uKCdnby13cml0ZScsICgpID0+IHtcblxuICAgIGFwcC53cml0ZSA9IHRydWU7XG5cbiAgICBsZXQgJG1vZGFsID0gJCgnI3N1cGVyLW1vZGFsJyk7XG4gICAgLy8gLm1vZGFsKCdzZXR0aW5nJywgJ3RyYW5zaXRpb24nLCAnaG9yaXpvbnRhbCBmbGlwJykubW9kYWwoJ3RvZ2dsZScpO1xuXG4gICAgJG1vZGFsLm1vZGFsKHtcbiAgICAgIHRyYW5zaXRpb246ICdob3Jpem9udGFsIGZsaXAnLFxuICAgICAgb25IaWRlOiBmdW5jdGlvbigpe1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICBhcHAud3JpdGUgPSBmYWxzZTtcbiAgICAgICAgfSwgMzMzKTtcbiAgICAgIH0sXG4gICAgfSkubW9kYWwoJ3Nob3cnKTtcblxuICB9KVxuICAuJG9uKCdzdG9wLXdyaXRlJywgKCkgPT4ge1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBhcHAud3JpdGUgPSBmYWxzZTtcbiAgICB9LCAzMzMpO1xuXG4gIH0pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9hcHAuanMiLCJcbndpbmRvdy5fID0gcmVxdWlyZSgnbG9kYXNoJyk7XG5cbi8qKlxuICogV2UnbGwgbG9hZCBqUXVlcnkgYW5kIHRoZSBCb290c3RyYXAgalF1ZXJ5IHBsdWdpbiB3aGljaCBwcm92aWRlcyBzdXBwb3J0XG4gKiBmb3IgSmF2YVNjcmlwdCBiYXNlZCBCb290c3RyYXAgZmVhdHVyZXMgc3VjaCBhcyBtb2RhbHMgYW5kIHRhYnMuIFRoaXNcbiAqIGNvZGUgbWF5IGJlIG1vZGlmaWVkIHRvIGZpdCB0aGUgc3BlY2lmaWMgbmVlZHMgb2YgeW91ciBhcHBsaWNhdGlvbi5cbiAqL1xuXG50cnkge1xuICAgIHdpbmRvdy4kID0gd2luZG93LmpRdWVyeSA9IHJlcXVpcmUoJ2pxdWVyeScpO1xuXG4gICAgLy8gcmVxdWlyZSgnYm9vdHN0cmFwLXNhc3MnKTtcbn0gY2F0Y2ggKGUpIHt9XG5cbi8qKlxuICogV2UnbGwgbG9hZCB0aGUgYXhpb3MgSFRUUCBsaWJyYXJ5IHdoaWNoIGFsbG93cyB1cyB0byBlYXNpbHkgaXNzdWUgcmVxdWVzdHNcbiAqIHRvIG91ciBMYXJhdmVsIGJhY2stZW5kLiBUaGlzIGxpYnJhcnkgYXV0b21hdGljYWxseSBoYW5kbGVzIHNlbmRpbmcgdGhlXG4gKiBDU1JGIHRva2VuIGFzIGEgaGVhZGVyIGJhc2VkIG9uIHRoZSB2YWx1ZSBvZiB0aGUgXCJYU1JGXCIgdG9rZW4gY29va2llLlxuICovXG5cbndpbmRvdy5heGlvcyA9IHJlcXVpcmUoJ2F4aW9zJyk7XG5cbndpbmRvdy5heGlvcy5kZWZhdWx0cy5oZWFkZXJzLmNvbW1vblsnWC1SZXF1ZXN0ZWQtV2l0aCddID0gJ1hNTEh0dHBSZXF1ZXN0JztcblxuLyoqXG4gKiBOZXh0IHdlIHdpbGwgcmVnaXN0ZXIgdGhlIENTUkYgVG9rZW4gYXMgYSBjb21tb24gaGVhZGVyIHdpdGggQXhpb3Mgc28gdGhhdFxuICogYWxsIG91dGdvaW5nIEhUVFAgcmVxdWVzdHMgYXV0b21hdGljYWxseSBoYXZlIGl0IGF0dGFjaGVkLiBUaGlzIGlzIGp1c3RcbiAqIGEgc2ltcGxlIGNvbnZlbmllbmNlIHNvIHdlIGRvbid0IGhhdmUgdG8gYXR0YWNoIGV2ZXJ5IHRva2VuIG1hbnVhbGx5LlxuICovXG5cbmxldCB0b2tlbiA9IGRvY3VtZW50LmhlYWQucXVlcnlTZWxlY3RvcignbWV0YVtuYW1lPVwiY3NyZi10b2tlblwiXScpO1xuXG5pZiAodG9rZW4pIHtcbiAgICB3aW5kb3cuYXhpb3MuZGVmYXVsdHMuaGVhZGVycy5jb21tb25bJ1gtQ1NSRi1UT0tFTiddID0gdG9rZW4uY29udGVudDtcbn0gZWxzZSB7XG4gICAgY29uc29sZS5lcnJvcignQ1NSRiB0b2tlbiBub3QgZm91bmQ6IGh0dHBzOi8vbGFyYXZlbC5jb20vZG9jcy9jc3JmI2NzcmYteC1jc3JmLXRva2VuJyk7XG59XG5cbi8qKlxuICogRWNobyBleHBvc2VzIGFuIGV4cHJlc3NpdmUgQVBJIGZvciBzdWJzY3JpYmluZyB0byBjaGFubmVscyBhbmQgbGlzdGVuaW5nXG4gKiBmb3IgZXZlbnRzIHRoYXQgYXJlIGJyb2FkY2FzdCBieSBMYXJhdmVsLiBFY2hvIGFuZCBldmVudCBicm9hZGNhc3RpbmdcbiAqIGFsbG93cyB5b3VyIHRlYW0gdG8gZWFzaWx5IGJ1aWxkIHJvYnVzdCByZWFsLXRpbWUgd2ViIGFwcGxpY2F0aW9ucy5cbiAqL1xuXG4vLyBpbXBvcnQgRWNobyBmcm9tICdsYXJhdmVsLWVjaG8nXG5cbi8vIHdpbmRvdy5QdXNoZXIgPSByZXF1aXJlKCdwdXNoZXItanMnKTtcblxuLy8gd2luZG93LkVjaG8gPSBuZXcgRWNobyh7XG4vLyAgICAgYnJvYWRjYXN0ZXI6ICdwdXNoZXInLFxuLy8gICAgIGtleTogJ3lvdXItcHVzaGVyLWtleSdcbi8vIH0pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9ib290c3RyYXAuanMiLCJ2YXIgZGlzcG9zZWQgPSBmYWxzZVxudmFyIG5vcm1hbGl6ZUNvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpXG4vKiBzY3JpcHQgKi9cbnZhciBfX3Z1ZV9zY3JpcHRfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlbnZcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2UsXFxcInRhcmdldHNcXFwiOntcXFwiYnJvd3NlcnNcXFwiOltcXFwiPiAyJVxcXCJdLFxcXCJ1Z2xpZnlcXFwiOnRydWV9fV1dLFxcXCJwbHVnaW5zXFxcIjpbXFxcInRyYW5zZm9ybS1vYmplY3QtcmVzdC1zcHJlYWRcXFwiLFtcXFwidHJhbnNmb3JtLXJ1bnRpbWVcXFwiLHtcXFwicG9seWZpbGxcXFwiOmZhbHNlLFxcXCJoZWxwZXJzXFxcIjpmYWxzZX1dXX0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9GZWVkYmFja0Zvcm0udnVlXCIpXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSBudWxsXG4vKiB0ZW1wbGF0ZSBmdW5jdGlvbmFsICovXG52YXIgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fID0gZmFsc2Vcbi8qIHN0eWxlcyAqL1xudmFyIF9fdnVlX3N0eWxlc19fID0gbnVsbFxuLyogc2NvcGVJZCAqL1xudmFyIF9fdnVlX3Njb3BlSWRfXyA9IG51bGxcbi8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xudmFyIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSBudWxsXG52YXIgQ29tcG9uZW50ID0gbm9ybWFsaXplQ29tcG9uZW50KFxuICBfX3Z1ZV9zY3JpcHRfXyxcbiAgX192dWVfdGVtcGxhdGVfXyxcbiAgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fLFxuICBfX3Z1ZV9zdHlsZXNfXyxcbiAgX192dWVfc2NvcGVJZF9fLFxuICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9GZWVkYmFja0Zvcm0udnVlXCJcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1sb2FkZXIvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LWUxZGRkMWMwXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtZTFkZGQxYzBcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgZGlzcG9zZWQgPSB0cnVlXG4gIH0pXG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9GZWVkYmFja0Zvcm0udnVlXG4vLyBtb2R1bGUgaWQgPSAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9GZWVkYmFja0Zvcm0udnVlXG4vLyBtb2R1bGUgY2h1bmtzID0gOCIsInZhciBkaXNwb3NlZCA9IGZhbHNlXG52YXIgbm9ybWFsaXplQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIilcbi8qIHNjcmlwdCAqL1xudmFyIF9fdnVlX3NjcmlwdF9fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVudlxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZSxcXFwidGFyZ2V0c1xcXCI6e1xcXCJicm93c2Vyc1xcXCI6W1xcXCI+IDIlXFxcIl0sXFxcInVnbGlmeVxcXCI6dHJ1ZX19XV0sXFxcInBsdWdpbnNcXFwiOltcXFwidHJhbnNmb3JtLW9iamVjdC1yZXN0LXNwcmVhZFxcXCIsW1xcXCJ0cmFuc2Zvcm0tcnVudGltZVxcXCIse1xcXCJwb2x5ZmlsbFxcXCI6ZmFsc2UsXFxcImhlbHBlcnNcXFwiOmZhbHNlfV1dfSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL1RvcE1lbnUudnVlXCIpXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSBudWxsXG4vKiB0ZW1wbGF0ZSBmdW5jdGlvbmFsICovXG52YXIgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fID0gZmFsc2Vcbi8qIHN0eWxlcyAqL1xudmFyIF9fdnVlX3N0eWxlc19fID0gbnVsbFxuLyogc2NvcGVJZCAqL1xudmFyIF9fdnVlX3Njb3BlSWRfXyA9IG51bGxcbi8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xudmFyIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSBudWxsXG52YXIgQ29tcG9uZW50ID0gbm9ybWFsaXplQ29tcG9uZW50KFxuICBfX3Z1ZV9zY3JpcHRfXyxcbiAgX192dWVfdGVtcGxhdGVfXyxcbiAgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fLFxuICBfX3Z1ZV9zdHlsZXNfXyxcbiAgX192dWVfc2NvcGVJZF9fLFxuICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9Ub3BNZW51LnZ1ZVwiXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtbG9hZGVyL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi02MjhkNmE2ZFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTYyOGQ2YTZkXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvVG9wTWVudS52dWVcbi8vIG1vZHVsZSBpZCA9IC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL1RvcE1lbnUudnVlXG4vLyBtb2R1bGUgY2h1bmtzID0gOCIsInZhciBkaXNwb3NlZCA9IGZhbHNlXG5mdW5jdGlvbiBpbmplY3RTdHlsZSAoc3NyQ29udGV4dCkge1xuICBpZiAoZGlzcG9zZWQpIHJldHVyblxuICByZXF1aXJlKFwiISF2dWUtc3R5bGUtbG9hZGVyIWNzcy1sb2FkZXI/c291cmNlTWFwIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleD97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMjIzMjRmZDJcXFwiLFxcXCJzY29wZWRcXFwiOnRydWUsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9Xcml0ZUxpbmsudnVlXCIpXG59XG52YXIgbm9ybWFsaXplQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIilcbi8qIHNjcmlwdCAqL1xudmFyIF9fdnVlX3NjcmlwdF9fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVudlxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZSxcXFwidGFyZ2V0c1xcXCI6e1xcXCJicm93c2Vyc1xcXCI6W1xcXCI+IDIlXFxcIl0sXFxcInVnbGlmeVxcXCI6dHJ1ZX19XV0sXFxcInBsdWdpbnNcXFwiOltcXFwidHJhbnNmb3JtLW9iamVjdC1yZXN0LXNwcmVhZFxcXCIsW1xcXCJ0cmFuc2Zvcm0tcnVudGltZVxcXCIse1xcXCJwb2x5ZmlsbFxcXCI6ZmFsc2UsXFxcImhlbHBlcnNcXFwiOmZhbHNlfV1dfSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL1dyaXRlTGluay52dWVcIilcbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LTIyMzI0ZmQyXFxcIixcXFwiaGFzU2NvcGVkXFxcIjp0cnVlLFxcXCJidWJsZVxcXCI6e1xcXCJ0cmFuc2Zvcm1zXFxcIjp7fX19IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9Xcml0ZUxpbmsudnVlXCIpXG4vKiB0ZW1wbGF0ZSBmdW5jdGlvbmFsICovXG52YXIgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fID0gZmFsc2Vcbi8qIHN0eWxlcyAqL1xudmFyIF9fdnVlX3N0eWxlc19fID0gaW5qZWN0U3R5bGVcbi8qIHNjb3BlSWQgKi9cbnZhciBfX3Z1ZV9zY29wZUlkX18gPSBcImRhdGEtdi0yMjMyNGZkMlwiXG4vKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbnZhciBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fID0gbnVsbFxudmFyIENvbXBvbmVudCA9IG5vcm1hbGl6ZUNvbXBvbmVudChcbiAgX192dWVfc2NyaXB0X18sXG4gIF9fdnVlX3RlbXBsYXRlX18sXG4gIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyxcbiAgX192dWVfc3R5bGVzX18sXG4gIF9fdnVlX3Njb3BlSWRfXyxcbiAgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfX1xuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvV3JpdGVMaW5rLnZ1ZVwiXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtbG9hZGVyL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi0yMjMyNGZkMlwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTIyMzI0ZmQyXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvV3JpdGVMaW5rLnZ1ZVxuLy8gbW9kdWxlIGlkID0gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvV3JpdGVMaW5rLnZ1ZVxuLy8gbW9kdWxlIGNodW5rcyA9IDgiXSwic291cmNlUm9vdCI6IiJ9