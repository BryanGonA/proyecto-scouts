import useSWR from "swr";
import { Branch, ResponseBranch } from "~/lib/commonInterfaces";
import { fetcherBlobWithToken, fetcherWithToken } from "~/lib/fetcher";

export function useUserImage(userId: number) {
    const { data: image, error } = useSWR(userId ? `/api/users/image/${userId}` : null, fetcherBlobWithToken)
    return {
        image: image,
        isLoading: error || !image,
        error: error
    }
}

export function useUserBranch(userId: number): ResponseBranch {
    const { data: branch, error } = useSWR(userId ? `/api/users/branches/${userId}` : null, fetcherWithToken)
    return {
        branch: branch ? branch.data.branches : null,
        isLoading: error || !branch,
        error: error
    }
}