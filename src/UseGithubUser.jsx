import { useEffect, useState } from "react"
import useSWR from "swr"

const fetcher = (url)=> fetch(url).then((response) => response.json())

export function useGithubUser(username) {
    const shouldFetch = username !== null && username !== undefined

    const { data, error } = useSWR(
        shouldFetch ? `https://api.github.com/users/${username}` : null, fetcher
        );
    
    return { 
        user: data, 
        error, 
        isLoading: shouldFetch && !data && !error,
    }
}