exports.id = 5976;
exports.ids = [5976];
exports.modules = {

/***/ 88:
/***/ ((module) => {

// Exports
module.exports = {
	"titulo": "Parents_titulo__eKV8K",
	"contenedor": "Parents_contenedor___5Vun",
	"labels": "Parents_labels__qKAPu",
	"caso": "Parents_caso__hIxY4",
	"container": "Parents_container__kMABD",
	"content": "Parents_content__m7Mc5",
	"titleE": "Parents_titleE__Vppyr",
	"title": "Parents_title__D6WU3",
	"editarB": "Parents_editarB__MzCPZ",
	"editarI": "Parents_editarI__b9LWf",
	"mostrar": "Parents_mostrar__A1HEs",
	"ocultarB": "Parents_ocultarB__9Uk92",
	"mostrarB": "Parents_mostrarB__tWya0",
	"contenedor_btns": "Parents_contenedor_btns__CRHTW",
	"label1": "Parents_label1__F917o"
};


/***/ }),

/***/ 1939:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Emergency)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_dashboard_info_Parents_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(88);
/* harmony import */ var _styles_dashboard_info_Parents_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_dashboard_info_Parents_module_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(271);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var sweetalert2_react_content__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3810);
/* harmony import */ var sweetalert2_react_content__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2_react_content__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _hooks_use_current_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8941);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks_use_current_user__WEBPACK_IMPORTED_MODULE_4__]);
_hooks_use_current_user__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






function Emergency({ title , nameOneEmergency , nameTwoEmergency , telephoneOneEmergency , telephoneTwoEmergency , userId  }) {
    const { user , isLoading: loadingUser , error: userError  } = (0,_hooks_use_current_user__WEBPACK_IMPORTED_MODULE_4__/* .useCurrentUser */ .xJ)();
    const MySwal = sweetalert2_react_content__WEBPACK_IMPORTED_MODULE_3___default()((sweetalert2__WEBPACK_IMPORTED_MODULE_2___default()));
    const i_name1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const i_name2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const i_phone1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const i_phone2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const btn_actualizar = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const btn_cancelar = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const { 0: form , 1: setForm  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        nameOneEmergency,
        nameTwoEmergency,
        telephoneOneEmergency,
        telephoneTwoEmergency
    });
    var modo_editar = "editar";
    var modo_mostrar = "mostrar";
    function cambiar_inputs(modo) {
        if (modo === "editar") {
            i_name1.current.disabled = false;
            i_name1.current.className = `${(_styles_dashboard_info_Parents_module_scss__WEBPACK_IMPORTED_MODULE_5___default().editarI)}`;
            i_name2.current.disabled = false;
            i_name2.current.className = `${(_styles_dashboard_info_Parents_module_scss__WEBPACK_IMPORTED_MODULE_5___default().editarI)}`;
            i_phone1.current.disabled = false;
            i_phone1.current.className = `${(_styles_dashboard_info_Parents_module_scss__WEBPACK_IMPORTED_MODULE_5___default().editarI)}`;
            i_phone2.current.disabled = false;
            i_phone2.current.className = `${(_styles_dashboard_info_Parents_module_scss__WEBPACK_IMPORTED_MODULE_5___default().editarI)}`;
        }
        if (modo === "mostrar") {
            i_name1.current.disabled = true;
            i_name1.current.className = `${(_styles_dashboard_info_Parents_module_scss__WEBPACK_IMPORTED_MODULE_5___default().mostrar)}`;
            i_name2.current.disabled = true;
            i_name2.current.className = `${(_styles_dashboard_info_Parents_module_scss__WEBPACK_IMPORTED_MODULE_5___default().mostrar)}`;
            i_phone1.current.disabled = true;
            i_phone1.current.className = `${(_styles_dashboard_info_Parents_module_scss__WEBPACK_IMPORTED_MODULE_5___default().mostrar)}`;
            i_phone2.current.disabled = true;
            i_phone2.current.className = `${(_styles_dashboard_info_Parents_module_scss__WEBPACK_IMPORTED_MODULE_5___default().mostrar)}`;
        }
    }
    const actualizarEmergencia = async (datos)=>{
        if (!loadingUser) {
            consultar(user.id, datos);
        }
    };
    function consultar(id, datos) {
        fetch(`${"http://localhost:4000"}/api/users/editDatahealth/${id}`, {
            //mode: 'cors',
            method: "PUT",
            headers: {
                "Referrer-Policy": "origin-when-cross-origin",
                "Authorization": "Bearer " + localStorage.getItem("auth_token"),
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": `${"http://localhost:3000"}`
            },
            body: JSON.stringify(datos)
        }).then((res)=>{
            return res.json().then((data)=>{
                if (res.ok) {
                    return Promise.resolve(data);
                } else {
                    return Promise.reject(data);
                }
            });
        }).then((data)=>{
            MySwal.fire({
                icon: "success",
                title: "Datos Actualizados",
                text: "Los datos se han actualizado satisfactoriamente",
                confirmButtonColor: "#83DC2D",
                confirmButtonText: "Aceptar"
            });
            setForm({
                nameOneEmergency: data.data.nameOneEmergency,
                nameTwoEmergency: data.data.nameTwoEmergency,
                telephoneOneEmergency: data.data.telephoneOneEmergency,
                telephoneTwoEmergency: data.data.telephoneTwoEmergency
            });
        }).catch((error)=>{
            MySwal.fire({
                icon: "error",
                title: "Error",
                text: "Error al actualizar los datos",
                confirmButtonColor: "#E71919",
                confirmButtonText: "Aceptar"
            });
            cancelar();
            let datos = {
                nameOneEmergency: i_name1.current.value,
                nameTwoEmergency: i_name2.current.value,
                telephoneOneEmergency: i_phone1.current.value,
                telephoneTwoEmergency: i_phone2.current.value
            };
            setForm(datos);
        });
    }
    function editar() {
        //setEditando(true)
        //editarEls(ids)
        cambiar_inputs(modo_editar);
        btn_actualizar.current.style.visibility = "visible";
        btn_cancelar.current.style.visibility = "visible";
    }
    function actualizar() {
        cambiar_inputs(modo_mostrar);
        //setEditando(false)
        btn_actualizar.current.style.visibility = "hidden";
        btn_cancelar.current.style.visibility = "hidden";
        let datos = {
            nameOneEmergency: i_name1.current.value,
            nameTwoEmergency: i_name2.current.value,
            telephoneOneEmergency: i_phone1.current.value,
            telephoneTwoEmergency: i_phone2.current.value
        };
        setForm(datos);
        if (userId) {
            consultar(userId, datos);
        } else {
            actualizarEmergencia(datos);
        }
    //window.location.reload();
    }
    function cancelar() {
        cambiar_inputs(modo_mostrar);
        //setEditando(false)
        //ocultar de nuevo los botones
        btn_actualizar.current.style.visibility = "hidden";
        btn_cancelar.current.style.visibility = "hidden";
        i_name1.current.value = form.nameOneEmergency;
        i_name2.current.value = form.nameTwoEmergency;
        i_phone1.current.value = form.telephoneOneEmergency;
        i_phone2.current.value = form.telephoneTwoEmergency;
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_styles_dashboard_info_Parents_module_scss__WEBPACK_IMPORTED_MODULE_5___default().contenedor),
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: (_styles_dashboard_info_Parents_module_scss__WEBPACK_IMPORTED_MODULE_5___default().container),
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "row",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: `${(_styles_dashboard_info_Parents_module_scss__WEBPACK_IMPORTED_MODULE_5___default().titleE)} col`,
                        children: title
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "row",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col-lg-6 col-sm-12",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                        children: "Nombre: "
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        ref: i_name1,
                                        type: "text",
                                        className: (_styles_dashboard_info_Parents_module_scss__WEBPACK_IMPORTED_MODULE_5___default().mostrar),
                                        disabled: true,
                                        defaultValue: nameOneEmergency,
                                        onChange: (e)=>{
                                            e.target.value = e.target.value.toUpperCase();
                                        }
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col-lg-6 col-sm-12",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                        children: "Tel\xe9fono: "
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        ref: i_phone1,
                                        type: "text",
                                        className: (_styles_dashboard_info_Parents_module_scss__WEBPACK_IMPORTED_MODULE_5___default().mostrar),
                                        disabled: true,
                                        defaultValue: telephoneOneEmergency
                                    })
                                ]
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "row",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col-lg-6 col-sm-12",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                        children: "Nombre: "
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        ref: i_name2,
                                        type: "text",
                                        className: (_styles_dashboard_info_Parents_module_scss__WEBPACK_IMPORTED_MODULE_5___default().mostrar),
                                        disabled: true,
                                        defaultValue: nameTwoEmergency,
                                        onChange: (e)=>{
                                            e.target.value = e.target.value.toUpperCase();
                                        }
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col-lg-6 col-sm-12",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                        children: "Tel\xe9fono: "
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        ref: i_phone2,
                                        type: "text",
                                        className: (_styles_dashboard_info_Parents_module_scss__WEBPACK_IMPORTED_MODULE_5___default().mostrar),
                                        disabled: true,
                                        defaultValue: telephoneTwoEmergency
                                    })
                                ]
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                    className: (_styles_dashboard_info_Parents_module_scss__WEBPACK_IMPORTED_MODULE_5___default().editarB),
                    onClick: editar,
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                        width: "2em",
                        height: "2em",
                        viewBox: "0 0 16 16",
                        className: "bi bi-pencil-square",
                        fill: "currentColor",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                d: "M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                "fill-rule": "evenodd",
                                d: "M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_styles_dashboard_info_Parents_module_scss__WEBPACK_IMPORTED_MODULE_5___default().contenedor_btns),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            ref: btn_actualizar,
                            className: `${(_styles_dashboard_info_Parents_module_scss__WEBPACK_IMPORTED_MODULE_5___default().ocultarB)} btn btn-outline-success`,
                            onClick: actualizar,
                            children: "Actualizar"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            ref: btn_cancelar,
                            className: `${(_styles_dashboard_info_Parents_module_scss__WEBPACK_IMPORTED_MODULE_5___default().ocultarB)} btn btn-outline-danger`,
                            onClick: cancelar,
                            children: "Cancelar"
                        })
                    ]
                })
            ]
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8254:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Parent)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_dashboard_info_Parents_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(88);
/* harmony import */ var _styles_dashboard_info_Parents_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_dashboard_info_Parents_module_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(271);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var sweetalert2_react_content__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3810);
/* harmony import */ var sweetalert2_react_content__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2_react_content__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _hooks_use_current_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8941);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks_use_current_user__WEBPACK_IMPORTED_MODULE_4__]);
_hooks_use_current_user__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






function Parent({ id_componente , title , name , lastName , phoneParent , relationship , email , professional , company , userId , parents  }) {
    var nameOrigi = name;
    var titleOrigi = title;
    const btn_actualizar = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const btn_cancelar = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const { 0: form , 1: setForm  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        name,
        lastName,
        phoneParent,
        relationship,
        email,
        professional,
        company
    });
    const { 0: nombrecito , 1: setNombrecito  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(name);
    const { 0: clase , 1: setClase  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: editando , 1: setEditando  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const MySwal = sweetalert2_react_content__WEBPACK_IMPORTED_MODULE_3___default()((sweetalert2__WEBPACK_IMPORTED_MODULE_2___default()));
    const i_nombre = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const i_apellido = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const i_telefono = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const i_parentesco = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const i_correo = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const i_profesion = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const i_empresa = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const { user , isLoading: loadingUser , error: userError  } = (0,_hooks_use_current_user__WEBPACK_IMPORTED_MODULE_4__/* .useCurrentUser */ .xJ)();
    var modo_editar = "editar";
    var modo_mostrar = "mostrar";
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{}, [
        form
    ]);
    const actualizarid = async (datos, userid)=>{
        fetch(`${"http://localhost:4000"}/api/users/editParents/${userid}`, {
            //mode: 'cors',
            method: "PUT",
            headers: {
                "Referrer-Policy": "origin-when-cross-origin",
                "Authorization": "Bearer " + localStorage.getItem("auth_token"),
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": `${"http://localhost:3000"}`
            },
            body: JSON.stringify(datos)
        }).then((res)=>{
            return res.json().then((data)=>{
                if (res.ok) {
                    return Promise.resolve(data);
                } else {
                    return Promise.reject(data);
                }
            });
        }).then((data)=>{
            MySwal.fire({
                icon: "success",
                title: "Datos Actualizados",
                text: "Los datos se han actualizado satisfactoriamente",
                confirmButtonColor: "#83DC2D",
                confirmButtonText: "Aceptar"
            });
            setForm({
                name: data.data.name,
                lastName: data.data.lastName,
                phoneParent: data.data.phoneParent,
                relationship: data.data.relationship,
                email: data.data.email,
                professional: data.data.professional,
                company: data.data.company
            });
        }).catch((error)=>{
            let err = error.message[0];
            MySwal.fire({
                icon: "error",
                title: "Error",
                text: err,
                confirmButtonColor: "#E71919",
                confirmButtonText: "Aceptar"
            });
            cancelar();
            let datos = {
                name: i_nombre.current.value,
                lastName: i_apellido.current.value,
                phoneParent: i_telefono.current.value,
                relationship: i_parentesco.current.value,
                email: i_correo.current.value,
                professional: i_profesion.current.value,
                company: i_empresa.current.value
            };
            setForm(datos);
        });
    };
    const actualizarfamiliares = async (datos)=>{
        if (!loadingUser) {
            actualizarid(datos, user.id);
        }
    };
    function cambiar_imputs(modo) {
        if (modo === "editar") {
            i_nombre.current.disabled = false;
            i_nombre.current.className = `${(_styles_dashboard_info_Parents_module_scss__WEBPACK_IMPORTED_MODULE_5___default().editarI)}`;
            i_apellido.current.disabled = false;
            i_apellido.current.className = `${(_styles_dashboard_info_Parents_module_scss__WEBPACK_IMPORTED_MODULE_5___default().editarI)}`;
            i_correo.current.disabled = false;
            i_correo.current.className = `${(_styles_dashboard_info_Parents_module_scss__WEBPACK_IMPORTED_MODULE_5___default().editarI)}`;
            i_profesion.current.disabled = false;
            i_profesion.current.className = `${(_styles_dashboard_info_Parents_module_scss__WEBPACK_IMPORTED_MODULE_5___default().editarI)}`;
            i_empresa.current.disabled = false;
            i_empresa.current.className = `${(_styles_dashboard_info_Parents_module_scss__WEBPACK_IMPORTED_MODULE_5___default().editarI)}`;
            i_telefono.current.disabled = false;
            i_telefono.current.className = `${(_styles_dashboard_info_Parents_module_scss__WEBPACK_IMPORTED_MODULE_5___default().editarI)}`;
            i_parentesco.current.disabled = false;
            i_parentesco.current.className = `${(_styles_dashboard_info_Parents_module_scss__WEBPACK_IMPORTED_MODULE_5___default().editarI)}`;
        }
        if (modo === "mostrar") {
            i_nombre.current.disabled = true;
            i_nombre.current.className = `${(_styles_dashboard_info_Parents_module_scss__WEBPACK_IMPORTED_MODULE_5___default().mostrar)}`;
            i_apellido.current.disabled = true;
            i_apellido.current.className = `${(_styles_dashboard_info_Parents_module_scss__WEBPACK_IMPORTED_MODULE_5___default().mostrar)}`;
            i_correo.current.disabled = true;
            i_correo.current.className = `${(_styles_dashboard_info_Parents_module_scss__WEBPACK_IMPORTED_MODULE_5___default().mostrar)}`;
            i_profesion.current.disabled = true;
            i_profesion.current.className = `${(_styles_dashboard_info_Parents_module_scss__WEBPACK_IMPORTED_MODULE_5___default().mostrar)}`;
            i_empresa.current.disabled = true;
            i_empresa.current.className = `${(_styles_dashboard_info_Parents_module_scss__WEBPACK_IMPORTED_MODULE_5___default().mostrar)}`;
            i_telefono.current.disabled = true;
            i_telefono.current.className = `${(_styles_dashboard_info_Parents_module_scss__WEBPACK_IMPORTED_MODULE_5___default().mostrar)}`;
            i_parentesco.current.disabled = true;
            i_parentesco.current.className = `${(_styles_dashboard_info_Parents_module_scss__WEBPACK_IMPORTED_MODULE_5___default().mostrar)}`;
        }
    }
    //className=`${styles.editarI}` element.className=`${styles.editarI}`
    function editar() {
        setEditando(true);
        //editarEls(ids)
        cambiar_imputs(modo_editar);
        let buton = btn_actualizar;
        btn_actualizar.current.style.visibility = "visible";
        btn_cancelar.current.style.visibility = "visible";
    }
    function actualizar() {
        cambiar_imputs(modo_mostrar);
        setEditando(false);
        btn_actualizar.current.style.visibility = "hidden";
        btn_cancelar.current.style.visibility = "hidden";
        let datos = parents;
        datos[id_componente] = {
            ...datos[id_componente],
            name: i_nombre.current.value,
            lastName: i_apellido.current.value,
            phoneParent: i_telefono.current.value,
            relationship: i_parentesco.current.value,
            email: i_correo.current.value,
            professional: i_profesion.current.value,
            company: i_empresa.current.value
        };
        setForm(datos);
        if (userId) {
            actualizarid(datos, userId);
        } else {
            actualizarfamiliares(datos);
        }
    }
    function cancelar() {
        //modificar de nuevo los inputs
        cambiar_imputs(modo_mostrar);
        setEditando(false);
        let datos = {
            name: i_nombre.current.value,
            lastName: i_apellido.current.value,
            phoneParent: i_telefono.current.value,
            relationship: i_parentesco.current.value,
            email: i_correo.current.value,
            professional: i_profesion.current.value,
            company: i_empresa.current.value
        };
        setForm(datos);
        //ocultar de nuevo los botones
        btn_actualizar.current.style.visibility = "hidden";
        btn_cancelar.current.style.visibility = "hidden";
        i_parentesco.current.value = relationship;
        i_nombre.current.value = form.name;
        i_apellido.current.value = form.lastName;
        i_correo.current.value = form.email;
        i_profesion.current.value = form.professional;
        i_empresa.current.value = form.company;
        i_telefono.current.value = form.phoneParent;
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_styles_dashboard_info_Parents_module_scss__WEBPACK_IMPORTED_MODULE_5___default().contenedor),
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: (_styles_dashboard_info_Parents_module_scss__WEBPACK_IMPORTED_MODULE_5___default().container),
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "row",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: `${(_styles_dashboard_info_Parents_module_scss__WEBPACK_IMPORTED_MODULE_5___default().title)} col-12`,
                        children: title
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "row",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col-lg-6",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                        className: (_styles_dashboard_info_Parents_module_scss__WEBPACK_IMPORTED_MODULE_5___default().label1),
                                        children: "Nombres: "
                                    }),
                                    " ",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        id: `${id_componente}nombre`,
                                        ref: i_nombre,
                                        type: "text",
                                        className: (_styles_dashboard_info_Parents_module_scss__WEBPACK_IMPORTED_MODULE_5___default().mostrar),
                                        disabled: true,
                                        defaultValue: name,
                                        onChange: (e)=>{
                                            e.target.value = e.target.value.toUpperCase();
                                        }
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col-lg-6",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                        className: (_styles_dashboard_info_Parents_module_scss__WEBPACK_IMPORTED_MODULE_5___default().label1),
                                        children: "Apellido: "
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        id: `${id_componente}apellido`,
                                        ref: i_apellido,
                                        type: "text",
                                        className: (_styles_dashboard_info_Parents_module_scss__WEBPACK_IMPORTED_MODULE_5___default().mostrar),
                                        disabled: true,
                                        defaultValue: lastName,
                                        onChange: (e)=>{
                                            e.target.value = e.target.value.toUpperCase();
                                        }
                                    })
                                ]
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "row",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "col-lg-6",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                    className: (_styles_dashboard_info_Parents_module_scss__WEBPACK_IMPORTED_MODULE_5___default().label1),
                                    children: "Correo: "
                                }),
                                " ",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                    id: `${id_componente}correo`,
                                    ref: i_correo,
                                    className: (_styles_dashboard_info_Parents_module_scss__WEBPACK_IMPORTED_MODULE_5___default().mostrar),
                                    disabled: true,
                                    defaultValue: email
                                })
                            ]
                        })
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "row",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col-lg-6 col-sm-12",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                        className: (_styles_dashboard_info_Parents_module_scss__WEBPACK_IMPORTED_MODULE_5___default().label1),
                                        children: "Profesi\xf3n: "
                                    }),
                                    " ",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        id: `${id_componente}profe`,
                                        ref: i_profesion,
                                        className: (_styles_dashboard_info_Parents_module_scss__WEBPACK_IMPORTED_MODULE_5___default().mostrar),
                                        disabled: true,
                                        defaultValue: professional,
                                        onChange: (e)=>{
                                            e.target.value = e.target.value.toUpperCase();
                                        }
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col-lg-6 col-sm-12",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                        className: (_styles_dashboard_info_Parents_module_scss__WEBPACK_IMPORTED_MODULE_5___default().label1),
                                        children: "Empresa: "
                                    }),
                                    " ",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        id: `${id_componente}empresa`,
                                        ref: i_empresa,
                                        className: (_styles_dashboard_info_Parents_module_scss__WEBPACK_IMPORTED_MODULE_5___default().mostrar),
                                        disabled: true,
                                        defaultValue: company
                                    })
                                ]
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "row",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col-lg-6 col-sm-12",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                        className: (_styles_dashboard_info_Parents_module_scss__WEBPACK_IMPORTED_MODULE_5___default().label1),
                                        children: "Tel\xe9fono: "
                                    }),
                                    " ",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        id: `${id_componente}telefono`,
                                        ref: i_telefono,
                                        className: (_styles_dashboard_info_Parents_module_scss__WEBPACK_IMPORTED_MODULE_5___default().mostrar),
                                        type: "number",
                                        max: 9999999999,
                                        disabled: true,
                                        defaultValue: phoneParent
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col-lg-6 col-sm-12",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                        className: (_styles_dashboard_info_Parents_module_scss__WEBPACK_IMPORTED_MODULE_5___default().label1),
                                        children: "Parentesco: "
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                                        ref: i_parentesco,
                                        className: (_styles_dashboard_info_Parents_module_scss__WEBPACK_IMPORTED_MODULE_5___default().mostrar),
                                        disabled: true,
                                        defaultValue: relationship,
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                value: "PADRE",
                                                children: "PADRE"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                value: "MADRE",
                                                children: "MADRE"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                value: "ABUELO",
                                                children: "ABUELO/ABUELA"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                value: "TIO",
                                                children: "T\xcdO/T\xcdA"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                value: "ACUDIENTE",
                                                children: "ACUDIENTE"
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                    className: (_styles_dashboard_info_Parents_module_scss__WEBPACK_IMPORTED_MODULE_5___default().editarB),
                    onClick: editar,
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                        width: "2em",
                        height: "2em",
                        viewBox: "0 0 16 16",
                        className: "bi bi-pencil-square",
                        fill: "currentColor",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                d: "M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                "fill-rule": "evenodd",
                                d: "M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_styles_dashboard_info_Parents_module_scss__WEBPACK_IMPORTED_MODULE_5___default().contenedor_btns),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            ref: btn_actualizar,
                            className: `${(_styles_dashboard_info_Parents_module_scss__WEBPACK_IMPORTED_MODULE_5___default().ocultarB)} btn btn-outline-success`,
                            onClick: actualizar,
                            children: "Actualizar"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            ref: btn_cancelar,
                            className: `${(_styles_dashboard_info_Parents_module_scss__WEBPACK_IMPORTED_MODULE_5___default().ocultarB)} btn btn-outline-danger`,
                            onClick: cancelar,
                            children: "Cancelar"
                        })
                    ]
                })
            ]
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5976:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ prueba)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_dashboard_info_Parents_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(88);
/* harmony import */ var _styles_dashboard_info_Parents_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_dashboard_info_Parents_module_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Parent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8254);
/* harmony import */ var _Emergency__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1939);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _hooks_use_current_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8941);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Parent__WEBPACK_IMPORTED_MODULE_1__, _Emergency__WEBPACK_IMPORTED_MODULE_2__, _hooks_use_current_user__WEBPACK_IMPORTED_MODULE_4__]);
([_Parent__WEBPACK_IMPORTED_MODULE_1__, _Emergency__WEBPACK_IMPORTED_MODULE_2__, _hooks_use_current_user__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






function prueba({ userId  }) {
    const { 0: parents , 1: setParents  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);
    const { 0: parentsE , 1: setParentsE  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);
    const { 0: loading , 1: setLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(true);
    const { user , isLoading: loadingUser , error: userError  } = (0,_hooks_use_current_user__WEBPACK_IMPORTED_MODULE_4__/* .useCurrentUser */ .xJ)();
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        if (userId) {
            obtenerid(userId);
        } else {
            obtenerFamiliares();
        }
    }, [
        user
    ]);
    const obtenerid = async (userid)=>{
        fetch(`${"http://localhost:4000"}/api/users/parents/${userid}`, {
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
        }).then((data)=>{
            setParents(data);
        });
        fetch(`${"http://localhost:4000"}/api/users/datahealth/${userid}`, {
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
        }).then((data)=>{
            setParentsE(data);
            setTimeout(()=>{
                setLoading(false);
            }, 250);
        });
    };
    const obtenerFamiliares = ()=>{
        if (!loadingUser) {
            obtenerid(user.id);
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: loading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
            children: "Cargando informaci\xf3n..."
        }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: (_styles_dashboard_info_Parents_module_scss__WEBPACK_IMPORTED_MODULE_5___default().margen),
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Parent__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                    id_componente: 0,
                    title: "Datos del Acudiente 1",
                    name: parents.data[0].name,
                    lastName: parents.data[0].lastName,
                    phoneParent: parents.data[0].phoneParent,
                    relationship: parents.data[0].relationship,
                    email: parents.data[0].email,
                    professional: parents.data[0].professional,
                    company: parents.data[0].company,
                    userId: userId,
                    parents: parents.data
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Parent__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                    id_componente: 1,
                    title: "Datos del Acudiente 2",
                    name: parents.data[1] ? parents.data[1].name : "N/A",
                    lastName: parents.data[1] ? parents.data[1].lastName : "N/A",
                    phoneParent: parents.data[1] ? parents.data[1].phoneParent : "N/A",
                    relationship: parents.data[1] ? parents.data[1].relationship : "N/A",
                    email: parents.data[1] ? parents.data[1].email : "N/A",
                    professional: parents.data[1] ? parents.data[1].professional : "N/A",
                    company: parents.data[1] ? parents.data[1].company : "N/A",
                    userId: userId,
                    parents: parents.data
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Emergency__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                    title: "En caso de emergencia",
                    nameOneEmergency: parentsE.data.nameOneEmergency,
                    telephoneOneEmergency: parentsE.data.telephoneOneEmergency,
                    nameTwoEmergency: parentsE.data.nameTwoEmergency,
                    telephoneTwoEmergency: parentsE.data.telephoneTwoEmergency,
                    userId: userId
                })
            ]
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;