import { useRef, useState } from "react";
import styles from "~/styles/recover/recover.module.scss";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

export default function Unete({  }: any) {

    const MySwal = withReactContent(Swal)

    const [email, setEmail] = useState(null)

    const pass = useRef(null)
    const confirm = useRef(null)
    const button = useRef(null)

    const onSubmit = (e:any) => {
        e.preventDefault()
        let data = {
            email: email
        }
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/forgot-password`, {
            mode: 'cors',
            method: 'POST',
            headers: {
                'Referrer-Policy': 'origin-when-cross-origin',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': `${process.env.NEXT_PUBLIC_URL}`
            },
            body: JSON.stringify(data)
        }).then(res => {
            if (res.ok) {
                if (res.status === 201) {
                    return res.json()
                } else {
                    throw new Error('Something went wrong ...');
                }
            } else {
                throw new Error('Something went wrong ...');
            }
        }).then(() => {
            pass.current.readOnly = true
            button.current.style.display = "none"
            MySwal.fire({
                icon: 'success',
                title: 'Correo enviado!',
                text: 'El correo fue enviado satisfactoriamente',
                confirmButtonColor: '#31B411',
                confirmButtonText: "Continuar",
            })
        }).catch(() => {
            MySwal.fire({
                icon: 'error',
                title: '¡Cuidado!',
                text: 'El correo no se encuentra registrado',
                confirmButtonColor: '#E01C1C',
                confirmButtonText: "Reintentar"
            })
        })
    }

    return (
        <>
            {
                <div className={styles.containerp}>
                    <div className="row">
                        <div className="col-12 borde">
                            <div className={styles.title}>
                                <p>Recupera tu contraseña</p>
                            </div>
                            <form onSubmit={onSubmit}>
                                <div className={styles.container}>
                                    <div className={styles.description}>
                                        <strong><p>Ingresa aquí tu correo para buscar tu usuario y enviarte un correo de recuperación de contraseña:</p></strong>
                                    </div>
                                    <div>
                                        <input type="email" id="fname" name="mail" ref={pass} className={`${styles.recover} form-control`} placeholder="Correo electrónico " required onChange={e => setEmail(e.target.value)}/>
                                    </div>
                                    <div className={styles.button}>
                                        <button type="submit" ref={button} className="btn btn-danger">Enviar correo de recuperación de contraseña</button>
                                    </div>
                                </div>
                            </form>
                            <div>
                                <strong><p className={styles.letter}><a href="/login" className={styles.letter}>Iniciar sesión</a></p></strong>
                            </div>
                        </div>
                    </div>
                </div>
            }

        </>

    );
}
