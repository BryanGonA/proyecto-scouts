"use strict";
exports.id = 8941;
exports.ids = [8941];
exports.modules = {

/***/ 8941:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Sf": () => (/* binding */ useCurrentImage),
/* harmony export */   "ph": () => (/* binding */ useCurrentBranch),
/* harmony export */   "xJ": () => (/* binding */ useCurrentUser)
/* harmony export */ });
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5941);
/* harmony import */ var _lib_fetcher__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(949);
/* harmony import */ var _use_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6556);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swr__WEBPACK_IMPORTED_MODULE_0__, _use_user__WEBPACK_IMPORTED_MODULE_1__]);
([swr__WEBPACK_IMPORTED_MODULE_0__, _use_user__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



function useCurrentUser() {
    const { data: user , error  } = (0,swr__WEBPACK_IMPORTED_MODULE_0__["default"])("/api/auth/profile", _lib_fetcher__WEBPACK_IMPORTED_MODULE_2__/* .fetcherWithToken */ .bC);
    return {
        user: user ? user.user : null,
        isLoading: error || !user,
        error: error
    };
}
function useCurrentBranch() {
    const { data  } = (0,swr__WEBPACK_IMPORTED_MODULE_0__["default"])("/api/auth/profile", _lib_fetcher__WEBPACK_IMPORTED_MODULE_2__/* .fetcherWithToken */ .bC);
    return (0,_use_user__WEBPACK_IMPORTED_MODULE_1__/* .useUserBranch */ .M)(data ? data.user.id : null);
}
function useCurrentImage() {
    const { data  } = (0,swr__WEBPACK_IMPORTED_MODULE_0__["default"])("/api/auth/profile", _lib_fetcher__WEBPACK_IMPORTED_MODULE_2__/* .fetcherWithToken */ .bC);
    return (0,_use_user__WEBPACK_IMPORTED_MODULE_1__/* .useUserImage */ .a)(data ? data.user.id : null);
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6556:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "M": () => (/* binding */ useUserBranch),
/* harmony export */   "a": () => (/* binding */ useUserImage)
/* harmony export */ });
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5941);
/* harmony import */ var _lib_fetcher__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(949);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swr__WEBPACK_IMPORTED_MODULE_0__]);
swr__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


function useUserImage(userId) {
    const { data: image , error  } = (0,swr__WEBPACK_IMPORTED_MODULE_0__["default"])(userId ? `/api/users/image/${userId}` : null, _lib_fetcher__WEBPACK_IMPORTED_MODULE_1__/* .fetcherBlobWithToken */ .jh);
    return {
        image: image,
        isLoading: error || !image,
        error: error
    };
}
function useUserBranch(userId) {
    const { data: branch , error  } = (0,swr__WEBPACK_IMPORTED_MODULE_0__["default"])(userId ? `/api/users/branches/${userId}` : null, _lib_fetcher__WEBPACK_IMPORTED_MODULE_1__/* .fetcherWithToken */ .bC);
    return {
        branch: branch ? branch.data.branches : null,
        isLoading: error || !branch,
        error: error
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 949:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "bC": () => (/* binding */ fetcherWithToken),
/* harmony export */   "jh": () => (/* binding */ fetcherBlobWithToken)
/* harmony export */ });
/* unused harmony export fetcher */
const fetcher = (url)=>fetch("http://localhost:4000" + url, {
        mode: "cors",
        method: "GET",
        headers: {
            "Referrer-Policy": "origin-when-cross-origin",
            "Access-Control-Allow-Origin": `${"http://localhost:3000"}`
        }
    }).then((res)=>{
        return res.json().then((data)=>{
            if (res.ok) {
                return Promise.resolve(data);
            } else {
                return Promise.reject(data);
            }
        });
    });
const fetcherWithToken = (url)=>fetch("http://localhost:4000" + url, {
        mode: "cors",
        method: "GET",
        headers: {
            "Referrer-Policy": "origin-when-cross-origin",
            "Authorization": "Bearer " + localStorage.getItem("auth_token"),
            "Access-Control-Allow-Origin": `${"http://localhost:3000"}`
        }
    }).then((res)=>{
        return res.json().then((data)=>{
            if (res.ok) {
                return Promise.resolve(data);
            } else {
                return Promise.reject(data);
            }
        });
    });
const fetcherBlobWithToken = (url)=>fetch("http://localhost:4000" + url, {
        mode: "cors",
        method: "GET",
        headers: {
            "Referrer-Policy": "origin-when-cross-origin",
            "Authorization": "Bearer " + localStorage.getItem("auth_token"),
            "Access-Control-Allow-Origin": `${"http://localhost:3000"}`
        }
    }).then((res)=>{
        return res.blob().then((data)=>{
            if (res.ok) {
                return Promise.resolve(data);
            } else {
                return Promise.reject(data);
            }
        });
    });


/***/ })

};
;