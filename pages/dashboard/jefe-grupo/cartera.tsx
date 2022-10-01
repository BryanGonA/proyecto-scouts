import { NextPage } from "next";
import JefeGrupoCartera from "~/components/dashboard/administrator/Cartera";
import Inscriptions from "~/components/dashboard/inscriptions/Inscriptions";
import SidebarSelect from "~/components/dashboard/SidebarSelect";
import { Role } from "~/lib/utils";
import withAuth from "~/lib/withAuth";

const JefeGrupo: NextPage = () => {
    const dashboard = <JefeGrupoCartera/>
    return (
        <SidebarSelect content={dashboard}/>
    )
}

export default withAuth(JefeGrupo, Role.GRUPO, true)