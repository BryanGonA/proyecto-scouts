import useSWR from "swr";
import { ResponseUser } from "~/lib/commonInterfaces";
import { fetcherWithToken } from "~/lib/fetcher";
import { useUserBranch, useUserImage } from "./use-user";

export function useCurrentUser() : ResponseUser {
    const { data: user, error } = useSWR('/api/auth/profile', fetcherWithToken)
    return {
        user: user ? user.user : null,
        isLoading: error || !user,
        error: error
    }
}

export function useCurrentBranch() {
    const { data } = useSWR('/api/auth/profile', fetcherWithToken)
    return useUserBranch(data ? data.user.id : null)
}

export function useCurrentImage() {
    const { data } = useSWR('/api/auth/profile', fetcherWithToken)
    return useUserImage(data ? data.user.id : null)
}