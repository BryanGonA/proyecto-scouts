import { NextPage } from "next";
import AgregarPersonal from "~/components/dashboard/administrator/AddPersonas";
import SidebarScout from "~/components/dashboard/SidebarScout";
import SidebarSelect from "~/components/dashboard/SidebarSelect";
import { Role } from "~/lib/utils";
import withAuth from "~/lib/withAuth";

const AgregarPersonalPage: NextPage = () => {
    const dashboard = <AgregarPersonal/>
    return (
        <SidebarSelect content={dashboard}/>
    )
}

export default withAuth(AgregarPersonalPage, Role.GRUPO, true)