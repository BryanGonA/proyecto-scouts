import { MDBDataTable } from 'mdbreact';
import { useEffect, useRef, useState } from "react";
import withReactContent from 'sweetalert2-react-content'
import styles from "~/styles/dashboard/administrator/AddPerson.module.scss";
export default function AgregarPersonal() {

    const [values, setValues] = useState(null)

    const photo = useRef(null);
    const image = useRef(null);
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
                //var dataurl = canvas.toDataURL(imageFile.type);
                //document.getElementById("preview").src = dataurl;
                
                //image.current.src = e.target.result;
            };
            image.current.src = e.target.result;
            
          }
          reader.readAsDataURL(imageFile);
          setValues({...values, photo: imageFile})
        
        // Fin del Script para el redimencionado de las imagenes. --------------------------------------------------------------------------------------------------------------
        }
    };

    const Swal = require('sweetalert2')
    const MySwal = withReactContent(Swal)


    const btnName = useRef(null)
    const btnApellido = useRef(null)
    const btnCorreo = useRef(null)
    const btnContraseña = useRef(null)
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
    

    const [cEmail, setCEmail] = useState(null);
    const [cPassword, setCPassword] = useState(null);
    
    const labelCEmail = useRef(null);
    const labelCPassword = useRef(null)

    useEffect(() => {
        if (btnCorreo || cEmail) {
            if (btnCorreo.current.value != cEmail) {
                labelCEmail.current.style.color = "black";
            }
            else {
                labelCEmail.current.style.color = "black";
            }
        }
    }, [btnCorreo, cEmail])

    useEffect(() => {
        if (btnContraseña || cPassword) {
            if (btnContraseña.current.value != cPassword) {
                labelCPassword.current.style.color = "red";
            }
            else {
                labelCPassword.current.style.color = "black";
            }
        }
    }, [btnContraseña, cPassword])



    const agregar = () => {
        let account = {

            name: btnName.current.value,
            lastName: btnApellido.current.value,
            email: btnCorreo.current.value,
            password: btnContraseña.current.value,
            documentType: "CC",
            document: btnCedula.current.value,
            birthDate: new Date(), 
            homeAddress: btnDireccion.current.value,
            attentionSite: btnSitio.current.value,

            personalDetails:{
            phone: btnCelular.current.value,
            level: btnNivel.current.value,
            charge: btnCargo.current.value,
            bloodType: btnTipoSangre.current.value,
            rh: btnRh.current.value,
            eps: btnEps.current.value,
            },
            branches:{
                nameBranch: btnRama.current.value,
            }

        }
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/users/personal`, {
          mode: "cors",
          method: "POST",
          headers: {
            "Referrer-Policy": "origin-when-cross-origin",
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("auth_token"),
            "Access-Control-Allow-Origin": `${process.env.NEXT_PUBLIC_URL}`,
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
          .then((data) => {
            let userId = data.data.id;
            let photo = new FormData();
            photo.append("file", values.photo);
            photo.append("id", userId);

            MySwal.fire({
              icon: "success",
              title: "Datos agregados!",
              text: "Los datos fueron agregados correctamente",
              confirmButtonColor: "#31B411",
              confirmButtonText: "Continuar",
            }).then(function (isConfirm) {
              if (isConfirm) {
                window.location.href = "/dashboard/jefe-grupo/personal";
              }
            });
            fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/upload`, {
              mode: "cors",
              method: "POST",
              body: photo,
              headers: {
                "Referrer-Policy": "origin-when-cross-origin",
                "Access-Control-Allow-Origin": `${process.env.NEXT_PUBLIC_URL}`,
              },
            });
          }).catch((error) => {
            console.log(error);
          });    
    }
    const [Datos, setDatos] = useState(null)
    const [loading, setLoading] = useState(true)


    return (
        <>
            <div className={`${styles.titulo} p-5`}><strong><h1>Agregar personal administrativo Grupo Scout Centinelas 113</h1></strong></div>

            <div className="container">
                <div className={styles.tarjeta_fondo}>
                    <div className={`container-fluid ${styles.desc}`}>
                      
                        <div className="text-center">
                            <div className={styles.photo}>
                                <img className={styles.image} src="/img/profile-picture.png" ref={image} />
                            </div>
                            <div className="row">
                                <div className={styles.div_file}>
                                    <p className={styles.text}>*Seleccionar foto</p><input type="file" id="btn_upload" accept="image/jpeg,image/png" className={styles.btn_upload} ref={photo} onChange={method} />
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
                                <input className={styles.input} ref={btnName} onChange={(e) => {e.target.value = e.target.value.toUpperCase()}}></input>
                            </div>
                            <div className="col-xs-6 col-md-4">
                                <input className={styles.input} ref={btnApellido}  onChange={(e) => {e.target.value = e.target.value.toUpperCase()}}></input>
                            </div>
                            <div className="col-xs-6 col-md-4">
                                <input className={styles.input} ref={btnCorreo}  onChange={(e) => {e.target.value = e.target.value.toUpperCase()}}></input>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xs-6 col-md-4">
                                <label ref={labelCEmail}>Confirmar correo:</label>
                            </div>
                            <div className="col-xs-6 col-md-4">
                                <label>Contraseña:</label>
                            </div>
                            <div className="col-xs-6 col-md-4">
                                <label ref={labelCPassword}>Confirmar contraseña:</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xs-6 col-md-4">
                                <input className={styles.input} onChange={e => setCEmail(e.target.value)}  ></input>
                            </div>
                            <div className="col-xs-6 col-md-4">
                                <input className={styles.input} ref={btnContraseña} type="password"></input>
                            </div>
                            <div className="col-xs-6 col-md-4">
                                <input className={styles.input} onChange={e => setCPassword(e.target.value)}  type="password"></input>
                            </div>
                        </div>
                        <div className="row"> 
                            <div className="col-xs-6 col-md-4">
                                <label>Cédula:</label>
                            </div>
                            <div className="col-xs-6 col-md-4">
                                <label>Teléfono:</label>
                            </div>
                            <div className="col-xs-6 col-md-4">
                                <label>Dirección:</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xs-6 col-md-4">
                                <input className={styles.input} ref={btnCedula} type="number"></input>
                            </div>
                            <div className="col-xs-6 col-md-4">
                                <input className={styles.input} ref={btnCelular} type="number"></input>
                            </div>
                            <div className="col-xs-6 col-md-4">
                                <input className={styles.input} ref={btnDireccion}  onChange={(e) => {e.target.value = e.target.value.toUpperCase()}}></input>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xs-6 col-md-4">
                                <label>Nivel adistramiento:</label>
                            </div>
                            <div className="col-xs-6 col-md-4">
                                <label>Cargo:</label>
                            </div>
                            <div className="col-xs-6 col-md-4">
                                <label>Rama:</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xs-6 col-md-4">
                               <select className={styles.input2} ref={btnNivel} >
                                    <option value="0">PRE-INTRODUCTORIO</option>
                                    <option value="1">INTRODUCTORIO</option>
                                    <option value="2">BASICO</option>
                                    <option value="3">TALLER DE HABILIDADES</option>
                                    <option value="4">AVANZADO</option>
                                    <option value="5">INSIGNIA DE MADERA</option>
                                </select>
                            </div>
                            <div className="col-xs-6 col-md-4">
                                <select className={styles.input2} ref={btnCargo} >
                                    <option value="SCOUT">SCOUT</option>
                                    <option value="TESORERA">TESORERA</option>
                                    <option value="JEFE DE RAMA">JEFE DE RAMA</option>
                                    <option value="JEFE DE GRUPO">JEFE DE GRUPO</option>
                                  
                                </select>
                            </div>
                            <div className="col-xs-6 col-md-4">
                                <select className={styles.input2} ref={btnRama} >
                                    <option value="TEMPORAL">TEMPORAL</option>
                                    <option value="CACHORROS">CACHORROS</option>
                                    <option value="LOBATOS">LOBATOS</option>
                                    <option value="WEBELOS">WEBELOS</option>
                                    <option value="SCOUTS">SCOUTS</option>
                                    <option value="ROVERS">ROVERS</option>
                                </select>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xs-6 col-md-4">
                                <label>Tipo de sangre</label>
                            </div>
                            <div className="col-xs-6 col-md-4">
                                <label>RH:</label>
                            </div>
                            <div className="col-xs-6 col-md-4">
                                <label>EPS:</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xs-6 col-md-4">
                                <select className={styles.input2} ref={btnTipoSangre}>
                                    <option value="A">A</option>
                                    <option value="O">O</option>
                                    <option value="B">B</option>
                                    <option value="AB">AB</option>
                                   
                                </select>
                            </div>
                            <div className="col-xs-6 col-md-4">
                               
                                <select className={styles.input2} ref={btnRh} >
                                    <option value="POSITIVO">POSITIVO</option>
                                    <option value="NEGATIVO">NEGATIVO</option>

                                </select>
                            </div>
                            <div className="col-xs-6 col-md-4">
                                <input className={styles.input} ref={btnEps}  onChange={(e) => {e.target.value = e.target.value.toUpperCase()}}></input>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xs-6 col-md-4">

                            </div>
                            <div className="col-xs-6 col-md-4">
                                <label>Sitio de atención:</label>
                            </div>
                            <div className="col-xs-6 col-md-4">

                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xs-6 col-md-4">

                            </div>
                            <div className="col-xs-6 col-md-4">
                                <input className={styles.input} ref={btnSitio}  onChange={(e) => {e.target.value = e.target.value.toUpperCase()}}></input>
                            </div>
                            <div className="col-xs-6 col-md-4">

                            </div>
                        </div>
                        <div className={styles.boton}>
                            <button type="button" className="btn btn-success" onClick={agregar}>Agregar registro</button>
                            <button type="button" className="btn btn-danger"> <a className={`${styles.letra}`} href={`/dashboard/jefe-grupo/personal`}>Cancelar registro</a></button>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}
