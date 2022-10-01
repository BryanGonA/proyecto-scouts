import styles from "~/styles/dashboard/info/DataQuery.module.scss";
import { MDBDataTable } from 'mdbreact';
import { useState, useEffect } from "react";
import Link from "next/link"
import withReactContent from "sweetalert2-react-content";
// Corresponde a la ruta http://.../info/about

export default function  ScoutPayment({idPago}:any){

  const data_payment = {
    columns: [
      {
        label: 'Número de recibo',
        field: 'receiptNumber',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Concepto',
        field: 'concept',
        sort: 'asc',
        width: 270
      },
      {
        label: 'Valor',
        field: 'amount',
        sort: 'asc',
        width: 200
      },
      {
        label: 'Observacion',
        field: 'observation',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Fecha',
        field: 'date',
        sort: 'asc',
        width: 100
      },
      {
        label: 'Acciones',
        field: 'actions',
        sort: 'asc',
        width: 100

      },
    ],
    rows: []
  };

  const [loading, setLoading] = useState(true)
  const [data, setData] = useState(data_payment)

  const Swal = require('sweetalert2')
  const MySwal = withReactContent(Swal)

  useEffect(()=>{    
    if(idPago){
      consultar(idPago)               
    }else{      
      fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/profile`, {
        mode: 'cors',
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
        consultar(data.user.id)
      })
    }    
  },[])

  function consultar(id_usuario){
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/users/payment/${id_usuario}`, {
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
      if(data.data){
        let puntero = data.data.payments.map((payment)=>{
          let conceptos = payment.paymentConcepts.map((concept)=> concept.name)
          
          let datos = {
            receiptNumber: payment.receiptNumber ,
            concept: conceptos.join(', '),
            amount: payment.amount,
            observation: payment.observation ,
            date: payment.date.replace('T',' ').split('.')[0],
            //date: Moment("2001-01-20").format('DD-MM-YYYY')
            actions: <>
                    <Link href={`/dashboard/tesorero/editar/${id_usuario}/${payment.id}`}>
                        <a><img className={styles.icon} src="/img/dashboard/pencil.svg" /></a>
                    </Link>
                    <img className={styles.icon_trash} src= "/img/dashboard/trash.svg" onClick={() => eliminar(id_usuario, payment.id, payment.receiptNumber)}/>
                  </>
               
          }
          return datos
        })
        data_payment.rows=puntero            
        setData(data_payment)  
      }
      setLoading(false) 
    })
  }

  const eliminar = (userId, paymentId, receiptNumber) => {
    MySwal.fire({
      title: '¿Desea eliminar el pago?',
      text: "El pago Nº " + receiptNumber + " va a ser eliminado permamentenemente",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, eliminar',
      cancelButtonText: 'No, cancelar',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        enviarEliminar(userId, paymentId)
      }
    })
  }

  const enviarEliminar = (userId, paymentId) => {
    let body = {
        paymentId: Number.parseInt(paymentId)
    }
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/users/payments/${userId}`, {
        method: 'DELETE',
        headers: {
            'Referrer-Policy': 'origin-when-cross-origin',
            'Authorization': "Bearer " + localStorage.getItem("auth_token"),
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': `${process.env.NEXT_PUBLIC_URL}`
        },
        body: JSON.stringify(body)
    }).then(res => {
        if (res.ok) {
            return Promise.resolve({ message: 'Pago eliminado correctamente' })
        } else {
            return Promise.reject({ message: 'Hubo un error al intentar eliminar el pago' })
        }
    }).then(data => {
      MySwal.fire(
        'Pago eliminado',
        'El pago ha sido eliminado.',
        'success'
      ).then(function (isConfirm) {
        if (isConfirm) {
          location.reload();
        }
      })
    })
}

  
  return (
    <div>
      <div>
        <h1 className={`${styles.text_title} p-5`}>¡Estos son tus pagos como Scout!</h1>
      </div>
      {loading ? (
        <div className="row col-12 mt-5 justify-content-center" >
          Cargando Información...
        </div>
      ) : (
          <div className={`${styles.text_data} row justify-content-center py-3`}>
            <div className={`${styles.container} py-5 w-100`} id='example'>
            <div className={styles.contenedor}>
              <div className="row">
                <div className="col-12"> 
                  <a className={`btn ${styles.addbutton}`} href={"/dashboard/tesorero/agregar/" + idPago}>
                    <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-plus" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                    </svg>
                    Agregar Pago 
                  </a>

                </div>
              
              </div>
            </div>
              <MDBDataTable
                striped
                bordered
                hover
                small
                responsiveSm
                responsiveMd
                responsiveLg
                responsiveXl
                fixed
                noBottomColumns={true}
                data={data}
                entriesLabel={'Mostrar entradas'}
                infoLabel={['Mostrando', 'hasta', 'de', 'registros']}
                paginationLabel={['Anterior', 'Siguiente']}
                searchLabel={'Buscar'}
                noRecordsFoundLabel={'No se han encontrado registros'}
              />
            </div>
          </div>
        )}
    </div>
  )
  
}