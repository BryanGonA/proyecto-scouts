import HeaderNavigation from './HeaderNavigation'
import NavLink from './NavigationLink';
import styles from '~/styles/layout/Header.module.scss';
import Dropdown from './Dropdown';
import { useCurrentUser } from '~/hooks/use-current-user';

export default function Header() {
    const { isLoading: loadingUser, error: userError } = useCurrentUser()

    return (
        <header className={styles.header}>
            <div className={`${styles['wide-svg']} w-100`} >
                <svg className={styles.red} viewBox="0 0 500 150" preserveAspectRatio="none">
                    <path d="M-13.26,101.14 C149.99,150.00 136.29,73.52 508.17,74.50 L500.00,0.00 L0.00,0.00 Z">
                    </path>
                </svg>
                <div className={`${styles['wide-back']} w-100`} >
                    <svg viewBox="0 0 500 150" preserveAspectRatio="none">
                        <path d="M-17.21,110.03 C149.26,174.17 137.97,95.22 505.36,100.16 L500.00,0.00 L0.00,0.00 Z">
                        </path>
                    </svg>
                </div>
            </div>
            <HeaderNavigation>
                <NavLink href="/" name="Inicio" />
                <NavLink href="/nosotros" name="Sobre nosotros" />
                <NavLink href="/noticias" name="Noticias" />
                <NavLink href="#" name="Ramas" >
                    <Dropdown href="/ramas/cachorros" name="Cachorros" />
                    <Dropdown href="/ramas/lobatos" name="Lobatos" />
                    <Dropdown href="/ramas/webelos" name="Webelos" />
                    <Dropdown href="/ramas/scouts" name="Scouts" />
                    <Dropdown href="/ramas/rovers" name="Rovers" />
                </NavLink>
                {!loadingUser && !userError ?
                <>
                    <NavLink href="/dashboard" name="Mi tablero" />
                    <NavLink href="/logout" name="Salir" svg="/img/dashboard/logout-w.svg" />
                </>
                :
                <>
                    <NavLink href="/unete" name="Únete" />
                    <NavLink href="/login" name="Ingresar" svg="/img/usuario.svg" />
                </>
                }
            </HeaderNavigation>
        </header >
    )
}