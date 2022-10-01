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
            var file = photo.current.files[0];
            var reader = new FileReader();
            reader.onload = function (e) {
                image.current.src = e.target.result
            }
            reader.readAsDataURL(file);
            setValues({...values, photo: file})
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