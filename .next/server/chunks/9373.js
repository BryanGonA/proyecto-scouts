exports.id = 9373;
exports.ids = [9373];
exports.modules = {

/***/ 5622:
/***/ ((module) => {

// Exports
module.exports = {
	"title": "change_title__h6SLj",
	"pass": "change_pass__3wRQU",
	"container": "change_container__jIo5F",
	"containerp": "change_containerp__2if_5",
	"button": "change_button__sz4lN",
	"eyes": "change_eyes__tcbQN",
	"alert": "change_alert__8BcQA"
};


/***/ }),

/***/ 9373:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Change)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_change_change_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5622);
/* harmony import */ var _styles_change_change_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_change_change_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var sweetalert2_react_content__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3810);
/* harmony import */ var sweetalert2_react_content__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2_react_content__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);





function Change({ token  }) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const pass = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const passd = ()=>{
        if (pass.current.type === "password") {
            pass.current.type = "text";
            setChange(false);
        } else {
            pass.current.type = "password";
            setChange(true);
        }
    };
    const two = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const twoo = ()=>{
        if (two.current.type == "password") {
            two.current.type = "text";
            setOnly(false);
        } else {
            two.current.type = "password";
            setOnly(true);
        }
    };
    const Swal = __webpack_require__(271);
    const MySwal = sweetalert2_react_content__WEBPACK_IMPORTED_MODULE_2___default()(Swal);
    const confirm = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const button = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const onSubmit = (e)=>{
        e.preventDefault();
        if (!localStorage.getItem("auth_token")) {
            MySwal.fire({
                icon: "error",
                title: "No estas autenticado",
                text: "Debes iniciar sesi\xf3n o entrar al enlace de recuperar tu contrase\xf1a",
                showConfirmButton: false,
                showDenyButton: true,
                denyButtonText: `Cerrar`
            }).then(()=>{
                router.push("/login");
            });
            return;
        }
        if (two.current.value === "" || pass.current.value === "") {
            return;
        }
        if (pass.current.value !== two.current.value) {
            pass.current.value = "";
            two.current.value = "";
            Swal.fire({
                icon: "error",
                title: "\xa1Cuidado!",
                text: "Las contrase\xf1as no coinciden",
                confirmButtonColor: "#E01C1C",
                confirmButtonText: "Reintentar"
            });
        } else {
            const data = {
                password: pass.current.value
            };
            fetch(`${"http://localhost:4000"}/api/auth/reset-password`, {
                mode: "cors",
                method: "PUT",
                headers: {
                    "Referrer-Policy": "origin-when-cross-origin",
                    "Authorization": "Bearer " + localStorage.getItem("auth_token"),
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": `${"http://localhost:3000"}`
                },
                body: JSON.stringify(data)
            }).then((res)=>{
                return res.json().then((data)=>{
                    if (res.ok) {
                        return Promise.resolve(data);
                    } else {
                        return Promise.reject(data);
                    }
                });
            }).then(()=>{
                pass.current.readOnly = true;
                two.current.readOnly = true;
                button.current.style.display = "none";
                pass.current.value = "";
                two.current.value = "";
                MySwal.fire({
                    icon: "success",
                    title: "Contrase\xf1a actualizada!",
                    text: "Tu contrase\xf1a fue actualizada correctamente",
                    confirmButtonColor: "#31B411",
                    confirmButtonText: "Continuar"
                }).then((result)=>{
                    if (result.isConfirmed) {
                        router.push("/login");
                    }
                });
            }).catch((error)=>{
                MySwal.fire({
                    icon: "error",
                    title: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        children: "Hay errores"
                    }),
                    text: error.message,
                    showConfirmButton: false,
                    showDenyButton: true,
                    denyButtonText: `Cerrar`
                });
            });
        }
    };
    const { 0: change , 1: setChange  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    const { 0: only , 1: setOnly  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (token) {
            localStorage.setItem("auth_token", token);
            router.push("/cambio");
        } /* else if (!localStorage.getItem("auth_token")) {
      MySwal.fire({
        icon: 'error',
        title: 'No estas autenticado',
        text: 'Debes iniciar sesión o entrar al enlace de recuperar tu contraseña',
        showConfirmButton: false,
        showDenyButton: true,
        denyButtonText: `Cerrar`,
      }).then((result) => {
        router.push('/login')
      })
    } */ 
    });
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: (_styles_change_change_module_scss__WEBPACK_IMPORTED_MODULE_4___default().containerp),
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "row",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "col-12 borde",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (_styles_change_change_module_scss__WEBPACK_IMPORTED_MODULE_4___default().title),
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                children: "\xa1Cambia tu contrase\xf1a!"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("form", {
                            onSubmit: onSubmit,
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_styles_change_change_module_scss__WEBPACK_IMPORTED_MODULE_4___default().container),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "input-group mb-3",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                    type: "password",
                                                    required: true,
                                                    minLength: 8,
                                                    id: "password",
                                                    className: `${(_styles_change_change_module_scss__WEBPACK_IMPORTED_MODULE_4___default().pass)} form-control `,
                                                    ref: pass,
                                                    placeholder: "Contrase\xf1a nueva",
                                                    "aria-label": "Recipient's username",
                                                    "aria-describedby": "button-addon2"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "input-group-append",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                        className: `${(_styles_change_change_module_scss__WEBPACK_IMPORTED_MODULE_4___default().eyes)} btn btn-outline-secondar `,
                                                        onClick: passd,
                                                        type: "button",
                                                        id: "button-addon2",
                                                        children: change ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                                            width: "1.5em",
                                                            height: "1.5em",
                                                            viewBox: "0 0 16 16",
                                                            className: "bi bi-eye-slash",
                                                            fill: "#FFFFFF",
                                                            xmlns: "http://www.w3.org/2000/svg",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                    d: "M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                    d: "M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299l.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                    d: "M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709z"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                    "fill-rule": "evenodd",
                                                                    d: "M13.646 14.354l-12-12 .708-.708 12 12-.708.708z"
                                                                })
                                                            ]
                                                        }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                                            width: "1.5em",
                                                            height: "1.5em",
                                                            viewBox: "0 0 16 16",
                                                            className: "bi bi-eye",
                                                            fill: "#FFFFFF",
                                                            xmlns: "http://www.w3.org/2000/svg",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                    "fill-rule": "evenodd",
                                                                    d: "M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.134 13.134 0 0 0 1.66 2.043C4.12 11.332 5.88 12.5 8 12.5c2.12 0 3.879-1.168 5.168-2.457A13.134 13.134 0 0 0 14.828 8a13.133 13.133 0 0 0-1.66-2.043C11.879 4.668 10.119 3.5 8 3.5c-2.12 0-3.879 1.168-5.168 2.457A13.133 13.133 0 0 0 1.172 8z"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                    "fill-rule": "evenodd",
                                                                    d: "M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"
                                                                })
                                                            ]
                                                        })
                                                    })
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "input-group mb-3",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                    type: "password",
                                                    required: true,
                                                    minLength: 8,
                                                    id: "confirmpassword",
                                                    className: `${(_styles_change_change_module_scss__WEBPACK_IMPORTED_MODULE_4___default().pass)} form-control `,
                                                    pattern: "[A-z]{4-16}",
                                                    ref: two,
                                                    placeholder: "Confirmar contrase\xf1a nueva",
                                                    "aria-label": "Recipient's username",
                                                    "aria-describedby": "button-addon2"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "input-group-append",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                        className: `${(_styles_change_change_module_scss__WEBPACK_IMPORTED_MODULE_4___default().eyes)} btn btn-outline-secondar `,
                                                        onClick: twoo,
                                                        type: "button",
                                                        id: "button-addon2",
                                                        children: only ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                                            width: "1.5em",
                                                            height: "1.5em",
                                                            viewBox: "0 0 16 16",
                                                            className: "bi bi-eye-slash",
                                                            fill: "#FFFFFF",
                                                            xmlns: "http://www.w3.org/2000/svg",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                    d: "M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                    d: "M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299l.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                    d: "M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709z"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                    "fill-rule": "evenodd",
                                                                    d: "M13.646 14.354l-12-12 .708-.708 12 12-.708.708z"
                                                                })
                                                            ]
                                                        }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                                            width: "1.5em",
                                                            height: "1.5em",
                                                            viewBox: "0 0 16 16",
                                                            className: "bi bi-eye",
                                                            fill: "#FFFFFF",
                                                            xmlns: "http://www.w3.org/2000/svg",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                    "fill-rule": "evenodd",
                                                                    d: "M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.134 13.134 0 0 0 1.66 2.043C4.12 11.332 5.88 12.5 8 12.5c2.12 0 3.879-1.168 5.168-2.457A13.134 13.134 0 0 0 14.828 8a13.133 13.133 0 0 0-1.66-2.043C11.879 4.668 10.119 3.5 8 3.5c-2.12 0-3.879 1.168-5.168 2.457A13.133 13.133 0 0 0 1.172 8z"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                    "fill-rule": "evenodd",
                                                                    d: "M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"
                                                                })
                                                            ]
                                                        })
                                                    })
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: (_styles_change_change_module_scss__WEBPACK_IMPORTED_MODULE_4___default().button),
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                            type: "submit",
                                            id: "changepassword",
                                            className: "btn btn-danger",
                                            ref: button,
                                            children: " Cambiar contrase\xf1a "
                                        })
                                    })
                                ]
                            })
                        })
                    ]
                })
            })
        })
    });
}


/***/ })

};
;