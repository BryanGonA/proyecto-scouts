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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ MyBranchActions; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_dashboard_JefeRama_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ~/styles/dashboard/JefeRama.module.scss */ \"./styles/dashboard/JefeRama.module.scss\");\n/* harmony import */ var _styles_dashboard_JefeRama_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_dashboard_JefeRama_module_scss__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nvar _s = $RefreshSig$();\n\n\n\nfunction MyBranchActions(param) {\n    var id = param.id;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null), datosUsuario = ref[0], setDatosUsuario = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        fetch(\"\".concat(\"http://localhost:4000\", \"/api/users/\").concat(id), {\n            mode: \"cors\",\n            method: \"GET\",\n            headers: {\n                \"Referrer-Policy\": \"origin-when-cross-origin\",\n                \"Authorization\": \"Bearer \" + localStorage.getItem(\"auth_token\"),\n                \"Content-Type\": \"application/json\",\n                \"Access-Control-Allow-Origin\": \"\".concat(\"http://localhost:3000\")\n            }\n        }).then(function() {\n            var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(function(res) {\n                var data;\n                return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, function(_state) {\n                    switch(_state.label){\n                        case 0:\n                            return [\n                                4,\n                                res.json()\n                            ];\n                        case 1:\n                            data = _state.sent();\n                            if (res.ok) {\n                                return [\n                                    2,\n                                    Promise.resolve(data)\n                                ];\n                            } else {\n                                return [\n                                    2,\n                                    Promise.reject(data)\n                                ];\n                            }\n                            return [\n                                2\n                            ];\n                    }\n                });\n            });\n            return function(res) {\n                return _ref.apply(this, arguments);\n            };\n        }()).then(function(data) {\n            setDatosUsuario(data[\"data\"]);\n        });\n    }, []);\n    function cambiar_estado(estado) {\n        return _cambiar_estado.apply(this, arguments);\n    }\n    function _cambiar_estado() {\n        _cambiar_estado = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(function(estado) {\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, function(_state) {\n                datosUsuario.status = estado;\n                //datosUsuario.branches = {}\n                setDatosUsuario(datosUsuario);\n                fetch(\"\".concat(\"http://localhost:4000\", \"/api/users/\").concat(id), {\n                    method: \"PUT\",\n                    headers: {\n                        \"Referrer-Policy\": \"origin-when-cross-origin\",\n                        \"Authorization\": \"Bearer \" + localStorage.getItem(\"auth_token\"),\n                        \"Content-Type\": \"application/json\",\n                        \"Access-Control-Allow-Origin\": \"\".concat(\"http://localhost:3000\")\n                    },\n                    body: JSON.stringify(datosUsuario)\n                }).then(function() {\n                    var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(function(res) {\n                        var data;\n                        return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, function(_state) {\n                            switch(_state.label){\n                                case 0:\n                                    return [\n                                        4,\n                                        res.json()\n                                    ];\n                                case 1:\n                                    data = _state.sent();\n                                    if (res.ok) {\n                                        return [\n                                            2,\n                                            Promise.resolve(data)\n                                        ];\n                                    } else {\n                                        return [\n                                            2,\n                                            Promise.reject(data)\n                                        ];\n                                    }\n                                    return [\n                                        2\n                                    ];\n                            }\n                        });\n                    });\n                    return function(res) {\n                        return _ref.apply(this, arguments);\n                    };\n                }()).then(function(data) {\n                    console.log(data);\n                }).catch(function(error) {\n                    console.log(error);\n                });\n                return [\n                    2\n                ];\n            });\n        });\n        return _cambiar_estado.apply(this, arguments);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                href: \"/dashboard/info/\".concat(id),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        className: (_styles_dashboard_JefeRama_module_scss__WEBPACK_IMPORTED_MODULE_5___default().icon),\n                        src: \"/img/dashboard/eye.svg\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Universidad\\\\9semestre\\\\Proyecto_2\\\\Frontend\\\\proyecto-scouts\\\\components\\\\dashboard\\\\inscriptions\\\\InscriptionsBranch.tsx\",\n                        lineNumber: 67,\n                        columnNumber: 16\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"D:\\\\Universidad\\\\9semestre\\\\Proyecto_2\\\\Frontend\\\\proyecto-scouts\\\\components\\\\dashboard\\\\inscriptions\\\\InscriptionsBranch.tsx\",\n                    lineNumber: 67,\n                    columnNumber: 13\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\Universidad\\\\9semestre\\\\Proyecto_2\\\\Frontend\\\\proyecto-scouts\\\\components\\\\dashboard\\\\inscriptions\\\\InscriptionsBranch.tsx\",\n                lineNumber: 66,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                href: \"/dashboard\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        className: (_styles_dashboard_JefeRama_module_scss__WEBPACK_IMPORTED_MODULE_5___default().icon),\n                        src: \"/img/dashboard/check.svg\",\n                        onClick: function() {\n                            return cambiar_estado(true);\n                        }\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Universidad\\\\9semestre\\\\Proyecto_2\\\\Frontend\\\\proyecto-scouts\\\\components\\\\dashboard\\\\inscriptions\\\\InscriptionsBranch.tsx\",\n                        lineNumber: 70,\n                        columnNumber: 16\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"D:\\\\Universidad\\\\9semestre\\\\Proyecto_2\\\\Frontend\\\\proyecto-scouts\\\\components\\\\dashboard\\\\inscriptions\\\\InscriptionsBranch.tsx\",\n                    lineNumber: 70,\n                    columnNumber: 13\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\Universidad\\\\9semestre\\\\Proyecto_2\\\\Frontend\\\\proyecto-scouts\\\\components\\\\dashboard\\\\inscriptions\\\\InscriptionsBranch.tsx\",\n                lineNumber: 69,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                href: \"/dashboard\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        className: (_styles_dashboard_JefeRama_module_scss__WEBPACK_IMPORTED_MODULE_5___default().icon),\n                        src: \"/img/dashboard/cancel.svg\",\n                        onClick: function() {\n                            return cambiar_estado(false);\n                        }\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Universidad\\\\9semestre\\\\Proyecto_2\\\\Frontend\\\\proyecto-scouts\\\\components\\\\dashboard\\\\inscriptions\\\\InscriptionsBranch.tsx\",\n                        lineNumber: 73,\n                        columnNumber: 16\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"D:\\\\Universidad\\\\9semestre\\\\Proyecto_2\\\\Frontend\\\\proyecto-scouts\\\\components\\\\dashboard\\\\inscriptions\\\\InscriptionsBranch.tsx\",\n                    lineNumber: 73,\n                    columnNumber: 13\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\Universidad\\\\9semestre\\\\Proyecto_2\\\\Frontend\\\\proyecto-scouts\\\\components\\\\dashboard\\\\inscriptions\\\\InscriptionsBranch.tsx\",\n                lineNumber: 72,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(MyBranchActions, \"guVkFVVSew6hH2g/XBdZM40Ur3I=\");\n_c = MyBranchActions;\nvar _c;\n$RefreshReg$(_c, \"MyBranchActions\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2Rhc2hib2FyZC9pbnNjcmlwdGlvbnMvSW5zY3JpcHRpb25zQnJhbmNoLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQTREO0FBQ2hDO0FBQ2dCO0FBRTdCLFNBQVNJLGVBQWUsQ0FBQyxLQUFVLEVBQUU7UUFBWixFQUFHLEdBQUgsS0FBVSxDQUFUQyxFQUFFOztJQUV2QyxJQUF3Q0gsR0FBYyxHQUFkQSwrQ0FBUSxDQUFDLElBQUksQ0FBQyxFQUEvQ0ksWUFBWSxHQUFxQkosR0FBYyxHQUFuQyxFQUFFSyxlQUFlLEdBQUlMLEdBQWMsR0FBbEI7SUFDaENDLGdEQUFTLENBQUMsV0FBTTtRQUVaSyxLQUFLLENBQUMsRUFBQyxDQUErQ0gsTUFBRSxDQUEvQ0ksdUJBQStCLEVBQUMsYUFBVyxDQUFLLFFBQUhKLEVBQUUsQ0FBRSxFQUFFO1lBQ3hETyxJQUFJLEVBQUMsTUFBTTtZQUNYQyxNQUFNLEVBQUUsS0FBSztZQUNiQyxPQUFPLEVBQUU7Z0JBQ0wsaUJBQWlCLEVBQUUsMEJBQTBCO2dCQUM3QyxlQUFlLEVBQUUsU0FBUyxHQUFHQyxZQUFZLENBQUNDLE9BQU8sQ0FBQyxZQUFZLENBQUM7Z0JBQy9ELGNBQWMsRUFBRSxrQkFBa0I7Z0JBQ2xDLDZCQUE2QixFQUFFLEVBQUMsQ0FBOEIsT0FBNUJQLHVCQUEyQixDQUFFO2FBQ2xFO1NBQ0EsQ0FBQyxDQUFDUyxJQUFJO3VCQUFDLDZGQUFNQyxHQUFHLEVBQUk7b0JBQ1hDLElBQUk7Ozs7NEJBQUc7O2dDQUFNRCxHQUFHLENBQUNFLElBQUksRUFBRTs4QkFBQTs7NEJBQXZCRCxJQUFJLEdBQUcsYUFBZ0I7NEJBQzdCLElBQUlELEdBQUcsQ0FBQ0csRUFBRSxFQUFFO2dDQUNSOztvQ0FBT0MsT0FBTyxDQUFDQyxPQUFPLENBQUNKLElBQUksQ0FBQztrQ0FBQzs0QkFDakMsT0FBTztnQ0FDSDs7b0NBQU9HLE9BQU8sQ0FBQ0UsTUFBTSxDQUFDTCxJQUFJLENBQUM7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QTs7Ozs7NEJBQUc7Ozs7O3dCQUFJOzs7OztvQkFDeEc7O29CQUNKLENBQ047QUFDTCxDQUFDO0dBeEV1QnRCLGVBQWU7QUFBZkEsS0FBQUEsZUFBZSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2Rhc2hib2FyZC9pbnNjcmlwdGlvbnMvSW5zY3JpcHRpb25zQnJhbmNoLnRzeD8yM2MyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSBcIn4vc3R5bGVzL2Rhc2hib2FyZC9KZWZlUmFtYS5tb2R1bGUuc2Nzc1wiXHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIlxyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNeUJyYW5jaEFjdGlvbnMoe2lkfSA6IGFueSkge1xyXG5cclxuICAgIGNvbnN0IFtkYXRvc1VzdWFyaW8sIHNldERhdG9zVXN1YXJpb10gPSB1c2VTdGF0ZShudWxsKVxyXG4gICAgICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBmZXRjaChgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUElfVVJMfS9hcGkvdXNlcnMvJHtpZH1gLCB7XHJcbiAgICAgICAgICAgICAgICBtb2RlOidjb3JzJyxcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ1JlZmVycmVyLVBvbGljeSc6ICdvcmlnaW4td2hlbi1jcm9zcy1vcmlnaW4nLFxyXG4gICAgICAgICAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogXCJCZWFyZXIgXCIgKyBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImF1dGhfdG9rZW5cIiksXHJcbiAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgICAgICAgICAnQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luJzogYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfVVJMfWBcclxuICAgICAgICAgICAgICAgIH0sICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH0pLnRoZW4oYXN5bmMgcmVzID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocmVzLm9rKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzZXREYXRvc1VzdWFyaW8oZGF0YVsnZGF0YSddKSAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgXHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgYXN5bmMgZnVuY3Rpb24gY2FtYmlhcl9lc3RhZG8oZXN0YWRvKXtcclxuICAgICAgICBcclxuICAgICAgICBkYXRvc1VzdWFyaW8uc3RhdHVzPWVzdGFkb1xyXG4gICAgICAgIC8vZGF0b3NVc3VhcmlvLmJyYW5jaGVzID0ge31cclxuICAgICAgICBzZXREYXRvc1VzdWFyaW8oZGF0b3NVc3VhcmlvKSAgICBcclxuICAgICAgICBcclxuICAgICAgICBmZXRjaChgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUElfVVJMfS9hcGkvdXNlcnMvJHtpZH1gLCB7ICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgbWV0aG9kOiAnUFVUJyxcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgJ1JlZmVycmVyLVBvbGljeSc6ICdvcmlnaW4td2hlbi1jcm9zcy1vcmlnaW4nLFxyXG4gICAgICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiBcIkJlYXJlciBcIiArIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiYXV0aF90b2tlblwiKSxcclxuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICAgICAnQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luJzogYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfVVJMfWBcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICBcclxuICAgICAgICAgICAgYm9keTpKU09OLnN0cmluZ2lmeShkYXRvc1VzdWFyaW8pXHJcbiAgICAgICAgICAgfSkudGhlbihhc3luYyByZXMgPT4ge1xyXG4gICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xyXG4gICAgICAgICAgICAgICBpZiAocmVzLm9rKSB7XHJcbiAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGRhdGEpO1xyXG4gICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGRhdGEpO1xyXG4gICAgICAgICAgICAgICB9ICBcclxuICAgICAgICAgICB9KS50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSlcclxuICAgICAgICAgICAgICB9KS5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICAgICAgICB9KSAgICAgICBcclxuICAgIH1cclxuXHJcblxyXG4gICAgcmV0dXJuICggICAgICAgXHJcbiAgICAgICAgPD5cclxuICAgICAgICA8TGluayBocmVmPXtgL2Rhc2hib2FyZC9pbmZvLyR7aWR9YH0+XHJcbiAgICAgICAgICAgIDxhPjxpbWcgY2xhc3NOYW1lPXtzdHlsZXMuaWNvbn0gc3JjPVwiL2ltZy9kYXNoYm9hcmQvZXllLnN2Z1wiIC8+PC9hPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgICA8TGluayBocmVmPXtgL2Rhc2hib2FyZGB9PlxyXG4gICAgICAgICAgICA8YT48aW1nIGNsYXNzTmFtZT17c3R5bGVzLmljb259IHNyYz1cIi9pbWcvZGFzaGJvYXJkL2NoZWNrLnN2Z1wiIG9uQ2xpY2s9eygpID0+IGNhbWJpYXJfZXN0YWRvKHRydWUpfS8+PC9hPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgICA8TGluayBocmVmPXtgL2Rhc2hib2FyZGB9PlxyXG4gICAgICAgICAgICA8YT48aW1nIGNsYXNzTmFtZT17c3R5bGVzLmljb259IHNyYz1cIi9pbWcvZGFzaGJvYXJkL2NhbmNlbC5zdmdcIiBvbkNsaWNrPXsoKSA9PiBjYW1iaWFyX2VzdGFkbyhmYWxzZSl9Lz48L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59Il0sIm5hbWVzIjpbInN0eWxlcyIsIkxpbmsiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIk15QnJhbmNoQWN0aW9ucyIsImlkIiwiZGF0b3NVc3VhcmlvIiwic2V0RGF0b3NVc3VhcmlvIiwiZmV0Y2giLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfQVBJX1VSTCIsIm1vZGUiLCJtZXRob2QiLCJoZWFkZXJzIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIk5FWFRfUFVCTElDX1VSTCIsInRoZW4iLCJyZXMiLCJkYXRhIiwianNvbiIsIm9rIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJjYW1iaWFyX2VzdGFkbyIsImVzdGFkbyIsInN0YXR1cyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiY29uc29sZSIsImxvZyIsImNhdGNoIiwiZXJyb3IiLCJocmVmIiwiYSIsImltZyIsImNsYXNzTmFtZSIsImljb24iLCJzcmMiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/dashboard/inscriptions/InscriptionsBranch.tsx\n"));

/***/ })

});