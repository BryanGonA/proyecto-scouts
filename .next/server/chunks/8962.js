exports.id = 8962;
exports.ids = [8962];
exports.modules = {

/***/ 4441:
/***/ ((module) => {

// Exports
module.exports = {
	"tarjeta_fondo": "MedicalData_tarjeta_fondo__hl8km",
	"desc": "MedicalData_desc__oq5sU",
	"icon": "MedicalData_icon__pdjQ0",
	"title": "MedicalData_title__1bdeL",
	"input": "MedicalData_input__wlZ_k",
	"input2": "MedicalData_input2__EaiUA",
	"input3": "MedicalData_input3__VQZsp",
	"input4": "MedicalData_input4__l7YL0",
	"inputOb": "MedicalData_inputOb__70zc_",
	"inputOb2": "MedicalData_inputOb2__mQ8n9",
	"inputObser": "MedicalData_inputObser__c0n9Y",
	"button": "MedicalData_button__WK2rE",
	"botones": "MedicalData_botones__uFmiT",
	"mostrar": "MedicalData_mostrar__Oyd1o",
	"ocultar": "MedicalData_ocultar__p5kMX",
	"label": "MedicalData_label__tHzfQ"
};


/***/ }),

/***/ 8962:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ MedicalData)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_dashboard_info_MedicalData_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4441);
/* harmony import */ var _styles_dashboard_info_MedicalData_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_dashboard_info_MedicalData_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var sweetalert2_react_content__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3810);
/* harmony import */ var sweetalert2_react_content__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2_react_content__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _hooks_use_current_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8941);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks_use_current_user__WEBPACK_IMPORTED_MODULE_3__]);
_hooks_use_current_user__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





function MedicalData({ userId  }) {
    const { user , isLoading: loadingUser , error: userError  } = (0,_hooks_use_current_user__WEBPACK_IMPORTED_MODULE_3__/* .useCurrentUser */ .xJ)();
    // const mensajes = {
    //   "selectSomeItems": "Seleccione...",
    //   "allItemsAreSelected": "Todos las enfermedades han sido seleccionadas.",
    //   "selectAll": "Seleccionar todo",
    //   "search": "Buscar",
    //   "clearSearch": "Limpiar busqueda"
    // }
    // const enfermedades = [
    //   { label: "NINGUNO", value: "NINGUNO", disabled: false },
    //   { label: "MIGRAÑA", value: "MIGRAÑA", disabled: false },
    //   { label: "ANEMIA", value: "ANEMIA", disabled: false },
    //   { label: "NEUMONIA", value: "NEUMONIA", disabled: false },
    //   { label: "DIABETES", value: "DIABETES", disabled: false },
    //   { label: "ENFERMEDADES CARDIACAS", value: "ENFERMEDADES_CARDIACAS", disabled: false },
    //   { label: "MIOPIA", value: "MIOPIA", disabled: false },
    //   { label: "CONJUTIVITIS", value: "CONJUTIVITIS", disabled: false },
    //   { label: "ASTIGMATISMO", value: "ASTIGMATISMO", disabled: false },
    //   { label: "EPILEPSIA", value: "EPILEPSIA", disabled: false },
    //   { label: "ASMA", value: "ASMA", disabled: false },
    //   { label: "BRONQUITIS", value: "BRONQUITIS", disabled: false },
    //   { label: "HIPOTIROIDISMO", value: "HIPOTIROIDISMO", disabled: false },
    //   { label: "HIPERTENSION", value: "HIPERTENSION" },
    //   { label: "SINOSITIS", value: "SINOSITIS", disabled: false },
    //   { label: "HIPOGLISEMIA", value: "HIPOGLISEMIA", disabled: false },
    //   { label: "CONVULSIONES", value: "CONVULSIONES", disabled: false },
    //   { label: "PULMONIA", value: "PULMONIA", disabled: false },
    //   { label: {diseases}, value: {diseases}, disabled: false },
    // ];
    // let traumas = [
    //   { label: "NINGUNO", value: "NINGUNO", disabled: false },
    //   { label: "FRACTURAS", value: "FRACTURAS", disabled: false },
    //   { label: "DISLOCACIONES", value: "DISLOCACIONES", disabled: false },
    //   { label: "CIRUGIAS", value: "CIRUGIAS", disabled: false },
    //   { label: "DIABETES", value: "DIABETES", disabled: false },
    //   { label: "HOSPITALIZACIONES", value: "HOSPITALIZACIONES", disabled: false },
    //   { label: "ESGUINCES", value: "ESGUINCES", disabled: false },
    //   { label: "OTRAS", value: "OTRAS", disabled: false },
    // ];
    // const [selected, setSelected] = useState([]);
    // const [selected_traumas, setSelected_traumas] = useState([])
    //  const [values, setValues] = useState(null)
    // function interventionsChange() {
    //   let interventions: Intervention[] = []
    //   selected.forEach((intervention) => {
    //     if (intervention.value === 'OTROS') {
    //       if (document.getElementById('complicacion_salud_extra') !== null) {
    //         let otros = (document.getElementById('complicacion_salud_extra') as HTMLInputElement).value
    //         interventions.push({ typeIntervention: intervention.value, whichIntervention: otros })
    //       }
    //     } else {
    //       interventions.push({ typeIntervention: intervention.value })
    //     }
    //   })
    //   setValues({ ...values, dataHealth: { ...values.dataHealth, interventions: interventions } })
    // } function diseasesChange() {
    //   let diseases: Disease[] = []
    //   selected_traumas.forEach((disease) => {
    //     if (document.getElementById(`cual_${disease.value.toLowerCase()}`) !== null) {
    //       let otros = (document.getElementById(`cual_${disease.value.toLowerCase()}`) as HTMLInputElement).value
    //       diseases.push({ nameDisease: disease.value, whichDisease: otros })
    //     }
    //   })
    //   setValues({...values, dataHealth:{...values.dataHealth, diseases: diseases}})
    // }
    //  **********************
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (userId) {
            obtenerid(userId);
        } else {
            medical();
        }
    }, [
        user
    ]);
    function actualizar() {
        let account = {
            noteAllergies: btninput.current.value,
            noteDiseases: btninput2.current.value,
            noteMedicine: btninput3.current.value,
            doseTime: btninput4.current.value,
            specification: btninput5.current.value,
            observations: btninput6.current.value,
            healthSecure: btninput7.current.value,
            cardNumber: btninput8.current.value,
            privateDoctor: btninput9.current.value,
            doctorTelephone: btninput10.current.value
        };
        if (userId) {
            actualizarid(account, userId);
        } else {
            update(account);
        }
    }
    const actualizarid = (account, userid)=>{
        fetch(`${"http://localhost:4000"}/api/users/editDatahealth/${userid}`, {
            method: "PUT",
            headers: {
                "Referrer-Policy": "origin-when-cross-origin",
                "Content-Type": "application/json",
                "Authorization": "Bearer " + localStorage.getItem("auth_token"),
                "Access-Control-Allow-Origin": `${"http://localhost:3000"}`
            },
            body: JSON.stringify(account)
        }).then((res)=>{
            return res.json().then((data)=>{
                if (res.ok) {
                    return Promise.resolve(account);
                } else {
                    return Promise.reject(data);
                }
            });
        }).then((data)=>{
            MySwal.fire({
                icon: "success",
                title: "Datos actualizados!",
                text: "Los datos fueron actualizados correctamente",
                confirmButtonColor: "#31B411",
                confirmButtonText: "Continuar"
            }).then(function(isConfirm) {
                if (isConfirm) {
                    location.reload();
                }
            });
        }).catch((error)=>{});
    };
    const obtenerid = (userid)=>{
        fetch(`${"http://localhost:4000"}/api/users/dataHealth/${userid}`, {
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
            setMedicalData(data.data.dataHealth);
            diseases(data.data.dataHealth.diseases);
            inter(data.data.dataHealth.interventions);
            setLoading(false);
        }).catch((error)=>{});
    };
    const medical = ()=>{
        if (!loadingUser) {
            obtenerid(user.id);
        }
    };
    const Swal = __webpack_require__(271);
    const MySwal = sweetalert2_react_content__WEBPACK_IMPORTED_MODULE_2___default()(Swal);
    const update = (account)=>{
        if (!loadingUser) {
            actualizarid(account, user.id);
        }
    };
    const diseases = (diseases)=>{
        let respuesta = "";
        diseases.forEach((disease, index)=>{
            respuesta += disease.nameDisease + ": " + disease.whichDisease + ", ";
        });
        setDiseases(respuesta);
    };
    const inter = (interventions)=>{
        let answer = "";
        interventions.forEach((intervention, index)=>{
            answer += intervention.typeIntervention + (intervention.whichIntervention ? ": " + intervention.whichIntervention : "") + ", ";
        });
        setIntervention(answer);
    };
    const editar = ()=>{
        btnactualizar.current.style.visibility = "visible";
        btncancelar.current.style.visibility = "visible";
        btninput.current.className = `${(_styles_dashboard_info_MedicalData_module_scss__WEBPACK_IMPORTED_MODULE_4___default().input2)}`;
        btninput2.current.className = `${(_styles_dashboard_info_MedicalData_module_scss__WEBPACK_IMPORTED_MODULE_4___default().input2)}`;
        btninput3.current.className = `${(_styles_dashboard_info_MedicalData_module_scss__WEBPACK_IMPORTED_MODULE_4___default().input2)}`;
        btninput4.current.className = `${(_styles_dashboard_info_MedicalData_module_scss__WEBPACK_IMPORTED_MODULE_4___default().input2)}`;
        btninput5.current.className = `${(_styles_dashboard_info_MedicalData_module_scss__WEBPACK_IMPORTED_MODULE_4___default().input2)}`;
        btninput6.current.className = `${(_styles_dashboard_info_MedicalData_module_scss__WEBPACK_IMPORTED_MODULE_4___default().inputOb)}`;
        btninput7.current.className = `${(_styles_dashboard_info_MedicalData_module_scss__WEBPACK_IMPORTED_MODULE_4___default().input2)}`;
        btninput8.current.className = `${(_styles_dashboard_info_MedicalData_module_scss__WEBPACK_IMPORTED_MODULE_4___default().input2)}`;
        btninput9.current.className = `${(_styles_dashboard_info_MedicalData_module_scss__WEBPACK_IMPORTED_MODULE_4___default().input2)}`;
        btninput10.current.className = `${(_styles_dashboard_info_MedicalData_module_scss__WEBPACK_IMPORTED_MODULE_4___default().input2)}`;
        btninput.current.readOnly = false;
        btninput2.current.readOnly = false;
        btninput3.current.readOnly = false;
        btninput4.current.readOnly = false;
        btninput5.current.readOnly = false;
        btninput6.current.readOnly = false;
        btninput7.current.readOnly = false;
        btninput8.current.readOnly = false;
        btninput9.current.readOnly = false;
        btninput10.current.readOnly = false;
    };
    const cancelar = ()=>{
        btnactualizar.current.style.visibility = "hidden";
        btncancelar.current.style.visibility = "hidden";
        btninput.current.className = `${(_styles_dashboard_info_MedicalData_module_scss__WEBPACK_IMPORTED_MODULE_4___default().input)}`;
        btninput2.current.className = `${(_styles_dashboard_info_MedicalData_module_scss__WEBPACK_IMPORTED_MODULE_4___default().input)}`;
        btninput3.current.className = `${(_styles_dashboard_info_MedicalData_module_scss__WEBPACK_IMPORTED_MODULE_4___default().input)}`;
        btninput4.current.className = `${(_styles_dashboard_info_MedicalData_module_scss__WEBPACK_IMPORTED_MODULE_4___default().input)}`;
        btninput5.current.className = `${(_styles_dashboard_info_MedicalData_module_scss__WEBPACK_IMPORTED_MODULE_4___default().input)}`;
        btninput6.current.className = `${(_styles_dashboard_info_MedicalData_module_scss__WEBPACK_IMPORTED_MODULE_4___default().inputObser)}`;
        btninput7.current.className = `${(_styles_dashboard_info_MedicalData_module_scss__WEBPACK_IMPORTED_MODULE_4___default().input)}`;
        btninput8.current.className = `${(_styles_dashboard_info_MedicalData_module_scss__WEBPACK_IMPORTED_MODULE_4___default().input)}`;
        btninput9.current.className = `${(_styles_dashboard_info_MedicalData_module_scss__WEBPACK_IMPORTED_MODULE_4___default().input)}`;
        btninput10.current.className = `${(_styles_dashboard_info_MedicalData_module_scss__WEBPACK_IMPORTED_MODULE_4___default().input)}`;
        btninput.current.readOnly = true;
        btninput2.current.readOnly = true;
        btninput3.current.readOnly = true;
        btninput4.current.readOnly = true;
        btninput5.current.readOnly = true;
        btninput6.current.readOnly = true;
        btninput7.current.readOnly = true;
        btninput8.current.readOnly = true;
        btninput9.current.readOnly = true;
        btninput10.current.readOnly = true;
    };
    const btnactualizar = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const btncancelar = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const btninput = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const btninput2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const btninput3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const btninput4 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const btninput5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const btninput6 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const btninput7 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const btninput8 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const btninput9 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const btninput10 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const { 0: medicalData , 1: setMedicalData  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const { 0: loading , 1: setLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    const { 0: disease , 1: setDiseases  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const { 0: intervention , 1: setIntervention  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    // const [only, setOnly] = useState({medicalData, disease, intervention})
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
        children: [
            " ",
            loading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                children: "Cargando informaci\xf3n....."
            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: `${(_styles_dashboard_info_MedicalData_module_scss__WEBPACK_IMPORTED_MODULE_4___default().secpad)}`,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_styles_dashboard_info_MedicalData_module_scss__WEBPACK_IMPORTED_MODULE_4___default().tarjeta_fondo),
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: `${(_styles_dashboard_info_MedicalData_module_scss__WEBPACK_IMPORTED_MODULE_4___default().desc)}`,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "row",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "col-10",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                        className: (_styles_dashboard_info_MedicalData_module_scss__WEBPACK_IMPORTED_MODULE_4___default().desc),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                className: (_styles_dashboard_info_MedicalData_module_scss__WEBPACK_IMPORTED_MODULE_4___default().label),
                                                children: "Alergias:"
                                            }),
                                            " ",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                className: (_styles_dashboard_info_MedicalData_module_scss__WEBPACK_IMPORTED_MODULE_4___default().input),
                                                defaultValue: medicalData.allergies ? medicalData.noteAllergies : "Ninguna",
                                                ref: btninput,
                                                readOnly: true,
                                                onChange: (e)=>{
                                                    e.target.value = e.target.value.toUpperCase();
                                                }
                                            })
                                        ]
                                    })
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "row",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "col-lg-10",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                        className: (_styles_dashboard_info_MedicalData_module_scss__WEBPACK_IMPORTED_MODULE_4___default().desc),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                className: (_styles_dashboard_info_MedicalData_module_scss__WEBPACK_IMPORTED_MODULE_4___default().label),
                                                children: "Enfermedades:"
                                            }),
                                            " ",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                className: (_styles_dashboard_info_MedicalData_module_scss__WEBPACK_IMPORTED_MODULE_4___default().input),
                                                defaultValue: medicalData.disease ? medicalData.noteDiseases : "Ninguna",
                                                ref: btninput2,
                                                readOnly: true,
                                                onChange: (e)=>{
                                                    e.target.value = e.target.value.toUpperCase();
                                                }
                                            })
                                        ]
                                    })
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "row",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "col-10",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                        className: (_styles_dashboard_info_MedicalData_module_scss__WEBPACK_IMPORTED_MODULE_4___default().desc),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                className: (_styles_dashboard_info_MedicalData_module_scss__WEBPACK_IMPORTED_MODULE_4___default().label),
                                                children: " Medicamentos permanentes:"
                                            }),
                                            " ",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                className: (_styles_dashboard_info_MedicalData_module_scss__WEBPACK_IMPORTED_MODULE_4___default().input),
                                                defaultValue: medicalData.medicine ? medicalData.noteMedicine : "Ninguna",
                                                ref: btninput3,
                                                readOnly: true,
                                                onChange: (e)=>{
                                                    e.target.value = e.target.value.toUpperCase();
                                                }
                                            })
                                        ]
                                    })
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "row",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "col-lg-6",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                            className: (_styles_dashboard_info_MedicalData_module_scss__WEBPACK_IMPORTED_MODULE_4___default().desc),
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                    className: (_styles_dashboard_info_MedicalData_module_scss__WEBPACK_IMPORTED_MODULE_4___default().label),
                                                    children: " Dosis / Tiempo:"
                                                }),
                                                " ",
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                    className: (_styles_dashboard_info_MedicalData_module_scss__WEBPACK_IMPORTED_MODULE_4___default().input),
                                                    defaultValue: medicalData.doseTime ? medicalData.doseTime : "N/A",
                                                    ref: btninput4,
                                                    readOnly: true,
                                                    onChange: (e)=>{
                                                        e.target.value = e.target.value.toUpperCase();
                                                    }
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "col-1",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                            className: (_styles_dashboard_info_MedicalData_module_scss__WEBPACK_IMPORTED_MODULE_4___default().desc),
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                    className: (_styles_dashboard_info_MedicalData_module_scss__WEBPACK_IMPORTED_MODULE_4___default().label),
                                                    children: " Especificaciones:"
                                                }),
                                                " ",
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                    className: (_styles_dashboard_info_MedicalData_module_scss__WEBPACK_IMPORTED_MODULE_4___default().input),
                                                    defaultValue: medicalData.specification ? medicalData.specification : "N/A",
                                                    ref: btninput5,
                                                    readOnly: true,
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
                                    className: "col-10",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                        className: (_styles_dashboard_info_MedicalData_module_scss__WEBPACK_IMPORTED_MODULE_4___default().desc),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                className: (_styles_dashboard_info_MedicalData_module_scss__WEBPACK_IMPORTED_MODULE_4___default().label),
                                                children: " Observaciones:"
                                            }),
                                            " ",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                className: (_styles_dashboard_info_MedicalData_module_scss__WEBPACK_IMPORTED_MODULE_4___default().inputObser),
                                                defaultValue: medicalData.observations ? medicalData.observations : "N/A",
                                                ref: btninput6,
                                                readOnly: true,
                                                onChange: (e)=>{
                                                    e.target.value = e.target.value.toUpperCase();
                                                }
                                            })
                                        ]
                                    })
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "row",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "col-6",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                            className: (_styles_dashboard_info_MedicalData_module_scss__WEBPACK_IMPORTED_MODULE_4___default().desc),
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                                    className: (_styles_dashboard_info_MedicalData_module_scss__WEBPACK_IMPORTED_MODULE_4___default().label),
                                                    children: "Seguro m\xe9dico:"
                                                }),
                                                " ",
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                    className: (_styles_dashboard_info_MedicalData_module_scss__WEBPACK_IMPORTED_MODULE_4___default().input),
                                                    defaultValue: medicalData.healthSecure ? medicalData.healthSecure : "N/A",
                                                    ref: btninput7,
                                                    readOnly: true,
                                                    onChange: (e)=>{
                                                        e.target.value = e.target.value.toUpperCase();
                                                    }
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "col-6",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                            className: (_styles_dashboard_info_MedicalData_module_scss__WEBPACK_IMPORTED_MODULE_4___default().desc),
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                                    className: (_styles_dashboard_info_MedicalData_module_scss__WEBPACK_IMPORTED_MODULE_4___default().label),
                                                    children: "N\xfamero de carnet:"
                                                }),
                                                " ",
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                    className: (_styles_dashboard_info_MedicalData_module_scss__WEBPACK_IMPORTED_MODULE_4___default().input),
                                                    defaultValue: medicalData.cardNumber ? medicalData.cardNumber : "N/A",
                                                    ref: btninput8,
                                                    readOnly: true
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
                                        className: "col-6",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                            className: (_styles_dashboard_info_MedicalData_module_scss__WEBPACK_IMPORTED_MODULE_4___default().desc),
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                                    className: (_styles_dashboard_info_MedicalData_module_scss__WEBPACK_IMPORTED_MODULE_4___default().label),
                                                    children: " M\xe9dico particular:"
                                                }),
                                                " ",
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                    className: (_styles_dashboard_info_MedicalData_module_scss__WEBPACK_IMPORTED_MODULE_4___default().input),
                                                    defaultValue: medicalData.privateDoctor ? medicalData.privateDoctor : "N/A",
                                                    ref: btninput9,
                                                    readOnly: true,
                                                    onChange: (e)=>{
                                                        e.target.value = e.target.value.toUpperCase();
                                                    }
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "col-6",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                            className: (_styles_dashboard_info_MedicalData_module_scss__WEBPACK_IMPORTED_MODULE_4___default().desc),
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                                    className: (_styles_dashboard_info_MedicalData_module_scss__WEBPACK_IMPORTED_MODULE_4___default().label),
                                                    children: " N\xfamero telef\xf3nico:"
                                                }),
                                                " ",
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                    className: (_styles_dashboard_info_MedicalData_module_scss__WEBPACK_IMPORTED_MODULE_4___default().input),
                                                    defaultValue: medicalData.doctorTelephone ? medicalData.doctorTelephone : "N/A",
                                                    ref: btninput10,
                                                    readOnly: true
                                                })
                                            ]
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: (_styles_dashboard_info_MedicalData_module_scss__WEBPACK_IMPORTED_MODULE_4___default().title),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                    children: " Datos de salud actual"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "row",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "col-10",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                        className: (_styles_dashboard_info_MedicalData_module_scss__WEBPACK_IMPORTED_MODULE_4___default().desc),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                                children: "\xbfTienes alguna complicaci\xf3n de salud actualmente?: "
                                            }),
                                            " ",
                                            medicalData.interventions.length > 0 ? "Si" : "No"
                                        ]
                                    })
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "row",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "col-10",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                        className: (_styles_dashboard_info_MedicalData_module_scss__WEBPACK_IMPORTED_MODULE_4___default().desc),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                                children: "Afectaciones de salud: "
                                            }),
                                            "   ",
                                            intervention
                                        ]
                                    })
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: (_styles_dashboard_info_MedicalData_module_scss__WEBPACK_IMPORTED_MODULE_4___default().title),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                    children: "Datos de salud adicional"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "row",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "col-10",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                        className: (_styles_dashboard_info_MedicalData_module_scss__WEBPACK_IMPORTED_MODULE_4___default().desc),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                                children: "\xbfTiene o ha tenido alguna intervenci\xf3n de salud?:"
                                            }),
                                            " ",
                                            medicalData.diseases.length > 0 ? "Si" : "No"
                                        ]
                                    })
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "row",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "col-10",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                            className: (_styles_dashboard_info_MedicalData_module_scss__WEBPACK_IMPORTED_MODULE_4___default().desc),
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                                    children: "Intervenciones de salud:"
                                                }),
                                                " ",
                                                disease
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: `${(_styles_dashboard_info_MedicalData_module_scss__WEBPACK_IMPORTED_MODULE_4___default().icon)}`,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                            className: (_styles_dashboard_info_MedicalData_module_scss__WEBPACK_IMPORTED_MODULE_4___default().button),
                                            onClick: editar,
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                                width: "2.5em",
                                                height: "2.5em",
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
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_styles_dashboard_info_MedicalData_module_scss__WEBPACK_IMPORTED_MODULE_4___default().botones),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        ref: btnactualizar,
                                        className: `btn btn-outline-success ${(_styles_dashboard_info_MedicalData_module_scss__WEBPACK_IMPORTED_MODULE_4___default().ocultar)}`,
                                        onClick: actualizar,
                                        children: " Actualizar "
                                    }),
                                    " ",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        ref: btncancelar,
                                        className: `btn btn-outline-danger ${(_styles_dashboard_info_MedicalData_module_scss__WEBPACK_IMPORTED_MODULE_4___default().ocultar)}`,
                                        onClick: cancelar,
                                        children: "Cancelar"
                                    })
                                ]
                            })
                        ]
                    })
                })
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;