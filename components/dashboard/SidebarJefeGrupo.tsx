import Slidebar from '~/components/dashboard/sidebar/Sidebar'
import SideLink from './sidebar/SideLink'

export default function SidebarScout({content}) {

    return(
        <Slidebar content={content} branch="Jefe de Grupo">
            <SideLink href="/dashboard/jefe-grupo/inscripciones" name="Inscripciones" svg="/img/dashboard/info.svg" />
            <SideLink href="/dashboard/jefe-grupo/personal" name="Gestión personal" svg="/img/dashboard/person.svg" />            
            <SideLink href="/dashboard/jefe-grupo/cartera" name="Cartera Centinelas 113" svg="/img/dashboard/wallet.svg" />
            <SideLink href="/dashboard/cambio" name="Cambiar contraseña" svg="/img/dashboard/change.svg"/>
            <SideLink href="/logout" name="Salir" svg="/img/dashboard/logout.svg"/>
        </Slidebar>

    )

}
