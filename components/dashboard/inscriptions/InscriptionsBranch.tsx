import styles from "~/styles/dashboard/JefeRama.module.scss"
import Link from "next/link"
import { useState, useEffect } from "react";

export default function MyBranchActions({id} : any) {

    const [datosUsuario, setDatosUsuario] = useState(null)
        useEffect(() => {
                        
            fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/users/${id}`, {
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
                setDatosUsuario(data['data'])                 
            })
            
          
    }, []);

    async function cambiar_estado(estado){
        
        datosUsuario.status=estado
        datosUsuario.branches = {}
        setDatosUsuario(datosUsuario)    
        
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/users/${id}`, {              
            method: 'PUT',
            headers: {
                'Referrer-Policy': 'origin-when-cross-origin',
                'Authorization': "Bearer " + localStorage.getItem("auth_token"),
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': `${process.env.NEXT_PUBLIC_URL}`
            },
           
            body:JSON.stringify(datosUsuario)
           }).then(res => {
              return res.json()
                 .then(data => {                    
                    if (res.ok) {                                  
                       return Promise.resolve(data)
                    } else {                
                       return Promise.reject(data)
                    }
                 })  
           })
           fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/users/${id}`, {              
            method: 'PUT',
            headers: {
                'Referrer-Policy': 'origin-when-cross-origin',
                'Authorization': "Bearer " + localStorage.getItem("auth_token"),
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': `${process.env.NEXT_PUBLIC_URL}`
            },
            body:JSON.stringify(datosUsuario)

           })
       
    }


    return (       
        <>
        <Link href={`/dashboard/info/${id}`}>
            <a><img className={styles.icon} src="/img/dashboard/eye.svg" /></a>
        </Link>
        <Link href={`/dashboard`}>
            <a><img className={styles.icon} src="/img/dashboard/check.svg" onClick={() => cambiar_estado(true)}/></a>
        </Link>
        <Link href={`/dashboard`}>
            <a><img className={styles.icon} src="/img/dashboard/cancel.svg" onClick={() => cambiar_estado(false)}/></a>
        </Link>
        </>
    )
}