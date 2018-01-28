// { "framework": "Vue"} 

/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
//
//
//
//
//
//

exports.default = {
    name: 'Icon',
    props: {
        type: {
            type: String,
            required: true
        },
        onClick: {
            type: Function,
            default: function _default() {}
        },
        className: {
            type: String,
            default: ''
        }
    },
    computed: {
        cls: function cls() {
            var typeClass = 'ej-icon--' + this.type;

            return ['ej-icon', typeClass, 'ej-icon--md', this.className];
        }
    }
};

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    class: _vm.cls
  })
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 2 */
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {/* globals __webpack_amd_options__ */
module.exports = __webpack_amd_options__;

/* WEBPACK VAR INJECTION */}.call(exports, {}))

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = {
  "@FONT-FACE": [
    {
      "fontFamily": "iconfont",
      "src": "url(\"data:application/x-font-woff;charset=utf-8;base64,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\") format(\"woff\"), url(\"../styles/enjoy-ui/iconfont/iconfont.ttf?t=1510315469634\") format(\"truetype\")"
    }
  ],
  "iconfont": {
    "fontFamily": "\"iconfont\" !important",
    "fontStyle": "normal",
    "WebkitFontSmoothing": "antialiased",
    "MozOsxFontSmoothing": "grayscale"
  },
  "icon-phone": {
    "content:before": "\"\\e604\"",
    "color:before": "#839CFF"
  },
  "ej-root": {
    "height": 100
  },
  "ej-page": {
    "height": 100,
    "boxSizing": "border-box",
    "color": "#333333",
    "overflowY": "auto"
  },
  "ej-page--has-navbar": {
    "paddingTop": "45"
  },
  "ej-page--has-routerbar": {
    "paddingBottom": "50"
  },
  "ej-page__content-title": {
    "paddingTop": "8",
    "paddingRight": 0,
    "paddingBottom": "18",
    "paddingLeft": 0,
    "color": "#000000",
    "fontSize": "30"
  },
  "ej-button--primary": {
    "MozUserSelect": "-moz-none",
    "KhtmlUserSelect": "none",
    "WebkitUserSelect": "none",
    "MsUserSelect": "none",
    "userSelect": "none",
    "display": "flex",
    "justifyContent": "center",
    "alignItems": "center",
    "textAlign": "center",
    "height": "40",
    "color": "#000000",
    "borderRadius": "4",
    "cursor": "pointer",
    "marginTop": 0,
    "marginBottom": "20",
    "width": 100,
    "background": "linear-gradient(45deg, #839CFF 0%, #839CFF 60%, #B9CBFF 100%)",
    "WebkitTapHighlightColor": "rgba(0, 0, 0, 0)",
    "boxShadow": "0 1px 10px 0 rgba(0, 0, 0, 0.1)",
    "background:active": "linear-gradient(45deg, #6988ff 0%, #6988ff 60%, #a0b8ff 100%)"
  },
  "ej-button--plain": {
    "MozUserSelect": "-moz-none",
    "KhtmlUserSelect": "none",
    "WebkitUserSelect": "none",
    "MsUserSelect": "none",
    "userSelect": "none",
    "display": "flex",
    "justifyContent": "center",
    "alignItems": "center",
    "textAlign": "center",
    "height": "40",
    "color": "#6988ff",
    "borderRadius": "4",
    "cursor": "pointer",
    "backgroundColor": "#ffffff"
  },
  "ej-form": {
    "width": 100
  },
  "ej-form__row": {
    "position": "relative",
    "textAlign": "left",
    "content:after": "\"\"",
    "position:after": "absolute",
    "backgroundColor:after": "#dddddd",
    "display:after": "block",
    "zIndex:after": 1,
    "bottom:after": 0,
    "left:after": 0,
    "width:after": 100,
    "height:after": "1",
    "transformOrigin:after": "50% 100%",
    "transform:after": "scaleY(0.5)"
  },
  "ej-form__row--password": {
    "position": "relative"
  },
  "ej-form__label": {
    "display": "block",
    "width": 100,
    "textAlign": "left",
    "paddingTop": "25",
    "paddingRight": 0,
    "paddingBottom": "25",
    "paddingLeft": 0
  },
  "ej-form__input": {
    "display": "block",
    "width": 100,
    "textAlign": "left",
    "fontSize": "17",
    "color": "#000000"
  },
  "ej-form__label-name": {
    "marginBottom": "11",
    "display": "block",
    "fontSize": "18",
    "fontWeight": "500",
    "color": "#000000"
  },
  "ej-form__input-helper": {
    "color": "#999999",
    "fontSize": "11"
  },
  "ej-form__error": {
    "fontSize": "12",
    "color": "#f4333c"
  },
  "ej-form__input-half": {
    "display": "inline-block",
    "width": 50
  },
  "ej-form__input-wrap": {
    "display": "flex",
    "alignItems": "center"
  },
  "ej-form__input-unit": {
    "color": "#666666"
  },
  "ej-form__footer": {
    "paddingTop": "45",
    "paddingBottom": "45"
  },
  "ej-form__checkbox": {
    "position": "relative"
  },
  "ej-form__checkbox-input": {
    "display": "none"
  },
  "ej-form__checkbox-text": {
    "paddingRight": "30",
    "display": "inline-block",
    "verticalAlign": "middle",
    "fontSize": "18",
    "fontWeight": "500",
    "color": "#000000",
    "height": "28",
    "lineHeight": "28"
  },
  "ej-form__checkbox-track": {
    "position": "absolute",
    "top": "25",
    "right": 0,
    "verticalAlign": "middle",
    "background": "#666",
    "borderRadius": "1000",
    "transitionProperty": "backgroundColor",
    "transitionDuration": 300,
    "width": "50",
    "marginBottom": "0",
    "height": "28",
    "boxShadow": "0 1px 5px 0 rgba(38, 44, 65, 0.4)",
    "content:after": "''",
    "position:after": "relative",
    "display:after": "block",
    "backgroundColor:after": "#ffffff",
    "boxShadow:after": "0 1px 3px 0 rgba(38, 44, 65, 0.4)",
    "borderRadius:after": "1000",
    "width:after": "27",
    "height:after": "27",
    "left:after": 0,
    "top:after": 0,
    "transitionProperty:after": "transform",
    "transitionDuration:after": 300,
    "transform:after": "translate3d(0, 0, 0)"
  },
  "@TRANSITION": {
    "ej-form__checkbox-track": {
      "property": "backgroundColor",
      "duration": 300,
      "property:after": "transform",
      "duration:after": 300
    },
    "ej-toast__inner": {
      "property": "opacity",
      "duration": 300,
      "timingFunction": "ease-in-out"
    },
    "slide-left-enter-active": {
      "duration": 500,
      "timingFunction": "ease"
    },
    "slide-left-leave-active": {
      "duration": 500,
      "timingFunction": "ease"
    },
    "slide-right-enter-active": {
      "property": "transform",
      "duration": 500,
      "timingFunction": "ease"
    },
    "slide-right-leave-active": {
      "property": "transform",
      "duration": 500,
      "timingFunction": "ease"
    },
    "address-info": {
      "duration": 350
    }
  },
  "ej-form__select": {
    "width": 100,
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "background": "none",
    "border": "none",
    "outline": "none",
    "boxSizing": "border-box",
    "appearance": "none",
    "fontSize": "17",
    "color": "#000000",
    "lineHeight": 1
  },
  "ej-modal": {
    "display": "none",
    "position": "fixed",
    "left": 0,
    "right": 0,
    "top": 0,
    "bottom": 0,
    "zIndex": 1000
  },
  "ej-modal--open": {
    "display": "block"
  },
  "ej-modal__mask": {
    "background": "rgba(0, 0, 0, 0.4)",
    "position": "absolute",
    "width": 100,
    "height": 100
  },
  "ej-modal__inner": {
    "width": 88,
    "position": "relative",
    "backgroundColor": "#ffffff",
    "left": 50,
    "top": 50,
    "transform": "translate(-50%, -50%)",
    "borderRadius": "4"
  },
  "ej-modal__header": {
    "position": "relative",
    "paddingTop": "20",
    "paddingRight": "15",
    "paddingBottom": "20",
    "paddingLeft": "15",
    "fontSize": "19",
    "content:after": "\"\"",
    "position:after": "absolute",
    "backgroundColor:after": "#dddddd",
    "display:after": "block",
    "zIndex:after": 1,
    "bottom:after": 0,
    "left:after": 0,
    "width:after": 100,
    "height:after": "1",
    "transformOrigin:after": "50% 100%",
    "transform:after": "scaleY(0.5)"
  },
  "ej-modal__body": {
    "paddingTop": "20",
    "paddingRight": "20",
    "paddingBottom": "20",
    "paddingLeft": "20",
    "fontSize": "15",
    "lineHeight": "22",
    "maxHeight": "320",
    "overflowY": "auto",
    "color": "#333333"
  },
  "ej-modal__footer": {
    "position": "relative",
    "display": "flex",
    "alignItems": "center",
    "justifyContent": "center",
    "paddingTop": 0,
    "paddingRight": 6,
    "paddingBottom": 0,
    "paddingLeft": 6,
    "height": "44",
    "lineHeight": "44",
    "fontSize": "17",
    "content:before": "\"\"",
    "position:before": "absolute",
    "backgroundColor:before": "#dddddd",
    "display:before": "block",
    "zIndex:before": 1,
    "top:before": 0,
    "left:before": 0,
    "width:before": 100,
    "height:before": "1",
    "transformOrigin:before": "50% 50%",
    "transform:before": "scaleY(0.5)"
  },
  "ej-modal__btn": {
    "position": "relative",
    "flex": 1,
    "color": "#6988ff",
    "textAlign": "center",
    "content:before": "\"\"",
    "position:before": "absolute",
    "backgroundColor:before": "#dddddd",
    "display:before": "block",
    "zIndex:before": 1,
    "top:before": 0,
    "left:before": 0,
    "width:before": "1",
    "height:before": 100,
    "transformOrigin:before": "100% 50%",
    "transform:before": "scaleX(0.5)",
    "color:first-child": "#666666",
    "display:first-child:before": "none !important"
  },
  "ej-modal__btn--disabled": {
    "opacity": 0.3
  },
  "ej-toast": {
    "position": "fixed",
    "left": 0,
    "right": 0,
    "top": 0,
    "bottom": 0,
    "zIndex": 1000,
    "backgroundColor": "rgba(0,0,0,0.15)"
  },
  "ej-toast__inner": {
    "position": "absolute",
    "maxWidth": 60,
    "left": 50,
    "top": 45,
    "transform": "translate(-50%, -50%)",
    "display": "block",
    "paddingTop": "15",
    "paddingRight": "15",
    "paddingBottom": "15",
    "paddingLeft": "15",
    "borderRadius": "5",
    "backgroundColor": "rgba(40,40,40,0.7)",
    "textAlign": "center",
    "color": "#ffffff",
    "fontSize": "14",
    "wordWrap": "break-word",
    "opacity": 0,
    "transitionProperty": "opacity",
    "transitionDuration": 300,
    "transitionTimingFunction": "ease-in-out",
    "lineHeight": 1.2
  },
  "ej-toast__inner-show": {
    "transform": "translate(-50%, -50%)",
    "opacity": 1
  },
  "ej-toast__inner-hidden": {
    "transform": "translate(-50%, -50%)",
    "opacity": 0
  },
  "slide-left-enter-active": {
    "transitionDuration": 500,
    "transitionTimingFunction": "ease"
  },
  "slide-left-leave-active": {
    "transitionDuration": 500,
    "transitionTimingFunction": "ease"
  },
  "slide-left-enter": {
    "opacity": 0,
    "transform": "translate3D(-100%, 0, 0)"
  },
  "slide-left-leave": {
    "opacity": 0,
    "transform": "translate3D(100%, 0, 0)"
  },
  "slide-right-enter-active": {
    "transitionProperty": "transform",
    "transitionDuration": 500,
    "transitionTimingFunction": "ease"
  },
  "slide-right-leave-active": {
    "transitionProperty": "transform",
    "transitionDuration": 500,
    "transitionTimingFunction": "ease"
  },
  "slide-right-enter": {
    "opacity": 0,
    "transform": "translate3D(100%, 0, 0)"
  },
  "slide-right-leave": {
    "opacity": 0,
    "transform": "translate3D(-100%, 0, 0)"
  },
  "ej-icon": {
    "backgroundSize": "100% 100%",
    "width": "22",
    "height": "22"
  },
  "ej-icon--xxs": {
    "width": "15",
    "height": "15"
  },
  "ej-icon--xs": {
    "width": "18",
    "height": "18"
  },
  "ej-icon--sm": {
    "width": "21",
    "height": "21"
  },
  "ej-icon--md": {
    "width": "22",
    "height": "22"
  },
  "ej-icon--lg": {
    "width": "36",
    "height": "36"
  },
  "ej-icon--loading": {
    "animation": "cirle-anim 1s linear infinite"
  },
  "ej-routerbar": {
    "position": "fixed",
    "left": 0,
    "bottom": 0,
    "right": 0,
    "zIndex": 999,
    "display": "flex",
    "alignItems": "center",
    "height": "50",
    "backgroundColor": "#ffffff",
    "fontSize": "11",
    "color": "#666666",
    "content:before": "\"\"",
    "position:before": "absolute",
    "backgroundColor:before": "#D1DCFC",
    "display:before": "block",
    "zIndex:before": 1,
    "top:before": 0,
    "left:before": 0,
    "width:before": 100,
    "height:before": "1",
    "transformOrigin:before": "50% 50%",
    "transform:before": "scaleY(0.5)"
  },
  "ej-routerbar__item": {
    "position": "relative",
    "flex": 1,
    "cursor": "pointer",
    "WebkitTapHighlightColor": "rgba(0, 0, 0, 0)",
    "height": "50",
    "paddingLeft:first-child": 4.4,
    "paddingRight:last-child": 4.4
  },
  "ej-routerbar__item-icon": {
    "marginTop": "7",
    "marginBottom": 0,
    "width": "22",
    "height": "22",
    "display": "block",
    "color": "#E6DCDC"
  },
  "ej-routerbar__item-title": {
    "marginTop": "5",
    "width": 100,
    "display": "block",
    "textAlign": "center",
    "fontSize": "11",
    "color": "#999999"
  },
  "ej-modal-link": {
    "WebkitTapHighlightColor": "rgba(0, 0, 0, 0)"
  },
  "ej-form__selectlist": {
    "position": "relative",
    "fontSize": "17",
    "color": "#666666"
  },
  "ej-form__selectlist-input": {
    "display": "none"
  },
  "ej-form__selectlist-indicator": {
    "position": "relative",
    "fontSize": "17",
    "color": "#000000",
    "wordBreak": "break-all",
    "lineHeight": 1,
    "paddingRight": "20",
    "display:after": "inline-block",
    "width:after": 0,
    "height:after": 0,
    "borderStyle:after": "solid",
    "position:after": "absolute",
    "left:after": 50,
    "bottom:after": "-5",
    "marginLeft:after": "-7",
    "content:after": "''",
    "right:after": 0,
    "top:after": 50,
    "marginTop:after": "-3"
  },
  "ej-form__selectlist-list": {
    "display": "none",
    "paddingTop": "10"
  },
  "ej-form__selectlist-list--show": {
    "display": "block"
  },
  "ej-form__selectlist-option": {
    "wordBreak": "break-all",
    "fontSize": "17",
    "color": "#000000",
    "lineHeight": 1,
    "paddingTop": "5",
    "paddingRight": 0,
    "paddingBottom": "5",
    "paddingLeft": 0
  },
  "feature-card": {
    "paddingTop": 0,
    "paddingRight": "20",
    "paddingBottom": 0,
    "paddingLeft": "20",
    "borderRadius": "4",
    "background": "linear-gradient(30deg, #5C7AF1 0%, #8DA4FF 100%)",
    "boxShadow": "0 1px 12px rgba(92, 122, 241, 0.4)"
  },
  "feature-card__main": {
    "display": "flex",
    "alignItems": "center"
  },
  "feature-card__main-item": {
    "flex": 1,
    "display": "flex",
    "flexDirection": "column",
    "alignItems": "center",
    "justifyContent": "center",
    "paddingTop": "37",
    "paddingRight": 0,
    "paddingBottom": "28",
    "paddingLeft": 0,
    "height": "67",
    "color": "#ffffff"
  },
  "feature-card__main-icon": {
    "width": "29",
    "height": "30"
  },
  "feature-card__main-text": {
    "marginTop": "13",
    "color": "#000000",
    "fontSize": "13"
  },
  "feature-card__footer": {
    "position": "relative",
    "display": "flex",
    "alignItems": "center",
    "paddingTop": "11",
    "paddingRight": 0,
    "paddingBottom": "12",
    "paddingLeft": 0,
    "content:before": "\"\"",
    "position:before": "absolute",
    "backgroundColor:before": "#dddddd",
    "display:before": "block",
    "zIndex:before": 1,
    "top:before": 0,
    "left:before": 0,
    "width:before": 100,
    "height:before": "1",
    "transformOrigin:before": "50% 50%",
    "transform:before": "scaleY(0.5)"
  },
  "feature-card__footer-item": {
    "flex": 1,
    "display": "flex",
    "alignItems": "center",
    "justifyContent": "center"
  },
  "feature-card__footer-icon": {
    "display": "inline-block",
    "color": "#ffffff"
  },
  "feature-card__footer-text": {
    "paddingLeft": "6",
    "color": "#000000",
    "fontSize": "13"
  },
  "feature-list": {
    "position": "relative",
    "marginTop": "15",
    "marginRight": "18",
    "marginBottom": "100",
    "marginLeft": "18",
    "clear:after": "both",
    "display:after": "table",
    "lineHeight:after": 0,
    "content:after": "\"\"",
    "content:before": "''",
    "position:before": "absolute",
    "zIndex:before": 2,
    "bottom:before": 0,
    "left:before": 0,
    "right:before": 0,
    "height:before": "1",
    "backgroundColor:before": "#ffffff"
  },
  "feature-list__item": {
    "position": "relative",
    "float": "left",
    "display": "flex",
    "flexDirection": "column",
    "alignItems": "center",
    "justifyContent": "center",
    "width": 33.33,
    "paddingTop": "22",
    "paddingRight": 0,
    "paddingBottom": "22",
    "paddingLeft": 0,
    "height": "67",
    "color": "#666666",
    "content:after": "\"\"",
    "position:after": "absolute",
    "backgroundColor:after": "#dddddd",
    "display:after": "block",
    "zIndex:after": 1,
    "bottom:after": 0,
    "left:after": 0,
    "width:after": 100,
    "height:after": "1",
    "transformOrigin:after": "50% 100%",
    "transform:after": "scaleY(0.5)",
    "content:before": "\"\"",
    "position:before": "absolute",
    "backgroundColor:before": "#dddddd",
    "display:before": "block",
    "zIndex:before": 1,
    "top:before": 0,
    "left:before": 0,
    "width:before": "1",
    "height:before": 100,
    "transformOrigin:before": "100% 50%",
    "transform:before": "scaleX(0.5)"
  },
  "feature-list__icon--active": {
    "color": "#FF7576"
  },
  "feature-list__text": {
    "marginTop": "12",
    "fontSize": "13"
  },
  "download-keystore": {
    "paddingTop": "20"
  },
  "download-keystore__warning": {
    "color": "#f4333c"
  },
  "welcome": {
    "position": "fixed",
    "zIndex": 999,
    "left": 0,
    "right": 0,
    "top": 0,
    "bottom": 0,
    "width": 100,
    "boxSizing": "border-box",
    "display": "flex",
    "alignItems": "center",
    "justifyContent": "center",
    "flexDirection": "column",
    "height": 100,
    "paddingTop": 0,
    "paddingRight": "15",
    "paddingBottom": 0,
    "paddingLeft": "15",
    "backgroundColor": "#ffffff"
  },
  "welcome__tip": {
    "marginBottom": "40"
  },
  "ej-page--property": {
    "background": "linear-gradient(180deg, #5772DE 0%, #889EF5 100%)",
    "textAlign": "left"
  },
  "property": {
    "display": "flex",
    "flexDirection": "column",
    "height": 100
  },
  "property-header": {
    "position": "relative",
    "paddingTop": "10",
    "color": "#000000"
  },
  "property-header__inner": {
    "display": "flex",
    "paddingTop": 0,
    "paddingRight": "18",
    "paddingBottom": 0,
    "paddingLeft": "18"
  },
  "property-header__left": {
    "flex": 1
  },
  "property-header__right": {
    "paddingTop": "3"
  },
  "property-header__button": {
    "display": "inline-block",
    "border": "1px solid #fff",
    "borderRadius": "4",
    "paddingTop": "9",
    "paddingRight": "11",
    "paddingBottom": "9",
    "paddingLeft": "11",
    "marginLeft": "10",
    "color": "#000000",
    "marginLeft:first-child": 0
  },
  "property-header__title": {
    "paddingTop": "5",
    "fontSize": "16"
  },
  "property-header__amount": {
    "fontSize": "42",
    "marginRight:before": "3",
    "content:before": "'≈'",
    "display:before": "inline",
    "fontSize:before": "30",
    "verticalAlign:before": "6"
  },
  "property-list": {
    "flex": 1,
    "marginTop": "30",
    "backgroundColor": "#ffffff",
    "paddingTop": "30",
    "paddingRight": "18",
    "paddingBottom": "30",
    "paddingLeft": "18",
    "boxShadow": "0 1px 10px rgba(0, 0, 0, 0.1)"
  },
  "property-list__item": {
    "position": "relative",
    "display": "flex",
    "alignItems": "center",
    "height": "82",
    "content:after": "\"\"",
    "position:after": "absolute",
    "backgroundColor:after": "#dddddd",
    "display:after": "block",
    "zIndex:after": 1,
    "bottom:after": 0,
    "left:after": 0,
    "width:after": 100,
    "height:after": "1",
    "transformOrigin:after": "50% 100%",
    "transform:after": "scaleY(0.5)",
    "display:last-child:after": "none"
  },
  "property-list__item-header": {
    "width": "100",
    "color": "#333333",
    "fontSize": "26"
  },
  "property-list__item-footer": {
    "flex": 1,
    "textAlign": "right"
  },
  "property-list__item-token": {
    "color": "#333333",
    "fontSize": "15"
  },
  "property-list__item-rmb": {
    "marginTop": "5",
    "color": "#839CFF",
    "fontSize": "11"
  },
  "accounts": {
    "backgroundColor": "#ffffff",
    "marginTop": 0,
    "marginRight": "25",
    "marginBottom": 0,
    "marginLeft": "25",
    "paddingTop": "10",
    "paddingRight": "18",
    "paddingBottom": "10",
    "paddingLeft": "18",
    "borderRadius": "15",
    "boxShadow": "0 1px 10px rgba(0, 0, 0, 0.1)"
  },
  "accounts__item": {
    "position": "relative",
    "display": "flex",
    "alignItems": "center",
    "height": "82",
    "paddingTop": 0,
    "paddingRight": "10",
    "paddingBottom": 0,
    "paddingLeft": "10",
    "content:after:after": "\"\"",
    "position:after:after": "absolute",
    "backgroundColor:after:after": "#dddddd",
    "display:after:after": "block",
    "zIndex:after:after": 1,
    "bottom:after:after": 0,
    "left:after:after": 0,
    "width:after:after": 100,
    "height:after:after": "1",
    "transformOrigin:after:after": "50% 100%",
    "transform:after:after": "scaleY(0.5)",
    "display:last-child:after": "none"
  },
  "accounts__item-header": {
    "width": "100",
    "color": "#333333",
    "fontSize": "26"
  },
  "accounts__item-footer": {
    "flex": 1,
    "textAlign": "right"
  },
  "accounts__item-token": {
    "color": "#333333",
    "fontSize": "15"
  },
  "accounts__item-rmb": {
    "marginTop": "5",
    "color": "#839CFF",
    "fontSize": "11"
  },
  "ej-page--manage": {
    "paddingBottom": "50"
  },
  "manage__footer": {
    "position": "fixed",
    "left": 0,
    "right": 0,
    "bottom": 0,
    "display": "flex",
    "paddingTop": 0,
    "paddingRight": "15",
    "paddingBottom": 0,
    "paddingLeft": "15",
    "backgroundColor": "#ffffff",
    "content:before": "\"\"",
    "position:before": "absolute",
    "backgroundColor:before": "#D1DCFC",
    "display:before": "block",
    "zIndex:before": 1,
    "top:before": 0,
    "left:before": 0,
    "width:before": 100,
    "height:before": "1",
    "transformOrigin:before": "50% 50%",
    "transform:before": "scaleY(0.5)"
  },
  "manage__footer-btn": {
    "flex": 1,
    "position": "relative",
    "borderRadius": 0,
    "content:first-child:after": "\"\"",
    "position:first-child:after": "absolute",
    "backgroundColor:first-child:after": "#D1DCFC",
    "display:first-child:after": "block",
    "zIndex:first-child:after": 1,
    "top:first-child:after": 0,
    "right:first-child:after": 0,
    "width:first-child:after": "1",
    "height:first-child:after": 100,
    "background:first-child:after": "#D1DCFC",
    "transformOrigin:first-child:after": "100% 50%",
    "transform:first-child:after": "scaleX(0.5)"
  },
  "account-item": {
    "position": "relative",
    "paddingTop": "18",
    "paddingRight": "18",
    "paddingBottom": "18",
    "paddingLeft": "18",
    "content:after": "\"\"",
    "position:after": "absolute",
    "backgroundColor:after": "#dddddd",
    "display:after": "block",
    "zIndex:after": 1,
    "bottom:after": 0,
    "left:after": 0,
    "width:after": 100,
    "height:after": "1",
    "transformOrigin:after": "50% 100%",
    "transform:after": "scaleY(0.5)"
  },
  "account-item__header": {
    "display": "flex",
    "alignItems": "center"
  },
  "account-item__name": {
    "maxWidth": "none",
    "overflow": "hidden",
    "textOverflow": "ellipsis",
    "whiteSpace": "nowrap",
    "wordWrap": "normal",
    "wordBreak": "break-all",
    "flex": 1,
    "fontSize": "19"
  },
  "account-item__control": {
    "height": "40",
    "display": "flex",
    "alignItems": "center",
    "justifyContent": "center"
  },
  "account-item__control-btn": {
    "flex": 1,
    "display": "flex",
    "alignItems": "center",
    "justifyContent": "center",
    "width": "50",
    "color": "#6988ff"
  },
  "account-item__label": {
    "paddingTop": "10",
    "display": "block",
    "height": "20",
    "lineHeight": "20"
  },
  "account-item__info": {
    "display": "block",
    "lineHeight": "20",
    "wordWrap": "break-word",
    "paddingTop": "5",
    "paddingRight": 0,
    "paddingBottom": "5",
    "paddingLeft": 0
  },
  "account-item__footer": {
    "marginTop": "15",
    "display": "flex"
  },
  "account-item__footer-btn": {
    "flex": 1,
    "color": "#000000"
  },
  "token-item__img": {
    "display": "none"
  },
  "token-item__name": {
    "paddingTop": "10",
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0
  },
  "token-item__label": {
    "display": "block",
    "paddingTop": "5",
    "paddingRight": 0,
    "paddingBottom": "5",
    "paddingLeft": 0
  },
  "ej-page--my": {
    "paddingLeft": "15",
    "paddingRight": "15"
  },
  "my-header": {
    "display": "flex",
    "alignItems": "center",
    "paddingTop": "44",
    "paddingBottom": "35",
    "color": "#333333"
  },
  "my-header__left": {
    "flex": 1
  },
  "my-header__right": {
    "width": "50",
    "height": "50",
    "borderRadius": 50,
    "backgroundColor": "#F3F3F3"
  },
  "my-header__title": {
    "fontSize": "34",
    "height": "34"
  },
  "my-header__addition": {
    "marginTop": "10",
    "fontSize": "13"
  },
  "my-header__avatar": {
    "backgroundRepeat": "no-repeat",
    "backgroundSize": "100% 100%"
  },
  "my-card": {
    "position": "relative",
    "display": "flex",
    "alignItems": "center",
    "borderRadius": "4",
    "paddingTop": "20",
    "paddingRight": 0,
    "paddingBottom": "28",
    "paddingLeft": 0,
    "background": "linear-gradient(30deg, #5C7AF1 0%, #8DA4FF 100%)",
    "boxShadow": "0 1px 12px rgba(92, 122, 241, 0.4)",
    "content:before": "\"\"",
    "position:before": "absolute",
    "backgroundColor:before": "#dddddd",
    "display:before": "block",
    "zIndex:before": 1,
    "top:before": "29",
    "left:before": 33.33,
    "width:before": "1",
    "height:before": "33",
    "transformOrigin:before": "100% 50%",
    "transform:before": "scaleX(0.5)",
    "content:after": "\"\"",
    "position:after": "absolute",
    "backgroundColor:after": "#dddddd",
    "display:after": "block",
    "zIndex:after": 1,
    "top:after": "29",
    "right:after": 33.33,
    "width:after": "1",
    "height:after": "33",
    "background:after": "#ddd",
    "transformOrigin:after": "100% 50%",
    "transform:after": "scaleX(0.5)"
  },
  "my-card__item": {
    "flex": 1,
    "textAlign": "center",
    "color": "#000000"
  },
  "my-card__label": {
    "fontSize": "13"
  },
  "my-card__value": {
    "marginTop": "10",
    "fontSize": "21"
  },
  "my-list__item": {
    "position": "relative",
    "display": "flex",
    "alignItems": "center",
    "color": "#000000",
    "paddingTop": "18",
    "paddingRight": 0,
    "paddingBottom": "18",
    "paddingLeft": 0,
    "display:after": "inline-block",
    "width:after": "9",
    "height:after": "9",
    "borderColor:after": "#cccccc",
    "borderStyle:after": "solid",
    "transform:after": "rotate(45deg)",
    "position:after": "absolute",
    "top:after": 50,
    "right:after": 0,
    "marginTop:after": "-6",
    "content:after": "''"
  },
  "my-list__icon": {
    "width": "19",
    "height": "19"
  },
  "my-list__text": {
    "marginLeft": "15",
    "fontSize": "18"
  },
  "address-info": {
    "position": "fixed",
    "left": 0,
    "right": 0,
    "top": 0,
    "bottom": 0,
    "opacity": 0,
    "transform": "translate3D(100%, 0, 0)",
    "transitionDuration": 350,
    "zIndex": 1000,
    "background": "linear-gradient(180deg, #5772de 0%, #889ef5 100%)"
  },
  "address-info--show": {
    "opacity": 1,
    "transform": "translate3D(0, 0, 0)"
  },
  "address-info__inner": {
    "paddingTop": "45",
    "display": "flex",
    "justifyContent": "center",
    "flexDirection": "column",
    "height": 100,
    "boxSizing": "border-box"
  },
  "address-info__card-inner": {
    "marginTop": 0,
    "marginBottom": 0,
    "width": "280",
    "position": "relative",
    "zIndex": 1,
    "backgroundColor": "#ffffff",
    "borderRadius": "5",
    "boxShadow": "0 1px 10px rgba(0, 0, 0, 0.1)"
  },
  "address-info__address": {
    "marginTop": "24",
    "marginBottom": 0,
    "width": "280",
    "textAlign": "center",
    "fontSize": "15",
    "color": "#ffffff"
  },
  "address-info__copy": {
    "marginTop": 0,
    "marginBottom": 0,
    "width": "280",
    "textAlign": "center",
    "borderRadius": 0,
    "position": "relative",
    "content:before": "\"\"",
    "position:before": "absolute",
    "left:before": 0,
    "top:before": 0,
    "width:before": 200,
    "height:before": 200,
    "border:before": "1px solid #ddd",
    "borderRadius:before": 45,
    "transformOrigin:before": "0 0",
    "transform:before": "scale(0.5)",
    "boxSizing:before": "border-box",
    "pointerEvents:before": "none"
  },
  "address-info__card": {
    "position": "relative"
  },
  "address-info__card-bg": {
    "position": "absolute",
    "left": 0,
    "top": "15",
    "width": 100,
    "paddingTop": 45.87,
    "height": 0,
    "background": "url(\"../assets/images/property-bg.png\") center center no-repeat",
    "backgroundSize": "100% 100%"
  },
  "address-info__figure": {
    "display": "block",
    "borderRadius": "5"
  },
  "address-info__card-footer": {
    "textAlign": "center",
    "display": "flex",
    "alignItems": "center"
  },
  "address-info__save": {
    "flex": 1,
    "fontSize": "16",
    "color": "#ff7576",
    "paddingTop": "20",
    "paddingRight": 0,
    "paddingBottom": "20",
    "paddingLeft": 0,
    "WebkitTapHighlightColor": "rgba(0, 0, 0, 0)"
  },
  "ej-page--detail": {
    "paddingBottom": "50",
    "color": "#333333"
  },
  "detail-header": {
    "display": "block",
    "width": 100
  },
  "detail-main": {
    "position": "relative",
    "zIndex": 1,
    "marginTop": "-20",
    "backgroundColor": "#ffffff",
    "paddingTop": "28",
    "paddingRight": "15",
    "paddingBottom": "28",
    "paddingLeft": "15"
  },
  "detail-overview__header": {
    "fontSize": "13",
    "lineHeight": "20"
  },
  "detail-overview__data": {
    "marginTop": "36",
    "backgroundColor": "#F8F8F8",
    "borderRadius": "9",
    "display": "flex",
    "alignItems": "center",
    "paddingTop": "12",
    "paddingRight": "5",
    "paddingBottom": "16",
    "paddingLeft": "5"
  },
  "detail-overview__data-item": {
    "position": "relative",
    "flex": 1,
    "display": "flex",
    "alignItems": "center",
    "justifyContent": "center",
    "flexDirection": "column",
    "content:before": "\"\"",
    "position:before": "absolute",
    "backgroundColor:before": "#dddddd",
    "display:before": "block",
    "zIndex:before": 1,
    "top:before": 0,
    "left:before": 0,
    "width:before": "1",
    "height:before": 100,
    "transformOrigin:before": "100% 50%",
    "transform:before": "scaleX(0.5)",
    "display:first-child:before": "none"
  },
  "detail-overview__data-label": {
    "fontSize": "22"
  },
  "detail-overview__data-value": {
    "marginTop": "2",
    "fontSize": "13",
    "color": "#666666"
  },
  "detail-overview__address": {
    "marginTop": "16",
    "paddingBottom": "5"
  },
  "detail-overview__address-item": {
    "marginBottom": "14"
  },
  "detail-overview__address-label": {
    "fontSize": "14",
    "color": "#353535"
  },
  "detail-overview__address-value": {
    "background": "linear-gradient(85deg, #F4F7FF 0%, #FBFCFF 100%)",
    "marginTop": "9",
    "fontSize": "14",
    "color": "#839CFF",
    "paddingTop": "11",
    "paddingRight": "14",
    "paddingBottom": "11",
    "paddingLeft": "14",
    "borderRadius": "9",
    "wordBreak": "break-all"
  },
  "detail-brief": {
    "position": "relative",
    "paddingTop": "22",
    "paddingBottom": "30",
    "content:before": "\"\"",
    "position:before": "absolute",
    "backgroundColor:before": "#dddddd",
    "display:before": "block",
    "zIndex:before": 1,
    "top:before": 0,
    "left:before": 0,
    "width:before": 100,
    "height:before": "1",
    "transformOrigin:before": "50% 50%",
    "transform:before": "scaleY(0.5)"
  },
  "detail-brief__title": {
    "paddingBottom": "18",
    "fontSize": "15"
  },
  "detail-brief__item": {
    "marginLeft": "20",
    "display": "inline",
    "fontSize": "13",
    "lineHeight": "20",
    "color": "#353535",
    "marginLeft:first-child": 0
  },
  "detail-rule": {
    "position": "relative",
    "display": "block",
    "width": 100,
    "paddingTop": "15",
    "paddingRight": 0,
    "paddingBottom": "15",
    "paddingLeft": 0,
    "fontSize": "15",
    "color": "#333333",
    "content:before": "\"\"",
    "position:before": "absolute",
    "backgroundColor:before": "#dddddd",
    "display:before": "block",
    "zIndex:before": 1,
    "top:before": 0,
    "left:before": 0,
    "width:before": 100,
    "height:before": "1",
    "transformOrigin:before": "50% 50%",
    "transform:before": "scaleY(0.5)",
    "display:after": "inline-block",
    "width:after": "6",
    "height:after": "6",
    "borderColor:after": "#999999",
    "borderStyle:after": "solid",
    "transform:after": "rotate(45deg)",
    "position:after": "absolute",
    "top:after": "20",
    "content:after": "''",
    "right:after": 0
  },
  "detail-question": {
    "position": "relative",
    "content:before": "\"\"",
    "position:before": "absolute",
    "backgroundColor:before": "#dddddd",
    "display:before": "block",
    "zIndex:before": 1,
    "top:before": 0,
    "left:before": 0,
    "width:before": 100,
    "height:before": "1",
    "transformOrigin:before": "50% 50%",
    "transform:before": "scaleY(0.5)"
  },
  "detail-question__title": {
    "fontSize": "15",
    "paddingTop": "24"
  },
  "detail-question__list": {
    "fontSize": "14"
  },
  "detail-question__ask": {
    "position": "relative",
    "cursor": "pointer",
    "paddingTop": "20",
    "paddingRight": 0,
    "paddingBottom": "20",
    "paddingLeft": 0,
    "WebkitTapHighlightColor": "rgba(0, 0, 0, 0)",
    "display:after": "inline-block",
    "width:after": "6",
    "height:after": "6",
    "borderColor:after": "#999999",
    "borderStyle:after": "solid",
    "transform:after": "rotate(135deg)",
    "position:after": "absolute",
    "top:after": "22",
    "content:after": "''",
    "right:after": "2"
  },
  "detail-question__answer": {
    "display": "none",
    "borderRadius": "8",
    "paddingTop": "10",
    "paddingRight": "12",
    "paddingBottom": "10",
    "paddingLeft": "12",
    "backgroundColor": "#F8F8F8",
    "lineHeight": "21",
    "color": "#999999"
  },
  "detail-footer": {
    "position": "fixed",
    "zIndex": 9,
    "left": 0,
    "right": 0,
    "bottom": 0,
    "display": "flex",
    "alignItems": "center",
    "height": "50",
    "lineHeight": "50"
  },
  "detail-footer__button": {
    "flex": 1,
    "textAlign": "center",
    "color": "#ffffff",
    "background:first-child": "linear-gradient(135deg, #FFAEAE 0%, #FF7676 100%)",
    "background:last-child": "linear-gradient(45deg, #839CFF 0%, #B9CBFF 100%)"
  },
  "ej-page--join": {
    "paddingLeft": "18",
    "paddingRight": "18",
    "display": "flex",
    "flexDirection": "column"
  },
  "join-main": {
    "flex": 1
  },
  "join-footer": {
    "paddingBottom": "25"
  },
  "join-promise": {
    "paddingLeft": "18",
    "lineHeight": "17",
    "fontSize": "12",
    "color": "#999999"
  },
  "ej-form__radio-input": {
    "display": "none"
  },
  "ej-form__radio-label": {
    "position": "relative",
    "content:before": "''",
    "display:before": "inline-block",
    "verticalAlign:before": "middle",
    "borderRadius:before": "18",
    "width:before": "18",
    "height:before": "18",
    "border:before": "1px solid #ddd"
  },
  "ej-form__radio-item": {
    "display": "inline-block",
    "marginLeft:first-child": 0
  },
  "ej-page--recharge": {
    "paddingLeft": "18",
    "paddingRight": "18",
    "display": "flex",
    "flexDirection": "column"
  },
  "recharge-main": {
    "flex": 1
  },
  "ej-page--send": {
    "paddingLeft": "18",
    "paddingRight": "18",
    "display": "flex",
    "flexDirection": "column"
  },
  "send-main": {
    "flex": 1
  },
  "ej-page--scan": {
    "display": "flex",
    "flexDirection": "column",
    "paddingLeft": "18",
    "paddingRight": "18",
    "backgroundColor": "#616161"
  },
  "scan-main": {
    "flex": 1,
    "display": "flex",
    "flexDirection": "column",
    "alignItems": "center",
    "justifyContent": "center"
  },
  "scan-rect": {
    "borderRadius": 0,
    "position": "relative",
    "boxSizing": "border-box",
    "marginBottom": "36",
    "overflow": "hidden",
    "content:before": "\"\"",
    "position:before": "absolute",
    "left:before": 0,
    "top:before": 0,
    "width:before": 200,
    "height:before": 200,
    "border:before": "1px solid #fff",
    "borderRadius:before": 0,
    "transformOrigin:before": "0 0",
    "transform:before": "scale(0.5)",
    "boxSizing:before": "border-box",
    "pointerEvents:before": "none",
    "zIndex:after": 1
  },
  "scan-tip": {
    "fontSize": "15",
    "color": "#ffffff",
    "textAlign": "center"
  },
  "scan-footer__button": {
    "background": "#fff"
  },
  "record-empty": {
    "position": "relative",
    "height": 100
  },
  "record-empty__tip": {
    "position": "absolute",
    "left": 50,
    "top": 50,
    "transform": "translate(-50%, 50%)"
  },
  "record-item": {
    "display": "flex",
    "alignItems": "center"
  },
  "record-item__left-header": {
    "fontSize": "18",
    "color": "#000000"
  },
  "record-item__left-footer": {
    "marginTop": "4",
    "color": "#999999"
  },
  "record-item__right": {
    "textAlign": "right"
  },
  "ej-navbar": {
    "display": "flex",
    "flexDirection": "row",
    "alignItems": "center",
    "height": "45",
    "color": "#ffffff"
  },
  "ej-navbar__left": {
    "flex": 1,
    "height": 100,
    "display": "flex",
    "justifyContent": "center",
    "paddingLeft": "15",
    "fontSize": "16"
  },
  "ej-navbar__center": {
    "flex": 1,
    "height": 100,
    "display": "flex",
    "justifyContent": "center"
  },
  "ej-navbar__right": {
    "flex": 1,
    "height": 100,
    "display": "flex",
    "justifyContent": "flex-end",
    "fontSize": "16",
    "marginRight": "15"
  },
  "ej-navbar__title": {
    "justifyContent": "center",
    "fontSize": "18",
    "whiteSpace": "nowrap"
  },
  "ej-navbar--light": {
    "backgroundColor": "#ffffff",
    "color": "#839CFF"
  },
  "ej-navbar--fixed": {
    "position": "fixed",
    "top": 0,
    "left": 0,
    "right": 0,
    "zIndex": 999
  }
}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _props;

var _classnames = __webpack_require__(5);

var _classnames2 = _interopRequireDefault(_classnames);

var _icon = __webpack_require__(6);

var _icon2 = _interopRequireDefault(_icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; } //
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
//

exports.default = {
    name: 'Navbar',
    components: {
        Icon: _icon2.default
    },
    props: (_props = {
        mode: {
            type: String,
            default: 'light'
        },
        fixed: {
            type: Boolean,
            default: 'true'
        }
    }, _defineProperty(_props, 'mode', {
        type: String, //'dark' | 'light'
        default: 'light'
    }), _defineProperty(_props, 'onLeftClick', {
        type: Function,
        default: function _default() {}
    }), _props),
    computed: {
        cls: function cls() {
            var modeClass = 'ej-navbar--' + this.mode;

            return [modeClass, {
                'ej-navbar--fixed': this.fixed
            }];
        }
    },
    data: function data() {
        return {};
    },
    created: function created() {},
    mounted: function mounted() {},

    methods: {
        clickBack: function clickBack() {
            this.$emit('back');
        }
    }
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*!
  Copyright (c) 2016 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames() {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg === 'undefined' ? 'undefined' : _typeof(arg);

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				classes.push(classNames.apply(null, arg));
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if (typeof module !== 'undefined' && module.exports) {
		module.exports = classNames;
	} else if ("function" === 'function' && _typeof(__webpack_require__(2)) === 'object' && __webpack_require__(2)) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {
		window.classNames = classNames;
	}
})();

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* script */
__vue_exports__ = __webpack_require__(0)

/* template */
var __vue_template__ = __webpack_require__(1)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "D:\\qscwork\\weexwallet\\src\\components\\icon.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof weex === "object" && weex && weex.document) {
  try {
    weex.document.registerStyleSheets(__vue_options__._scopeId, __vue_styles__)
  } catch (e) {}
}

module.exports = __vue_exports__


/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["ej-navbar"],
    class: _vm.cls
  }, [_c('div', {
    staticClass: ["ej-navbar__left"]
  }, [_vm._t("left", [_c('a', {
    staticClass: ["ej-navbar__back"]
  }, [_c('icon', {
    attrs: {
      "type": "back",
      "className": "ej-navbar__back-icon"
    }
  })], 1)])], 2), _c('div', {
    staticClass: ["ej-navbar__center"]
  }, [_vm._t("center")], 2), _c('div', {
    staticClass: ["ej-navbar__right"]
  }, [_vm._t("right")], 2)])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 8 */,
/* 9 */,
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(3)
)

/* script */
__vue_exports__ = __webpack_require__(4)

/* template */
var __vue_template__ = __webpack_require__(7)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "D:\\qscwork\\weexwallet\\src\\components\\navbar.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-9954d6e4"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof weex === "object" && weex && weex.document) {
  try {
    weex.document.registerStyleSheets(__vue_options__._scopeId, __vue_styles__)
  } catch (e) {}
}

module.exports = __vue_exports__
module.exports.el = 'true'
new Vue(module.exports)


/***/ })
/******/ ]);