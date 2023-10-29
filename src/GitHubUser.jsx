import { useEffect, useState } from "react";
import { useGithubUser } from "./UseGithubUser";

export function GitHubUser({ username }) {
    const { user, loading, error, refetchData } = useGithubUser(username)

    return (
        <div>
            <button onClick={refetchData}>Refetch dei dati</button>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error.message}</p>}

            {user && (
                <div>
                    <h1>{user.name}</h1>
                    <h2>{user.login}</h2>
                    <img src={user.avatar_url} />
                </div>
            )}

        </div>
    )
}
