import { NextPage } from "next";
import ScoutProgress from "~/components/dashboard/progress/ScoutProgress";
import SidebarScout from "~/components/dashboard/SidebarScout";
import { Role } from "~/lib/utils";
import withAuth from '~/lib/withAuth'

const Progress: NextPage = () => {
    const dashboard = <ScoutProgress/>
    return (
        <SidebarScout content={dashboard}/>
    )
}

export default withAuth(Progress, Role.SCOUT, true)