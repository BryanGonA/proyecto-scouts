import styles from '~/styles/register/forms/ParentsData.module.scss'
import { useEffect, useRef, useState } from "react";
import { RegisterFormProps, Parent } from '../RegisterForm';

export default function FormParentsData({values, setValues} : RegisterFormProps) {

    const phoneDad = useRef(null);
    const phoneMom = useRef(null);
    const phoneParent1 = useRef(null);
    const phoneParent2 = useRef(null);


    const method = (inputNumber: any) => {
        if (inputNumber.current) {
            if (inputNumber.current.value.length > 10) {
                inputNumber.current.value = inputNumber.current.value.substring(0, 10)
            }
        }
    }

    const [parent1, setParent1] = useState<Parent>({})
    const [parent2, setParent2] = useState<Parent>({})

    useEffect(() => {
        setValues({...values, parents: Object.assign([], values.parents, {0: parent1})})
    }, [parent1])
    
    useEffect(() => {
        setValues({...values, parents: Object.assign([], values.parents, {1: parent2})})
    }, [parent2])


    return (
        <>
            <div className="row">
                <div className="col-12">

                    <p className={styles.label}>Los campos (*) son obligatorios</p>
                </div>
            </div>
            <div className="row">
                
                <div className="col-md-4">
                    <p className={styles.block}>* Nombres del Acudiente 1:</p>
                    <input id="name_dad" type="text" className={`${styles['form-upper']} form-control`} maxLength={30} required  onChange={(e) => setParent1({...parent1, name: e.target.value.toUpperCase()})}/>
                </div>
                <div className="col-md-4">
                    <p className={styles.block}>* Apellidos del Acudiente 1:</p>
                    <input id="lastname_dad" type="text" className={`${styles['form-upper']} form-control`} maxLength={30} required  onChange={(e) => setParent1({...parent1, lastName: e.target.value.toUpperCase()})}/>
                </div>
                <div className="col-md-4">
                    <p className={styles.block}>* Correo electrónico:</p>
                    <input id="email_dad" type="email" className={`${styles['form-lower']} form-control`} maxLength={50} required  onChange={(e) => setParent1({...parent1, email: e.target.value.toLowerCase()})}/>
                </div>
            </div>
            <div className="row">
                <div className="col-md-3">
                    <p className={styles.block}>* Parentesco:</p>
                    <select name="parentesco" className={`form-control`} defaultValue="" required onChange={(e) => setParent1({...parent1, relationship: e.target.value})}>
                        <option value="" hidden>SELECCIONE...</option>
                        <option value="PADRE">PADRE</option>
                        <option value="MADRE">MADRE</option>
                        <option value="ABUELO">ABUELO/ABUELA</option>
                        <option value="TIO">TÍO/TÍA</option>
                        <option value="ACUDIENTE">ACUDIENTE</option>
                    </select>
                </div>
                <div className="col-md-3">
                    <p className={styles.block}>* Profesión:</p>
                    <input id="job_dad" type="text" className={`${styles['form-upper']} form-control`} maxLength={30} required onChange={(e) => setParent1({...parent1, professional: e.target.value.toUpperCase()})}/>
                </div>
                <div className="col-md-3">
                    <p className={styles.block}>* Empresa:</p>
                    <input id="company_dad" type="text" className={`${styles['form-upper']} form-control`} maxLength={30} required onChange={(e) => setParent1({...parent1, company: e.target.value.toUpperCase()})}/>
                </div>
                <div className="col-md-3">
                    <p className={styles.block}>* Número telefónico:</p>
                    <input id="phone_dad" type="number" min="0" maxLength={10} className="form-control" ref={phoneDad} required onChange={(e) => {method(phoneDad); setParent1({...parent1, phoneParent: e.target.value})}} />
                </div>
            </div>
            <hr className={styles.line} />
            <div className="row">
                <div className="col-md-4">
                    <p className={styles.block}>Nombres del Acudiente 2:</p>
                    <input id="name_mom" type="text" className={`${styles['form-upper']} form-control`} maxLength={30} onChange={(e) => setParent2({...parent2, name: e.target.value.toUpperCase()})}/>
                </div>
                <div className="col-md-4">
                    <p className={styles.block}>Apellidos del Acudiente 2:</p>
                    <input id="lastname_mom" type="text" className={`${styles['form-upper']} form-control`} maxLength={30} onChange={(e) => setParent2({...parent2, lastName: e.target.value.toUpperCase()})}/>
                </div>
                <div className="col-md-4">
                    <p className={styles.block}>Correo electrónico:</p>
                    <input id="email_mom" type="text" className={`${styles['form-lower']} form-control`} maxLength={50} onChange={(e) => setParent2({...parent2, email: e.target.value.toLowerCase()})}/>
                </div>
            </div>
            <div className="row">
                <div className="col-md-3">
                    <p className={styles.block}>Parentesco:</p>
                    <select name="parentesco2" className={`form-control`} defaultValue="" onChange={(e) => setParent2({...parent2, relationship: e.target.value})}>
                        <option value="" hidden>SELECCIONE...</option>
                        <option value="PADRE">PADRE</option>
                        <option value="MADRE">MADRE</option>
                        <option value="ABUELO">ABUELO/ABUELA</option>
                        <option value="TIO">TÍO/TÍA</option>
                        <option value="ACUDIENTE">ACUDIENTE</option>
                    </select>
                </div>
                <div className="col-md-3">
                    <p className={styles.block}>Profesión:</p>
                    <input id="job_mom" type="text" className={`${styles['form-upper']} form-control`} maxLength={30} onChange={(e) => setParent2({...parent2, professional: e.target.value.toUpperCase()})}/>
                </div>
                <div className="col-md-3">
                    <p className={styles.block}>Empresa:</p>
                    <input id="compay_mom" type="text" className={`${styles['form-upper']} form-control`} maxLength={30} onChange={(e) => setParent2({...parent2, company: e.target.value.toUpperCase()})}/>
                </div>
                <div className="col-md-3">
                    <p className={styles.block}>Número telefónico:</p>
                    <input id="phone_mom" type="number" min="0" className="form-control" ref={phoneMom} onChange={(e) => {method(phoneMom); setParent2({...parent2, phoneParent: e.target.value})}}  />
                </div>
            </div>
            <hr className={styles.line} />
            <div className="text-center">
                <h1 className={styles.title}>En caso de emergencia comunicarse con</h1>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <p className={styles.block}>* Nombre completo:</p>
                    <input id="name_emergency1" type="text" className={`${styles['form-upper']} form-control`} maxLength={60} required  onChange={(e) => setValues({...values, dataHealth: { ...values.dataHealth, nameOneEmergency: e.target.value.toUpperCase()}})}/>
                </div>
                <div className="col-md-6">
                    <p className={styles.block}>* Número telefónico:</p>
                    <input id="phone_emergency1" type="number" min="0" className="form-control" ref={phoneParent1} required onChange={(e) => {method(phoneParent1); setValues({...values, dataHealth: { ...values.dataHealth, telephoneOneEmergency: e.target.value}})}} />
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <p className={styles.block}>* Nombre completo:</p>
                    <input id="name_emergency2" type="text" className={`${styles['form-upper']} form-control`} maxLength={60} required  onChange={(e) => setValues({...values, dataHealth: { ...values.dataHealth, nameTwoEmergency: e.target.value.toUpperCase()}})}/>
                </div>
                <div className="col-md-6">
                    <p className={styles.block}>* Número telefónico:</p>
                    <input id="phone_emergency2" type="number" min="0" className="form-control" ref={phoneParent2} required onChange={(e) => {method(phoneParent2); setValues({...values, dataHealth: { ...values.dataHealth, telephoneTwoEmergency: e.target.value}})}} />
                </div>
            </div>
        </>
    )
}