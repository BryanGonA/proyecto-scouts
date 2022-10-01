import { NextPage } from "next"
import DashboardContainer from "~/components/dashboard/DashboardContainer"
import Navigation from "~/components/dashboard/Navigation"
import ParentsContainer from "~/components/dashboard/info/parents/ParentsContainer"
import SidebarScout from "~/components/dashboard/SidebarScout"
import { useRouter } from 'next/router'
import SidebarSelect from "~/components/dashboard/SidebarSelect"
import withAuth from '~/lib/withAuth'
import { Role } from "~/lib/utils"

const Acudientes: NextPage = () => {
  const router = useRouter()
  const { userId } = router.query
  if (!userId) {
    return null
  }
  const dashboard = <DashboardContainer><ParentsContainer userId={userId} /></DashboardContainer>
  return (
    <SidebarSelect content={dashboard} />
  )
}

export default withAuth(Acudientes, Role.RAMA)