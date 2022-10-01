import styles from '~/styles/register/forms/Photo.module.scss'
import { useRef } from "react";
import { RegisterFormProps } from '../RegisterForm';
export default function FormPhoto({values, setValues}: RegisterFormProps) {

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
    

    return (
        <>
            <div className="text-center">
                <div className={styles.photo}>
                    <img className={styles.image} src="/img/profile-picture.png" ref={image} />
                </div>
                <div className="row">
                    <div className={styles.div_file}>
                        <p className={styles.text}>*Seleccionar foto</p><input type="file" id="btn_upload" accept="image/jpeg,image/png" className={styles.btn_upload} ref={photo} onChange={method} required />
                    </div>
                </div>
            </div>
        </>
    )
}