"use strict";
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
exports.id = "pages/logout";
exports.ids = ["pages/logout"];
exports.modules = {

/***/ "./pages/logout.tsx":
/*!**************************!*\
  !*** ./pages/logout.tsx ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swr */ \"swr\");\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(swr__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nconst Logout = ()=>{\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{\n        localStorage.removeItem(\"auth_token\");\n        router.push(\"/login\");\n        (0,swr__WEBPACK_IMPORTED_MODULE_2__.mutate)(\"/api/auth/profile\");\n    }, []);\n    return null;\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Logout);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9sb2dvdXQudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDeUM7QUFDUDtBQUNNO0FBQ1g7QUFFN0IsTUFBTUcsTUFBTSxHQUFhLElBQU07SUFFM0IsTUFBTUMsTUFBTSxHQUFHSCxzREFBUyxFQUFFO0lBRTFCRCxnREFBUyxDQUFDLElBQU07UUFDWkssWUFBWSxDQUFDQyxVQUFVLENBQUMsWUFBWSxDQUFDO1FBQ3JDRixNQUFNLENBQUNHLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDckJMLDJDQUFNLENBQUMsbUJBQW1CLENBQUM7SUFDL0IsQ0FBQyxFQUFFLEVBQUUsQ0FBQztJQUNOLE9BQVEsSUFBSSxDQUFDO0FBQ2pCLENBQUM7QUFFRCxpRUFBZUMsTUFBTSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9wYWdlcy9sb2dvdXQudHN4P2E1MWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dFBhZ2UgfSBmcm9tIFwibmV4dFwiXHJcbmltcG9ydCAnfi9zdHlsZXMvbG9naW4vTG9naW4ubW9kdWxlLnNjc3MnXHJcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgbXV0YXRlIH0gZnJvbSBcInN3clwiO1xyXG5cclxuY29uc3QgTG9nb3V0OiBOZXh0UGFnZSA9ICgpID0+IHtcclxuXHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJhdXRoX3Rva2VuXCIpXHJcbiAgICAgICAgcm91dGVyLnB1c2goXCIvbG9naW5cIilcclxuICAgICAgICBtdXRhdGUoJy9hcGkvYXV0aC9wcm9maWxlJylcclxuICAgIH0sIFtdKVxyXG4gICAgcmV0dXJuIChudWxsKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2dvdXQ7Il0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVJvdXRlciIsIm11dGF0ZSIsIkxvZ291dCIsInJvdXRlciIsImxvY2FsU3RvcmFnZSIsInJlbW92ZUl0ZW0iLCJwdXNoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/logout.tsx\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "swr":
/*!**********************!*\
  !*** external "swr" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("swr");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/logout.tsx"));
module.exports = __webpack_exports__;

})();