import { useEffect, useState } from "react"
import useSWR from "swr"

const fetcher = (url)=> fetch(url).then((response) => response.json())

export function useGithubUser(username) {
    const { data, error } = useSWR(`https://api.github.com/users/${username}`, fetcher)
    
    return { 
        user: data, 
        error, 
        isLoading: !data && !error,
    }
}