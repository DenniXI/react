import { useEffect, useState } from "react";
import { useGithubUser } from "./UseGithubUser";

export function GitHubUser({ username }) {
    const { user } = useGithubUser(username)
    if (!user) {
        return <h1>Loading...</h1>;
    } else {
        return (
            <div>
                {loading && <p>Loading...</p>}
                {error && <p>Error: {error.message}</p>}
                <h1>{user.name}</h1>
                <h2>{user.login}</h2>
                <img src={user.avatar_url} />
            </div>
        )
    }
}