"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/layout/header/HeaderNavigation.tsx":
/*!*******************************************************!*\
  !*** ./components/layout/header/HeaderNavigation.tsx ***!
  \*******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ HeaderNavigation; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_sliced_to_array.mjs */ \"./node_modules/@swc/helpers/src/_sliced_to_array.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_layout_Header_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ~/styles/layout/Header.module.scss */ \"./styles/layout/Header.module.scss\");\n/* harmony import */ var _styles_layout_Header_module_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_layout_Header_module_scss__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-cookie */ \"./node_modules/react-cookie/es6/index.js\");\n\n\n\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction HeaderNavigation(param) {\n    var children = param.children;\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    var navBar = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    var button = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), active = ref[0], setActive = ref[1];\n    var ref1 = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])((0,react_cookie__WEBPACK_IMPORTED_MODULE_5__.useCookies)([\n        \"visited\"\n    ]), 2), cookies = ref1[0], setCookie = ref1[1];\n    var onClick = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(function() {\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(this, function(_state) {\n                setActive(!active);\n                return [\n                    2\n                ];\n            });\n        });\n        return function onClick() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (active) {\n            document.body.className = \"scroll\";\n            button.current.className = \"\".concat((_styles_layout_Header_module_scss__WEBPACK_IMPORTED_MODULE_8___default().checkbtn), \" hamburger hamburger--slider is-active\");\n        } else {\n            if (cookies.visited ? cookies.visited : false) {\n                document.body.className = \"\";\n            }\n            button.current.className = \"\".concat((_styles_layout_Header_module_scss__WEBPACK_IMPORTED_MODULE_8___default().checkbtn), \" hamburger hamburger--slider\");\n        }\n        var handleRouteChange = function(url) {\n            if (url !== \"/ramas\") {\n                setActive(false);\n            }\n        };\n        router.events.on(\"routeChangeStart\", handleRouteChange);\n        // If the component is unmounted, unsubscribe\n        // from the event with the `off` method:\n        return function() {\n            router.events.off(\"routeChangeStart\", handleRouteChange);\n        };\n    }, [\n        active\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        className: (_styles_layout_Header_module_scss__WEBPACK_IMPORTED_MODULE_8___default().nav),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"\".concat((_styles_layout_Header_module_scss__WEBPACK_IMPORTED_MODULE_8___default().checkbtn), \" hamburger hamburger--slider\"),\n                onClick: onClick,\n                ref: button,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    className: \"hamburger-box\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"hamburger-inner\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Cristian Enriquez\\\\Escritorio\\\\PY2\\\\FRONT SCOUT\\\\proyecto-scouts\\\\components\\\\layout\\\\header\\\\HeaderNavigation.tsx\",\n                        lineNumber: 45,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"D:\\\\Cristian Enriquez\\\\Escritorio\\\\PY2\\\\FRONT SCOUT\\\\proyecto-scouts\\\\components\\\\layout\\\\header\\\\HeaderNavigation.tsx\",\n                    lineNumber: 44,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\Cristian Enriquez\\\\Escritorio\\\\PY2\\\\FRONT SCOUT\\\\proyecto-scouts\\\\components\\\\layout\\\\header\\\\HeaderNavigation.tsx\",\n                lineNumber: 43,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                href: \"/\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    className: (_styles_layout_Header_module_scss__WEBPACK_IMPORTED_MODULE_8___default().logo),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: \"/img/pa\\xf1oleta.png\",\n                            alt: \"Pa\\xf1oleta\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Cristian Enriquez\\\\Escritorio\\\\PY2\\\\FRONT SCOUT\\\\proyecto-scouts\\\\components\\\\layout\\\\header\\\\HeaderNavigation.tsx\",\n                            lineNumber: 51,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: \"/img/logo.png\",\n                            alt: \"Logo 113\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Cristian Enriquez\\\\Escritorio\\\\PY2\\\\FRONT SCOUT\\\\proyecto-scouts\\\\components\\\\layout\\\\header\\\\HeaderNavigation.tsx\",\n                            lineNumber: 52,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: \"/img/ACE.png\",\n                            alt: \"ACE\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Cristian Enriquez\\\\Escritorio\\\\PY2\\\\FRONT SCOUT\\\\proyecto-scouts\\\\components\\\\layout\\\\header\\\\HeaderNavigation.tsx\",\n                            lineNumber: 53,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\Cristian Enriquez\\\\Escritorio\\\\PY2\\\\FRONT SCOUT\\\\proyecto-scouts\\\\components\\\\layout\\\\header\\\\HeaderNavigation.tsx\",\n                    lineNumber: 50,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\Cristian Enriquez\\\\Escritorio\\\\PY2\\\\FRONT SCOUT\\\\proyecto-scouts\\\\components\\\\layout\\\\header\\\\HeaderNavigation.tsx\",\n                lineNumber: 49,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: active ? \"\".concat((_styles_layout_Header_module_scss__WEBPACK_IMPORTED_MODULE_8___default().ul), \" \").concat((_styles_layout_Header_module_scss__WEBPACK_IMPORTED_MODULE_8___default().responsive)) : (_styles_layout_Header_module_scss__WEBPACK_IMPORTED_MODULE_8___default().ul),\n                ref: navBar,\n                children: children\n            }, void 0, false, {\n                fileName: \"D:\\\\Cristian Enriquez\\\\Escritorio\\\\PY2\\\\FRONT SCOUT\\\\proyecto-scouts\\\\components\\\\layout\\\\header\\\\HeaderNavigation.tsx\",\n                lineNumber: 56,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Cristian Enriquez\\\\Escritorio\\\\PY2\\\\FRONT SCOUT\\\\proyecto-scouts\\\\components\\\\layout\\\\header\\\\HeaderNavigation.tsx\",\n        lineNumber: 42,\n        columnNumber: 9\n    }, this);\n}\n_s(HeaderNavigation, \"/FPJdppqYIZ+kr38DW54XqevSVM=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter,\n        react_cookie__WEBPACK_IMPORTED_MODULE_5__.useCookies\n    ];\n});\n_c = HeaderNavigation;\nvar _c;\n$RefreshReg$(_c, \"HeaderNavigation\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2xheW91dC9oZWFkZXIvSGVhZGVyTmF2aWdhdGlvbi50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7O0FBQW9EO0FBQ3ZCO0FBQzBCO0FBQ2Y7QUFDRTtBQUUzQixTQUFTTyxnQkFBZ0IsQ0FBQyxLQUFpQixFQUFFO1FBQW5CLFFBQVUsR0FBVixLQUFpQixDQUFmQyxRQUFROztJQUMvQyxJQUFNQyxNQUFNLEdBQUdKLHNEQUFTLEVBQUU7SUFDMUIsSUFBTUssTUFBTSxHQUFHVCw2Q0FBTSxDQUFDLElBQUksQ0FBQztJQUMzQixJQUFNVSxNQUFNLEdBQUdWLDZDQUFNLENBQUMsSUFBSSxDQUFDO0lBQzNCLElBQTRCQyxHQUFlLEdBQWZBLCtDQUFRLENBQUMsS0FBSyxDQUFDLEVBQXBDVSxNQUFNLEdBQWVWLEdBQWUsR0FBOUIsRUFBRVcsU0FBUyxHQUFJWCxHQUFlLEdBQW5CO0lBQ3hCLElBQTZCSSxJQUF1QixvRkFBdkJBLHdEQUFVLENBQUM7UUFBQyxTQUFTO0tBQUMsQ0FBQyxNQUE3Q1EsT0FBTyxHQUFlUixJQUF1QixHQUF0QyxFQUFFUyxTQUFTLEdBQUlULElBQXVCLEdBQTNCO0lBRXpCLElBQU1VLE9BQU87bUJBQUcsK0ZBQVk7O2dCQUN4QkgsU0FBUyxDQUFDLENBQUNELE1BQU0sQ0FBQzs7Ozs7UUFDdEIsQ0FBQzt3QkFGS0ksT0FBTzs7O09BRVo7SUFDRGhCLGdEQUFTLENBQUMsV0FBTTtRQUNaLElBQUlZLE1BQU0sRUFBRTtZQUNSSyxRQUFRLENBQUNDLElBQUksQ0FBQ0MsU0FBUyxHQUFHLFFBQVEsQ0FBQztZQUNuQ1IsTUFBTSxDQUFDUyxPQUFPLENBQUNELFNBQVMsR0FBQyxFQUFDLENBQWtCLE1BQXNDLENBQXREZixtRkFBZSxFQUFDLHdDQUFzQyxDQUFDO1FBQ3ZGLE9BQU87WUFDSCxJQUFJVSxPQUFPLENBQUNRLE9BQU8sR0FBR1IsT0FBTyxDQUFDUSxPQUFPLEdBQUcsS0FBSyxFQUFFO2dCQUMzQ0wsUUFBUSxDQUFDQyxJQUFJLENBQUNDLFNBQVMsR0FBRyxFQUFFLENBQUM7WUFDakMsQ0FBQztZQUNEUixNQUFNLENBQUNTLE9BQU8sQ0FBQ0QsU0FBUyxHQUFDLEVBQUMsQ0FBa0IsTUFBNEIsQ0FBNUNmLG1GQUFlLEVBQUMsOEJBQTRCLENBQUM7UUFDN0UsQ0FBQztRQUNELElBQU1tQixpQkFBaUIsR0FBRyxTQUFDQyxHQUFXLEVBQUs7WUFDdkMsSUFBSUEsR0FBRyxLQUFLLFFBQVEsRUFBRTtnQkFDbEJYLFNBQVMsQ0FBQyxLQUFLLENBQUM7WUFDcEIsQ0FBQztRQUNMLENBQUM7UUFFREosTUFBTSxDQUFDZ0IsTUFBTSxDQUFDQyxFQUFFLENBQUMsa0JBQWtCLEVBQUVILGlCQUFpQixDQUFDO1FBRXZELDZDQUE2QztRQUM3Qyx3Q0FBd0M7UUFDeEMsT0FBTyxXQUFNO1lBQ1hkLE1BQU0sQ0FBQ2dCLE1BQU0sQ0FBQ0UsR0FBRyxDQUFDLGtCQUFrQixFQUFFSixpQkFBaUIsQ0FBQztRQUMxRCxDQUFDO0lBQ0wsQ0FBQyxFQUFFO1FBQUNYLE1BQU07S0FBQyxDQUFDO0lBQ1oscUJBQ0ksOERBQUNnQixLQUFHO1FBQUNULFNBQVMsRUFBRWYsOEVBQVU7OzBCQUN0Qiw4REFBQ08sUUFBTTtnQkFBQ1EsU0FBUyxFQUFFLEVBQUMsQ0FBa0IsTUFBNEIsQ0FBNUNmLG1GQUFlLEVBQUMsOEJBQTRCLENBQUM7Z0JBQUVZLE9BQU8sRUFBRUEsT0FBTztnQkFBRWEsR0FBRyxFQUFFbEIsTUFBTTswQkFDOUYsNEVBQUNtQixNQUFJO29CQUFDWCxTQUFTLEVBQUMsZUFBZTs4QkFDM0IsNEVBQUNXLE1BQUk7d0JBQUNYLFNBQVMsRUFBQyxpQkFBaUI7Ozs7OzRCQUM5Qjs7Ozs7d0JBQ0o7Ozs7O29CQUNFOzBCQUNULDhEQUFDaEIsa0RBQUk7Z0JBQUM0QixJQUFJLEVBQUMsR0FBRzswQkFDViw0RUFBQ0MsR0FBQztvQkFBQ2IsU0FBUyxFQUFFZiwrRUFBVzs7c0NBQ3JCLDhEQUFDOEIsS0FBRzs0QkFBQ0MsR0FBRyxFQUFDLHNCQUFtQjs0QkFBQ0MsR0FBRyxFQUFDLGFBQVU7Ozs7O2dDQUFHO3NDQUM5Qyw4REFBQ0YsS0FBRzs0QkFBQ0MsR0FBRyxFQUFDLGVBQWU7NEJBQUNDLEdBQUcsRUFBQyxVQUFVOzs7OztnQ0FBRztzQ0FDMUMsOERBQUNGLEtBQUc7NEJBQUNDLEdBQUcsRUFBQyxjQUFjOzRCQUFDQyxHQUFHLEVBQUMsS0FBSzs7Ozs7Z0NBQUc7Ozs7Ozt3QkFDcEM7Ozs7O29CQUNEOzBCQUNQLDhEQUFDQyxJQUFFO2dCQUFDbEIsU0FBUyxFQUFFUCxNQUFNLEdBQUcsRUFBQyxDQUFlUixNQUFpQixDQUE5QkEsNkVBQVMsRUFBQyxHQUFDLENBQW9CLFFBQWxCQSxxRkFBaUIsQ0FBRSxHQUFHQSw2RUFBUztnQkFBRXlCLEdBQUcsRUFBRW5CLE1BQU07MEJBQy9FRixRQUFROzs7OztvQkFDUjs7Ozs7O1lBQ0gsQ0FDVDtBQUNMLENBQUM7R0F0RHVCRCxnQkFBZ0I7O1FBQ3JCRixrREFBUztRQUlLQyxvREFBVTs7O0FBTG5CQyxLQUFBQSxnQkFBZ0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXQvaGVhZGVyL0hlYWRlck5hdmlnYXRpb24udHN4PzJjZWYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tICd+L3N0eWxlcy9sYXlvdXQvSGVhZGVyLm1vZHVsZS5zY3NzJ1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgdXNlQ29va2llcyB9IGZyb20gXCJyZWFjdC1jb29raWVcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhlYWRlck5hdmlnYXRpb24oeyBjaGlsZHJlbiB9OiBhbnkpIHtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcbiAgICBjb25zdCBuYXZCYXIgPSB1c2VSZWYobnVsbCk7XHJcbiAgICBjb25zdCBidXR0b24gPSB1c2VSZWYobnVsbCk7XHJcbiAgICBjb25zdCBbYWN0aXZlLCBzZXRBY3RpdmVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW2Nvb2tpZXMsIHNldENvb2tpZV0gPSB1c2VDb29raWVzKFsndmlzaXRlZCddKTtcclxuICAgIFxyXG4gICAgY29uc3Qgb25DbGljayA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICBzZXRBY3RpdmUoIWFjdGl2ZSlcclxuICAgIH1cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKGFjdGl2ZSkge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTmFtZSA9IFwic2Nyb2xsXCI7XHJcbiAgICAgICAgICAgIGJ1dHRvbi5jdXJyZW50LmNsYXNzTmFtZT1gJHtzdHlsZXMuY2hlY2tidG59IGhhbWJ1cmdlciBoYW1idXJnZXItLXNsaWRlciBpcy1hY3RpdmVgXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKGNvb2tpZXMudmlzaXRlZCA/IGNvb2tpZXMudmlzaXRlZCA6IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTmFtZSA9IFwiXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYnV0dG9uLmN1cnJlbnQuY2xhc3NOYW1lPWAke3N0eWxlcy5jaGVja2J0bn0gaGFtYnVyZ2VyIGhhbWJ1cmdlci0tc2xpZGVyYFxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBoYW5kbGVSb3V0ZUNoYW5nZSA9ICh1cmw6IHN0cmluZykgPT4ge1xyXG4gICAgICAgICAgICBpZiAodXJsICE9PSAnL3JhbWFzJykge1xyXG4gICAgICAgICAgICAgICAgc2V0QWN0aXZlKGZhbHNlKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgcm91dGVyLmV2ZW50cy5vbigncm91dGVDaGFuZ2VTdGFydCcsIGhhbmRsZVJvdXRlQ2hhbmdlKVxyXG4gICAgXHJcbiAgICAgICAgLy8gSWYgdGhlIGNvbXBvbmVudCBpcyB1bm1vdW50ZWQsIHVuc3Vic2NyaWJlXHJcbiAgICAgICAgLy8gZnJvbSB0aGUgZXZlbnQgd2l0aCB0aGUgYG9mZmAgbWV0aG9kOlxyXG4gICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICByb3V0ZXIuZXZlbnRzLm9mZigncm91dGVDaGFuZ2VTdGFydCcsIGhhbmRsZVJvdXRlQ2hhbmdlKVxyXG4gICAgICAgIH1cclxuICAgIH0sIFthY3RpdmVdKVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8bmF2IGNsYXNzTmFtZT17c3R5bGVzLm5hdn0+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtgJHtzdHlsZXMuY2hlY2tidG59IGhhbWJ1cmdlciBoYW1idXJnZXItLXNsaWRlcmB9IG9uQ2xpY2s9e29uQ2xpY2t9IHJlZj17YnV0dG9ufT5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImhhbWJ1cmdlci1ib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJoYW1idXJnZXItaW5uZXJcIj5cclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17c3R5bGVzLmxvZ299PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltZy9wYcOxb2xldGEucG5nXCIgYWx0PVwiUGHDsW9sZXRhXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWcvbG9nby5wbmdcIiBhbHQ9XCJMb2dvIDExM1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1nL0FDRS5wbmdcIiBhbHQ9XCJBQ0VcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9e2FjdGl2ZSA/IGAke3N0eWxlcy51bH0gJHtzdHlsZXMucmVzcG9uc2l2ZX1gIDogc3R5bGVzLnVsfSByZWY9e25hdkJhcn0+XHJcbiAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9uYXY+XHJcbiAgICApXHJcbn0iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlUmVmIiwidXNlU3RhdGUiLCJMaW5rIiwic3R5bGVzIiwidXNlUm91dGVyIiwidXNlQ29va2llcyIsIkhlYWRlck5hdmlnYXRpb24iLCJjaGlsZHJlbiIsInJvdXRlciIsIm5hdkJhciIsImJ1dHRvbiIsImFjdGl2ZSIsInNldEFjdGl2ZSIsImNvb2tpZXMiLCJzZXRDb29raWUiLCJvbkNsaWNrIiwiZG9jdW1lbnQiLCJib2R5IiwiY2xhc3NOYW1lIiwiY3VycmVudCIsImNoZWNrYnRuIiwidmlzaXRlZCIsImhhbmRsZVJvdXRlQ2hhbmdlIiwidXJsIiwiZXZlbnRzIiwib24iLCJvZmYiLCJuYXYiLCJyZWYiLCJzcGFuIiwiaHJlZiIsImEiLCJsb2dvIiwiaW1nIiwic3JjIiwiYWx0IiwidWwiLCJyZXNwb25zaXZlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/layout/header/HeaderNavigation.tsx\n"));

/***/ })

});