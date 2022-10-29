import { MDBDataTable } from 'mdbreact';
import React, { useEffect, useState } from 'react'
import styles from "~/styles/dashboard/tesorero/Cartera.module.scss";
import { useRouter } from "next/router";
import { User } from '~/lib/commonInterfaces';
import Link from 'next/link';
import { downloadCSV } from '~/lib/utils';
import { useCurrentUser } from '~/hooks/use-current-user';


export default function Cartera(){

  const { user: userData, isLoading: loadingUser, error: userError } = useCurrentUser()
  const router = useRouter()

    let data_bill = {
        columns: [
          {
            label: 'Documento',
            field: 'document',
            sort: 'asc',
            width: 200
          },
          {
            label: 'Nombre',
            field: 'fullName',
            sort: 'asc',
            width: 200
          },
          {
            label: 'Visualizar',
            field: 'actions',
            sort: 'asc',
            width: 200
          },      
        ],
        rows:[]
    }

    const [dataList, setDataList] = useState(data_bill)
    const [loading, setLoading] = useState(true)
    const toTitleCase = (str: string) => {
        return str.toLowerCase().split(' ').map((s) => s.charAt(0).toUpperCase() + s.substring(1)).join(' ');
    }


      useEffect( ()=>{
        if (!loadingUser) {
          getUsers()
        }
      },[userData])

      function getUsers(){
        
            fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/users`, {
              mode: 'cors',
              method: 'GET',
              headers: {
                'Referrer-Policy': 'origin-when-cross-origin',
                'Content-Type': 'application/json',
                'Authorization': "Bearer " + localStorage.getItem("auth_token"),
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
                let users = data.data
                users = users.map((user: User) => {
                    let u = {
                      id: user.id,
                    document: user.document,
                    fullName: toTitleCase(user.name + ' ' + user.lastName),
                    actions: <Link href={`/dashboard/tesorero/payments/${user.id}`}>
                                <a><img className={styles.icon} src="/img/dashboard/eye.svg" /> Ver pagos</a>
                            </Link>
                    }
                    return u
                })
                users = users.filter((user) => user.id != userData.id)
                data_bill.rows = users
                setDataList(data_bill)
                setLoading(false)
              
            }).catch(error => {
            })
    }
    

    return (
      <div>
          <div>
            <h1 className={`${styles.text_title} p-5`}>¡Pagos Scout Centinelas 113!</h1>
          </div>
          <div className={styles.contenedor}>
              <div className="row">

          </div>
          {loading ? (
          <div className="row col-12 mt-5 justify-content-center" >
              Cargando Información...                    
          </div>
          ) : (
          <div className={`${styles.text_data} row justify-content-center py-3`}>
            <div className={`${styles.container} py-5 w-100`} id='example'>
                <MDBDataTable
                  data = {dataList}                    
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
                  entriesLabel={'Mostrar entradas'}
                  infoLabel={['Mostrando', 'hasta', 'de', 'registros']}
                  paginationLabel= {['Anterior', 'Siguiente']}
                  searchLabel= {'Buscar'}
                  noRecordsFoundLabel={'No se han encontrado registros'}
                  />
            </div>
          </div>
        )}
      </div>
                
    </div>
  )
        
}