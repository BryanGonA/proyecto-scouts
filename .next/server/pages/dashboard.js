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
exports.id = "pages/dashboard";
exports.ids = ["pages/dashboard"];
exports.modules = {

/***/ "./hooks/use-current-user.ts":
/*!***********************************!*\
  !*** ./hooks/use-current-user.ts ***!
  \***********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useCurrentBranch\": () => (/* binding */ useCurrentBranch),\n/* harmony export */   \"useCurrentImage\": () => (/* binding */ useCurrentImage),\n/* harmony export */   \"useCurrentUser\": () => (/* binding */ useCurrentUser)\n/* harmony export */ });\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swr */ \"swr\");\n/* harmony import */ var _lib_fetcher__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/lib/fetcher */ \"./lib/fetcher.ts\");\n/* harmony import */ var _use_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./use-user */ \"./hooks/use-user.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swr__WEBPACK_IMPORTED_MODULE_0__, _use_user__WEBPACK_IMPORTED_MODULE_2__]);\n([swr__WEBPACK_IMPORTED_MODULE_0__, _use_user__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\nfunction useCurrentUser() {\n    const { data: user , error  } = (0,swr__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"/api/auth/profile\", _lib_fetcher__WEBPACK_IMPORTED_MODULE_1__.fetcherWithToken);\n    return {\n        user: user ? user.user : null,\n        isLoading: error || !user,\n        error: error\n    };\n}\nfunction useCurrentBranch() {\n    const { data  } = (0,swr__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"/api/auth/profile\", _lib_fetcher__WEBPACK_IMPORTED_MODULE_1__.fetcherWithToken);\n    return (0,_use_user__WEBPACK_IMPORTED_MODULE_2__.useUserBranch)(data ? data.user.id : null);\n}\nfunction useCurrentImage() {\n    const { data  } = (0,swr__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"/api/auth/profile\", _lib_fetcher__WEBPACK_IMPORTED_MODULE_1__.fetcherWithToken);\n    return (0,_use_user__WEBPACK_IMPORTED_MODULE_2__.useUserImage)(data ? data.user.id : null);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ob29rcy91c2UtY3VycmVudC11c2VyLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUF5QjtBQUV3QjtBQUNRO0FBRWxELFNBQVNJLGNBQWMsR0FBa0I7SUFDNUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLElBQUksR0FBRUMsS0FBSyxHQUFFLEdBQUdQLCtDQUFNLENBQUMsbUJBQW1CLEVBQUVDLDBEQUFnQixDQUFDO0lBQzNFLE9BQU87UUFDSEssSUFBSSxFQUFFQSxJQUFJLEdBQUdBLElBQUksQ0FBQ0EsSUFBSSxHQUFHLElBQUk7UUFDN0JFLFNBQVMsRUFBRUQsS0FBSyxJQUFJLENBQUNELElBQUk7UUFDekJDLEtBQUssRUFBRUEsS0FBSztLQUNmO0FBQ0wsQ0FBQztBQUVNLFNBQVNFLGdCQUFnQixHQUFHO0lBQy9CLE1BQU0sRUFBRUosSUFBSSxHQUFFLEdBQUdMLCtDQUFNLENBQUMsbUJBQW1CLEVBQUVDLDBEQUFnQixDQUFDO0lBQzlELE9BQU9DLHdEQUFhLENBQUNHLElBQUksR0FBR0EsSUFBSSxDQUFDQyxJQUFJLENBQUNJLEVBQUUsR0FBRyxJQUFJLENBQUM7QUFDcEQsQ0FBQztBQUVNLFNBQVNDLGVBQWUsR0FBRztJQUM5QixNQUFNLEVBQUVOLElBQUksR0FBRSxHQUFHTCwrQ0FBTSxDQUFDLG1CQUFtQixFQUFFQywwREFBZ0IsQ0FBQztJQUM5RCxPQUFPRSx1REFBWSxDQUFDRSxJQUFJLEdBQUdBLElBQUksQ0FBQ0MsSUFBSSxDQUFDSSxFQUFFLEdBQUcsSUFBSSxDQUFDO0FBQ25ELENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL2hvb2tzL3VzZS1jdXJyZW50LXVzZXIudHM/ZGY0ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdXNlU1dSIGZyb20gXCJzd3JcIjtcbmltcG9ydCB7IFJlc3BvbnNlVXNlciB9IGZyb20gXCJ+L2xpYi9jb21tb25JbnRlcmZhY2VzXCI7XG5pbXBvcnQgeyBmZXRjaGVyV2l0aFRva2VuIH0gZnJvbSBcIn4vbGliL2ZldGNoZXJcIjtcbmltcG9ydCB7IHVzZVVzZXJCcmFuY2gsIHVzZVVzZXJJbWFnZSB9IGZyb20gXCIuL3VzZS11c2VyXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VDdXJyZW50VXNlcigpIDogUmVzcG9uc2VVc2VyIHtcbiAgICBjb25zdCB7IGRhdGE6IHVzZXIsIGVycm9yIH0gPSB1c2VTV1IoJy9hcGkvYXV0aC9wcm9maWxlJywgZmV0Y2hlcldpdGhUb2tlbilcbiAgICByZXR1cm4ge1xuICAgICAgICB1c2VyOiB1c2VyID8gdXNlci51c2VyIDogbnVsbCxcbiAgICAgICAgaXNMb2FkaW5nOiBlcnJvciB8fCAhdXNlcixcbiAgICAgICAgZXJyb3I6IGVycm9yXG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdXNlQ3VycmVudEJyYW5jaCgpIHtcbiAgICBjb25zdCB7IGRhdGEgfSA9IHVzZVNXUignL2FwaS9hdXRoL3Byb2ZpbGUnLCBmZXRjaGVyV2l0aFRva2VuKVxuICAgIHJldHVybiB1c2VVc2VyQnJhbmNoKGRhdGEgPyBkYXRhLnVzZXIuaWQgOiBudWxsKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdXNlQ3VycmVudEltYWdlKCkge1xuICAgIGNvbnN0IHsgZGF0YSB9ID0gdXNlU1dSKCcvYXBpL2F1dGgvcHJvZmlsZScsIGZldGNoZXJXaXRoVG9rZW4pXG4gICAgcmV0dXJuIHVzZVVzZXJJbWFnZShkYXRhID8gZGF0YS51c2VyLmlkIDogbnVsbClcbn0iXSwibmFtZXMiOlsidXNlU1dSIiwiZmV0Y2hlcldpdGhUb2tlbiIsInVzZVVzZXJCcmFuY2giLCJ1c2VVc2VySW1hZ2UiLCJ1c2VDdXJyZW50VXNlciIsImRhdGEiLCJ1c2VyIiwiZXJyb3IiLCJpc0xvYWRpbmciLCJ1c2VDdXJyZW50QnJhbmNoIiwiaWQiLCJ1c2VDdXJyZW50SW1hZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./hooks/use-current-user.ts\n");

/***/ }),

/***/ "./hooks/use-user.ts":
/*!***************************!*\
  !*** ./hooks/use-user.ts ***!
  \***************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useUserBranch\": () => (/* binding */ useUserBranch),\n/* harmony export */   \"useUserImage\": () => (/* binding */ useUserImage)\n/* harmony export */ });\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swr */ \"swr\");\n/* harmony import */ var _lib_fetcher__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/lib/fetcher */ \"./lib/fetcher.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swr__WEBPACK_IMPORTED_MODULE_0__]);\nswr__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\nfunction useUserImage(userId) {\n    const { data: image , error  } = (0,swr__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(userId ? `/api/users/image/${userId}` : null, _lib_fetcher__WEBPACK_IMPORTED_MODULE_1__.fetcherBlobWithToken);\n    return {\n        image: image,\n        isLoading: error || !image,\n        error: error\n    };\n}\nfunction useUserBranch(userId) {\n    const { data: branch , error  } = (0,swr__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(userId ? `/api/users/branches/${userId}` : null, _lib_fetcher__WEBPACK_IMPORTED_MODULE_1__.fetcherWithToken);\n    return {\n        branch: branch ? branch.data.branches : null,\n        isLoading: error || !branch,\n        error: error\n    };\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ob29rcy91c2UtdXNlci50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQXlCO0FBRThDO0FBRWhFLFNBQVNHLFlBQVksQ0FBQ0MsTUFBYyxFQUFFO0lBQ3pDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxLQUFLLEdBQUVDLEtBQUssR0FBRSxHQUFHUCwrQ0FBTSxDQUFDSSxNQUFNLEdBQUcsQ0FBQyxpQkFBaUIsRUFBRUEsTUFBTSxDQUFDLENBQUMsR0FBRyxJQUFJLEVBQUVILDhEQUFvQixDQUFDO0lBQ3pHLE9BQU87UUFDSEssS0FBSyxFQUFFQSxLQUFLO1FBQ1pFLFNBQVMsRUFBRUQsS0FBSyxJQUFJLENBQUNELEtBQUs7UUFDMUJDLEtBQUssRUFBRUEsS0FBSztLQUNmO0FBQ0wsQ0FBQztBQUVNLFNBQVNFLGFBQWEsQ0FBQ0wsTUFBYyxFQUFrQjtJQUMxRCxNQUFNLEVBQUVDLElBQUksRUFBRUssTUFBTSxHQUFFSCxLQUFLLEdBQUUsR0FBR1AsK0NBQU0sQ0FBQ0ksTUFBTSxHQUFHLENBQUMsb0JBQW9CLEVBQUVBLE1BQU0sQ0FBQyxDQUFDLEdBQUcsSUFBSSxFQUFFRiwwREFBZ0IsQ0FBQztJQUN6RyxPQUFPO1FBQ0hRLE1BQU0sRUFBRUEsTUFBTSxHQUFHQSxNQUFNLENBQUNMLElBQUksQ0FBQ00sUUFBUSxHQUFHLElBQUk7UUFDNUNILFNBQVMsRUFBRUQsS0FBSyxJQUFJLENBQUNHLE1BQU07UUFDM0JILEtBQUssRUFBRUEsS0FBSztLQUNmO0FBQ0wsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vaG9va3MvdXNlLXVzZXIudHM/ZWQ2ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdXNlU1dSIGZyb20gXCJzd3JcIjtcbmltcG9ydCB7IEJyYW5jaCwgUmVzcG9uc2VCcmFuY2ggfSBmcm9tIFwifi9saWIvY29tbW9uSW50ZXJmYWNlc1wiO1xuaW1wb3J0IHsgZmV0Y2hlckJsb2JXaXRoVG9rZW4sIGZldGNoZXJXaXRoVG9rZW4gfSBmcm9tIFwifi9saWIvZmV0Y2hlclwiO1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlVXNlckltYWdlKHVzZXJJZDogbnVtYmVyKSB7XG4gICAgY29uc3QgeyBkYXRhOiBpbWFnZSwgZXJyb3IgfSA9IHVzZVNXUih1c2VySWQgPyBgL2FwaS91c2Vycy9pbWFnZS8ke3VzZXJJZH1gIDogbnVsbCwgZmV0Y2hlckJsb2JXaXRoVG9rZW4pXG4gICAgcmV0dXJuIHtcbiAgICAgICAgaW1hZ2U6IGltYWdlLFxuICAgICAgICBpc0xvYWRpbmc6IGVycm9yIHx8ICFpbWFnZSxcbiAgICAgICAgZXJyb3I6IGVycm9yXG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdXNlVXNlckJyYW5jaCh1c2VySWQ6IG51bWJlcik6IFJlc3BvbnNlQnJhbmNoIHtcbiAgICBjb25zdCB7IGRhdGE6IGJyYW5jaCwgZXJyb3IgfSA9IHVzZVNXUih1c2VySWQgPyBgL2FwaS91c2Vycy9icmFuY2hlcy8ke3VzZXJJZH1gIDogbnVsbCwgZmV0Y2hlcldpdGhUb2tlbilcbiAgICByZXR1cm4ge1xuICAgICAgICBicmFuY2g6IGJyYW5jaCA/IGJyYW5jaC5kYXRhLmJyYW5jaGVzIDogbnVsbCxcbiAgICAgICAgaXNMb2FkaW5nOiBlcnJvciB8fCAhYnJhbmNoLFxuICAgICAgICBlcnJvcjogZXJyb3JcbiAgICB9XG59Il0sIm5hbWVzIjpbInVzZVNXUiIsImZldGNoZXJCbG9iV2l0aFRva2VuIiwiZmV0Y2hlcldpdGhUb2tlbiIsInVzZVVzZXJJbWFnZSIsInVzZXJJZCIsImRhdGEiLCJpbWFnZSIsImVycm9yIiwiaXNMb2FkaW5nIiwidXNlVXNlckJyYW5jaCIsImJyYW5jaCIsImJyYW5jaGVzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./hooks/use-user.ts\n");

/***/ }),

/***/ "./lib/fetcher.ts":
/*!************************!*\
  !*** ./lib/fetcher.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"fetcher\": () => (/* binding */ fetcher),\n/* harmony export */   \"fetcherBlobWithToken\": () => (/* binding */ fetcherBlobWithToken),\n/* harmony export */   \"fetcherWithToken\": () => (/* binding */ fetcherWithToken)\n/* harmony export */ });\nconst fetcher = (url)=>fetch(\"http://localhost:4000\" + url, {\n        mode: \"cors\",\n        method: \"GET\",\n        headers: {\n            \"Referrer-Policy\": \"origin-when-cross-origin\",\n            \"Access-Control-Allow-Origin\": `${\"http://localhost:3000\"}`\n        }\n    }).then((res)=>{\n        return res.json().then((data)=>{\n            if (res.ok) {\n                return Promise.resolve(data);\n            } else {\n                return Promise.reject(data);\n            }\n        });\n    });\nconst fetcherWithToken = (url)=>fetch(\"http://localhost:4000\" + url, {\n        mode: \"cors\",\n        method: \"GET\",\n        headers: {\n            \"Referrer-Policy\": \"origin-when-cross-origin\",\n            \"Authorization\": \"Bearer \" + localStorage.getItem(\"auth_token\"),\n            \"Access-Control-Allow-Origin\": `${\"http://localhost:3000\"}`\n        }\n    }).then((res)=>{\n        return res.json().then((data)=>{\n            if (res.ok) {\n                return Promise.resolve(data);\n            } else {\n                return Promise.reject(data);\n            }\n        });\n    });\nconst fetcherBlobWithToken = (url)=>fetch(\"http://localhost:4000\" + url, {\n        mode: \"cors\",\n        method: \"GET\",\n        headers: {\n            \"Referrer-Policy\": \"origin-when-cross-origin\",\n            \"Authorization\": \"Bearer \" + localStorage.getItem(\"auth_token\"),\n            \"Access-Control-Allow-Origin\": `${\"http://localhost:3000\"}`\n        }\n    }).then((res)=>{\n        return res.blob().then((data)=>{\n            if (res.ok) {\n                return Promise.resolve(data);\n            } else {\n                return Promise.reject(data);\n            }\n        });\n    });\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvZmV0Y2hlci50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBTyxNQUFNQSxPQUFPLEdBQUcsQ0FBQ0MsR0FBVyxHQUFLQyxLQUFLLENBQUNDLHVCQUErQixHQUFHRixHQUFHLEVBQUU7UUFDakZLLElBQUksRUFBQyxNQUFNO1FBQ1hDLE1BQU0sRUFBRSxLQUFLO1FBQ2JDLE9BQU8sRUFBRTtZQUNMLGlCQUFpQixFQUFFLDBCQUEwQjtZQUM3Qyw2QkFBNkIsRUFBRSxDQUFDLEVBQUVMLHVCQUEyQixDQUFDLENBQUM7U0FDbEU7S0FDSixDQUFDLENBQUNPLElBQUksQ0FBQ0MsQ0FBQUEsR0FBRyxHQUFJO1FBQ1gsT0FBT0EsR0FBRyxDQUFDQyxJQUFJLEVBQUUsQ0FBQ0YsSUFBSSxDQUFDRyxDQUFBQSxJQUFJLEdBQUk7WUFDM0IsSUFBSUYsR0FBRyxDQUFDRyxFQUFFLEVBQUU7Z0JBQ1IsT0FBT0MsT0FBTyxDQUFDQyxPQUFPLENBQUNILElBQUksQ0FBQztZQUNoQyxPQUFPO2dCQUNILE9BQU9FLE9BQU8sQ0FBQ0UsTUFBTSxDQUFDSixJQUFJLENBQUM7WUFDL0IsQ0FBQztRQUNMLENBQUMsQ0FBQztJQUNOLENBQUMsQ0FBQztBQUVLLE1BQU1LLGdCQUFnQixHQUFHLENBQUNqQixHQUFXLEdBQUtDLEtBQUssQ0FBQ0MsdUJBQStCLEdBQUdGLEdBQUcsRUFBRTtRQUMxRkssSUFBSSxFQUFDLE1BQU07UUFDWEMsTUFBTSxFQUFFLEtBQUs7UUFDYkMsT0FBTyxFQUFFO1lBQ0wsaUJBQWlCLEVBQUUsMEJBQTBCO1lBQzdDLGVBQWUsRUFBRSxTQUFTLEdBQUdXLFlBQVksQ0FBQ0MsT0FBTyxDQUFDLFlBQVksQ0FBQztZQUMvRCw2QkFBNkIsRUFBRSxDQUFDLEVBQUVqQix1QkFBMkIsQ0FBQyxDQUFDO1NBQ2xFO0tBQ0osQ0FBQyxDQUFDTyxJQUFJLENBQUNDLENBQUFBLEdBQUcsR0FBSTtRQUNYLE9BQU9BLEdBQUcsQ0FBQ0MsSUFBSSxFQUFFLENBQUNGLElBQUksQ0FBQ0csQ0FBQUEsSUFBSSxHQUFJO1lBQzNCLElBQUlGLEdBQUcsQ0FBQ0csRUFBRSxFQUFFO2dCQUNSLE9BQU9DLE9BQU8sQ0FBQ0MsT0FBTyxDQUFDSCxJQUFJLENBQUM7WUFDaEMsT0FBTztnQkFDSCxPQUFPRSxPQUFPLENBQUNFLE1BQU0sQ0FBQ0osSUFBSSxDQUFDO1lBQy9CLENBQUM7UUFDTCxDQUFDLENBQUM7SUFDTixDQUFDLENBQUM7QUFFSyxNQUFNUSxvQkFBb0IsR0FBRyxDQUFDcEIsR0FBVyxHQUFLQyxLQUFLLENBQUNDLHVCQUErQixHQUFHRixHQUFHLEVBQUU7UUFDOUZLLElBQUksRUFBQyxNQUFNO1FBQ1hDLE1BQU0sRUFBRSxLQUFLO1FBQ2JDLE9BQU8sRUFBRTtZQUNMLGlCQUFpQixFQUFFLDBCQUEwQjtZQUM3QyxlQUFlLEVBQUUsU0FBUyxHQUFHVyxZQUFZLENBQUNDLE9BQU8sQ0FBQyxZQUFZLENBQUM7WUFDL0QsNkJBQTZCLEVBQUUsQ0FBQyxFQUFFakIsdUJBQTJCLENBQUMsQ0FBQztTQUNsRTtLQUNKLENBQUMsQ0FBQ08sSUFBSSxDQUFDQyxDQUFBQSxHQUFHLEdBQUk7UUFDWCxPQUFPQSxHQUFHLENBQUNXLElBQUksRUFBRSxDQUFDWixJQUFJLENBQUNHLENBQUFBLElBQUksR0FBSTtZQUMzQixJQUFJRixHQUFHLENBQUNHLEVBQUUsRUFBRTtnQkFDUixPQUFPQyxPQUFPLENBQUNDLE9BQU8sQ0FBQ0gsSUFBSSxDQUFDO1lBQ2hDLE9BQU87Z0JBQ0gsT0FBT0UsT0FBTyxDQUFDRSxNQUFNLENBQUNKLElBQUksQ0FBQztZQUMvQixDQUFDO1FBQ0wsQ0FBQyxDQUFDO0lBQ04sQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9saWIvZmV0Y2hlci50cz9mYjIwIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBmZXRjaGVyID0gKHVybDogc3RyaW5nKSA9PiBmZXRjaChwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUElfVVJMICsgdXJsLCB7XG4gICAgbW9kZTonY29ycycsXG4gICAgbWV0aG9kOiAnR0VUJyxcbiAgICBoZWFkZXJzOiB7XG4gICAgICAgICdSZWZlcnJlci1Qb2xpY3knOiAnb3JpZ2luLXdoZW4tY3Jvc3Mtb3JpZ2luJyxcbiAgICAgICAgJ0FjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpbic6IGAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1VSTH1gXG4gICAgfVxufSkudGhlbihyZXMgPT4ge1xuICAgIHJldHVybiByZXMuanNvbigpLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgIGlmIChyZXMub2spIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoZGF0YSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChkYXRhKVxuICAgICAgICB9XG4gICAgfSlcbn0pXG5cbmV4cG9ydCBjb25zdCBmZXRjaGVyV2l0aFRva2VuID0gKHVybDogc3RyaW5nKSA9PiBmZXRjaChwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUElfVVJMICsgdXJsLCB7XG4gICAgbW9kZTonY29ycycsXG4gICAgbWV0aG9kOiAnR0VUJyxcbiAgICBoZWFkZXJzOiB7XG4gICAgICAgICdSZWZlcnJlci1Qb2xpY3knOiAnb3JpZ2luLXdoZW4tY3Jvc3Mtb3JpZ2luJyxcbiAgICAgICAgJ0F1dGhvcml6YXRpb24nOiBcIkJlYXJlciBcIiArIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiYXV0aF90b2tlblwiKSxcbiAgICAgICAgJ0FjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpbic6IGAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1VSTH1gXG4gICAgfVxufSkudGhlbihyZXMgPT4ge1xuICAgIHJldHVybiByZXMuanNvbigpLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgIGlmIChyZXMub2spIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoZGF0YSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChkYXRhKVxuICAgICAgICB9XG4gICAgfSlcbn0pXG5cbmV4cG9ydCBjb25zdCBmZXRjaGVyQmxvYldpdGhUb2tlbiA9ICh1cmw6IHN0cmluZykgPT4gZmV0Y2gocHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJX1VSTCArIHVybCwge1xuICAgIG1vZGU6J2NvcnMnLFxuICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgaGVhZGVyczoge1xuICAgICAgICAnUmVmZXJyZXItUG9saWN5JzogJ29yaWdpbi13aGVuLWNyb3NzLW9yaWdpbicsXG4gICAgICAgICdBdXRob3JpemF0aW9uJzogXCJCZWFyZXIgXCIgKyBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImF1dGhfdG9rZW5cIiksXG4gICAgICAgICdBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW4nOiBgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19VUkx9YFxuICAgIH1cbn0pLnRoZW4ocmVzID0+IHtcbiAgICByZXR1cm4gcmVzLmJsb2IoKS50aGVuKGRhdGEgPT4ge1xuICAgICAgICBpZiAocmVzLm9rKSB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGRhdGEpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZGF0YSlcbiAgICAgICAgfVxuICAgIH0pXG59KSJdLCJuYW1lcyI6WyJmZXRjaGVyIiwidXJsIiwiZmV0Y2giLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfQVBJX1VSTCIsIm1vZGUiLCJtZXRob2QiLCJoZWFkZXJzIiwiTkVYVF9QVUJMSUNfVVJMIiwidGhlbiIsInJlcyIsImpzb24iLCJkYXRhIiwib2siLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImZldGNoZXJXaXRoVG9rZW4iLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiZmV0Y2hlckJsb2JXaXRoVG9rZW4iLCJibG9iIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/fetcher.ts\n");

/***/ }),

/***/ "./lib/utils.ts":
/*!**********************!*\
  !*** ./lib/utils.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Role\": () => (/* binding */ Role),\n/* harmony export */   \"downloadCSV\": () => (/* binding */ downloadCSV),\n/* harmony export */   \"redirectByRole\": () => (/* binding */ redirectByRole)\n/* harmony export */ });\nconst redirectByRole = (router, role)=>{\n    switch(role){\n        case Role.SCOUT:\n            router.push(\"/dashboard/info\", \"/dashboard\", {\n                shallow: true\n            });\n            break;\n        case Role.RAMA:\n            router.push(\"/dashboard/jefe-rama\", \"/dashboard\", {\n                shallow: true\n            });\n            break;\n        case Role.GRUPO:\n            router.push(\"/dashboard/jefe-grupo/inscripciones\", \"/dashboard\", {\n                shallow: true\n            });\n            break;\n        case Role.TESORERO:\n            router.push(\"/dashboard/tesorero\", \"/dashboard\", {\n                shallow: true\n            });\n            break;\n        default:\n            router.push(\"/dashboard/info\", \"/dashboard\", {\n                shallow: true\n            });\n            break;\n    }\n};\nfunction downloadCSV() {\n    fetch(\"http://localhost:4000\" + `/api/payments/generateCSV/1`, {\n        method: \"GET\",\n        headers: new Headers({\n            \"Referrer-Policy\": \"origin-when-cross-origin\",\n            \"Authorization\": \"Bearer \" + localStorage.getItem(\"auth_token\"),\n            \"Access-Control-Allow-Origin\": `${\"http://localhost:3000\"}`\n        })\n    }).then((response)=>response.blob()).then((blob)=>{\n        var url = window.URL.createObjectURL(blob);\n        Object.assign(document.createElement(\"a\"), {\n            target: \"_blank\",\n            href: url,\n            download: `pagos-${new Date().toISOString().split(\"T\")[0]}.csv`\n        }).click();\n        setTimeout(function() {\n            window.URL.revokeObjectURL(url);\n        }, 100);\n    });\n}\nvar Role;\n(function(Role) {\n    Role[Role[\"SCOUT\"] = 0] = \"SCOUT\";\n    Role[Role[\"TESORERO\"] = 1] = \"TESORERO\";\n    Role[Role[\"RAMA\"] = 2] = \"RAMA\";\n    Role[Role[\"GRUPO\"] = 3] = \"GRUPO\";\n    Role[Role[\"ADMIN\"] = 4] = \"ADMIN\";\n})(Role || (Role = {}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUpBLElBQUksQ0FLWnNDLE9BQUssSUFBTEEsQ0FBSyxJQUFMQSxPQUFLO0dBTEd0QyxJQUFJLEtBQUpBLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL2xpYi91dGlscy50cz9mNzQ1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRSb3V0ZXIsIFNpbmdsZXRvblJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuXG5leHBvcnQgY29uc3QgcmVkaXJlY3RCeVJvbGUgPSAocm91dGVyIDogU2luZ2xldG9uUm91dGVyIHwgTmV4dFJvdXRlciwgcm9sZSA6IFJvbGUpID0+IHtcbiAgICBzd2l0Y2gocm9sZSkge1xuICAgICAgICBjYXNlIFJvbGUuU0NPVVQ6XG4gICAgICAgICAgICByb3V0ZXIucHVzaChcIi9kYXNoYm9hcmQvaW5mb1wiLCAnL2Rhc2hib2FyZCcsIHtzaGFsbG93OiB0cnVlfSlcbiAgICAgICAgICAgIGJyZWFrXG4gICAgICAgIGNhc2UgUm9sZS5SQU1BOlxuICAgICAgICAgICAgcm91dGVyLnB1c2goXCIvZGFzaGJvYXJkL2plZmUtcmFtYVwiLCAnL2Rhc2hib2FyZCcsIHtzaGFsbG93OiB0cnVlfSlcbiAgICAgICAgICAgIGJyZWFrXG4gICAgICAgIGNhc2UgUm9sZS5HUlVQTzpcbiAgICAgICAgICAgIHJvdXRlci5wdXNoKFwiL2Rhc2hib2FyZC9qZWZlLWdydXBvL2luc2NyaXBjaW9uZXNcIiwgJy9kYXNoYm9hcmQnLCB7c2hhbGxvdzogdHJ1ZX0pXG4gICAgICAgICAgICBicmVha1xuICAgICAgICBjYXNlIFJvbGUuVEVTT1JFUk86XG4gICAgICAgICAgICByb3V0ZXIucHVzaChcIi9kYXNoYm9hcmQvdGVzb3Jlcm9cIiwgJy9kYXNoYm9hcmQnLCB7c2hhbGxvdzogdHJ1ZX0pXG4gICAgICAgICAgICBicmVha1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcm91dGVyLnB1c2goXCIvZGFzaGJvYXJkL2luZm9cIiwgJy9kYXNoYm9hcmQnLCB7c2hhbGxvdzogdHJ1ZX0pXG4gICAgICAgICAgICBicmVha1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRvd25sb2FkQ1NWKCkge1xuICAgIGZldGNoKHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FQSV9VUkwgKyBgL2FwaS9wYXltZW50cy9nZW5lcmF0ZUNTVi8xYCwge1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBoZWFkZXJzOiBuZXcgSGVhZGVycyh7XG4gICAgICAgICAgICAnUmVmZXJyZXItUG9saWN5JzogJ29yaWdpbi13aGVuLWNyb3NzLW9yaWdpbicsXG4gICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6IFwiQmVhcmVyIFwiICsgbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJhdXRoX3Rva2VuXCIpLFxuICAgICAgICAgICAgJ0FjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpbic6IGAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1VSTH1gXG4gICAgICAgIH0pXG4gICAgfSlcbiAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5ibG9iKCkpXG4gICAgLnRoZW4oYmxvYiA9PiB7XG4gICAgICAgIHZhciB1cmwgPSB3aW5kb3cuVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyksIHsgdGFyZ2V0OiAnX2JsYW5rJywgaHJlZjogdXJsLCBkb3dubG9hZDogYHBhZ29zLSR7bmV3IERhdGUoKS50b0lTT1N0cmluZygpLnNwbGl0KCdUJylbMF19LmNzdmB9KS5jbGljaygpO1xuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICB3aW5kb3cuVVJMLnJldm9rZU9iamVjdFVSTCh1cmwpO1xuICAgICAgICB9LCAxMDApO1xuICAgIH0pO1xufVxuXG5leHBvcnQgZW51bSBSb2xlIHtcbiAgICBTQ09VVCxcbiAgICBURVNPUkVSTyxcbiAgICBSQU1BLFxuICAgIEdSVVBPLFxuICAgIEFETUlOXG59Il0sIm5hbWVzIjpbInJlZGlyZWN0QnlSb2xlIiwicm91dGVyIiwicm9sZSIsIlJvbGUiLCJTQ09VVCIsInB1c2giLCJzaGFsbG93IiwiUkFNQSIsIkdSVVBPIiwiVEVTT1JFUk8iLCJkb3dubG9hZENTViIsImZldGNoIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0FQSV9VUkwiLCJtZXRob2QiLCJoZWFkZXJzIiwiSGVhZGVycyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJORVhUX1BVQkxJQ19VUkwiLCJ0aGVuIiwicmVzcG9uc2UiLCJibG9iIiwidXJsIiwid2luZG93IiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwiT2JqZWN0IiwiYXNzaWduIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwidGFyZ2V0IiwiaHJlZiIsImRvd25sb2FkIiwiRGF0ZSIsInRvSVNPU3RyaW5nIiwic3BsaXQiLCJjbGljayIsInNldFRpbWVvdXQiLCJyZXZva2VPYmplY3RVUkwiLCJBRE1JTiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/utils.ts\n");

/***/ }),

/***/ "./lib/withAuth.ts":
/*!*************************!*\
  !*** ./lib/withAuth.ts ***!
  \*************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"withAuth\": () => (/* binding */ withAuth)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _hooks_use_current_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/hooks/use-current-user */ \"./hooks/use-current-user.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks_use_current_user__WEBPACK_IMPORTED_MODULE_2__]);\n_hooks_use_current_user__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nfunction getRedirectTo() {\n    if (false) {}\n    return null;\n}\nconst withAuth = (WrappedComponent, role, own)=>{\n    const Wrapper = (props)=>{\n        const { user , isLoading: loadingUser , error: userError  } = (0,_hooks_use_current_user__WEBPACK_IMPORTED_MODULE_2__.useCurrentUser)();\n        (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{\n            const redir = getRedirectTo();\n            if (loadingUser && userError) {\n                next_router__WEBPACK_IMPORTED_MODULE_1___default().replace(`/login?r=${redir.pathname + encodeURIComponent(redir.search)}`, \"/login\", {\n                    shallow: true\n                });\n                return;\n            }\n            if (!loadingUser && !user.status) {\n                next_router__WEBPACK_IMPORTED_MODULE_1___default().push(\"/logout\");\n                return;\n            }\n            if (role && !loadingUser) {\n                if (own && role != user.roles.id - 1 || role > user.roles.id - 1) {\n                    next_router__WEBPACK_IMPORTED_MODULE_1___default().push(\"/dashboard\");\n                }\n            }\n        }, [\n            loadingUser,\n            userError\n        ]);\n        return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(WrappedComponent, props, null);\n    };\n    return Wrapper;\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (withAuth);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvd2l0aEF1dGgudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFnRDtBQUNoQjtBQUN5QjtBQUd6RCxTQUFTSSxhQUFhLEdBQUc7SUFDdkIsSUFBSSxLQUFnRCxFQUFFLEVBRXJEO0lBQ0QsT0FBTyxJQUFJO0FBQ2IsQ0FBQztBQUVNLE1BQU1HLFFBQVEsR0FBRyxDQUFDQyxnQkFBcUIsRUFBRUMsSUFBWSxFQUFFQyxHQUFjLEdBQUs7SUFDL0UsTUFBTUMsT0FBTyxHQUFHQyxDQUFBQSxLQUFLLEdBQUk7UUFFdkIsTUFBTSxFQUFFQyxJQUFJLEdBQUVDLFNBQVMsRUFBRUMsV0FBVyxHQUFFQyxLQUFLLEVBQUVDLFNBQVMsR0FBRSxHQUFHZCx1RUFBYyxFQUFFO1FBRTNFRixnREFBUyxDQUFDLElBQU07WUFDZCxNQUFNaUIsS0FBSyxHQUFHZCxhQUFhLEVBQUU7WUFDN0IsSUFBSVcsV0FBVyxJQUFJRSxTQUFTLEVBQUU7Z0JBQzVCZiwwREFBYyxDQUFDLENBQUMsU0FBUyxFQUFFZ0IsS0FBSyxDQUFDRSxRQUFRLEdBQUdDLGtCQUFrQixDQUFDSCxLQUFLLENBQUNJLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxRQUFRLEVBQUU7b0JBQUVDLE9BQU8sRUFBRSxJQUFJO2lCQUFFLENBQUM7Z0JBQzVHLE9BQU07WUFDUixDQUFDO1lBQ0QsSUFBSSxDQUFDUixXQUFXLElBQUksQ0FBQ0YsSUFBSSxDQUFDVyxNQUFNLEVBQUU7Z0JBQ2hDdEIsdURBQVcsQ0FBQyxTQUFTLENBQUM7Z0JBQ3RCLE9BQU07WUFDUixDQUFDO1lBQ0QsSUFBSU8sSUFBSSxJQUFJLENBQUNNLFdBQVcsRUFBRTtnQkFDeEIsSUFBSUwsR0FBRyxJQUFJRCxJQUFJLElBQUlJLElBQUksQ0FBQ2EsS0FBSyxDQUFDQyxFQUFFLEdBQUMsQ0FBQyxJQUFJbEIsSUFBSSxHQUFHSSxJQUFJLENBQUNhLEtBQUssQ0FBQ0MsRUFBRSxHQUFDLENBQUMsRUFBRTtvQkFDNUR6Qix1REFBVyxDQUFDLFlBQVksQ0FBQztnQkFDM0IsQ0FBQztZQUNILENBQUM7UUFDSCxDQUFDLEVBQUU7WUFBQ2EsV0FBVztZQUFFRSxTQUFTO1NBQUMsQ0FBQztRQUU1QixPQUFPakIsb0RBQWEsQ0FBQ1EsZ0JBQWdCLEVBQUVJLEtBQUssRUFBRSxJQUFJLENBQUM7SUFDckQsQ0FBQztJQUVELE9BQU9ELE9BQU87QUFDaEIsQ0FBQztBQUVELGlFQUFlSixRQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9saWIvd2l0aEF1dGgudHM/YWY3ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVFbGVtZW50LCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgeyB1c2VDdXJyZW50VXNlciB9IGZyb20gJ34vaG9va3MvdXNlLWN1cnJlbnQtdXNlcidcbmltcG9ydCB7IFJvbGUgfSBmcm9tICcuL3V0aWxzJ1xuXG5mdW5jdGlvbiBnZXRSZWRpcmVjdFRvKCkge1xuICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LmxvY2F0aW9uKSB7XG4gICAgcmV0dXJuIHdpbmRvdy5sb2NhdGlvblxuICB9XG4gIHJldHVybiBudWxsXG59XG5cbmV4cG9ydCBjb25zdCB3aXRoQXV0aCA9IChXcmFwcGVkQ29tcG9uZW50OiBhbnksIHJvbGU/IDogUm9sZSwgb3duPyA6IGJvb2xlYW4pID0+IHtcbiAgY29uc3QgV3JhcHBlciA9IHByb3BzID0+IHtcblxuICAgIGNvbnN0IHsgdXNlciwgaXNMb2FkaW5nOiBsb2FkaW5nVXNlciwgZXJyb3I6IHVzZXJFcnJvciB9ID0gdXNlQ3VycmVudFVzZXIoKVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgIGNvbnN0IHJlZGlyID0gZ2V0UmVkaXJlY3RUbygpXG4gICAgICBpZiAobG9hZGluZ1VzZXIgJiYgdXNlckVycm9yKSB7XG4gICAgICAgIFJvdXRlci5yZXBsYWNlKGAvbG9naW4/cj0ke3JlZGlyLnBhdGhuYW1lICsgZW5jb2RlVVJJQ29tcG9uZW50KHJlZGlyLnNlYXJjaCl9YCwgJy9sb2dpbicsIHsgc2hhbGxvdzogdHJ1ZSB9KVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIGlmICghbG9hZGluZ1VzZXIgJiYgIXVzZXIuc3RhdHVzKSB7XG4gICAgICAgIFJvdXRlci5wdXNoKCcvbG9nb3V0JylcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICBpZiAocm9sZSAmJiAhbG9hZGluZ1VzZXIpIHtcbiAgICAgICAgaWYgKG93biAmJiByb2xlICE9IHVzZXIucm9sZXMuaWQtMSB8fCByb2xlID4gdXNlci5yb2xlcy5pZC0xKSB7XG4gICAgICAgICAgUm91dGVyLnB1c2goJy9kYXNoYm9hcmQnKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgW2xvYWRpbmdVc2VyLCB1c2VyRXJyb3JdKVxuXG4gICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoV3JhcHBlZENvbXBvbmVudCwgcHJvcHMsIG51bGwpXG4gIH1cblxuICByZXR1cm4gV3JhcHBlclxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoQXV0aCJdLCJuYW1lcyI6WyJjcmVhdGVFbGVtZW50IiwidXNlRWZmZWN0IiwiUm91dGVyIiwidXNlQ3VycmVudFVzZXIiLCJnZXRSZWRpcmVjdFRvIiwid2luZG93IiwibG9jYXRpb24iLCJ3aXRoQXV0aCIsIldyYXBwZWRDb21wb25lbnQiLCJyb2xlIiwib3duIiwiV3JhcHBlciIsInByb3BzIiwidXNlciIsImlzTG9hZGluZyIsImxvYWRpbmdVc2VyIiwiZXJyb3IiLCJ1c2VyRXJyb3IiLCJyZWRpciIsInJlcGxhY2UiLCJwYXRobmFtZSIsImVuY29kZVVSSUNvbXBvbmVudCIsInNlYXJjaCIsInNoYWxsb3ciLCJzdGF0dXMiLCJwdXNoIiwicm9sZXMiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/withAuth.ts\n");

/***/ }),

/***/ "./pages/dashboard/index.tsx":
/*!***********************************!*\
  !*** ./pages/dashboard/index.tsx ***!
  \***********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _hooks_use_current_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/hooks/use-current-user */ \"./hooks/use-current-user.ts\");\n/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~/lib/utils */ \"./lib/utils.ts\");\n/* harmony import */ var _lib_withAuth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ~/lib/withAuth */ \"./lib/withAuth.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks_use_current_user__WEBPACK_IMPORTED_MODULE_3__, _lib_withAuth__WEBPACK_IMPORTED_MODULE_5__]);\n([_hooks_use_current_user__WEBPACK_IMPORTED_MODULE_3__, _lib_withAuth__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n\nconst MainDashboard = ()=>{\n    const { user , isLoading: loadingUser  } = (0,_hooks_use_current_user__WEBPACK_IMPORTED_MODULE_3__.useCurrentUser)();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (!loadingUser) {\n            (0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.redirectByRole)(router, _lib_utils__WEBPACK_IMPORTED_MODULE_4__.Role[_lib_utils__WEBPACK_IMPORTED_MODULE_4__.Role[user.roles.id - 1]]);\n        }\n    }, [\n        user\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_lib_withAuth__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(MainDashboard));\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9kYXNoYm9hcmQvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUN3QztBQUNOO0FBQ3dCO0FBQ1A7QUFDZDtBQUVyQyxNQUFNTSxhQUFhLEdBQWEsSUFBTTtJQUNsQyxNQUFNLEVBQUVDLElBQUksR0FBRUMsU0FBUyxFQUFFQyxXQUFXLEdBQUUsR0FBR1AsdUVBQWMsRUFBRTtJQUN6RCxNQUFNUSxNQUFNLEdBQUdWLHNEQUFTLEVBQUU7SUFDMUJDLGdEQUFTLENBQUMsSUFBTTtRQUNaLElBQUksQ0FBQ1EsV0FBVyxFQUFFO1lBQ2ROLDBEQUFjLENBQUNPLE1BQU0sRUFBRU4sNENBQUksQ0FBQ0EsNENBQUksQ0FBQ0csSUFBSSxDQUFDSSxLQUFLLENBQUNDLEVBQUUsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3ZELENBQUM7SUFDTCxDQUFDLEVBQUU7UUFBQ0wsSUFBSTtLQUFDLENBQUM7SUFDVixxQkFBTyw2SUFBSztBQUNoQixDQUFDO0FBRUQsaUVBQWVGLHlEQUFRLENBQUNDLGFBQWEsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vcGFnZXMvZGFzaGJvYXJkL2luZGV4LnRzeD81ZTg0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRQYWdlIH0gZnJvbSBcIm5leHRcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VDdXJyZW50VXNlciB9IGZyb20gXCJ+L2hvb2tzL3VzZS1jdXJyZW50LXVzZXJcIjtcbmltcG9ydCB7IHJlZGlyZWN0QnlSb2xlLCBSb2xlIH0gZnJvbSBcIn4vbGliL3V0aWxzXCI7XG5pbXBvcnQgd2l0aEF1dGggZnJvbSAnfi9saWIvd2l0aEF1dGgnXG5cbmNvbnN0IE1haW5EYXNoYm9hcmQ6IE5leHRQYWdlID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgdXNlciwgaXNMb2FkaW5nOiBsb2FkaW5nVXNlciB9ID0gdXNlQ3VycmVudFVzZXIoKVxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKCFsb2FkaW5nVXNlcikge1xuICAgICAgICAgICAgcmVkaXJlY3RCeVJvbGUocm91dGVyLCBSb2xlW1JvbGVbdXNlci5yb2xlcy5pZC0xXV0pXG4gICAgICAgIH1cbiAgICB9LCBbdXNlcl0pXG4gICAgcmV0dXJuIDw+PC8+XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhBdXRoKE1haW5EYXNoYm9hcmQpXG5cblxuIl0sIm5hbWVzIjpbInVzZVJvdXRlciIsInVzZUVmZmVjdCIsInVzZUN1cnJlbnRVc2VyIiwicmVkaXJlY3RCeVJvbGUiLCJSb2xlIiwid2l0aEF1dGgiLCJNYWluRGFzaGJvYXJkIiwidXNlciIsImlzTG9hZGluZyIsImxvYWRpbmdVc2VyIiwicm91dGVyIiwicm9sZXMiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/dashboard/index.tsx\n");

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

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

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
var __webpack_exports__ = (__webpack_exec__("./pages/dashboard/index.tsx"));
module.exports = __webpack_exports__;

})();