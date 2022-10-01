import Slidebar from '~/components/dashboard/sidebar/Sidebar'
import SideLink from './sidebar/SideLink'

export default function SidebarScout({content}) {

    return(
        <Slidebar content={content} branch="Jefe de Rama">
            <SideLink href="/dashboard/jefe-rama" name="Mi rama" svg="/img/dashboard/info.svg" />
            <SideLink href="/dashboard/cambio" name="Cambiar contraseña" svg="/img/dashboard/change.svg"/>
            <SideLink href="/logout" name="Salir" svg="/img/dashboard/logout.svg"/>
        </Slidebar>

    )

}