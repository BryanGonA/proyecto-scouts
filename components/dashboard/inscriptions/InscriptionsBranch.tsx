import styles from "~/styles/dashboard/JefeRama.module.scss";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function MyBranchActions({ id }) {
  const [datosUsuario, setDatosUsuario] = useState(null);
  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/users/${id}`, {
      mode: "cors",
      method: "GET",
      headers: {
        "Referrer-Policy": "origin-when-cross-origin",
        "Authorization": "Bearer " + localStorage.getItem("auth_token"),
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": `${process.env.NEXT_PUBLIC_URL}`,
      },
    })
      .then(async (res) => {
        const data = await res.json();
        if (res.ok) {
          return Promise.resolve(data);
        } else {
          return Promise.reject(data);
        }
      })
      .then((data) => {
        setDatosUsuario(data["data"]);
      });
    
  }, []);

  function manage_user (id, estado){
    datosUsuario.id = id
    datosUsuario.status = estado
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/users/${id}`, {
      mode: 'cors',
      method: 'PUT',
      headers: {
        'Referrer-Policy': 'origin-when-cross-origin',
        "Authorization": "Bearer " + localStorage.getItem("auth_token"),
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': `${process.env.NEXT_PUBLIC_URL}`
      },
      body: JSON.stringify(datosUsuario)
    }).then(async res => {
      const data = await res.json();
      if (res.ok) {
        return Promise.resolve(data);
      } else {
        return Promise.reject(data);
      }
    }).then(data => {
      console.log(data)
      setDatosUsuario(data['data'])
      
    }).catch(error => {
      console.log(error)
    })

  }
/*
  async function cambiar_estado(estado, id) { //cambiar el estado de un usuario
   //el error esta en esta funcion, ya que está sustituyendo los datos del usuario por los datos de otro usuario
   //Debe sustituir los datos del usuario por los datos del usuario que se está editando, trayendo los datos del usuario que se está editando
   //y no de otro usuario, REVISAR ESTA FUNCION y como esta tomando los datos del usuario
    
    
    datosUsuario.status = estado;
    datosUsuario.id = id;
    //datosUsuario.branches = {};
    setDatosUsuario(datosUsuario);

    await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/users/${id}`, {
      method: "PUT",
      headers: {
        "Referrer-Policy": "origin-when-cross-origin",
        'Authorization': "Bearer " + localStorage.getItem("auth_token"),
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": `${process.env.NEXT_PUBLIC_URL}`,
      },

      body: JSON.stringify(datosUsuario),
    })
      .then(async (res) => {
        const data = await res.json();
        if (res.ok) {
          return Promise.resolve(data);
        } else {
          return Promise.reject(data);
        }
      })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  */

  return (
    <>
      <Link href={`/dashboard/info/${id}`}>
        <a>
          <img className={styles.icon} src="/img/dashboard/eye.svg" />
        </a>
      </Link>
      <Link href={`/dashboard`}>
        <a>
          <img
            className={styles.icon}
            src="/img/dashboard/check.svg"
            //onClick={() => cambiar_estado(true, id)}
            onClick={() => manage_user(id, true)}
          />
        </a>
      </Link>
      <Link href={`/dashboard`}>
        <a>
          <img
            className={styles.icon}
            src="/img/dashboard/cancel.svg"
            //onClick={() => cambiar_estado(false, id)}
            onClick={() => manage_user(id, false)}
          />
        </a>
      </Link>
    </>
  );
}
