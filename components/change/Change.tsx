import { useEffect, useRef, useState } from "react";
import styles from "~/styles/change/change.module.scss";
import withReactContent from 'sweetalert2-react-content'
import { useRouter } from "next/router";
export default function Change({ token }: any) {

  const router = useRouter()

  const pass = useRef(null)
  const passd = () => {
    if (pass.current.type === "password") {
      pass.current.type = "text";
      setChange(false)
    }
    else {
      pass.current.type = "password";
      setChange(true)
    }
  }
  const two = useRef(null)
  const twoo = () => {
    if (two.current.type == "password") {
      two.current.type = "text"
      setOnly(false)
    }
    else {
      two.current.type = "password"
      setOnly(true)
    }
  }
  const Swal = require('sweetalert2')
  const MySwal = withReactContent(Swal)
  const confirm = useRef(null)
  const button = useRef(null)

  const onSubmit = (e:any) => {
    e.preventDefault()
    if (!localStorage.getItem("auth_token")) {
      MySwal.fire({
        icon: 'error',
        title: 'No estas autenticado',
        text: 'Debes iniciar sesión o entrar al enlace de recuperar tu contraseña',
        showConfirmButton: false,
        showDenyButton: true,
        denyButtonText: `Cerrar`,
      }).then(() => {
        router.push('/login')
      })
      return
    }
    if (two.current.value === "" || pass.current.value === "") {
      return
    }
    if (pass.current.value !== two.current.value) {
      pass.current.value = ""
      two.current.value = ""
      Swal.fire({
        icon: 'error',
        title: '¡Cuidado!',
        text: 'Las contraseñas no coinciden',
        confirmButtonColor: '#E01C1C',
        confirmButtonText: "Reintentar"

      })
    } else {
      const data = {
        password : pass.current.value
      }
      fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/reset-password`, {
        mode:'cors',
        method: 'PUT',
        headers: {
            'Referrer-Policy': 'origin-when-cross-origin',
            'Authorization': "Bearer " + localStorage.getItem("auth_token"),
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': `${process.env.NEXT_PUBLIC_URL}`
        },
        body: JSON.stringify(data)
      }).then(res => {
          return res.json().then(data => {
              if (res.ok) {
                  return Promise.resolve(data)
              } else {
                  return Promise.reject(data)
              }
          })
      }).then(() => {
        
          pass.current.readOnly = true
          two.current.readOnly = true
          button.current.style.display = "none"
          pass.current.value = ""
          two.current.value = ""
          MySwal.fire({
            icon: 'success',
            title: 'Contraseña actualizada!',
            text: 'Tu contraseña fue actualizada correctamente',
            confirmButtonColor: '#31B411',
            confirmButtonText: "Continuar"
          }).then((result) => {
              if (result.isConfirmed) {
                  router.push('/login')
              }
          })
      }).catch(error => {
          MySwal.fire({
              icon: 'error',
              title: <p>Hay errores</p>,
              text: error.message,
              showConfirmButton: false,
              showDenyButton: true,
              denyButtonText: `Cerrar`,
          })
      })
    }

  }
  const [change, setChange] = useState(true)
  const [only, setOnly] = useState(true)

  useEffect(() => {
    if (token) {
      localStorage.setItem("auth_token", token)
      router.push('/cambio')
    } /* else if (!localStorage.getItem("auth_token")) {
      MySwal.fire({
        icon: 'error',
        title: 'No estas autenticado',
        text: 'Debes iniciar sesión o entrar al enlace de recuperar tu contraseña',
        showConfirmButton: false,
        showDenyButton: true,
        denyButtonText: `Cerrar`,
      }).then((result) => {
        router.push('/login')
      })
    } */
  })

  return (
    <>
      {
        <div className={styles.containerp}>
          <div className="row">
            <div className="col-12 borde">
              <div className={styles.title}>
                <p>¡Cambia tu contraseña!</p>
              </div>
              <form onSubmit={onSubmit}>
                <div className={styles.container}>
                  <div>

                    <div className="input-group mb-3">
                      <input type="password" required minLength={8} id="password" className={`${styles.pass} form-control `} ref={pass} placeholder="Contraseña nueva" aria-label="Recipient's username" aria-describedby="button-addon2"></input>
                      <div className="input-group-append">
                        <button className={`${styles.eyes} btn btn-outline-secondar `} onClick={passd} type="button" id="button-addon2">
                          {change ? <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" className="bi bi-eye-slash" fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z" />
                            <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299l.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z" />
                            <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709z" />
                            <path fill-rule="evenodd" d="M13.646 14.354l-12-12 .708-.708 12 12-.708.708z" />
                          </svg>
                            : <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" className="bi bi-eye" fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg">
                              <path fill-rule="evenodd" d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.134 13.134 0 0 0 1.66 2.043C4.12 11.332 5.88 12.5 8 12.5c2.12 0 3.879-1.168 5.168-2.457A13.134 13.134 0 0 0 14.828 8a13.133 13.133 0 0 0-1.66-2.043C11.879 4.668 10.119 3.5 8 3.5c-2.12 0-3.879 1.168-5.168 2.457A13.133 13.133 0 0 0 1.172 8z" />
                              <path fill-rule="evenodd" d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                            </svg>}
                        </button>
                      </div>
                    </div>

                  </div>
                  <div>

                    <div className="input-group mb-3">
                      <input type="password" required minLength={8} id="confirmpassword" className={`${styles.pass} form-control `} pattern="[A-z]{4-16}" ref={two} placeholder="Confirmar contraseña nueva" aria-label="Recipient's username" aria-describedby="button-addon2"></input>
                      <div className="input-group-append">
                        <button className={`${styles.eyes} btn btn-outline-secondar `} onClick={twoo} type="button" id="button-addon2" >
                          {only ? <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" className="bi bi-eye-slash" fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z" />
                            <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299l.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z" />
                            <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709z" />
                            <path fill-rule="evenodd" d="M13.646 14.354l-12-12 .708-.708 12 12-.708.708z" />
                          </svg>
                            : <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" className="bi bi-eye" fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg">
                              <path fill-rule="evenodd" d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.134 13.134 0 0 0 1.66 2.043C4.12 11.332 5.88 12.5 8 12.5c2.12 0 3.879-1.168 5.168-2.457A13.134 13.134 0 0 0 14.828 8a13.133 13.133 0 0 0-1.66-2.043C11.879 4.668 10.119 3.5 8 3.5c-2.12 0-3.879 1.168-5.168 2.457A13.133 13.133 0 0 0 1.172 8z" />
                              <path fill-rule="evenodd" d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                            </svg>}

                        </button>
                      </div>
                    </div>

                    {/* <div hidden className={`${styles.alert} alert alert-danger alert-dismissable`} ref={confirm}>
                      <button type="button" className="close" data-dismiss="alert" aria-label="Close" onClick={close}> &times; </button>
                      <strong>¡Cuidado!</strong> Las contraseñas no coinciden .
                    </div>
                    <div hidden className="alert alert-success" role="alert" ref={correct}>
                      <h4 className="alert-heading">¡Contraseña actualizada!</h4>
                      <p>Tu contraseña fue actualizada correctamente</p>
                      <button type="submit" className="btn btn-success">Continuar</button>
                    </div> */}
                  </div>
                  <div className={styles.button}>
                    <button type="submit" id="changepassword" className="btn btn-danger" ref={button}> Cambiar contraseña </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

      }
    </>
  );
}