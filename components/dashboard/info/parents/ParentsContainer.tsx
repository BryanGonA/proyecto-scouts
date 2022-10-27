import styles from "~/styles/dashboard/info/Parents.module.scss";
import Parent from "./Parent"
import Emergency from "./Emergency";
import { useState, Component, useEffect } from "react";
import Swal from "sweetalert2";
import { useCurrentUser } from "~/hooks/use-current-user";

export default function prueba({userId}: any) {

    const [parents, setParents] = useState(null)
    const [parentsE, setParentsE] = useState(null)
    const [loading, setLoading] = useState(true)
    
   const { user, isLoading: loadingUser, error: userError } = useCurrentUser()

    useEffect(() => {
        if(userId) {
            obtenerid(userId);
        } else {
            obtenerFamiliares();
        }
    }, [user]);
    

    const obtenerid =   async (userid)=>{
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/users/parents/${userid}`, {
            mode: 'cors',
            method: 'GET',
            headers: {
                'Referrer-Policy': 'origin-when-cross-origin',
                'Authorization': "Bearer " + localStorage.getItem("auth_token"),
                'Access-Control-Allow-Origin': `${process.env.NEXT_PUBLIC_URL}`
            },
        }).then(res => {
            return res.json()
                .then(data => {
                    if (res.ok) {
                        return Promise.resolve(data)
                    } else {
                        return Promise.reject(data)
                    }
                })

        }).then(data => {
            setParents(data)
        })

        fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/users/datahealth/${userid}`, {
            mode: 'cors',
            method: 'GET',
            headers: {
                'Referrer-Policy': 'origin-when-cross-origin',
                'Authorization': "Bearer " + localStorage.getItem("auth_token"),
                'Access-Control-Allow-Origin': `${process.env.NEXT_PUBLIC_URL}`
            },
        }).then(res => {
            return res.json()
                .then(data => {
                    if (res.ok) {
                        
                        return Promise.resolve(data)
                        
                    } else {
                        return Promise.reject(data)
                    }
                })

        }).then(data => {
            setParentsE(data)
            setTimeout(()=>{
                setLoading(false)
            },250
            )
            
            
        })

    }

    const obtenerFamiliares = () => {
        if (!loadingUser) {
            obtenerid(user.id)
        }
    }

    return (
        <>
            {loading ? <p>Cargando información...</p> :
                <div className={styles.margen}>
                    <Parent
                        id_componente={0}
                        title={"Datos del Acudiente 1"}
                        name={parents?.data[0]?.name}
                        lastName={parents?.data[0]?.lastName}
                        phoneParent={parents?.data[0]?.phoneParent}
                        relationship={parents?.data[0]?.relationship}
                        email={parents?.data[0]?.email}
                        professional={parents?.data[0]?.professional}
                        company={parents?.data[0]?.company}
                        userId={userId}
                        parents={parents?.data}
                    />
                    <Parent
                        id_componente={1}
                        title={"Datos del Acudiente 2"}
                        name={parents?.data[1] ? parents.data[1].name : "N/A"}
                        lastName={parents?.data[1] ? parents.data[1].lastName : "N/A"}
                        phoneParent={parents?.data[1] ? parents.data[1].phoneParent : "N/A"}
                        relationship={parents?.data[1] ? parents.data[1].relationship : "N/A"}
                        email={parents?.data[1] ? parents.data[1].email : "N/A"}
                        professional={parents?.data[1] ? parents.data[1].professional : "N/A"}
                        company={parents?.data[1] ? parents.data[1].company : "N/A"}
                        userId={userId}
                        parents={parents?.data}
                    />
                    <Emergency
                        title={"En caso de emergencia"}
                        nameOneEmergency={parentsE?.data.nameOneEmergency}
                        telephoneOneEmergency={parentsE?.data.telephoneOneEmergency}
                        nameTwoEmergency={parentsE?.data.nameTwoEmergency}
                        telephoneTwoEmergency={parentsE?.data.telephoneTwoEmergency}
                        userId={userId}
                    />
                </div>
            }
        </>
    );
}