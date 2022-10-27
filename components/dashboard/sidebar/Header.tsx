import styles from '~/styles/dashboard/Slidebar.module.scss'
import { useRouter } from 'next/router'
import { useCurrentBranch, useCurrentImage, useCurrentUser } from '~/hooks/use-current-user'
import { useContext } from 'react'
import { SidebarContext } from './Sidebar'
import { useEffect, useRef, useState } from "react";


export default function Header({branchName} : any) {
    const [values, setValues] = useState(null)
    const router = useRouter()
    const photo = useRef(null);
    const images = useRef(null);
    const { user, isLoading: loadingUser, error: userError } = useCurrentUser()
    const { image, isLoading: loadingImage } = useCurrentImage()
    let branchP


    const method = () => {
        if (photo.current.files[0]) {
            var filesize = photo.current.files[0].size;
            if (filesize > 10000000) {
                alert('El archivo no debe superar los 10MB');
                photo.current.value = '';
                photo.current.files[0].name = '';
                return
            }
            var file = photo.current.files[0];
            var reader = new FileReader();
            reader.onload = function (e) {
                images.current.src = e.target.result
            }
            reader.readAsDataURL(file);
            setValues({ ...values, photo: file })
        }
        
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

        <div className="row">
          <div className={styles.div_file}>
            <p className={styles.text}>*Seleccionar foto</p>
            <input
              type="file"
              disabled
              id="btn_upload"
              accept="image/jpeg,image/png"
              className={styles.btn_upload}
              ref={photo}
              onChange={method}
            />
          </div>
        </div>
      </div>
    );

}