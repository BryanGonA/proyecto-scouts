(() => {
var exports = {};
exports.id = 5405;
exports.ids = [5405];
exports.modules = {

/***/ 5168:
/***/ ((module) => {

// Exports
module.exports = {
	"portada": "Presentacion_portada__fhFRX",
	"elementos_portada": "Presentacion_elementos_portada__PHGnZ",
	"titulo": "Presentacion_titulo__eNsrN",
	"subtitulo": "Presentacion_subtitulo__4R6p9",
	"boton_portada": "Presentacion_boton_portada__neLr_",
	"rectangulo": "Presentacion_rectangulo__I2NcB"
};


/***/ }),

/***/ 7776:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-cookie"
var external_react_cookie_ = __webpack_require__(5515);
;// CONCATENATED MODULE: ./components/inicio/InicioAnimacion.tsx



function Inicio({ visited  }) {
    const [cookies, setCookie] = (0,external_react_cookie_.useCookies)([
        "visited"
    ]);
    const ole1 = (0,external_react_.useRef)(null);
    const principal = (0,external_react_.useRef)(null);
    const ole2 = (0,external_react_.useRef)(null);
    const elementos = (0,external_react_.useRef)(null);
    const onClick = ()=>{
        ole1.current.className = "animacion_ola animacion_prueba3";
        ole2.current.className = "animacion_olas animacion_prueba3";
        elementos.current.style.display = "none";
        setTimeout(()=>{
            document.body.className = "";
            principal.current.style.display = "none";
            setCookie("visited", "true", {
                path: "/"
            });
        }, 700);
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: visited === "true" ? null : /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            id: "Principal",
            className: "animacion_fondo_inicio",
            ref: principal,
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "animacion_fondo2",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "animacion_ola",
                            id: "ole2",
                            ref: ole1,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                viewBox: "0 0 500 150",
                                preserveAspectRatio: "none",
                                className: "animacion_ola2",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                    d: "M-10.61,120.69 C295.26,216.41 251.24,33.84 546.95,64.44 L500.00,0.00 L0.00,0.00 Z",
                                    className: "animacion_ola3"
                                })
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "animacion_olas",
                            id: "ole2",
                            ref: ole2,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                    viewBox: "0 0 500 150",
                                    preserveAspectRatio: "none",
                                    className: "animacion_olas2",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                        d: "M-10.61,120.69 C295.26,216.41 251.24,33.84 546.95,64.44 L500.00,0.00 L0.00,0.00 Z",
                                        className: "animacion_olas3"
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "animacion_fondo_inicio",
                                    ref: elementos,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            className: "animacion_text animacion_fondo_texto",
                                            children: "Grupo Scout Centinelas 113 - Cali"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            className: "animacion_text2 animacion_fondo_texto2",
                                            children: "Scout A.C.E"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "animacion_foto_logo",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    src: "/img/pa\xf1oleta.png",
                                                    alt: "logo1"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    src: "/img/113.png",
                                                    alt: "logo1"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    src: "/img/ACE.png",
                                                    alt: "logo1"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                    className: "animacion_rectangle",
                                                    onClick: onClick,
                                                    children: "\xa1Con\xf3cenos!"
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx("body", {
                        className: "scroll"
                    })
                })
            ]
        })
    });
}

// EXTERNAL MODULE: ./styles/inicio/Presentacion.module.scss
var Presentacion_module = __webpack_require__(5168);
var Presentacion_module_default = /*#__PURE__*/__webpack_require__.n(Presentacion_module);
;// CONCATENATED MODULE: ./components/inicio/Presentacion.tsx


function presentacion() {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (Presentacion_module_default()).portada,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: (Presentacion_module_default()).elementos_portada,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (Presentacion_module_default()).titulo,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: "Grupo Scout Centinelas 113 - Cali"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (Presentacion_module_default()).subtitulo,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: "Scout A.C.E"
                    })
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./components/inicio/Container.tsx

function Container({ children , imagen  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "contenedor-padding ",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "row contenedor-paddingm-5 pb-5 backgroun_container justify-content-center contenedor_metodo_scout",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                    src: imagen,
                    alt: "imagen",
                    className: "antorcha_1"
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "text-center mb-5",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                            className: "texto_titulo",
                            children: "M\xe9todo Scout"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: "texto_descripcion",
                            children: "Es un sistema de autoeducaci\xf3n, progresivo y personalizado, complementado a la familia y el colegio, a partir de la interacci\xf3n de varios elementos."
                        })
                    ]
                }),
                children,
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "mt-5 hidden-sm-down",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        src: imagen,
                        alt: "imagen",
                        className: "antorcha_2"
                    })
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./components/inicio/Card.tsx

function Header({ titulo , descripcion , imagen , ultimo  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: ultimo ? "col-sm-10 col-lg-8 col-xl-8 mx-2 my-2 p-0 fondo_card w-100 card_final" : "col-xl-4 col-lg-8 col-sm-10 mx-2 my-2 p-0 fondo_card w-100",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "barra",
                children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                    viewBox: "0 0 500 150",
                    preserveAspectRatio: "none",
                    className: "fondo",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M-6.49,81.41 C151.52,160.36 188.20,33.05 501.97,41.94 L501.97,-31.08 L0.00,0.00 Z",
                        className: "curva"
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "barra_2 ",
                children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                    viewBox: "0 0 500 150",
                    preserveAspectRatio: "none",
                    className: "fondo_2",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M-6.49,81.41 C151.52,160.36 188.20,33.05 501.97,41.94 L501.97,-31.08 L0.00,0.00 Z",
                        className: "curva_2"
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "mb-5",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "text-center",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "card-title texto_titulo",
                                children: titulo
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "limite_descripcion",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "limite_parrafo texto_descripcion-card",
                                children: descripcion
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "text-right imagen-card",
                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                    src: imagen,
                    alt: "imagen",
                    width: "15%"
                })
            })
        ]
    });
}

;// CONCATENATED MODULE: external "cookie"
const external_cookie_namespaceObject = require("cookie");
var external_cookie_default = /*#__PURE__*/__webpack_require__.n(external_cookie_namespaceObject);
;// CONCATENATED MODULE: ./lib/parseCookies.js

function parseCookies(req) {
    return external_cookie_default().parse(req ? req.headers.cookie || "" : document.cookie);
}

;// CONCATENATED MODULE: ./pages/index.tsx






const getServerSideProps = async (context)=>{
    const cookies = parseCookies(context.req);
    return {
        props: {
            visited: cookies.visited ? cookies.visited : "false"
        }
    };
};
/*
// La vista puede implementar alguno de estos dos metodos, para hacer SSG o SSR, no se deben usar los dos
// Si la vista no implementa ninguna, se considera que es SSG sin alimentación de datos

// La vista actua como estatica (Static Side Generation), obtiene la información al momento de compilar
export const getStaticProps: GetStaticProps<> = async (context) => {
  //Se hace fetch (por default en metodo GET) a la api
  const res = await fetch(process.env.API_URL + '/api/endpoint/')
  const data = await res.json()
  return {
    props: {
      //Se pasan los datos en alguna variable como propiedad, a la vista o a los componentes
      datos: data
    },
  }
}

// Hace Server Side Render, obtiene la información al momento de consultar la vista
export const getServerSideProps: GetServerSideProps<> = async (context) => {
  const res = await fetch(process.env.API_URL + '/api/endpoint/')
  const data = await res.json()
  return {
    props: {
      datos: data
    },
  }
} 
*/ // Corresponde al contenido de la vista (Recibe las propiedades, si pasaramos una propiedad llamada datos sería: { query, datos}: Props)
const HomePage = ({ visited  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Inicio, {
                visited: visited
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(presentacion, {}),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Container, {
                imagen: "/img/antorcha.svg",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Header, {
                        titulo: "Promesa y ley",
                        descripcion: "La educaci\xf3n en valores expresados en una promesa y ley a los que se adhiere de manera voluntaria.",
                        imagen: "/img/jurar.png"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Header, {
                        titulo: "Aprender haciendo",
                        descripcion: "La educaci\xf3n activa a trav\xe9s del aprender haciendo, el aprender jugando y el aprender por medio del servicio.",
                        imagen: "/img/equipo.png"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Header, {
                        titulo: "Vida en peque\xf1os grupos",
                        descripcion: "La pertenencia a peque\xf1os grupos, con el acompa\xf1amiento responsable de adultos.",
                        imagen: "/img/trabajo-en-equipo.png"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Header, {
                        titulo: "Adulto no interferente",
                        descripcion: "La participaci\xf3n indirecta del adulto, en forma estimulante y no interferente, con la oportunidad de ayudar a los muchachos en la organizaci\xf3n y direcci\xf3n de actividades y en la toma de decisiones.",
                        imagen: "/img/familia.png"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Header, {
                        titulo: "Vida al aire libre",
                        descripcion: "Programas progresivos, atrayentes y estimulantes, basados en los intereses de los participantes compuestos por un marco simb\xf3lico sugerente y un sistema progresivo de objetivos y actividades educativas variadas, incluyendo juegos, habilidades \xfatiles y servicios a la comunidad, que ocurren en gran parte al aire libre en contacto con la naturaleza.",
                        imagen: "/img/leisure.png",
                        ultimo: true
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const pages = (HomePage);


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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(7776));
module.exports = __webpack_exports__;

})();