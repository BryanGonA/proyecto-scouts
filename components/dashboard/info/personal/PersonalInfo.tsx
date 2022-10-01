import { NextPage } from "next"
import { useState, Component, useEffect, useRef } from "react";
import DataQuery from './DataQuery'
import styles from "~/styles/dashboard/info/DataQuery.module.scss";
import Swal from "sweetalert2";
import { useRouter } from "next/router";
import withReactContent from "sweetalert2-react-content";
import { useCurrentUser } from "~/hooks/use-current-user";

// Corresponde a la ruta http://.../info/about

export default function PersonalInformation({ Id }: any){
    

    const router = useRouter()
    const { user, isLoading: loadingUser, error: userError } = useCurrentUser()


    const btn_actualizar = useRef(null)
    const btn_cancelar = useRef(null)
    const [loading, setLoading] = useState(true)
    const [usuario, setUsuario] = useState(null)
    const [detalles, setDetalles] = useState(null)
    const [edad, setEdad] = useState(null)
    const [editando, setEditando] = useState(false)

    const MySwal = withReactContent(Swal)

    const [pefil, setPerfil] = useState({ })
    const [details, setDetails] = useState({  })

    const i_name = useRef(null)
    const i_lastName = useRef(null)
    const i_documentType = useRef(null)
    const i_edad = useRef(null)
    const i_document = useRef(null)
    const i_email = useRef(null)
   // const i_homePlace = useRef(null)
    const i_homeAddress = useRef(null)
    const i_phone = useRef(null)
    const i_institute = useRef(null)
    const i_currentCourse = useRef(null)
    const i_calendary = useRef(null)
    const i_timeShift = useRef(null)
    const i_sex = useRef(null)
    const i_weight = useRef(null)
    const i_stature = useRef(null)
    const i_bloodType = useRef(null)
    const i_rh = useRef(null)
    const i_eps = useRef(null)
    const i_attentionSite = useRef(null)

    

    useEffect(() => {
        if(Id){
            obtenerDatosId(Id)
        } else{
            obtenerDatos()
        }
    }, [user]);

    const obtenerDatosId = (id) => {
        
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/users/userDetails/${id}`, {
                mode:'cors',
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
                    setUsuario(data.data)
                    let diferencia_fechas = new Date().getTime() - new Date(data.data.birthDate).getTime()
                    let age = Math.round(diferencia_fechas/(60 * 60 * 24 * 1000 * 365))
                    setEdad(age)   
                    //${usuario.id}
                    setDetalles(data.data.userDetails)
                    setLoading(false)  
                  },)
        
            
          }

    const obtenerDatos = () => {
        if (!loadingUser) {
            obtenerDatosId(user.id)
        }
    }
    
    const actualizarDatosId = async (datos_detalles, datos_usuarios,id) => {
                   
            fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/userdetails/${id}`, {              
            method: 'PUT',
            headers: {
                'Referrer-Policy': 'origin-when-cross-origin',
                'Authorization': "Bearer " + localStorage.getItem("auth_token"),
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': `${process.env.NEXT_PUBLIC_URL}`
            },
            body:JSON.stringify(datos_detalles)
           }).then(res => {
              return res.json()
                 .then(data => {                    
                    if (res.ok) {                          
                        setDetalles(data.data)                                             
                       return Promise.resolve(data)
                    } else {                                   
                        cancelar()                       
                       return Promise.reject(data)
                    }
                 })  
           })
           fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/users/${id}`, {              
            method: 'PUT',
            headers: {
                'Referrer-Policy': 'origin-when-cross-origin',
                'Authorization': "Bearer " + localStorage.getItem("auth_token"),
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': `${process.env.NEXT_PUBLIC_URL}`
            },
            body:JSON.stringify(datos_usuarios)
           }).then(res => {
              return res.json()
                 .then(data => {                    
                    if (res.ok) {   
                        MySwal.fire({
                            icon: 'success',
                            title: 'Datos Actualizados',
                            text: "Los datos se han actualizado satisfactoriamente",
                            confirmButtonColor: '#83DC2D',
                            confirmButtonText: "Aceptar"                    
                        }).then(function (isConfirm) {
                            if (isConfirm) {
                              location.reload();
                            }
                          })                     
                        setDetalles(data.data)                   
                       return Promise.resolve(data)
                    } else {
                        let err=data.message[0]
                        MySwal.fire({
                            icon: 'error',
                            title: 'Error',
                            text: err,
                            confirmButtonColor: '#E71919',
                            confirmButtonText: "Aceptar"
                        
                        }).then(function (isConfirm) {
                            if (isConfirm) {
                              location.reload();
                            }
                          })                   
                        cancelar()
                        //let datos={ name: i_nombre.current.value, lastName: i_apellido.current.value, phoneParent: i_telefono.current.value, relationship: i_parentesco.current.value, email: i_correo.current.value, professional: i_profesion.current.value, company: i_empresa.current.value }
                        //setForm(datos)
                       return Promise.reject(data)
                    }
                 })  
           })
    }


    const actualizarDatos = async (datos_detalles, datos_usuarios) => {
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/profile`, {
           mode: 'cors',
           method: 'GET',
           headers: {
              'Referrer-Policy': 'origin-when-cross-origin',
              'Authorization': "Bearer " + localStorage.getItem("auth_token"),
              'Access-Control-Allow-Origin': `${process.env.NEXT_PUBLIC_URL}`
           },
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
                 
            fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/userdetails/${data['user'].id}`, {              
            method: 'PUT',
            headers: {
                'Referrer-Policy': 'origin-when-cross-origin',
                'Authorization': "Bearer " + localStorage.getItem("auth_token"),
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': `${process.env.NEXT_PUBLIC_URL}`
            },
            body:JSON.stringify(datos_detalles)
           }).then(res => {
              return res.json()
                 .then(data => {                    
                    if (res.ok) {                          
                        setDetalles(data.data)                                             
                       return Promise.resolve(data)
                    } else {                                   
                        cancelar()                       
                       return Promise.reject(data)
                    }
                 })  
           })
           fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/users/${data['user'].id}`, {              
            method: 'PUT',
            headers: {
                'Referrer-Policy': 'origin-when-cross-origin',
                'Authorization': "Bearer " + localStorage.getItem("auth_token"),
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': `${process.env.NEXT_PUBLIC_URL}`
            },
            body:JSON.stringify(datos_usuarios)
           }).then(res => {
              return res.json()
                 .then(data => {                    
                    if (res.ok) {   
                        MySwal.fire({
                            icon: 'success',
                            title: 'Datos Actualizados',
                            text: "Los datos se han actualizado satisfactoriamente",
                            confirmButtonColor: '#83DC2D',
                            confirmButtonText: "Aceptar"                    
                        }).then(function (isConfirm) {
                            if (isConfirm) {
                              location.reload();
                            }
                          })                     
                        setDetalles(data.data)                   
                       return Promise.resolve(data)
                    } else {
                        let err=data.message[0]
                        MySwal.fire({
                            icon: 'error',
                            title: 'Error',
                            text: err,
                            confirmButtonColor: '#E71919',
                            confirmButtonText: "Aceptar"
                        
                        }).then(function (isConfirm) {
                            if (isConfirm) {
                              location.reload();
                            }
                          })                   
                        cancelar()
                        //let datos={ name: i_nombre.current.value, lastName: i_apellido.current.value, phoneParent: i_telefono.current.value, relationship: i_parentesco.current.value, email: i_correo.current.value, professional: i_profesion.current.value, company: i_empresa.current.value }
                        //setForm(datos)
                       return Promise.reject(data)
                    }
                 })  
           })
     })

     
    }

    function editar() {
        setEditando(true)        
        //cambiar_imputs(modo_editar)
        btn_actualizar.current.style.visibility= "visible";
        btn_cancelar.current.style.visibility= "visible";
    }

    function actualizar() {      
        setEditando(false)
        btn_actualizar.current.style.visibility= "hidden";
        btn_cancelar.current.style.visibility= "hidden"; 

        //let datos={ name: i_nombre.current.value, lastName: i_apellido.current.value, phoneParent: i_telefono.current.value, relationship: i_parentesco.current.value, email: i_correo.current.value, professional: i_profesion.current.value, company: i_empresa.current.value }
        //setForm(datos) 
        let datos_detalles = {
            bloodType:i_bloodType.current.value,
            calendary:i_calendary.current.value,
            currentCourse:i_currentCourse.current.value,
            eps:i_eps.current.value,
            homeAddress:i_homeAddress.current.value,
     //       homePlace:i_homePlace.current.value,
            institute:i_institute.current.value,
            phone:i_phone.current.value,
            rh:i_rh.current.value,
            sex:i_sex.current.value,
            stature:Number.parseInt(i_stature.current.value.split(' ')[0]),
            timeShift:i_timeShift.current.value,
            weight:Number.parseInt(i_weight.current.value.split(' ')[0]),
            attentionSite:i_attentionSite.current.value,
        }       
        let datos_usuario = {
            name: i_name.current.value,
            lastName:i_lastName.current.value,
            email: i_email.current.value,
            document:i_document.current.value,
        }
        if(Id){
            actualizarDatosId(datos_detalles, datos_usuario,Id)
        }else{
            actualizarDatos(datos_detalles, datos_usuario)
        }
    }
    function cancelar() {        
        setEditando(false) 
        //let datos={ name: i_nombre.current.value, lastName: i_apellido.current.value, phoneParent: i_telefono.current.value, relationship: i_parentesco.current.value, email: i_correo.current.value, professional: i_profesion.current.value, company: i_empresa.current.value }
        //setForm(datos)      
        
        btn_actualizar.current.style.visibility= "hidden";
        btn_cancelar.current.style.visibility= "hidden";
  
    }
    
    
    return(
        <div className={`${styles.text_data}`}>
        {loading || !usuario ? (
            <div className="row col-12 mt-5 justify-content-center" >
                Cargando Información...                    
            </div>
        ) : (
            <div className={styles.contenedor}>
                <div className={`${styles.container} pl-5`}>
                    <div className=" row col-12 mt-5 justify-content-center" >
                    
                        <DataQuery label='Nombre' data={usuario.name} settings='col-sm-12 col-lg-6 ' editar={editando} reference={i_name} />
                        <DataQuery label='Apellidos' data={usuario.lastName} settings='col-sm-12 col-lg-6' editar={editando} reference={i_lastName}/>
                        <DataQuery label='Tipo documento' data={usuario.documentType} settings='col-sm-12 col-lg-6' reference={i_documentType} tipo={'tipo_documento'} className={styles.label}/>
                        <DataQuery label='Edad' data={`${edad} Años`}  reference={i_edad}settings='col-sm-12 col-lg-6' className={styles.label}/> 

                    </div>


                    <div className="row col-12" >
                        <DataQuery label='Número de documento' data={usuario.document} settings='col-12' reference={i_document} className={styles.label}/>
                        <DataQuery label='Correo electrónico' data={usuario.email} settings='col-12' reference={i_email} className={styles.inputObser} tipo={'correo'}/>
                       {/* <DataQuery label='Lugar de nacimiento' data={detalles.homePlace} settings='col-12' editar={editando} reference={i_homePlace}/> */}
                        <DataQuery label='Dirección de residencia' data={detalles.homeAddress} settings='col-12' editar={editando} reference={i_homeAddress}/>
                        <DataQuery label='Número teléfonico' data={detalles.phone} settings='col-12' editar={editando} reference={i_phone}/>
                        <DataQuery label='Institución educativa' data={detalles.institute} settings='col-12' editar={editando} reference={i_institute}/> 
                    </div>
                    <div className="row col-12" >
                        <DataQuery label='Curso actual' data={detalles.currentCourse} settings='col-sm-12 col-md-4 col-lg-4' editar={editando} reference={i_currentCourse} tipo={'curso_actual'}/>
                        <DataQuery label='Calendario' data={detalles.calendary ?detalles.calendary:'Ninguno'} settings='col-sm-12 col-md-4 col-lg-4' editar={editando} reference={i_calendary} tipo={'calendario'}/>
                        <DataQuery label='Jornada' data={detalles.timeShift} settings='col-sm-12 col-md-4 col-lg-4' editar={editando} reference={i_timeShift} tipo={'jornada'}/>
                        <DataQuery label='Sexo' data={detalles.sex === "M" ? "MASCULINO" : "FEMENINO"} settings='col-sm-12 col-md-6 col-lg-4' editar={editando} reference={i_sex} tipo={'sexo'}/>
                        <DataQuery label='Peso (Kg)' data={detalles.weight ? detalles.weight: ''} settings='col-sm-12 col-md-6 col-lg-4' editar={editando} reference={i_weight} tipo={'numeros'}/>
                        <DataQuery label='Estatura (Cm)' data={detalles.stature? detalles.stature: ''} settings='col-sm-12 col-md-6 col-lg-4' editar={editando} reference={i_stature} tipo={'numeros'}/>
                        <DataQuery label='Tipo Sangre' data={detalles.bloodType} settings='col-sm-12 col-md-6 col-lg-4' editar={editando} reference={i_bloodType} tipo={'tipo_sangre'}/>
                        <DataQuery label='RH' data={detalles.rh} settings='col-sm-12 col-md-6 col-lg-4' editar={editando} reference={i_rh} tipo={'rh'}/>
                        <DataQuery label='EPS' data={detalles.eps} settings='col-sm-12 col-md-6 col-lg-4' editar={editando} reference={i_eps}/> 
                    </div>
                    <div className="row col-12">
                        <DataQuery label='Sitio atención' settings='col-12' data={detalles.attentionSite? detalles.attentionSite : "N/A"} editar={editando} reference={i_attentionSite}/>                        
                    </div>
                    <div className="row col-12 mr-5">
                        <button className={`${styles.editarB}`} onClick={editar}>
                            <svg width="2em" height="2em" viewBox="0 0 16 16" className="bi bi-pencil-square" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                            </svg>
                        </button>                       
                    </div>
                    <div className={styles.contenedor_btns}>
                        <button ref={btn_actualizar} className={`${styles.ocultarB} btn btn-outline-success`} onClick={actualizar}>Actualizar</button>
                        <button ref={btn_cancelar} className={`${styles.ocultarB} btn btn-outline-danger`} onClick={cancelar}>Cancelar</button>
                    </div>
                    
                </div>
            </div>
        )}
    </div>
    )
    
}
