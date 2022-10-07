import { NextPage } from "next";
import Cartera from "~/components/dashboard/tesorero/ScoutCartera";
import SidebarTesorero from "~/components/dashboard/SidebarTesorero";
import SidebarSelect from "~/components/dashboard/SidebarSelect";
import withAuth from "~/lib/withAuth";
import { Role } from "~/lib/utils";
import ScoutCartera from "~/components/dashboard/tesorero/ScoutCartera";

const Tesorero: NextPage = () => {
    const dashboard = <ScoutCartera loadingUser={undefined}/>
    return (
        <SidebarSelect content={dashboard}/>
    )
}
export default withAuth(Tesorero, Role.TESORERO, true)