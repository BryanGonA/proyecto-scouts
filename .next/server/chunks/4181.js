"use strict";
exports.id = 4181;
exports.ids = [4181];
exports.modules = {

/***/ 4181:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export withAuth */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks_use_current_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8941);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks_use_current_user__WEBPACK_IMPORTED_MODULE_2__]);
_hooks_use_current_user__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



function getRedirectTo() {
    if (false) {}
    return null;
}
const withAuth = (WrappedComponent, role, own)=>{
    const Wrapper = (props)=>{
        const { user , isLoading: loadingUser , error: userError  } = (0,_hooks_use_current_user__WEBPACK_IMPORTED_MODULE_2__/* .useCurrentUser */ .xJ)();
        (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
            const redir = getRedirectTo();
            if (loadingUser && userError) {
                next_router__WEBPACK_IMPORTED_MODULE_1___default().replace(`/login?r=${redir.pathname + encodeURIComponent(redir.search)}`, "/login", {
                    shallow: true
                });
                return;
            }
            if (!loadingUser && !user.status) {
                next_router__WEBPACK_IMPORTED_MODULE_1___default().push("/logout");
                return;
            }
            if (role && !loadingUser) {
                if (own && role != user.roles.id - 1 || role > user.roles.id - 1) {
                    next_router__WEBPACK_IMPORTED_MODULE_1___default().push("/dashboard");
                }
            }
        }, [
            loadingUser,
            userError
        ]);
        return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(WrappedComponent, props, null);
    };
    return Wrapper;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (withAuth);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;