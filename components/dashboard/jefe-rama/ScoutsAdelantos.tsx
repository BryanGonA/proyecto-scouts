import { MDBDataTable } from 'mdbreact';
import styles from "~/styles/dashboard/info/DataQuery.module.scss";
import React, { useEffect, useState } from 'react'
import { useCurrentUser } from "~/hooks/use-current-user";
import { Adelanto } from "~/lib/commonInterfaces";
import AdelantosActions from "./AdelantosActions";
import AdelantosAction from './AdelantosActions';




export default function ScoutProgress({Id}) {
   
    

    let data_adelantos = {
        columns: [
            {
                label: 'Título',
                field: 'titulo',
                sort: 'asc',
                width: 150
            },
            {
                label: 'Fecha',
                field: 'fecha',
                sort: 'asc',
                width: 50
            },
            {
                label: 'Rama',
                field: 'rama',
                sort: 'asc',
                width: 200
            },
            {
                label: 'Jefe',
                field: 'jefe',
                sort: 'asc',
                width: 150
            },
            {
                label: 'Descripción',
                field: 'descripcion',
                sort: 'asc',
                width: 100
            },
            {
                label: 'Acciones',
                field: 'actions',
                sort: 'asc',
                width: 200
              },
        ],
        rows: []
    }


const [dataList, setDataList] = useState(data_adelantos)
const [loading, setLoading] = useState(true)
const [name, setName]=useState("")


const toTitleCase = (str: string) => {
    return str.toLowerCase().split(' ').map((s) => s.charAt(0).toUpperCase() + s.substring(1)).join(' ');
  }
  useEffect(() => {
    

        fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/users/advancePlan/${Id}`, {
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
            if (data.data) {
              let adelantos = data.data.advances
              adelantos = adelantos.map((adelanto: any) => {
              var array = (adelanto.createDate).split("T")
  
                let u = {
                  titulo: adelanto.name,
                  fecha:array[0],
                  rama: adelanto.branches ? adelanto.branches.nameBranch : '',
                  jefe :adelanto.leader,
                  descripcion: adelanto.description,
                  actions: <AdelantosAction id={data.data.user.id} advance={adelanto.id}/>
                }
                return u
              
              })
              data_adelantos.rows = adelantos
              setDataList(data_adelantos)
            }
            consultar(Id)
            setLoading(false)
          }).catch(error => {
        })
        
  
    },[])



 
 const consultar = (userid) =>{
 
 fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/users/${userid}`, {
    //mode: 'cors',
    method: 'GET',
    headers: {
       'Referrer-Policy': 'origin-when-cross-origin',
       'Authorization': "Bearer " + localStorage.getItem("auth_token"),
       'Content-Type': 'application/json',
       'Access-Control-Allow-Origin': `${process.env.NEXT_PUBLIC_URL}`
    },
 
 }).then(res => {
    return res.json()
       .then(data => {
          if (res.ok) {
             setName(data.data.name+" "+data.data.lastName)
             return Promise.resolve(data)
 
          } else {
             return Promise.reject(data)
          }
       }).then(data =>{
          setLoading(false)
       })
    }
 )
 }


    return (
    
    
        <div>
            <div>
    <h1 className={`${styles.text_title} p-5`}>Plan de adelantos {name}</h1>
            </div>
            {loading ? (
        <div className="row col-12 mt-5 justify-content-center" >
          Cargando Información...
        </div>
      ) : (
            <div className={`${styles.text_data} row justify-content-center py-3`}>
                <div className={`${styles.container} py-5 w-100`} id='example'>

                    <div>
                        <a href={`/dashboard/jefe-rama/adelantos/agregar/${Id}`}><button className={styles.btn_add}>Agregar adelantos</button></a>
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
                        data={dataList}
                        entriesLabel={'Mostrar entradas'}
                        infoLabel={['Mostrando', 'hasta', 'de', 'registros']}
                        paginationLabel={['Anterior', 'Siguiente']}
                        searchLabel={'Buscar por titulo'}
                        noRecordsFoundLabel={'No se han encontrado registros'}
                    />
                </div>
            </div>
      )}
        </div>
    )

}