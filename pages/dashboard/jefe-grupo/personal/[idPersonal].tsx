import { NextPage } from "next";
import ActualizarPersonal from "~/components/dashboard/administrator/UpdatePersonal";
import { useRouter } from 'next/router'
import SidebarScout from "~/components/dashboard/SidebarScout";
import SidebarSelect from "~/components/dashboard/SidebarSelect";
import withAuth from "~/lib/withAuth";
import { Role } from "~/lib/utils";

const ActualizarPersonalPage: NextPage = () => {
    const router = useRouter()
    const { idPersonal } = router.query
    if (!idPersonal) {
        return null
      }
    const dashboard = <ActualizarPersonal  idPersonal={idPersonal}/>
    return (
        <SidebarSelect  content={dashboard}/>
    )
}

export default withAuth(ActualizarPersonalPage, Role.GRUPO, true)