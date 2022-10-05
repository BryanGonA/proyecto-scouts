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
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swr */ \"swr\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swr__WEBPACK_IMPORTED_MODULE_2__]);\nswr__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\nconst Logout = ()=>{\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{\n        localStorage.removeItem(\"auth_token\");\n        router.push(\"/login\");\n        (0,swr__WEBPACK_IMPORTED_MODULE_2__.mutate)(\"/api/auth/profile\");\n    }, []);\n    return null;\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Logout);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9sb2dvdXQudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUN5QztBQUNQO0FBQ007QUFDWDtBQUU3QixNQUFNRyxNQUFNLEdBQWEsSUFBTTtJQUUzQixNQUFNQyxNQUFNLEdBQUdILHNEQUFTLEVBQUU7SUFFMUJELGdEQUFTLENBQUMsSUFBTTtRQUNaSyxZQUFZLENBQUNDLFVBQVUsQ0FBQyxZQUFZLENBQUM7UUFDckNGLE1BQU0sQ0FBQ0csSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUNyQkwsMkNBQU0sQ0FBQyxtQkFBbUIsQ0FBQztJQUMvQixDQUFDLEVBQUUsRUFBRSxDQUFDO0lBQ04sT0FBUSxJQUFJLENBQUM7QUFDakIsQ0FBQztBQUVELGlFQUFlQyxNQUFNLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3BhZ2VzL2xvZ291dC50c3g/YTUxZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0UGFnZSB9IGZyb20gXCJuZXh0XCJcclxuaW1wb3J0ICd+L3N0eWxlcy9sb2dpbi9Mb2dpbi5tb2R1bGUuc2NzcydcclxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyBtdXRhdGUgfSBmcm9tIFwic3dyXCI7XHJcblxyXG5jb25zdCBMb2dvdXQ6IE5leHRQYWdlID0gKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcImF1dGhfdG9rZW5cIilcclxuICAgICAgICByb3V0ZXIucHVzaChcIi9sb2dpblwiKVxyXG4gICAgICAgIG11dGF0ZSgnL2FwaS9hdXRoL3Byb2ZpbGUnKVxyXG4gICAgfSwgW10pXHJcbiAgICByZXR1cm4gKG51bGwpXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvZ291dDsiXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlUm91dGVyIiwibXV0YXRlIiwiTG9nb3V0Iiwicm91dGVyIiwibG9jYWxTdG9yYWdlIiwicmVtb3ZlSXRlbSIsInB1c2giXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/logout.tsx\n");

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

module.exports = import("swr");;

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