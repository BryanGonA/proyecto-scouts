exports.id = 6907;
exports.ids = [6907];
exports.modules = {

/***/ 1672:
/***/ ((module) => {

// Exports
module.exports = {
	"tarjeta_fondo": "AddPerson_tarjeta_fondo__ptfkl",
	"desc": "AddPerson_desc__sfJ5N",
	"input": "AddPerson_input__0oSEG",
	"input2": "AddPerson_input2__HBdIF",
	"boton": "AddPerson_boton__ZxDoU",
	"letra": "AddPerson_letra__ZtJYB",
	"titulo": "AddPerson_titulo__RXuGe",
	"image": "AddPerson_image__kZj_B",
	"text": "AddPerson_text__IKzp4",
	"div_file": "AddPerson_div_file___14u0",
	"btn_upload": "AddPerson_btn_upload__XyQ6N"
};


/***/ }),

/***/ 6907:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ActualizarPersonal)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var sweetalert2_react_content__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3810);
/* harmony import */ var sweetalert2_react_content__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2_react_content__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_dashboard_administrator_AddPerson_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1672);
/* harmony import */ var _styles_dashboard_administrator_AddPerson_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_dashboard_administrator_AddPerson_module_scss__WEBPACK_IMPORTED_MODULE_3__);




function ActualizarPersonal({ idPersonal , edit  }) {
    const { 0: values , 1: setValues  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const photo = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const image = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const method = ()=>{
        if (photo.current.files[0]) {
            var filesize = photo.current.files[0].size;
            if (filesize > 10000000) {
                alert("El archivo no debe superar los 10MB");
                photo.current.value = "";
                photo.current.files[0].name = "";
                return;
            }
            var file = photo.current.files[0];
            var reader = new FileReader();
            reader.onload = function(e) {
                image.current.src = e.target.result;
            };
            reader.readAsDataURL(file);
            setValues({
                ...values,
                photo: file
            });
        }
    };
    const Swal = __webpack_require__(271);
    const MySwal = sweetalert2_react_content__WEBPACK_IMPORTED_MODULE_2___default()(Swal);
    const btnName = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const btnApellido = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const btnCorreo = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const btnCedula = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const btnCelular = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const btnDireccion = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const btnNivel = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const btnCargo = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const btnRama = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const btnTipoSangre = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const btnRh = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const btnEps = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const btnSitio = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const agregar = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const cancelar = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const { 0: Datos , 1: setDatos  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        name: "",
        lastName: "",
        email: "",
        document: "",
        homeAddress: "",
        attentionSite: ""
    });
    const { 0: Personal , 1: setPersonal  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        phone: "",
        level: "",
        charge: "",
        bloodType: "",
        eps: "",
        rh: ""
    });
    const { 0: Rama , 1: setRama  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        nameBranch: ""
    });
    const { 0: loading , 1: setLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (idPersonal) {
            obtenerid(idPersonal);
            btnName.current.readOnly = true;
            btnApellido.current.readOnly = true;
            btnCorreo.current.readOnly = true;
            btnCedula.current.readOnly = true;
            btnCelular.current.readOnly = true;
            btnDireccion.current.readOnly = true;
            btnNivel.current.readOnly = true;
            btnCargo.current.readOnly = true;
            btnRama.current.readOnly = true;
            btnTipoSangre.current.readOnly = true;
            btnRh.current.readOnly = true;
            btnEps.current.readOnly = true;
            btnSitio.current.readOnly = true;
            agregar.current.style.visibility = "hidden";
            cancelar.current.style.visibility = "hidden";
            if (edit) {
                actualizar();
                btnName.current.readOnly = false;
                btnApellido.current.readOnly = false;
                btnCorreo.current.readOnly = false;
                btnCedula.current.readOnly = false;
                btnCelular.current.readOnly = false;
                btnDireccion.current.readOnly = false;
                btnEps.current.readOnly = false;
                btnSitio.current.readOnly = false;
                agregar.current.style.visibility = "visible";
                cancelar.current.style.visibility = "visible";
                btnNivel.current.disabled = false;
                btnCargo.current.disabled = false;
                btnRama.current.disabled = false;
                btnTipoSangre.current.disabled = false;
                btnRh.current.disabled = false;
                photo.current.disabled = false;
            }
        }
    }, []);
    const obtenerid = (userid)=>{
        fetch(`${"http://localhost:4000"}/api/users/${userid}`, {
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
            setDatos(data.data);
            setPersonal(data.data.personalDetails);
            setRama(data.data.branches);
            setLoading(false);
        }).catch((error)=>{});
    };
    function actualizar() {
        let account = {
            name: btnName.current.value,
            lastName: btnApellido.current.value,
            email: btnCorreo.current.value,
            documentType: "CC",
            document: btnCedula.current.value,
            birthDate: new Date(),
            homeAddress: btnDireccion.current.value,
            attentionSite: btnSitio.current.value,
            personalDetails: {
                phone: btnCelular.current.value,
                level: btnNivel.current.value,
                charge: btnCargo.current.value,
                bloodType: btnTipoSangre.current.value,
                rh: btnRh.current.value,
                eps: btnEps.current.value
            },
            branches: {
                nameBranch: btnRama.current.value
            }
        };
        actualizarid(account, idPersonal);
    }
    const actualizarid = (account, userid)=>{
        fetch(`${"http://localhost:4000"}/api/users/${userid}`, {
            mode: "cors",
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
                    window.location.href = "/dashboard/jefe-grupo/personal/";
                }
            });
        }).catch((error)=>{});
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: `${(_styles_dashboard_administrator_AddPerson_module_scss__WEBPACK_IMPORTED_MODULE_3___default().titulo)} p-5`,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                        children: "Agregar personal administrativo Grupo Scout Centinelas 113"
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "container",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_styles_dashboard_administrator_AddPerson_module_scss__WEBPACK_IMPORTED_MODULE_3___default().tarjeta_fondo),
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: `container-fluid ${(_styles_dashboard_administrator_AddPerson_module_scss__WEBPACK_IMPORTED_MODULE_3___default().desc)}`,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    type: "button",
                                    className: "btn btn-secondary",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        className: `${(_styles_dashboard_administrator_AddPerson_module_scss__WEBPACK_IMPORTED_MODULE_3___default().letra)}`,
                                        href: `/dashboard/jefe-grupo/personal/`,
                                        children: "Regresar"
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "text-center",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: (_styles_dashboard_administrator_AddPerson_module_scss__WEBPACK_IMPORTED_MODULE_3___default().photo),
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                className: (_styles_dashboard_administrator_AddPerson_module_scss__WEBPACK_IMPORTED_MODULE_3___default().image),
                                                src: "/img/profile-picture.png",
                                                ref: image
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "row",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: (_styles_dashboard_administrator_AddPerson_module_scss__WEBPACK_IMPORTED_MODULE_3___default().div_file),
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        className: (_styles_dashboard_administrator_AddPerson_module_scss__WEBPACK_IMPORTED_MODULE_3___default().text),
                                                        children: "*Seleccionar foto"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                        type: "file",
                                                        disabled: true,
                                                        id: "btn_upload",
                                                        accept: "image/jpeg,image/png",
                                                        className: (_styles_dashboard_administrator_AddPerson_module_scss__WEBPACK_IMPORTED_MODULE_3___default().btn_upload),
                                                        ref: photo,
                                                        onChange: method
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
                                            className: "col-xs-6 col-md-4",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                children: "Nombre:"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "col-xs-6 col-md-4",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                children: "Apellido:"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "col-xs-6 col-md-4",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                children: "Correo electr\xf3nico:"
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "row",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "col-xs-6 col-md-4",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                className: (_styles_dashboard_administrator_AddPerson_module_scss__WEBPACK_IMPORTED_MODULE_3___default().input),
                                                ref: btnName,
                                                defaultValue: Datos.name,
                                                onChange: (e)=>{
                                                    e.target.value = e.target.value.toUpperCase();
                                                }
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "col-xs-6 col-md-4",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                className: (_styles_dashboard_administrator_AddPerson_module_scss__WEBPACK_IMPORTED_MODULE_3___default().input),
                                                ref: btnApellido,
                                                defaultValue: Datos.lastName,
                                                onChange: (e)=>{
                                                    e.target.value = e.target.value.toUpperCase();
                                                }
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "col-xs-6 col-md-4",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                className: (_styles_dashboard_administrator_AddPerson_module_scss__WEBPACK_IMPORTED_MODULE_3___default().input),
                                                ref: btnCorreo,
                                                defaultValue: Datos.email,
                                                onChange: (e)=>{
                                                    e.target.value = e.target.value.toUpperCase();
                                                }
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "row",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "col-xs-6 col-md-4",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                children: "Confirmar correo:"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "col-xs-6 col-md-4",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                children: "C\xe9dula:"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "col-xs-6 col-md-4",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                children: "Tel\xe9fono:"
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "row",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "col-xs-6 col-md-4",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                className: (_styles_dashboard_administrator_AddPerson_module_scss__WEBPACK_IMPORTED_MODULE_3___default().input),
                                                defaultValue: Datos.email,
                                                onChange: (e)=>{
                                                    e.target.value = e.target.value.toUpperCase();
                                                }
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "col-xs-6 col-md-4",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                className: (_styles_dashboard_administrator_AddPerson_module_scss__WEBPACK_IMPORTED_MODULE_3___default().input),
                                                ref: btnCedula,
                                                defaultValue: Datos.document,
                                                onChange: (e)=>{
                                                    e.target.value = e.target.value.toUpperCase();
                                                }
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "col-xs-6 col-md-4",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                className: (_styles_dashboard_administrator_AddPerson_module_scss__WEBPACK_IMPORTED_MODULE_3___default().input),
                                                ref: btnCelular,
                                                defaultValue: Personal.phone,
                                                onChange: (e)=>{
                                                    e.target.value = e.target.value.toUpperCase();
                                                }
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "row",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "col-xs-6 col-md-4",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                children: "Direcci\xf3n:"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "col-xs-6 col-md-4",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                children: "Nivel adistramiento:"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "col-xs-6 col-md-4",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                children: "Cargo:"
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "row",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "col-xs-6 col-md-4",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                className: (_styles_dashboard_administrator_AddPerson_module_scss__WEBPACK_IMPORTED_MODULE_3___default().input),
                                                ref: btnDireccion,
                                                defaultValue: Datos.homeAddress,
                                                onChange: (e)=>{
                                                    e.target.value = e.target.value.toUpperCase();
                                                }
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "col-xs-6 col-md-4",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                                                className: (_styles_dashboard_administrator_AddPerson_module_scss__WEBPACK_IMPORTED_MODULE_3___default().input2),
                                                disabled: true,
                                                ref: btnNivel,
                                                defaultValue: Personal.level,
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                        value: "0",
                                                        children: "NIVEL 0"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                        value: "1",
                                                        children: "NIVEL 1"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                        value: "2",
                                                        children: "NIVEL 2"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                        value: "3",
                                                        children: "NIVEL 3"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                        value: "4",
                                                        children: "NIVEL 4"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                        value: "5",
                                                        children: "NIVEL 5"
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "col-xs-6 col-md-4",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                                                className: (_styles_dashboard_administrator_AddPerson_module_scss__WEBPACK_IMPORTED_MODULE_3___default().input2),
                                                disabled: true,
                                                ref: btnCargo,
                                                defaultValue: Personal.charge,
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                        value: "SCOUT",
                                                        children: "SCOUT"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                        value: "TESORERA",
                                                        children: "TESORERA"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                        value: "JEFE DE RAMA",
                                                        children: "JEFE DE RAMA"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                        value: "JEFE DE GRUPO",
                                                        children: "JEFE DE GRUPO"
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
                                            className: "col-xs-6 col-md-4",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                children: "Rama:"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "col-xs-6 col-md-4",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                children: "Tipo de sangre"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "col-xs-6 col-md-4",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                children: "RH:"
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "row",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "col-xs-6 col-md-4",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                                                className: (_styles_dashboard_administrator_AddPerson_module_scss__WEBPACK_IMPORTED_MODULE_3___default().input2),
                                                disabled: true,
                                                ref: btnRama,
                                                defaultValue: Rama.nameBranch,
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                        value: "TEMPORAL",
                                                        children: "TEMPORAL"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                        value: "CACHORROS",
                                                        children: "CACHORROS"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                        value: "LOBATOS",
                                                        children: "LOBATOS"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                        value: "WEBELOS",
                                                        children: "WEBELOS"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                        value: "SCOUTS",
                                                        children: "SCOUTS"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                        value: "ROVERS",
                                                        children: "ROVERS"
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "col-xs-6 col-md-4",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                                                className: (_styles_dashboard_administrator_AddPerson_module_scss__WEBPACK_IMPORTED_MODULE_3___default().input2),
                                                disabled: true,
                                                ref: btnTipoSangre,
                                                defaultValue: Personal.bloodType,
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
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "col-xs-6 col-md-4",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                                                className: (_styles_dashboard_administrator_AddPerson_module_scss__WEBPACK_IMPORTED_MODULE_3___default().input2),
                                                disabled: true,
                                                ref: btnRh,
                                                defaultValue: Personal.rh,
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
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "row",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "col-xs-6 col-md-4",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                children: "EPS:"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "col-xs-6 col-md-4",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                children: "Sitio de atenci\xf3n:"
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "row",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "col-xs-6 col-md-4",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                className: (_styles_dashboard_administrator_AddPerson_module_scss__WEBPACK_IMPORTED_MODULE_3___default().input),
                                                ref: btnEps,
                                                defaultValue: Personal.eps,
                                                onChange: (e)=>{
                                                    e.target.value = e.target.value.toUpperCase();
                                                }
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "col-xs-6 col-md-4",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                className: (_styles_dashboard_administrator_AddPerson_module_scss__WEBPACK_IMPORTED_MODULE_3___default().input),
                                                ref: btnSitio,
                                                defaultValue: Datos.attentionSite,
                                                onChange: (e)=>{
                                                    e.target.value = e.target.value.toUpperCase();
                                                }
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: (_styles_dashboard_administrator_AddPerson_module_scss__WEBPACK_IMPORTED_MODULE_3___default().boton),
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                            type: "button",
                                            className: "btn btn-success",
                                            onClick: actualizar,
                                            ref: agregar,
                                            children: "Actualizar datos"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                            type: "button",
                                            className: "btn btn-danger",
                                            ref: cancelar,
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                className: `${(_styles_dashboard_administrator_AddPerson_module_scss__WEBPACK_IMPORTED_MODULE_3___default().letra)}`,
                                                href: `/dashboard/jefe-grupo/personal/`,
                                                children: "Cancelar registro"
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                })
            })
        ]
    });
}


/***/ })

};
;