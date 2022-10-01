import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useCurrentUser } from "~/hooks/use-current-user";
import { redirectByRole, Role } from "~/lib/utils";
import withAuth from '~/lib/withAuth'

const MainDashboard: NextPage = () => {
    const { user, isLoading: loadingUser } = useCurrentUser()
    const router = useRouter()
    useEffect(() => {
        if (!loadingUser) {
            redirectByRole(router, Role[Role[user.roles.id-1]])
        }
    }, [user])
    return <></>
}

export default withAuth(MainDashboard)


