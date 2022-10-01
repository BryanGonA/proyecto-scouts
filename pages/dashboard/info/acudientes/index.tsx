import { NextPage } from "next"
import DashboardContainer from "~/components/dashboard/DashboardContainer"
import Navigation from "~/components/dashboard/Navigation"
import ParentsContainer from "~/components/dashboard/info/parents/ParentsContainer"
import SidebarScout from "~/components/dashboard/SidebarScout"
import SidebarSelect from "~/components/dashboard/SidebarSelect"
import withAuth from '~/lib/withAuth'
import { Role } from "~/lib/utils"

const Acudientes: NextPage = () => {

    const dashboard = <DashboardContainer><ParentsContainer/></DashboardContainer>
    return (
        <SidebarSelect content={dashboard}/>
    )
}

export default withAuth(Acudientes, Role.SCOUT, true)