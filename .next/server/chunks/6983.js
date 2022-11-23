exports.id = 6983;
exports.ids = [6983];
exports.modules = {

/***/ 3018:
/***/ ((module) => {

// Exports
module.exports = {
	"icon": "JefeRama_icon__6KOfV",
	"icon_": "JefeRama_icon___fQrZt"
};


/***/ }),

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

/***/ 7053:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ActionBranch)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(358);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1929);
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_select__WEBPACK_IMPORTED_MODULE_3__);




function ActionBranch({ id , value  }) {
    const { 0: show , 1: setShow  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const handleClosePut = ()=>{
        setShow(false);
        changeBranchUser(selected);
    };
    const handleClose = ()=>setShow(false);
    const handleShow = ()=>setShow(true);
    const { 0: loading , 1: setLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    const { 0: selected , 1: setSelected  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        value: 0,
        label: ""
    });
    const { 0: branches , 1: setBranches  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const { 0: datosUsuario , 1: setDatosUsuario  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    var lista = [];
    function getBranches() {
        fetch(`${"http://localhost:4000"}/api/branches`, {
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
            data.data.map((branches)=>{
                let datos = {
                    value: branches.id,
                    label: branches.nameBranch
                };
                lista.push(datos);
            });
        }).then(()=>{
            setBranches(lista);
        });
    }
    function getSeletedBranch() {
        fetch(`${"http://localhost:4000"}/api/users/${id}`, {
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
            let default_value = {
                value: data.data.branches.id,
                label: data.data.branches.nameBranch
            };
            setSelected(default_value);
        }).then(()=>{
            setLoading(false);
        });
    }
    async function changeBranchUser(branch) {
        let newBranch = {
            id: branch.value,
            nameBranch: branch.label
        };
        let auxliar = {
            ...datosUsuario,
            branches: newBranch
        };
        setDatosUsuario(auxliar);
        fetch(`${"http://localhost:4000"}/api/users/${id}`, {
            method: "PUT",
            headers: {
                "Referrer-Policy": "origin-when-cross-origin",
                "Authorization": "Bearer " + localStorage.getItem("auth_token"),
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": `${"http://localhost:3000"}`
            },
            body: JSON.stringify(auxliar)
        }).then((res)=>{
            return res.json().then((data)=>{
                if (res.ok) {
                    return Promise.resolve(data);
                } else {
                    return Promise.reject(data);
                }
            });
        });
    }
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        getBranches();
        getSeletedBranch();
        fetch(`${"http://localhost:4000"}/api/users/${id}`, {
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
            setDatosUsuario(data["data"]);
        });
    }, []);
    function getOptions(input) {
        setSelected(input);
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                    onClick: handleShow,
                    children: value.nameBranch
                }),
                " ",
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Modal, {
                    show: show,
                    onHide: handleClose,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Modal.Header, {
                            closeButton: true,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Modal.Title, {
                                className: "text-center",
                                children: "Seleccione la Rama a ingresar"
                            })
                        }),
                        loading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "row col-12 mt-5 justify-content-center",
                            children: "Cargando Informaci\xf3n..."
                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Modal.Body, {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_select__WEBPACK_IMPORTED_MODULE_3___default()), {
                                value: selected,
                                onChange: getOptions,
                                options: branches
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Modal.Footer, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Button, {
                                    variant: "primary",
                                    onClick: handleClosePut,
                                    children: "Continuar"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Button, {
                                    variant: "danger",
                                    onClick: handleClose,
                                    children: "Cancelar"
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
}


/***/ }),

/***/ 6983:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Inscriptions)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_dashboard_info_DataQuery_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9886);
/* harmony import */ var _styles_dashboard_info_DataQuery_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_dashboard_info_DataQuery_module_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var mdbreact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9539);
/* harmony import */ var mdbreact__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mdbreact__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _InscriptionsBranch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(918);
/* harmony import */ var _ActionBranch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7053);
/* harmony import */ var _hooks_use_current_user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8941);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks_use_current_user__WEBPACK_IMPORTED_MODULE_5__]);
_hooks_use_current_user__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







// or less ideally
// Corresponde a la ruta http://.../info/about
function Inscriptions() {
    const { user: userData , isLoading: loadingUser , error: userError  } = (0,_hooks_use_current_user__WEBPACK_IMPORTED_MODULE_5__/* .useCurrentUser */ .xJ)();
    const data_payment = {
        columns: [
            {
                label: "N\xb0 Inscripci\xf3n",
                field: "id",
                sort: "asc",
                width: 150
            },
            {
                label: "Nombre",
                field: "name",
                sort: "asc",
                width: 270
            },
            {
                label: "Edad",
                field: "birthDate",
                sort: "asc",
                width: 200
            },
            {
                label: "Rama",
                field: "branch",
                sort: "asc",
                width: 150
            },
            {
                label: "Estado",
                field: "status",
                sort: "asc",
                width: 100
            },
            {
                label: "Acciones",
                field: "acciones",
                sort: "asc",
                width: 100
            }, 
        ],
        rows: []
    };
    const { 0: loading , 1: setLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);
    const { 0: data , 1: setData  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(data_payment);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (!loadingUser) {
            fetch(`${"http://localhost:4000"}/api/users`, {
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
                let puntero = data.data.map((user)=>{
                    let diferencia_fechas = new Date().getTime() - new Date(user.birthDate).getTime();
                    let age = Math.round(diferencia_fechas / (60 * 60 * 24 * 1000 * 365));
                    let datos = {
                        id: user.id,
                        name: user.name,
                        birthDate: age,
                        branch: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ActionBranch__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                            id: user.id,
                            value: user.branches
                        }),
                        status: user.status ? "Activo" : "Inactivo",
                        acciones: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_InscriptionsBranch__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                            id: user.id
                        })
                    };
                    return datos;
                });
                puntero = puntero.filter((user)=>user.id != userData.id);
                data_payment.rows = puntero;
                setData(data_payment);
                setLoading(false);
            });
        }
    }, [
        userData
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                    className: `${(_styles_dashboard_info_DataQuery_module_scss__WEBPACK_IMPORTED_MODULE_6___default().text_title)} p-5`,
                    children: "Inscripciones Grupo Centinelas 113"
                })
            }),
            loading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "row col-12 mt-5 justify-content-center",
                children: "Cargando Informaci\xf3n..."
            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: `${(_styles_dashboard_info_DataQuery_module_scss__WEBPACK_IMPORTED_MODULE_6___default().text_data)} row justify-content-center py-3`,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: `${(_styles_dashboard_info_DataQuery_module_scss__WEBPACK_IMPORTED_MODULE_6___default().container)} py-5 w-100`,
                    id: "example",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(mdbreact__WEBPACK_IMPORTED_MODULE_1__.MDBDataTable, {
                        striped: true,
                        bordered: true,
                        hover: true,
                        small: true,
                        responsiveSm: true,
                        responsiveMd: true,
                        responsiveLg: true,
                        responsiveXl: true,
                        fixed: true,
                        noBottomColumns: true,
                        data: data,
                        entriesLabel: "Mostrar entradas",
                        infoLabel: [
                            "Mostrando",
                            "hasta",
                            "de",
                            "registros"
                        ],
                        paginationLabel: [
                            "Anterior",
                            "Siguiente"
                        ],
                        searchLabel: "Buscar",
                        noRecordsFoundLabel: "No se han encontrado registros"
                    })
                })
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 918:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ MyBranchActions)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_dashboard_JefeRama_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3018);
/* harmony import */ var _styles_dashboard_JefeRama_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_dashboard_JefeRama_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);




function MyBranchActions({ id  }) {
    const { 0: datosUsuario , 1: setDatosUsuario  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        fetch(`${"http://localhost:4000"}/api/users/${id}`, {
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
            setDatosUsuario(data["data"]);
        });
    }, []);
    async function cambiar_estado(estado) {
        // Hay un problema con las funciones fetch. 
        // Se debe esperar a que los fetch terminen y que 
        // se retorne del servidor que efectivamente el usuario
        // se ha actualizado.
        // Si no se modifica, se recarga automáticamente la página
        // y en algunas ocasiones la base de datos aún no ha realizado
        // el cambio. Por lo tanto se deberá utilizar el await.
        datosUsuario.status = estado;
        datosUsuario.branches = {};
        setDatosUsuario(datosUsuario);
        fetch(`${"http://localhost:4000"}/api/users/${id}`, {
            method: "PUT",
            headers: {
                "Referrer-Policy": "origin-when-cross-origin",
                "Authorization": "Bearer " + localStorage.getItem("auth_token"),
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": `${"http://localhost:3000"}`
            },
            body: JSON.stringify(datosUsuario)
        }).then((res)=>{
            return res.json().then((data)=>{
                if (res.ok) {
                    return Promise.resolve(data);
                } else {
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
            body: JSON.stringify(datosUsuario)
        });
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                href: `/dashboard/info/${id}`,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        className: (_styles_dashboard_JefeRama_module_scss__WEBPACK_IMPORTED_MODULE_3___default().icon),
                        src: "/img/dashboard/eye.svg"
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                href: `/dashboard`,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        className: (_styles_dashboard_JefeRama_module_scss__WEBPACK_IMPORTED_MODULE_3___default().icon),
                        src: "/img/dashboard/check.svg",
                        onClick: ()=>cambiar_estado(true)
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                href: `/dashboard`,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        className: (_styles_dashboard_JefeRama_module_scss__WEBPACK_IMPORTED_MODULE_3___default().icon),
                        src: "/img/dashboard/cancel.svg",
                        onClick: ()=>cambiar_estado(false)
                    })
                })
            })
        ]
    });
}


/***/ })

};
;