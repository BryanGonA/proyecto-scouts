exports.id = 9322;
exports.ids = [9322];
exports.modules = {

/***/ 9886:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "DataQuery_container__d8ETl",
	"text_data": "DataQuery_text_data__iRBPB",
	"text_title": "DataQuery_text_title___AFQM",
	"editarB": "DataQuery_editarB__tWsOl",
	"contenedor": "DataQuery_contenedor__u_wsl",
	"editarI": "DataQuery_editarI__U3oK2",
	"mostrar": "DataQuery_mostrar__Z9AjZ",
	"mostrar_correo": "DataQuery_mostrar_correo__kh71O",
	"ocultarB": "DataQuery_ocultarB__yG1l5",
	"mostrarB": "DataQuery_mostrarB__ct1__",
	"contenedor_btns": "DataQuery_contenedor_btns__CUqWE",
	"label2": "DataQuery_label2__971iP",
	"inputObser": "DataQuery_inputObser__KddmU",
	"addbutton": "DataQuery_addbutton__7_U1c",
	"btn_add": "DataQuery_btn_add__2GWLP",
	"link_plan": "DataQuery_link_plan__VqqD2",
	"icon": "DataQuery_icon__t3ne2",
	"icon_trash": "DataQuery_icon_trash__hdAoS"
};


/***/ }),

/***/ 2055:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ DataQuery)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_dashboard_info_DataQuery_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9886);
/* harmony import */ var _styles_dashboard_info_DataQuery_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_dashboard_info_DataQuery_module_scss__WEBPACK_IMPORTED_MODULE_1__);


function DataQuery({ label , data , settings , tipo , editar , reference  }) {
    let elemento = /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
        type: "text",
        className: `${editar ? (_styles_dashboard_info_DataQuery_module_scss__WEBPACK_IMPORTED_MODULE_1___default().editar) : (_styles_dashboard_info_DataQuery_module_scss__WEBPACK_IMPORTED_MODULE_1___default().mostrar)} ${(_styles_dashboard_info_DataQuery_module_scss__WEBPACK_IMPORTED_MODULE_1___default().text_data)}`,
        ref: reference,
        disabled: !editar,
        defaultValue: data
    });
    if (editar === true) {
        switch(tipo){
            case "tipo_documento":
                elemento = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                    name: "typeDocument",
                    className: settings,
                    ref: reference,
                    defaultValue: data,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                            value: "RC",
                            children: "REGISTRO CIV\xcdL"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                            value: "TI",
                            children: "TARJETA DE IDENTIDAD"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                            value: "CC",
                            children: "C\xc9DULA DE CIUDADAN\xcdA"
                        })
                    ]
                });
                break;
            case "curso_actual":
                elemento = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                    name: "actualCurse",
                    className: "col-sm-12 col-lg-6",
                    ref: reference,
                    defaultValue: data,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                            value: "PRIMERO",
                            children: "PRIMERO"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                            value: "SEGUNDO",
                            children: "SEGUNDO"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                            value: "TERCERO",
                            children: "TERCERO"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                            value: "CUARTO",
                            children: "CUARTO"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                            value: "QUINTO",
                            children: "QUINTO"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                            value: "SEXTO",
                            children: "SEXTO"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                            value: "S\xc9PTIMO",
                            children: "S\xc9PTIMO"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                            value: "OCTAVO",
                            children: "OCTAVO"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                            value: "NOVENO",
                            children: "NOVENO"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                            value: "D\xc9CIMO",
                            children: "D\xc9CIMO"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                            value: "ONCE",
                            children: "ONCE"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                            value: "UNIVERSITARIO",
                            children: "UNIVERSITARIO(A)"
                        })
                    ]
                });
                break;
            case "calendario":
                elemento = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                    name: "calendar",
                    className: settings,
                    ref: reference,
                    defaultValue: data,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                            value: "A",
                            children: "A"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                            value: "B",
                            children: "B"
                        })
                    ]
                });
                break;
            case "jornada":
                elemento = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                    name: "journal",
                    className: settings,
                    ref: reference,
                    defaultValue: data,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                            value: "DIURNO",
                            children: "DIURNA"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                            value: "NOCTURNO",
                            children: "NOCTURNA"
                        })
                    ]
                });
                break;
            case "sexo":
                elemento = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                    name: "gender",
                    className: "col-sm-12 col-lg-6",
                    ref: reference,
                    defaultValue: data,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                            value: "M",
                            children: "MASCULINO"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                            value: "F",
                            children: "FEMENINO"
                        })
                    ]
                });
                break;
            case "tipo_sangre":
                elemento = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                    name: "bloodType",
                    className: settings,
                    ref: reference,
                    defaultValue: data,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                            value: "A",
                            children: "A"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                            value: "O",
                            children: "O"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                            value: "B",
                            children: "B"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                            value: "AB",
                            children: "AB"
                        })
                    ]
                });
                break;
            case "rh":
                elemento = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                    name: "RH",
                    className: settings,
                    ref: reference,
                    defaultValue: data,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                            value: "POSITIVO",
                            children: "POSITIVO"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                            value: "NEGATIVO",
                            children: "NEGATIVO"
                        })
                    ]
                });
                break;
            case "numeros":
                elemento = /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                    type: "number",
                    className: `${editar ? (_styles_dashboard_info_DataQuery_module_scss__WEBPACK_IMPORTED_MODULE_1___default().editar) : (_styles_dashboard_info_DataQuery_module_scss__WEBPACK_IMPORTED_MODULE_1___default().mostrar)} ${(_styles_dashboard_info_DataQuery_module_scss__WEBPACK_IMPORTED_MODULE_1___default().text_data)}`,
                    ref: reference,
                    disabled: !editar,
                    defaultValue: data
                });
                break;
        }
    }
    if (tipo === "correo") {
        elemento = /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
            type: "text",
            className: `${editar ? (_styles_dashboard_info_DataQuery_module_scss__WEBPACK_IMPORTED_MODULE_1___default().editar) : (_styles_dashboard_info_DataQuery_module_scss__WEBPACK_IMPORTED_MODULE_1___default().mostrar_correo)} ${(_styles_dashboard_info_DataQuery_module_scss__WEBPACK_IMPORTED_MODULE_1___default().text_data)}`,
            ref: reference,
            disabled: !editar,
            defaultValue: data
        });
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: settings,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("strong", {
                className: (_styles_dashboard_info_DataQuery_module_scss__WEBPACK_IMPORTED_MODULE_1___default().label2),
                children: [
                    label,
                    ": "
                ]
            }),
            elemento
        ]
    });
} /*
tipo_documento
curso_actual
calendario
jornada
sexo
tipo_sangre
rh*/ 


/***/ }),

/***/ 9322:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ PersonalInformation)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _DataQuery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2055);
/* harmony import */ var _styles_dashboard_info_DataQuery_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9886);
/* harmony import */ var _styles_dashboard_info_DataQuery_module_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_dashboard_info_DataQuery_module_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(271);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var sweetalert2_react_content__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3810);
/* harmony import */ var sweetalert2_react_content__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2_react_content__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _hooks_use_current_user__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8941);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks_use_current_user__WEBPACK_IMPORTED_MODULE_6__]);
_hooks_use_current_user__WEBPACK_IMPORTED_MODULE_6__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








// Corresponde a la ruta http://.../info/about
function PersonalInformation({ Id  }) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
    const { user , isLoading: loadingUser , error: userError  } = (0,_hooks_use_current_user__WEBPACK_IMPORTED_MODULE_6__/* .useCurrentUser */ .xJ)();
    const btn_actualizar = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const btn_cancelar = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const { 0: loading , 1: setLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    const { 0: usuario , 1: setUsuario  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const { 0: detalles , 1: setDetalles  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const { 0: edad , 1: setEdad  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const { 0: editando , 1: setEditando  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const MySwal = sweetalert2_react_content__WEBPACK_IMPORTED_MODULE_5___default()((sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()));
    const { 0: pefil , 1: setPerfil  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
    const { 0: details , 1: setDetails  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
    const i_name = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const i_lastName = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const i_documentType = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const i_edad = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const i_document = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const i_email = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    // const i_homePlace = useRef(null)
    const i_homeAddress = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const i_phone = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const i_institute = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const i_currentCourse = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const i_calendary = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const i_timeShift = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const i_sex = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const i_weight = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const i_stature = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const i_bloodType = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const i_rh = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const i_eps = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const i_attentionSite = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (Id) {
            obtenerDatosId(Id);
        } else {
            obtenerDatos();
        }
    }, [
        user
    ]);
    const obtenerDatosId = (id)=>{
        fetch(`${"http://localhost:4000"}/api/users/userDetails/${id}`, {
            mode: "cors",
            method: "GET",
            headers: {
                "Referrer-Policy": "origin-when-cross-origin",
                "Authorization": "Bearer " + localStorage.getItem("auth_token"),
                "Content-Type": "application/json",
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
            setUsuario(data.data);
            let diferencia_fechas = new Date().getTime() - new Date(data.data.birthDate).getTime();
            let age = Math.round(diferencia_fechas / (60 * 60 * 24 * 1000 * 365));
            setEdad(age);
            //${usuario.id}
            setDetalles(data.data.userDetails);
            setLoading(false);
        });
    };
    const obtenerDatos = ()=>{
        if (!loadingUser) {
            obtenerDatosId(user.id);
        }
    };
    const actualizarDatosId = async (datos_detalles, datos_usuarios, id)=>{
        fetch(`${"http://localhost:4000"}/api/userdetails/${id}`, {
            method: "PUT",
            headers: {
                "Referrer-Policy": "origin-when-cross-origin",
                "Authorization": "Bearer " + localStorage.getItem("auth_token"),
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": `${"http://localhost:3000"}`
            },
            body: JSON.stringify(datos_detalles)
        }).then((res)=>{
            return res.json().then((data)=>{
                if (res.ok) {
                    setDetalles(data.data);
                    return Promise.resolve(data);
                } else {
                    cancelar();
                    return Promise.reject(data);
                }
            });
        });
        fetch(`${"http://localhost:4000"}/api/users/${id}`, {
            method: "PUT",
            headers: {
                "Referrer-Policy": "origin-when-cross-origin",
                "Authorization": "Bearer " + localStorage.getItem("auth_token"),
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": `${"http://localhost:3000"}`
            },
            body: JSON.stringify(datos_usuarios)
        }).then((res)=>{
            return res.json().then((data)=>{
                if (res.ok) {
                    MySwal.fire({
                        icon: "success",
                        title: "Datos Actualizados",
                        text: "Los datos se han actualizado satisfactoriamente",
                        confirmButtonColor: "#83DC2D",
                        confirmButtonText: "Aceptar"
                    }).then(function(isConfirm) {
                        if (isConfirm) {
                            location.reload();
                        }
                    });
                    setDetalles(data.data);
                    return Promise.resolve(data);
                } else {
                    let err = data.message[0];
                    MySwal.fire({
                        icon: "error",
                        title: "Error",
                        text: err,
                        confirmButtonColor: "#E71919",
                        confirmButtonText: "Aceptar"
                    }).then(function(isConfirm) {
                        if (isConfirm) {
                            location.reload();
                        }
                    });
                    cancelar();
                    //let datos={ name: i_nombre.current.value, lastName: i_apellido.current.value, phoneParent: i_telefono.current.value, relationship: i_parentesco.current.value, email: i_correo.current.value, professional: i_profesion.current.value, company: i_empresa.current.value }
                    //setForm(datos)
                    return Promise.reject(data);
                }
            });
        });
    };
    const actualizarDatos = async (datos_detalles, datos_usuarios)=>{
        fetch(`${"http://localhost:4000"}/api/auth/profile`, {
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
            fetch(`${"http://localhost:4000"}/api/userdetails/${data["user"].id}`, {
                method: "PUT",
                headers: {
                    "Referrer-Policy": "origin-when-cross-origin",
                    "Authorization": "Bearer " + localStorage.getItem("auth_token"),
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": `${"http://localhost:3000"}`
                },
                body: JSON.stringify(datos_detalles)
            }).then((res)=>{
                return res.json().then((data)=>{
                    if (res.ok) {
                        setDetalles(data.data);
                        return Promise.resolve(data);
                    } else {
                        cancelar();
                        return Promise.reject(data);
                    }
                });
            });
            fetch(`${"http://localhost:4000"}/api/users/${data["user"].id}`, {
                method: "PUT",
                headers: {
                    "Referrer-Policy": "origin-when-cross-origin",
                    "Authorization": "Bearer " + localStorage.getItem("auth_token"),
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": `${"http://localhost:3000"}`
                },
                body: JSON.stringify(datos_usuarios)
            }).then((res)=>{
                return res.json().then((data)=>{
                    if (res.ok) {
                        MySwal.fire({
                            icon: "success",
                            title: "Datos Actualizados",
                            text: "Los datos se han actualizado satisfactoriamente",
                            confirmButtonColor: "#83DC2D",
                            confirmButtonText: "Aceptar"
                        }).then(function(isConfirm) {
                            if (isConfirm) {
                                location.reload();
                            }
                        });
                        setDetalles(data.data);
                        return Promise.resolve(data);
                    } else {
                        let err = data.message[0];
                        MySwal.fire({
                            icon: "error",
                            title: "Error",
                            text: err,
                            confirmButtonColor: "#E71919",
                            confirmButtonText: "Aceptar"
                        }).then(function(isConfirm) {
                            if (isConfirm) {
                                location.reload();
                            }
                        });
                        cancelar();
                        //let datos={ name: i_nombre.current.value, lastName: i_apellido.current.value, phoneParent: i_telefono.current.value, relationship: i_parentesco.current.value, email: i_correo.current.value, professional: i_profesion.current.value, company: i_empresa.current.value }
                        //setForm(datos)
                        return Promise.reject(data);
                    }
                });
            });
        });
    };
    function editar() {
        setEditando(true);
        //cambiar_imputs(modo_editar)
        btn_actualizar.current.style.visibility = "visible";
        btn_cancelar.current.style.visibility = "visible";
    }
    function actualizar() {
        setEditando(false);
        btn_actualizar.current.style.visibility = "hidden";
        btn_cancelar.current.style.visibility = "hidden";
        //let datos={ name: i_nombre.current.value, lastName: i_apellido.current.value, phoneParent: i_telefono.current.value, relationship: i_parentesco.current.value, email: i_correo.current.value, professional: i_profesion.current.value, company: i_empresa.current.value }
        //setForm(datos) 
        let datos_detalles = {
            bloodType: i_bloodType.current.value,
            calendary: i_calendary.current.value,
            currentCourse: i_currentCourse.current.value,
            eps: i_eps.current.value,
            homeAddress: i_homeAddress.current.value,
            //       homePlace:i_homePlace.current.value,
            institute: i_institute.current.value,
            phone: i_phone.current.value,
            rh: i_rh.current.value,
            sex: i_sex.current.value,
            stature: Number.parseInt(i_stature.current.value.split(" ")[0]),
            timeShift: i_timeShift.current.value,
            weight: Number.parseInt(i_weight.current.value.split(" ")[0]),
            attentionSite: i_attentionSite.current.value
        };
        let datos_usuario = {
            name: i_name.current.value,
            lastName: i_lastName.current.value,
            email: i_email.current.value,
            document: i_document.current.value
        };
        if (Id) {
            actualizarDatosId(datos_detalles, datos_usuario, Id);
        } else {
            actualizarDatos(datos_detalles, datos_usuario);
        }
    }
    function cancelar() {
        setEditando(false);
        //let datos={ name: i_nombre.current.value, lastName: i_apellido.current.value, phoneParent: i_telefono.current.value, relationship: i_parentesco.current.value, email: i_correo.current.value, professional: i_profesion.current.value, company: i_empresa.current.value }
        //setForm(datos)      
        btn_actualizar.current.style.visibility = "hidden";
        btn_cancelar.current.style.visibility = "hidden";
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: `${(_styles_dashboard_info_DataQuery_module_scss__WEBPACK_IMPORTED_MODULE_7___default().text_data)}`,
        children: loading || !usuario ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "row col-12 mt-5 justify-content-center",
            children: "Cargando Informaci\xf3n..."
        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: (_styles_dashboard_info_DataQuery_module_scss__WEBPACK_IMPORTED_MODULE_7___default().contenedor),
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: `${(_styles_dashboard_info_DataQuery_module_scss__WEBPACK_IMPORTED_MODULE_7___default().container)} pl-5`,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: " row col-12 mt-5 justify-content-center",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_DataQuery__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                label: "Nombre",
                                data: usuario.name,
                                settings: "col-sm-12 col-lg-6 ",
                                editar: editando,
                                reference: i_name
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_DataQuery__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                label: "Apellidos",
                                data: usuario.lastName,
                                settings: "col-sm-12 col-lg-6",
                                editar: editando,
                                reference: i_lastName
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_DataQuery__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                label: "Tipo documento",
                                data: usuario.documentType,
                                settings: "col-sm-12 col-lg-6",
                                reference: i_documentType,
                                tipo: "tipo_documento",
                                className: (_styles_dashboard_info_DataQuery_module_scss__WEBPACK_IMPORTED_MODULE_7___default().label)
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_DataQuery__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                label: "Edad",
                                data: `${edad} Años`,
                                reference: i_edad,
                                settings: "col-sm-12 col-lg-6",
                                className: (_styles_dashboard_info_DataQuery_module_scss__WEBPACK_IMPORTED_MODULE_7___default().label)
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "row col-12",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_DataQuery__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                label: "N\xfamero de documento",
                                data: usuario.document,
                                settings: "col-12",
                                reference: i_document,
                                className: (_styles_dashboard_info_DataQuery_module_scss__WEBPACK_IMPORTED_MODULE_7___default().label)
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_DataQuery__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                label: "Correo electr\xf3nico",
                                data: usuario.email,
                                settings: "col-12",
                                reference: i_email,
                                className: (_styles_dashboard_info_DataQuery_module_scss__WEBPACK_IMPORTED_MODULE_7___default().inputObser),
                                tipo: "correo"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_DataQuery__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                label: "Direcci\xf3n de residencia",
                                data: detalles.homeAddress,
                                settings: "col-12",
                                editar: editando,
                                reference: i_homeAddress
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_DataQuery__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                label: "N\xfamero tel\xe9fonico",
                                data: detalles.phone,
                                settings: "col-12",
                                editar: editando,
                                reference: i_phone
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_DataQuery__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                label: "Instituci\xf3n educativa",
                                data: detalles.institute,
                                settings: "col-12",
                                editar: editando,
                                reference: i_institute
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "row col-12",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_DataQuery__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                label: "Curso actual",
                                data: detalles.currentCourse,
                                settings: "col-sm-12 col-md-4 col-lg-4",
                                editar: editando,
                                reference: i_currentCourse,
                                tipo: "curso_actual"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_DataQuery__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                label: "Calendario",
                                data: detalles.calendary ? detalles.calendary : "Ninguno",
                                settings: "col-sm-12 col-md-4 col-lg-4",
                                editar: editando,
                                reference: i_calendary,
                                tipo: "calendario"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_DataQuery__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                label: "Jornada",
                                data: detalles.timeShift,
                                settings: "col-sm-12 col-md-4 col-lg-4",
                                editar: editando,
                                reference: i_timeShift,
                                tipo: "jornada"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_DataQuery__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                label: "Sexo",
                                data: detalles.sex === "M" ? "MASCULINO" : "FEMENINO",
                                settings: "col-sm-12 col-md-6 col-lg-4",
                                editar: editando,
                                reference: i_sex,
                                tipo: "sexo"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_DataQuery__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                label: "Peso (Kg)",
                                data: detalles.weight ? detalles.weight : "",
                                settings: "col-sm-12 col-md-6 col-lg-4",
                                editar: editando,
                                reference: i_weight,
                                tipo: "numeros"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_DataQuery__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                label: "Estatura (Cm)",
                                data: detalles.stature ? detalles.stature : "",
                                settings: "col-sm-12 col-md-6 col-lg-4",
                                editar: editando,
                                reference: i_stature,
                                tipo: "numeros"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_DataQuery__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                label: "Tipo Sangre",
                                data: detalles.bloodType,
                                settings: "col-sm-12 col-md-6 col-lg-4",
                                editar: editando,
                                reference: i_bloodType,
                                tipo: "tipo_sangre"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_DataQuery__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                label: "RH",
                                data: detalles.rh,
                                settings: "col-sm-12 col-md-6 col-lg-4",
                                editar: editando,
                                reference: i_rh,
                                tipo: "rh"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_DataQuery__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                label: "EPS",
                                data: detalles.eps,
                                settings: "col-sm-12 col-md-6 col-lg-4",
                                editar: editando,
                                reference: i_eps
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "row col-12",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_DataQuery__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                            label: "Sitio atenci\xf3n",
                            settings: "col-12",
                            data: detalles.attentionSite ? detalles.attentionSite : "N/A",
                            editar: editando,
                            reference: i_attentionSite
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "row col-12 mr-5",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            className: `${(_styles_dashboard_info_DataQuery_module_scss__WEBPACK_IMPORTED_MODULE_7___default().editarB)}`,
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
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_styles_dashboard_info_DataQuery_module_scss__WEBPACK_IMPORTED_MODULE_7___default().contenedor_btns),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                ref: btn_actualizar,
                                className: `${(_styles_dashboard_info_DataQuery_module_scss__WEBPACK_IMPORTED_MODULE_7___default().ocultarB)} btn btn-outline-success`,
                                onClick: actualizar,
                                children: "Actualizar"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                ref: btn_cancelar,
                                className: `${(_styles_dashboard_info_DataQuery_module_scss__WEBPACK_IMPORTED_MODULE_7___default().ocultarB)} btn btn-outline-danger`,
                                onClick: cancelar,
                                children: "Cancelar"
                            })
                        ]
                    })
                ]
            })
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;