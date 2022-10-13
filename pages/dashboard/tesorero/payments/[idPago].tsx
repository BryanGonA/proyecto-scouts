import { NextPage } from "next";
import ScoutPaymentsPersonal from "~/components/dashboard/payments/ScoutPaymentsPersonal";
import { useRouter } from 'next/router'
import SidebarSelect from "~/components/dashboard/SidebarSelect";
import withAuth from '~/lib/withAuth'
import { Role } from "~/lib/utils";
import Cartera from "../../jefe-grupo/cartera";

const Payments: NextPage = () => {
    const router = useRouter()
    const { idPago } = router.query
    if (!idPago) {
        return null
    }
    const dashboard = <ScoutPaymentsPersonal idPago={idPago}/>
    return (
        <SidebarSelect content={dashboard}/>
    )
}

const cartera: NextPage = () => {
    const router = useRouter()
    const { idPago } = router.query
    if (!idPago) {
        return null
    }
    const dashboard = <Cartera idPago={idPago}/>
    return (
        <SidebarSelect content={dashboard}/>
    )
}
export default withAuth(Payments, Role.TESORERO, true)