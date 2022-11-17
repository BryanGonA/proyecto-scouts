import { useEffect, useRef, useState } from "react";
import styles from "~/styles/register/forms/PersonalData.module.scss";
import { RegisterFormProps } from "../RegisterForm";
//import { Path, useForm, UseFormRegister, SubmitHandler } from "react-hook-form";

export default function FormPersonalData({ values, setValues }: RegisterFormProps) {
   // const { register, formState: { errors }, handleSubmit } = useForm();

    const [curse, setCurse] = useState(null);
    const [email, setEmail] = useState(null);
    const [cEmail, setCEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [cPassword, setCPassword] = useState(null);
    let labelCEmail = useRef(null);
    let labelCPassword = useRef(null)
    const calendar = useRef(null);
    const divCalendar = useRef(null);

    function returnDate() {
        let hoy = new Date()
        var dd = hoy.getDate()
        var dayString = '' + dd
        if (dd < 9) dayString = '0' + dd
        var mm = hoy.getMonth() + 1
        var monthString = '' + mm
        if (mm < 9) monthString = '0' + mm
        let yyyy = hoy.getFullYear() - 3
        return yyyy + '-' + monthString + '-' + dayString
    }

    function inputNumber(e: any) {
        let value = e.target.value;
        e.target.value = value.replace(new RegExp(/[^\d]/, 'ig'), '');
    }



    useEffect(() => {
        
            if (email != cEmail) {
                labelCEmail.current.value = 'Los correos no coinciden',
                labelCEmail.current.style.color = 'red';
            }
            else {
                labelCEmail.current.value = 'Confirmar tu correo',
                labelCEmail.current.style.color = "black";
            }
        
    }, [email, cEmail])

    useEffect(() => {
        if (password || cPassword) {
            if (password != cPassword) {
                labelCPassword.current.value = 'Las contraseñas no coinciden',
                labelCPassword.current.style.color = "red";
            }
            else {
                labelCPassword.current.style.color = "black";
            }
        }
    }, [password, cPassword])

    useEffect(() => {
        if (curse) {
            if (curse === 'UNIVERSITARIO') {
                calendar.current.style.display = "none";
                divCalendar.current.style.display = "none";
            } else {
                calendar.current.style.display = "flex";
                divCalendar.current.style.display = "flex";
            }
        } else {
            calendar.current.style.display = "none";
            divCalendar.current.style.display = "none";
        }
    }, [curse])

    return (
        <div className={`${styles.containerHigth}`}>
            <div className={`${styles.container} w-100`}>
                <div className="row">
                    <div className="col-12">
                        <p className={styles.label}>Los campos (*) son obligatorios</p>
                    </div>
                </div>
                
                <div className={`${styles.row} row`}>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <label className={`${styles.label}`} htmlFor="names" >* Nombres:</label>
                        <input name="names" className={`${styles.input} form-control`} type="text" maxLength={30} required onChange={(e) => setValues({...values, name: e.target.value.toUpperCase()})}/>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <label className={`${styles.label}`} htmlFor="lastNames">* Apellidos:</label>
                        <input name="lastNames" className={`${styles.input} form-control`} type="text" maxLength={30} required onChange={(e) => setValues({...values, lastName: e.target.value.toUpperCase()})}/>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <label className={`${styles.label}`} htmlFor="email">* Correo electrónico:</label>
                        <input name="email" className={`${styles.input} form-control`} type="email" maxLength={30} required onChange={e => {setEmail(e.target.value); setValues({...values, email: e.target.value.toLowerCase()})}}/>
                    </div>
                </div>
                <div className={`${styles.row2} row`}>
                    <div className="col-12">
                        <br />
                    </div>
                </div>
                <div className={`${styles.row} row`}>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <label
                className={`${styles.label}`}
                ref={labelCEmail}
                htmlFor="emailConfirmation"
              >
                {labelCEmail.current?.value}
              </label>
              <input
                name="emailConfirmation"
                className={`${styles.input} form-control`}
                type="email"
                onChange={(e) => setCEmail(e.target.value.toLowerCase())}
              />
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <label className={`${styles.label}`} htmlFor="password">
                * Contraseña:
              </label>
              <input
                name="password"
                className={`${styles.inputPassword} form-control`}
                type="password"
                maxLength={20}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setValues({ ...values, password: e.target.value });
                }}
              />
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <label
                className={`${styles.label}`}
                ref={labelCPassword}
                htmlFor="passwordConfirmation"
              >
                * Confirmación de contraseña:
              </label>
              <input
                name="passwordConfirmation"
                className={`${styles.inputPassword} form-control`}
                type="password"
                maxLength={20}
                required
                onChange={(e) => setCPassword(e.target.value)}
              />
            </div>
          </div>
                <div className={`${styles.row2} row`}>
                    <div className="col-12">
                        <br />
                    </div>
                </div>
                <div className={`row`}>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className={`${styles.rowSecundary} ${styles.typeDocumentLabel} row`}>
                            <label className={`${styles.label}`} htmlFor="typeDocument">* Tipo de documento:</label>
                            <div className={`${styles.rowSecundary} row w-100`}>
                                <select name="typeDocument" className={` ${styles.typeDocument} ${styles.input} form-control`} defaultValue="" required onChange={(e) => setValues({ ...values, documentType: e.target.value.toUpperCase() })}>
                                    <option value="" hidden>SELECCIONE...</option>
                                    <option value="RC">REGISTRO CIVÍL</option>
                                    <option value="TI">TARJETA DE IDENTIDAD</option>
                                    <option value="CC">CÉDULA DE CIUDADANÍA</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <label className={`${styles.label}`} htmlFor="numberDocument">* Número de documento:</label>
                        <input name="numberDocument" className={`${styles.input} form-control`} type="text" maxLength={20} required onChange={(e) => { inputNumber(e); setValues({ ...values, document: e.target.value }) }} />
                    </div>
                </div>
                <div className={`${styles.row2} row`}>
                    <div className="col-12">
                        <br />
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <label className={`${styles.label}`} htmlFor="birthDate">* Fecha de nacimiento:</label>
                        <input name="birthDate" className={`${styles.input} form-control`} type="date" max={returnDate()} required onChange={(e) => setValues({ ...values, birthDate: new Date(e.target.value) })} />
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <label className={`${styles.label}`} htmlFor="cityResidence">* Ciudad de residencia:</label>
                        <input name="cityResidence" className={`${styles.input} form-control`} type="text" maxLength={100} required onChange={(e) => setValues({ ...values, userDetails: { ...values.userDetails, homePlace: e.target.value.toUpperCase() } })} />
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <label className={`${styles.label}`} htmlFor="adressResidence">* Dirección de residencia:</label>
                        <input name="adressResidence" className={`${styles.input} form-control`} type="text" maxLength={40} required onChange={(e) => {
                            setValues({ ...values, homeAddress: e.target.value.toUpperCase(), userDetails: { ...values.userDetails, homeAddress: e.target.value.toUpperCase() } })
                        }} />
                    </div>
                </div>
                <div className={`${styles.row2} row`}>
                    <div className="col-12">
                        <br />
                    </div>
                </div>
                <div className={`${styles.row} row`}>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <label className={`${styles.label}`} htmlFor="phoneNumber">* Número telefónico:</label>
                        <input name="phoneNumber" className={`${styles.input} form-control`} type="number" required onChange={(e) => setValues({ ...values, userDetails: { ...values.userDetails, phoneUser: e.target.value } })} />
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <label className={`${styles.label}`} htmlFor="institute">* Institución educativa:</label>
                        <input name="institute" className={`${styles.input} form-control`} type="text" maxLength={50} required onChange={(e) => setValues({...values, userDetails: { ...values.userDetails, institute: e.target.value.toUpperCase()}})}/>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="row">
                            <label className={`${styles.label}`} htmlFor="actualCurse">* Curso actual: </label>
                            <select name="actualCurse" className={`${styles.actualCurse} ${styles.input} form-control`} defaultValue="" required onChange={e => {setCurse(e.target.value); setValues({...values, userDetails: { ...values.userDetails, currentCourse: e.target.value.toUpperCase()}})}} >
                                <option value="" hidden>SELECCIONE...</option>
                                <option value="PRIMERO">PRIMERO</option>
                                <option value="SEGUNDO">SEGUNDO</option>
                                <option value="TERCERO">TERCERO</option>
                                <option value="CUARTO">CUARTO</option>
                                <option value="QUINTO">QUINTO</option>
                                <option value="SEXTO">SEXTO</option>
                                <option value="SÉPTIMO">SÉPTIMO</option>
                                <option value="OCTAVO">OCTAVO</option>
                                <option value="NOVENO">NOVENO</option>
                                <option value="DÉCIMO">DÉCIMO</option>
                                <option value="ONCE">ONCE</option>
                                <option value="UNIVERSITARIO">UNIVERSITARIO(A)</option>
                            </select>
                        </div>
                        <div className="row" >
                            <label className={`${styles.label}`} htmlFor="calendar" ref={divCalendar}>Calendario: </label>
                            <select name="calendar" ref={calendar} className={`${styles.calendar} ${styles.input} form-control`} defaultValue="" onChange={(e) => setValues({...values, userDetails: { ...values.userDetails, calendary: e.target.value.toUpperCase()}})}>
                                <option value="" hidden>SELECCIONE...</option>
                                <option value="A">A</option>
                                <option value="B">B</option>
                            </select>
                        </div>

                    </div>
                </div>
                <div className={`${styles.row2} row`}>
                    <div className="col-12">
                        <br />
                    </div>
                </div>
                <div className={`${styles.row} row`}>
                    <div className="col-lg-3 col-md-4 col-sm-12">
                        <label className={`${styles.label}`} htmlFor="journal">* Jornada:</label>
                        <select name="journal" className={`${styles.input} form-control`} defaultValue="" required onChange={(e) => setValues({ ...values, userDetails: { ...values.userDetails, timeShift: e.target.value.toUpperCase() } })}>
                            <option value="" hidden>SELECCIONE...</option>
                            <option value="DIURNO">DIURNO</option>
                            <option value="NOCTURNO">NOCTURNO</option>
                        </select>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-12">
                        <label className={`${styles.label}`} htmlFor="gender">* Sexo:</label>
                        <select name="gender" className={`${styles.input} form-control`} defaultValue="" required onChange={(e) => setValues({ ...values, userDetails: { ...values.userDetails, sex: e.target.value.toUpperCase() } })}>
                            <option value="" hidden>SELECCIONE...</option>
                            <option value="M">MASCULINO</option>
                            <option value="F">FEMENINO</option>
                        </select>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-12">
                        <label className={`${styles.label}`} htmlFor="weight">Peso (Kg):</label>
                        <input name="weight" className={`${styles.input} form-control`} type="number" min="0" max="300" onChange={(e) => setValues({ ...values, userDetails: { ...values.userDetails, weight: Number(e.target.value.toUpperCase()) } })} />
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-12">
                        <label className={`${styles.label}`} htmlFor="height">Estatura (Cms):</label>
                        <input name="height" className={`${styles.input} form-control`} type="number" min="0" max="300" onChange={(e) => setValues({ ...values, userDetails: { ...values.userDetails, stature: Number(e.target.value.toUpperCase()) } })} />
                    </div>
                </div>
                <div className={`${styles.row2} row`}>
                    <div className="col-12">
                        <br />
                    </div>
                </div>
                <div className={`${styles.row} row`}>
                    <div className="col-lg-3 col-md-4 col-sm-12">
                        <label className={`${styles.label}`} htmlFor="bloodType">* Tipo de sangre:</label>
                        <select name="bloodType" className={`${styles.input} form-control`} defaultValue="" required onChange={(e) => setValues({ ...values, userDetails: { ...values.userDetails, bloodType: e.target.value.toUpperCase() } })}>
                            <option value="" hidden>SELECCIONE...</option>
                            <option value="A">A</option>
                            <option value="O">O</option>
                            <option value="B">B</option>
                            <option value="AB">AB</option>
                        </select>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-12">
                        <label className={`${styles.label}`} htmlFor="RH">* RH:</label>
                        <select name="RH" className={`${styles.input} form-control`} defaultValue="" required onChange={(e) => setValues({ ...values, userDetails: { ...values.userDetails, rh: e.target.value.toUpperCase() } })}>
                            <option value="" hidden>SELECCIONE...</option>
                            <option value="POSITIVO">POSITIVO</option>
                            <option value="NEGATIVO">NEGATIVO</option>
                        </select>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-12">
                        <label className={`${styles.label}`} htmlFor="EPS">* EPS:</label>
                        <input name="EPS" className={`${styles.input} form-control`} type="text" maxLength={40} required onChange={(e) => setValues({...values, userDetails: { ...values.userDetails, eps: e.target.value.toUpperCase()}})}/>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-12">
                        <label className={`${styles.label}`} htmlFor="atentionSite">Sitio de atención:</label>
                        <input name="atentionSite" className={`${styles.input} form-control`} type="text" maxLength={50} onChange={(e) => setValues({...values, userDetails: { ...values.userDetails, attentionSite: e.target.value.toUpperCase()}})}/>
                    </div>
                </div>
            </div>
        </div>
    );
}