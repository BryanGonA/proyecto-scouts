"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/dashboard/jefe-grupo/inscripciones",{

/***/ "./components/dashboard/inscriptions/InscriptionsBranch.tsx":
/*!******************************************************************!*\
  !*** ./components/dashboard/inscriptions/InscriptionsBranch.tsx ***!
  \******************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ MyBranchActions; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_dashboard_JefeRama_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ~/styles/dashboard/JefeRama.module.scss */ \"./styles/dashboard/JefeRama.module.scss\");\n/* harmony import */ var _styles_dashboard_JefeRama_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_dashboard_JefeRama_module_scss__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nvar _s = $RefreshSig$();\n\n\n\nfunction MyBranchActions(param) {\n    var id = param.id;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null), datosUsuario = ref[0], setDatosUsuario = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        fetch(\"\".concat(\"http://localhost:4000\", \"/api/users/\").concat(id), {\n            mode: \"cors\",\n            method: \"GET\",\n            headers: {\n                \"Referrer-Policy\": \"origin-when-cross-origin\",\n                \"Authorization\": \"Bearer \" + localStorage.getItem(\"auth_token\"),\n                \"Content-Type\": \"application/json\",\n                \"Access-Control-Allow-Origin\": \"\".concat(\"http://localhost:3000\")\n            }\n        }).then(function() {\n            var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(function(res) {\n                var data;\n                return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, function(_state) {\n                    switch(_state.label){\n                        case 0:\n                            return [\n                                4,\n                                res.json()\n                            ];\n                        case 1:\n                            data = _state.sent();\n                            if (res.ok) {\n                                return [\n                                    2,\n                                    Promise.resolve(data)\n                                ];\n                            } else {\n                                return [\n                                    2,\n                                    Promise.reject(data)\n                                ];\n                            }\n                            return [\n                                2\n                            ];\n                    }\n                });\n            });\n            return function(res) {\n                return _ref.apply(this, arguments);\n            };\n        }()).then(function(data) {\n            setDatosUsuario(data[\"data\"]);\n        });\n    }, []);\n    function cambiar_estado(estado) {\n        return _cambiar_estado.apply(this, arguments);\n    }\n    function _cambiar_estado() {\n        _cambiar_estado = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(function(estado) {\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, function(_state) {\n                datosUsuario.status = estado;\n                datosUsuario.branches = {};\n                setDatosUsuario(datosUsuario);\n                fetch(\"\".concat(\"http://localhost:4000\", \"/api/users/\").concat(id), {\n                    method: \"PUT\",\n                    headers: {\n                        \"Referrer-Policy\": \"origin-when-cross-origin\",\n                        \"Authorization\": \"Bearer \" + localStorage.getItem(\"auth_token\"),\n                        \"Content-Type\": \"application/json\",\n                        \"Access-Control-Allow-Origin\": \"\".concat(\"http://localhost:3000\")\n                    },\n                    body: JSON.stringify(datosUsuario)\n                }).then(function() {\n                    var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(function(res) {\n                        var data;\n                        return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, function(_state) {\n                            switch(_state.label){\n                                case 0:\n                                    return [\n                                        4,\n                                        res.json()\n                                    ];\n                                case 1:\n                                    data = _state.sent();\n                                    if (res.ok) {\n                                        return [\n                                            2,\n                                            Promise.resolve(data)\n                                        ];\n                                    } else {\n                                        return [\n                                            2,\n                                            Promise.reject(data)\n                                        ];\n                                    }\n                                    return [\n                                        2\n                                    ];\n                            }\n                        });\n                    });\n                    return function(res) {\n                        return _ref.apply(this, arguments);\n                    };\n                }()).then(function(data) {\n                    console.log(data);\n                });\n                return [\n                    2\n                ];\n            });\n        });\n        return _cambiar_estado.apply(this, arguments);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                href: \"/dashboard/info/\".concat(id),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        className: (_styles_dashboard_JefeRama_module_scss__WEBPACK_IMPORTED_MODULE_5___default().icon),\n                        src: \"/img/dashboard/eye.svg\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Universidad\\\\9semestre\\\\Proyecto_2\\\\Frontend\\\\proyecto-scouts\\\\components\\\\dashboard\\\\inscriptions\\\\InscriptionsBranch.tsx\",\n                        lineNumber: 68,\n                        columnNumber: 16\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"D:\\\\Universidad\\\\9semestre\\\\Proyecto_2\\\\Frontend\\\\proyecto-scouts\\\\components\\\\dashboard\\\\inscriptions\\\\InscriptionsBranch.tsx\",\n                    lineNumber: 68,\n                    columnNumber: 13\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\Universidad\\\\9semestre\\\\Proyecto_2\\\\Frontend\\\\proyecto-scouts\\\\components\\\\dashboard\\\\inscriptions\\\\InscriptionsBranch.tsx\",\n                lineNumber: 67,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                href: \"/dashboard\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        className: (_styles_dashboard_JefeRama_module_scss__WEBPACK_IMPORTED_MODULE_5___default().icon),\n                        src: \"/img/dashboard/check.svg\",\n                        onClick: function() {\n                            return cambiar_estado(true);\n                        }\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Universidad\\\\9semestre\\\\Proyecto_2\\\\Frontend\\\\proyecto-scouts\\\\components\\\\dashboard\\\\inscriptions\\\\InscriptionsBranch.tsx\",\n                        lineNumber: 71,\n                        columnNumber: 16\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"D:\\\\Universidad\\\\9semestre\\\\Proyecto_2\\\\Frontend\\\\proyecto-scouts\\\\components\\\\dashboard\\\\inscriptions\\\\InscriptionsBranch.tsx\",\n                    lineNumber: 71,\n                    columnNumber: 13\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\Universidad\\\\9semestre\\\\Proyecto_2\\\\Frontend\\\\proyecto-scouts\\\\components\\\\dashboard\\\\inscriptions\\\\InscriptionsBranch.tsx\",\n                lineNumber: 70,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                href: \"/dashboard\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        className: (_styles_dashboard_JefeRama_module_scss__WEBPACK_IMPORTED_MODULE_5___default().icon),\n                        src: \"/img/dashboard/cancel.svg\",\n                        onClick: function() {\n                            return cambiar_estado(false);\n                        }\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Universidad\\\\9semestre\\\\Proyecto_2\\\\Frontend\\\\proyecto-scouts\\\\components\\\\dashboard\\\\inscriptions\\\\InscriptionsBranch.tsx\",\n                        lineNumber: 74,\n                        columnNumber: 16\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"D:\\\\Universidad\\\\9semestre\\\\Proyecto_2\\\\Frontend\\\\proyecto-scouts\\\\components\\\\dashboard\\\\inscriptions\\\\InscriptionsBranch.tsx\",\n                    lineNumber: 74,\n                    columnNumber: 13\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\Universidad\\\\9semestre\\\\Proyecto_2\\\\Frontend\\\\proyecto-scouts\\\\components\\\\dashboard\\\\inscriptions\\\\InscriptionsBranch.tsx\",\n                lineNumber: 73,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(MyBranchActions, \"guVkFVVSew6hH2g/XBdZM40Ur3I=\");\n_c = MyBranchActions;\nvar _c;\n$RefreshReg$(_c, \"MyBranchActions\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2Rhc2hib2FyZC9pbnNjcmlwdGlvbnMvSW5zY3JpcHRpb25zQnJhbmNoLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQTREO0FBQ2hDO0FBQ2dCO0FBRTdCLFNBQVNJLGVBQWUsQ0FBQyxLQUFVLEVBQUU7UUFBWixFQUFHLEdBQUgsS0FBVSxDQUFUQyxFQUFFOztJQUV2QyxJQUF3Q0gsR0FBYyxHQUFkQSwrQ0FBUSxDQUFDLElBQUksQ0FBQyxFQUEvQ0ksWUFBWSxHQUFxQkosR0FBYyxHQUFuQyxFQUFFSyxlQUFlLEdBQUlMLEdBQWMsR0FBbEI7SUFDaENDLGdEQUFTLENBQUMsV0FBTTtRQUVaSyxLQUFLLENBQUMsRUFBQyxDQUErQ0gsTUFBRSxDQUEvQ0ksdUJBQStCLEVBQUMsYUFBVyxDQUFLLFFBQUhKLEVBQUUsQ0FBRSxFQUFFO1lBQ3hETyxJQUFJLEVBQUMsTUFBTTtZQUNYQyxNQUFNLEVBQUUsS0FBSztZQUNiQyxPQUFPLEVBQUU7Z0JBQ0wsaUJBQWlCLEVBQUUsMEJBQTBCO2dCQUM3QyxlQUFlLEVBQUUsU0FBUyxHQUFHQyxZQUFZLENBQUNDLE9BQU8sQ0FBQyxZQUFZLENBQUM7Z0JBQy9ELGNBQWMsRUFBRSxrQkFBa0I7Z0JBQ2xDLDZCQUE2QixFQUFFLEVBQUMsQ0FBOEIsT0FBNUJQLHVCQUEyQixDQUFFO2FBQ2xFO1NBQ0EsQ0FBQyxDQUFDUyxJQUFJO3VCQUFDLDZGQUFNQyxHQUFHLEVBQUk7b0JBQ1hDLElBQUk7Ozs7NEJBQUc7O2dDQUFNRCxHQUFHLENBQUNFLElBQUksRUFBRTs4QkFBQTs7NEJBQXZCRCxJQUFJLEdBQUcsYUFBZ0I7NEJBQzdCLElBQUlELEdBQUcsQ0FBQ0csRUFBRSxFQUFFO2dDQUNSOztvQ0FBT0MsT0FBTyxDQUFDQyxPQUFPLENBQUNKLElBQUksQ0FBQztrQ0FBQzs0QkFDakMsT0FBTztnQ0FDSDs7b0NBQU9HLE9BQU8sQ0FBQ0UsTUFBTSxDQUFDTCxJQUFJLENBQUM7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QUFmQSxLQUFBQSxlQUFlIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvZGFzaGJvYXJkL2luc2NyaXB0aW9ucy9JbnNjcmlwdGlvbnNCcmFuY2gudHN4PzIzYzIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tIFwifi9zdHlsZXMvZGFzaGJvYXJkL0plZmVSYW1hLm1vZHVsZS5zY3NzXCJcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiXHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE15QnJhbmNoQWN0aW9ucyh7aWR9IDogYW55KSB7XHJcblxyXG4gICAgY29uc3QgW2RhdG9zVXN1YXJpbywgc2V0RGF0b3NVc3VhcmlvXSA9IHVzZVN0YXRlKG51bGwpXHJcbiAgICAgICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGZldGNoKGAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FQSV9VUkx9L2FwaS91c2Vycy8ke2lkfWAsIHtcclxuICAgICAgICAgICAgICAgIG1vZGU6J2NvcnMnLFxyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAnUmVmZXJyZXItUG9saWN5JzogJ29yaWdpbi13aGVuLWNyb3NzLW9yaWdpbicsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiBcIkJlYXJlciBcIiArIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiYXV0aF90b2tlblwiKSxcclxuICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAgICAgICAgICdBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW4nOiBgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19VUkx9YFxyXG4gICAgICAgICAgICAgICAgfSwgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfSkudGhlbihhc3luYyByZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXMub2spIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShkYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSkudGhlbihkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgIHNldERhdG9zVXN1YXJpbyhkYXRhWydkYXRhJ10pICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICBcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICBhc3luYyBmdW5jdGlvbiBjYW1iaWFyX2VzdGFkbyhlc3RhZG8pe1xyXG4gICAgICAgIFxyXG4gICAgICAgIGRhdG9zVXN1YXJpby5zdGF0dXM9ZXN0YWRvXHJcbiAgICAgICAgZGF0b3NVc3VhcmlvLmJyYW5jaGVzID0ge31cclxuICAgICAgICBzZXREYXRvc1VzdWFyaW8oZGF0b3NVc3VhcmlvKSAgICBcclxuICAgICAgICBcclxuICAgICAgICBmZXRjaChgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUElfVVJMfS9hcGkvdXNlcnMvJHtpZH1gLCB7ICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgbWV0aG9kOiAnUFVUJyxcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgJ1JlZmVycmVyLVBvbGljeSc6ICdvcmlnaW4td2hlbi1jcm9zcy1vcmlnaW4nLFxyXG4gICAgICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiBcIkJlYXJlciBcIiArIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiYXV0aF90b2tlblwiKSxcclxuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICAgICAnQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luJzogYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfVVJMfWBcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICBcclxuICAgICAgICAgICAgYm9keTpKU09OLnN0cmluZ2lmeShkYXRvc1VzdWFyaW8pXHJcbiAgICAgICAgICAgfSkudGhlbihhc3luYyByZXMgPT4ge1xyXG4gICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xyXG4gICAgICAgICAgICAgICBpZiAocmVzLm9rKSB7XHJcbiAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGRhdGEpO1xyXG4gICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGRhdGEpO1xyXG4gICAgICAgICAgICAgICB9ICBcclxuICAgICAgICAgICB9KS50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSlcclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgIFxyXG5cclxuICAgICAgIFxyXG4gICAgfVxyXG5cclxuXHJcbiAgICByZXR1cm4gKCAgICAgICBcclxuICAgICAgICA8PlxyXG4gICAgICAgIDxMaW5rIGhyZWY9e2AvZGFzaGJvYXJkL2luZm8vJHtpZH1gfT5cclxuICAgICAgICAgICAgPGE+PGltZyBjbGFzc05hbWU9e3N0eWxlcy5pY29ufSBzcmM9XCIvaW1nL2Rhc2hib2FyZC9leWUuc3ZnXCIgLz48L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDxMaW5rIGhyZWY9e2AvZGFzaGJvYXJkYH0+XHJcbiAgICAgICAgICAgIDxhPjxpbWcgY2xhc3NOYW1lPXtzdHlsZXMuaWNvbn0gc3JjPVwiL2ltZy9kYXNoYm9hcmQvY2hlY2suc3ZnXCIgb25DbGljaz17KCkgPT4gY2FtYmlhcl9lc3RhZG8odHJ1ZSl9Lz48L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDxMaW5rIGhyZWY9e2AvZGFzaGJvYXJkYH0+XHJcbiAgICAgICAgICAgIDxhPjxpbWcgY2xhc3NOYW1lPXtzdHlsZXMuaWNvbn0gc3JjPVwiL2ltZy9kYXNoYm9hcmQvY2FuY2VsLnN2Z1wiIG9uQ2xpY2s9eygpID0+IGNhbWJpYXJfZXN0YWRvKGZhbHNlKX0vPjwvYT5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn0iXSwibmFtZXMiOlsic3R5bGVzIiwiTGluayIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiTXlCcmFuY2hBY3Rpb25zIiwiaWQiLCJkYXRvc1VzdWFyaW8iLCJzZXREYXRvc1VzdWFyaW8iLCJmZXRjaCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19BUElfVVJMIiwibW9kZSIsIm1ldGhvZCIsImhlYWRlcnMiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiTkVYVF9QVUJMSUNfVVJMIiwidGhlbiIsInJlcyIsImRhdGEiLCJqc29uIiwib2siLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImNhbWJpYXJfZXN0YWRvIiwiZXN0YWRvIiwic3RhdHVzIiwiYnJhbmNoZXMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImNvbnNvbGUiLCJsb2ciLCJocmVmIiwiYSIsImltZyIsImNsYXNzTmFtZSIsImljb24iLCJzcmMiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/dashboard/inscriptions/InscriptionsBranch.tsx\n"));

/***/ })

});