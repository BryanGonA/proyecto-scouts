import styles from '~/styles/register/forms/ParentsData.module.scss'
import { useEffect, useRef, useState } from "react";
import {MultiSelect} from "react-multi-select-component";
import { RegisterFormProps } from '../RegisterForm';
import {Intervention, Disease} from '../RegisterForm'

export default function FormDataHealth({values, setValues} : RegisterFormProps) {

    const mensajes = {
        "selectSomeItems": "Seleccione...",
        "allItemsAreSelected": "Todos las enfermedades han sido seleccionadas.",
        "selectAll": "Seleccionar todo",
        "search": "Buscar",
        "clearSearch": "Limpiar busqueda"
    }

    const enfermedades = [
        { label: "NINGUNO", value: "NINGUNO", disabled: false },
        { label: "MIGRAÑA", value: "MIGRAÑA", disabled: false },
        { label: "ANEMIA", value: "ANEMIA", disabled: false },
        { label: "NEUMONIA", value: "NEUMONIA", disabled: false},
        { label: "DIABETES", value: "DIABETES", disabled: false },
        { label: "ENFERMEDADES CARDIACAS", value: "ENFERMEDADES_CARDIACAS", disabled: false },
        { label: "MIOPIA", value: "MIOPIA", disabled: false },
        { label: "CONJUTIVITIS", value: "CONJUTIVITIS", disabled: false },
        { label: "ASTIGMATISMO", value: "ASTIGMATISMO", disabled: false },
        { label: "EPILEPSIA", value: "EPILEPSIA", disabled: false },
        { label: "ASMA", value: "ASMA", disabled: false },
        { label: "BRONQUITIS", value: "BRONQUITIS", disabled: false },
        { label: "HIPOTIROIDISMO", value: "HIPOTIROIDISMO", disabled: false},
        { label: "HIPERTENSION", value: "HIPERTENSION" },
        { label: "SINOSITIS", value: "SINOSITIS", disabled: false },
        { label: "HIPOGLISEMIA", value: "HIPOGLISEMIA", disabled: false },
        { label: "CONVULSIONES", value: "CONVULSIONES", disabled: false },        
        { label: "PULMONIA", value: "PULMONIA", disabled: false },
        { label: "OTROS", value: "OTROS", disabled: false },
        
    ];

    let traumas = [
        { label: "NINGUNO", value: "NINGUNO", disabled: false },
        { label: "FRACTURAS", value: "FRACTURAS", disabled: false },
        { label: "DISLOCACIONES", value: "DISLOCACIONES", disabled: false },
        { label: "CIRUGIAS", value: "CIRUGIAS", disabled: false },
        { label: "DIABETES", value: "DIABETES", disabled: false },
        { label: "HOSPITALIZACIONES", value: "HOSPITALIZACIONES", disabled: false },
        { label: "ESGUINCES", value: "ESGUINCES", disabled: false },
        { label: "OTRAS", value: "OTRAS", disabled: false },        
    ];

      
    const [selected, setSelected] = useState([]);    
    const [selected_traumas, setSelected_traumas] = useState([])
    const [alergias, set_alergias] = useState(false)
    const [enfermedadeschk, set_enfermedadeschk] = useState(false)
    const [medicamentos, set_medicamentos] = useState(false)

    const alergias_ref = useRef(null);
    const enfermedadeschk_ref = useRef(null);
    const medicamentos_ref = useRef(null);

    useEffect(() => {
        if (!alergias) {
            alergias_ref.current.value = ""           
        }
        if (!enfermedadeschk) {
            enfermedadeschk_ref.current.value = ""           
        }
        if (!medicamentos) {
            medicamentos_ref.current.value = ""           
        }
    }, [alergias, enfermedadeschk, medicamentos]) 

    function interventionsChange(){
        let interventions:Intervention[] = []
        selected.forEach((intervention)=>{                
            if(intervention.value === 'OTROS'){
                if (document.getElementById('complicacion_salud_extra') !== null){
                    let otros = (document.getElementById('complicacion_salud_extra') as HTMLInputElement).value
                    interventions.push({typeIntervention:intervention.value, whichIntervention:otros})
                }                
            }else{
                interventions.push({typeIntervention:intervention.value})
            }
        })
        setValues({...values, dataHealth:{...values.dataHealth, interventions:interventions}})
    }

    function diseasesChange(){
        let diseases:Disease[] = []            
        selected_traumas.forEach((disease)=>{ 
            if (document.getElementById(`cual_${disease.value.toLowerCase()}`) !== null){
                let otros = (document.getElementById(`cual_${disease.value.toLowerCase()}`) as HTMLInputElement).value
                diseases.push({nameDisease:disease.value, whichDisease:otros})   
            }         
        })
        setValues({...values, dataHealth:{...values.dataHealth, diseases:diseases}})
    }

    useEffect(() => {
        if (selected) {            
            const result = selected.filter(select => select.value === 'NINGUNO')
            if (result.length > 0) {
                enfermedades.forEach((select) => {
                    if (select.value !== 'NINGUNO') {
                        select.disabled = true;
                    }
                })
            } else {
                enfermedades.forEach((select) => {
                    if (select.value !== 'NINGUNO') {
                        select.disabled = false;
                    }
                })
            }
            interventionsChange()
        }
    }, [selected])

    useEffect(() => {
        if (selected_traumas) { 
            const result = selected_traumas.filter(select => select.value === 'NINGUNO')
            if (result.length > 0) {
                traumas.forEach((select) => {
                    if (select.value !== 'NINGUNO') {
                        select.disabled = true;                        
                    }
                })

            } else {
                traumas.forEach((select) => {
                    if (select.value !== 'NINGUNO') {
                        select.disabled = false;
                    }
                })
            }
            diseasesChange()   
        }
    }, [selected_traumas])

    return (
        <div className='mt-5'>
            <div className="mt-5">
                <label className={styles.label}>Los campos (*) son obligatorios</label>
                <div className='row'>
                    <div className='col-sm-12 col-lg-6 row' >
                        <label className={`${styles.label} col-sm-12 col-lg-4`}>* Alergias</label>
                        <div className="col custom-control custom-radio">
                            <input type="radio" className="custom-control-input" id="alergia_si" name="grupo_alergias" checked={alergias} onClick={() => set_alergias(true)} onChange={(e) => setValues({...values, dataHealth: { ...values.dataHealth, allergies: e.target.checked}})}/>
                            <label className="custom-control-label" htmlFor="alergia_si">Si</label>
                        </div>
                        <div className="col custom-control custom-radio">
                            <input type="radio" className="custom-control-input" id="alergia_no" name="grupo_alergias" checked={!alergias} onClick={() => set_alergias(false)}/>
                            <label className="custom-control-label" htmlFor="alergia_no">No</label>
                        </div>
                    </div>
                    <div className='col-sm-12 col-lg-6 row'>
                        <label className={`${styles.label} col-sm-12 col-lg-4`}>Cuáles:</label>
                        <input id="alergias_cuales" type="text" className="col-sm-12 col-lg-8 form-control" ref={alergias_ref} disabled={!alergias} required={alergias} maxLength={100} onChange={(e) => setValues({...values, dataHealth: { ...values.dataHealth, noteAllergies: e.target.value}})}/>
                    </div>
                </div>
                <div className='row mt-4'>
                    <div className='col-sm-12 col-lg-6 row'>
                        <label className={`${styles.label} col-sm-12 col-lg-4`}>* Enfermedades</label>
                        <div className="col custom-control custom-radio">
                            <input type="radio" className="custom-control-input" id="enfermedades_si" name="grupo_enfermedades" checked={enfermedadeschk} onClick={() => set_enfermedadeschk(true)} onChange={(e) => setValues({...values, dataHealth: { ...values.dataHealth, disease: e.target.checked}})}/>
                            <label className="custom-control-label" htmlFor="enfermedades_si">Si</label>
                        </div>
                        <div className="col custom-control custom-radio">
                            <input type="radio" className="custom-control-input" id="enfermedades_no" name="grupo_enfermedades" checked={!enfermedadeschk} onClick={() => set_enfermedadeschk(false)}/>
                            <label className="custom-control-label" htmlFor="enfermedades_no">No</label>
                        </div>
                    </div>
                    <div className='col-sm-12 col-lg-6 row my-sm-3'>
                        <label className={`${styles.label} col-sm-12 col-lg-4`}>Cuáles:</label>
                        <input id="enfermedades_cuales" type="text" className="col-sm-12 col-lg-8 form-control"  ref={enfermedadeschk_ref} disabled={!enfermedadeschk} required={enfermedadeschk} maxLength={100} onChange={(e) => setValues({...values, dataHealth: { ...values.dataHealth, noteDiseases: e.target.value}})}/>
                    </div>
                </div>
                <div className='row mt-4'>
                    <div className='col-sm-12 col-lg-6 row'>
                        <label className={`${styles.label} col-sm-12 col-lg-4`}>* Medicamentos Permanentes</label>
                        <div className="col custom-control custom-radio">
                            <input type="radio" className="custom-control-input" id="medicamentos_si" name="grupo_medicamientos" checked={medicamentos} onClick={() => set_medicamentos(true)} onChange={(e) => setValues({...values, dataHealth: { ...values.dataHealth, medicine: e.target.checked}})}/>
                            <label className="custom-control-label" htmlFor="medicamentos_si">Si</label>
                        </div>
                        <div className="col custom-control custom-radio">
                            <input type="radio" className="custom-control-input" id="medicamentos_no" name="grupo_medicamientos" checked={!medicamentos} onClick={() => set_medicamentos(false)} />
                            <label className="custom-control-label" htmlFor="medicamentos_no">No</label>
                        </div>
                    </div>
                    <div className='col-sm-12 col-lg-6 row'>
                        <label className={`${styles.label} col-sm-12 col-lg-4`}>Cuáles:</label>
                        <input id="medicamentos_cuales" type="text" className="col-sm-12 col-lg-8 form-control"  ref={medicamentos_ref} disabled={!medicamentos} required={medicamentos} maxLength={100} onChange={(e) => setValues({...values, dataHealth: { ...values.dataHealth, noteMedicine: e.target.value}})}/>
                    </div>
                </div>
                <div className='row mt-4'>                    
                    <div className='col-sm-12 col-lg-6 row'>                       
                        <label  className={`${styles.label} col-sm-12 col-lg-4`}>Dosis/Tiempo:</label> 
                        <input id="dosis_tiempo" type="text" min='0' className="col-sm-12 col-lg-8 form-control" placeholder="1 CADA 8 HORAS" onChange={(e) => setValues({...values, dataHealth: { ...values.dataHealth, doseTime: e.target.value}})}/>                          
                    </div>
                    <div className='col-sm-12 col-lg-6 my-sm-3 row'>
                        <label className={`${styles.label} col-sm-12 col-lg-4`}>Especificaciones:</label>
                        <textarea  id="especificaciones" className="col-sm-12 col-lg-8 form-control" maxLength={100} onChange={(e) => setValues({...values, dataHealth: { ...values.dataHealth, specification: e.target.value}})}></textarea>
                    </div>
                </div>
                <div className='row mt-4'>
                    <div className='col-12 row'>
                        <label className={`${styles.label} col-sm-12 col-lg-4`}>Observaciones:</label> 
                        <textarea  id="observaciones" className="col-sm-12 col-lg-10 form-control" maxLength={200} onChange={(e) => setValues({...values, dataHealth: { ...values.dataHealth, observations: e.target.value}})}></textarea>
                    </div>
                </div>
                <div className='row mt-4'>                    
                    <div className='col-sm-12 col-lg-6 row'>
                        <label className={`${styles.label} col-sm-12 col-lg-4`}>Seguro médico:</label> 
                        <input id="seguro_medico"  className="col-sm-12 col-lg-8 form-control" onChange={(e) => setValues({...values, dataHealth: { ...values.dataHealth, healthSecure: e.target.value}})}/>
                    </div>
                    <div className='col-sm-12 col-lg-6 row'>
                        <label className={`${styles.label} col-sm-12 col-lg-4`}>Número de carnet:</label> 
                        <input  id="numero_carnet" type="text" min='0' className="col-sm-12 col-lg-4 form-control" onChange={(e) => setValues({...values, dataHealth: { ...values.dataHealth, cardNumber: e.target.value}})}/>
                    </div>
                </div>
                <div className='row mt-4'>                    
                    <div className='col-sm-12 col-lg-6 row'>
                        <label className={`${styles.label} col-sm-12 col-lg-4`}>Médico particular:</label> 
                        <input id="medico_particular"  className="col-sm-12 col-lg-8 form-control" onChange={(e) => setValues({...values, dataHealth: { ...values.dataHealth, privateDoctor: e.target.value}})}/>
                    </div>
                    <div className='col-sm-12 col-lg-6 row'>
                        <label className={`${styles.label} col-sm-12 col-lg-4`}>Número de telefóno:</label> 
                        <input  id="numero_carnet" type="number" min='0' className="col-sm-12 col-lg-8 form-control" onChange={(e) => setValues({...values, dataHealth: { ...values.dataHealth, doctorTelephone: e.target.value}})}/>
                    </div>
                </div>
                <div className='row mt-4 mb-4 pb-4 pt-4 mr-2 ml-2 border-top'>
                    <div className='col-12 row justify-content-center '>
                        <strong className='texto_titulo'>Datos de salud actual</strong>
                    </div>
                    <div className='col-12 row'>
                        <label className={`${styles.label} col-sm-12 col-lg-4`}>* ¿Tienes alguna complicación de salud actualmente?</label>                         
                        <MultiSelect
                            options={enfermedades}
                            value={selected}
                            onChange={setSelected}
                            hasSelectAll={false}
                            labelledBy={"Select"}
                            overrideStrings={mensajes}
                            className="col-sm-12 col-lg-8"                            
                        />
                    </div>   

                    {selected.map((select) => 
                            {   if (select.value === 'OTROS'){                                    
                                    return (                        
                                    <div className='col-12 row mt-4'>
                                        <label className={`${styles.label} col-sm-12 col-lg-4`}>¿Cuál(es) otra(s)?</label> 
                                        <input id="complicacion_salud_extra"  className="col-sm-12 col-lg-8 form-control" required maxLength={50} onChange={interventionsChange}/>
                                    </div>
                                    )
                                }else{                                 
                                    return null
                                }
                            }
                        )
                    }
                   

                </div>
                
                <div className='row mt-4 mb-4 pb-4 pt-4 mr-2 ml-2 border-top'>
                    <div className='col-12 row justify-content-center texto_titulo'>
                        <strong className='texto_titulo'>Datos de salud adicionales</strong>
                    </div>
                    <div className='col-12 row'>
                        <label className={`${styles.label} col-sm-12 col-lg-4`}>* ¿Tienes o ha tenido algún tipo de intervención en la salud</label>
                        <MultiSelect
                            options={traumas}
                            value={selected_traumas}
                            onChange={setSelected_traumas}
                            hasSelectAll={false}
                            labelledBy={"Select"} 
                            overrideStrings={mensajes}                       
                            className="col-sm-12 col-lg-8"
                        />
                    </div>
                    {selected_traumas.map((select) => 
                            {   if (select.value !== 'NINGUNO'){                                    
                                    return (                        
                                    <div className='col-12 row mt-4'>
                                        <label className={`${styles.label} col-sm-12 col-lg-4`}>Indique cuál(es) tipo de <strong>{select.label.toLowerCase()}</strong> tuvo:</label> 
                                        <input id={`cual_${select.value.toLowerCase()}`} className="col-sm-12 col-lg-8 form-control" required maxLength={50} onChange={diseasesChange}></input>
                                    </div>
                                    )
                                }else{
                                    return null
                                }
                            }
                        )                        
                    }
                </div>
                <div className='row mt-4 mb-4 pb-4 pt-4 mr-2 ml-2 border-top'>
                    <div className="form-check form-check-inline row col-12 justify-content-center">
                        <input className="form-check-input" type="checkbox" id="veracidad_informacion" value="veracidad_informacion" required/>
                        <label className="form-check-label" htmlFor="veracidad_informacion">* Certifico que toda la información aquí suministrada es veraz, autentica, confiable y conocidas por el médico</label>
                    </div>
                    <div className="form-check form-check-inline row col-12 justify-content-center">
                        <input className="form-check-input" type="checkbox" id="autorizar_informacion" value="autorizar_informacion" required/>
                        <label className="form-check-label" htmlFor="autorizar_informacion">* Autorizo utilizar la información que aqui se encuentra teniendo en cuenta la <a href="#">política de privacidad</a> y <a href="#">términos y condiciones</a></label>
                    </div>
                </div>
                <div className='row mt-4 mb-4 text-center'>
                    <div className='col-sm-12 col-lg-6 row justify-content-center'>
                        <label className={`${styles.label} col-12`}>* Responsable de la solicitiud</label>
                        <input id="responsable_solicitud"  className="col-12 form-control" required onChange={(e) => setValues({...values, responsibleSign: { ...values.responsibleSign, nameResponsibleSign: e.target.value}})}/>
                    </div>
                    <div className='col-sm-12 col-lg-6 row justify-content-center'>
                        <label className={`${styles.label} col-12`}>* Número telefónico</label>
                        <input id="intervenciones" type="number" className="col-12 form-control" max={9999999999} required onChange={(e) => setValues({...values, responsibleSign: { ...values.responsibleSign, phoneResponsible: e.target.value}})}/>
                    </div>
                </div>
                <div className='row mt-4 mb-4 text-center justify-content-center'>
                    <button type="submit" className="btn backgroud-button px-5 py-3">Enviar Formulario</button>
                </div>
            </div>
        </div>
    )
}