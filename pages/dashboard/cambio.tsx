import { NextPage } from "next"
import Change from "~/components/change/Change"
import SidebarSelect from "~/components/dashboard/SidebarSelect"
import { Role } from "~/lib/utils"
import withAuth from "~/lib/withAuth"
const ChangePages: NextPage = () => {
    const dashboard = <Change/>
    return (
        <SidebarSelect content={dashboard}/>
    )   
      }
export default withAuth(ChangePages, Role.SCOUT)