import { NextPage } from "next";
import ScoutPayments from "~/components/dashboard/payments/ScoutPayments";
import { useRouter } from 'next/router'
import SidebarSelect from "~/components/dashboard/SidebarSelect";
import withAuth from '~/lib/withAuth'
import { Role } from "~/lib/utils";

const Payments: NextPage = () => {
    const router = useRouter()
    const { idPago } = router.query
    if (!idPago) {
        return null
    }
    const dashboard = <ScoutPayments idPago={idPago}/>
    return (
        <SidebarSelect content={dashboard}/>
    )
}

export default withAuth(Payments, Role.RAMA)