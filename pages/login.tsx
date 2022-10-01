import { NextPage } from "next"
import styles from "~/styles/login/Login.module.scss";
import '~/styles/login/Login.module.scss'
import Title from "~/components/login/Title"
import Input from "~/components/login/Input"
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";
import { useRouter } from "next/router";
import { useCurrentUser } from "~/hooks/use-current-user";
import { mutate } from "swr";
import { redirectByRole, Role } from "~/lib/utils";

const Login: NextPage = () => {

    const router = useRouter()

    const MySwal = withReactContent(Swal)
    const [user_id, setUser_id] = useState('');
    const [password, setPassword] = useState('');
    const [user_idError, setUser_idError] = useState(false)
    const [passwordError, setPasswordError] = useState(false)
    const [] = useState(false)
    const [] = useState(false)
    const [hasError, setHasError] = useState(true)

    const { user, isLoading: loadingUser, error: userError } = useCurrentUser()
    
    const [, setCookie] = useCookies(['token']);

    useEffect(() => {
        if (!loadingUser) {
            redirectByRole(router, Role[Role[user.roles.id-1]])
        }
    }, [user])


    function handleChange(name: string, value: string) {
        if (name === 'documento') {
            if (value.length > 10) {
                setUser_idError(true)
            }
            else {
                if (/^[0-9]+$/.test(value) || value.length == 0) {
                    setUser_idError(false)
                    if (value.length > 0) {
                        setUser_id(value)
                    }
                }
                else {
                    setUser_idError(true)
                }
            }
        } else {
            setPassword(value)
            if (value.length < 8 && value.length != 0) {
                setPasswordError(true)
            }
            else {
                setPasswordError(false)
            }
        }

    };

    function ifMatch(param: any) {
        if (param.document.length > 0 || param.password.length > 0) {

            setHasError(true)
        }
        else {
            setHasError(true)

        }

    }

    async function handleSubmit(e:any) {
        e.preventDefault()
        let account = { 
            document: user_id, 
            password: password
        }
        if (account) {
            ifMatch(account)
            if (hasError) {
                fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/login`, {
                    mode:'cors',
                    method: 'POST',
                    headers: {
                        'Referrer-Policy': 'origin-when-cross-origin',
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': `${process.env.NEXT_PUBLIC_URL}`
                    },
                    body: JSON.stringify(account)
                }).then(res => {
                    return res.json().then(data => {
                        if (res.ok) {
                            return Promise.resolve(data)     
                        } else {
                            return Promise.reject(data)
                        }
                    })
                }).then(json => {
                    setCookie("token", json.data.accessToken)
                    localStorage.setItem("auth_token", json.data.accessToken)
                    let role = localStorage.getItem('role');
                    if (!role || role.length == 0) {
                        localStorage.setItem("role", 'SCOUT')
                    }
                    mutate('/api/auth/profile', null)
                    router.push("/dashboard")
                }).catch(error => {
                    setHasError(true)
                    MySwal.fire({
                        icon: 'error',
                        title: '¡Cuidado!',
                        text: error.message,
                        confirmButtonColor: '#E01C1C',
                        confirmButtonText: "Reintentar"
                
                      })
                })
            } 
        }
    }   
        
    
    function mostrar() {

        var x = (document.getElementById("contraseña") as HTMLInputElement);

        if (x.type === 'password') {
            x.type = "text";
            setChange(false)
        }
        else {
            x.type = "password";
            setChange(true)
        }

    }
    const [change, setChange] = useState(true)
    return (
        <form onSubmit={handleSubmit}> 
        <div className="text-center">
            <Title text='¡Nos alegra verte de nuevo!' />
            <div className={styles.letra}>
                <div className={styles.marco}>
                    <div className={styles.margen} ></div>
                    <div className={styles.area_entradas}>
                        <Input
                            atribute={{
                                id: 'documento',
                                name: 'documento',
                                type: 'number',
                                placeholder: 'Documento de identidad',
                                maxLength: "10",
                            }}
                            handleChange={handleChange}
                            param={user_idError}
                        />
                        <img src="img/img_login/persona.png" className={styles.user}></img>
                    </div>

                    {user_idError &&
                        <div className={styles.area_entradas}>
                            <div>
                                <label className={styles.alerta_text}>Solo se permiten números (0-9) en el documento</label>
                            </div>
                        </div>
                    }
                    <div className={`input-group ${styles.passGroup}`}>
                        <div className="input-group-prepend">
                            <img src="img/img_login/key.png" className={styles.pass}></img>
                        </div>
                        <input type="password" className={`form-control ${styles.entradas} ${styles.passInput}`} placeholder="Contraseña" aria-label="contraseña" aria-describedby="basic-addon2" id='contraseña' name='contraseña' onChange={(e)=> handleChange(e.target.name,e.target.value)}/>
                        <div className="input-group-append">
                            <button className={`${styles.eye} btn btn-outline-secondar `} onClick={mostrar} type="button" id="button-addon2">
                            {change ? <svg width="2em" height="2em" viewBox="0 0 16 16" className="bi bi-eye-slash" fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z" />
                                <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299l.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z" />
                                <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709z" />
                                <path fill-rule="evenodd" d="M13.646 14.354l-12-12 .708-.708 12 12-.708.708z" />
                            </svg>
                                : <svg width="2em" height="2em" viewBox="0 0 16 16" className="bi bi-eye" fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.134 13.134 0 0 0 1.66 2.043C4.12 11.332 5.88 12.5 8 12.5c2.12 0 3.879-1.168 5.168-2.457A13.134 13.134 0 0 0 14.828 8a13.133 13.133 0 0 0-1.66-2.043C11.879 4.668 10.119 3.5 8 3.5c-2.12 0-3.879 1.168-5.168 2.457A13.133 13.133 0 0 0 1.172 8z" />
                                <path fill-rule="evenodd" d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                                </svg>}
                            </button>
                        </div>
                    </div>
                    {passwordError &&
                        <div className={styles.area_entradas}>
                            <div>
                                <label className={styles.alerta_text}>La contraseña debe superar los 8 caracteres</label>
                            </div>
                        </div>
                    }

                    <div className={styles.area_boton}>
                        <button type="submit" className={styles.boton}>INGRESAR</button>
                    </div>
                    <div className={styles.area_check}>
                        <a className={styles.olvida} href="/recuperar">¿Olvidaste tu contraseña?</a>
                    </div>
                </div>
            </div>
            <div className={styles.margen} ></div>
        </div>
        </form>


    )

}

export default Login;