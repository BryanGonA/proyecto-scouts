import styles from "~/styles/dashboard/info/Parents.module.scss";
import { useState, Component, useEffect, useRef } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useCurrentUser } from "~/hooks/use-current-user";


export default function Parent({ id_componente, title, name, lastName, phoneParent, relationship, email, professional, company, userId, parents }) {

   var nameOrigi = name

   var titleOrigi = title
   const btn_actualizar = useRef(null)
   const btn_cancelar = useRef(null)
   const [form, setForm] = useState({ name, lastName, phoneParent, relationship, email, professional, company })
   const [nombrecito, setNombrecito] = useState(name)
   const [clase, setClase] = useState("")
   const [editando, setEditando] = useState(false)
   const MySwal = withReactContent(Swal)
   const i_nombre = useRef(null)
   const i_apellido = useRef(null)
   const i_telefono = useRef(null)
   const i_parentesco = useRef(null)
   const i_correo = useRef(null)
   const i_profesion = useRef(null)
   const i_empresa = useRef(null)

   const { user, isLoading: loadingUser, error: userError } = useCurrentUser()


   var modo_editar = "editar"
   var modo_mostrar = "mostrar"

   useEffect(() => {


   }, [form])


   const actualizarid = async (datos, userid) => {
      fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/users/editParents/${userid}`, {
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
         return res.json()
            .then(data => {

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
         setForm({ name: data.data.name, lastName: data.data.lastName, phoneParent: data.data.phoneParent, relationship: data.data.relationship, email: data.data.email, professional: data.data.professional, company: data.data.company })
      }).catch(error => {
         let err = error.message[0]
         MySwal.fire({
            icon: 'error',
            title: 'Error',
            text: err,
            confirmButtonColor: '#E71919',
            confirmButtonText: "Aceptar"

         })
         cancelar()
         let datos = { name: i_nombre.current.value, lastName: i_apellido.current.value, phoneParent: i_telefono.current.value, relationship: i_parentesco.current.value, email: i_correo.current.value, professional: i_profesion.current.value, company: i_empresa.current.value }
         setForm(datos)
      })
   }

   const actualizarfamiliares = async (datos) => {
      if (!loadingUser) {
         actualizarid(datos, user.id)
      }
   }

      function cambiar_imputs(modo) {
         if (modo === "editar") {
            i_nombre.current.disabled = false
            i_nombre.current.className = `${styles.editarI}`
            i_apellido.current.disabled = false
            i_apellido.current.className = `${styles.editarI}`
            i_correo.current.disabled = false
            i_correo.current.className = `${styles.editarI}`
            i_profesion.current.disabled = false
            i_profesion.current.className = `${styles.editarI}`
            i_empresa.current.disabled = false
            i_empresa.current.className = `${styles.editarI}`
            i_telefono.current.disabled = false
            i_telefono.current.className = `${styles.editarI}`
            i_parentesco.current.disabled = false
            i_parentesco.current.className = `${styles.editarI}`
         }
         if (modo === "mostrar") {
            i_nombre.current.disabled = true
            i_nombre.current.className = `${styles.mostrar}`
            i_apellido.current.disabled = true
            i_apellido.current.className = `${styles.mostrar}`
            i_correo.current.disabled = true
            i_correo.current.className = `${styles.mostrar}`
            i_profesion.current.disabled = true
            i_profesion.current.className = `${styles.mostrar}`
            i_empresa.current.disabled = true
            i_empresa.current.className = `${styles.mostrar}`
            i_telefono.current.disabled = true
            i_telefono.current.className = `${styles.mostrar}`
            i_parentesco.current.disabled = true
            i_parentesco.current.className = `${styles.mostrar}`
         }
      }

      //className=`${styles.editarI}` element.className=`${styles.editarI}`
      function editar() {
         setEditando(true)
         //editarEls(ids)
         cambiar_imputs(modo_editar)



         let buton = btn_actualizar
         btn_actualizar.current.style.visibility = "visible";
         btn_cancelar.current.style.visibility = "visible";



      }

      function actualizar() {

         cambiar_imputs(modo_mostrar)
         setEditando(false)
         btn_actualizar.current.style.visibility = "hidden";
         btn_cancelar.current.style.visibility = "hidden";
         let datos = parents;
         datos[id_componente] = { ...datos[id_componente], name: i_nombre.current.value, lastName: i_apellido.current.value, phoneParent: i_telefono.current.value, relationship: i_parentesco.current.value, email: i_correo.current.value, professional: i_profesion.current.value, company: i_empresa.current.value }
         setForm(datos)

         if (userId) {
            actualizarid(datos, userId);
         }
         else {
            actualizarfamiliares(datos)
         }


      }

      function cancelar() {
         //modificar de nuevo los inputs
         cambiar_imputs(modo_mostrar)
         setEditando(false)

         let datos = { name: i_nombre.current.value, lastName: i_apellido.current.value, phoneParent: i_telefono.current.value, relationship: i_parentesco.current.value, email: i_correo.current.value, professional: i_profesion.current.value, company: i_empresa.current.value }
         setForm(datos)
         //ocultar de nuevo los botones
         btn_actualizar.current.style.visibility = "hidden";
         btn_cancelar.current.style.visibility = "hidden";
         i_parentesco.current.value = relationship
         i_nombre.current.value = form.name
         i_apellido.current.value = form.lastName
         i_correo.current.value = form.email
         i_profesion.current.value = form.professional
         i_empresa.current.value = form.company
         i_telefono.current.value = form.phoneParent

      }


      return (
      <div className={styles.contenedor}>
         <div className={styles.container}>
            <div className={"row"}>
               <div className={`${styles.title} col-12`}>{title}
               </div>
            </div>
            <div className="row">
               <div className="col-lg-6">
                  <p><strong className={styles.label1}>Nombres: </strong> <input id={`${id_componente}nombre`} ref={i_nombre} type="text" className={styles.mostrar} disabled defaultValue={name} onChange={(e) => {e.target.value = e.target.value.toUpperCase()}}></input></p>

               </div>
               <div className={"col-lg-6"}>
                  <p><strong className={styles.label1}>Apellido: </strong><input id={`${id_componente}apellido`} ref={i_apellido} type="text" className={styles.mostrar} disabled defaultValue={lastName} onChange={(e) => {e.target.value = e.target.value.toUpperCase()}}></input></p>
               </div>
            </div>
            <div className={"row"}>
               <div className={"col-lg-6"}>
                  <p><strong className={styles.label1}>Correo: </strong> <input id={`${id_componente}correo`} ref={i_correo} className={styles.mostrar} disabled defaultValue={email} ></input></p>
               </div>
            </div>
            <div className={"row"}>
               <div className={"col-lg-6 col-sm-12"}>
                  <p><strong className={styles.label1}>Profesión: </strong> <input id={`${id_componente}profe`} ref={i_profesion} className={styles.mostrar} disabled defaultValue={professional} onChange={(e) => {e.target.value = e.target.value.toUpperCase()}}></input></p>
               </div>
               <div className={"col-lg-6 col-sm-12"}>
                  <p><strong className={styles.label1}>Empresa: </strong> <input id={`${id_componente}empresa`} ref={i_empresa} className={styles.mostrar} disabled defaultValue={company} ></input></p>
               </div>
            </div>
            <div className={"row"}>
               <div className={"col-lg-6 col-sm-12"}>
                  <p><strong className={styles.label1}>Teléfono: </strong> <input id={`${id_componente}telefono`} ref={i_telefono} className={styles.mostrar} type="number" max={9999999999} disabled defaultValue={phoneParent}></input></p>
               </div>
               <div className={"col-lg-6 col-sm-12"}>
                  <p><strong className={styles.label1}>Parentesco: </strong> 
                  <select  ref={i_parentesco} className={styles.mostrar} disabled defaultValue={relationship}>
                  <option value="PADRE">PADRE</option>
                  <option value="MADRE">MADRE</option>
                  <option value="ABUELO">ABUELO/ABUELA</option>
                  <option value="TIO">TÍO/TÍA</option>
                  <option value="ACUDIENTE">ACUDIENTE</option>
                  </select>
                  </p>
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