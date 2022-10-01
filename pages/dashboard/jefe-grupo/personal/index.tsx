import { NextPage } from "next";
import PersonalAdministrator from "~/components/dashboard/administrator/Administrator";
import SidebarScout from "~/components/dashboard/SidebarScout";
import SidebarSelect from "~/components/dashboard/SidebarSelect";
import { Role } from "~/lib/utils";
import withAuth from "~/lib/withAuth";

const Administrator: NextPage = () => {
    const dashboard = <PersonalAdministrator/>
    return (
        <SidebarSelect content={dashboard}/>
    )
}

export default withAuth(Administrator, Role.GRUPO, true)