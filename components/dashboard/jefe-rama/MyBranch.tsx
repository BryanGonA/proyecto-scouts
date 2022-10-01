import styles from "~/styles/dashboard/info/DataQuery.module.scss";
import { MDBDataTable } from 'mdbreact';
import React, { useEffect, useState } from 'react'
import { useRouter } from "next/router";
import MyBranchActions from "./MyBranchActions";
import { useCurrentUser } from "~/hooks/use-current-user";
import { User } from "~/lib/commonInterfaces";
// Corresponde a la ruta http://.../info/about

export default function MyBranch() {
  const { user: userData, isLoading: loadingUser, error: userError } = useCurrentUser()
  let data_branch = {
    columns: [
      {
        label: 'Cédula',
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
        label: 'Acciones',
        field: 'actions',
        sort: 'asc',
        width: 200
      },
    ],
    rows: []
  }
  const [dataList, setDataList] = useState(data_branch)
  const [loading, setLoading] = useState(true)

  const toTitleCase = (str: string) => {
    return str.toLowerCase().split(' ').map((s) => s.charAt(0).toUpperCase() + s.substring(1)).join(' ');
  }
  useEffect(() => {
    if (!loadingUser) {
      
      fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/users/branches/${userData.id}`, {
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
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/branches/users/${data.data.branches.id}`, {
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
          let users = data.data[0].users
          users = users.map((user: User) => {
            let u = {
              id: user.id,
              document: user.document,
              fullName: toTitleCase(user.name + ' ' + user.lastName),
              actions: <MyBranchActions id={user.id} doc={user.document} />
            }
            return u
          })
          users = users.filter((user) => user.id != userData.id)
          data_branch.rows = users
          setDataList(data_branch)
          setLoading(false)
        })
      }).catch(error => {
      })
    }
  }, [userData])

  return (
    <div>
      <div>
        <h1 className={`${styles.text_title} p-5`}>¡Mi rama!</h1>
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
                data={dataList}
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