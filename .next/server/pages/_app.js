/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "(pages-dir-node)/./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"(pages-dir-node)/./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nfunction App({ Component, pageProps: { session, ...pageProps } }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_auth_react__WEBPACK_IMPORTED_MODULE_2__.SessionProvider, {\n        session: session,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(InactivityHandler, {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\nongj\\\\Desktop\\\\FinalProject\\\\pages\\\\_app.tsx\",\n                lineNumber: 9,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\nongj\\\\Desktop\\\\FinalProject\\\\pages\\\\_app.tsx\",\n                lineNumber: 10,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\nongj\\\\Desktop\\\\FinalProject\\\\pages\\\\_app.tsx\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, this);\n}\nfunction InactivityHandler() {\n    const { data: session } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession)();\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)({\n        \"InactivityHandler.useEffect\": ()=>{\n            if (!session) return;\n            let logoutTimeout;\n            let warningTimeout;\n            const resetTimer = {\n                \"InactivityHandler.useEffect.resetTimer\": ()=>{\n                    clearTimeout(logoutTimeout);\n                    clearTimeout(warningTimeout);\n                    // ⏳ แจ้งเตือน 10 วินาทีก่อน logout\n                    warningTimeout = setTimeout({\n                        \"InactivityHandler.useEffect.resetTimer\": ()=>{\n                            alert(\"คุณไม่ได้ใช้งานระบบเป็นเวลา 50 วินาที ระบบจะทำการออกจากระบบอัตโนมัติในอีก 10 วินาที\");\n                        }\n                    }[\"InactivityHandler.useEffect.resetTimer\"], 50 * 1000); // เตือนตอน 50 วิ\n                    // 🔒 logout เมื่อครบ 60 วินาที\n                    logoutTimeout = setTimeout({\n                        \"InactivityHandler.useEffect.resetTimer\": ()=>{\n                            (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.signOut)();\n                        }\n                    }[\"InactivityHandler.useEffect.resetTimer\"], 60 * 1000);\n                }\n            }[\"InactivityHandler.useEffect.resetTimer\"];\n            const events = [\n                \"mousemove\",\n                \"keydown\",\n                \"click\",\n                \"scroll\"\n            ];\n            events.forEach({\n                \"InactivityHandler.useEffect\": (event)=>window.addEventListener(event, resetTimer)\n            }[\"InactivityHandler.useEffect\"]);\n            resetTimer();\n            return ({\n                \"InactivityHandler.useEffect\": ()=>{\n                    events.forEach({\n                        \"InactivityHandler.useEffect\": (event)=>window.removeEventListener(event, resetTimer)\n                    }[\"InactivityHandler.useEffect\"]);\n                    clearTimeout(logoutTimeout);\n                    clearTimeout(warningTimeout);\n                }\n            })[\"InactivityHandler.useEffect\"];\n        }\n    }[\"InactivityHandler.useEffect\"], [\n        session\n    ]);\n    return null;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL3BhZ2VzL19hcHAudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBK0I7QUFDd0M7QUFFckM7QUFFbkIsU0FBU0ksSUFBSSxFQUFFQyxTQUFTLEVBQUVDLFdBQVcsRUFBRUMsT0FBTyxFQUFFLEdBQUdELFdBQVcsRUFBWTtJQUN2RixxQkFDRSw4REFBQ04sNERBQWVBO1FBQUNPLFNBQVNBOzswQkFDeEIsOERBQUNDOzs7OzswQkFDRCw4REFBQ0g7Z0JBQVcsR0FBR0MsU0FBUzs7Ozs7Ozs7Ozs7O0FBRzlCO0FBRUEsU0FBU0U7SUFDUCxNQUFNLEVBQUVDLE1BQU1GLE9BQU8sRUFBRSxHQUFHTCwyREFBVUE7SUFFcENDLGdEQUFTQTt1Q0FBQztZQUNSLElBQUksQ0FBQ0ksU0FBUztZQUVkLElBQUlHO1lBQ0osSUFBSUM7WUFFSixNQUFNQzswREFBYTtvQkFDakJDLGFBQWFIO29CQUNiRyxhQUFhRjtvQkFFYixtQ0FBbUM7b0JBQ25DQSxpQkFBaUJHO2tFQUFXOzRCQUMxQkMsTUFBTTt3QkFDUjtpRUFBRyxLQUFLLE9BQU8saUJBQWlCO29CQUVoQywrQkFBK0I7b0JBQy9CTCxnQkFBZ0JJO2tFQUFXOzRCQUN6QmIsd0RBQU9BO3dCQUNUO2lFQUFHLEtBQUs7Z0JBQ1Y7O1lBRUEsTUFBTWUsU0FBUztnQkFBQztnQkFBYTtnQkFBVztnQkFBUzthQUFTO1lBQzFEQSxPQUFPQyxPQUFPOytDQUFDLENBQUNDLFFBQVVDLE9BQU9DLGdCQUFnQixDQUFDRixPQUFPTjs7WUFFekRBO1lBRUE7K0NBQU87b0JBQ0xJLE9BQU9DLE9BQU87dURBQUMsQ0FBQ0MsUUFBVUMsT0FBT0UsbUJBQW1CLENBQUNILE9BQU9OOztvQkFDNURDLGFBQWFIO29CQUNiRyxhQUFhRjtnQkFDZjs7UUFDRjtzQ0FBRztRQUFDSjtLQUFRO0lBRVosT0FBTztBQUNUIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXG5vbmdqXFxEZXNrdG9wXFxGaW5hbFByb2plY3RcXHBhZ2VzXFxfYXBwLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCIuLi9zdHlsZXMvZ2xvYmFscy5jc3NcIjtcbmltcG9ydCB7IFNlc3Npb25Qcm92aWRlciwgc2lnbk91dCwgdXNlU2Vzc2lvbiB9IGZyb20gXCJuZXh0LWF1dGgvcmVhY3RcIjtcbmltcG9ydCB0eXBlIHsgQXBwUHJvcHMgfSBmcm9tIFwibmV4dC9hcHBcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wczogeyBzZXNzaW9uLCAuLi5wYWdlUHJvcHMgfSB9OiBBcHBQcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxTZXNzaW9uUHJvdmlkZXIgc2Vzc2lvbj17c2Vzc2lvbn0+XG4gICAgICA8SW5hY3Rpdml0eUhhbmRsZXIgLz5cbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICA8L1Nlc3Npb25Qcm92aWRlcj5cbiAgKTtcbn1cblxuZnVuY3Rpb24gSW5hY3Rpdml0eUhhbmRsZXIoKSB7XG4gIGNvbnN0IHsgZGF0YTogc2Vzc2lvbiB9ID0gdXNlU2Vzc2lvbigpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFzZXNzaW9uKSByZXR1cm47XG5cbiAgICBsZXQgbG9nb3V0VGltZW91dDogTm9kZUpTLlRpbWVvdXQ7XG4gICAgbGV0IHdhcm5pbmdUaW1lb3V0OiBOb2RlSlMuVGltZW91dDtcblxuICAgIGNvbnN0IHJlc2V0VGltZXIgPSAoKSA9PiB7XG4gICAgICBjbGVhclRpbWVvdXQobG9nb3V0VGltZW91dCk7XG4gICAgICBjbGVhclRpbWVvdXQod2FybmluZ1RpbWVvdXQpO1xuXG4gICAgICAvLyDij7Mg4LmB4LiI4LmJ4LiH4LmA4LiV4Li34Lit4LiZIDEwIOC4p+C4tOC4meC4suC4l+C4teC4geC5iOC4reC4mSBsb2dvdXRcbiAgICAgIHdhcm5pbmdUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGFsZXJ0KFwi4LiE4Li44LiT4LmE4Lih4LmI4LmE4LiU4LmJ4LmD4LiK4LmJ4LiH4Liy4LiZ4Lij4Liw4Lia4Lia4LmA4Lib4LmH4LiZ4LmA4Lin4Lil4LiyIDUwIOC4p+C4tOC4meC4suC4l+C4tSDguKPguLDguJrguJrguIjguLDguJfguLPguIHguLLguKPguK3guK3guIHguIjguLLguIHguKPguLDguJrguJrguK3guLHguJXguYLguJnguKHguLHguJXguLTguYPguJnguK3guLXguIEgMTAg4Lin4Li04LiZ4Liy4LiX4Li1XCIpO1xuICAgICAgfSwgNTAgKiAxMDAwKTsgLy8g4LmA4LiV4Li34Lit4LiZ4LiV4Lit4LiZIDUwIOC4p+C4tFxuXG4gICAgICAvLyDwn5SSIGxvZ291dCDguYDguKHguLfguYjguK3guITguKPguJogNjAg4Lin4Li04LiZ4Liy4LiX4Li1XG4gICAgICBsb2dvdXRUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHNpZ25PdXQoKTtcbiAgICAgIH0sIDYwICogMTAwMCk7XG4gICAgfTtcblxuICAgIGNvbnN0IGV2ZW50cyA9IFtcIm1vdXNlbW92ZVwiLCBcImtleWRvd25cIiwgXCJjbGlja1wiLCBcInNjcm9sbFwiXTtcbiAgICBldmVudHMuZm9yRWFjaCgoZXZlbnQpID0+IHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCByZXNldFRpbWVyKSk7XG5cbiAgICByZXNldFRpbWVyKCk7XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgZXZlbnRzLmZvckVhY2goKGV2ZW50KSA9PiB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudCwgcmVzZXRUaW1lcikpO1xuICAgICAgY2xlYXJUaW1lb3V0KGxvZ291dFRpbWVvdXQpO1xuICAgICAgY2xlYXJUaW1lb3V0KHdhcm5pbmdUaW1lb3V0KTtcbiAgICB9O1xuICB9LCBbc2Vzc2lvbl0pO1xuXG4gIHJldHVybiBudWxsO1xufVxuIl0sIm5hbWVzIjpbIlNlc3Npb25Qcm92aWRlciIsInNpZ25PdXQiLCJ1c2VTZXNzaW9uIiwidXNlRWZmZWN0IiwiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwic2Vzc2lvbiIsIkluYWN0aXZpdHlIYW5kbGVyIiwiZGF0YSIsImxvZ291dFRpbWVvdXQiLCJ3YXJuaW5nVGltZW91dCIsInJlc2V0VGltZXIiLCJjbGVhclRpbWVvdXQiLCJzZXRUaW1lb3V0IiwiYWxlcnQiLCJldmVudHMiLCJmb3JFYWNoIiwiZXZlbnQiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(pages-dir-node)/./pages/_app.tsx\n");

/***/ }),

/***/ "(pages-dir-node)/./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "next-auth/react":
/*!**********************************!*\
  !*** external "next-auth/react" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("next-auth/react");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(pages-dir-node)/./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();