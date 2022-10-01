
import { NextPage } from "next"
import styles from "~/styles/jefe/Adelanto.module.scss";
import Adelanto from "~/components/Form_adelanto";
import { useRouter } from 'next/router'
import DashboardContainer from "~/components/dashboard/DashboardContainer";
import SidebarSelect from "~/components/dashboard/SidebarSelect";
import withAuth from "~/lib/withAuth";
import { Role } from "~/lib/utils";

const Adelantos: NextPage = () => {
    const router = useRouter()
    const { userId } = router.query
    if (!userId) {
        return null
      }
      const dashboard = <Adelanto Id={userId} />
    return(

        <SidebarSelect content={dashboard} />
    )
}

export default withAuth(Adelantos, Role.RAMA, true)