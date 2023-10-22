import { useEffect, useState } from "react"

export function useGithubUser(username){
    const [user, setUser] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function fetchGit() {
            try {
                const response = await fetch(`https://api.github.com/users/${username}`)
                if (!response.ok) {
                    console.log('error into fetch response')
                } else {
                    const data = await response.json()
                    setUser(data)
                    console.log(user)
                }
            }
            catch (error) {
            console.log(error)}
        }
         
        fetchGit()
    }, [username])

    return {user}
}