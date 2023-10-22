import { useEffect, useState } from "react";
import { useGithubUser } from "./UseGithubUser";

export function GitHubUser({ username }) {
    const {user} = useGithubUser(username)
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