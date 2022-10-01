import { NextPage } from "next";
import DashboardContainer from "~/components/dashboard/DashboardContainer";
import Navigation from "~/components/dashboard/Navigation";
import PersonalInformation from "~/components/dashboard/info/personal/PersonalInfo";
import SidebarScout from "~/components/dashboard/SidebarScout";
import SidebarSelect from "~/components/dashboard/SidebarSelect";
import withAuth from '~/lib/withAuth'
import { Role } from "~/lib/utils";

const Dashboard: NextPage = () => {
    const dashboard = <DashboardContainer><PersonalInformation/></DashboardContainer>
    return (
        <SidebarSelect content={dashboard}/>
    )
}

export default withAuth(Dashboard, Role.SCOUT, true)