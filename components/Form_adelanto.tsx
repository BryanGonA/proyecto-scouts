
import { useState, Component, useEffect, useRef } from "react";
import styles from "~/styles/jefe/Adelanto.module.scss";
import withReactContent from 'sweetalert2-react-content'
import { useRouter } from 'next/router'

export default function Adelanto({ Id }) {

const Swal = require('sweetalert2')
const MySwal = withReactContent(Swal)
const i_titulo = useRef(null)
const i_fecha = useRef(null)
const i_rama = useRef(null)
const i_jefe = useRef(null)
const i_descripcion = useRef(null)

var nombre
var ramas=[]

var createDate
var leader
var description
const [id, setId]=useState(Id)
const [name, setName]=useState("")
var updateDate=new Date()
const router = useRouter()

useEffect(() => {
   consultar(Id)
}, [])

const consultar = (userid) =>{

fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/users/${userid}`, {
   //mode: 'cors',
   method: 'GET',
   headers: {
      'Referrer-Policy': 'origin-when-cross-origin',
      'Authorization': "Bearer " + localStorage.getItem("auth_token"),
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': `${process.env.NEXT_PUBLIC_URL}`
   },

}).then(res => {
   return res.json()
      .then(data => {
         if (res.ok) {
            setName(data.data.name+" "+data.data.lastName)
            return Promise.resolve(data)

         } else {
            return Promise.reject(data)
         }
      }).then(data =>{
         setLoading(false)
      })
   }
)
}



const agregar_plan = async (datos) =>{
   let crear_avance={updateDate:updateDate,advances:[datos]}
      fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/users/advancePlan/${Id}`, {
         //mode: 'cors',
         method: 'POST',
         headers: {
            'Referrer-Policy': 'origin-when-cross-origin',
            'Authorization': "Bearer " + localStorage.getItem("auth_token"),
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': `${process.env.NEXT_PUBLIC_URL}`
         },
         body: JSON.stringify(crear_avance)
      
      }).then(res => {
         return res.json()
            .then(data => {

               if (res.ok) {
                 
                  return Promise.resolve(data)

               } else {
                  agregar_adelanto(datos) 
                  return Promise.reject(data)
               }
            }).then(data => {
               MySwal.fire({
                  icon: 'success',
                  title: 'Adelanto Agregado',
                  text: 'Adelanto Agregado exitosamente',
                  confirmButtonColor: '#31B411',
                  confirmButtonText: "Continuar",
                    
                })
            })
         
         
         
         
         })
}
const agregar_adelanto =async (datos) =>{
   fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/users/advance/${Id}`, {
      //mode: 'cors',
      method: 'POST',
      headers: {
         'Referrer-Policy': 'origin-when-cross-origin',
         'Authorization': "Bearer " + localStorage.getItem("auth_token"),
         'Content-Type': 'application/json',
         'Access-Control-Allow-Origin': `${process.env.NEXT_PUBLIC_URL}`
      },
      body: JSON.stringify(datos)
   
   }).then(res => {
      return res.json()
         .then(data => {

            if (res.ok) {
               return Promise.resolve(data)

            } else {
   
               return Promise.reject(data)
            }
         }).then(data => {
            MySwal.fire({
               icon: 'success',
               title: 'Adelanto Agregado',
               text: 'Adelanto Agregado exitosamente',
               confirmButtonColor: '#31B411',
               confirmButtonText: "Continuar",
                 
             }).then((result) => {
               if (result.isConfirmed) {
                   location.replace(`/dashboard/jefe-rama/adelantos/${Id}`)
               }
         })
      }
   )
}
   ).catch(error => {
      MySwal.fire({
          icon: 'error',
          title: <p>Hay errores</p>,
          text: "Verifique los campos que haya llenado todos los",
          showConfirmButton: false,
          showDenyButton: true,
          denyButtonText: `Cerrar`,
      })
  })
}


function recuperar_datos(){


   let datos = {
      name: i_titulo.current.value,
      createDate: i_fecha.current.value,
      leader: i_jefe.current.value,
      description: i_descripcion.current.value
   }
   
   agregar_plan(datos)
}


  


const [loading, setLoading] = useState(true)



   return (
<section> {loading ? <p>Cargando información.....</p> :

    <div className={styles.margen}>

      <div>
   <p className={styles.title}>Plan de adelanto {name}</p>
      </div>

      <div className={styles.centrar}>
       <div className={styles.container}>
          <div className={`${styles.subtitle_area} row`}>
             <p className={`${styles.subtitle} col-12`}>Grupo Scout centinelas 113</p>         
          </div>

            <div className="row">
                  <div className="col-lg-3 col-sm-6">
                     <p><strong className={styles.label}>Título </strong></p>
                  </div>
                  <div className="col-lg-3 col-sm-6">
                     <p><input maxLength={30}   ref={i_titulo} className={styles.input_generico}  type="text"  onChange={(e) => {e.target.value = e.target.value.toUpperCase()}}></input></p>
                  </div>
                  <div className="col-lg-3 col-sm-6">
                     <p><strong className={styles.label}>Fecha </strong></p>
                  </div>
                  <div className="col-lg-3 col-sm-6">
                     <p><input  ref={i_fecha} className={styles.input_generico}  type="Date"  onChange={(e) => {e.target.value = e.target.value.toUpperCase()}}></input></p>
                  </div>
            </div>
             <div className="row">
             <div className="col-lg-3 col-sm-6">
                     <p><strong className={styles.label}>Rama </strong></p>

                  </div>
                  <div className="col-lg-3 col-sm-6">
                  <p>
                     <select  ref={i_rama} className={styles.input_generico} >
                        <option value="CACHORROS">CACHORROS</option>
                        <option value="LOBATOS">LOBATOS</option>
                        <option value="WEBELOS">WEBELOS</option>
                        <option value="SCOUTS">SCOUTS</option>
                        <option value="ROVERS">ROVERS</option>
                     </select>
                  </p>
                  </div>
                  <div className="col-lg-3 col-sm-6">
                     <p><strong className={styles.label}>Jefe </strong></p>
                  </div>
                  <div className="col-lg-3 col-sm-6">
                     <p><input maxLength={30} ref={i_jefe} className={styles.input_generico}  type="text"  onChange={(e) => {e.target.value = e.target.value.toUpperCase()}}></input></p>
                  </div>
             </div>

             <div className="row">
                   <div className={"col-lg-3"}>
                     <p><strong className={styles.label}>Descripción  </strong></p>
                  </div>
                  <div className={"col-lg-9"}>
                     <p><textarea maxLength={250} ref={i_descripcion} className={styles.input_descripcion}   onChange={(e) => {e.target.value = e.target.value.toUpperCase()}}></textarea></p>
                  </div>
             </div>

             <div className={styles.contenedor_btns}>
                  <button className={`${styles.b} btn btn-outline-success`} type="submit" value="Submit" onClick={recuperar_datos}>Agregar adelanto</button>
                 <a href={`/dashboard/jefe-rama/adelantos/${Id}`}  > <button   className={`${styles.b} btn btn-outline-danger`} >Cancelar adelanto</button></a>
                    </div>
           
         </div>
         
      </div>
      
    </div>}
    </section>

 );
}