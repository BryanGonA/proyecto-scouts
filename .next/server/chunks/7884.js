exports.id = 7884;
exports.ids = [7884];
exports.modules = {

/***/ 1285:
/***/ ((module) => {

// Exports
module.exports = {
	"sidebar": "Slidebar_sidebar__pw5I_",
	"sidelink": "Slidebar_sidelink__I0n_O",
	"active": "Slidebar_active__BkFah",
	"closebtn": "Slidebar_closebtn__Q2ruM",
	"openbtn": "Slidebar_openbtn__WaRF4",
	"content": "Slidebar_content__s2yv4",
	"sideicon": "Slidebar_sideicon__ypeH_",
	"header": "Slidebar_header__JuoDb",
	"image": "Slidebar_image__V0t9C",
	"name": "Slidebar_name__qFgGz",
	"branch": "Slidebar_branch__qdB8B"
};


/***/ }),

/***/ 7884:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ SidebarScout)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_dashboard_sidebar_Sidebar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8006);
/* harmony import */ var _sidebar_SideLink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5853);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_dashboard_sidebar_Sidebar__WEBPACK_IMPORTED_MODULE_1__, _sidebar_SideLink__WEBPACK_IMPORTED_MODULE_2__]);
([_components_dashboard_sidebar_Sidebar__WEBPACK_IMPORTED_MODULE_1__, _sidebar_SideLink__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



function SidebarScout({ content  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_dashboard_sidebar_Sidebar__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        content: content,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_sidebar_SideLink__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                href: "/dashboard/info",
                name: "Informaci\xf3n personal",
                svg: "/img/dashboard/info.svg"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_sidebar_SideLink__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                href: "/dashboard/progress",
                name: "Mi progreso",
                svg: "/img/dashboard/progress.svg"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_sidebar_SideLink__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                href: "/dashboard/payments",
                name: "Mis pagos",
                svg: "/img/dashboard/payments.svg"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_sidebar_SideLink__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                href: "/dashboard/cambio",
                name: "Cambiar contrase\xf1a",
                svg: "/img/dashboard/change.svg"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_sidebar_SideLink__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                href: "/logout",
                name: "Salir",
                svg: "/img/dashboard/logout.svg"
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 963:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Header)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_dashboard_Slidebar_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1285);
/* harmony import */ var _styles_dashboard_Slidebar_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_dashboard_Slidebar_module_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks_use_current_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8941);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Sidebar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8006);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks_use_current_user__WEBPACK_IMPORTED_MODULE_2__, _Sidebar__WEBPACK_IMPORTED_MODULE_4__]);
([_hooks_use_current_user__WEBPACK_IMPORTED_MODULE_2__, _Sidebar__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






function Header({ branchName  }) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    const { user , isLoading: loadingUser , error: userError  } = (0,_hooks_use_current_user__WEBPACK_IMPORTED_MODULE_2__/* .useCurrentUser */ .xJ)();
    const { image , isLoading: loadingImage  } = (0,_hooks_use_current_user__WEBPACK_IMPORTED_MODULE_2__/* .useCurrentImage */ .Sf)();
    let branchP;
    if (!branchName) {
        const { branch , isLoading: loadingBranch  } = (0,_hooks_use_current_user__WEBPACK_IMPORTED_MODULE_2__/* .useCurrentBranch */ .ph)();
        branchP = /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
            className: (_styles_dashboard_Slidebar_module_scss__WEBPACK_IMPORTED_MODULE_5___default().branch),
            children: loadingBranch ? "Cargando..." : branch.nameBranch
        });
    } else {
        branchP = /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
            className: (_styles_dashboard_Slidebar_module_scss__WEBPACK_IMPORTED_MODULE_5___default().branch),
            children: branchName
        });
    }
    const responsive = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_Sidebar__WEBPACK_IMPORTED_MODULE_4__/* .SidebarContext */ .l);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_styles_dashboard_Slidebar_module_scss__WEBPACK_IMPORTED_MODULE_5___default().header),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                className: (_styles_dashboard_Slidebar_module_scss__WEBPACK_IMPORTED_MODULE_5___default().image),
                src: loadingImage ? "/img/profile-picture.png" : URL.createObjectURL(image)
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: (_styles_dashboard_Slidebar_module_scss__WEBPACK_IMPORTED_MODULE_5___default().name),
                children: loadingUser ? "Cargando..." : (user.name + " " + user.lastName).toLowerCase()
            }),
            branchP
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2481:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ SideGroup)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function SideGroup({ children  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: children
    });
}


/***/ }),

/***/ 5853:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ SideLink)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_dashboard_Slidebar_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1285);
/* harmony import */ var _styles_dashboard_Slidebar_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_dashboard_Slidebar_module_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Sidebar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8006);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Sidebar__WEBPACK_IMPORTED_MODULE_4__]);
_Sidebar__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






function SideLink({ href , name , svg  }) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const responsive = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_Sidebar__WEBPACK_IMPORTED_MODULE_4__/* .SidebarContext */ .l);
    const isCurrentPath = router.pathname.startsWith(href) || router.asPath.startsWith(href);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        href: href,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: `d-flex align-items-center justify-content-start ${(_styles_dashboard_Slidebar_module_scss__WEBPACK_IMPORTED_MODULE_5___default().sidelink)} ${isCurrentPath ? (_styles_dashboard_Slidebar_module_scss__WEBPACK_IMPORTED_MODULE_5___default().active) : ""}`,
            children: [
                svg ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                    className: (_styles_dashboard_Slidebar_module_scss__WEBPACK_IMPORTED_MODULE_5___default().sideicon),
                    src: svg
                }) : null,
                !responsive ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                    children: name
                }) : null
            ]
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8006:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Sidebar),
/* harmony export */   "l": () => (/* binding */ SidebarContext)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _hooks_use_windowDimensions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9283);
/* harmony import */ var _styles_dashboard_Slidebar_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1285);
/* harmony import */ var _styles_dashboard_Slidebar_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_dashboard_Slidebar_module_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(963);
/* harmony import */ var _SideGroup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2481);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Header__WEBPACK_IMPORTED_MODULE_4__]);
_Header__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







const SidebarContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_2__.createContext)({});
function Sidebar({ content , branch , children  }) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    const sidebar = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
    const sideContent = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
    const { height , width  } = (0,_hooks_use_windowDimensions__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)();
    const { 0: responsive , 1: setResponsive  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const open = ()=>{
        sidebar.current.style.width = "100%";
    };
    const close = ()=>{
        sidebar.current.style.width = "0";
    };
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        setResponsive(width <= 720);
    }, [
        width
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        open();
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SidebarContext.Provider, {
        value: responsive,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "d-flex",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: `${(_styles_dashboard_Slidebar_module_scss__WEBPACK_IMPORTED_MODULE_6___default().sidebar)} `,
                    ref: sidebar,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Header__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                            branchName: branch
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_SideGroup__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                            children: children
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: `${(_styles_dashboard_Slidebar_module_scss__WEBPACK_IMPORTED_MODULE_6___default().content)} flex-fill`,
                    ref: sideContent,
                    children: content
                })
            ]
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9283:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ useWindowDimensions)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useWindowDimensions() {
    const hasWindow = "undefined" !== "undefined";
    function getWindowDimensions() {
        const width = hasWindow ? window.innerWidth : null;
        const height = hasWindow ? window.innerHeight : null;
        return {
            width,
            height
        };
    }
    const { 0: windowDimensions , 1: setWindowDimensions  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(getWindowDimensions());
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }
        if (hasWindow) {
            window.addEventListener("resize", handleResize);
            return ()=>window.removeEventListener("resize", handleResize);
        }
    }, [
        hasWindow
    ]);
    return windowDimensions;
}


/***/ })

};
;