import { NextPage } from "next";
import DashboardContainer from "~/components/dashboard/DashboardContainer";
import Navigation from "~/components/dashboard/Navigation";
import PersonalInformation from "~/components/dashboard/info/personal/PersonalInfo";
import SidebarScout from "~/components/dashboard/SidebarScout";
import { useRouter } from 'next/router'
import SidebarSelect from "~/components/dashboard/SidebarSelect";
import withAuth from '~/lib/withAuth'
import { Role } from "~/lib/utils";
const Dashboard: NextPage = () => {
  const router = useRouter()
  const { userId } = router.query
  if (!userId) {
    return null
  }
  const dashboard = <DashboardContainer><PersonalInformation Id={userId} /></DashboardContainer>
  return (
    <SidebarSelect content={dashboard} />
  )
}

export default withAuth(Dashboard, Role.RAMA)