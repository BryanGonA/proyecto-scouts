import { NextPage } from "next";
import DashboardContainer from "~/components/dashboard/DashboardContainer";
import MedicalData from "~/components/dashboard/info/medical/MedicalData";
import SidebarScout from "~/components/dashboard/SidebarScout";
import { useRouter } from 'next/router'
import SidebarSelect from "~/components/dashboard/SidebarSelect";
import withAuth from '~/lib/withAuth'
import { Role } from "~/lib/utils";

const Medicos: NextPage = () => {
  const router = useRouter()
  const { userId } = router.query
  if (!userId) {
    return null
  }
  const dashboard = <DashboardContainer><MedicalData Id={userId} /></DashboardContainer>
  return (
    <SidebarSelect content={dashboard} />
  )
}

export default withAuth(Medicos, Role.RAMA)


