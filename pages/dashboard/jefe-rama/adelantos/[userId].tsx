import { NextPage } from "next";
import ScoutAdelantos from "~/components/dashboard/jefe-rama/ScoutsAdelantos";
import SidebarScout from "~/components/dashboard/SidebarScout";
import { useRouter } from 'next/router'
import withAuth from '~/lib/withAuth'
import SidebarSelect from "~/components/dashboard/SidebarSelect";
import { Role } from "~/lib/utils";


const Adelantos: NextPage = () => {
    const router = useRouter()
    const { userId } = router.query
    if (!userId) {
        return null
      }
    const dashboard = <ScoutAdelantos Id={userId}/>
    
    return (
        <SidebarSelect content={dashboard}/>
    )
}

export default withAuth(Adelantos, Role.RAMA, true)







