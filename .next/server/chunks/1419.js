exports.id = 1419;
exports.ids = [1419];
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

/***/ 1419:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ScoutProgress)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mdbreact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9539);
/* harmony import */ var mdbreact__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mdbreact__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _hooks_use_current_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8941);
/* harmony import */ var _styles_dashboard_info_DataQuery_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9886);
/* harmony import */ var _styles_dashboard_info_DataQuery_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_dashboard_info_DataQuery_module_scss__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks_use_current_user__WEBPACK_IMPORTED_MODULE_3__]);
_hooks_use_current_user__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





function ScoutProgress({ id  }) {
    const tablaAdelantos = {
        columns: [
            {
                label: "T\xedtulo",
                field: "name",
                sort: "asc",
                width: 150
            },
            {
                label: "Fecha",
                field: "createDate",
                sort: "asc",
                width: 270
            },
            {
                label: "Rama",
                field: "branches",
                sort: "asc",
                width: 200
            },
            {
                label: "Jefe",
                field: "leader",
                sort: "asc",
                width: 150
            },
            {
                label: "Descripci\xf3n",
                field: "description",
                sort: "asc",
                width: 100
            }, 
        ],
        rows: []
    };
    //--------------------------------------------------------
    const { 0: loading , 1: setLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);
    const { 0: tabla , 1: setTabla  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(tablaAdelantos);
    const { 0: rama , 1: setRama  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
    const { 0: link , 1: setLink  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
    const { user , isLoading: loadingUser , error: userError  } = (0,_hooks_use_current_user__WEBPACK_IMPORTED_MODULE_3__/* .useCurrentUser */ .xJ)();
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (id) {
            consultar(id);
        } else {
            obtenerId();
        }
    }, [
        user
    ]);
    const obtenerId = async ()=>{
        if (!loadingUser) {
            fetch(`${"http://localhost:4000"}/api/users/${user.id}`, {
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
                setRama(data.data.branches.nameBranch);
                consultar(user.id);
            }).catch((error)=>{});
        }
    };
    function consultar(idUser) {
        fetch(`${"http://localhost:4000"}/api/users/advancePlan/${idUser}`, {
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
            if (data.data) {
                let adelantos = data.data.advances;
                adelantos = adelantos.map((adelanto)=>{
                    var array = adelanto.createDate.split("T");
                    let u = {
                        name: adelanto.name,
                        createDate: array[0],
                        branches: adelanto.branches.nameBranch,
                        leader: adelanto.leader,
                        description: adelanto.description
                    };
                    return u;
                });
                tablaAdelantos.rows = adelantos;
                setTabla(tablaAdelantos);
            }
            miplan(rama);
            setLoading(false);
        }).catch((error)=>{});
    }
    function miplan(rama_) {
        switch(rama_){
            case "CACHORROS":
                setLink("/documents/ADELANTO_MANADA.pdf");
                break;
            case "LOBATOS":
                setLink("/documents/ADELANTO_MANADA");
                break;
            case "WEBELOS":
                setLink("/documents/ADELANTO_WEBELO.pdf");
                break;
            case "SCOUTS":
                setLink("/documents/ADELANTO_MANADA.pdf");
                break;
            case "ROVERS":
                setLink("/documents/ADELANTO_MANADA.pdf");
                break;
            default:
                setLink("/documents/ADELANTO_MANADA.pdf");
        }
    }
    //--------------------------------------------------------
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                    className: `${(_styles_dashboard_info_DataQuery_module_scss__WEBPACK_IMPORTED_MODULE_4___default().text_title)} p-5`,
                    children: "\xa1Este es tu progreso como Scout!"
                })
            }),
            loading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "row col-12 mt-5 justify-content-center",
                children: "Cargando Informaci\xf3n..."
            }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: `${(_styles_dashboard_info_DataQuery_module_scss__WEBPACK_IMPORTED_MODULE_4___default().text_data)} row justify-content-center py-3`,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: `${(_styles_dashboard_info_DataQuery_module_scss__WEBPACK_IMPORTED_MODULE_4___default().container)} py-5 w-100`,
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
                            data: tabla,
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
                            searchLabel: "Buscar por titulo",
                            noRecordsFoundLabel: "No se han encontrado registros"
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                        className: (_styles_dashboard_info_DataQuery_module_scss__WEBPACK_IMPORTED_MODULE_4___default().link_plan),
                        href: link,
                        children: [
                            "Conoce tu plan de adelantos ",
                            rama
                        ]
                    })
                ]
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;