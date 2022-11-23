exports.id = 1806;
exports.ids = [1806];
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

/***/ 1806:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ScoutPayment)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_dashboard_info_DataQuery_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9886);
/* harmony import */ var _styles_dashboard_info_DataQuery_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_dashboard_info_DataQuery_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var mdbreact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9539);
/* harmony import */ var mdbreact__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mdbreact__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);




// Corresponde a la ruta http://.../info/about
function ScoutPayment({ idPago  }) {
    const data_payment = {
        columns: [
            {
                label: "N\xfamero de recibo",
                field: "receiptNumber",
                sort: "asc",
                width: 150
            },
            {
                label: "Concepto",
                field: "concept",
                sort: "asc",
                width: 270
            },
            {
                label: "Valor",
                field: "amount",
                sort: "asc",
                width: 200
            },
            {
                label: "Observacion",
                field: "observation",
                sort: "asc",
                width: 150
            },
            {
                label: "Fecha",
                field: "date",
                sort: "asc",
                width: 100
            }, 
        ],
        rows: []
    };
    const { 0: loading , 1: setLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);
    const { 0: data , 1: setData  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(data_payment);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (idPago) {
            consultar(idPago);
        } else {
            fetch(`${"http://localhost:4000"}/api/auth/profile`, {
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
                consultar(data.user.id);
            });
        }
    }, []);
    function consultar(id_usuario) {
        fetch(`${"http://localhost:4000"}/api/users/payment/${id_usuario}`, {
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
                let puntero = data.data.payments.map((payment)=>{
                    let conceptos = payment.paymentConcepts.map((concept)=>concept.name);
                    let datos = {
                        receiptNumber: payment.receiptNumber,
                        concept: conceptos.join(", "),
                        amount: payment.amount,
                        observation: payment.observation,
                        date: payment.date.replace("T", " ").split(".")[0]
                    };
                    return datos;
                });
                data_payment.rows = puntero;
                setData(data_payment);
            }
            setLoading(false);
        });
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                    className: `${(_styles_dashboard_info_DataQuery_module_scss__WEBPACK_IMPORTED_MODULE_3___default().text_title)} p-5`,
                    children: "\xa1Estos son tus pagos como Scout!"
                })
            }),
            loading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "row col-12 mt-5 justify-content-center",
                children: "Cargando Informaci\xf3n..."
            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: `${(_styles_dashboard_info_DataQuery_module_scss__WEBPACK_IMPORTED_MODULE_3___default().text_data)} row justify-content-center py-3`,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: `${(_styles_dashboard_info_DataQuery_module_scss__WEBPACK_IMPORTED_MODULE_3___default().container)} py-5 w-100`,
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


/***/ })

};
;