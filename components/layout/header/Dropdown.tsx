import Link from 'next/link'
import { useRouter } from 'next/router';
import styles from '~/styles/layout/Header.module.scss'

export interface DropdownProps {
    href: string,
    name: string,
}

export default function Dropdown({ href, name }: DropdownProps) {
    const router = useRouter()
    const isCurrentPath = router.pathname === href || router.asPath === href;
    return (
        <Link href={href}><a className={isCurrentPath ? styles.active_sub : ''}>{name}</a></Link>
    )
}