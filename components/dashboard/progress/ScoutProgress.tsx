import { MDBDataTable } from 'mdbreact';
import { useEffect, useState } from 'react';
import { useCurrentUser } from '~/hooks/use-current-user';
import styles from "~/styles/dashboard/info/DataQuery.module.scss";

export default function ScoutProgress({ id }: any) {

    const tablaAdelantos = {
        columns: [
            {
                label: 'Título',
                field: 'name',
                sort: 'asc',
                width: 150
            },
            {
                label: 'Fecha',
                field: 'createDate',
                sort: 'asc',
                width: 270
            },
            {
                label: 'Rama',
                field: 'branches',
                sort: 'asc',
                width: 200
            },
            {
                label: 'Jefe',
                field: 'leader',
                sort: 'asc',
                width: 150
            },
            {
                label: 'Descripción',
                field: 'description',
                sort: 'asc',
                width: 100
            },
        ],
        rows: []
    };

    //--------------------------------------------------------

    const [loading, setLoading] = useState(true)
    const [tabla, setTabla] = useState(tablaAdelantos)
    const [rama, setRama] = useState("")
    const [link, setLink] = useState("")
    const { user, isLoading: loadingUser, error: userError } = useCurrentUser()

    useEffect(() => {
        if (id) {
            consultar(id)
        } else {
            obtenerId()
        }
    }, [user])

    const obtenerId = async () => {
        if (!loadingUser) {
            fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/users/${user.id}`, {
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
                setRama(data.data.branches.nameBranch)
                consultar(user.id)
            }).catch(error => {
            })
        }
    }

    function consultar(idUser) {
      
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/users/advancePlan/${idUser}`, {
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
                        name: adelanto.name,
                        createDate: array[0],
                        branches: adelanto.branches.nameBranch,
                        leader: adelanto.leader,
                        description: adelanto.description,
                    }
                    return u

                })
                tablaAdelantos.rows = adelantos
                setTabla(tablaAdelantos)
            }
            miplan(rama)
            setLoading(false)
        }).catch(error => {
        })
    }

    function miplan(rama_) {
        switch (rama_) {
            case 'CACHORROS':
                setLink("/documents/ADELANTO_MANADA.pdf")
                break;
            case 'LOBATOS':
                setLink("/documents/ADELANTO_MANADA")
                break;
            case 'WEBELOS':
                setLink("/documents/ADELANTO_WEBELO.pdf")
                break;
            case 'SCOUTS':
                setLink("/documents/ADELANTO_MANADA.pdf")
                break;
            case 'ROVERS':
                setLink("/documents/ADELANTO_MANADA.pdf")
                break;
            default:
                setLink("/documents/ADELANTO_MANADA.pdf")
                    ;
        }
    }
    //--------------------------------------------------------

    return (
        <div>
            <div>
                <h1 className={`${styles.text_title} p-5`}>¡Este es tu progreso como Scout!</h1>
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
                                data={tabla}
                                entriesLabel={'Mostrar entradas'}
                                infoLabel={['Mostrando', 'hasta', 'de', 'registros']}
                                paginationLabel={['Anterior', 'Siguiente']}
                                searchLabel={'Buscar por titulo'}
                                noRecordsFoundLabel={'No se han encontrado registros'}
                            />
                        </div>

            <a className={styles.link_plan} href={link}>Conoce tu plan de adelantos {rama}</a>
                    </div>
                )}
        </div>
    )

}