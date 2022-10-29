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
    const i_pay = useRef(null)

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
        //fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/users/editpayments/${id}`, {
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/users/editpayments/${id}`, {
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
                i_pay.current.value = payment.pay
                
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
        values.push({ name: 'TIPO PAGO', ref: i_pay })
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
                <div className="row col-12" >
                            <label className={`${styles.desc}`} htmlFor="tipo" ref={i_pay}>Tipo de pago: </label>
                            <select name="tipo" ref={i_pay} className={`${styles.inputObser} input-group`}>
                                <option value="" hidden>SELECCIONE...</option>
                                <option value="1">TRANSFERENCIA</option>
                                <option value="2">EFECTIVO</option>
                            </select>
                        </div>
                <div className={styles.contenedor_btns}>

                    <button ref={btn_agregar} className={`btn btn-success ${styles.botones}`} onClick={actions}>{paymentId ? 'Actualizar Pago' : 'Agregar Pago'}</button>

                    <button ref={btn_cancelar} className={`btn btn-danger ${styles.botones}`} onClick={() => router.push('/dashboard/tesorero')}>{paymentId ?  'Cancelar' :'Cancelar Pago'}</button>

                </div>

            </section>
        </div>

    )
}