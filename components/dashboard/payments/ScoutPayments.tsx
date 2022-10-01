import styles from "~/styles/dashboard/info/DataQuery.module.scss";
import { MDBDataTable } from 'mdbreact';
import { useState, useEffect } from "react";
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
    ],
    rows: []
  };

  const [loading, setLoading] = useState(true)
  const [data, setData] = useState(data_payment)  

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
            date: payment.date.replace('T',' ').split('.')[0]
            //date: Moment("2001-01-20").format('DD-MM-YYYY')
          }
          return datos
        })
        data_payment.rows=puntero            
        setData(data_payment)  
      }
      setLoading(false) 
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