exports.id = 8456;
exports.ids = [8456];
exports.modules = {

/***/ 7542:
/***/ ((module) => {

// Exports
module.exports = {
	"contenedor": "Agregar_contenedor__DeR7L",
	"contenedor_btns": "Agregar_contenedor_btns__zPR3m",
	"text_title": "Agregar_text_title__jNBCJ",
	"icon": "Agregar_icon__BQESi",
	"titulo": "Agregar_titulo__9IuKi",
	"subtitulo": "Agregar_subtitulo__MI6BR",
	"desc": "Agregar_desc__YjfOx",
	"label": "Agregar_label__VODvX",
	"input": "Agregar_input__608mG",
	"logo": "Agregar_logo__OSStO",
	"label1": "Agregar_label1__vlfzi",
	"inputR": "Agregar_inputR__LkEIY",
	"rec": "Agregar_rec__mnbXg",
	"inputObser": "Agregar_inputObser__cAI0y",
	"botones": "Agregar_botones___9H2W"
};


/***/ }),

/***/ 8456:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ GestionPagos)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_dashboard_tesorero_Agregar_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7542);
/* harmony import */ var _styles_dashboard_tesorero_Agregar_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_dashboard_tesorero_Agregar_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var sweetalert2_react_content__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3810);
/* harmony import */ var sweetalert2_react_content__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2_react_content__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);





function GestionPagos({ id , paymentId  }) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const i_tvalue = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const i_recibo = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const i_payDate = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const i_curses = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const i_monthPay = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const i_shirt = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const i_excursion = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const i_nocturnal = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const i_card = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const i_uniform = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const i_inscrip = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const i_act = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const i_camp = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const i_insig = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const i_other = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const i_observ = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const btn_agregar = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const btn_cancelar = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const { 0: name , 1: setName  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: inputValues , 1: setInputValues  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const Swal = __webpack_require__(271);
    const MySwal = sweetalert2_react_content__WEBPACK_IMPORTED_MODULE_2___default()(Swal);
    function returnDate() {
        let hoy = new Date();
        var dd = hoy.getDate();
        var dayString = "" + dd;
        if (dd < 9) dayString = "0" + dd;
        var mm = hoy.getMonth() + 1;
        var monthString = "" + mm;
        if (mm < 9) monthString = "0" + mm;
        let yyyy = hoy.getFullYear();
        return yyyy + "-" + monthString + "-" + dayString;
    }
    const onChange = ()=>{
        let rec_pagos = {
            amount: 0,
            receiptNumber: i_recibo.current.value,
            date: i_payDate.current.value,
            observation: i_observ.current.value,
            paymentConcepts: []
        };
        inputValues.forEach((value)=>{
            agregarDato(rec_pagos, value.ref, value.name);
        });
        rec_pagos.amount = total(rec_pagos);
        i_tvalue.current.value = total(rec_pagos);
        return rec_pagos;
    };
    function actions() {
        if (paymentId) {
            editar();
        } else {
            agregar();
        }
    }
    function agregar() {
        btn_agregar.current.style.visibility = "visible";
        btn_cancelar.current.style.visibility = "visible";
        enviar(onChange());
    }
    function editar() {
        btn_agregar.current.style.visibility = "visible";
        btn_cancelar.current.style.visibility = "visible";
        enviarEditar(onChange(), id, paymentId);
    }
    function total(rec_pagos) {
        let suma = 0;
        rec_pagos.paymentConcepts.forEach((concepto)=>{
            suma += concepto.amount;
        });
        return suma;
    }
    function agregarDato(pagos, input, concepto) {
        let valor = Number.parseInt(input.current.value);
        if (valor > 0) {
            pagos.paymentConcepts.push({
                name: concepto,
                amount: valor
            });
        }
    }
    const enviar = (pagos)=>{
        fetch(`${"http://localhost:4000"}/api/users/payments/${id}`, {
            method: "POST",
            headers: {
                "Referrer-Policy": "origin-when-cross-origin",
                "Authorization": "Bearer " + localStorage.getItem("auth_token"),
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": `${"http://localhost:3000"}`
            },
            body: JSON.stringify(pagos)
        }).then((res)=>{
            if (res.ok) {
                return Promise.resolve({
                    message: "Pago agregado correctamente"
                });
            } else {
                return Promise.reject({
                    message: "Hubo un error al intentar registrar el pago"
                });
            }
        }).then((data)=>{
            MySwal.fire({
                icon: "success",
                title: "Pago registrado!",
                text: data.message,
                confirmButtonColor: "#31B411",
                confirmButtonText: "Continuar"
            }).then(function(isConfirm) {
                if (isConfirm) {
                    location.reload();
                }
            });
        });
    };
    const enviarEditar = (pagos, userId, paymentId)=>{
        pagos = {
            ...pagos,
            id: Number.parseInt(paymentId)
        };
        fetch(`${"http://localhost:4000"}/api/users/editpayments/${userId}`, {
            method: "PUT",
            headers: {
                "Referrer-Policy": "origin-when-cross-origin",
                "Authorization": "Bearer " + localStorage.getItem("auth_token"),
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": `${"http://localhost:3000"}`
            },
            body: JSON.stringify(pagos)
        }).then((res)=>{
            if (res.ok) {
                return Promise.resolve({
                    message: "Pago actualizado correctamente"
                });
            } else {
                return Promise.reject({
                    message: "Hubo un error al intentar registrar el pago"
                });
            }
        }).then((data)=>{
            MySwal.fire({
                icon: "success",
                title: "Pago actualizado!",
                text: data.message,
                confirmButtonColor: "#31B411",
                confirmButtonText: "Continuar"
            }).then(function(isConfirm) {
                if (isConfirm) {
                    location.reload();
                }
            });
        });
    };
    function getUser(userId) {
        fetch(`${"http://localhost:4000"}/api/users/${userId}`, {
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
            setName(data.data.name + " " + data.data.lastName);
        });
    }
    function getUserPayment(userId, paymentId) {
        fetch(`${"http://localhost:4000"}/api/users/payment/${userId}`, {
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
            let payments = data.data.payments.filter((payment)=>payment.id == Number.parseInt(paymentId));
            if (payments.length > 0) {
                let payment = payments[0];
                i_tvalue.current.value = payment.amount;
                i_recibo.current.value = payment.receiptNumber;
                i_observ.current.value = payment.observation;
                let date = new Date(payment.date);
                let string = date.toISOString().split("T")[0].split("-");
                i_payDate.current.value = string[0] + "-" + string[2] + "-" + string[1];
                payment.paymentConcepts.forEach((concept)=>{
                    let input = getInputValue(concept.name);
                    if (input) {
                        input.current.value = concept.amount;
                    }
                });
            }
        });
    }
    function getInputValue(name) {
        let input = null;
        inputValues.forEach((value)=>{
            if (value.name === name) {
                input = value.ref;
            }
        });
        return input;
    }
    function setValues() {
        let values = [];
        values.push({
            name: "CURSOS",
            ref: i_curses
        });
        values.push({
            name: "MENSUALIDAD",
            ref: i_monthPay
        });
        values.push({
            name: "CAMISETA",
            ref: i_shirt
        });
        values.push({
            name: "EXCURSION",
            ref: i_excursion
        });
        values.push({
            name: "NOCTURNA",
            ref: i_nocturnal
        });
        values.push({
            name: "CARNE",
            ref: i_card
        });
        values.push({
            name: "UNIFORME",
            ref: i_uniform
        });
        values.push({
            name: "INSCRIPC.",
            ref: i_inscrip
        });
        values.push({
            name: "PLAN ADEL.",
            ref: i_act
        });
        values.push({
            name: "CAMPAMENTO",
            ref: i_camp
        });
        values.push({
            name: "INSIGNIAS",
            ref: i_insig
        });
        values.push({
            name: "OTROS",
            ref: i_other
        });
        setInputValues(values);
    }
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setValues();
        getUser(id);
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (paymentId && inputValues.length > 0) {
            getUserPayment(id, paymentId);
        }
    }, [
        inputValues
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                    className: `${(_styles_dashboard_tesorero_Agregar_module_scss__WEBPACK_IMPORTED_MODULE_4___default().text_title)} p-5`,
                    children: [
                        "\xa1Registro de pago ",
                        name,
                        "!"
                    ]
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                className: (_styles_dashboard_tesorero_Agregar_module_scss__WEBPACK_IMPORTED_MODULE_4___default().contenedor),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                            className: (_styles_dashboard_tesorero_Agregar_module_scss__WEBPACK_IMPORTED_MODULE_4___default().titulo),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    className: (_styles_dashboard_tesorero_Agregar_module_scss__WEBPACK_IMPORTED_MODULE_4___default().logo),
                                    src: "/logo.png",
                                    alt: "Logo 113"
                                }),
                                "Grupo Scout 113",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: (_styles_dashboard_tesorero_Agregar_module_scss__WEBPACK_IMPORTED_MODULE_4___default().subtitulo),
                                    children: '"Centinelas"'
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: `${(_styles_dashboard_tesorero_Agregar_module_scss__WEBPACK_IMPORTED_MODULE_4___default().rec)} form row `,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col-sm-12 col-md-10 col-lg-10",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                className: (_styles_dashboard_tesorero_Agregar_module_scss__WEBPACK_IMPORTED_MODULE_4___default().desc),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                        className: (_styles_dashboard_tesorero_Agregar_module_scss__WEBPACK_IMPORTED_MODULE_4___default().label1),
                                        children: "Recibo N\xb0"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        placeholder: "N\xfamero de recibo",
                                        ref: i_recibo,
                                        className: `${(_styles_dashboard_tesorero_Agregar_module_scss__WEBPACK_IMPORTED_MODULE_4___default().inputR)} form-control`,
                                        type: "text",
                                        maxLength: 30
                                    })
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "row col-12",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "col-sm-12 col-md-6 col-lg-6",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                    className: (_styles_dashboard_tesorero_Agregar_module_scss__WEBPACK_IMPORTED_MODULE_4___default().desc),
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                            className: (_styles_dashboard_tesorero_Agregar_module_scss__WEBPACK_IMPORTED_MODULE_4___default().label),
                                            children: "Valor total"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                            ref: i_tvalue,
                                            className: `${(_styles_dashboard_tesorero_Agregar_module_scss__WEBPACK_IMPORTED_MODULE_4___default().inputR)} form-control`,
                                            readOnly: true,
                                            disabled: true,
                                            type: "text",
                                            maxLength: 30
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "col-sm-12 col-md-6 col-lg-6",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                    className: (_styles_dashboard_tesorero_Agregar_module_scss__WEBPACK_IMPORTED_MODULE_4___default().desc),
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                            className: (_styles_dashboard_tesorero_Agregar_module_scss__WEBPACK_IMPORTED_MODULE_4___default().label),
                                            children: "Fecha"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                            ref: i_payDate,
                                            className: `${(_styles_dashboard_tesorero_Agregar_module_scss__WEBPACK_IMPORTED_MODULE_4___default().input)} form-control`,
                                            type: "date",
                                            max: returnDate()
                                        })
                                    ]
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "row col-12",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "col-lg-4",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                    className: (_styles_dashboard_tesorero_Agregar_module_scss__WEBPACK_IMPORTED_MODULE_4___default().desc),
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                            className: (_styles_dashboard_tesorero_Agregar_module_scss__WEBPACK_IMPORTED_MODULE_4___default().label),
                                            children: "Cursos"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                            placeholder: "Valor",
                                            ref: i_curses,
                                            className: `${(_styles_dashboard_tesorero_Agregar_module_scss__WEBPACK_IMPORTED_MODULE_4___default().input)} form-control`,
                                            type: "number",
                                            maxLength: 30,
                                            onChange: onChange
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "col-lg-4",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                    className: (_styles_dashboard_tesorero_Agregar_module_scss__WEBPACK_IMPORTED_MODULE_4___default().desc),
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                            className: (_styles_dashboard_tesorero_Agregar_module_scss__WEBPACK_IMPORTED_MODULE_4___default().label),
                                            children: "Mensualidad"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                            placeholder: "Valor",
                                            ref: i_monthPay,
                                            className: `${(_styles_dashboard_tesorero_Agregar_module_scss__WEBPACK_IMPORTED_MODULE_4___default().input)} form-control`,
                                            type: "number",
                                            maxLength: 30,
                                            onChange: onChange
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "col-lg-4",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                    className: (_styles_dashboard_tesorero_Agregar_module_scss__WEBPACK_IMPORTED_MODULE_4___default().desc),
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                            className: (_styles_dashboard_tesorero_Agregar_module_scss__WEBPACK_IMPORTED_MODULE_4___default().label),
                                            children: "Camiseta"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                            placeholder: "Valor",
                                            ref: i_shirt,
                                            className: `${(_styles_dashboard_tesorero_Agregar_module_scss__WEBPACK_IMPORTED_MODULE_4___default().input)} form-control`,
                                            type: "number",
                                            maxLength: 30,
                                            onChange: onChange
                                        })
                                    ]
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "row col-12",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "col-lg-4",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                    className: (_styles_dashboard_tesorero_Agregar_module_scss__WEBPACK_IMPORTED_MODULE_4___default().desc),
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                            className: (_styles_dashboard_tesorero_Agregar_module_scss__WEBPACK_IMPORTED_MODULE_4___default().label),
                                            children: "Excursi\xf3n"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                            placeholder: "Valor",
                                            ref: i_excursion,
                                            className: `${(_styles_dashboard_tesorero_Agregar_module_scss__WEBPACK_IMPORTED_MODULE_4___default().input)} form-control`,
                                            type: "number",
                                            maxLength: 30,
                                            onChange: onChange
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "col-lg-4",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                    className: (_styles_dashboard_tesorero_Agregar_module_scss__WEBPACK_IMPORTED_MODULE_4___default().desc),
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                            className: (_styles_dashboard_tesorero_Agregar_module_scss__WEBPACK_IMPORTED_MODULE_4___default().label),
                                            children: "Nocturna"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                            placeholder: "Valor",
                                            ref: i_nocturnal,
                                            className: `${(_styles_dashboard_tesorero_Agregar_module_scss__WEBPACK_IMPORTED_MODULE_4___default().input)} form-control`,
                                            type: "number",
                                            maxLength: 30,
                                            onChange: onChange
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "col-lg-4",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                    className: (_styles_dashboard_tesorero_Agregar_module_scss__WEBPACK_IMPORTED_MODULE_4___default().desc),
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                            className: (_styles_dashboard_tesorero_Agregar_module_scss__WEBPACK_IMPORTED_MODULE_4___default().label),
                                            children: "Carn\xe9"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                            placeholder: "Valor",
                                            ref: i_card,
                                            className: `${(_styles_dashboard_tesorero_Agregar_module_scss__WEBPACK_IMPORTED_MODULE_4___default().input)} form-control`,
                                            type: "number",
                                            maxLength: 30,
                                            onChange: onChange
                                        })
                                    ]
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "row col-12",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "col-lg-4",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                    className: (_styles_dashboard_tesorero_Agregar_module_scss__WEBPACK_IMPORTED_MODULE_4___default().desc),
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                            className: (_styles_dashboard_tesorero_Agregar_module_scss__WEBPACK_IMPORTED_MODULE_4___default().label),
                                            children: "Uniforme"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                            placeholder: "Valor",
                                            ref: i_uniform,
                                            className: `${(_styles_dashboard_tesorero_Agregar_module_scss__WEBPACK_IMPORTED_MODULE_4___default().input)} form-control`,
                                            type: "number",
                                            maxLength: 30,
                                            onChange: onChange
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "col-lg-4",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                    className: (_styles_dashboard_tesorero_Agregar_module_scss__WEBPACK_IMPORTED_MODULE_4___default().desc),
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                            className: (_styles_dashboard_tesorero_Agregar_module_scss__WEBPACK_IMPORTED_MODULE_4___default().label),
                                            children: "Inscripci\xf3n"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                            placeholder: "Valor",
                                            ref: i_inscrip,
                                            className: `${(_styles_dashboard_tesorero_Agregar_module_scss__WEBPACK_IMPORTED_MODULE_4___default().input)} form-control`,
                                            type: "number",
                                            maxLength: 30,
                                            onChange: onChange
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "col-lg-4",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                    className: (_styles_dashboard_tesorero_Agregar_module_scss__WEBPACK_IMPORTED_MODULE_4___default().desc),
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                            className: (_styles_dashboard_tesorero_Agregar_module_scss__WEBPACK_IMPORTED_MODULE_4___default().label),
                                            children: "Act. Eco"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                            placeholder: "Valor",
                                            ref: i_act,
                                            className: `${(_styles_dashboard_tesorero_Agregar_module_scss__WEBPACK_IMPORTED_MODULE_4___default().input)} form-control`,
                                            type: "number",
                                            maxLength: 30,
                                            onChange: onChange
                                        })
                                    ]
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "row col-12",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "col-lg-4",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                    className: (_styles_dashboard_tesorero_Agregar_module_scss__WEBPACK_IMPORTED_MODULE_4___default().desc),
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                            className: (_styles_dashboard_tesorero_Agregar_module_scss__WEBPACK_IMPORTED_MODULE_4___default().label),
                                            children: "Campamento"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                            placeholder: "Valor",
                                            ref: i_camp,
                                            className: `${(_styles_dashboard_tesorero_Agregar_module_scss__WEBPACK_IMPORTED_MODULE_4___default().input)} form-control`,
                                            type: "number",
                                            maxLength: 30,
                                            onChange: onChange
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "col-lg-4",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                    className: (_styles_dashboard_tesorero_Agregar_module_scss__WEBPACK_IMPORTED_MODULE_4___default().desc),
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                            className: (_styles_dashboard_tesorero_Agregar_module_scss__WEBPACK_IMPORTED_MODULE_4___default().label),
                                            children: "Insignias"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                            placeholder: "Valor",
                                            ref: i_insig,
                                            className: `${(_styles_dashboard_tesorero_Agregar_module_scss__WEBPACK_IMPORTED_MODULE_4___default().input)} form-control`,
                                            type: "number",
                                            maxLength: 30,
                                            onChange: onChange
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "col-lg-4",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                    className: (_styles_dashboard_tesorero_Agregar_module_scss__WEBPACK_IMPORTED_MODULE_4___default().desc),
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                            className: (_styles_dashboard_tesorero_Agregar_module_scss__WEBPACK_IMPORTED_MODULE_4___default().label),
                                            children: "Otros"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                            placeholder: "Valor",
                                            ref: i_other,
                                            className: `${(_styles_dashboard_tesorero_Agregar_module_scss__WEBPACK_IMPORTED_MODULE_4___default().input)} form-control`,
                                            type: "number",
                                            maxLength: 30,
                                            onChange: onChange
                                        })
                                    ]
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "row col-12",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col-sm-12 col-md-10 col-lg-10",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                className: (_styles_dashboard_tesorero_Agregar_module_scss__WEBPACK_IMPORTED_MODULE_4___default().desc),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                        className: (_styles_dashboard_tesorero_Agregar_module_scss__WEBPACK_IMPORTED_MODULE_4___default().label),
                                        children: "Observaciones"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        placeholder: "Ingrese una observaci\xf3n de ser necesario...",
                                        ref: i_observ,
                                        className: `${(_styles_dashboard_tesorero_Agregar_module_scss__WEBPACK_IMPORTED_MODULE_4___default().inputObser)} input-group`,
                                        type: "text"
                                    })
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_styles_dashboard_tesorero_Agregar_module_scss__WEBPACK_IMPORTED_MODULE_4___default().contenedor_btns),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                ref: btn_agregar,
                                className: `btn btn-success ${(_styles_dashboard_tesorero_Agregar_module_scss__WEBPACK_IMPORTED_MODULE_4___default().botones)}`,
                                onClick: actions,
                                children: paymentId ? "Actualizar Pago" : "Agregar Pago"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                ref: btn_cancelar,
                                className: `btn btn-danger ${(_styles_dashboard_tesorero_Agregar_module_scss__WEBPACK_IMPORTED_MODULE_4___default().botones)}`,
                                onClick: ()=>router.push("/dashboard/tesorero"),
                                children: paymentId ? "Cancelar" : "Cancelar Pago"
                            })
                        ]
                    })
                ]
            })
        ]
    });
} /*Se comento todo el codido de abajo ya que este funciona con los campos de cantidad */  // import styles from "~/styles/dashboard/tesorero/Agregar.module.scss";
 // import { MutableRefObject, useEffect, useRef, useState } from "react";
 // import withReactContent from 'sweetalert2-react-content'
 // import { useRouter } from "next/router";
 // export default function GestionPagos({ id, paymentId }: any) {
 //     const router = useRouter()
 //     //constantes
 //     const i_tvalue = useRef(null)
 //     const i_recibo = useRef(null)
 //     const i_payDate = useRef(null)
 //     const i_curses = useRef(null)
 //     const i_monthPay = useRef(null)
 //     const i_shirt = useRef(null)
 //     const i_excursion = useRef(null)
 //     const i_nocturnal = useRef(null)
 //     const i_card = useRef(null)
 //     const i_uniform = useRef(null)
 //     const i_inscrip = useRef(null)
 //     const i_act = useRef(null)
 //     const i_camp = useRef(null)
 //     const i_insig = useRef(null)
 //     const i_other = useRef(null)
 //     const i_observ = useRef(null)
 //     //cantidades 
 //     const cant_curs = useRef(null)
 //     const cant_camiseta = useRef(null)
 //     const cant_exc = useRef(null)
 //     const cant_noct = useRef(null)
 //     const cant_carnet = useRef(null)
 //     const cant_unif = useRef(null)
 //     const cant_inscrip = useRef(null)
 //     const cant_actEco = useRef(null)
 //     const cant_camp = useRef(null)
 //     const cant_insig = useRef(null)
 //     //botones
 //     const btn_agregar = useRef(null)
 //     const btn_cancelar = useRef(null)
 //     const [name, setName] = useState('')
 //     const [inputValues, setInputValues] = useState([])
 //     const Swal = require('sweetalert2')
 //     const MySwal = withReactContent(Swal)
 //     function returnDate() {
 //         let hoy = new Date()
 //         var dd = hoy.getDay()
 //         var dayString = '' + dd
 //         if (dd < 9) dayString = '0' + dd
 //         var mm = hoy.getMonth() + 1
 //         var monthString = '' + mm
 //         if (mm < 9) monthString = '0' + mm
 //         let yyyy = hoy.getFullYear()
 //         return yyyy + '-' + monthString + '-' + dayString
 //     }
 //     const onChange = () => {
 //         let rec_pagos = {
 //             amount: 0,
 //             receiptNumber: i_recibo.current.value,
 //             date: i_payDate.current.value,
 //             observation: i_observ.current.value,
 //             paymentConcepts: []
 //         }
 //         inputValues.forEach(value => {
 //             agregarDato(rec_pagos, value.ref, value.name)
 //         })
 //         rec_pagos.amount = total(rec_pagos)
 //         i_tvalue.current.value = total(rec_pagos)
 //         return rec_pagos
 //     }
 //     function actions() {
 //         if (paymentId) {
 //             editar()
 //         } else {
 //             agregar()
 //         }
 //     }
 //     function agregar() {
 //         btn_agregar.current.style.visibility = "visible";
 //         btn_cancelar.current.style.visibility = "visible";
 //         enviar(onChange())
 //     }
 //     function editar() {
 //         btn_agregar.current.style.visibility = "visible";
 //         btn_cancelar.current.style.visibility = "visible";
 //         enviarEditar(onChange(), id, paymentId)
 //     }
 //     function total(rec_pagos) {
 //         let suma = 0
 //         let suma_curs = i_curses.current.value * cant_curs.current.value
 //         let suma_camiseta = i_shirt.current.value * cant_camiseta.current.value
 //         let suma_excursion = i_excursion.current.value * cant_exc.current.value
 //         let suma_nocturna = i_nocturnal.current.value * cant_noct.current.value
 //         let suma_carnet = i_card.current.value * cant_carnet.current.value
 //         let suma_uniforme = i_uniform.current.value * cant_unif.current.value
 //         let suma_inscripcion = i_inscrip.current.value * 1
 //         let suma_actividadesEco = i_act.current.value * cant_actEco.current.value
 //         let suma_campamento = i_camp.current.value * cant_camp.current.value
 //         let suma_insignias = i_insig.current.value * cant_insig.current.value
 //         let suma_mensualidad = i_monthPay.current.value * 1
 //         let suma_otros = i_other.current.value * 1
 //         let sumaT = suma_curs +suma_camiseta + suma_excursion + suma_nocturna + suma_carnet + suma_uniforme + suma_inscripcion + suma_actividadesEco + suma_campamento + suma_insignias + suma_otros + suma_mensualidad
 //         rec_pagos.paymentConcepts.forEach(concepto => {
 //             // suma += concepto.amount
 //             suma = concepto.amount + sumaT
 //         })
 //         return sumaT
 //         // return suma
 //     }
 //     function agregarDato(pagos, input: MutableRefObject<any>, concepto: string) {
 //         let valor = Number.parseInt(input.current.value)
 //         if (valor > 0) {
 //             pagos.paymentConcepts.push({
 //                 name: concepto,
 //                 amount: valor,
 //             })
 //         }
 // }
 //     const enviar = (pagos) => {
 //         fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/users/payments/${id}`, {
 //             method: 'POST',
 //             headers: {
 //                 'Referrer-Policy': 'origin-when-cross-origin',
 //                 'Authorization': "Bearer " + localStorage.getItem("auth_token"),
 //                 'Content-Type': 'application/json',
 //                 'Access-Control-Allow-Origin': `${process.env.NEXT_PUBLIC_URL}`
 //             },
 //             body: JSON.stringify(pagos)
 //         }).then(res => {
 //             if (res.ok) {
 //                 return Promise.resolve({ message: 'Pago agregado correctamente' })
 //             } else {
 //                 return Promise.reject({ message: 'Hubo un error al intentar registrar el pago' })
 //             }
 //         }).then(data => {
 //             MySwal.fire({
 //                 icon: 'success',
 //                 title: 'Pago registrado!',
 //                 text: data.message,
 //                 confirmButtonColor: '#31B411',
 //                 confirmButtonText: "Continuar",
 //             }).then(function (isConfirm) {
 //                 if (isConfirm) {
 //                     location.reload();
 //                 }
 //             })
 //         })
 //     }
 //     const enviarEditar = (pagos, userId, paymentId) => {
 //         pagos = {...pagos, id: Number.parseInt(paymentId)}
 //         fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/users/editpayments/${userId}`, {
 //             method: 'PUT',
 //             headers: {
 //                 'Referrer-Policy': 'origin-when-cross-origin',
 //                 'Authorization': "Bearer " + localStorage.getItem("auth_token"),
 //                 'Content-Type': 'application/json',
 //                 'Access-Control-Allow-Origin': `${process.env.NEXT_PUBLIC_URL}`
 //             },
 //             body: JSON.stringify(pagos)
 //         }).then(res => {
 //             if (res.ok) {
 //                 return Promise.resolve({ message: 'Pago actualizado correctamente' })
 //             } else {
 //                 return Promise.reject({ message: 'Hubo un error al intentar registrar el pago' })
 //             }
 //         }).then(data => {
 //             MySwal.fire({
 //                 icon: 'success',
 //                 title: 'Pago actualizado!',
 //                 text: data.message,
 //                 confirmButtonColor: '#31B411',
 //                 confirmButtonText: "Continuar",
 //             }).then(function (isConfirm) {
 //                 if (isConfirm) {
 //                     location.reload();
 //                 }
 //             })
 //         })
 //     }
 //     function getUser(userId) {
 //         fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/users/${userId}`, {
 //             mode: 'cors',
 //             method: 'GET',
 //             headers: {
 //                 'Referrer-Policy': 'origin-when-cross-origin',
 //                 'Authorization': "Bearer " + localStorage.getItem("auth_token"),
 //                 'Content-Type': 'application/json',
 //                 'Access-Control-Allow-Origin': `${process.env.NEXT_PUBLIC_URL}`
 //             },
 //         }).then(res => {
 //             return res.json().then(data => {
 //                 if (res.ok) {
 //                     return Promise.resolve(data)
 //                 } else {
 //                     return Promise.reject(data)
 //                 }
 //             })
 //         }).then(data => {
 //             setName(data.data.name + ' ' + data.data.lastName)
 //         })
 //     }
 //     function getUserPayment(userId, paymentId) {
 //         fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/users/payment/${userId}`, {
 //             method: 'GET',
 //             headers: {
 //                 'Referrer-Policy': 'origin-when-cross-origin',
 //                 'Authorization': "Bearer " + localStorage.getItem("auth_token"),
 //                 'Content-Type': 'application/json',
 //                 'Access-Control-Allow-Origin': `${process.env.NEXT_PUBLIC_URL}`
 //             }
 //         }).then(res => {
 //             return res.json().then(data => {
 //                 if (res.ok) {
 //                     return Promise.resolve(data)
 //                 } else {
 //                     return Promise.reject(data)
 //                 }
 //             })
 //         }).then(data => {
 //             let payments = data.data.payments.filter((payment) => payment.id == Number.parseInt(paymentId))
 //             if (payments.length > 0) {
 //                 let payment = payments[0]
 //                 i_tvalue.current.value = payment.amount
 //                 i_recibo.current.value = payment.receiptNumber
 //                 i_observ.current.value = payment.observation
 //                 let date = new Date(payment.date)
 //                 let string = date.toISOString().split('T')[0].split('-')
 //                 i_payDate.current.value = String[0] + '/' + String[1] + '/' + String[2]  //string[0] + '-' + string[2] + '-' + string[1]
 //                 payment.paymentConcepts.forEach(concept => {
 //                     let input = getInputValue(concept.name)
 //                     if (input) {
 //                         input.current.value = concept.amount
 //                     }
 //                 })
 //             }
 //         })
 //     }
 //     function getInputValue(name: string) : MutableRefObject<any> {
 //         let input = null
 //         inputValues.forEach(value => {
 //             if (value.name === name) {
 //                 input = value.ref
 //             }
 //         })
 //         return input
 //     }
 //     function setValues() {
 //         let values = []
 //         values.push({ name: 'CURSOS', ref: i_curses })
 //         values.push({ name: 'MENSUALIDAD', ref: i_monthPay })
 //         values.push({ name: 'CAMISETA', ref: i_shirt })
 //         values.push({ name: 'EXCURSION', ref: i_excursion })
 //         values.push({ name: 'NOCTURNA', ref: i_nocturnal })
 //         values.push({ name: 'CARNE', ref: i_card })
 //         values.push({ name: 'UNIFORME', ref: i_uniform })
 //         values.push({ name: 'INSCRIPC.', ref: i_inscrip })
 //         values.push({ name: 'PLAN ADEL.', ref: i_act })
 //         values.push({ name: 'CAMPAMENTO', ref: i_camp })
 //         values.push({ name: 'INSIGNIAS', ref: i_insig })
 //         values.push({ name: 'OTROS', ref: i_other })
 //         values.push({name:'CURS',ref:cant_curs}) //c.Cursos
 //         values.push({name:'SHIRT',ref:cant_camiseta}) //c_Camiseta
 //         values.push({name:'EXC',ref:cant_exc}) //c_excursion
 //         values.push({name:'NOCT',ref:cant_noct}) //c_nocturna
 //         values.push({name:'CARD',ref:cant_carnet}) //c_carnet
 //         values.push({name:'UNIF',ref:cant_unif}) //c_uniformes
 //         values.push({name:'ActEco',ref:cant_actEco}) //c_actEco
 //         values.push({name:'CAMP',ref:cant_camp}) //c_actEco
 //         values.push({name:'INSIG',ref:cant_insig}) //
 //         setInputValues(values)
 //     }
 //     useEffect(() => {
 //         setValues()
 //         getUser(id)
 //     }, [])
 //     useEffect(() => {
 //         if (paymentId && inputValues.length > 0) {
 //             getUserPayment(id, paymentId)
 //         }
 //     }, [inputValues])
 //     return (
 //         <div>
 //             <div>
 //                 <h1 className={`${styles.text_title} p-5`}>¡Registro de pago {name}!</h1>
 //             </div>
 //             <section className={styles.contenedor}>
 //                 <div >
 //                     <p className={styles.titulo}>
 //                         <img className={styles.logo} src="/logo.png" alt="Logo 113" />
 //                     Grupo Scout 113
 //                     <br></br>
 //                         <p className={styles.subtitulo}>"Centinelas"</p>
 //                     </p>
 //                 </div>
 //                 <div className="row col-md-4" /* {`${styles.rec} form row `}*/>
 //                     <div className="col-sm-12 col-md-12 col-lg-10">
 //                         <p className={styles.desc}>
 //                             <label className={styles.label1}>Recibo N°</label>
 //                             <input placeholder="Número de recibo" ref={i_recibo} className={`${styles.inputR} form-control`} type="text" maxLength={30} />
 //                         </p>
 //                     </div>
 //                 </div>
 //                 <div className="row col-10">
 //                     <div className="col-md-6">
 //                         <p className={styles.desc}>
 //                             <label className={styles.label} >Valor total</label>
 //                             <input ref={i_tvalue} className={`${styles.inputR} form-control`} readOnly disabled type="text" maxLength={30} />
 //                         </p>
 //                     </div>
 //                     <div className="col-md-6 ">
 //                         <p className={styles.desc}>
 //                             <label className={styles.label}>Fecha</label>
 //                             <input ref={i_payDate} className={`${styles.input} form-control`} type="date" max={returnDate()} />
 //                         </p>
 //                     </div>
 //                 </div>
 //                 <div className="row col-12">
 //                     <div className="col-md-5">
 //                         <p className={styles.desc}>
 //                             <label className={styles.label}>Cursos</label>
 //                             <input placeholder="Valor" ref={i_curses} className={`${styles.input} form-control`} type="number" maxLength={30} onChange={onChange} />
 //                         </p>
 //                     </div>
 //                     <div className="col-md-3" id="cant_curs">
 //                         <p className={styles.desc}>
 //                             <label className={styles.label}>Cantidad</label>
 //                             <input placeholder="Cant" ref={cant_curs} className={`${styles.input} form-control`} type="number" maxLength={4} onChange={onChange} />
 //                         </p>
 //                     </div>
 //                     <div className="col-md-5">
 //                         <p className={styles.desc}>
 //                             <label className={styles.label}>Mensualidad</label>
 //                             <input placeholder="Valor" ref={i_monthPay} className={`${styles.input} form-control`} type="number" maxLength={30} onChange={onChange} />
 //                         </p>
 //                     </div>
 //                     <div className="col-md-3">
 //                     </div>
 //                     <div className="col-md-5">
 //                         <p className={styles.desc}>
 //                             <label className={styles.label}>Camiseta</label>
 //                             <input placeholder="Valor" ref={i_shirt} className={`${styles.input} form-control`} type="number" maxLength={30} onChange={onChange} />
 //                         </p>
 //                     </div>
 //                     <div className="col-md-3" id="cant_camiseta">
 //                         <p className={styles.desc}>
 //                             <label className={styles.label}>Cantidad</label>
 //                             <input placeholder="Cant" ref={cant_camiseta} className={`${styles.input} form-control`} type="number" maxLength={4} onChange={onChange} />
 //                         </p>
 //                     </div>
 //                 </div>
 //                 <div className="row col-12">
 //                     <div className="col-md-5">
 //                         <p className={styles.desc}>
 //                             <label className={styles.label}>Excursión</label>
 //                             <input placeholder="Valor" ref={i_excursion} className={`${styles.input} form-control`} type="number" maxLength={30} onChange={onChange} />
 //                         </p>
 //                     </div>
 //                     <div className="col-md-3" id="cant_exc">
 //                         <p className={styles.desc}>
 //                             <label className={styles.label}>Cantidad</label>
 //                             <input placeholder="Cant" ref={cant_exc} className={`${styles.input} form-control`} type="number" maxLength={4} onChange={onChange} />
 //                         </p>
 //                     </div>
 //                     <div className="col-md-5">
 //                         <p className={styles.desc}>
 //                             <label className={styles.label}>Nocturna</label>
 //                             <input placeholder="Valor" ref={i_nocturnal} className={`${styles.input} form-control`} type="number" maxLength={30} onChange={onChange} />
 //                         </p>
 //                     </div>
 //                     <div className="col-md-3" id="cant_noct">
 //                         <p className={styles.desc}>
 //                             <label className={styles.label}>Cantidad</label>
 //                             <input placeholder="Cant" ref={cant_noct} className={`${styles.input} form-control`} type="number" maxLength={4} onChange={onChange} />
 //                         </p>
 //                     </div>
 //                     <div className="col-md-5">
 //                         <p className={styles.desc}>
 //                             <label className={styles.label}>Carnet</label>
 //                             <input placeholder="Valor" ref={i_card} className={`${styles.input} form-control`} type="number" maxLength={30} onChange={onChange} />
 //                         </p>
 //                     </div>
 //                     <div className="col-md-3" id="cant_carnet">
 //                         <p className={styles.desc}>
 //                             <label className={styles.label}>Cantidad</label>
 //                             <input placeholder="Cant" ref={cant_carnet} className={`${styles.input} form-control`} type="number" maxLength={4} onChange={onChange} />
 //                         </p>
 //                     </div>
 //                 </div>
 //                 <div className="row col-12">
 //                     <div className="col-md-5">
 //                         <p className={styles.desc}>
 //                             <label className={styles.label}>Uniforme</label>
 //                             <input placeholder="Valor" ref={i_uniform} className={`${styles.input} form-control`} type="number" maxLength={30} onChange={onChange} />
 //                         </p>
 //                     </div>
 //                     <div className="col-md-3" id="cant_unif">
 //                         <p className={styles.desc}>
 //                             <label className={styles.label}>Cantidad</label>
 //                             <input placeholder="Cant" ref={cant_unif} className={`${styles.input} form-control`} type="number" maxLength={4} onChange={onChange} />
 //                         </p>
 //                     </div>
 //                     <div className="col-md-5">
 //                         <p className={styles.desc} >
 //                             <label className={styles.label}>Inscripción</label>
 //                             <input placeholder="Valor" ref={i_inscrip} className={`${styles.input} form-control`} type="number" maxLength={30} onChange={onChange} />
 //                         </p>
 //                     </div>
 //                     <div className="col-md-3">
 //                     </div>
 //                     <div className="col-md-5">
 //                         <p className={styles.desc}>
 //                             <label className={styles.label}>Act. Eco</label>
 //                             <input placeholder="Valor" ref={i_act} className={`${styles.input} form-control`} type="number" maxLength={30} onChange={onChange} />
 //                         </p>
 //                     </div>
 //                     <div className="col-md-3" id="cant_ActEco">
 //                         <p className={styles.desc}>
 //                             <label className={styles.label}>Cantidad</label>
 //                             <input placeholder="Cant" ref={cant_actEco} className={`${styles.input} form-control`} type="number" maxLength={4} onChange={onChange} />
 //                         </p>
 //                     </div>
 //                 </div>
 //                 <div className="row col-12">
 //                     <div className="col-md-5">
 //                         <p className={styles.desc}>
 //                             <label className={styles.label}>Campamento</label>
 //                             <input placeholder="Valor" ref={i_camp} className={`${styles.input} form-control`} type="number" maxLength={30} onChange={onChange} />
 //                         </p>
 //                     </div>
 //                     <div className="col-md-3" id="cant_Camp">
 //                         <p className={styles.desc}>
 //                             <label className={styles.label}>Cantidad</label>
 //                             <input placeholder="Cant" ref={cant_camp} className={`${styles.input} form-control`} type="number" maxLength={4} onChange={onChange} />
 //                         </p>
 //                     </div>
 //                     <div className="col-md-5">
 //                         <p className={styles.desc}>
 //                             <label className={styles.label}>Insignias</label>
 //                             <input placeholder="Valor" ref={i_insig} className={`${styles.input} form-control`} type="number" maxLength={30} onChange={onChange} />
 //                         </p>
 //                     </div>
 //                     <div className="col-md-3" id="cant_Insig">
 //                         <p className={styles.desc}>
 //                             <label className={styles.label}>Cantidad</label>
 //                             <input placeholder="Cant" ref={cant_insig} className={`${styles.input} form-control`} type="number" maxLength={4} onChange={onChange} />
 //                         </p>
 //                     </div>
 //                     <div className="col-md-8">
 //                         <p className={styles.desc}>
 //                             <label className={styles.label}>Otros</label>
 //                             <input placeholder="Valor" ref={i_other} className={`${styles.input} form-control`} type="number" maxLength={30} onChange={onChange} />
 //                         </p>
 //                     </div>
 //                 </div>
 //                 <div className="row col-12">
 //                     <div className="col-sm-12 col-md-8 col-lg-8">
 //                         <p className={styles.desc}>
 //                             <label className={styles.label}>Observaciones</label>
 //                             <input placeholder="Ingrese una observación de ser necesario..." ref={i_observ} className={`${styles.inputObser} input-group`} type="text" />
 //                         </p>
 //                     </div>
 //                 </div>
 //                 <div className={styles.contenedor_btns}>
 //                     <button ref={btn_agregar} className={`btn btn-success ${styles.botones}`} onClick={actions}>{paymentId ? 'Actualizar Pago' : 'Agregar Pago'}</button>
 //                     <button ref={btn_cancelar} className={`btn btn-danger ${styles.botones}`} onClick={() => router.push('/dashboard/tesorero')}>{paymentId ?  'Cancelar' :'Cancelar Pago'}</button>
 //                 </div>
 //             </section>
 //         </div>
 //     )
 // }


/***/ })

};
;