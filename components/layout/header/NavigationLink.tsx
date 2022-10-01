import { useRouter } from 'next/router'
import Link from 'next/link'
import styles from '~/styles/layout/Header.module.scss'
import {DropdownProps} from './Dropdown'
import { useRef, useState } from 'react'

interface Props {
    href: string,
    name: string,
    svg?: string,
    children?: React.ReactElement<DropdownProps> | React.ReactElement<DropdownProps>[],
}

export default function NavigationLink({ href, name, svg, children }: Props) {
    const router = useRouter()
    const [active, setActive] = useState(false);
    const isCurrentPath = router.pathname === href || router.asPath === href || (router.pathname.includes('dashboard') && href.includes('dashboard'));

    const content = useRef(null)

    const onClick = () => {
        setActive(!active)
        if (content.current) {
            if (content.current.style.maxHeight){
                content.current.style.maxHeight = null;
            } else {
                content.current.style.maxHeight = content.current.scrollHeight + "px";
            } 
        }
    }

    const link = <a className={`${styles.navbtn} ${isCurrentPath ? styles.active : ''} ${children ? styles.collapsible : ''} ${children && active ? styles.active_collapse: ''}`} onClick={onClick}>{name}{svg ? <img className={styles.navicon} src={svg} /> : null}</a>
    return (
        <li className={children ? styles.dropdown : null}>

            {children ?
            <>
                {link}
                <div className={`${styles['dropdown-content']} `}>
                    <div className={styles.content} ref={content}>{children}</div>
                </div>
            </>:
                <Link href={href}>
                    {link}
                </Link>
            }
        </li>
    )
}