import { NextPage } from "next";
import DashboardContainer from "~/components/dashboard/DashboardContainer";
import MedicalData from "~/components/dashboard/info/medical/MedicalData";
import SidebarScout from "~/components/dashboard/SidebarScout";
import SidebarSelect from "~/components/dashboard/SidebarSelect";
import { Role } from "~/lib/utils";
import withAuth from '~/lib/withAuth'

const Medicos: NextPage = () => {
    const dashboard = <DashboardContainer><MedicalData/></DashboardContainer>
    return (
        <SidebarSelect content={dashboard}/>
    )
}

export default withAuth(Medicos, Role.SCOUT, true)