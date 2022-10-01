import { NextPage } from "next";
import ScoutProgress from "~/components/dashboard/progress/ScoutProgress";
import SidebarScout from "~/components/dashboard/SidebarScout";
import { useRouter } from 'next/router'
import SidebarSelect from "~/components/dashboard/SidebarSelect";
import withAuth from '~/lib/withAuth'
import { Role } from "~/lib/utils";

const Progress: NextPage = () => {
    const router = useRouter()
    const { idAdvance } = router.query
    
    const dashboard = <ScoutProgress id = {idAdvance}/>
    if (idAdvance){
        return (
            <SidebarSelect content={dashboard}/>
        )
    }else{
        return null
    }
}

export default withAuth(Progress, Role.RAMA)