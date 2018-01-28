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
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
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
      "src": "url(\"data:application/x-font-woff;charset=utf-8;base64,d09GRgABAAAAAAd8AAsAAAAAC4AAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAADMAAABCsP6z7U9TLzIAAAE8AAAAQwAAAFZW70gXY21hcAAAAYAAAAB3AAABxspx0qdnbHlmAAAB+AAAA0sAAATIYsUXAWhlYWQAAAVEAAAALwAAADYP1LGXaGhlYQAABXQAAAAeAAAAJAg8A/lobXR4AAAFlAAAABkAAAAcHKoAAGxvY2EAAAWwAAAAEAAAABADqATKbWF4cAAABcAAAAAfAAAAIAEXAGBuYW1lAAAF4AAAAUUAAAJtPlT+fXBvc3QAAAcoAAAAVAAAAH9yM6JbeJxjYGRgYOBikGPQYWB0cfMJYeBgYGGAAJAMY05meiJQDMoDyrGAaQ4gZoOIAgCKIwNPAHicY2BkkWCcwMDKwMHUyXSGgYGhH0IzvmYwYuRgYGBiYGVmwAoC0lxTGBwYKp7xMDf8b2CIYW5kaAQKM4LkANv5C5sAeJzFkcsRgDAIRBeDGT8pxRIsxBI8ebZi2tAFcrECN/MS2EmGDAAYARSyEQXkgsB10pXwC5bwFTvziWvgeZtae54ezRG5JG5MEQ18q6xQmVT8Jvmv9Fct9qNn3pG7wy+aJt5dmxOfjC2JT8fWxKdmLUF9AUXiFa0AeJytkk2IFEcUx9+r6q7u6a+xv2dn3Z7tGXd6dXU3mR1n2dXMQGICioggBjxkP0wESchEx4CGBHZGMOSQg1FcxpDkEAKBGGII3rJ4NCCezCF6EcTF1UsOXkRwO6maccPeY3dR9ape1eP93vuDDPDPfbpMc+DCKLwKe+AgALIxLFpkCOOkOk7G0I9lP/QsmpSSWCkVx+lrGBaZF1Rq1XLIFJZFCyOcjCu1ZJwkuLNaJ7uwEgwhDgzmDzkjmx16HrVcEp1L95Hv0S+UNmfrO9K92xteZdhVTxuOM+A4X6pMllVCpKyFH4ZBRs5oLP1Bzub95cJWUkBjIMnvP2IODzoLX1SbQyNhBrHdRndw2PqxYedtPj7LB64zoGwy1VzeLG3x8PSKnnONofID4B9y1rP0E3oGygCywhNPxjEpk6laA8UIChj0WMII17f0/cnC6PZX5u8emK/tdnKU0qoWKueZrL0jK7vfOkNntZB9xVi94DGm5298+g3OzOZtiWLM7zzkzhly9oNjFbqLb1e1UOTBeB6L9HfahiwUYAym4A04BOAWmW97gSjjTrtaLo3EEYa2hUrMs7Tr6ApHOYlF5cPJnl0StvLi3EIvwLKFIm+eflLmLNeiJIlIV8xrx0l3ooHYmFg73ls/JlbGRH/tScY0w2fC5JMpbzjFw8wxiPK6ZS0aGdnOnKRvJ9HzeyIaLUbJNh7r+b1+TFqcaKSruu6j4et/v1gfG1qAqPsGOoyYtjKjqh+ZtorSeyB0d06q8174EMMOmIY3eU84KOfleLWpOk5xfKEx5Kf9ndUz+pcilHvcpX49RMGKonyVGq1Lq1d/WZV0zUfp9nff/inpHknfbS1RutRqLRGy1JrrENKZm29T2sbrOCqA0zuqaf5maL7uGcd+vi9JD35STUT/8i1JunWZ+/Am7bZOdSntnmp1R2hn4agIcnShU+e0/F/Erarpp3/xq7zHEudrS7O0w7vtQATb/qNzOcg6BW5sqUBgSh9hWn7069XH0tfkQrN5kZCLzeYF0sLpDO9u+gfvzLKorOEb7SsrsrxyhTw9cYnSSydOijmdM3TuDIzP1x+oliV0J2/Q3SAkMMl1B+7LUNlLUFb7f4gJ4F/dV9ehAHicY2BkYGAAYvmv7Ufj+W2+MnCzMIDANe1tZxH0/3qWOOZGIJeDgQkkCgBJlAuHAHicY2BkYGBu+N/AEMNSyAAELHEMjAyogB0AWRADPwAAeJxjYWBgYH7JwMDCAMUBQFwIYQMAHToBxgAAAAAAAAAAdgC6ATwBrAH2AmR4nGNgZGBgYGcIYWBjAAEmIOYCQgaG/2A+AwARxQF4AHicZY9NTsMwEIVf+gekEqqoYIfkBWIBKP0Rq25YVGr3XXTfpk6bKokjx63UA3AejsAJOALcgDvwSCebNpbH37x5Y08A3OAHHo7fLfeRPVwyO3INF7gXrlN/EG6QX4SbaONVuEX9TdjHM6bCbXRheYPXuGL2hHdhDx18CNdwjU/hOvUv4Qb5W7iJO/wKt9Dx6sI+5l5XuI1HL/bHVi+cXqnlQcWhySKTOb+CmV7vkoWt0uqca1vEJlODoF9JU51pW91T7NdD5yIVWZOqCas6SYzKrdnq0AUb5/JRrxeJHoQm5Vhj/rbGAo5xBYUlDowxQhhkiMro6DtVZvSvsUPCXntWPc3ndFsU1P9zhQEC9M9cU7qy0nk6T4E9XxtSdXQrbsuelDSRXs1JErJCXta2VELqATZlV44RelzRiT8oZ0j/AAlabsgAAAB4nGNgYoAALgbsgJ2RiZGZkYWRlZGNkZ2Rg4GxgrUgIz8vla+gNCknszhDt7gksaS0mDsxJUW3ILEkMzWvRAiJrZuYXJJZliqKqhoqysAAAHGDHI4=\") format(\"woff\"), url(\"../styles/enjoy-ui/iconfont/iconfont.ttf?t=1510315469634\") format(\"truetype\")"
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
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; /**
                                                                                                                                                                                                                                                                                * CopyRight (C) 2017-2022 Alibaba Group Holding Limited.
                                                                                                                                                                                                                                                                                * Created by Tw93 on 17/11/01
                                                                                                                                                                                                                                                                                */

var _urlParse = __webpack_require__(14);

var _urlParse2 = _interopRequireDefault(_urlParse);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Utils = {
  UrlParser: _urlParse2.default,
  _typeof: function _typeof(obj) {
    return Object.prototype.toString.call(obj).slice(8, -1).toLowerCase();
  },
  isPlainObject: function isPlainObject(obj) {
    return Utils._typeof(obj) === 'object';
  },
  isString: function isString(obj) {
    return typeof obj === 'string';
  },
  isNonEmptyArray: function isNonEmptyArray() {
    var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

    return obj && obj.length > 0 && Array.isArray(obj) && typeof obj !== 'undefined';
  },
  isObject: function isObject(item) {
    return item && (typeof item === 'undefined' ? 'undefined' : _typeof2(item)) === 'object' && !Array.isArray(item);
  },
  isEmptyObject: function isEmptyObject(obj) {
    return Object.keys(obj).length === 0 && obj.constructor === Object;
  },
  decodeIconFont: function decodeIconFont(text) {
    // 正则匹配 图标和文字混排 eg: 我去上学校&#xe600;,天天不&#xe600;迟到
    var regExp = /&#x[a-z|0-9]{4,5};?/g;
    if (regExp.test(text)) {
      return text.replace(new RegExp(regExp, 'g'), function (iconText) {
        var replace = iconText.replace(/&#x/, '0x').replace(/;$/, '');
        return String.fromCharCode(replace);
      });
    } else {
      return text;
    }
  },
  mergeDeep: function mergeDeep(target) {
    for (var _len = arguments.length, sources = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      sources[_key - 1] = arguments[_key];
    }

    if (!sources.length) return target;
    var source = sources.shift();
    if (Utils.isObject(target) && Utils.isObject(source)) {
      for (var key in source) {
        if (Utils.isObject(source[key])) {
          if (!target[key]) {
            Object.assign(target, _defineProperty({}, key, {}));
          }
          Utils.mergeDeep(target[key], source[key]);
        } else {
          Object.assign(target, _defineProperty({}, key, source[key]));
        }
      }
    }
    return Utils.mergeDeep.apply(Utils, [target].concat(sources));
  },
  appendProtocol: function appendProtocol(url) {
    if (/^\/\//.test(url)) {
      var bundleUrl = weex.config.bundleUrl;

      return 'http' + (/^https:/.test(bundleUrl) ? 's' : '') + ':' + url;
    }
    return url;
  },
  encodeURLParams: function encodeURLParams(url) {
    var parsedUrl = new _urlParse2.default(url, true);
    return parsedUrl.toString();
  },
  goToH5Page: function goToH5Page(jumpUrl) {
    var animated = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var callback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

    var Navigator = weex.requireModule('navigator');
    var jumpUrlObj = new Utils.UrlParser(jumpUrl, true);
    var url = Utils.appendProtocol(jumpUrlObj.toString());
    Navigator.push({
      url: Utils.encodeURLParams(url),
      animated: animated.toString()
    }, callback);
  },

  env: {
    isTaobao: function isTaobao() {
      var appName = weex.config.env.appName;

      return (/(tb|taobao|淘宝)/i.test(appName)
      );
    },
    isTrip: function isTrip() {
      var appName = weex.config.env.appName;

      return appName === 'LX';
    },
    isBoat: function isBoat() {
      var appName = weex.config.env.appName;

      return appName === 'Boat' || appName === 'BoatPlayground';
    },
    isWeb: function isWeb() {
      var platform = weex.config.env.platform;

      return (typeof window === 'undefined' ? 'undefined' : _typeof2(window)) === 'object' && platform.toLowerCase() === 'web';
    },
    isIOS: function isIOS() {
      var platform = weex.config.env.platform;

      return platform.toLowerCase() === 'ios';
    },

    /**
     * 是否为 iPhone X
     * @returns {boolean}
     */
    isIPhoneX: function isIPhoneX() {
      var deviceHeight = weex.config.env.deviceHeight;

      if (Utils.env.isWeb()) {
        return (typeof window === 'undefined' ? 'undefined' : _typeof2(window)) !== undefined && window.screen && window.screen.width && window.screen.height && parseInt(window.screen.width, 10) === 375 && parseInt(window.screen.height, 10) === 812;
      }
      return Utils.env.isIOS() && deviceHeight === 2436;
    },
    isAndroid: function isAndroid() {
      var platform = weex.config.env.platform;

      return platform.toLowerCase() === 'android';
    },
    isAlipay: function isAlipay() {
      var appName = weex.config.env.appName;

      return appName === 'AP';
    },
    isTmall: function isTmall() {
      var appName = weex.config.env.appName;

      return (/(tm|tmall|天猫)/i.test(appName)
      );
    },
    isAliWeex: function isAliWeex() {
      return Utils.env.isTmall() || Utils.env.isTrip() || Utils.env.isTaobao();
    },
    supportsEB: function supportsEB() {
      var weexVersion = weex.config.env.weexVersion || '0';
      var isHighWeex = Utils.compareVersion(weexVersion, '0.10.1.4') && (Utils.env.isIOS() || Utils.env.isAndroid());
      var expressionBinding = weex.requireModule('expressionBinding');
      return expressionBinding && expressionBinding.enableBinding && isHighWeex;
    },


    /**
     * 判断Android容器是否支持是否支持expressionBinding(处理方式很不一致)
     * @returns {boolean}
     */
    supportsEBForAndroid: function supportsEBForAndroid() {
      return Utils.env.isAndroid() && Utils.env.supportsEB();
    },


    /**
     * 判断IOS容器是否支持是否支持expressionBinding
     * @returns {boolean}
     */
    supportsEBForIos: function supportsEBForIos() {
      return Utils.env.isIOS() && Utils.env.supportsEB();
    },


    /**
     * 获取weex屏幕真实的设置高度，需要减去导航栏高度
     * @returns {Number}
     */
    getPageHeight: function getPageHeight() {
      var env = weex.config.env;

      var navHeight = Utils.env.isWeb() ? 0 : Utils.env.isIPhoneX() ? 176 : 132;
      return env.deviceHeight / env.deviceWidth * 750 - navHeight;
    }
  },

  /**
   * 版本号比较
   * @memberOf Utils
   * @param currVer {string}
   * @param promoteVer {string}
   * @returns {boolean}
   * @example
   *
   * const { Utils } = require('@ali/wx-bridge');
   * const { compareVersion } = Utils;
   * console.log(compareVersion('0.1.100', '0.1.11')); // 'true'
   */
  compareVersion: function compareVersion() {
    var currVer = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '0.0.0';
    var promoteVer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '0.0.0';

    if (currVer === promoteVer) return true;
    var currVerArr = currVer.split('.');
    var promoteVerArr = promoteVer.split('.');
    var len = Math.max(currVerArr.length, promoteVerArr.length);
    for (var i = 0; i < len; i++) {
      var proVal = ~~promoteVerArr[i];
      var curVal = ~~currVerArr[i];
      if (proVal < curVal) {
        return true;
      } else if (proVal > curVal) {
        return false;
      }
    }
    return false;
  },

  /**
   * 分割数组
   * @param arr 被分割数组
   * @param size 分割数组的长度
   * @returns {Array}
   */
  arrayChunk: function arrayChunk() {
    var arr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var size = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 4;

    var groups = [];
    if (arr && arr.length > 0) {
      groups = arr.map(function (e, i) {
        return i % size === 0 ? arr.slice(i, i + size) : null;
      }).filter(function (e) {
        return e;
      });
    }
    return groups;
  },
  truncateString: function truncateString(str, len) {
    var hasDot = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

    var newLength = 0;
    var newStr = '';
    var singleChar = '';
    var chineseRegex = /[^\x00-\xff]/g;
    var strLength = str.replace(chineseRegex, '**').length;
    for (var i = 0; i < strLength; i++) {
      singleChar = str.charAt(i).toString();
      if (singleChar.match(chineseRegex) !== null) {
        newLength += 2;
      } else {
        newLength++;
      }
      if (newLength > len) {
        break;
      }
      newStr += singleChar;
    }

    if (hasDot && strLength > len) {
      newStr += '...';
    }
    return newStr;
  }
};

exports.default = Utils;

/***/ }),
/* 9 */,
/* 10 */,
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(12)
)

/* script */
__vue_exports__ = __webpack_require__(13)

/* template */
var __vue_template__ = __webpack_require__(23)
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
__vue_options__.__file = "D:\\qscwork\\weexwallet\\src\\index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-25fe6fca"
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


/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = {
  "@FONT-FACE": [
    {
      "fontFamily": "iconfont",
      "src": "url(\"data:application/x-font-woff;charset=utf-8;base64,d09GRgABAAAAAAd8AAsAAAAAC4AAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAADMAAABCsP6z7U9TLzIAAAE8AAAAQwAAAFZW70gXY21hcAAAAYAAAAB3AAABxspx0qdnbHlmAAAB+AAAA0sAAATIYsUXAWhlYWQAAAVEAAAALwAAADYP1LGXaGhlYQAABXQAAAAeAAAAJAg8A/lobXR4AAAFlAAAABkAAAAcHKoAAGxvY2EAAAWwAAAAEAAAABADqATKbWF4cAAABcAAAAAfAAAAIAEXAGBuYW1lAAAF4AAAAUUAAAJtPlT+fXBvc3QAAAcoAAAAVAAAAH9yM6JbeJxjYGRgYOBikGPQYWB0cfMJYeBgYGGAAJAMY05meiJQDMoDyrGAaQ4gZoOIAgCKIwNPAHicY2BkkWCcwMDKwMHUyXSGgYGhH0IzvmYwYuRgYGBiYGVmwAoC0lxTGBwYKp7xMDf8b2CIYW5kaAQKM4LkANv5C5sAeJzFkcsRgDAIRBeDGT8pxRIsxBI8ebZi2tAFcrECN/MS2EmGDAAYARSyEQXkgsB10pXwC5bwFTvziWvgeZtae54ezRG5JG5MEQ18q6xQmVT8Jvmv9Fct9qNn3pG7wy+aJt5dmxOfjC2JT8fWxKdmLUF9AUXiFa0AeJytkk2IFEcUx9+r6q7u6a+xv2dn3Z7tGXd6dXU3mR1n2dXMQGICioggBjxkP0wESchEx4CGBHZGMOSQg1FcxpDkEAKBGGII3rJ4NCCezCF6EcTF1UsOXkRwO6maccPeY3dR9ape1eP93vuDDPDPfbpMc+DCKLwKe+AgALIxLFpkCOOkOk7G0I9lP/QsmpSSWCkVx+lrGBaZF1Rq1XLIFJZFCyOcjCu1ZJwkuLNaJ7uwEgwhDgzmDzkjmx16HrVcEp1L95Hv0S+UNmfrO9K92xteZdhVTxuOM+A4X6pMllVCpKyFH4ZBRs5oLP1Bzub95cJWUkBjIMnvP2IODzoLX1SbQyNhBrHdRndw2PqxYedtPj7LB64zoGwy1VzeLG3x8PSKnnONofID4B9y1rP0E3oGygCywhNPxjEpk6laA8UIChj0WMII17f0/cnC6PZX5u8emK/tdnKU0qoWKueZrL0jK7vfOkNntZB9xVi94DGm5298+g3OzOZtiWLM7zzkzhly9oNjFbqLb1e1UOTBeB6L9HfahiwUYAym4A04BOAWmW97gSjjTrtaLo3EEYa2hUrMs7Tr6ApHOYlF5cPJnl0StvLi3EIvwLKFIm+eflLmLNeiJIlIV8xrx0l3ooHYmFg73ls/JlbGRH/tScY0w2fC5JMpbzjFw8wxiPK6ZS0aGdnOnKRvJ9HzeyIaLUbJNh7r+b1+TFqcaKSruu6j4et/v1gfG1qAqPsGOoyYtjKjqh+ZtorSeyB0d06q8174EMMOmIY3eU84KOfleLWpOk5xfKEx5Kf9ndUz+pcilHvcpX49RMGKonyVGq1Lq1d/WZV0zUfp9nff/inpHknfbS1RutRqLRGy1JrrENKZm29T2sbrOCqA0zuqaf5maL7uGcd+vi9JD35STUT/8i1JunWZ+/Am7bZOdSntnmp1R2hn4agIcnShU+e0/F/Erarpp3/xq7zHEudrS7O0w7vtQATb/qNzOcg6BW5sqUBgSh9hWn7069XH0tfkQrN5kZCLzeYF0sLpDO9u+gfvzLKorOEb7SsrsrxyhTw9cYnSSydOijmdM3TuDIzP1x+oliV0J2/Q3SAkMMl1B+7LUNlLUFb7f4gJ4F/dV9ehAHicY2BkYGAAYvmv7Ufj+W2+MnCzMIDANe1tZxH0/3qWOOZGIJeDgQkkCgBJlAuHAHicY2BkYGBu+N/AEMNSyAAELHEMjAyogB0AWRADPwAAeJxjYWBgYH7JwMDCAMUBQFwIYQMAHToBxgAAAAAAAAAAdgC6ATwBrAH2AmR4nGNgZGBgYGcIYWBjAAEmIOYCQgaG/2A+AwARxQF4AHicZY9NTsMwEIVf+gekEqqoYIfkBWIBKP0Rq25YVGr3XXTfpk6bKokjx63UA3AejsAJOALcgDvwSCebNpbH37x5Y08A3OAHHo7fLfeRPVwyO3INF7gXrlN/EG6QX4SbaONVuEX9TdjHM6bCbXRheYPXuGL2hHdhDx18CNdwjU/hOvUv4Qb5W7iJO/wKt9Dx6sI+5l5XuI1HL/bHVi+cXqnlQcWhySKTOb+CmV7vkoWt0uqca1vEJlODoF9JU51pW91T7NdD5yIVWZOqCas6SYzKrdnq0AUb5/JRrxeJHoQm5Vhj/rbGAo5xBYUlDowxQhhkiMro6DtVZvSvsUPCXntWPc3ndFsU1P9zhQEC9M9cU7qy0nk6T4E9XxtSdXQrbsuelDSRXs1JErJCXta2VELqATZlV44RelzRiT8oZ0j/AAlabsgAAAB4nGNgYoAALgbsgJ2RiZGZkYWRlZGNkZ2Rg4GxgrUgIz8vla+gNCknszhDt7gksaS0mDsxJUW3ILEkMzWvRAiJrZuYXJJZliqKqhoqysAAAHGDHI4=\") format(\"woff\"), url(\"styles/enjoy-ui/iconfont/iconfont.ttf?t=1510315469634\") format(\"truetype\")"
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
    "background": "url(\"assets/images/property-bg.png\") center center no-repeat",
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
  "item-container": {
    "width": "750",
    "backgroundColor": "#f2f3f4",
    "alignItems": "center",
    "justifyContent": "center"
  }
}

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _utils = __webpack_require__(8);

var _utils2 = _interopRequireDefault(_utils);

var _wxcTabBar = __webpack_require__(17);

var _wxcTabBar2 = _interopRequireDefault(_wxcTabBar);

var _navbar = __webpack_require__(22);

var _navbar2 = _interopRequireDefault(_navbar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    components: {
        Navbar: _navbar2.default,
        WxcTabBar: _wxcTabBar2.default
    },
    data: function data() {
        return {
            logo: 'https://gw.alicdn.com/tfs/TB1yopEdgoQMeJjy1XaXXcSsFXa-640-302.png',

            // 正常模式的tab title配置
            tabTitles: [{
                title: '首页',
                icon: 'https://gw.alicdn.com/tfs/TB1MWXdSpXXXXcmXXXXXXXXXXXX-72-72.png',
                activeIcon: 'https://gw.alicdn.com/tfs/TB1kCk2SXXXXXXFXFXXXXXXXXXX-72-72.png'
            }, {
                title: '特别推荐',
                icon: 'https://gw.alicdn.com/tfs/TB1ARoKSXXXXXc9XVXXXXXXXXXX-72-72.png',
                activeIcon: 'https://gw.alicdn.com/tfs/TB19Z72SXXXXXamXFXXXXXXXXXX-72-72.png'
            }, {
                title: '消息中心',
                icon: 'https://gw.alicdn.com/tfs/TB1VKMISXXXXXbyaXXXXXXXXXXX-72-72.png',
                activeIcon: 'https://gw.alicdn.com/tfs/TB1aTgZSXXXXXazXFXXXXXXXXXX-72-72.png',
                badge: 5
            }, {
                title: '我的主页',
                icon: 'https://gw.alicdn.com/tfs/TB1Do3tSXXXXXXMaFXXXXXXXXXX-72-72.png',
                activeIcon: 'https://gw.alicdn.com/tfs/TB1LiNhSpXXXXaWXXXXXXXXXXXX-72-72.png',
                dot: true
            }],
            tabStyles: {
                bgColor: '#FFFFFF',
                titleColor: '#666666',
                activeTitleColor: '#3D3D3D',
                activeBgColor: '#FFFFFF',
                isActiveTitleBold: true,
                iconWidth: 70,
                iconHeight: 70,
                width: 160,
                height: 120,
                fontSize: 24,
                textPaddingLeft: 10,
                textPaddingRight: 10
            },
            // 使用 iconFont 模式的tab title配置
            tabIconFontTitles: [{
                title: '首页',
                codePoint: '\uE623'
            }, {
                title: '特别推荐',
                codePoint: '\uE608'
            }, {
                title: '消息中心',
                codePoint: '\uE752',
                badge: 5
            }, {
                title: '我的主页',
                codePoint: '\uE601',
                dot: true
            }],
            tabIconFontStyles: {
                bgColor: '#FFFFFF',
                titleColor: '#666666',
                activeTitleColor: '#3D3D3D',
                activeBgColor: '#FFFFFF',
                isActiveTitleBold: true,
                width: 160,
                height: 120,
                fontSize: 24,
                textPaddingLeft: 10,
                textPaddingRight: 10,
                iconFontSize: 50,
                iconFontColor: '#333333',
                activeIconFontColor: 'red',
                iconFontUrl: 'http://at.alicdn.com/t/font_501019_mauqv15evc1pp66r.ttf'
            }
        };
    },
    created: function created() {
        // setTitle('TabBar');
        var tabPageHeight = _utils2.default.env.getPageHeight();
        var tabStyles = this.tabStyles;

        this.contentStyle = { height: tabPageHeight - tabStyles.height + 'px' };
    },

    methods: {
        wxcTabBarCurrentTabSelected: function wxcTabBarCurrentTabSelected(e) {
            var index = e.page;
            // console.log(index);
        }
    }
}; //
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

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var required = __webpack_require__(15),
    qs = __webpack_require__(16),
    protocolre = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\S\s]*)/i,
    slashes = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//;

/**
 * These are the parse rules for the URL parser, it informs the parser
 * about:
 *
 * 0. The char it Needs to parse, if it's a string it should be done using
 *    indexOf, RegExp using exec and NaN means set as current value.
 * 1. The property we should set when parsing this value.
 * 2. Indication if it's backwards or forward parsing, when set as number it's
 *    the value of extra chars that should be split off.
 * 3. Inherit from location if non existing in the parser.
 * 4. `toLowerCase` the resulting value.
 */
var rules = [['#', 'hash'], // Extract from the back.
['?', 'query'], // Extract from the back.
['/', 'pathname'], // Extract from the back.
['@', 'auth', 1], // Extract from the front.
[NaN, 'host', undefined, 1, 1], // Set left over value.
[/:(\d+)$/, 'port', undefined, 1], // RegExp the back.
[NaN, 'hostname', undefined, 1, 1] // Set left over.
];

/**
 * These properties should not be copied or inherited from. This is only needed
 * for all non blob URL's as a blob URL does not include a hash, only the
 * origin.
 *
 * @type {Object}
 * @private
 */
var ignore = { hash: 1, query: 1 };

/**
 * The location object differs when your code is loaded through a normal page,
 * Worker or through a worker using a blob. And with the blobble begins the
 * trouble as the location object will contain the URL of the blob, not the
 * location of the page where our code is loaded in. The actual origin is
 * encoded in the `pathname` so we can thankfully generate a good "default"
 * location from it so we can generate proper relative URL's again.
 *
 * @param {Object|String} loc Optional default location object.
 * @returns {Object} lolcation object.
 * @api public
 */
function lolcation(loc) {
  loc = loc || global.location || {};

  var finaldestination = {},
      type = typeof loc === 'undefined' ? 'undefined' : _typeof(loc),
      key;

  if ('blob:' === loc.protocol) {
    finaldestination = new URL(unescape(loc.pathname), {});
  } else if ('string' === type) {
    finaldestination = new URL(loc, {});
    for (key in ignore) {
      delete finaldestination[key];
    }
  } else if ('object' === type) {
    for (key in loc) {
      if (key in ignore) continue;
      finaldestination[key] = loc[key];
    }

    if (finaldestination.slashes === undefined) {
      finaldestination.slashes = slashes.test(loc.href);
    }
  }

  return finaldestination;
}

/**
 * @typedef ProtocolExtract
 * @type Object
 * @property {String} protocol Protocol matched in the URL, in lowercase.
 * @property {Boolean} slashes `true` if protocol is followed by "//", else `false`.
 * @property {String} rest Rest of the URL that is not part of the protocol.
 */

/**
 * Extract protocol information from a URL with/without double slash ("//").
 *
 * @param {String} address URL we want to extract from.
 * @return {ProtocolExtract} Extracted information.
 * @api private
 */
function extractProtocol(address) {
  var match = protocolre.exec(address);

  return {
    protocol: match[1] ? match[1].toLowerCase() : '',
    slashes: !!match[2],
    rest: match[3]
  };
}

/**
 * Resolve a relative URL pathname against a base URL pathname.
 *
 * @param {String} relative Pathname of the relative URL.
 * @param {String} base Pathname of the base URL.
 * @return {String} Resolved pathname.
 * @api private
 */
function resolve(relative, base) {
  var path = (base || '/').split('/').slice(0, -1).concat(relative.split('/')),
      i = path.length,
      last = path[i - 1],
      unshift = false,
      up = 0;

  while (i--) {
    if (path[i] === '.') {
      path.splice(i, 1);
    } else if (path[i] === '..') {
      path.splice(i, 1);
      up++;
    } else if (up) {
      if (i === 0) unshift = true;
      path.splice(i, 1);
      up--;
    }
  }

  if (unshift) path.unshift('');
  if (last === '.' || last === '..') path.push('');

  return path.join('/');
}

/**
 * The actual URL instance. Instead of returning an object we've opted-in to
 * create an actual constructor as it's much more memory efficient and
 * faster and it pleases my OCD.
 *
 * @constructor
 * @param {String} address URL we want to parse.
 * @param {Object|String} location Location defaults for relative paths.
 * @param {Boolean|Function} parser Parser for the query string.
 * @api public
 */
function URL(address, location, parser) {
  if (!(this instanceof URL)) {
    return new URL(address, location, parser);
  }

  var relative,
      extracted,
      parse,
      instruction,
      index,
      key,
      instructions = rules.slice(),
      type = typeof location === 'undefined' ? 'undefined' : _typeof(location),
      url = this,
      i = 0;

  //
  // The following if statements allows this module two have compatibility with
  // 2 different API:
  //
  // 1. Node.js's `url.parse` api which accepts a URL, boolean as arguments
  //    where the boolean indicates that the query string should also be parsed.
  //
  // 2. The `URL` interface of the browser which accepts a URL, object as
  //    arguments. The supplied object will be used as default values / fall-back
  //    for relative paths.
  //
  if ('object' !== type && 'string' !== type) {
    parser = location;
    location = null;
  }

  if (parser && 'function' !== typeof parser) parser = qs.parse;

  location = lolcation(location);

  //
  // Extract protocol information before running the instructions.
  //
  extracted = extractProtocol(address || '');
  relative = !extracted.protocol && !extracted.slashes;
  url.slashes = extracted.slashes || relative && location.slashes;
  url.protocol = extracted.protocol || location.protocol || '';
  address = extracted.rest;

  //
  // When the authority component is absent the URL starts with a path
  // component.
  //
  if (!extracted.slashes) instructions[2] = [/(.*)/, 'pathname'];

  for (; i < instructions.length; i++) {
    instruction = instructions[i];
    parse = instruction[0];
    key = instruction[1];

    if (parse !== parse) {
      url[key] = address;
    } else if ('string' === typeof parse) {
      if (~(index = address.indexOf(parse))) {
        if ('number' === typeof instruction[2]) {
          url[key] = address.slice(0, index);
          address = address.slice(index + instruction[2]);
        } else {
          url[key] = address.slice(index);
          address = address.slice(0, index);
        }
      }
    } else if (index = parse.exec(address)) {
      url[key] = index[1];
      address = address.slice(0, index.index);
    }

    url[key] = url[key] || (relative && instruction[3] ? location[key] || '' : '');

    //
    // Hostname, host and protocol should be lowercased so they can be used to
    // create a proper `origin`.
    //
    if (instruction[4]) url[key] = url[key].toLowerCase();
  }

  //
  // Also parse the supplied query string in to an object. If we're supplied
  // with a custom parser as function use that instead of the default build-in
  // parser.
  //
  if (parser) url.query = parser(url.query);

  //
  // If the URL is relative, resolve the pathname against the base URL.
  //
  if (relative && location.slashes && url.pathname.charAt(0) !== '/' && (url.pathname !== '' || location.pathname !== '')) {
    url.pathname = resolve(url.pathname, location.pathname);
  }

  //
  // We should not add port numbers if they are already the default port number
  // for a given protocol. As the host also contains the port number we're going
  // override it with the hostname which contains no port number.
  //
  if (!required(url.port, url.protocol)) {
    url.host = url.hostname;
    url.port = '';
  }

  //
  // Parse down the `auth` for the username and password.
  //
  url.username = url.password = '';
  if (url.auth) {
    instruction = url.auth.split(':');
    url.username = instruction[0] || '';
    url.password = instruction[1] || '';
  }

  url.origin = url.protocol && url.host && url.protocol !== 'file:' ? url.protocol + '//' + url.host : 'null';

  //
  // The href is just the compiled result.
  //
  url.href = url.toString();
}

/**
 * This is convenience method for changing properties in the URL instance to
 * insure that they all propagate correctly.
 *
 * @param {String} part          Property we need to adjust.
 * @param {Mixed} value          The newly assigned value.
 * @param {Boolean|Function} fn  When setting the query, it will be the function
 *                               used to parse the query.
 *                               When setting the protocol, double slash will be
 *                               removed from the final url if it is true.
 * @returns {URL}
 * @api public
 */
function set(part, value, fn) {
  var url = this;

  switch (part) {
    case 'query':
      if ('string' === typeof value && value.length) {
        value = (fn || qs.parse)(value);
      }

      url[part] = value;
      break;

    case 'port':
      url[part] = value;

      if (!required(value, url.protocol)) {
        url.host = url.hostname;
        url[part] = '';
      } else if (value) {
        url.host = url.hostname + ':' + value;
      }

      break;

    case 'hostname':
      url[part] = value;

      if (url.port) value += ':' + url.port;
      url.host = value;
      break;

    case 'host':
      url[part] = value;

      if (/:\d+$/.test(value)) {
        value = value.split(':');
        url.port = value.pop();
        url.hostname = value.join(':');
      } else {
        url.hostname = value;
        url.port = '';
      }

      break;

    case 'protocol':
      url.protocol = value.toLowerCase();
      url.slashes = !fn;
      break;

    case 'pathname':
    case 'hash':
      if (value) {
        var char = part === 'pathname' ? '/' : '#';
        url[part] = value.charAt(0) !== char ? char + value : value;
      } else {
        url[part] = value;
      }
      break;

    default:
      url[part] = value;
  }

  for (var i = 0; i < rules.length; i++) {
    var ins = rules[i];

    if (ins[4]) url[ins[1]] = url[ins[1]].toLowerCase();
  }

  url.origin = url.protocol && url.host && url.protocol !== 'file:' ? url.protocol + '//' + url.host : 'null';

  url.href = url.toString();

  return url;
}

/**
 * Transform the properties back in to a valid and full URL string.
 *
 * @param {Function} stringify Optional query stringify function.
 * @returns {String}
 * @api public
 */
function toString(stringify) {
  if (!stringify || 'function' !== typeof stringify) stringify = qs.stringify;

  var query,
      url = this,
      protocol = url.protocol;

  if (protocol && protocol.charAt(protocol.length - 1) !== ':') protocol += ':';

  var result = protocol + (url.slashes ? '//' : '');

  if (url.username) {
    result += url.username;
    if (url.password) result += ':' + url.password;
    result += '@';
  }

  result += url.host + url.pathname;

  query = 'object' === _typeof(url.query) ? stringify(url.query) : url.query;
  if (query) result += '?' !== query.charAt(0) ? '?' + query : query;

  if (url.hash) result += url.hash;

  return result;
}

URL.prototype = { set: set, toString: toString };

//
// Expose the URL parser and some additional properties that might be useful for
// others or testing.
//
URL.extractProtocol = extractProtocol;
URL.location = lolcation;
URL.qs = qs;

module.exports = URL;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Check if we're required to add a port number.
 *
 * @see https://url.spec.whatwg.org/#default-port
 * @param {Number|String} port Port number we need to check
 * @param {String} protocol Protocol we need to check against.
 * @returns {Boolean} Is it a default port for the given protocol
 * @api private
 */

module.exports = function required(port, protocol) {
  protocol = protocol.split(':')[0];
  port = +port;

  if (!port) return false;

  switch (protocol) {
    case 'http':
    case 'ws':
      return port !== 80;

    case 'https':
    case 'wss':
      return port !== 443;

    case 'ftp':
      return port !== 21;

    case 'gopher':
      return port !== 70;

    case 'file':
      return false;
  }

  return port !== 0;
};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var has = Object.prototype.hasOwnProperty;

/**
 * Decode a URI encoded string.
 *
 * @param {String} input The URI encoded string.
 * @returns {String} The decoded string.
 * @api private
 */
function decode(input) {
  return decodeURIComponent(input.replace(/\+/g, ' '));
}

/**
 * Simple query string parser.
 *
 * @param {String} query The query string that needs to be parsed.
 * @returns {Object}
 * @api public
 */
function querystring(query) {
  var parser = /([^=?&]+)=?([^&]*)/g,
      result = {},
      part;

  //
  // Little nifty parsing hack, leverage the fact that RegExp.exec increments
  // the lastIndex property so we can continue executing this loop until we've
  // parsed all results.
  //
  for (; part = parser.exec(query); result[decode(part[1])] = decode(part[2])) {}

  return result;
}

/**
 * Transform a query string to an object.
 *
 * @param {Object} obj Object that should be transformed.
 * @param {String} prefix Optional prefix.
 * @returns {String}
 * @api public
 */
function querystringify(obj, prefix) {
  prefix = prefix || '';

  var pairs = [];

  //
  // Optionally prefix with a '?' if needed
  //
  if ('string' !== typeof prefix) prefix = '?';

  for (var key in obj) {
    if (has.call(obj, key)) {
      pairs.push(encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]));
    }
  }

  return pairs.length ? prefix + pairs.join('&') : '';
}

//
// Expose the module.
//
exports.stringify = querystringify;
exports.parse = querystring;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(18);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(19)
)

/* script */
__vue_exports__ = __webpack_require__(20)

/* template */
var __vue_template__ = __webpack_require__(21)
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
__vue_options__.__file = "D:\\qscwork\\weexwallet\\node_modules\\weex-ui\\packages\\wxc-tab-bar\\index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-9d707596"
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
/* 19 */
/***/ (function(module, exports) {

module.exports = {
  "wxc-tab-page": {
    "position": "absolute",
    "top": 0,
    "left": 0,
    "right": 0,
    "bottom": 0
  },
  "tab-title-list": {
    "flexDirection": "row",
    "justifyContent": "space-around"
  },
  "title-item": {
    "justifyContent": "center",
    "alignItems": "center",
    "borderBottomStyle": "solid"
  },
  "tab-page-wrap": {
    "width": "750",
    "flex": 1,
    "overflow": "hidden"
  },
  "tab-container": {
    "flex": 1,
    "flexDirection": "row",
    "position": "absolute"
  },
  "tab-text": {
    "lines": 1,
    "textOverflow": "ellipsis"
  },
  "desc-tag": {
    "position": "absolute",
    "top": "10",
    "right": "20",
    "borderBottomRightRadius": "14",
    "borderBottomLeftRadius": 0,
    "borderTopLeftRadius": "14",
    "borderTopRightRadius": "14",
    "backgroundColor": "#FF5E00",
    "height": "26",
    "alignItems": "center",
    "justifyContent": "center",
    "paddingLeft": "6",
    "paddingRight": "6"
  },
  "dot": {
    "width": "12",
    "height": "12",
    "borderBottomRightRadius": "12",
    "borderBottomLeftRadius": "12",
    "borderTopLeftRadius": "12",
    "borderTopRightRadius": "12",
    "position": "absolute",
    "top": "10",
    "right": "40",
    "backgroundColor": "#FF5E00"
  },
  "desc-text": {
    "fontSize": "18",
    "color": "#ffffff"
  },
  "icon-font": {
    "marginBottom": "8"
  }
}

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = __webpack_require__(8);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
//
//

var dom = weex.requireModule('dom');
var animation = weex.requireModule('animation');
exports.default = {
  props: {
    tabTitles: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    tabStyles: {
      type: Object,
      default: function _default() {
        return {
          bgColor: '#FFFFFF',
          titleColor: '#666666',
          activeTitleColor: '#3D3D3D',
          activeBgColor: '#FFFFFF',
          isActiveTitleBold: true,
          iconWidth: 70,
          iconHeight: 70,
          width: 160,
          height: 120,
          fontSize: 24,
          activeBottomColor: '#FFC900',
          activeBottomWidth: 120,
          activeBottomHeight: 6,
          textPaddingLeft: 10,
          textPaddingRight: 10
        };
      }
    },
    titleType: {
      type: String,
      default: 'icon'
    },
    titleUseSlot: {
      type: Boolean,
      default: false
    },
    isTabView: {
      type: Boolean,
      default: true
    },
    duration: {
      type: [Number, String],
      default: 300
    },
    timingFunction: {
      type: String,
      default: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
    },
    wrapBgColor: {
      type: String,
      default: '#f2f3f4'
    }
  },
  data: function data() {
    return {
      currentPage: 0,
      translateX: 0
    };
  },
  created: function created() {
    var titleType = this.titleType,
        tabStyles = this.tabStyles;

    if (titleType === 'iconFont' && tabStyles.iconFontUrl) {
      dom.addRule('fontFace', {
        'fontFamily': "wxcIconFont",
        'src': 'url(\'' + tabStyles.iconFontUrl + '\')'
      });
    }
    this.isIPhoneX = _utils2.default.env.isIPhoneX();
  },

  methods: {
    next: function next() {
      var page = this.currentPage;
      if (page < this.tabTitles.length - 1) {
        page++;
      }
      this.setPage(page);
    },
    prev: function prev() {
      var page = this.currentPage;
      if (page > 0) {
        page--;
      }
      this.setPage(page);
    },
    setPage: function setPage(page) {
      var url = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var animated = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

      if (!this.isTabView) {
        this.jumpOut(url);
        return;
      }
      var previousPage = this.currentPage;
      var currentTabEl = this.$refs['wxc-tab-title-' + page][0];
      var width = this.tabStyles.width;

      var appearNum = parseInt(750 / width);
      var tabsNum = this.tabTitles.length;
      var offset = page > appearNum ? -(750 - width) / 2 : -width * 2;

      if (appearNum < tabsNum) {
        (previousPage > appearNum || page > 1) && dom.scrollToElement(currentTabEl, {
          offset: offset, animated: animated
        });

        page <= 1 && previousPage > page && dom.scrollToElement(currentTabEl, {
          offset: -width * page,
          animated: animated
        });
      }

      this.currentPage = page;
      this._animateTransformX(page, animated);
      this.$emit('wxcTabBarCurrentTabSelected', { page: page });
    },
    jumpOut: function jumpOut(url) {
      url && _utils2.default.goToH5Page(url);
    },
    _animateTransformX: function _animateTransformX(page, animated) {
      var duration = this.duration,
          timingFunction = this.timingFunction;

      var computedDur = animated ? duration : 0.00001;
      var containerEl = this.$refs['tab-container'];
      var dist = page * 750;
      animation.transition(containerEl, {
        styles: {
          transform: 'translateX(' + -dist + 'px)'
        },
        duration: computedDur,
        timingFunction: timingFunction,
        delay: 0
      }, function () {});
    }
  }
};

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wxc-tab-page"],
    style: {
      backgroundColor: _vm.wrapBgColor
    }
  }, [_c('div', {
    ref: "tab-page-wrap",
    staticClass: ["tab-page-wrap"]
  }, [_c('div', {
    ref: "tab-container",
    staticClass: ["tab-container"]
  }, [_vm._t("default")], 2)]), _c('div', {
    staticClass: ["tab-title-list"],
    style: {
      backgroundColor: _vm.tabStyles.bgColor,
      height: (_vm.tabStyles.height + (_vm.isIPhoneX ? 78 : 0)) + 'px',
      paddingBottom: _vm.isIPhoneX ? '78px' : '0'
    }
  }, _vm._l((_vm.tabTitles), function(v, index) {
    return _c('div', {
      key: index,
      ref: 'wxc-tab-title-' + index,
      refInFor: true,
      staticClass: ["title-item"],
      style: {
        width: _vm.tabStyles.width + 'px',
        height: _vm.tabStyles.height + 'px',
        backgroundColor: _vm.currentPage == index ? _vm.tabStyles.activeBgColor : _vm.tabStyles.bgColor
      },
      attrs: {
        "accessible": true,
        "ariaLabel": ("" + (v.title?v.title:'标签'+index))
      },
      on: {
        "click": function($event) {
          _vm.setPage(index, v.url)
        }
      }
    }, [(_vm.titleType === 'icon' && !_vm.titleUseSlot) ? _c('image', {
      style: {
        width: _vm.tabStyles.iconWidth + 'px',
        height: _vm.tabStyles.iconHeight + 'px'
      },
      attrs: {
        "src": _vm.currentPage == index ? v.activeIcon : v.icon
      }
    }) : _vm._e(), (_vm.titleType === 'iconFont' && v.codePoint && !_vm.titleUseSlot) ? _c('text', {
      staticClass: ["icon-font"],
      style: {
        fontFamily: 'wxcIconFont',
        fontSize: _vm.tabStyles.iconFontSize + 'px',
        color: _vm.currentPage == index ? _vm.tabStyles.activeIconFontColor : _vm.tabStyles.iconFontColor
      }
    }, [_vm._v(_vm._s(v.codePoint))]) : _vm._e(), (!_vm.titleUseSlot) ? _c('text', {
      staticClass: ["tab-text"],
      style: {
        fontSize: _vm.tabStyles.fontSize + 'px',
        fontWeight: (_vm.currentPage == index && _vm.tabStyles.isActiveTitleBold) ? 'bold' : 'normal',
        color: _vm.currentPage == index ? _vm.tabStyles.activeTitleColor : _vm.tabStyles.titleColor,
        paddingLeft: _vm.tabStyles.textPaddingLeft + 'px',
        paddingRight: _vm.tabStyles.textPaddingRight + 'px'
      }
    }, [_vm._v(_vm._s(v.title))]) : _vm._e(), (v.badge && !_vm.titleUseSlot) ? _c('div', {
      staticClass: ["desc-tag"]
    }, [_c('text', {
      staticClass: ["desc-text"]
    }, [_vm._v(_vm._s(v.badge))])]) : _vm._e(), (v.dot && !v.badge && !_vm.titleUseSlot) ? _c('div', {
      staticClass: ["dot"]
    }) : _vm._e(), (_vm.titleUseSlot) ? _vm._t(("tab-title-" + index)) : _vm._e()], 2)
  }))])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 22 */
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


/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["ej-page"]
  }, [_c('navbar', {
    attrs: {
      "fixed": true,
      "mode": "light"
    }
  }, [_c('text', {
    attrs: {
      "slot": "center"
    },
    slot: "center"
  }, [_vm._v("标题")])]), _c('wxc-tab-bar', {
    attrs: {
      "tabTitles": _vm.tabTitles,
      "tabStyles": _vm.tabStyles,
      "titleType": "icon"
    },
    on: {
      "wxcTabBarCurrentTabSelected": _vm.wxcTabBarCurrentTabSelected
    }
  }, [_c('div', {
    staticClass: ["item-container"],
    style: _vm.contentStyle
  }, [_c('text', [_vm._v("首页")])]), _c('div', {
    staticClass: ["item-container"],
    style: _vm.contentStyle
  }, [_c('text', [_vm._v("特别推荐")])]), _c('div', {
    staticClass: ["item-container"],
    style: _vm.contentStyle
  }, [_c('text', [_vm._v("消息中心")])]), _c('div', {
    staticClass: ["item-container"],
    style: _vm.contentStyle
  }, [_c('text', [_vm._v("我的主页")])])])], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ })
/******/ ]);