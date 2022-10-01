import Slidebar from '~/components/dashboard/sidebar/Sidebar'
import SideLink from './sidebar/SideLink'

export default function SidebarScout({content}) {

    return(
        <Slidebar content={content}>
            <SideLink href="/dashboard/info" name="Información personal" svg="/img/dashboard/info.svg" />
            <SideLink href="/dashboard/progress" name="Mi progreso" svg="/img/dashboard/progress.svg"/>
            <SideLink href="/dashboard/payments" name="Mis pagos" svg="/img/dashboard/payments.svg"/>
            <SideLink href="/dashboard/cambio" name="Cambiar contraseña" svg="/img/dashboard/change.svg"/>
            <SideLink href="/logout" name="Salir" svg="/img/dashboard/logout.svg"/>
        </Slidebar>

    )

}