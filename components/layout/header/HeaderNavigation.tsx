import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import styles from '~/styles/layout/Header.module.scss'
import { useRouter } from "next/router";
import { useCookies } from "react-cookie";

export default function HeaderNavigation({ children }: any) {
    const router = useRouter()
    const navBar = useRef(null);
    const button = useRef(null);
    const [active, setActive] = useState(false);
    const [cookies, setCookie] = useCookies(['visited']);
    
    const onClick = async () => {
        setActive(!active)
    }
    useEffect(() => {
        if (active) {
            document.body.className = "scroll";
            button.current.className=`${styles.checkbtn} hamburger hamburger--slider is-active`
        } else {
            if (cookies.visited ? cookies.visited : false) {
                document.body.className = "";
            }
            button.current.className=`${styles.checkbtn} hamburger hamburger--slider`
        }
        const handleRouteChange = (url: string) => {
            if (url !== '/ramas') {
                setActive(false)
            }
        }
    
        router.events.on('routeChangeStart', handleRouteChange)
    
        // If the component is unmounted, unsubscribe
        // from the event with the `off` method:
        return () => {
          router.events.off('routeChangeStart', handleRouteChange)
        }
    }, [active])
    return (
        <nav className={styles.nav}>
            <button className={`${styles.checkbtn} hamburger hamburger--slider`} onClick={onClick} ref={button}>
                <span className="hamburger-box">
                    <span className="hamburger-inner">
                </span>
            </span>
            </button>
            <Link href="/">
                <a className={styles.logo}>
                    <img src="/img/pañoleta.png" alt="Pañoleta" />
                    {/* <img src="/logo.png" alt="Logo 113" />
                    <img src="/img/ACE.png" alt="ACE" /> */}
                </a>
            </Link>
            <ul className={active ? `${styles.ul} ${styles.responsive}` : styles.ul} ref={navBar}>
                {children}
            </ul>
        </nav>
    )
}