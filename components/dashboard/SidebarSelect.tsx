import Slidebar from '~/components/dashboard/sidebar/Sidebar'
import { useCurrentUser } from '~/hooks/use-current-user'
import SidebarJefeRama from './SidebarJefeRama'
import SidebarScout from './SidebarScout'
import SidebarJefeGrupo from './SidebarJefeGrupo'
import { Role } from '~/lib/utils'
import SidebarTesorero from './SidebarTesorero'

export default function SidebarSelect({content}) {
    const { user, isLoading: loadingUser, error: userError } = useCurrentUser()
    if (!loadingUser) {
        let role = Role[Role[user.roles.id-1]];
        switch (Role[Role[user.roles.id-1]]){
            case Role.SCOUT:
                return <SidebarScout content={content} />
            case Role.GRUPO:
                return <SidebarJefeGrupo content={content} />
            case Role.RAMA:
                return <SidebarJefeRama content={content}/>
            case Role.TESORERO:
                return <SidebarTesorero content={content}/>
        }
    }
    return <SidebarScout content={content} />
}