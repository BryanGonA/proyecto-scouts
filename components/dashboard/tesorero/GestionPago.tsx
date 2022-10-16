import styles from "~/styles/dashboard/tesorero/Agregar.module.scss";
import { MutableRefObject, useEffect, useRef, useState } from "react";
import withReactContent from 'sweetalert2-react-content'
import { useRouter } from "next/router";

export default function GestionPagos({ id, paymentId }: any) {

    const router = useRouter()

    const i_tvalue = useRef(null)
    const i_recibo = useRef(null)
    const i_payDate = useRef(null)
    const i_curses = useRef(null)
    const i_monthPay = useRef(null)
    const i_shirt = useRef(null)
    const i_excursion = useRef(null)
    const i_nocturnal = useRef(null)
    const i_card = useRef(null)
    const i_uniform = useRef(null)
    const i_inscrip = useRef(null)
    const i_act = useRef(null)
    const i_camp = useRef(null)
    const i_insig = useRef(null)
    const i_other = useRef(null)
    const i_observ = useRef(null)

    const btn_agregar = useRef(null)
    const btn_cancelar = useRef(null)

    const [name, setName] = useState('')

    const [inputValues, setInputValues] = useState([])

    const Swal = require('sweetalert2')
    const MySwal = withReactContent(Swal)


    function returnDate() {
        let hoy = new Date()
        var dd = hoy.getDate()
        var dayString = '' + dd
        if (dd < 9) dayString = '0' + dd
        var mm = hoy.getMonth() + 1
        var monthString = '' + mm
        if (mm < 9) monthString = '0' + mm
        let yyyy = hoy.getFullYear()
        return yyyy + '-' + monthString + '-' + dayString
    }


    const onChange = () => {
        let rec_pagos = {
            amount: 0,
            receiptNumber: i_recibo.current.value,
            date: i_payDate.current.value,
            observation: i_observ.current.value,
            paymentConcepts: []
        }
        inputValues.forEach(value => {
            agregarDato(rec_pagos, value.ref, value.name)
        })

        rec_pagos.amount = total(rec_pagos)

        i_tvalue.current.value = total(rec_pagos)
        return rec_pagos
    }

    function actions() {
        if (paymentId) {
            editar()
        } else {
            agregar()
        }
    }

    function agregar() {
        btn_agregar.current.style.visibility = "visible";
        btn_cancelar.current.style.visibility = "visible";
        enviar(onChange())
    }

    function editar() {
        btn_agregar.current.style.visibility = "visible";
        btn_cancelar.current.style.visibility = "visible";
        enviarEditar(onChange(), id, paymentId)
    }

    function total(rec_pagos) {
        let suma = 0
        rec_pagos.paymentConcepts.forEach(concepto => {
            suma += concepto.amount
        })

        return suma
    }

    function agregarDato(pagos, input: MutableRefObject<any>, concepto: string) {
        let valor = Number.parseInt(input.current.value)

        if (valor > 0) {
            pagos.paymentConcepts.push({
                name: concepto,
                amount: valor,
            })
        }

    }


    const enviar = (pagos) => {
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/users/payments/${id}`, {
            method: 'POST',
            headers: {
                'Referrer-Policy': 'origin-when-cross-origin',
                'Authorization': "Bearer " + localStorage.getItem("auth_token"),
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': `${process.env.NEXT_PUBLIC_URL}`
            },
            body: JSON.stringify(pagos)
        }).then(res => {
            if (res.ok) {
                return Promise.resolve({ message: 'Pago agregado correctamente' })
            } else {
                return Promise.reject({ message: 'Hubo un error al intentar registrar el pago' })
            }
        }).then(data => {
            MySwal.fire({
                icon: 'success',
                title: 'Pago registrado!',
                text: data.message,
                confirmButtonColor: '#31B411',
                confirmButtonText: "Continuar",

            }).then(function (isConfirm) {
                if (isConfirm) {
                    location.reload();
                }
            })

        })
    }

    const enviarEditar = (pagos, userId, paymentId) => {
        pagos = {...pagos, id: Number.parseInt(paymentId)}
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/users/editpayments/${userId}`, {
            method: 'PUT',
            headers: {
                'Referrer-Policy': 'origin-when-cross-origin',
                'Authorization': "Bearer " + localStorage.getItem("auth_token"),
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': `${process.env.NEXT_PUBLIC_URL}`
            },
            body: JSON.stringify(pagos)
        }).then(res => {
            if (res.ok) {
                return Promise.resolve({ message: 'Pago actualizado correctamente' })
            } else {
                return Promise.reject({ message: 'Hubo un error al intentar registrar el pago' })
            }
        }).then(data => {
            MySwal.fire({
                icon: 'success',
                title: 'Pago actualizado!',
                text: data.message,
                confirmButtonColor: '#31B411',
                confirmButtonText: "Continuar",

            }).then(function (isConfirm) {
                if (isConfirm) {
                    location.reload();
                }
            })

        })
    }

    function getUser(userId) {
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/users/${userId}`, {
            mode: 'cors',
            method: 'GET',
            headers: {
                'Referrer-Policy': 'origin-when-cross-origin',
                'Authorization': "Bearer " + localStorage.getItem("auth_token"),
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': `${process.env.NEXT_PUBLIC_URL}`
            },
        }).then(res => {
            return res.json().then(data => {
                if (res.ok) {
                    return Promise.resolve(data)
                } else {
                    return Promise.reject(data)
                }
            })
        }).then(data => {
            setName(data.data.name + ' ' + data.data.lastName)
        })

    }

    function getUserPayment(userId, paymentId) {
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/users/payment/${userId}`, {
            method: 'GET',
            headers: {
                'Referrer-Policy': 'origin-when-cross-origin',
                'Authorization': "Bearer " + localStorage.getItem("auth_token"),
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': `${process.env.NEXT_PUBLIC_URL}`
            }
        }).then(res => {
            return res.json().then(data => {
                if (res.ok) {
                    return Promise.resolve(data)
                } else {
                    return Promise.reject(data)
                }
            })
        }).then(data => {
            let payments = data.data.payments.filter((payment) => payment.id == Number.parseInt(paymentId))
            if (payments.length > 0) {
                let payment = payments[0]
                i_tvalue.current.value = payment.amount
                i_recibo.current.value = payment.receiptNumber
                i_observ.current.value = payment.observation
                let date = new Date(payment.date)
                let string = date.toISOString().split('T')[0].split('-')
                i_payDate.current.value = string[0] + '-' + string[2] + '-' + string[1]
                payment.paymentConcepts.forEach(concept => {
                    let input = getInputValue(concept.name)
                    if (input) {
                        input.current.value = concept.amount
                    }
                })
            }
        })
    }

    function getInputValue(name: string) : MutableRefObject<any> {
        let input = null
        inputValues.forEach(value => {
            if (value.name === name) {
                input = value.ref
            }
        })
        return input
    }

    function setValues() {
        let values = []
        values.push({ name: 'CURSOS', ref: i_curses })
        values.push({ name: 'MENSUALIDAD', ref: i_monthPay })
        values.push({ name: 'CAMISETA', ref: i_shirt })
        values.push({ name: 'EXCURSION', ref: i_excursion })
        values.push({ name: 'NOCTURNA', ref: i_nocturnal })
        values.push({ name: 'CARNE', ref: i_card })
        values.push({ name: 'UNIFORME', ref: i_uniform })
        values.push({ name: 'INSCRIPC.', ref: i_inscrip })
        values.push({ name: 'PLAN ADEL.', ref: i_act })
        values.push({ name: 'CAMPAMENTO', ref: i_camp })
        values.push({ name: 'INSIGNIAS', ref: i_insig })
        values.push({ name: 'OTROS', ref: i_other })
        setInputValues(values)
    }

    useEffect(() => {
        setValues()
        getUser(id)

    }, [])

    useEffect(() => {
        if (paymentId && inputValues.length > 0) {
            getUserPayment(id, paymentId)
        }
    }, [inputValues])

    return (
        <div>
            <div>
                <h1 className={`${styles.text_title} p-5`}>¡Registro de pago {name}!</h1>
            </div>
            <section className={styles.contenedor}>
                <div >
                    <p className={styles.titulo}>
                        <img className={styles.logo} src="/logo.png" alt="Logo 113" />
                    Grupo Scout 113
                    <br></br>
                        <p className={styles.subtitulo}>"Centinelas"</p>
                    </p>

                </div>

                <div className={`${styles.rec} form row `}>
                    <div className="col-sm-12 col-md-10 col-lg-10">
                        <p className={styles.desc}>
                            <label className={styles.label1}>Recibo N°</label>
                            <input placeholder="Número de recibo" ref={i_recibo} className={`${styles.inputR} form-control`} type="text" maxLength={30} />
                        </p>
                    </div>
                </div>
                <div className="row col-12">
                    <div className="col-sm-12 col-md-6 col-lg-6">
                        <p className={styles.desc}>
                            <label className={styles.label} >Valor total</label>
                            <input ref={i_tvalue} className={`${styles.inputR} form-control`} readOnly disabled type="text" maxLength={30} />
                        </p>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6">
                        <p className={styles.desc}>
                            <label className={styles.label}>Fecha</label>
                            <input ref={i_payDate} className={`${styles.input} form-control`} type="date" max={returnDate()} />
                        </p>
                    </div>
                </div>
                <div className="row col-12">
                    <div className="col-lg-4">
                        <p className={styles.desc}>
                            <label className={styles.label}>Cursos</label>
                            <input placeholder="Valor" ref={i_curses} className={`${styles.input} form-control`} type="number" maxLength={30} onChange={onChange} />
                        </p>
                    </div>
                    <div className="col-lg-4">
                        <p className={styles.desc}>
                            <label className={styles.label}>Mensualidad</label>
                            <input placeholder="Valor" ref={i_monthPay} className={`${styles.input} form-control`} type="number" maxLength={30} onChange={onChange} />
                        </p>
                    </div>
                    <div className="col-lg-4">
                        <p className={styles.desc}>
                            <label className={styles.label}>Camiseta</label>
                            <input placeholder="Valor" ref={i_shirt} className={`${styles.input} form-control`} type="number" maxLength={30} onChange={onChange} />
                        </p>
                    </div>
                </div>
                <div className="row col-12">
                    <div className="col-lg-4">
                        <p className={styles.desc}>
                            <label className={styles.label}>Excursión</label>
                            <input placeholder="Valor" ref={i_excursion} className={`${styles.input} form-control`} type="number" maxLength={30} onChange={onChange} />
                        </p>
                    </div>
                    <div className="col-lg-4">
                        <p className={styles.desc}>
                            <label className={styles.label}>Nocturna</label>
                            <input placeholder="Valor" ref={i_nocturnal} className={`${styles.input} form-control`} type="number" maxLength={30} onChange={onChange} />
                        </p>
                    </div>
                    <div className="col-lg-4">
                        <p className={styles.desc}>
                            <label className={styles.label}>Carné</label>
                            <input placeholder="Valor" ref={i_card} className={`${styles.input} form-control`} type="number" maxLength={30} onChange={onChange} />
                        </p>
                    </div>
                </div>
                <div className="row col-12">
                    <div className="col-lg-4">
                        <p className={styles.desc}>
                            <label className={styles.label}>Uniforme</label>
                            <input placeholder="Valor" ref={i_uniform} className={`${styles.input} form-control`} type="number" maxLength={30} onChange={onChange} />
                        </p>
                    </div>
                    <div className="col-lg-4">
                        <p className={styles.desc} >
                            <label className={styles.label}>Inscripción</label>
                            <input placeholder="Valor" ref={i_inscrip} className={`${styles.input} form-control`} type="number" maxLength={30} onChange={onChange} />
                        </p>
                    </div>
                    <div className="col-lg-4">
                        <p className={styles.desc}>
                            <label className={styles.label}>Act. Eco</label>
                            <input placeholder="Valor" ref={i_act} className={`${styles.input} form-control`} type="number" maxLength={30} onChange={onChange} />
                        </p>
                    </div>
                </div>
                <div className="row col-12">
                    <div className="col-lg-4">
                        <p className={styles.desc}>
                            <label className={styles.label}>Campamento</label>
                            <input placeholder="Valor" ref={i_camp} className={`${styles.input} form-control`} type="number" maxLength={30} onChange={onChange} />
                        </p>
                    </div>
                    <div className="col-lg-4">
                        <p className={styles.desc}>
                            <label className={styles.label}>Insignias</label>
                            <input placeholder="Valor" ref={i_insig} className={`${styles.input} form-control`} type="number" maxLength={30} onChange={onChange} />
                        </p>
                    </div>
                    <div className="col-lg-4">
                        <p className={styles.desc}>
                            <label className={styles.label}>Otros</label>
                            <input placeholder="Valor" ref={i_other} className={`${styles.input} form-control`} type="number" maxLength={30} onChange={onChange} />
                        </p>
                    </div>
                </div>
                <div className="row col-12">
                    <div className="col-sm-12 col-md-10 col-lg-10">
                        <p className={styles.desc}>
                            <label className={styles.label}>Observaciones</label>
                            <input placeholder="Ingrese una observación de ser necesario..." ref={i_observ} className={`${styles.inputObser} input-group`} type="text" />
                        </p>
                    </div>
                </div>
                <div className={styles.contenedor_btns}>

                    <button ref={btn_agregar} className={`btn btn-success ${styles.botones}`} onClick={actions}>{paymentId ? 'Actualizar Pago' : 'Agregar Pago'}</button>

                    <button ref={btn_cancelar} className={`btn btn-danger ${styles.botones}`} onClick={() => router.push('/dashboard/tesorero')}>{paymentId ?  'Cancelar' :'Cancelar Pago'}</button>

                </div>

            </section>
        </div>

    )
}


/*Se comento todo el codido de abajo ya que este funciona con los campos de cantidad */
// import styles from "~/styles/dashboard/tesorero/Agregar.module.scss";
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