import { NextPage } from "next";
import { useRouter } from 'next/router'
import DashboardContainer from "~/components/dashboard/DashboardContainer";
import GestionPagos from "~/components/dashboard/tesorero/GestionPago";
import SidebarTesorero from "~/components/dashboard/SidebarTesorero";
import SidebarSelect from "~/components/dashboard/SidebarSelect";
import withAuth from "~/lib/withAuth";
import { Role } from "~/lib/utils";

const Editar: NextPage = () => {
    const router = useRouter()
    const { userId, paymentId } = router.query
    if(!userId || !paymentId){
        return null
    }

    const dashboard = <GestionPagos id ={userId} paymentId={paymentId}/>
    return (
        <SidebarSelect content={dashboard}/>
    )
}
export default withAuth(Editar, Role.TESORERO, true)