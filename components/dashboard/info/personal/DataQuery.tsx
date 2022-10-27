
import styles from "~/styles/dashboard/info/DataQuery.module.scss";

export default function DataQuery({label, data, settings, tipo, editar, reference}:any) {

    let elemento = <input type="text" className={`${editar ? styles.editar: styles.mostrar } ${styles.text_data}`}  ref={reference} disabled={!editar} defaultValue={data}></input>
    
    if (editar === true){
        switch(tipo){
            case 'tipo_documento':
                elemento = <select name="typeDocument" className={settings} ref={reference} defaultValue={data}>                            
                                <option value="RC">REGISTRO CIVÍL</option>
                                <option value="TI">TARJETA DE IDENTIDAD</option>
                                <option value="CC">CÉDULA DE CIUDADANÍA</option>
                            </select>

                break;
            case 'curso_actual':
                elemento = <select name="actualCurse" className='col-sm-12 col-lg-6' ref={reference} defaultValue={data}>                                
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
                break;
            case 'calendario':
                elemento = <select name="calendar" className={settings} ref={reference} defaultValue={data}>                            
                            <option value="A">A</option>
                            <option value="B">B</option>
                        </select>
                break;
            case 'jornada':
                elemento = <select name="journal" className={settings} ref={reference} defaultValue={data}>                                
                                <option value="DIURNO">DIURNA</option>
                                <option value="NOCTURNO">NOCTURNA</option>
                            </select>
                break;
            case 'sexo':
                elemento = <select name="gender" className='col-sm-12 col-lg-6' ref={reference} defaultValue={data}>                            
                            <option value="M">MASCULINO</option>
                            <option value="F">FEMENINO</option>
                        </select>
                break;
            case 'tipo_sangre':
                elemento = <select name="bloodType" className={settings} ref={reference} defaultValue={data}>
                                <option value="A">A</option>
                                <option value="O">O</option>
                                <option value="B">B</option>
                                <option value="AB">AB</option>
                            </select>
                break;
            case 'rh':
                elemento = <select name="RH" className={settings} ref={reference} defaultValue={data}>                            
                            <option value="POSITIVO">POSITIVO</option>
                            <option value="NEGATIVO">NEGATIVO</option>
                        </select>
                break;
            case 'numeros':
                elemento = <input type="number" className={`${editar ? styles.editar: styles.mostrar } ${styles.text_data}`}  ref={reference} disabled={!editar} defaultValue={data}></input>
                break;

            case 'photo':
                elemento = <input type="file" className={`${editar ? styles.editar: styles.mostrar } ${styles.text_data}`}  ref={reference} disabled={!editar} defaultValue={data}></input>
        }
    }
    if (tipo === 'correo') {
        elemento = <input type="text" className={`${editar ? styles.editar: styles.mostrar_correo } ${styles.text_data}`}  ref={reference} disabled={!editar} defaultValue={data}></input>
    }

    return (        
        <div className={settings}>
            <strong className={styles.label2}>{label}: </strong>
            {elemento}
        </div>    
    )
}

/*
tipo_documento
curso_actual
calendario
jornada
sexo
tipo_sangre
rh*/