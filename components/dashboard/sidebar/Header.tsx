import styles from '~/styles/dashboard/Slidebar.module.scss'
import { useRouter } from 'next/router'
import { useCurrentBranch, useCurrentImage, useCurrentUser } from '~/hooks/use-current-user'
import { useContext } from 'react'
import { SidebarContext } from './Sidebar'

export default function Header({branchName} : any) {
    const router = useRouter()
    const { user, isLoading: loadingUser, error: userError } = useCurrentUser()
    const { image, isLoading: loadingImage } = useCurrentImage()
    let branchP
    if (!branchName) {
        const { branch, isLoading: loadingBranch } = useCurrentBranch()
        branchP = <p className={styles.branch}>{loadingBranch ? "Cargando..." : branch.nameBranch}</p>
    } else {
        branchP = <p className={styles.branch}>{branchName}</p>
    }
    const responsive = useContext(SidebarContext)
    return(
        <div className={styles.header}>
            <img className={styles.image} src={loadingImage ? "/img/profile-picture.png" : URL.createObjectURL(image)}/>
            <p className={styles.name}>{loadingUser ? "Cargando..." : (user.name + ' ' + user.lastName).toLowerCase()}</p>
            {branchP}
        </div>
    )

}