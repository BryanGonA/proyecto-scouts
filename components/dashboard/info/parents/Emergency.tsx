import styles from "~/styles/dashboard/info/Parents.module.scss";
import { useState, Component, useEffect, useRef } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useCurrentUser } from "~/hooks/use-current-user";


export default function Emergency({ title, nameOneEmergency, nameTwoEmergency, telephoneOneEmergency, telephoneTwoEmergency, userId }) {

   const { user, isLoading: loadingUser, error: userError } = useCurrentUser()
   const MySwal = withReactContent(Swal)
   const i_name1 = useRef(null)
   const i_name2 = useRef(null)
   const i_phone1 = useRef(null)
   const i_phone2 = useRef(null)
   const btn_actualizar = useRef(null)
   const btn_cancelar = useRef(null)
   const [form, setForm] = useState({ nameOneEmergency, nameTwoEmergency, telephoneOneEmergency, telephoneTwoEmergency })
   var modo_editar = "editar"
   var modo_mostrar = "mostrar"

   function cambiar_inputs(modo) {
      if (modo === "editar") {
         i_name1.current.disabled = false
         i_name1.current.className = `${styles.editarI}`
         i_name2.current.disabled = false
         i_name2.current.className = `${styles.editarI}`
         i_phone1.current.disabled = false
         i_phone1.current.className = `${styles.editarI}`
         i_phone2.current.disabled = false
         i_phone2.current.className = `${styles.editarI}`

      }
      if (modo === "mostrar") {
         i_name1.current.disabled = true
         i_name1.current.className = `${styles.mostrar}`
         i_name2.current.disabled = true
         i_name2.current.className = `${styles.mostrar}`
         i_phone1.current.disabled = true
         i_phone1.current.className = `${styles.mostrar}`
         i_phone2.current.disabled = true
         i_phone2.current.className = `${styles.mostrar}`
      }
   }

   const actualizarEmergencia = async (datos) => {
      if (!loadingUser) {
         consultar(user.id, datos)
      }
   }

   function consultar(id, datos) {
      fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/users/editDatahealth/${id}`, {
         //mode: 'cors',
         method: 'PUT',
         headers: {
            'Referrer-Policy': 'origin-when-cross-origin',
            'Authorization': "Bearer " + localStorage.getItem("auth_token"),
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': `${process.env.NEXT_PUBLIC_URL}`
         },
         body: JSON.stringify(datos)
      }).then(res => {
         return res.json().then(data => {
            if (res.ok) {
               return Promise.resolve(data)
            } else {
               return Promise.reject(data)
            }
         })
      }).then(data => {
         MySwal.fire({
            icon: 'success',
            title: 'Datos Actualizados',
            text: "Los datos se han actualizado satisfactoriamente",
            confirmButtonColor: '#83DC2D',
            confirmButtonText: "Aceptar"

         })
         setForm({
            nameOneEmergency: data.data.nameOneEmergency,
            nameTwoEmergency: data.data.nameTwoEmergency,
            telephoneOneEmergency: data.data.telephoneOneEmergency,
            telephoneTwoEmergency: data.data.telephoneTwoEmergency
         })
      }).catch(error => {
         MySwal.fire({
            icon: 'error',
            title: 'Error',
            text: "Error al actualizar los datos",
            confirmButtonColor: '#E71919',
            confirmButtonText: "Aceptar"

         })
         cancelar()
         let datos = {
            nameOneEmergency: i_name1.current.value,
            nameTwoEmergency: i_name2.current.value,
            telephoneOneEmergency: i_phone1.current.value,
            telephoneTwoEmergency: i_phone2.current.value
         }
         setForm(datos)
      })
   }

   function editar() {
      //setEditando(true)
      //editarEls(ids)
      cambiar_inputs(modo_editar)
      btn_actualizar.current.style.visibility = "visible";
      btn_cancelar.current.style.visibility = "visible";



   }
   function actualizar() {
      cambiar_inputs(modo_mostrar)
      //setEditando(false)
      btn_actualizar.current.style.visibility = "hidden";
      btn_cancelar.current.style.visibility = "hidden";
      let datos = {
         nameOneEmergency: i_name1.current.value,
         nameTwoEmergency: i_name2.current.value,
         telephoneOneEmergency: i_phone1.current.value,
         telephoneTwoEmergency: i_phone2.current.value
      }
      setForm(datos)
      if (userId) {
         consultar(userId, datos)
      } else {
         actualizarEmergencia(datos)
      }

      //window.location.reload();

   }

   function cancelar() {
      cambiar_inputs(modo_mostrar)
      //setEditando(false)


      //ocultar de nuevo los botones
      btn_actualizar.current.style.visibility = "hidden";
      btn_cancelar.current.style.visibility = "hidden";

      i_name1.current.value = form.nameOneEmergency
      i_name2.current.value = form.nameTwoEmergency
      i_phone1.current.value = form.telephoneOneEmergency
      i_phone2.current.value = form.telephoneTwoEmergency

   }



   return (
      <div className={styles.contenedor}>
         <div className={styles.container}>
            <div className="row">
               <div className={`${styles.titleE} col`}>{title}</div>
            </div>
            <div className="row">
               <div className="col-lg-6 col-sm-12">
                  <p><strong>Nombre: </strong><input ref={i_name1} type="text" className={styles.mostrar} disabled defaultValue={nameOneEmergency} onChange={(e) => { e.target.value = e.target.value.toUpperCase() }}></input></p>
               </div>
               <div className="col-lg-6 col-sm-12">
                  <p><strong>Teléfono: </strong><input ref={i_phone1} type="text" className={styles.mostrar} disabled defaultValue={telephoneOneEmergency}></input></p>
               </div>
            </div>
            <div className="row">
               <div className="col-lg-6 col-sm-12">
                  <p><strong>Nombre: </strong><input ref={i_name2} type="text" className={styles.mostrar} disabled defaultValue={nameTwoEmergency} onChange={(e) => { e.target.value = e.target.value.toUpperCase() }}></input></p>

               </div>
               <div className="col-lg-6 col-sm-12">
                  <p><strong>Teléfono: </strong><input ref={i_phone2} type="text" className={styles.mostrar} disabled defaultValue={telephoneTwoEmergency}></input></p>

               </div>
            </div>

            <button className={styles.editarB} onClick={editar}>
               <svg width="2em" height="2em" viewBox="0 0 16 16" className="bi bi-pencil-square" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                  <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
               </svg>
            </button>

            <div className={styles.contenedor_btns}>
               <button ref={btn_actualizar} className={`${styles.ocultarB} btn btn-outline-success`} onClick={actualizar}>Actualizar</button>
               <button ref={btn_cancelar} className={`${styles.ocultarB} btn btn-outline-danger`} onClick={cancelar}>Cancelar</button>
            </div>
         </div>
      </div>
   );
}

