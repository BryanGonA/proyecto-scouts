import { NextPage } from "next";
import ScoutPayment from "~/components/dashboard/payments/ScoutPayments";
import SidebarSelect from "~/components/dashboard/SidebarSelect";
import { Role } from "~/lib/utils";
import withAuth from '~/lib/withAuth'

const Payments: NextPage = () => {
    const dashboard = <ScoutPayment />
    return (
        <SidebarSelect content={dashboard}/>
    )
}

export default withAuth(Payments, Role.SCOUT, true)