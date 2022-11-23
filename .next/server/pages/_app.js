(() => {
var exports = {};
exports.id = 2888;
exports.ids = [2888];
exports.modules = {

/***/ 9588:
/***/ ((module) => {

// Exports
module.exports = {
	"nav": "Header_nav__dSGyd",
	"navbtn": "Header_navbtn__jPrwT",
	"active": "Header_active__m39ru",
	"navicon": "Header_navicon__4o7_9",
	"logo": "Header_logo__RLDBz",
	"checkbtn": "Header_checkbtn__bsATl",
	"check": "Header_check__dOr1q",
	"ul": "Header_ul__iwzjp",
	"responsive": "Header_responsive__YqQa6",
	"dropdown-content": "Header_dropdown-content__hhA4k",
	"dropdown": "Header_dropdown__MML22",
	"collapsible": "Header_collapsible__NoUG7",
	"active_collapse": "Header_active_collapse__Hh4uh",
	"active_sub": "Header_active_sub___AkRP",
	"content": "Header_content__Vjeom",
	"header": "Header_header__5gUEb",
	"wide-svg": "Header_wide-svg__ZJwL8",
	"red": "Header_red__CPGtB",
	"wide-back": "Header_wide-back__qnM33"
};


/***/ }),

/***/ 1705:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Footer)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./components/botones-flotantes/Subir.tsx


function Subir() {
    const { 0: hide , 1: setHide  } = (0,external_react_.useState)(true);
    const handleScroll = ()=>{
        window.scrollY < 100 ? !hide && setHide(true) : hide && setHide(false);
    };
    (0,external_react_.useEffect)(()=>{
        window.addEventListener("scroll", handleScroll);
        return ()=>window.removeEventListener("scroll", handleScroll);
    });
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: hide ? null : /*#__PURE__*/ jsx_runtime_.jsx("span", {
            className: "subir",
            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                href: "#",
                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                    src: "/img/subir.svg",
                    alt: "subir"
                })
            })
        })
    });
}

;// CONCATENATED MODULE: ./components/botones-flotantes/Whatsapp.tsx

function Whatsapp() {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "whatsapp",
        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
            href: "https://api.whatsapp.com/send?phone=573014301702&text=Hola,%20quisiera%20conocer%20mas%20del%20grupo%20scout centinelas 113%20!",
            target: "_blank",
            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                src: "/img/whatsapp.png",
                alt: "whatsapp"
            })
        })
    });
}

;// CONCATENATED MODULE: ./components/layout/footer/Footer.tsx



function Footer() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("footer", {
                className: "footer",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "row footer_margin",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-sm-3 col-12 logos",
                                "data-align": "center",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    src: "/img/pa\xf1oleta.png",
                                    alt: "pa\xf1oleta"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-sm-3 col-6 terminos",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    href: "/documents/TERMINOS_Y_CONDICIONES.pdf",
                                    children: "T\xe9rminos y condiciones"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-sm-3 col-6 condiciones",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    href: "/documents/POLITICAS.pdf",
                                    children: "Pol\xedticas de privacidad"
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "col-sm-3 col-12 redes ",
                                "data-align": "center",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        href: "https://www.facebook.com/scoutcentinelas113",
                                        target: "_blank",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: "/img/facebook.svg",
                                            alt: "facebook"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        href: "https://www.instagram.com/scoutcentinelas.113",
                                        target: "_blank",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: "/img/instagram.svg",
                                            alt: "instagram"
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "row footer_margin",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-12 texto_copy",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                children: [
                                    "Grupo Scout Centinelas 113 • Todos los derechos reservados • ",
                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        href: "/documents/CREDITOS.pdf",
                                        target: "_blank",
                                        children: "Dise\xf1ado por InnoveSolutions-NICK"
                                    })
                                ]
                            })
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Whatsapp, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Subir, {})
        ]
    });
}


/***/ }),

/***/ 2744:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Dropdown)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_layout_Header_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9588);
/* harmony import */ var _styles_layout_Header_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_layout_Header_module_scss__WEBPACK_IMPORTED_MODULE_3__);




function Dropdown({ href , name  }) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const isCurrentPath = router.pathname === href || router.asPath === href;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        href: href,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
            className: isCurrentPath ? (_styles_layout_Header_module_scss__WEBPACK_IMPORTED_MODULE_3___default().active_sub) : "",
            children: name
        })
    });
}


/***/ }),

/***/ 1140:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Header)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _HeaderNavigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1460);
/* harmony import */ var _NavigationLink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4539);
/* harmony import */ var _styles_layout_Header_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9588);
/* harmony import */ var _styles_layout_Header_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_layout_Header_module_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Dropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2744);
/* harmony import */ var _hooks_use_current_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8941);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks_use_current_user__WEBPACK_IMPORTED_MODULE_4__]);
_hooks_use_current_user__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






function Header() {
    const { isLoading: loadingUser , error: userError  } = (0,_hooks_use_current_user__WEBPACK_IMPORTED_MODULE_4__/* .useCurrentUser */ .xJ)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("header", {
        className: (_styles_layout_Header_module_scss__WEBPACK_IMPORTED_MODULE_5___default().header),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: `${(_styles_layout_Header_module_scss__WEBPACK_IMPORTED_MODULE_5___default()["wide-svg"])} w-100`,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                        className: (_styles_layout_Header_module_scss__WEBPACK_IMPORTED_MODULE_5___default().red),
                        viewBox: "0 0 500 150",
                        preserveAspectRatio: "none",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                            d: "M-13.26,101.14 C149.99,150.00 136.29,73.52 508.17,74.50 L500.00,0.00 L0.00,0.00 Z"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: `${(_styles_layout_Header_module_scss__WEBPACK_IMPORTED_MODULE_5___default()["wide-back"])} w-100`,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                            viewBox: "0 0 500 150",
                            preserveAspectRatio: "none",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                d: "M-17.21,110.03 C149.26,174.17 137.97,95.22 505.36,100.16 L500.00,0.00 L0.00,0.00 Z"
                            })
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_HeaderNavigation__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_NavigationLink__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                        href: "/",
                        name: "Inicio"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_NavigationLink__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                        href: "/nosotros",
                        name: "Sobre nosotros"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_NavigationLink__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                        href: "/noticias",
                        name: "Noticias"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_NavigationLink__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                        href: "#",
                        name: "Ramas",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Dropdown__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                href: "/ramas/cachorros",
                                name: "Cachorros"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Dropdown__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                href: "/ramas/lobatos",
                                name: "Lobatos"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Dropdown__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                href: "/ramas/webelos",
                                name: "Webelos"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Dropdown__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                href: "/ramas/scouts",
                                name: "Scouts"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Dropdown__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                href: "/ramas/rovers",
                                name: "Rovers"
                            })
                        ]
                    }),
                    !loadingUser && !userError ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_NavigationLink__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                href: "/dashboard",
                                name: "Mi tablero"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_NavigationLink__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                href: "/logout",
                                name: "Salir",
                                svg: "/img/dashboard/logout-w.svg"
                            })
                        ]
                    }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_NavigationLink__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                href: "/unete",
                                name: "\xdanete"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_NavigationLink__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                href: "/login",
                                name: "Ingresar",
                                svg: "/img/usuario.svg"
                            })
                        ]
                    })
                ]
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1460:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ HeaderNavigation)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_layout_Header_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9588);
/* harmony import */ var _styles_layout_Header_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_layout_Header_module_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5515);
/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_cookie__WEBPACK_IMPORTED_MODULE_4__);






function HeaderNavigation({ children  }) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const navBar = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const button = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const { 0: active , 1: setActive  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [cookies, setCookie] = (0,react_cookie__WEBPACK_IMPORTED_MODULE_4__.useCookies)([
        "visited"
    ]);
    const onClick = async ()=>{
        setActive(!active);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (active) {
            document.body.className = "scroll";
            button.current.className = `${(_styles_layout_Header_module_scss__WEBPACK_IMPORTED_MODULE_5___default().checkbtn)} hamburger hamburger--slider is-active`;
        } else {
            if (cookies.visited ? cookies.visited : false) {
                document.body.className = "";
            }
            button.current.className = `${(_styles_layout_Header_module_scss__WEBPACK_IMPORTED_MODULE_5___default().checkbtn)} hamburger hamburger--slider`;
        }
        const handleRouteChange = (url)=>{
            if (url !== "/ramas") {
                setActive(false);
            }
        };
        router.events.on("routeChangeStart", handleRouteChange);
        // If the component is unmounted, unsubscribe
        // from the event with the `off` method:
        return ()=>{
            router.events.off("routeChangeStart", handleRouteChange);
        };
    }, [
        active
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("nav", {
        className: (_styles_layout_Header_module_scss__WEBPACK_IMPORTED_MODULE_5___default().nav),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                className: `${(_styles_layout_Header_module_scss__WEBPACK_IMPORTED_MODULE_5___default().checkbtn)} hamburger hamburger--slider`,
                onClick: onClick,
                ref: button,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: "hamburger-box",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "hamburger-inner"
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                href: "/",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                    className: (_styles_layout_Header_module_scss__WEBPACK_IMPORTED_MODULE_5___default().logo),
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        src: "/img/pa\xf1oleta.png",
                        alt: "Pa\xf1oleta"
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                className: active ? `${(_styles_layout_Header_module_scss__WEBPACK_IMPORTED_MODULE_5___default().ul)} ${(_styles_layout_Header_module_scss__WEBPACK_IMPORTED_MODULE_5___default().responsive)}` : (_styles_layout_Header_module_scss__WEBPACK_IMPORTED_MODULE_5___default().ul),
                ref: navBar,
                children: children
            })
        ]
    });
}


/***/ }),

/***/ 4539:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ NavigationLink)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_layout_Header_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9588);
/* harmony import */ var _styles_layout_Header_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_layout_Header_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);





function NavigationLink({ href , name , svg , children  }) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    const { 0: active , 1: setActive  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    const isCurrentPath = router.pathname === href || router.asPath === href || router.pathname.includes("dashboard") && href.includes("dashboard");
    const content = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);
    const onClick = ()=>{
        setActive(!active);
        if (content.current) {
            if (content.current.style.maxHeight) {
                content.current.style.maxHeight = null;
            } else {
                content.current.style.maxHeight = content.current.scrollHeight + "px";
            }
        }
    };
    const link = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
        className: `${(_styles_layout_Header_module_scss__WEBPACK_IMPORTED_MODULE_4___default().navbtn)} ${isCurrentPath ? (_styles_layout_Header_module_scss__WEBPACK_IMPORTED_MODULE_4___default().active) : ""} ${children ? (_styles_layout_Header_module_scss__WEBPACK_IMPORTED_MODULE_4___default().collapsible) : ""} ${children && active ? (_styles_layout_Header_module_scss__WEBPACK_IMPORTED_MODULE_4___default().active_collapse) : ""}`,
        onClick: onClick,
        children: [
            name,
            svg ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                className: (_styles_layout_Header_module_scss__WEBPACK_IMPORTED_MODULE_4___default().navicon),
                src: svg
            }) : null
        ]
    });
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
        className: children ? (_styles_layout_Header_module_scss__WEBPACK_IMPORTED_MODULE_4___default().dropdown) : null,
        children: children ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                link,
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: `${(_styles_layout_Header_module_scss__WEBPACK_IMPORTED_MODULE_4___default()["dropdown-content"])} `,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_styles_layout_Header_module_scss__WEBPACK_IMPORTED_MODULE_4___default().content),
                        ref: content,
                        children: children
                    })
                })
            ]
        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
            href: href,
            children: link
        })
    });
}


/***/ }),

/***/ 5656:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5515);
/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_cookie__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_layout_header_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1140);
/* harmony import */ var _components_layout_footer_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1705);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_layout_header_Header__WEBPACK_IMPORTED_MODULE_3__]);
_components_layout_header_Header__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
/**
 * En esta clase se puede definir la "plantilla" de la aplicación, tales como el header
 * y footer, y el archivo de estilos
 */ 


// Componentes de React importados que se definen en la "plantilla"


// Importe glogal en la aplicación del archivo principal de estilos (No se necesitar incluir en otras vistas)

function App({ Component , pageProps  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_cookie__WEBPACK_IMPORTED_MODULE_1__.CookiesProvider, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        href: "/css/bootstrap.min.css",
                        rel: "stylesheet"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("script", {
                        defer: true,
                        src: "https://use.fontawesome.com/releases/v5.14.0/js/all.js",
                        integrity: "sha384-3Nqiqht3ZZEO8FKj7GR1upiI385J92VwWNLj+FqHxtLYxd9l+WYpeqSOrLh0T12c",
                        crossOrigin: "anonymous"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: "Grupo Scouts Centinelas 113 - Cali"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_layout_header_Header__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                ...pageProps
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_layout_footer_Footer__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {})
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 5515:
/***/ ((module) => {

"use strict";
module.exports = require("react-cookie");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 5941:
/***/ ((module) => {

"use strict";
module.exports = import("swr");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,1664,8941], () => (__webpack_exec__(5656)));
module.exports = __webpack_exports__;

})();