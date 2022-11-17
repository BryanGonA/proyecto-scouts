import styles from '~/styles/dashboard/Slidebar.module.scss'
import { useRouter } from 'next/router'
import { useCurrentBranch, useCurrentImage, useCurrentUser } from '~/hooks/use-current-user'
import { useContext } from 'react'
import { SidebarContext } from './Sidebar'
import { useEffect, useRef, useState } from "react";


export default function Header({branchName} : any) {
    const [values, setValues] = useState(null)
    const router = useRouter()
    const photo1 = useRef(null);
    const images = useRef(null);
    const { user, isLoading: loadingUser, error: userError } = useCurrentUser()
    const { image, isLoading: loadingImage } = useCurrentImage()
    let branchP


    const method1 = () => {
      if (photo1.current.files[0]) {
        var filesize = photo1.current.files[0].size;
        if (filesize > 10000000) {
          alert("El archivo no debe superar los 10MB");
          photo1.current.value = "";
          photo1.current.files[0].name = "";
          return;
        }
        var file = photo1.current.files[0];
        var reader = new FileReader();
        reader.onload = function (e) {
          images.current.src = e.target.result;
        };
        reader.readAsDataURL(file);
        setValues({ ...values, photo1: file });
      }
      
        let photo = new FormData();
        photo.append("file", values.photo);
        //photo.append("id", userId);
      fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/upload/photo/${user.id}`,{
        method: 'POST',
        body: photo,
        headers: {
          'Authorization': "Bearer " + localStorage.getItem("auth_token"),
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': `${process.env.NEXT_PUBLIC_URL}`,
        },
      })
      .then(async (res) => {
        const data = await res.json();
        if (res.ok) {
          return Promise.resolve(data);
        } else {
          return Promise.reject(data);
        }
      }
      )
      .then((data) => {
        console.log(data);
      }
      )
    };
    
    
    if (!branchName) {
        const { branch, isLoading: loadingBranch } = useCurrentBranch()
        branchP = <p className={styles.branch}>{loadingBranch ? "Cargando..." : branch.nameBranch}</p>
    } else {
        branchP = <p className={styles.branch}>{branchName}</p>
    }
    const responsive = useContext(SidebarContext)
    return (
      <div className={styles.header}>
        <img className={styles.image} src={loadingImage ? "/img/profile-picture.png" : URL.createObjectURL(image)} ref={images}/>
        <p className={styles.name}>
          {loadingUser
            ? "Cargando..."
            : (user.name + " " + user.lastName).toLowerCase()}
        </p>
        {branchP}
          <div className={styles.div_file}>
            <p className={styles.text}>*Seleccionar foto</p>
            <input
              type="file"
              disabled
              id="btn_upload1"
              accept="image/jpeg,image/png"
              className={styles.btn_upload1}
              defaultValue={values?.photo1}
              ref={photo1}
              onChange={method1}
            />
          </div>
        
      </div>
    );

}