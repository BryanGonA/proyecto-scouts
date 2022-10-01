import { NextPage } from "next";
import { useRouter } from 'next/router'
import DashboardContainer from "~/components/dashboard/DashboardContainer";
import GestionPagos from "~/components/dashboard/tesorero/GestionPago";
import SidebarTesorero from "~/components/dashboard/SidebarTesorero";
import SidebarSelect from "~/components/dashboard/SidebarSelect";
import withAuth from "~/lib/withAuth";
import { Role } from "~/lib/utils";

const Agregar: NextPage = () => {
    const router = useRouter()
    const { idUser } = router.query
    if(!idUser){
        return null
    }

    const dashboard = <GestionPagos id ={idUser}/>
    return (
        <SidebarSelect content={dashboard}/>
    )
}
export default withAuth(Agregar, Role.TESORERO, true)