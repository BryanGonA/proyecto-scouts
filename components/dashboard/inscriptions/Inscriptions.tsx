import styles from "~/styles/dashboard/info/DataQuery.module.scss";
import { MDBDataTable } from 'mdbreact';
import { useState, useEffect } from "react";
import InscriptionsBranch from "./InscriptionsBranch";
import ActionBranch from "./ActionBranch";
import { useCurrentUser } from "~/hooks/use-current-user";



// or less ideally

// Corresponde a la ruta http://.../info/about

export default function  Inscriptions(){
  const { user: userData, isLoading: loadingUser, error: userError } = useCurrentUser()
  const data_payment = {
    columns: [
      {
        label: 'N° Inscripción',
        field: 'id',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Nombre',
        field: 'name',
        sort: 'asc',
        width: 270
      },
      {
        label: 'Edad',
        field: 'birthDate',
        sort: 'asc',
        width: 200
      },
      {
        label: 'Rama',
        field: 'branch',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Estado',
        field: 'status',
        sort: 'asc',
        width: 100
      },
      {
        label: 'Acciones',
        field: 'acciones',
        sort: 'asc',
        width: 100
      },
    ],
    rows: []
  };

  const [loading, setLoading] = useState(true)
  const [data, setData] = useState(data_payment)   
  
  useEffect(()=>{
    if (!loadingUser) {
      fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/users`, {
        mode: 'cors',
        method: 'GET',
        headers: {
          'Referrer-Policy': 'origin-when-cross-origin',
          Authorization: "Bearer " + localStorage.getItem("auth_token"),
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
        let puntero = data.data.map((user)=>{
            let diferencia_fechas = new Date().getTime() - new Date(user.birthDate).getTime()
            let age = Math.round(diferencia_fechas/(60 * 60 * 24 * 1000 * 365))             
            let datos = {
              id: user.id,
              name: user.name,
              birthDate: age,
              branch: <ActionBranch id={user.id} value={user.branches} />,
              status: (user.status ?'Activo':'Inactivo'),
              acciones: <InscriptionsBranch id={user.id} />
            }            
            return datos
        })
        
        
        puntero = puntero.filter((user) => user.id != userData.id)
        data_payment.rows=puntero
        setData(data_payment)
        setLoading(false)
      })
    }
    
  },[userData])



   
  return (
    <div>
      <div>
        <h1 className={`${styles.text_title} p-5`}>Inscripciones Grupo Centinelas 113</h1>
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