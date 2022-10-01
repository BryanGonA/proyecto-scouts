import { useEffect, useRef, useState } from "react";
import styles from "~/styles/dashboard/info/MedicalData.module.scss";
import withReactContent from 'sweetalert2-react-content'
import { useRouter } from "next/router";
import MultiSelect from "react-multi-select-component";
import { Disease, Intervention } from "~/components/register/RegisterForm";
import { useCurrentUser } from "~/hooks/use-current-user";


export default function MedicalData({ userId }: any) {
  
  const { user, isLoading: loadingUser, error: userError } = useCurrentUser()
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

  useEffect(() => {
    if (userId) {
      obtenerid(userId);
    } else {
      medical();
    }
  }, [user]);

 function actualizar(){
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
    doctorTelephone: btninput10.current.value,

  }
  if (userId) {
    actualizarid(account, userId);
 }
 else {
    update(account)
 }
 }

  const actualizarid = (account, userid) =>{
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/users/editDatahealth/${userid}`, {
      method: 'PUT',
      headers: {
        'Referrer-Policy': 'origin-when-cross-origin',
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + localStorage.getItem("auth_token"),
        'Access-Control-Allow-Origin': `${process.env.NEXT_PUBLIC_URL}`
      },
      body: JSON.stringify(account)
    }).then(res => {
      return res.json().then(data => {
        if (res.ok) {
          return Promise.resolve(account)
        } else {
          return Promise.reject(data)
        }
      })

    }).then(data => {
      MySwal.fire({
        icon: 'success',
        title: 'Datos actualizados!',
        text: 'Los datos fueron actualizados correctamente',
        confirmButtonColor: '#31B411',
        confirmButtonText: "Continuar",

      }).then(function (isConfirm) {
        if (isConfirm) {
          location.reload();
        }
      })
    }).catch(error => {

    })
  }

  const obtenerid = (userid) =>{
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/users/dataHealth/${userid}`, {
      method: 'GET',
      headers: {
        'Referrer-Policy': 'origin-when-cross-origin',
        'Authorization': "Bearer " + localStorage.getItem("auth_token"),
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

      setMedicalData(data.data.dataHealth)
      diseases(data.data.dataHealth.diseases)
      inter(data.data.dataHealth.interventions)
      setLoading(false)


    }).catch(error => {

    })    
  }

  const medical = () => {
    if (!loadingUser) {
      obtenerid(user.id)
    }
  }
  const Swal = require('sweetalert2')
  const MySwal = withReactContent(Swal)



  const update = (account) => {
    if (!loadingUser) {
      actualizarid(account, user.id)
    }
  }
  const diseases = (diseases: Object[]) => {
    let respuesta = ""
    diseases.forEach((disease: any, index) => {

      respuesta += disease.nameDisease + ": " + disease.whichDisease + ", "

    })

    setDiseases(respuesta)
  }
  const inter = (interventions: Object[]) => {
    let answer = ""
    interventions.forEach((intervention: any, index) => {

      answer += intervention.typeIntervention + (intervention.whichIntervention ? ": " + intervention.whichIntervention : "") + ", "
    })
    setIntervention(answer)
  }


  const editar = () => {
    btnactualizar.current.style.visibility = "visible";
    btncancelar.current.style.visibility = "visible";
    btninput.current.className = `${styles.input2}`
    btninput2.current.className = `${styles.input2}`
    btninput3.current.className = `${styles.input2}`
    btninput4.current.className = `${styles.input2}`
    btninput5.current.className = `${styles.input2}`
    btninput6.current.className = `${styles.inputOb}`
    btninput7.current.className = `${styles.input2}`
    btninput8.current.className = `${styles.input2}`
    btninput9.current.className = `${styles.input2}`
    btninput10.current.className = `${styles.input2}`


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

  }

  const cancelar = () => {
    btnactualizar.current.style.visibility = "hidden";
    btncancelar.current.style.visibility = "hidden";
    btninput.current.className = `${styles.input}`
    btninput2.current.className = `${styles.input}`
    btninput3.current.className = `${styles.input}`
    btninput4.current.className = `${styles.input}`
    btninput5.current.className = `${styles.input}`
    btninput6.current.className = `${styles.inputObser}`
    btninput7.current.className = `${styles.input}`
    btninput8.current.className = `${styles.input}`
    btninput9.current.className = `${styles.input}`
    btninput10.current.className = `${styles.input}`


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

  }

  const btnactualizar = useRef(null)
  const btncancelar = useRef(null)
  const btninput = useRef(null)
  const btninput2 = useRef(null)
  const btninput3 = useRef(null)
  const btninput4 = useRef(null)
  const btninput5 = useRef(null)
  const btninput6 = useRef(null)
  const btninput7 = useRef(null)
  const btninput8 = useRef(null)
  const btninput9 = useRef(null)
  const btninput10 = useRef(null)


  const [medicalData, setMedicalData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [disease, setDiseases] = useState(null)
  const [intervention, setIntervention] = useState(null)


  // const [only, setOnly] = useState({medicalData, disease, intervention})

  return (
    <section> {loading ? <p>Cargando información.....</p> : <div className={`${styles.secpad}`}>
      <div className={styles.tarjeta_fondo}>
        <div className={`${styles.desc}`}>
          <div className="row">
            <div className="col-10">
              <p className={styles.desc}>
                <label className={styles.label}>Alergias:</label> <input className={styles.input} defaultValue={medicalData.allergies ? medicalData.noteAllergies : "Ninguna"} ref={btninput} readOnly={true} onChange={(e) => {e.target.value = e.target.value.toUpperCase()}}></input>
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-10">
              <p className={styles.desc}>
                <label className={styles.label}>Enfermedades:</label> <input className={styles.input} defaultValue={medicalData.disease ? medicalData.noteDiseases : "Ninguna"} ref={btninput2} readOnly={true} onChange={(e) => {e.target.value = e.target.value.toUpperCase()}}></input>
              </p></div></div>
          <div className="row">
            <div className="col-10">
              <p className={styles.desc}>
                <label className={styles.label}> Medicamentos permanentes:</label> <input className={styles.input} defaultValue={medicalData.medicine ? medicalData.noteMedicine : "Ninguna"} ref={btninput3} readOnly={true} onChange={(e) => {e.target.value = e.target.value.toUpperCase()}}></input>
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <p className={styles.desc}>
                <label className={styles.label}> Dosis / Tiempo:</label> <input className={styles.input} defaultValue={medicalData.doseTime ? medicalData.doseTime : "N/A"} ref={btninput4} readOnly={true} onChange={(e) => {e.target.value = e.target.value.toUpperCase()}}></input>
              </p></div>
            <div className="col-1">
              <p className={styles.desc}>
                <label className={styles.label}> Especificaciones:</label> <input  className={styles.input} defaultValue={medicalData.specification ? medicalData.specification : "N/A"} ref={btninput5} readOnly={true} onChange={(e) => {e.target.value = e.target.value.toUpperCase()}}></input>
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-10">
              <p className={styles.desc}>
                <label className={styles.label}> Observaciones:</label> <input className={styles.inputObser} defaultValue={medicalData.observations ? medicalData.observations : "N/A"} ref={btninput6} readOnly={true} onChange={(e) => {e.target.value = e.target.value.toUpperCase()}}></input>
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <p className={styles.desc}>
                <strong className={styles.label}>Seguro médico:</strong> <input className={styles.input} defaultValue={medicalData.healthSecure ? medicalData.healthSecure : "N/A"} ref={btninput7} readOnly={true} onChange={(e) => {e.target.value = e.target.value.toUpperCase()}}></input>
              </p></div>
            <div className="col-6">
              <p className={styles.desc}>
                <strong className={styles.label}>Número de carnet:</strong> <input className={styles.input} defaultValue={medicalData.cardNumber ? medicalData.cardNumber : "N/A"} ref={btninput8} readOnly={true}></input>
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <p className={styles.desc}>
                <strong className={styles.label}> Médico particular:</strong> <input className={styles.input} defaultValue={medicalData.privateDoctor ? medicalData.privateDoctor : "N/A"} ref={btninput9} readOnly={true} onChange={(e) => {e.target.value = e.target.value.toUpperCase()}}></input>
              </p></div>
            <div className="col-6">
              <p className={styles.desc}>
                <strong className={styles.label}> Número telefónico:</strong> <input className={styles.input} defaultValue={medicalData.doctorTelephone ? medicalData.doctorTelephone : "N/A"} ref={btninput10} readOnly={true}></input>
              </p>
            </div>
          </div>
          <p className={styles.title}>
            <strong > Datos de salud actual</strong>
          </p>
          <div className="row">
            <div className="col-10">
              <p className={styles.desc}>
                <strong>¿Tienes alguna complicación de salud actualmente?: </strong> {medicalData.interventions.length > 0 ? "Si" : "No"}
              </p></div>
          </div>
          <div className="row">
            <div className="col-10">
              <p className={styles.desc}>
                <strong>Afectaciones de salud: </strong>   {intervention}
              </p></div>
          </div>
          <p className={styles.title}>
            <strong>Datos de salud adicional</strong>
          </p>
          <div className="row">
            <div className="col-10">
              <p className={styles.desc}>
                <strong >¿Tiene o ha tenido alguna intervención de salud?:</strong> {medicalData.diseases.length > 0 ? "Si" : "No"}
              </p></div>
          </div>
          <div className="row">
            <div className="col-10">
              <p className={styles.desc}>
                <strong>Intervenciones de salud:</strong> {disease}
              </p></div>

            <div className={`${styles.icon}`}>
              <button className={styles.button} onClick={editar} >
                <svg width="2.5em" height="2.5em" viewBox="0 0 16 16" className="bi bi-pencil-square" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                  <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                </svg>
              </button>
            </div>
          </div>
          <div className={styles.botones}>
            <button ref={btnactualizar} className={`btn btn-outline-success ${styles.ocultar}`} onClick={actualizar}> Actualizar </button> <button ref={btncancelar} className={`btn btn-outline-danger ${styles.ocultar}`} onClick={cancelar}>Cancelar</button>
          </div>
        </div>
      </div>
    </div>
    }
    </section>

  )
}
