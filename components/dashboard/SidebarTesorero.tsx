import Slidebar from '~/components/dashboard/sidebar/Sidebar'
import SideLink from './sidebar/SideLink'

export default function SidebarTesorero({content}) {

    return(
        <Slidebar content={content} branch="Tesorero">
            <SideLink href="/dashboard/tesorero" name="Cartera Scouts" svg="/img/dashboard/info.svg" />
            <SideLink href="/dashboard/cambio" name="Cambiar contraseña" svg="/img/dashboard/change.svg"/>
            <SideLink href="/logout" name="Salir" svg="/img/dashboard/logout.svg"/>
        </Slidebar>

    )

}