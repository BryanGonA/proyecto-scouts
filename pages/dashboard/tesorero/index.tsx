import { NextPage } from "next";
import Cartera from "~/components/dashboard/tesorero/Cartera";
import SidebarTesorero from "~/components/dashboard/SidebarTesorero";
import SidebarSelect from "~/components/dashboard/SidebarSelect";
import withAuth from "~/lib/withAuth";
import { Role } from "~/lib/utils";

const Tesorero: NextPage = () => {
    const dashboard = <Cartera/>
    return (
        <SidebarSelect content={dashboard}/>
    )
}
export default withAuth(Tesorero, Role.TESORERO, true)