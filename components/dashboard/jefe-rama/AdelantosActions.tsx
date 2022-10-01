import Link from "next/link"
import { fetcherBlobWithToken } from "~/lib/fetcher"
import styles from "~/styles/dashboard/JefeRama.module.scss"
import withReactContent from 'sweetalert2-react-content'


export default function AdelantosAction({ id, advance }: any) {
  const Swal = require('sweetalert2')
  const MySwal = withReactContent(Swal)

  function borrar() {
    MySwal.fire({
      title: '¿Desea eliminar el avance?',
      text: "El avance va a ser eliminado permamentenemente",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, eliminar',
      cancelButtonText: 'No, cancelar',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {

        let body = {
          advanceId: advance
        }
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/users/deleteAdvance/${id}`, {
          mode: 'cors',
          method: 'DELETE',
          headers: {
            'Referrer-Policy': 'origin-when-cross-origin',
            'Authorization': "Bearer " + localStorage.getItem("auth_token"),
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': `${process.env.NEXT_PUBLIC_URL}`
          },
          body: JSON.stringify(body)
        }).then(res => {
          return res.json().then(data => {
            if (res.ok) {
              return Promise.resolve(data)
            } else {
              return Promise.reject(data)
            }
          }).then(data => {
            MySwal.fire({
              icon: 'success',
              title: 'Adelanto eliminado',
              text: 'Adelanto eliminado exitosamente',
              confirmButtonColor: '#31B411',
              confirmButtonText: "Continuar",

            }).then(function (isConfirm) {
              if (isConfirm) {
                location.reload();
              }
            })
          })
        })
      }
    })


  }




  return (
    <>

      <a onClick={borrar} ><img className={styles.icon_2} src="/img/dashboard/trash.svg" /></a>

    </>
  )
}