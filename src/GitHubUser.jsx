import { useEffect, useState } from "react";

export function GitHubUser({ username }) {
    const [user, setUser] = useState(null)


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

    if (!user) {
        return <h1>Loading...</h1>;
    } else {
        return (
            <div>
                <h1>{user.name}</h1>
                <h2>{user.login}</h2>
                <img src={user.avatar_url}/>
            </div>
        )
    }
}