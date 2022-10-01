import { NextPage } from "next";
import MyBranch from "~/components/dashboard/jefe-rama/MyBranch";
import SidebarJefeRama from "~/components/dashboard/SidebarJefeRama";
import SidebarSelect from "~/components/dashboard/SidebarSelect";
import { Role } from "~/lib/utils";
import withAuth from '~/lib/withAuth'

const JefeRama: NextPage = () => {
    const dashboard = <MyBranch/>
    return (
        <SidebarSelect content={dashboard}/>
    )
}

export default withAuth(JefeRama, Role.RAMA, true)