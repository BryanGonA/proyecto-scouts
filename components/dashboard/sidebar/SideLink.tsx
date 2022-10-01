import Link from 'next/link'
import { useRouter } from 'next/router'
import { useContext } from 'react'
import styles from '~/styles/dashboard/Slidebar.module.scss'
import { SidebarContext } from './Sidebar'

export interface SideLinkProps {
    href: string,
    name: string,
    svg?: string
}

export default function SideLink({href, name, svg}: SideLinkProps) {
    const router = useRouter()
    const responsive = useContext(SidebarContext)
    const isCurrentPath = router.pathname.startsWith(href) || router.asPath.startsWith(href);
    return(
        <Link href={href}>

            <div className={`d-flex align-items-center justify-content-start ${styles.sidelink} ${isCurrentPath ? styles.active : ''}`}>
            {svg ? <img className={styles.sideicon} src={svg} /> : null}
            {!responsive ? <a >{name}</a> : null}
            </div>
        </Link>

    )

}