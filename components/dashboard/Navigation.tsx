import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from '~/styles/dashboard/Navigation.module.scss'

export default function Navigation() {
    const router = useRouter()
    const {userId} = router.query
    const isCurrent = (href) => {
        const isCurrentPath = router.pathname === href || router.asPath === href;
        return isCurrentPath ? styles.active : null
    }
    return(
        <div className={styles.navg_pills}>
            <Link href={`/dashboard/info${userId ? '/'+userId : ''}`}>
                <button className={`${styles.data} ${isCurrent(`/dashboard/info${userId ? '/'+userId : ''}`)}`} >Datos personales</button>
            </Link>
            <Link href={`/dashboard/info/acudientes${userId ? '/'+userId : ''}`}>
                <button className={`${styles.data} ${isCurrent(`/dashboard/info/acudientes${userId ? '/'+userId : ''}`)}`} >Datos acudientes</button>
            </Link>
            <Link href={`/dashboard/info/medicos${userId ? '/'+userId : ''}`}>
                <button className={`${styles.data} ${isCurrent(`/dashboard/info/medicos${userId ? '/'+userId : ''}`)}`} >Datos médicos</button>
            </Link>
        </div>

    )

}