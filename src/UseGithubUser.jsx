import { useEffect, useState } from "react"

export function useGithubUser(username) {
    const [user, setUser] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)


        async function fetchGit() {
            try {
                const response = await fetch(`https://api.github.com/users/${username}`)
                if (!response.ok) {
                    setError(new Error('Error into fetch response'))
                } else {
                    const data = await response.json()
                    setUser(data)
                    setError(error)
                    console.log(user)
                }
            }
            catch (error) {
                setError(new Error("Error into try-catch"))
            }
            finally {
                setLoading(false)
            }
        }

    
    return { user, error, loading, fetchGit }
}