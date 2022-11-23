exports.id = 235;
exports.ids = [235];
exports.modules = {

/***/ 4378:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "DashboardContainer_container__zYolR"
};


/***/ }),

/***/ 3250:
/***/ ((module) => {

// Exports
module.exports = {
	"navg_pills": "Navigation_navg_pills__euBwu",
	"active": "Navigation_active__Pjkx_",
	"data": "Navigation_data__NbnuB"
};


/***/ }),

/***/ 235:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ DashboardContainer)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./styles/dashboard/DashboardContainer.module.scss
var DashboardContainer_module = __webpack_require__(4378);
var DashboardContainer_module_default = /*#__PURE__*/__webpack_require__.n(DashboardContainer_module);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./styles/dashboard/Navigation.module.scss
var Navigation_module = __webpack_require__(3250);
var Navigation_module_default = /*#__PURE__*/__webpack_require__.n(Navigation_module);
;// CONCATENATED MODULE: ./components/dashboard/Navigation.tsx




function Navigation() {
    const router = (0,router_.useRouter)();
    const { userId  } = router.query;
    const isCurrent = (href)=>{
        const isCurrentPath = router.pathname === href || router.asPath === href;
        return isCurrentPath ? (Navigation_module_default()).active : null;
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (Navigation_module_default()).navg_pills,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: `/dashboard/info${userId ? "/" + userId : ""}`,
                children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                    className: `${(Navigation_module_default()).data} ${isCurrent(`/dashboard/info${userId ? "/" + userId : ""}`)}`,
                    children: "Datos personales"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: `/dashboard/info/acudientes${userId ? "/" + userId : ""}`,
                children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                    className: `${(Navigation_module_default()).data} ${isCurrent(`/dashboard/info/acudientes${userId ? "/" + userId : ""}`)}`,
                    children: "Datos acudientes"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: `/dashboard/info/medicos${userId ? "/" + userId : ""}`,
                children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                    className: `${(Navigation_module_default()).data} ${isCurrent(`/dashboard/info/medicos${userId ? "/" + userId : ""}`)}`,
                    children: "Datos m\xe9dicos"
                })
            })
        ]
    });
}

;// CONCATENATED MODULE: ./components/dashboard/DashboardContainer.tsx



function DashboardContainer({ children  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Navigation, {}),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (DashboardContainer_module_default()).container,
                children: children
            })
        ]
    });
}


/***/ })

};
;