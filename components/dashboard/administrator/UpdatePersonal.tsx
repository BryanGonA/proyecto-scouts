import { MDBDataTable } from 'mdbreact';
import { useEffect, useRef, useState } from "react";
import withReactContent from 'sweetalert2-react-content'
import styles from "~/styles/dashboard/administrator/AddPerson.module.scss";


export default function ActualizarPersonal({ idPersonal, edit }: any) {

    const [values, setValues] = useState(null)


    const photo = useRef(null);
    const image = useRef(null);
    //const img = users.get
    const method = () => {
        if (photo.current.files[0]) {
            var filesize = photo.current.files[0].size;
            if (filesize > 10000000) {
                alert('El archivo no debe superar los 10MB');
                photo.current.value = '';
                photo.current.files[0].name = '';
                return
            }
            //implementacion de el script para el redimencionado de las imagenes ------------------------------------------------------------------------------------------------

                     
            var imageFile = photo.current.files[0];
            var reader = new FileReader();
            reader.onload = function (e) {
              var img = document.createElement("img");
              img.onload = function (event) {
                // Crear dinámicamente un elemento del lienzo
                var canvas = document.createElement("canvas");

                //var canvas = document.getElementById("canvas");
                var ctx = canvas.getContext("2d");

                // Redimensionamiento real
                imageFile = ctx.drawImage(img, 0, 0, 300, 300);

                // Mostrar la imagen redimensionada en el elemento de vista previa.
                var dataurl = canvas.toDataURL(imageFile.type);
                //document.getElementById("preview").src = dataurl;
                
                image.current.src = e.target.result;
            };
             image.current.src = e.target.result;
            
          }
          reader.readAsDataURL(imageFile);
          setValues({...values, photo: imageFile})
          //setValues({...values, photo: i})

        // Fin del Script para el redimencionado de las imagenes. --------------------------------------------------------------------------------------------------------------
        }
    };



    const Swal = require('sweetalert2')
    const MySwal = withReactContent(Swal)


    const btnName = useRef(null)
    const btnApellido = useRef(null)
    const btnCorreo = useRef(null)
    const btnCedula = useRef(null)
    const btnCelular = useRef(null)
    const btnDireccion = useRef(null)
    const btnNivel = useRef(null)
    const btnCargo = useRef(null)
    const btnRama = useRef(null)
    const btnTipoSangre = useRef(null)
    const btnRh = useRef(null)
    const btnEps = useRef(null)
    const btnSitio = useRef(null)

    const agregar = useRef(null)
    const cancelar = useRef(null)

    const [Datos, setDatos] = useState({ name: '', lastName: '', email: '', document: '', homeAddress: '', attentionSite: '' })
    const [Personal, setPersonal] = useState({phone: '', level: '', charge: '', bloodType: '', eps: '', rh: '' })
    const [Rama, setRama] = useState({nameBranch: ''})
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        if (idPersonal) {
            obtenerid(idPersonal)
            btnName.current.readOnly = true
            btnApellido.current.readOnly = true
            btnCorreo.current.readOnly = true
            btnCedula.current.readOnly = true
            btnCelular.current.readOnly = true
            btnDireccion.current.readOnly = true
            btnNivel.current.readOnly = true
            btnCargo.current.readOnly = true
            btnRama.current.readOnly = true
            btnTipoSangre.current.readOnly = true
            btnRh.current.readOnly = true
            btnEps.current.readOnly = true
            btnSitio.current.readOnly = true


            agregar.current.style.visibility = "hidden";
            cancelar.current.style.visibility = "hidden";


            if (edit) {
                actualizar();
                btnName.current.readOnly = false
                btnApellido.current.readOnly = false
                btnCorreo.current.readOnly = false
                btnCedula.current.readOnly = false
                btnCelular.current.readOnly = false
                btnDireccion.current.readOnly = false
                btnEps.current.readOnly = false
                btnSitio.current.readOnly = false

                agregar.current.style.visibility = "visible";
                cancelar.current.style.visibility = "visible";

                btnNivel.current.disabled = false
                btnCargo.current.disabled = false
                btnRama.current.disabled = false
                btnTipoSangre.current.disabled = false
                btnRh.current.disabled = false
                photo.current.disabled = false


            }
        }
    }, [])

    const obtenerid = (userid: any) => {
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/users/${userid}`, {
            method: 'GET',
            headers: {
                'Referrer-Policy': 'origin-when-cross-origin',
                'Authorization': "Bearer " + localStorage.getItem("auth_token"),
                'Access-Control-Allow-Origin': `${process.env.NEXT_PUBLIC_URL}`
            },
        }).then(async (res) => {
            const data = await res.json();
            if (res.ok) {
                return Promise.resolve(data);
            } else {
                return Promise.reject(data);
            }
        }).then(data => {

            setDatos(data.data)
           
            setPersonal(data.data.personalData)
            setPersonal(data.data.personalDetails)
            setRama(data.data.branches)
            setLoading(false)

        }).catch(error => {

        })
    }

       const actualizar = () =>{
        let account = {
            name: btnName.current.value,
            lastName: btnApellido.current.value,
            email: btnCorreo.current.value,
            documentType: "CC",
            document: btnCedula.current.value,
            birthDate: new Date(),
            homeAddress: btnDireccion.current.value,
            attentionSite: btnSitio.current.value,

            personalDetails: {
                phone: btnCelular.current.value,
                level: btnNivel.current.value,
                charge: btnCargo.current.value,
                bloodType: btnTipoSangre.current.value,
                rh: btnRh.current.value,
                eps: btnEps.current.value,
            },
            branches: {
                nameBranch: btnRama.current.value,
            }
        }
        
        
        actualizarid(account, idPersonal);

    }

    /*const actualizarid = (account, userid) => {
    //const actualizarid = (account: { name: any; lastName: any; email: any; documentType: string; document: any; birthDate: Date; homeAddress: any; attentionSite: any; personalDetails: { phone: any; level: any; charge: any; bloodType: any; rh: any; eps: any; }; branches: { nameBranch: any; }; }, userId: any) => {
        //fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/users/${userid}`, {
                    
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/users/${userid}`, {
          method: "PUT",
          headers: {
            'Content-Type': "application/json",
            'Authorization': "Bearer " + localStorage.getItem("auth_token"),
            //'Access-Control-Allow-Origin': `${process.env.NEXT_PUBLIC_URL}`,
          },
          body: JSON.stringify(account),
        })
          .then(async (res) => {
            const data = await res.json();
            if (res.ok) {
              return Promise.resolve(data);
            } else {
              return Promise.reject(data);
            }
          })
          .then(data => {
            

            MySwal.fire({
              icon: "success",
              title: "Datos Actializados!",
              text: "Los datos fueron actualizados correctamente",
              confirmButtonColor: "#31B411",
              confirmButtonText: "Continuar",
            }).then(function (isConfirm) {
              if (isConfirm) {
                window.location.href = "/dashboard/jefe-grupo/personal";
              }
            });
            }).catch((error) => {
            console.log(error);
            MySwal.fire({
              icon: "error",
              title: "Oops...",
              text: "¡Algo salio mal intentando actualizar los datos!     Por favor intente de nuevo",
              confirmButtonColor: "#31B411",
              confirmButtonText: "Continuar",
            });
          });
    }*/

    const actualizarid = (account: { name: any; lastName: any; email: any; documentType: string; document: any; birthDate: Date; homeAddress: any; attentionSite: any; personalDetails: { phone: any; level: any; charge: any; bloodType: any; rh: any; eps: any; }; branches: { nameBranch: any; }; }, userid: string) => {

         const actualizar2 = async () => {
    
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/users/personal/${userid}`, {
                method: "PUT",
                headers: {
                    'Content-Type': "application/json",
                    'Authorization': "Bearer " + localStorage.getItem("auth_token"),
                    'Access-Control-Allow-Origin': `${process.env.NEXT_PUBLIC_URL}`,
                },
                body: JSON.stringify(account),
            })
            const data = await res.json();
            if (res.ok) {
                return Promise.resolve(data);
            } else {
                return Promise.reject(data);
            }
        }
        actualizar2().then(data => {
            
        }).catch((error) => {
            console.log(error);
        });

        const actualizar = async () => {
            const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "/api/users/" + userid, {
                mode: 'cors',
                method: 'PUT',
                headers: {
                    'Content-Type': "application/json",
                    'Authorization': "Bearer " + localStorage.getItem("auth_token"),
                    'Access-Control-Allow-Origin': `${process.env.NEXT_PUBLIC_URL}`,

                },
                body: JSON.stringify(account),
            })
            const data = await res.json();
            if (res.ok) {
                return Promise.resolve(data);
            } else {
                return Promise.reject(data);
            }
        }
        actualizar().then(data => {
            MySwal.fire({
                icon: "success",
                title: "Datos Actializados!",
                text: "Los datos fueron actualizados correctamente",
                confirmButtonColor: "#31B411",
                confirmButtonText: "Continuar",
            }).then(function (isConfirm) {
                if (isConfirm) {
                    window.location.href = "/dashboard/jefe-grupo/personal";
                }
            });
        }).catch((error) => {
            console.log(error);
                  
        });
    }



    return (
        <>
            <div className={`${styles.titulo} p-5`}><strong><h1>Agregar personal administrativo Grupo Scout Centinelas 113</h1></strong></div>

            <section> 

                <div className="container">
                    <div className={styles.tarjeta_fondo}>
                        <div className={`container-fluid ${styles.desc}`}>
                            <button type="button" className="btn btn-secondary"><a className={`${styles.letra}`} href={`/dashboard/jefe-grupo/personal/`}>Regresar</a></button>
                            <div className="text-center">
                                <div className={styles.photo}>
                                    <img className={styles.image} src="/img/profile-picture.png" ref={image} />
                                </div>
                                <div className="row">
                                    <div className={styles.div_file} >
                                        <p className={styles.text}>*Seleccionar foto</p><input type="file" disabled id="btn_upload" accept="image/jpeg,image/png" className={styles.btn_upload} ref={photo} onChange={method} />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xs-6 col-md-4">
                                    <label>Nombre:</label>
                                </div>
                                <div className="col-xs-6 col-md-4">
                                    <label>Apellido:</label>
                                </div>
                                <div className="col-xs-6 col-md-4">
                                    <label >Correo electrónico:</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xs-6 col-md-4">
                                    <input className={styles.input} ref={btnName} defaultValue={Datos.name} onChange={(e) => { e.target.value = e.target.value.toUpperCase() }} ></input>
                                </div>
                                <div className="col-xs-6 col-md-4">
                                    <input className={styles.input} ref={btnApellido} defaultValue={Datos.lastName} onChange={(e) => { e.target.value = e.target.value.toUpperCase() }}></input>
                                </div>
                                <div className="col-xs-6 col-md-4">
                                    <input className={styles.input} ref={btnCorreo} defaultValue={Datos.email} onChange={(e) => { e.target.value = e.target.value.toUpperCase() }}></input>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xs-6 col-md-4">
                                    <label>Confirmar correo:</label>
                                </div>
                                <div className="col-xs-6 col-md-4">
                                    <label>Cédula:</label>
                                </div>
                                <div className="col-xs-6 col-md-4">
                                    <label>Teléfono:</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xs-6 col-md-4">
                                    <input className={styles.input} defaultValue={Datos.email} onChange={(e) => { e.target.value = e.target.value.toUpperCase() }}></input>
                                </div>
                                <div className="col-xs-6 col-md-4">
                                    <input className={styles.input} ref={btnCedula} defaultValue={Datos.document} onChange={(e) => { e.target.value = e.target.value.toUpperCase() }}></input>
                                </div>
                                <div className="col-xs-6 col-md-4">
                                    <input className={styles.input} ref={btnCelular} defaultValue={Personal.phone} onChange={(e) => { e.target.value = e.target.value.toUpperCase() }}></input>
                                </div>

                            </div>
                            <div className="row">
                                <div className="col-xs-6 col-md-4">
                                    <label>Dirección:</label>
                                </div>
                                <div className="col-xs-6 col-md-4">
                                    <label>Nivel adistramiento:</label>
                                </div>
                                <div className="col-xs-6 col-md-4">
                                    <label>Cargo:</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xs-6 col-md-4">
                                    <input className={styles.input} ref={btnDireccion} defaultValue={Datos.homeAddress} onChange={(e) => { e.target.value = e.target.value.toUpperCase() }}></input>
                                </div>
                                <div className="col-xs-6 col-md-4">

                                    <select className={styles.input2} disabled ref={btnNivel} defaultValue={Personal.level}>
                                        <option value="0">NIVEL 0</option>
                                        <option value="1">NIVEL 1</option>
                                        <option value="2">NIVEL 2</option>
                                        <option value="3">NIVEL 3</option>
                                        <option value="4">NIVEL 4</option>
                                        <option value="5">NIVEL 5</option>
                                    </select>
                                </div>
                                <div className="col-xs-6 col-md-4">

                                    <select className={styles.input2} disabled ref={btnCargo} defaultValue={Personal.charge}>
                                        <option value="SCOUT">SCOUT</option>
                                        <option value="TESORERA">TESORERA</option>
                                        <option value="JEFE DE RAMA">JEFE DE RAMA</option>
                                        <option value="JEFE DE GRUPO">JEFE DE GRUPO</option>

                                    </select>
                                </div>
                            </div>

                            <div className="row">

                                <div className="col-xs-6 col-md-4">
                                    <label>Rama:</label>
                                </div>
                                <div className="col-xs-6 col-md-4">
                                    <label>Tipo de sangre</label>
                                </div>
                                <div className="col-xs-6 col-md-4">
                                    <label>RH:</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xs-6 col-md-4">

                                    <select className={styles.input2} disabled ref={btnRama} defaultValue={Rama.nameBranch} >
                                        <option value="TEMPORAL">TEMPORAL</option>
                                        <option value="CACHORROS">CACHORROS</option>
                                        <option value="LOBATOS">LOBATOS</option>
                                        <option value="WEBELOS">WEBELOS</option>
                                        <option value="SCOUTS">SCOUTS</option>
                                        <option value="ROVERS">ROVERS</option>
                                    </select>
                                </div>
                                <div className="col-xs-6 col-md-4">

                                    <select className={styles.input2} disabled ref={btnTipoSangre} defaultValue={Personal.bloodType}>
                                        <option value="A">A</option>
                                        <option value="O">O</option>
                                        <option value="B">B</option>
                                        <option value="AB">AB</option>

                                    </select>
                                </div>
                                <div className="col-xs-6 col-md-4">
                                    <select className={styles.input2} disabled ref={btnRh} defaultValue={Personal.rh}>
                                        <option value="POSITIVO">POSITIVO</option>
                                        <option value="NEGATIVO">NEGATIVO</option>
                                    </select>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xs-6 col-md-4">
                                    <label>EPS:</label>
                                </div>
                                <div className="col-xs-6 col-md-4">
                                    <label>Sitio de atención:</label>
                                </div>
                            </div>
                            <div className="row">
                               
                                <div className="col-xs-6 col-md-4">
                                    <input className={styles.input} ref={btnEps} defaultValue={Personal.eps} onChange={(e) => { e.target.value = e.target.value.toUpperCase() }}></input>
                                </div>
                                <div className="col-xs-6 col-md-4">
                                    <input className={styles.input} ref={btnSitio} defaultValue={Datos.attentionSite} onChange={(e) => { e.target.value = e.target.value.toUpperCase() }}></input>
                                </div>
                            </div>
                           
                            <div className={styles.boton}>
                                <button type="button" className="btn btn-success" onClick={actualizar} ref={agregar}>Actualizar datos</button>
                                <button type="button" className="btn btn-danger" ref={cancelar}><a className={`${styles.letra}`} href={`/dashboard/jefe-grupo/personal/`}>Cancelar registro</a></button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>

    )
}
