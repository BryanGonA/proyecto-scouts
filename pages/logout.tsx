import { NextPage } from "next"
import '~/styles/login/Login.module.scss'
import { useEffect } from "react";
import { useRouter } from "next/router";
import { mutate } from "swr";

const Logout: NextPage = () => {

    const router = useRouter()

    useEffect(() => {
        localStorage.removeItem("auth_token")
        router.push("/login")
        mutate('/api/auth/profile')
    }, [])
    return (null)
}

export default Logout;