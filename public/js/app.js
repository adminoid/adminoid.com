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
        text: '',
        rc_key: ''
      })
    };
  },

  methods: {
    onSubmit: function onSubmit() {
      var _this2 = this;

      this.form.submit('post', '/feedback-messages').then(function (data) {
        _this2.message = data.message;
        _this2.$parent.$emit('stop-write', true);
      });
    }
  },
  mounted: function mounted() {
    var _this3 = this;

    var setToken = function setToken() {
      return function (token) {
        _this3.form.rc_key = token;
      };
    };
    Vue.prototype.$bus.on("rc-loaded", setToken());
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
exports.push([module.i, "\na[data-v-22324fd2] {\n  font-weight: bold;\n}\n\n", "", {"version":3,"sources":["/Users/petja/Projects/sites/adminoid.com/resources/assets/js/components/resources/assets/js/components/WriteLink.vue"],"names":[],"mappings":";AAkBA;EACA,kBAAA;CACA","file":"WriteLink.vue","sourcesContent":["<template>\n  <a href=\"#\" @click.prevent.stop=\"goWrite\"><slot></slot></a>\n</template>\n\n<script>\n  export default {\n    name: \"WriteLink\",\n\n    methods: {\n      goWrite () {\n        this.$parent.$emit('go-write',true);\n      }\n    }\n  }\n</script>\n\n<style scoped>\n\n  a {\n    font-weight: bold;\n  }\n\n</style>\n"],"sourceRoot":""}]);

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

/***/ "./node_modules/mitt/dist/mitt.mjs":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(n){return{all:n=n||new Map,on:function(t,e){var i=n.get(t);i?i.push(e):n.set(t,[e])},off:function(t,e){var i=n.get(t);i&&(e?i.splice(i.indexOf(e)>>>0,1):n.set(t,[]))},emit:function(t,e){var i=n.get(t);i&&i.slice().map(function(n){n(e)}),(i=n.get("*"))&&i.slice().map(function(n){n(t,e)})}}});
//# sourceMappingURL=mitt.mjs.map


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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__("./node_modules/vue/dist/vue.common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_TopMenu__ = __webpack_require__("./resources/assets/js/components/TopMenu.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_TopMenu___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_TopMenu__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_FeedbackForm__ = __webpack_require__("./resources/assets/js/components/FeedbackForm.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_FeedbackForm___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_FeedbackForm__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_WriteLink__ = __webpack_require__("./resources/assets/js/components/WriteLink.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_WriteLink___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__components_WriteLink__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_mitt__ = __webpack_require__("./node_modules/mitt/dist/mitt.mjs");

/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

__webpack_require__("./resources/assets/js/bootstrap.js");



/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */






__WEBPACK_IMPORTED_MODULE_0_vue___default.a.prototype.$bus = Object(__WEBPACK_IMPORTED_MODULE_4_mitt__["a" /* default */])();

__WEBPACK_IMPORTED_MODULE_0_vue___default.a.component("clouds", function (resolve) {
  __webpack_require__.e/* require */(6).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("./resources/assets/js/components/pages/index/Clouds.vue")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
});

__WEBPACK_IMPORTED_MODULE_0_vue___default.a.component("cube", function (resolve) {
  __webpack_require__.e/* require */(2).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("./resources/assets/js/components/pages/index/Cube.vue")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
});

__WEBPACK_IMPORTED_MODULE_0_vue___default.a.component("clock", function (resolve) {
  __webpack_require__.e/* require */(5).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("./resources/assets/js/components/pages/price/Clock.vue")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
});

__WEBPACK_IMPORTED_MODULE_0_vue___default.a.component("tools-block", function (resolve) {
  __webpack_require__.e/* require */(4).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("./resources/assets/js/components/pages/tools/ToolsBlock.vue")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
});

__WEBPACK_IMPORTED_MODULE_0_vue___default.a.component("zoom", function (resolve) {
  __webpack_require__.e/* require */(0).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("./resources/assets/js/components/pages/portfolio/Zoom.vue")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
});

__WEBPACK_IMPORTED_MODULE_0_vue___default.a.component("video-background", function (resolve) {
  __webpack_require__.e/* require */(1).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("./resources/assets/js/components/pages/portfolio/VideoBackground.vue")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
});

__WEBPACK_IMPORTED_MODULE_0_vue___default.a.component("half-rotate", function (resolve) {
  __webpack_require__.e/* require */(3).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("./resources/assets/js/components/pages/workflow/HalfRotate.vue")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
});

window.Vue = __WEBPACK_IMPORTED_MODULE_0_vue___default.a;

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a({

  el: '#app',

  components: {
    TopMenu: __WEBPACK_IMPORTED_MODULE_1__components_TopMenu___default.a, FeedbackForm: __WEBPACK_IMPORTED_MODULE_2__components_FeedbackForm___default.a, WriteLink: __WEBPACK_IMPORTED_MODULE_3__components_WriteLink___default.a
  },

  data: function data() {
    return {
      write: false
    };
  }
});

app.$on('go-write', function () {
  var scriptEle = document.createElement("script");
  scriptEle.setAttribute("src", 'https://www.google.com/recaptcha/api.js?render=' + window.rcKey);
  scriptEle.addEventListener("load", function () {
    // here must get recaptcha code
    grecaptcha.ready(function () {
      grecaptcha.execute(window.rcKey, { action: 'submit' }).then(function (token) {
        // send mitt event
        __WEBPACK_IMPORTED_MODULE_0_vue___default.a.prototype.$bus.emit("rc-loaded", token);
      });
    });
  });
  scriptEle.addEventListener("error", function (ev) {
    console.log("Error on loading file", ev);
  });
  document.body.appendChild(scriptEle);
  app.write = true;
  $('#super-modal').modal({
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL0ZlZWRiYWNrRm9ybS52dWUiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9Ub3BNZW51LnZ1ZSIsIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL1dyaXRlTGluay52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL1dyaXRlTGluay52dWU/NzU0NyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21pdHQvZGlzdC9taXR0Lm1qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL1dyaXRlTGluay52dWU/YjJlNCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvV3JpdGVMaW5rLnZ1ZT8xZTEyIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2xpc3RUb1N0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Jvb3RzdHJhcC5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvRmVlZGJhY2tGb3JtLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvVG9wTWVudS52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL1dyaXRlTGluay52dWUiXSwibmFtZXMiOlsicmVxdWlyZSIsIlZ1ZSIsInByb3RvdHlwZSIsIiRidXMiLCJtaXR0IiwiY29tcG9uZW50IiwicmVzb2x2ZSIsIndpbmRvdyIsImFwcCIsImVsIiwiY29tcG9uZW50cyIsIlRvcE1lbnUiLCJGZWVkYmFja0Zvcm0iLCJXcml0ZUxpbmsiLCJkYXRhIiwid3JpdGUiLCIkb24iLCJzY3JpcHRFbGUiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJyY0tleSIsImFkZEV2ZW50TGlzdGVuZXIiLCJncmVjYXB0Y2hhIiwicmVhZHkiLCJleGVjdXRlIiwiYWN0aW9uIiwidGhlbiIsInRva2VuIiwiZW1pdCIsImV2IiwiY29uc29sZSIsImxvZyIsImJvZHkiLCJhcHBlbmRDaGlsZCIsIiQiLCJtb2RhbCIsInRyYW5zaXRpb24iLCJvbkhpZGUiLCJzZXRUaW1lb3V0IiwiXyIsImpRdWVyeSIsImUiLCJheGlvcyIsImRlZmF1bHRzIiwiaGVhZGVycyIsImNvbW1vbiIsImhlYWQiLCJxdWVyeVNlbGVjdG9yIiwiY29udGVudCIsImVycm9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ0E7O0lBQ0EsTTtBQUNBO0FBQUE7O0FBQ0E7QUFDQTs7Ozt3QkFDQSxLLEVBQUE7QUFDQTtBQUNBOzs7MEJBQ0E7QUFDQTtBQUNBOzs7d0JBQ0EsSyxFQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OzsyQkFDQSxNLEVBQUE7QUFDQTtBQUNBOzs7MEJBQ0EsSyxFQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7SUFHQSxJO0FBQ0E7QUFBQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OzsyQkFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs0QkFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OzsyQkFD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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7O0FBRUQiLCJmaWxlIjoiL2pzL2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQ+XG4gIGltcG9ydCBheGlvcyBmcm9tICdheGlvcydcbiAgY2xhc3MgRXJyb3JzIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgIHRoaXMuZXJyb3JzID0ge31cbiAgICB9XG4gICAgaGFzKGZpZWxkKSB7XG4gICAgICByZXR1cm4gdGhpcy5lcnJvcnMuaGFzT3duUHJvcGVydHkoZmllbGQpXG4gICAgfVxuICAgIGFueSgpIHtcbiAgICAgIHJldHVybiBPYmplY3Qua2V5cyh0aGlzLmVycm9ycykubGVuZ3RoID4gMFxuICAgIH1cbiAgICBnZXQoZmllbGQpIHtcbiAgICAgIGlmICh0aGlzLmVycm9yc1tmaWVsZF0pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZXJyb3JzW2ZpZWxkXVswXVxuICAgICAgfVxuICAgIH1cbiAgICByZWNvcmQoZXJyb3JzKSB7XG4gICAgICB0aGlzLmVycm9ycyA9IGVycm9yc1xuICAgIH1cbiAgICBjbGVhcihmaWVsZCkge1xuICAgICAgaWYgKGZpZWxkKSB7XG4gICAgICAgIGRlbGV0ZSB0aGlzLmVycm9yc1tmaWVsZF1cbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICB0aGlzLmVycm9ycyA9IHt9XG4gICAgfVxuICB9XG5cbiAgY2xhc3MgRm9ybSB7XG4gICAgY29uc3RydWN0b3IoZGF0YSkge1xuICAgICAgdGhpcy5vcmlnaW5hbERhdGEgPSBkYXRhO1xuICAgICAgZm9yIChsZXQgZmllbGQgaW4gZGF0YSkge1xuICAgICAgICB0aGlzW2ZpZWxkXSA9IGRhdGFbZmllbGRdXG4gICAgICB9XG4gICAgICB0aGlzLmVycm9ycyA9IG5ldyBFcnJvcnMoKVxuICAgICAgdGhpcy5zdWNjZXNzID0gZmFsc2VcbiAgICB9XG4gICAgZGF0YSgpIHtcbiAgICAgIGxldCBkYXRhID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcylcbiAgICAgIGRlbGV0ZSBkYXRhLm9yaWdpbmFsRGF0YVxuICAgICAgZGVsZXRlIGRhdGEuZXJyb3JzXG4gICAgICByZXR1cm4gZGF0YVxuICAgIH1cbiAgICByZXNldCgpIHtcbiAgICAgIGZvciAobGV0IGZpZWxkIGluIHRoaXMub3JpZ2luYWxEYXRhKSB7XG4gICAgICAgIHRoaXNbZmllbGRdID0gJydcbiAgICAgIH1cbiAgICAgIHRoaXMuZXJyb3JzLmNsZWFyKClcbiAgICB9XG4gICAgc3VibWl0KHJlcXVlc3RUeXBlLCB1cmwpIHtcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIGF4aW9zW3JlcXVlc3RUeXBlXSh1cmwsIHRoaXMuZGF0YSgpKVxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgICAgdGhpcy5vblN1Y2Nlc3MocmVzcG9uc2UuZGF0YSlcbiAgICAgICAgICByZXNvbHZlKHJlc3BvbnNlLmRhdGEpXG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgdGhpcy5vbkZhaWwoZXJyb3IucmVzcG9uc2UuZGF0YSlcbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgfVxuICAgIG9uU3VjY2VzcyhkYXRhKSB7XG4gICAgICB0aGlzLnJlc2V0KCk7XG4gICAgICB0aGlzLm1lc3NhZ2UgPSBkYXRhLm1lc3NhZ2U7XG4gICAgICB0aGlzLnN1Y2Nlc3MgPSB0cnVlO1xuICAgIH1cbiAgICBvbkZhaWwoZXJyb3JzKSB7XG4gICAgICB0aGlzLmVycm9ycy5yZWNvcmQoZXJyb3JzLmVycm9ycyk7XG4gICAgfVxuICB9XG5cbiAgZXhwb3J0IGRlZmF1bHQge1xuICAgIGRhdGEgKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZm9ybTogbmV3IEZvcm0oe1xuICAgICAgICAgIGVtYWlsOiAnJyxcbiAgICAgICAgICB0ZXh0OiAnJyxcbiAgICAgICAgICByY19rZXk6ICcnLFxuICAgICAgICB9KSxcbiAgICAgIH1cbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgIG9uU3VibWl0KCkge1xuICAgICAgICB0aGlzLmZvcm0uc3VibWl0KCdwb3N0JywgJy9mZWVkYmFjay1tZXNzYWdlcycpXG4gICAgICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICB0aGlzLm1lc3NhZ2UgPSBkYXRhLm1lc3NhZ2U7XG4gICAgICAgICAgICB0aGlzLiRwYXJlbnQuJGVtaXQoJ3N0b3Atd3JpdGUnLHRydWUpO1xuICAgICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0sXG4gICAgbW91bnRlZDogZnVuY3Rpb24oKSB7XG4gICAgICBjb25zdCBzZXRUb2tlbiA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuICh0b2tlbikgPT4ge1xuICAgICAgICAgIHRoaXMuZm9ybS5yY19rZXkgPSB0b2tlblxuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgVnVlLnByb3RvdHlwZS4kYnVzLm9uKFwicmMtbG9hZGVkXCIsIHNldFRva2VuKCkpO1xuICAgIH0sXG4gIH1cbjwvc2NyaXB0PlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHJlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9GZWVkYmFja0Zvcm0udnVlIiwiPHNjcmlwdD5cbmltcG9ydCB7VHdlZW5NYXgsIFRpbWVsaW5lTGl0ZX0gZnJvbSAnZ3NhcCdcbmV4cG9ydCBkZWZhdWx0IHtcblxuICBwcm9wczogWyd3cml0ZSddLFxuXG4gIGRhdGEgKCkge1xuICAgIHJldHVybiB7XG4gICAgICAvLyBicm93c2VyOiAwLFxuICAgICAgdGltZWxpbmU6IG51bGwsXG4gICAgICB0b3BPZmZzZXQ6IDAsXG4gICAgICBzZXR0aW5nczoge1xuICAgICAgICB0b3BPZmZzZXRGb3JUb2dnbGVBbmltYXRpb246IDMwMFxuICAgICAgfSxcbiAgICAgIGN1cnNvcjoge1xuICAgICAgICB4OiAwLFxuICAgICAgICB5OiAwXG4gICAgICB9LFxuICAgICAgc2VsZWN0b3JzOiB7XG4gICAgICAgIGdzYXA6IHtcbiAgICAgICAgICBzdmdMb2dvOiAnI2hlYWRlci1sb2dvLXN2ZycsXG4gICAgICAgICAgbGVmdEhhbmQ6ICcjbGVmdC1oYW5kJyxcbiAgICAgICAgICByaWdodEhhbmQ6ICcjcmlnaHQtaGFuZCcsXG4gICAgICAgICAgbWFuQm9keTogJyNtYW4tZnVsbCcsXG4gICAgICAgICAgaGVhZDogJyNoZWFkJyxcbiAgICAgICAgICBleWVQdXBpbDogJyNleWUtcHVwaWwnLFxuICAgICAgICAgIHRleHRBZG1pbm9pZDogJyNzdHJpcHBlZC1sb2dvLXRleHQnLFxuICAgICAgICAgIHRleHRzV2VibWFzdGVyOiAnI3dlYi1NYXN0ZXInLFxuICAgICAgICAgIHRleHRzV2VibWFzdGVyTGV0dGVyOiAnLndtLXRsJyxcbiAgICAgICAgICB0ZXh0V2ViOiAndHNwYW4jd2ViJyxcbiAgICAgICAgICB0ZXh0TWFzdGVyOiAndHNwYW4jbWFzdGVyJyxcbiAgICAgICAgICB0ZXh0c1dlYm1hc3RlcldyYXBwZXI6ICcjUmVjdGFuZ2xlLTIxJyxcbiAgICAgICAgICB0b3BNZW51OiAnI3RvcC1tZW51JyxcbiAgICAgICAgICB0b3BNZW51SXRlbTogJy5pdGVtJyxcbiAgICAgICAgICAvLyBmbGlja2VyXG4gICAgICAgICAgcmVjdGFuZ2xlQ2VudGVyQ29sb3I6ICcjUmVjdGFuZ2xlLUdyZWVuJyxcbiAgICAgICAgICByZWN0YW5nbGVzQm9yZGVyQ29sb3I6ICcuUmVjdGFuZ2xlLVJlZCdcbiAgICAgICAgfSxcbiAgICAgICAgZXllOiAnI2V5ZS1wdXBpbCdcbiAgICAgIH0sXG4gICAgICByZWR1Y2VkOiBmYWxzZSxcbiAgICAgICRleWU6IHt9LFxuICAgICAgZXllVHJhbnNmb3JtV2l0aEFuZ2xlOiAndHJhbnNsYXRlKDEzLjAwMDAwMCwgMzYuMDAwMDAwKSByb3RhdGUoNDAuMDAwMDAwKSB0cmFuc2xhdGUoLTEzLjAwMDAwMCwgLTM2LjAwMDAwMCkgdHJhbnNsYXRlKDguMDAwMDAwLCAzMS4wMDAwMDApJyxcbiAgICAgIHRvdWNoOiBmYWxzZSxcbiAgICB9XG4gIH0sXG5cbiAgbW91bnRlZCAoKSB7XG4gICAgdGhpcy50b3VjaCA9IHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoJ01vYmlsZScpICE9PSAtMVxuICAgIHRoaXMuY2hlY2tUb3BPZmZzZXQoKTtcbiAgICAvLyB0aGlzLmluaXRGbGlja2VyKCk7XG4gICAgdGhpcy50aW1lbGluZSA9IHRoaXMuY29tcGlsZVRpbWVsaW5lKCk7XG4gICAgdGhpcy4kZXllID0gJCh0aGlzLiRlbCkuZmluZCh0aGlzLnNlbGVjdG9ycy5leWUpO1xuXG4gICAgLy8gdGhpcy5icm93c2VyID0gdGhpcy5kZXRlY3RCcm93c2VyKCk7XG4gIH0sXG5cbiAgY3JlYXRlZDogZnVuY3Rpb24gKCkge1xuICAgIC8vIHRvZG86IGFkZEV2ZW50TGlzdGVuZXIgZm9yIHRvdWNoXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuY2hlY2tUb3BPZmZzZXQpXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMuZXllTW92ZSlcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIHRoaXMuZXllTW92ZSlcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgdGhpcy5leWVNb3ZlKVxuICB9LFxuXG4gIGJlZm9yZURlc3Ryb3k6IGZ1bmN0aW9uICgpIHtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5jaGVja1RvcE9mZnNldClcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5leWVNb3ZlKVxuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgdGhpcy5leWVNb3ZlKVxuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCB0aGlzLmV5ZU1vdmUpXG4gIH0sXG5cbiAgd2F0Y2g6IHtcbiAgICB0b3BPZmZzZXQ6IGZ1bmN0aW9uICh2YWwsIG9sZFZhbCkge1xuICAgICAgaWYgKG9sZFZhbCA8IHRoaXMuc2V0dGluZ3MudG9wT2Zmc2V0Rm9yVG9nZ2xlQW5pbWF0aW9uICYmIHZhbCA+PSB0aGlzLnNldHRpbmdzLnRvcE9mZnNldEZvclRvZ2dsZUFuaW1hdGlvbikge1xuICAgICAgICB0aGlzLnJ1bkxvZ29BbmltYXRpb24oKVxuICAgICAgfSBlbHNlIGlmIChvbGRWYWwgPj0gdGhpcy5zZXR0aW5ncy50b3BPZmZzZXRGb3JUb2dnbGVBbmltYXRpb24gJiYgdmFsIDwgdGhpcy5zZXR0aW5ncy50b3BPZmZzZXRGb3JUb2dnbGVBbmltYXRpb24pIHtcbiAgICAgICAgdGhpcy5ydW5Mb2dvQW5pbWF0aW9uKCdiYWNrd2FyZCcpXG4gICAgICB9XG4gICAgfVxuICB9LFxuXG4gIG1ldGhvZHM6IHtcbiAgICB0b1dyaXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgICB0aGlzLiRwYXJlbnQuJGVtaXQoJ2dvLXdyaXRlJyx0cnVlKTtcbiAgICB9LFxuXG4gICAgLy8gdG9kbzogaW5pdCBiZWxvdyBtZXRob2Qgb25Ub3VjaFxuICAgIGV5ZU1vdmU6IGZ1bmN0aW9uIChlKSB7XG4gICAgICBpZiAoIXRoaXMucmVkdWNlZCkgcmV0dXJuIGZhbHNlXG5cbiAgICAgIGlmICh0aGlzLnRvdWNoKSB7XG4gICAgICAgIGlmIChlLnR5cGUgIT09ICdtb3VzZW1vdmUnKSB7XG4gICAgICAgICAgdGhpcy5jdXJzb3IueCA9IGUuY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WCArIHRoaXMuZ2V0U2Nyb2xsT2Zmc2V0KCkubGVmdFxuICAgICAgICAgIHRoaXMuY3Vyc29yLnkgPSBlLmNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFkgKyB0aGlzLmdldFNjcm9sbE9mZnNldCgpLnRvcFxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmN1cnNvci54ID0gZS5wYWdlWFxuICAgICAgICB0aGlzLmN1cnNvci55ID0gZS5wYWdlWVxuICAgICAgfVxuXG4gICAgICB0aGlzLnNldEFuZ2xlKClcblxuICAgIH0sXG5cbiAgICBzZXRBbmdsZSgpIHtcbiAgICAgIGxldCBleWVDZW50ZXIgPSBbdGhpcy4kZXllWzBdLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQgKyB0aGlzLmdldFNjcm9sbE9mZnNldCgpLmxlZnQgKyB0aGlzLiRleWUud2lkdGgoKSAvIDIsIHRoaXMuJGV5ZVswXS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgKyB0aGlzLmdldFNjcm9sbE9mZnNldCgpLnRvcCArIHRoaXMuJGV5ZS5oZWlnaHQoKSAvIDJdXG4gICAgICBsZXQgZXllQW5nbGUgPSBNYXRoLmF0YW4yKHRoaXMuY3Vyc29yLnggLSBleWVDZW50ZXJbMF0sIC0odGhpcy5jdXJzb3IueSAtIGV5ZUNlbnRlclsxXSkpICogKDE4MCAvIE1hdGguUEkpIC0gOTBcbiAgICAgIHRoaXMuZXllVHJhbnNmb3JtV2l0aEFuZ2xlID0gJ3RyYW5zbGF0ZSgxMy4wMDAwMDAsIDM2LjAwMDAwMCkgcm90YXRlKCcgKyBleWVBbmdsZSArICcpIHRyYW5zbGF0ZSgtMTMuMDAwMDAwLCAtMzYuMDAwMDAwKSB0cmFuc2xhdGUoOC4wMDAwMDAsIDMxLjAwMDAwMCknO1xuICAgIH0sXG5cbiAgICBnZXRTY3JvbGxPZmZzZXQgKCkge1xuICAgICAgY29uc3QgZG9jID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbGVmdDogKHdpbmRvdy5wYWdlWE9mZnNldCB8fCBkb2Muc2Nyb2xsTGVmdCkgLSAoZG9jLmNsaWVudExlZnQgfHwgMCksXG4gICAgICAgIHRvcDogKHdpbmRvdy5wYWdlWU9mZnNldCB8fCBkb2Muc2Nyb2xsVG9wKSAgLSAoZG9jLmNsaWVudFRvcCB8fCAwKSxcbiAgICAgIH07XG4gICAgfSxcblxuICAgIHRvZ2dsZVNpZGViYXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICQoJyN0b3AtbWVudS1zaWRlYmFyJylcbiAgICAgICAgICAuc2lkZWJhcih7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAnb3ZlcmxheSdcbiAgICAgICAgICB9KVxuICAgICAgICAgIC5zaWRlYmFyKCd0b2dnbGUnKVxuICAgIH0sXG5cbiAgICBpbml0RmxpY2tlcjogZnVuY3Rpb24gKCkge1xuICAgICAgY29uc3Qgc3RlcCA9IDE7XG4gICAgICBUd2Vlbk1heC50byh0aGlzLnNlbGVjdG9ycy5nc2FwLnJlY3RhbmdsZUNlbnRlckNvbG9yLCBzdGVwLCB7XG4gICAgICAgIGZpbGw6ICcjQ0QyRTQxJyxcbiAgICAgICAgcmVwZWF0OiAtMSxcbiAgICAgICAgeW95bzogdHJ1ZSxcbiAgICAgICAgcmVwZWF0RGVsYXk6IHN0ZXAgKiAzXG4gICAgICB9KTtcbiAgICAgIFR3ZWVuTWF4LnRvKHRoaXMuc2VsZWN0b3JzLmdzYXAucmVjdGFuZ2xlc0JvcmRlckNvbG9yLCBzdGVwLCB7XG4gICAgICAgIGZpbGw6ICcjMUQ2MEI1JyxcbiAgICAgICAgcmVwZWF0OiAtMSxcbiAgICAgICAgeW95bzogdHJ1ZSxcbiAgICAgICAgcmVwZWF0RGVsYXk6IHN0ZXAgKiAzLFxuICAgICAgICBkZWxheTogc3RlcCAqIDNcbiAgICAgIH0pO1xuICAgICAgVHdlZW5NYXguZnJvbVRvKHRoaXMuc2VsZWN0b3JzLmdzYXAudGV4dFdlYiwgc3RlcCAqIDIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgZmlsbDogJyNGRkZGRkYnXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBmaWxsOiAnI0ZGOTgxQycsXG4gICAgICAgICAgICByZXBlYXQ6IC0xLFxuICAgICAgICAgICAgcmVwZWF0RGVsYXk6IHN0ZXAgKiAyLFxuICAgICAgICAgICAgeW95bzogdHJ1ZVxuICAgICAgICAgIH0pO1xuICAgICAgVHdlZW5NYXguZnJvbVRvKHRoaXMuc2VsZWN0b3JzLmdzYXAudGV4dE1hc3Rlciwgc3RlcCAqIDIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgZmlsbDogJyNGRjk4MUMnXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBmaWxsOiAnI0ZGRkZGRicsXG4gICAgICAgICAgICByZXBlYXQ6IC0xLFxuICAgICAgICAgICAgcmVwZWF0RGVsYXk6IHN0ZXAgKiAyLFxuICAgICAgICAgICAgeW95bzogdHJ1ZVxuICAgICAgICAgIH0pO1xuICAgIH0sXG5cbiAgICBydW5Mb2dvQW5pbWF0aW9uOiBmdW5jdGlvbiAoZGlyZWN0aW9uID0gJ2ZvcndhcmQnKSB7XG4gICAgICBpZiAoZGlyZWN0aW9uID09PSAnZm9yd2FyZCcpIHtcbiAgICAgICAgdGhpcy5yZWR1Y2VkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy50aW1lbGluZS5wYXVzZSgpLnBsYXkoKTtcbiAgICAgIH0gZWxzZSBpZiAoZGlyZWN0aW9uID09PSAnYmFja3dhcmQnKSB7XG4gICAgICAgIHRoaXMucmVkdWNlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnRpbWVsaW5lLnBhdXNlKCkucmV2ZXJzZSgpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBjaGVja1RvcE9mZnNldDogZnVuY3Rpb24gKCkge1xuICAgICAgdGhpcy50b3BPZmZzZXQgPSB3aW5kb3cucGFnZVlPZmZzZXRcbiAgICB9LFxuXG4gICAgY29tcGlsZVRpbWVsaW5lOiBmdW5jdGlvbiAoKSB7XG4gICAgICBsZXQgcGFydDF0aW1lID0gMC4yLFxuICAgICAgICAgIHBhcnQydGltZSA9IDAuNSxcbiAgICAgICAgICAkbG9nbyA9ICQodGhpcy5zZWxlY3RvcnMuZ3NhcC5zdmdMb2dvKSxcbiAgICAgICAgICAkbGVmdEhhbmQgPSAkbG9nby5maW5kKHRoaXMuc2VsZWN0b3JzLmdzYXAubGVmdEhhbmQpLFxuICAgICAgICAgICRyaWdodEhhbmQgPSAkbG9nby5maW5kKHRoaXMuc2VsZWN0b3JzLmdzYXAucmlnaHRIYW5kKSxcbiAgICAgICAgICAkbWFuQm9keSA9ICRsb2dvLmZpbmQodGhpcy5zZWxlY3RvcnMuZ3NhcC5tYW5Cb2R5KSxcbiAgICAgICAgICAkaGVhZCA9ICRsb2dvLmZpbmQodGhpcy5zZWxlY3RvcnMuZ3NhcC5oZWFkKSxcbiAgICAgICAgICAkZXllUHVwaWwgPSAkbG9nby5maW5kKHRoaXMuc2VsZWN0b3JzLmdzYXAuZXllUHVwaWwpLFxuICAgICAgICAgICR0ZXh0QWRtaW5vaWQgPSAkbG9nby5maW5kKHRoaXMuc2VsZWN0b3JzLmdzYXAudGV4dEFkbWlub2lkKSxcbiAgICAgICAgICBsZXR0ZXJzV2VibWFzdGVyID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoXG4gICAgICAgICAgICAgICRsb2dvLmZpbmQodGhpcy5zZWxlY3RvcnMuZ3NhcC50ZXh0c1dlYm1hc3RlcikuZmluZCh0aGlzLnNlbGVjdG9ycy5nc2FwLnRleHRzV2VibWFzdGVyTGV0dGVyKVxuICAgICAgICAgICksXG4gICAgICAgICAgdGV4dHNXZWJtYXN0ZXJXcmFwcGVyID0gJGxvZ28uZmluZCh0aGlzLnNlbGVjdG9ycy5nc2FwLnRleHRzV2VibWFzdGVyV3JhcHBlciksXG4gICAgICAgICAgJHRvcE1lbnUgPSAkKGRvY3VtZW50KS5maW5kKHRoaXMuc2VsZWN0b3JzLmdzYXAudG9wTWVudSksXG4gICAgICAgICAgdG9wTWVudUl0ZW1zRm9yUmVzaXppbmcgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbCgkdG9wTWVudS5maW5kKHRoaXMuc2VsZWN0b3JzLmdzYXAudG9wTWVudUl0ZW0pKTtcblxuICAgICAgdG9wTWVudUl0ZW1zRm9yUmVzaXppbmcucHVzaCgkdG9wTWVudSk7XG5cbiAgICAgIGxldCB0bExlZnRIYW5kID0gbmV3IFRpbWVsaW5lTGl0ZSgpO1xuXG4gICAgICAvLyBIYW5kcyAod2F2aW5nKVxuICAgICAgdGxMZWZ0SGFuZC5hZGQoVHdlZW5NYXguZnJvbVRvKCRsZWZ0SGFuZCwgMC4wOCwge1xuICAgICAgICByb3RhdGlvbjogMFxuICAgICAgfSwge1xuICAgICAgICByb3RhdGlvbjogMzUsXG4gICAgICAgIHRyYW5zZm9ybU9yaWdpbjogJzkwJSAxMDAlJ1xuICAgICAgfSkpXG4gICAgICAgICAgLmFkZChUd2Vlbk1heC50bygkbGVmdEhhbmQsIDAuMDgsIHtyb3RhdGlvbjogLTUwLCB0cmFuc2Zvcm1PcmlnaW46ICc5MCUgMTAwJSd9KSlcbiAgICAgICAgICAuYWRkKFR3ZWVuTWF4LnRvKCRsZWZ0SGFuZCwgMC4wOCwge3JvdGF0aW9uOiAzNSwgdHJhbnNmb3JtT3JpZ2luOiAnOTAlIDEwMCUnfSkpXG4gICAgICAgICAgLmFkZChUd2Vlbk1heC50bygkbGVmdEhhbmQsIDAuMDgsIHtyb3RhdGlvbjogLTUwLCB0cmFuc2Zvcm1PcmlnaW46ICc5MCUgMTAwJSd9KSlcbiAgICAgICAgICAuYWRkKFR3ZWVuTWF4LnRvKCRsZWZ0SGFuZCwgMC4wOCwge3JvdGF0aW9uOiAzNSwgdHJhbnNmb3JtT3JpZ2luOiAnOTAlIDEwMCUnfSkpXG4gICAgICAgICAgLmFkZChUd2Vlbk1heC50bygkbGVmdEhhbmQsIDAuMDgsIHtyb3RhdGlvbjogLTUwLCB0cmFuc2Zvcm1PcmlnaW46ICc5MCUgMTAwJSd9KSlcbiAgICAgICAgICAuYWRkKFR3ZWVuTWF4LnRvKCRsZWZ0SGFuZCwgMC4xMCwge3JvdGF0aW9uOiAzNSwgdHJhbnNmb3JtT3JpZ2luOiAnOTAlIDEwMCUnfSkpXG4gICAgICAgICAgLmFkZChUd2Vlbk1heC50bygkbGVmdEhhbmQsIDAuMTUsIHtyb3RhdGlvbjogLTc1LCB0cmFuc2Zvcm1PcmlnaW46ICc5MCUgMTAwJSd9KSk7XG5cbiAgICAgIGxldCB0bFJpZ2h0SGFuZCA9IG5ldyBUaW1lbGluZUxpdGUoKTtcbiAgICAgIHRsUmlnaHRIYW5kLmFkZChUd2Vlbk1heC5mcm9tVG8oJHJpZ2h0SGFuZCwgMC4wOCwge1xuICAgICAgICByb3RhdGlvbjogMFxuICAgICAgfSwge1xuICAgICAgICByb3RhdGlvbjogLTM1LFxuICAgICAgICB0cmFuc2Zvcm1PcmlnaW46ICcxMCUgMTAwJSdcbiAgICAgIH0pKTtcbiAgICAgIHRsUmlnaHRIYW5kLmFkZChUd2Vlbk1heC50bygkcmlnaHRIYW5kLCAwLjA4LCB7cm90YXRpb246IDUwLCB0cmFuc2Zvcm1PcmlnaW46ICcxMCUgMTAwJSd9KSk7XG4gICAgICB0bFJpZ2h0SGFuZC5hZGQoVHdlZW5NYXgudG8oJHJpZ2h0SGFuZCwgMC4wOCwge3JvdGF0aW9uOiAtMzUsIHRyYW5zZm9ybU9yaWdpbjogJzEwJSAxMDAlJ30pKTtcbiAgICAgIHRsUmlnaHRIYW5kLmFkZChUd2Vlbk1heC50bygkcmlnaHRIYW5kLCAwLjA4LCB7cm90YXRpb246IDUwLCB0cmFuc2Zvcm1PcmlnaW46ICcxMCUgMTAwJSd9KSk7XG4gICAgICB0bFJpZ2h0SGFuZC5hZGQoVHdlZW5NYXgudG8oJHJpZ2h0SGFuZCwgMC4wOCwge3JvdGF0aW9uOiAtMzUsIHRyYW5zZm9ybU9yaWdpbjogJzEwJSAxMDAlJ30pKTtcbiAgICAgIHRsUmlnaHRIYW5kLmFkZChUd2Vlbk1heC50bygkcmlnaHRIYW5kLCAwLjA4LCB7cm90YXRpb246IDUwLCB0cmFuc2Zvcm1PcmlnaW46ICcxMCUgMTAwJSd9KSk7XG4gICAgICB0bFJpZ2h0SGFuZC5hZGQoVHdlZW5NYXgudG8oJHJpZ2h0SGFuZCwgMC4xMCwge3JvdGF0aW9uOiAtMzUsIHRyYW5zZm9ybU9yaWdpbjogJzEwJSAxMDAlJ30pKTtcbiAgICAgIHRsUmlnaHRIYW5kLmFkZChUd2Vlbk1heC50bygkcmlnaHRIYW5kLCAwLjE1LCB7cm90YXRpb246IDc1LCB0cmFuc2Zvcm1PcmlnaW46ICcxMCUgMTAwJSd9KSk7XG4gICAgICBsZXQgdGxIYW5kcyA9IG5ldyBUaW1lbGluZUxpdGUoKTtcbiAgICAgIHRsSGFuZHMuYWRkKHRsTGVmdEhhbmQsIDApO1xuICAgICAgdGxIYW5kcy5hZGQodGxSaWdodEhhbmQsIDApO1xuXG4gICAgICAvLyBCb2R5LCBwYXJ0IDFcbiAgICAgIGxldCB0bEJvZHkgPSBuZXcgVGltZWxpbmVMaXRlKCk7XG4gICAgICB0bEJvZHkuYWRkKFR3ZWVuTWF4LnRvKCRtYW5Cb2R5LCAwLjIsXG4gICAgICAgICAge3k6IDAsIHg6IDAsIHJvdGF0aW9uOiAwfSxcbiAgICAgICAgICB7eTogLTEwLCB4OiAyMCwgcm90YXRpb246IDM1LCB0cmFuc2Zvcm1PcmlnaW46ICc1MCUgNTAlJ31cbiAgICAgICkpXG4gICAgICAgICAgLy8gQm9keSwgcGFydCAyXG4gICAgICAgICAgLmFkZChUd2Vlbk1heC50bygkbWFuQm9keSwgMC41LFxuICAgICAgICAgICAgICB7eTogLTUsIHg6IDE4MCwgcm90YXRpb246IDkwLCB0cmFuc2Zvcm1PcmlnaW46ICc1MCUgNTAlJ31cbiAgICAgICAgICApKTtcblxuICAgICAgLy8gSGVhZFxuICAgICAgbGV0IHRsSGVhZCA9IG5ldyBUaW1lbGluZUxpdGUoKTtcbiAgICAgIHRsSGVhZC5mcm9tVG8oJGhlYWQsIDAuMyxcbiAgICAgICAgICB7YXV0b0FscGhhOiAxfSxcbiAgICAgICAgICB7YXV0b0FscGhhOiAwfVxuICAgICAgKTtcblxuICAgICAgLy8gU1ZHIGltZyBzaXplIChiZWdpbiBmcm9tIHBhcnQxdGltZSlcbiAgICAgIGxldCB0bExvZ29TaXplID0gbmV3IFRpbWVsaW5lTGl0ZSgpO1xuICAgICAgdGxMb2dvU2l6ZS5hZGQoVHdlZW5NYXgudG8oJGxvZ28sIHBhcnQxdGltZSxcbiAgICAgICAgICB7YXR0cjoge3ZpZXdCb3g6ICcwIDAgMjE5IDQyJ30sIHdpZHRoOiAyMTksIGhlaWdodDogNDJ9XG4gICAgICApLCBwYXJ0MXRpbWUpO1xuXG4gICAgICAvLyBFeWUtcHVwaWxcbiAgICAgIGxldCB0bEV5ZVB1cGlsID0gbmV3IFRpbWVsaW5lTGl0ZSgpO1xuICAgICAgdGxFeWVQdXBpbC5hZGQoVHdlZW5NYXgudG8oJGV5ZVB1cGlsLCBwYXJ0MXRpbWUsXG4gICAgICAgICAge2F1dG9BbHBoYTogMX1cbiAgICAgICksIHBhcnQxdGltZSk7XG5cbiAgICAgIC8vIFRleHQgYWRtaW5vaWRcbiAgICAgIGxldCB0bFRleHRBZG1pbm9pZCA9IG5ldyBUaW1lbGluZUxpdGUoKTtcbiAgICAgIHRsVGV4dEFkbWlub2lkLmFkZChUd2Vlbk1heC5mcm9tVG8oJHRleHRBZG1pbm9pZCwgcGFydDF0aW1lICsgcGFydDJ0aW1lLFxuICAgICAgICAgIHt4OiAwLCB5OiAyNH0sXG4gICAgICAgICAge3g6IC01MCwgeTogN31cbiAgICAgICkpO1xuXG4gICAgICAvLyBUZXh0IHdlYm1hc3RlciB0ZXh0c1dlYm1hc3RlclxuICAgICAgbGV0IHRsVGV4dFdlYm1hc3RlciA9IG5ldyBUaW1lbGluZUxpdGUoKTtcbiAgICAgIHRsVGV4dFdlYm1hc3Rlci5hZGQoXG4gICAgICAgICAgVHdlZW5NYXguc3RhZ2dlckZyb21UbyhsZXR0ZXJzV2VibWFzdGVyLnJldmVyc2UoKSwgKDAuMSksXG4gICAgICAgICAgICAgIHthdXRvQWxwaGE6IDEsIHJvdGF0ZVg6IDB9LFxuICAgICAgICAgICAgICB7YXV0b0FscGhhOiAwLCByb3RhdGVYOiAxMH0sXG4gICAgICAgICAgICAgIDAuMDVcbiAgICAgICAgICApXG4gICAgICApO1xuXG4gICAgICAvLyBXZWJtYXN0ZXIgV3JhcHBlclxuICAgICAgbGV0IHRsVGV4dFdlYm1hc3RlcldyYXBwZXIgPSBuZXcgVGltZWxpbmVMaXRlKCk7XG4gICAgICB0bFRleHRXZWJtYXN0ZXJXcmFwcGVyLmFkZChUd2Vlbk1heC5mcm9tVG8odGV4dHNXZWJtYXN0ZXJXcmFwcGVyLCAwLjUsXG4gICAgICAgICAge2F1dG9BbHBoYTogMX0sXG4gICAgICAgICAge2F1dG9BbHBoYTogMH1cbiAgICAgICksIDAuMik7XG5cbiAgICAgIC8vIFRvcE1lbnUgaGVpZ2h0IHJlZHVjdGlvbi9pbmNyZWFzZVxuICAgICAgbGV0IHRsVG9wTWVudSA9IG5ldyBUaW1lbGluZUxpdGUoKTtcbiAgICAgIHRsVG9wTWVudS5hZGQoVHdlZW5NYXguc3RhZ2dlckZyb21Ubyh0b3BNZW51SXRlbXNGb3JSZXNpemluZywgcGFydDF0aW1lLFxuICAgICAgICAgIHtoZWlnaHQ6ICc0LjY2NjY3cmVtJywgb3BhY2l0eTogMX0sXG4gICAgICAgICAge2hlaWdodDogJzMuNjY2NjdyZW0nLCBvcGFjaXR5OiAwLjkzfSxcbiAgICAgICAgICAwXG4gICAgICApLCBwYXJ0MXRpbWUpO1xuXG4gICAgICAvLyBDb25jbHVzaW9uXG4gICAgICBsZXQgdGltZWxpbmUgPSBuZXcgVGltZWxpbmVMaXRlKHtwYXVzZWQ6IHRydWV9KTtcbiAgICAgIHRpbWVsaW5lLnBhdXNlKCk7XG4gICAgICB0aW1lbGluZS5hZGQodGxIYW5kcywgMCk7XG4gICAgICB0aW1lbGluZS5hZGQodGxCb2R5LCAwKTtcbiAgICAgIHRpbWVsaW5lLmFkZCh0bEhlYWQsIDApO1xuICAgICAgdGltZWxpbmUuYWRkKHRsTG9nb1NpemUsIDApO1xuICAgICAgdGltZWxpbmUuYWRkKHRsRXllUHVwaWwsIDApO1xuICAgICAgdGltZWxpbmUuYWRkKHRsVGV4dEFkbWlub2lkLCAwKTtcbiAgICAgIHRpbWVsaW5lLmFkZCh0bFRleHRXZWJtYXN0ZXIsIDApO1xuICAgICAgdGltZWxpbmUuYWRkKHRsVGV4dFdlYm1hc3RlcldyYXBwZXIsIDApO1xuICAgICAgdGltZWxpbmUuYWRkKHRsVG9wTWVudSwgMCk7XG4gICAgICByZXR1cm4gdGltZWxpbmU7XG4gICAgfVxuICB9XG59XG48L3NjcmlwdD5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyByZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvVG9wTWVudS52dWUiLCI8dGVtcGxhdGU+XG4gIDxhIGhyZWY9XCIjXCIgQGNsaWNrLnByZXZlbnQuc3RvcD1cImdvV3JpdGVcIj48c2xvdD48L3Nsb3Q+PC9hPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgZXhwb3J0IGRlZmF1bHQge1xuICAgIG5hbWU6IFwiV3JpdGVMaW5rXCIsXG5cbiAgICBtZXRob2RzOiB7XG4gICAgICBnb1dyaXRlICgpIHtcbiAgICAgICAgdGhpcy4kcGFyZW50LiRlbWl0KCdnby13cml0ZScsdHJ1ZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZD5cblxuICBhIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxuXG48L3N0eWxlPlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHJlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9Xcml0ZUxpbmsudnVlIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh0cnVlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbmFbZGF0YS12LTIyMzI0ZmQyXSB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIi9Vc2Vycy9wZXRqYS9Qcm9qZWN0cy9zaXRlcy9hZG1pbm9pZC5jb20vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9Xcml0ZUxpbmsudnVlXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUFrQkE7RUFDQSxrQkFBQTtDQUNBXCIsXCJmaWxlXCI6XCJXcml0ZUxpbmsudnVlXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjx0ZW1wbGF0ZT5cXG4gIDxhIGhyZWY9XFxcIiNcXFwiIEBjbGljay5wcmV2ZW50LnN0b3A9XFxcImdvV3JpdGVcXFwiPjxzbG90Pjwvc2xvdD48L2E+XFxuPC90ZW1wbGF0ZT5cXG5cXG48c2NyaXB0PlxcbiAgZXhwb3J0IGRlZmF1bHQge1xcbiAgICBuYW1lOiBcXFwiV3JpdGVMaW5rXFxcIixcXG5cXG4gICAgbWV0aG9kczoge1xcbiAgICAgIGdvV3JpdGUgKCkge1xcbiAgICAgICAgdGhpcy4kcGFyZW50LiRlbWl0KCdnby13cml0ZScsdHJ1ZSk7XFxuICAgICAgfVxcbiAgICB9XFxuICB9XFxuPC9zY3JpcHQ+XFxuXFxuPHN0eWxlIHNjb3BlZD5cXG5cXG4gIGEge1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gIH1cXG5cXG48L3N0eWxlPlxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlcj97XCJ2dWVcIjp0cnVlLFwiaWRcIjpcImRhdGEtdi0yMjMyNGZkMlwiLFwic2NvcGVkXCI6dHJ1ZSxcImhhc0lubGluZUNvbmZpZ1wiOnRydWV9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvV3JpdGVMaW5rLnZ1ZVxuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1widnVlXCI6dHJ1ZSxcImlkXCI6XCJkYXRhLXYtMjIzMjRmZDJcIixcInNjb3BlZFwiOnRydWUsXCJoYXNJbmxpbmVDb25maWdcIjp0cnVlfSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL1dyaXRlTGluay52dWVcbi8vIG1vZHVsZSBjaHVua3MgPSA4IiwiLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHVzZVNvdXJjZU1hcCkge1xuXHR2YXIgbGlzdCA9IFtdO1xuXG5cdC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblx0bGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuXHRcdHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuXHRcdFx0dmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cdFx0XHRpZihpdGVtWzJdKSB7XG5cdFx0XHRcdHJldHVybiBcIkBtZWRpYSBcIiArIGl0ZW1bMl0gKyBcIntcIiArIGNvbnRlbnQgKyBcIn1cIjtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJldHVybiBjb250ZW50O1xuXHRcdFx0fVxuXHRcdH0pLmpvaW4oXCJcIik7XG5cdH07XG5cblx0Ly8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3Rcblx0bGlzdC5pID0gZnVuY3Rpb24obW9kdWxlcywgbWVkaWFRdWVyeSkge1xuXHRcdGlmKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKVxuXHRcdFx0bW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuXHRcdHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpZCA9IHRoaXNbaV1bMF07XG5cdFx0XHRpZih0eXBlb2YgaWQgPT09IFwibnVtYmVyXCIpXG5cdFx0XHRcdGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcblx0XHR9XG5cdFx0Zm9yKGkgPSAwOyBpIDwgbW9kdWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSBtb2R1bGVzW2ldO1xuXHRcdFx0Ly8gc2tpcCBhbHJlYWR5IGltcG9ydGVkIG1vZHVsZVxuXHRcdFx0Ly8gdGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBub3QgMTAwJSBwZXJmZWN0IGZvciB3ZWlyZCBtZWRpYSBxdWVyeSBjb21iaW5hdGlvbnNcblx0XHRcdC8vICB3aGVuIGEgbW9kdWxlIGlzIGltcG9ydGVkIG11bHRpcGxlIHRpbWVzIHdpdGggZGlmZmVyZW50IG1lZGlhIHF1ZXJpZXMuXG5cdFx0XHQvLyAgSSBob3BlIHRoaXMgd2lsbCBuZXZlciBvY2N1ciAoSGV5IHRoaXMgd2F5IHdlIGhhdmUgc21hbGxlciBidW5kbGVzKVxuXHRcdFx0aWYodHlwZW9mIGl0ZW1bMF0gIT09IFwibnVtYmVyXCIgfHwgIWFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcblx0XHRcdFx0aWYobWVkaWFRdWVyeSAmJiAhaXRlbVsyXSkge1xuXHRcdFx0XHRcdGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuXHRcdFx0XHR9IGVsc2UgaWYobWVkaWFRdWVyeSkge1xuXHRcdFx0XHRcdGl0ZW1bMl0gPSBcIihcIiArIGl0ZW1bMl0gKyBcIikgYW5kIChcIiArIG1lZGlhUXVlcnkgKyBcIilcIjtcblx0XHRcdFx0fVxuXHRcdFx0XHRsaXN0LnB1c2goaXRlbSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xuXHRyZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG5cdHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJztcblx0dmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXHRpZiAoIWNzc01hcHBpbmcpIHtcblx0XHRyZXR1cm4gY29udGVudDtcblx0fVxuXG5cdGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcblx0XHR2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcblx0XHR2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuXHRcdFx0cmV0dXJuICcvKiMgc291cmNlVVJMPScgKyBjc3NNYXBwaW5nLnNvdXJjZVJvb3QgKyBzb3VyY2UgKyAnICovJ1xuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG5cdH1cblxuXHRyZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufVxuXG4vLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuXHR2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcblx0dmFyIGRhdGEgPSAnc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsJyArIGJhc2U2NDtcblxuXHRyZXR1cm4gJy8qIyAnICsgZGF0YSArICcgKi8nO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gOCIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG4pe3JldHVybnthbGw6bj1ufHxuZXcgTWFwLG9uOmZ1bmN0aW9uKHQsZSl7dmFyIGk9bi5nZXQodCk7aT9pLnB1c2goZSk6bi5zZXQodCxbZV0pfSxvZmY6ZnVuY3Rpb24odCxlKXt2YXIgaT1uLmdldCh0KTtpJiYoZT9pLnNwbGljZShpLmluZGV4T2YoZSk+Pj4wLDEpOm4uc2V0KHQsW10pKX0sZW1pdDpmdW5jdGlvbih0LGUpe3ZhciBpPW4uZ2V0KHQpO2kmJmkuc2xpY2UoKS5tYXAoZnVuY3Rpb24obil7bihlKX0pLChpPW4uZ2V0KFwiKlwiKSkmJmkuc2xpY2UoKS5tYXAoZnVuY3Rpb24obil7bih0LGUpfSl9fX1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW1pdHQubWpzLm1hcFxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbWl0dC9kaXN0L21pdHQubWpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9taXR0L2Rpc3QvbWl0dC5tanNcbi8vIG1vZHVsZSBjaHVua3MgPSA4IiwiLyogZ2xvYmFscyBfX1ZVRV9TU1JfQ09OVEVYVF9fICovXG5cbi8vIElNUE9SVEFOVDogRG8gTk9UIHVzZSBFUzIwMTUgZmVhdHVyZXMgaW4gdGhpcyBmaWxlLlxuLy8gVGhpcyBtb2R1bGUgaXMgYSBydW50aW1lIHV0aWxpdHkgZm9yIGNsZWFuZXIgY29tcG9uZW50IG1vZHVsZSBvdXRwdXQgYW5kIHdpbGxcbi8vIGJlIGluY2x1ZGVkIGluIHRoZSBmaW5hbCB3ZWJwYWNrIHVzZXIgYnVuZGxlLlxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIG5vcm1hbGl6ZUNvbXBvbmVudCAoXG4gIHJhd1NjcmlwdEV4cG9ydHMsXG4gIGNvbXBpbGVkVGVtcGxhdGUsXG4gIGZ1bmN0aW9uYWxUZW1wbGF0ZSxcbiAgaW5qZWN0U3R5bGVzLFxuICBzY29wZUlkLFxuICBtb2R1bGVJZGVudGlmaWVyIC8qIHNlcnZlciBvbmx5ICovXG4pIHtcbiAgdmFyIGVzTW9kdWxlXG4gIHZhciBzY3JpcHRFeHBvcnRzID0gcmF3U2NyaXB0RXhwb3J0cyA9IHJhd1NjcmlwdEV4cG9ydHMgfHwge31cblxuICAvLyBFUzYgbW9kdWxlcyBpbnRlcm9wXG4gIHZhciB0eXBlID0gdHlwZW9mIHJhd1NjcmlwdEV4cG9ydHMuZGVmYXVsdFxuICBpZiAodHlwZSA9PT0gJ29iamVjdCcgfHwgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGVzTW9kdWxlID0gcmF3U2NyaXB0RXhwb3J0c1xuICAgIHNjcmlwdEV4cG9ydHMgPSByYXdTY3JpcHRFeHBvcnRzLmRlZmF1bHRcbiAgfVxuXG4gIC8vIFZ1ZS5leHRlbmQgY29uc3RydWN0b3IgZXhwb3J0IGludGVyb3BcbiAgdmFyIG9wdGlvbnMgPSB0eXBlb2Ygc2NyaXB0RXhwb3J0cyA9PT0gJ2Z1bmN0aW9uJ1xuICAgID8gc2NyaXB0RXhwb3J0cy5vcHRpb25zXG4gICAgOiBzY3JpcHRFeHBvcnRzXG5cbiAgLy8gcmVuZGVyIGZ1bmN0aW9uc1xuICBpZiAoY29tcGlsZWRUZW1wbGF0ZSkge1xuICAgIG9wdGlvbnMucmVuZGVyID0gY29tcGlsZWRUZW1wbGF0ZS5yZW5kZXJcbiAgICBvcHRpb25zLnN0YXRpY1JlbmRlckZucyA9IGNvbXBpbGVkVGVtcGxhdGUuc3RhdGljUmVuZGVyRm5zXG4gICAgb3B0aW9ucy5fY29tcGlsZWQgPSB0cnVlXG4gIH1cblxuICAvLyBmdW5jdGlvbmFsIHRlbXBsYXRlXG4gIGlmIChmdW5jdGlvbmFsVGVtcGxhdGUpIHtcbiAgICBvcHRpb25zLmZ1bmN0aW9uYWwgPSB0cnVlXG4gIH1cblxuICAvLyBzY29wZWRJZFxuICBpZiAoc2NvcGVJZCkge1xuICAgIG9wdGlvbnMuX3Njb3BlSWQgPSBzY29wZUlkXG4gIH1cblxuICB2YXIgaG9va1xuICBpZiAobW9kdWxlSWRlbnRpZmllcikgeyAvLyBzZXJ2ZXIgYnVpbGRcbiAgICBob29rID0gZnVuY3Rpb24gKGNvbnRleHQpIHtcbiAgICAgIC8vIDIuMyBpbmplY3Rpb25cbiAgICAgIGNvbnRleHQgPVxuICAgICAgICBjb250ZXh0IHx8IC8vIGNhY2hlZCBjYWxsXG4gICAgICAgICh0aGlzLiR2bm9kZSAmJiB0aGlzLiR2bm9kZS5zc3JDb250ZXh0KSB8fCAvLyBzdGF0ZWZ1bFxuICAgICAgICAodGhpcy5wYXJlbnQgJiYgdGhpcy5wYXJlbnQuJHZub2RlICYmIHRoaXMucGFyZW50LiR2bm9kZS5zc3JDb250ZXh0KSAvLyBmdW5jdGlvbmFsXG4gICAgICAvLyAyLjIgd2l0aCBydW5Jbk5ld0NvbnRleHQ6IHRydWVcbiAgICAgIGlmICghY29udGV4dCAmJiB0eXBlb2YgX19WVUVfU1NSX0NPTlRFWFRfXyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29udGV4dCA9IF9fVlVFX1NTUl9DT05URVhUX19cbiAgICAgIH1cbiAgICAgIC8vIGluamVjdCBjb21wb25lbnQgc3R5bGVzXG4gICAgICBpZiAoaW5qZWN0U3R5bGVzKSB7XG4gICAgICAgIGluamVjdFN0eWxlcy5jYWxsKHRoaXMsIGNvbnRleHQpXG4gICAgICB9XG4gICAgICAvLyByZWdpc3RlciBjb21wb25lbnQgbW9kdWxlIGlkZW50aWZpZXIgZm9yIGFzeW5jIGNodW5rIGluZmVycmVuY2VcbiAgICAgIGlmIChjb250ZXh0ICYmIGNvbnRleHQuX3JlZ2lzdGVyZWRDb21wb25lbnRzKSB7XG4gICAgICAgIGNvbnRleHQuX3JlZ2lzdGVyZWRDb21wb25lbnRzLmFkZChtb2R1bGVJZGVudGlmaWVyKVxuICAgICAgfVxuICAgIH1cbiAgICAvLyB1c2VkIGJ5IHNzciBpbiBjYXNlIGNvbXBvbmVudCBpcyBjYWNoZWQgYW5kIGJlZm9yZUNyZWF0ZVxuICAgIC8vIG5ldmVyIGdldHMgY2FsbGVkXG4gICAgb3B0aW9ucy5fc3NyUmVnaXN0ZXIgPSBob29rXG4gIH0gZWxzZSBpZiAoaW5qZWN0U3R5bGVzKSB7XG4gICAgaG9vayA9IGluamVjdFN0eWxlc1xuICB9XG5cbiAgaWYgKGhvb2spIHtcbiAgICB2YXIgZnVuY3Rpb25hbCA9IG9wdGlvbnMuZnVuY3Rpb25hbFxuICAgIHZhciBleGlzdGluZyA9IGZ1bmN0aW9uYWxcbiAgICAgID8gb3B0aW9ucy5yZW5kZXJcbiAgICAgIDogb3B0aW9ucy5iZWZvcmVDcmVhdGVcblxuICAgIGlmICghZnVuY3Rpb25hbCkge1xuICAgICAgLy8gaW5qZWN0IGNvbXBvbmVudCByZWdpc3RyYXRpb24gYXMgYmVmb3JlQ3JlYXRlIGhvb2tcbiAgICAgIG9wdGlvbnMuYmVmb3JlQ3JlYXRlID0gZXhpc3RpbmdcbiAgICAgICAgPyBbXS5jb25jYXQoZXhpc3RpbmcsIGhvb2spXG4gICAgICAgIDogW2hvb2tdXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGZvciB0ZW1wbGF0ZS1vbmx5IGhvdC1yZWxvYWQgYmVjYXVzZSBpbiB0aGF0IGNhc2UgdGhlIHJlbmRlciBmbiBkb2Vzbid0XG4gICAgICAvLyBnbyB0aHJvdWdoIHRoZSBub3JtYWxpemVyXG4gICAgICBvcHRpb25zLl9pbmplY3RTdHlsZXMgPSBob29rXG4gICAgICAvLyByZWdpc3RlciBmb3IgZnVuY3Rpb2FsIGNvbXBvbmVudCBpbiB2dWUgZmlsZVxuICAgICAgb3B0aW9ucy5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXJXaXRoU3R5bGVJbmplY3Rpb24gKGgsIGNvbnRleHQpIHtcbiAgICAgICAgaG9vay5jYWxsKGNvbnRleHQpXG4gICAgICAgIHJldHVybiBleGlzdGluZyhoLCBjb250ZXh0KVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgZXNNb2R1bGU6IGVzTW9kdWxlLFxuICAgIGV4cG9ydHM6IHNjcmlwdEV4cG9ydHMsXG4gICAgb3B0aW9uczogb3B0aW9uc1xuICB9XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplci5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXIuanNcbi8vIG1vZHVsZSBjaHVua3MgPSA4IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImFcIixcbiAgICB7XG4gICAgICBhdHRyczogeyBocmVmOiBcIiNcIiB9LFxuICAgICAgb246IHtcbiAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgICAgcmV0dXJuIF92bS5nb1dyaXRlKCRldmVudClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgW192bS5fdChcImRlZmF1bHRcIildLFxuICAgIDJcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbm1vZHVsZS5leHBvcnRzID0geyByZW5kZXI6IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnMgfVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgcmVxdWlyZShcInZ1ZS1sb2FkZXIvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaVwiKSAgICAgIC5yZXJlbmRlcihcImRhdGEtdi0yMjMyNGZkMlwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtMjIzMjRmZDJcIixcImhhc1Njb3BlZFwiOnRydWUsXCJidWJsZVwiOntcInRyYW5zZm9ybXNcIjp7fX19IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9Xcml0ZUxpbmsudnVlXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleC5qcz97XCJpZFwiOlwiZGF0YS12LTIyMzI0ZmQyXCIsXCJoYXNTY29wZWRcIjp0cnVlLFwiYnVibGVcIjp7XCJ0cmFuc2Zvcm1zXCI6e319fSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvV3JpdGVMaW5rLnZ1ZVxuLy8gbW9kdWxlIGNodW5rcyA9IDgiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMjIzMjRmZDJcXFwiLFxcXCJzY29wZWRcXFwiOnRydWUsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9Xcml0ZUxpbmsudnVlXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikoXCIwZDcxODZjZVwiLCBjb250ZW50LCBmYWxzZSwge30pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMjIzMjRmZDJcXFwiLFxcXCJzY29wZWRcXFwiOnRydWUsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9Xcml0ZUxpbmsudnVlXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTIyMzI0ZmQyXFxcIixcXFwic2NvcGVkXFxcIjp0cnVlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vV3JpdGVMaW5rLnZ1ZVwiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlciEuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlcj97XCJ2dWVcIjp0cnVlLFwiaWRcIjpcImRhdGEtdi0yMjMyNGZkMlwiLFwic2NvcGVkXCI6dHJ1ZSxcImhhc0lubGluZUNvbmZpZ1wiOnRydWV9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvV3JpdGVMaW5rLnZ1ZVxuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9pbmRleC5qcyEuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XCJ2dWVcIjp0cnVlLFwiaWRcIjpcImRhdGEtdi0yMjMyNGZkMlwiLFwic2NvcGVkXCI6dHJ1ZSxcImhhc0lubGluZUNvbmZpZ1wiOnRydWV9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvV3JpdGVMaW5rLnZ1ZVxuLy8gbW9kdWxlIGNodW5rcyA9IDgiLCIvKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4gIE1vZGlmaWVkIGJ5IEV2YW4gWW91IEB5eXg5OTA4MDNcbiovXG5cbnZhciBoYXNEb2N1bWVudCA9IHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCdcblxuaWYgKHR5cGVvZiBERUJVRyAhPT0gJ3VuZGVmaW5lZCcgJiYgREVCVUcpIHtcbiAgaWYgKCFoYXNEb2N1bWVudCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAndnVlLXN0eWxlLWxvYWRlciBjYW5ub3QgYmUgdXNlZCBpbiBhIG5vbi1icm93c2VyIGVudmlyb25tZW50LiAnICtcbiAgICBcIlVzZSB7IHRhcmdldDogJ25vZGUnIH0gaW4geW91ciBXZWJwYWNrIGNvbmZpZyB0byBpbmRpY2F0ZSBhIHNlcnZlci1yZW5kZXJpbmcgZW52aXJvbm1lbnQuXCJcbiAgKSB9XG59XG5cbnZhciBsaXN0VG9TdHlsZXMgPSByZXF1aXJlKCcuL2xpc3RUb1N0eWxlcycpXG5cbi8qXG50eXBlIFN0eWxlT2JqZWN0ID0ge1xuICBpZDogbnVtYmVyO1xuICBwYXJ0czogQXJyYXk8U3R5bGVPYmplY3RQYXJ0PlxufVxuXG50eXBlIFN0eWxlT2JqZWN0UGFydCA9IHtcbiAgY3NzOiBzdHJpbmc7XG4gIG1lZGlhOiBzdHJpbmc7XG4gIHNvdXJjZU1hcDogP3N0cmluZ1xufVxuKi9cblxudmFyIHN0eWxlc0luRG9tID0gey8qXG4gIFtpZDogbnVtYmVyXToge1xuICAgIGlkOiBudW1iZXIsXG4gICAgcmVmczogbnVtYmVyLFxuICAgIHBhcnRzOiBBcnJheTwob2JqPzogU3R5bGVPYmplY3RQYXJ0KSA9PiB2b2lkPlxuICB9XG4qL31cblxudmFyIGhlYWQgPSBoYXNEb2N1bWVudCAmJiAoZG9jdW1lbnQuaGVhZCB8fCBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdKVxudmFyIHNpbmdsZXRvbkVsZW1lbnQgPSBudWxsXG52YXIgc2luZ2xldG9uQ291bnRlciA9IDBcbnZhciBpc1Byb2R1Y3Rpb24gPSBmYWxzZVxudmFyIG5vb3AgPSBmdW5jdGlvbiAoKSB7fVxudmFyIG9wdGlvbnMgPSBudWxsXG52YXIgc3NySWRLZXkgPSAnZGF0YS12dWUtc3NyLWlkJ1xuXG4vLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbi8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcbnZhciBpc09sZElFID0gdHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCcgJiYgL21zaWUgWzYtOV1cXGIvLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChwYXJlbnRJZCwgbGlzdCwgX2lzUHJvZHVjdGlvbiwgX29wdGlvbnMpIHtcbiAgaXNQcm9kdWN0aW9uID0gX2lzUHJvZHVjdGlvblxuXG4gIG9wdGlvbnMgPSBfb3B0aW9ucyB8fCB7fVxuXG4gIHZhciBzdHlsZXMgPSBsaXN0VG9TdHlsZXMocGFyZW50SWQsIGxpc3QpXG4gIGFkZFN0eWxlc1RvRG9tKHN0eWxlcylcblxuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlIChuZXdMaXN0KSB7XG4gICAgdmFyIG1heVJlbW92ZSA9IFtdXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpdGVtID0gc3R5bGVzW2ldXG4gICAgICB2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXVxuICAgICAgZG9tU3R5bGUucmVmcy0tXG4gICAgICBtYXlSZW1vdmUucHVzaChkb21TdHlsZSlcbiAgICB9XG4gICAgaWYgKG5ld0xpc3QpIHtcbiAgICAgIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhwYXJlbnRJZCwgbmV3TGlzdClcbiAgICAgIGFkZFN0eWxlc1RvRG9tKHN0eWxlcylcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzID0gW11cbiAgICB9XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBtYXlSZW1vdmUubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBkb21TdHlsZSA9IG1heVJlbW92ZVtpXVxuICAgICAgaWYgKGRvbVN0eWxlLnJlZnMgPT09IDApIHtcbiAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICAgIGRvbVN0eWxlLnBhcnRzW2pdKClcbiAgICAgICAgfVxuICAgICAgICBkZWxldGUgc3R5bGVzSW5Eb21bZG9tU3R5bGUuaWRdXG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlc1RvRG9tIChzdHlsZXMgLyogQXJyYXk8U3R5bGVPYmplY3Q+ICovKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBzdHlsZXNbaV1cbiAgICB2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXVxuICAgIGlmIChkb21TdHlsZSkge1xuICAgICAgZG9tU3R5bGUucmVmcysrXG4gICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGRvbVN0eWxlLnBhcnRzW2pdKGl0ZW0ucGFydHNbal0pXG4gICAgICB9XG4gICAgICBmb3IgKDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgZG9tU3R5bGUucGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdKSlcbiAgICAgIH1cbiAgICAgIGlmIChkb21TdHlsZS5wYXJ0cy5sZW5ndGggPiBpdGVtLnBhcnRzLmxlbmd0aCkge1xuICAgICAgICBkb21TdHlsZS5wYXJ0cy5sZW5ndGggPSBpdGVtLnBhcnRzLmxlbmd0aFxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgcGFydHMgPSBbXVxuICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIHBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSkpXG4gICAgICB9XG4gICAgICBzdHlsZXNJbkRvbVtpdGVtLmlkXSA9IHsgaWQ6IGl0ZW0uaWQsIHJlZnM6IDEsIHBhcnRzOiBwYXJ0cyB9XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVN0eWxlRWxlbWVudCAoKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpXG4gIHN0eWxlRWxlbWVudC50eXBlID0gJ3RleHQvY3NzJ1xuICBoZWFkLmFwcGVuZENoaWxkKHN0eWxlRWxlbWVudClcbiAgcmV0dXJuIHN0eWxlRWxlbWVudFxufVxuXG5mdW5jdGlvbiBhZGRTdHlsZSAob2JqIC8qIFN0eWxlT2JqZWN0UGFydCAqLykge1xuICB2YXIgdXBkYXRlLCByZW1vdmVcbiAgdmFyIHN0eWxlRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3N0eWxlWycgKyBzc3JJZEtleSArICd+PVwiJyArIG9iai5pZCArICdcIl0nKVxuXG4gIGlmIChzdHlsZUVsZW1lbnQpIHtcbiAgICBpZiAoaXNQcm9kdWN0aW9uKSB7XG4gICAgICAvLyBoYXMgU1NSIHN0eWxlcyBhbmQgaW4gcHJvZHVjdGlvbiBtb2RlLlxuICAgICAgLy8gc2ltcGx5IGRvIG5vdGhpbmcuXG4gICAgICByZXR1cm4gbm9vcFxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBoYXMgU1NSIHN0eWxlcyBidXQgaW4gZGV2IG1vZGUuXG4gICAgICAvLyBmb3Igc29tZSByZWFzb24gQ2hyb21lIGNhbid0IGhhbmRsZSBzb3VyY2UgbWFwIGluIHNlcnZlci1yZW5kZXJlZFxuICAgICAgLy8gc3R5bGUgdGFncyAtIHNvdXJjZSBtYXBzIGluIDxzdHlsZT4gb25seSB3b3JrcyBpZiB0aGUgc3R5bGUgdGFnIGlzXG4gICAgICAvLyBjcmVhdGVkIGFuZCBpbnNlcnRlZCBkeW5hbWljYWxseS4gU28gd2UgcmVtb3ZlIHRoZSBzZXJ2ZXIgcmVuZGVyZWRcbiAgICAgIC8vIHN0eWxlcyBhbmQgaW5qZWN0IG5ldyBvbmVzLlxuICAgICAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KVxuICAgIH1cbiAgfVxuXG4gIGlmIChpc09sZElFKSB7XG4gICAgLy8gdXNlIHNpbmdsZXRvbiBtb2RlIGZvciBJRTkuXG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKytcbiAgICBzdHlsZUVsZW1lbnQgPSBzaW5nbGV0b25FbGVtZW50IHx8IChzaW5nbGV0b25FbGVtZW50ID0gY3JlYXRlU3R5bGVFbGVtZW50KCkpXG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCwgc3R5bGVJbmRleCwgZmFsc2UpXG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCwgc3R5bGVJbmRleCwgdHJ1ZSlcbiAgfSBlbHNlIHtcbiAgICAvLyB1c2UgbXVsdGktc3R5bGUtdGFnIG1vZGUgaW4gYWxsIG90aGVyIGNhc2VzXG4gICAgc3R5bGVFbGVtZW50ID0gY3JlYXRlU3R5bGVFbGVtZW50KClcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50KVxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudClcbiAgICB9XG4gIH1cblxuICB1cGRhdGUob2JqKVxuXG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZSAobmV3T2JqIC8qIFN0eWxlT2JqZWN0UGFydCAqLykge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmXG4gICAgICAgICAgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiZcbiAgICAgICAgICBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iailcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKClcbiAgICB9XG4gIH1cbn1cblxudmFyIHJlcGxhY2VUZXh0ID0gKGZ1bmN0aW9uICgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdXG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnRcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKVxuICB9XG59KSgpXG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcgKHN0eWxlRWxlbWVudCwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5jc3NcblxuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcylcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcylcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlRWxlbWVudC5jaGlsZE5vZGVzXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZUVsZW1lbnQuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKVxuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoY3NzTm9kZSlcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyAoc3R5bGVFbGVtZW50LCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3NcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwXG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSlcbiAgfVxuICBpZiAob3B0aW9ucy5zc3JJZCkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoc3NySWRLZXksIG9iai5pZClcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXApIHtcbiAgICAvLyBodHRwczovL2RldmVsb3Blci5jaHJvbWUuY29tL2RldnRvb2xzL2RvY3MvamF2YXNjcmlwdC1kZWJ1Z2dpbmdcbiAgICAvLyB0aGlzIG1ha2VzIHNvdXJjZSBtYXBzIGluc2lkZSBzdHlsZSB0YWdzIHdvcmsgcHJvcGVybHkgaW4gQ2hyb21lXG4gICAgY3NzICs9ICdcXG4vKiMgc291cmNlVVJMPScgKyBzb3VyY2VNYXAuc291cmNlc1swXSArICcgKi8nXG4gICAgLy8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjY2MDM4NzVcbiAgICBjc3MgKz0gJ1xcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsJyArIGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSkgKyAnICovJ1xuICB9XG5cbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzc1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKVxuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSlcbiAgfVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcbi8vIG1vZHVsZSBjaHVua3MgPSA4IiwiLyoqXG4gKiBUcmFuc2xhdGVzIHRoZSBsaXN0IGZvcm1hdCBwcm9kdWNlZCBieSBjc3MtbG9hZGVyIGludG8gc29tZXRoaW5nXG4gKiBlYXNpZXIgdG8gbWFuaXB1bGF0ZS5cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBsaXN0VG9TdHlsZXMgKHBhcmVudElkLCBsaXN0KSB7XG4gIHZhciBzdHlsZXMgPSBbXVxuICB2YXIgbmV3U3R5bGVzID0ge31cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldXG4gICAgdmFyIGlkID0gaXRlbVswXVxuICAgIHZhciBjc3MgPSBpdGVtWzFdXG4gICAgdmFyIG1lZGlhID0gaXRlbVsyXVxuICAgIHZhciBzb3VyY2VNYXAgPSBpdGVtWzNdXG4gICAgdmFyIHBhcnQgPSB7XG4gICAgICBpZDogcGFyZW50SWQgKyAnOicgKyBpLFxuICAgICAgY3NzOiBjc3MsXG4gICAgICBtZWRpYTogbWVkaWEsXG4gICAgICBzb3VyY2VNYXA6IHNvdXJjZU1hcFxuICAgIH1cbiAgICBpZiAoIW5ld1N0eWxlc1tpZF0pIHtcbiAgICAgIHN0eWxlcy5wdXNoKG5ld1N0eWxlc1tpZF0gPSB7IGlkOiBpZCwgcGFydHM6IFtwYXJ0XSB9KVxuICAgIH0gZWxzZSB7XG4gICAgICBuZXdTdHlsZXNbaWRdLnBhcnRzLnB1c2gocGFydClcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHN0eWxlc1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvbGlzdFRvU3R5bGVzLmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9saXN0VG9TdHlsZXMuanNcbi8vIG1vZHVsZSBjaHVua3MgPSA4IiwiXG4vKipcbiAqIEZpcnN0IHdlIHdpbGwgbG9hZCBhbGwgb2YgdGhpcyBwcm9qZWN0J3MgSmF2YVNjcmlwdCBkZXBlbmRlbmNpZXMgd2hpY2hcbiAqIGluY2x1ZGVzIFZ1ZSBhbmQgb3RoZXIgbGlicmFyaWVzLiBJdCBpcyBhIGdyZWF0IHN0YXJ0aW5nIHBvaW50IHdoZW5cbiAqIGJ1aWxkaW5nIHJvYnVzdCwgcG93ZXJmdWwgd2ViIGFwcGxpY2F0aW9ucyB1c2luZyBWdWUgYW5kIExhcmF2ZWwuXG4gKi9cblxucmVxdWlyZSgnLi9ib290c3RyYXAnKTtcblxuaW1wb3J0IFZ1ZSBmcm9tIFwidnVlXCI7XG5cbi8qKlxuICogTmV4dCwgd2Ugd2lsbCBjcmVhdGUgYSBmcmVzaCBWdWUgYXBwbGljYXRpb24gaW5zdGFuY2UgYW5kIGF0dGFjaCBpdCB0b1xuICogdGhlIHBhZ2UuIFRoZW4sIHlvdSBtYXkgYmVnaW4gYWRkaW5nIGNvbXBvbmVudHMgdG8gdGhpcyBhcHBsaWNhdGlvblxuICogb3IgY3VzdG9taXplIHRoZSBKYXZhU2NyaXB0IHNjYWZmb2xkaW5nIHRvIGZpdCB5b3VyIHVuaXF1ZSBuZWVkcy5cbiAqL1xuXG5pbXBvcnQgVG9wTWVudSBmcm9tICcuL2NvbXBvbmVudHMvVG9wTWVudSdcbmltcG9ydCBGZWVkYmFja0Zvcm0gZnJvbSAnLi9jb21wb25lbnRzL0ZlZWRiYWNrRm9ybSdcbmltcG9ydCBXcml0ZUxpbmsgZnJvbSAnLi9jb21wb25lbnRzL1dyaXRlTGluaydcbmltcG9ydCBtaXR0IGZyb20gXCJtaXR0XCI7XG5cblZ1ZS5wcm90b3R5cGUuJGJ1cyA9IG1pdHQoKTtcblxuVnVlLmNvbXBvbmVudChcImNsb3Vkc1wiLCBmdW5jdGlvbiAocmVzb2x2ZSkge1xuICByZXF1aXJlKFsnLi9jb21wb25lbnRzL3BhZ2VzL2luZGV4L0Nsb3VkcyddLCByZXNvbHZlKVxufSk7XG5cblZ1ZS5jb21wb25lbnQoXCJjdWJlXCIsIGZ1bmN0aW9uIChyZXNvbHZlKSB7XG4gIHJlcXVpcmUoWycuL2NvbXBvbmVudHMvcGFnZXMvaW5kZXgvQ3ViZSddLCByZXNvbHZlKVxufSk7XG5cblZ1ZS5jb21wb25lbnQoXCJjbG9ja1wiLCBmdW5jdGlvbiAocmVzb2x2ZSkge1xuICByZXF1aXJlKFsnLi9jb21wb25lbnRzL3BhZ2VzL3ByaWNlL0Nsb2NrLnZ1ZSddLCByZXNvbHZlKVxufSk7XG5cblZ1ZS5jb21wb25lbnQoXCJ0b29scy1ibG9ja1wiLCBmdW5jdGlvbiAocmVzb2x2ZSkge1xuICByZXF1aXJlKFsnLi9jb21wb25lbnRzL3BhZ2VzL3Rvb2xzL1Rvb2xzQmxvY2sudnVlJ10sIHJlc29sdmUpXG59KTtcblxuVnVlLmNvbXBvbmVudChcInpvb21cIiwgZnVuY3Rpb24gKHJlc29sdmUpIHtcbiAgcmVxdWlyZShbJy4vY29tcG9uZW50cy9wYWdlcy9wb3J0Zm9saW8vWm9vbS52dWUnXSwgcmVzb2x2ZSlcbn0pO1xuXG5WdWUuY29tcG9uZW50KFwidmlkZW8tYmFja2dyb3VuZFwiLCBmdW5jdGlvbiAocmVzb2x2ZSkge1xuICByZXF1aXJlKFsnLi9jb21wb25lbnRzL3BhZ2VzL3BvcnRmb2xpby9WaWRlb0JhY2tncm91bmQudnVlJ10sIHJlc29sdmUpXG59KTtcblxuVnVlLmNvbXBvbmVudChcImhhbGYtcm90YXRlXCIsIGZ1bmN0aW9uIChyZXNvbHZlKSB7XG4gIHJlcXVpcmUoWycuL2NvbXBvbmVudHMvcGFnZXMvd29ya2Zsb3cvSGFsZlJvdGF0ZS52dWUnXSwgcmVzb2x2ZSlcbn0pO1xuXG53aW5kb3cuVnVlID0gVnVlO1xuXG5jb25zdCBhcHAgPSBuZXcgVnVlKHtcblxuICBlbDogJyNhcHAnLFxuXG4gIGNvbXBvbmVudHM6IHtcbiAgICBUb3BNZW51LCBGZWVkYmFja0Zvcm0sIFdyaXRlTGlua1xuICB9LFxuXG4gIGRhdGEgKCkge1xuICAgIHJldHVybiB7XG4gICAgICB3cml0ZTogZmFsc2UsXG4gICAgfVxuICB9LFxuXG59KTtcblxuYXBwXG4gIC4kb24oJ2dvLXdyaXRlJywgKCkgPT4ge1xuICAgIGxldCBzY3JpcHRFbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO1xuICAgIHNjcmlwdEVsZS5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgYGh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vcmVjYXB0Y2hhL2FwaS5qcz9yZW5kZXI9JHt3aW5kb3cucmNLZXl9YCk7XG4gICAgc2NyaXB0RWxlLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsICgpID0+IHtcbiAgICAgICAgLy8gaGVyZSBtdXN0IGdldCByZWNhcHRjaGEgY29kZVxuICAgICAgICBncmVjYXB0Y2hhLnJlYWR5KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgZ3JlY2FwdGNoYS5leGVjdXRlKHdpbmRvdy5yY0tleSwge2FjdGlvbjogJ3N1Ym1pdCd9KS50aGVuKCh0b2tlbikgPT4ge1xuICAgICAgICAgICAgICAgIC8vIHNlbmQgbWl0dCBldmVudFxuICAgICAgICAgICAgICAgIFZ1ZS5wcm90b3R5cGUuJGJ1cy5lbWl0KFwicmMtbG9hZGVkXCIsIHRva2VuKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9KTtcbiAgICBzY3JpcHRFbGUuYWRkRXZlbnRMaXN0ZW5lcihcImVycm9yXCIsIChldikgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkVycm9yIG9uIGxvYWRpbmcgZmlsZVwiLCBldik7XG4gICAgfSk7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzY3JpcHRFbGUpO1xuICAgIGFwcC53cml0ZSA9IHRydWU7XG4gICAgJCgnI3N1cGVyLW1vZGFsJykubW9kYWwoe1xuICAgICAgdHJhbnNpdGlvbjogJ2hvcml6b250YWwgZmxpcCcsXG4gICAgICBvbkhpZGU6IGZ1bmN0aW9uKCl7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIGFwcC53cml0ZSA9IGZhbHNlO1xuICAgICAgICB9LCAzMzMpO1xuICAgICAgfSxcbiAgICB9KS5tb2RhbCgnc2hvdycpO1xuICB9KVxuICAuJG9uKCdzdG9wLXdyaXRlJywgKCkgPT4ge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgYXBwLndyaXRlID0gZmFsc2U7XG4gICAgfSwgMzMzKTtcbiAgfSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2FwcC5qcyIsIlxud2luZG93Ll8gPSByZXF1aXJlKCdsb2Rhc2gnKTtcblxuLyoqXG4gKiBXZSdsbCBsb2FkIGpRdWVyeSBhbmQgdGhlIEJvb3RzdHJhcCBqUXVlcnkgcGx1Z2luIHdoaWNoIHByb3ZpZGVzIHN1cHBvcnRcbiAqIGZvciBKYXZhU2NyaXB0IGJhc2VkIEJvb3RzdHJhcCBmZWF0dXJlcyBzdWNoIGFzIG1vZGFscyBhbmQgdGFicy4gVGhpc1xuICogY29kZSBtYXkgYmUgbW9kaWZpZWQgdG8gZml0IHRoZSBzcGVjaWZpYyBuZWVkcyBvZiB5b3VyIGFwcGxpY2F0aW9uLlxuICovXG5cbnRyeSB7XG4gICAgd2luZG93LiQgPSB3aW5kb3cualF1ZXJ5ID0gcmVxdWlyZSgnanF1ZXJ5Jyk7XG5cbiAgICAvLyByZXF1aXJlKCdib290c3RyYXAtc2FzcycpO1xufSBjYXRjaCAoZSkge31cblxuLyoqXG4gKiBXZSdsbCBsb2FkIHRoZSBheGlvcyBIVFRQIGxpYnJhcnkgd2hpY2ggYWxsb3dzIHVzIHRvIGVhc2lseSBpc3N1ZSByZXF1ZXN0c1xuICogdG8gb3VyIExhcmF2ZWwgYmFjay1lbmQuIFRoaXMgbGlicmFyeSBhdXRvbWF0aWNhbGx5IGhhbmRsZXMgc2VuZGluZyB0aGVcbiAqIENTUkYgdG9rZW4gYXMgYSBoZWFkZXIgYmFzZWQgb24gdGhlIHZhbHVlIG9mIHRoZSBcIlhTUkZcIiB0b2tlbiBjb29raWUuXG4gKi9cblxud2luZG93LmF4aW9zID0gcmVxdWlyZSgnYXhpb3MnKTtcblxud2luZG93LmF4aW9zLmRlZmF1bHRzLmhlYWRlcnMuY29tbW9uWydYLVJlcXVlc3RlZC1XaXRoJ10gPSAnWE1MSHR0cFJlcXVlc3QnO1xuXG4vKipcbiAqIE5leHQgd2Ugd2lsbCByZWdpc3RlciB0aGUgQ1NSRiBUb2tlbiBhcyBhIGNvbW1vbiBoZWFkZXIgd2l0aCBBeGlvcyBzbyB0aGF0XG4gKiBhbGwgb3V0Z29pbmcgSFRUUCByZXF1ZXN0cyBhdXRvbWF0aWNhbGx5IGhhdmUgaXQgYXR0YWNoZWQuIFRoaXMgaXMganVzdFxuICogYSBzaW1wbGUgY29udmVuaWVuY2Ugc28gd2UgZG9uJ3QgaGF2ZSB0byBhdHRhY2ggZXZlcnkgdG9rZW4gbWFudWFsbHkuXG4gKi9cblxubGV0IHRva2VuID0gZG9jdW1lbnQuaGVhZC5xdWVyeVNlbGVjdG9yKCdtZXRhW25hbWU9XCJjc3JmLXRva2VuXCJdJyk7XG5cbmlmICh0b2tlbikge1xuICAgIHdpbmRvdy5heGlvcy5kZWZhdWx0cy5oZWFkZXJzLmNvbW1vblsnWC1DU1JGLVRPS0VOJ10gPSB0b2tlbi5jb250ZW50O1xufSBlbHNlIHtcbiAgICBjb25zb2xlLmVycm9yKCdDU1JGIHRva2VuIG5vdCBmb3VuZDogaHR0cHM6Ly9sYXJhdmVsLmNvbS9kb2NzL2NzcmYjY3NyZi14LWNzcmYtdG9rZW4nKTtcbn1cblxuLyoqXG4gKiBFY2hvIGV4cG9zZXMgYW4gZXhwcmVzc2l2ZSBBUEkgZm9yIHN1YnNjcmliaW5nIHRvIGNoYW5uZWxzIGFuZCBsaXN0ZW5pbmdcbiAqIGZvciBldmVudHMgdGhhdCBhcmUgYnJvYWRjYXN0IGJ5IExhcmF2ZWwuIEVjaG8gYW5kIGV2ZW50IGJyb2FkY2FzdGluZ1xuICogYWxsb3dzIHlvdXIgdGVhbSB0byBlYXNpbHkgYnVpbGQgcm9idXN0IHJlYWwtdGltZSB3ZWIgYXBwbGljYXRpb25zLlxuICovXG5cbi8vIGltcG9ydCBFY2hvIGZyb20gJ2xhcmF2ZWwtZWNobydcblxuLy8gd2luZG93LlB1c2hlciA9IHJlcXVpcmUoJ3B1c2hlci1qcycpO1xuXG4vLyB3aW5kb3cuRWNobyA9IG5ldyBFY2hvKHtcbi8vICAgICBicm9hZGNhc3RlcjogJ3B1c2hlcicsXG4vLyAgICAga2V5OiAneW91ci1wdXNoZXIta2V5J1xuLy8gfSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Jvb3RzdHJhcC5qcyIsInZhciBkaXNwb3NlZCA9IGZhbHNlXG52YXIgbm9ybWFsaXplQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIilcbi8qIHNjcmlwdCAqL1xudmFyIF9fdnVlX3NjcmlwdF9fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVudlxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZSxcXFwidGFyZ2V0c1xcXCI6e1xcXCJicm93c2Vyc1xcXCI6W1xcXCI+IDIlXFxcIl0sXFxcInVnbGlmeVxcXCI6dHJ1ZX19XV0sXFxcInBsdWdpbnNcXFwiOltcXFwidHJhbnNmb3JtLW9iamVjdC1yZXN0LXNwcmVhZFxcXCIsW1xcXCJ0cmFuc2Zvcm0tcnVudGltZVxcXCIse1xcXCJwb2x5ZmlsbFxcXCI6ZmFsc2UsXFxcImhlbHBlcnNcXFwiOmZhbHNlfV1dfSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL0ZlZWRiYWNrRm9ybS52dWVcIilcbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfdGVtcGxhdGVfXyA9IG51bGxcbi8qIHRlbXBsYXRlIGZ1bmN0aW9uYWwgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18gPSBmYWxzZVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBudWxsXG4vKiBzY29wZUlkICovXG52YXIgX192dWVfc2NvcGVJZF9fID0gbnVsbFxuLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG52YXIgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfXyA9IG51bGxcbnZhciBDb21wb25lbnQgPSBub3JtYWxpemVDb21wb25lbnQoXG4gIF9fdnVlX3NjcmlwdF9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18sXG4gIF9fdnVlX3N0eWxlc19fLFxuICBfX3Z1ZV9zY29wZUlkX18sXG4gIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX19cbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL0ZlZWRiYWNrRm9ybS52dWVcIlxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWxvYWRlci9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtZTFkZGQxYzBcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi1lMWRkZDFjMFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBkaXNwb3NlZCA9IHRydWVcbiAgfSlcbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL0ZlZWRiYWNrRm9ybS52dWVcbi8vIG1vZHVsZSBpZCA9IC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL0ZlZWRiYWNrRm9ybS52dWVcbi8vIG1vZHVsZSBjaHVua3MgPSA4IiwidmFyIGRpc3Bvc2VkID0gZmFsc2VcbnZhciBub3JtYWxpemVDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKVxuLyogc2NyaXB0ICovXG52YXIgX192dWVfc2NyaXB0X18gPSByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZW52XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlLFxcXCJ0YXJnZXRzXFxcIjp7XFxcImJyb3dzZXJzXFxcIjpbXFxcIj4gMiVcXFwiXSxcXFwidWdsaWZ5XFxcIjp0cnVlfX1dXSxcXFwicGx1Z2luc1xcXCI6W1xcXCJ0cmFuc2Zvcm0tb2JqZWN0LXJlc3Qtc3ByZWFkXFxcIixbXFxcInRyYW5zZm9ybS1ydW50aW1lXFxcIix7XFxcInBvbHlmaWxsXFxcIjpmYWxzZSxcXFwiaGVscGVyc1xcXCI6ZmFsc2V9XV19IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vVG9wTWVudS52dWVcIilcbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfdGVtcGxhdGVfXyA9IG51bGxcbi8qIHRlbXBsYXRlIGZ1bmN0aW9uYWwgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18gPSBmYWxzZVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBudWxsXG4vKiBzY29wZUlkICovXG52YXIgX192dWVfc2NvcGVJZF9fID0gbnVsbFxuLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG52YXIgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfXyA9IG51bGxcbnZhciBDb21wb25lbnQgPSBub3JtYWxpemVDb21wb25lbnQoXG4gIF9fdnVlX3NjcmlwdF9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18sXG4gIF9fdnVlX3N0eWxlc19fLFxuICBfX3Z1ZV9zY29wZUlkX18sXG4gIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX19cbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL1RvcE1lbnUudnVlXCJcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1sb2FkZXIvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTYyOGQ2YTZkXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtNjI4ZDZhNmRcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgZGlzcG9zZWQgPSB0cnVlXG4gIH0pXG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9Ub3BNZW51LnZ1ZVxuLy8gbW9kdWxlIGlkID0gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvVG9wTWVudS52dWVcbi8vIG1vZHVsZSBjaHVua3MgPSA4IiwidmFyIGRpc3Bvc2VkID0gZmFsc2VcbmZ1bmN0aW9uIGluamVjdFN0eWxlIChzc3JDb250ZXh0KSB7XG4gIGlmIChkaXNwb3NlZCkgcmV0dXJuXG4gIHJlcXVpcmUoXCIhIXZ1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4P3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi0yMjMyNGZkMlxcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL1dyaXRlTGluay52dWVcIilcbn1cbnZhciBub3JtYWxpemVDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKVxuLyogc2NyaXB0ICovXG52YXIgX192dWVfc2NyaXB0X18gPSByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZW52XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlLFxcXCJ0YXJnZXRzXFxcIjp7XFxcImJyb3dzZXJzXFxcIjpbXFxcIj4gMiVcXFwiXSxcXFwidWdsaWZ5XFxcIjp0cnVlfX1dXSxcXFwicGx1Z2luc1xcXCI6W1xcXCJ0cmFuc2Zvcm0tb2JqZWN0LXJlc3Qtc3ByZWFkXFxcIixbXFxcInRyYW5zZm9ybS1ydW50aW1lXFxcIix7XFxcInBvbHlmaWxsXFxcIjpmYWxzZSxcXFwiaGVscGVyc1xcXCI6ZmFsc2V9XV19IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vV3JpdGVMaW5rLnZ1ZVwiKVxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMjIzMjRmZDJcXFwiLFxcXCJoYXNTY29wZWRcXFwiOnRydWUsXFxcImJ1YmxlXFxcIjp7XFxcInRyYW5zZm9ybXNcXFwiOnt9fX0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL1dyaXRlTGluay52dWVcIilcbi8qIHRlbXBsYXRlIGZ1bmN0aW9uYWwgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18gPSBmYWxzZVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBpbmplY3RTdHlsZVxuLyogc2NvcGVJZCAqL1xudmFyIF9fdnVlX3Njb3BlSWRfXyA9IFwiZGF0YS12LTIyMzI0ZmQyXCJcbi8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xudmFyIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSBudWxsXG52YXIgQ29tcG9uZW50ID0gbm9ybWFsaXplQ29tcG9uZW50KFxuICBfX3Z1ZV9zY3JpcHRfXyxcbiAgX192dWVfdGVtcGxhdGVfXyxcbiAgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fLFxuICBfX3Z1ZV9zdHlsZXNfXyxcbiAgX192dWVfc2NvcGVJZF9fLFxuICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9Xcml0ZUxpbmsudnVlXCJcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1sb2FkZXIvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTIyMzI0ZmQyXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtMjIzMjRmZDJcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgZGlzcG9zZWQgPSB0cnVlXG4gIH0pXG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9Xcml0ZUxpbmsudnVlXG4vLyBtb2R1bGUgaWQgPSAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9Xcml0ZUxpbmsudnVlXG4vLyBtb2R1bGUgY2h1bmtzID0gOCJdLCJzb3VyY2VSb290IjoiIn0=