import { useEffect, useState } from "react";
import { useGithubUser } from "./UseGithubUser";
import { useCurrentLocation } from "./UseCurrentLocation";

export function GitHubUser({ username }) {
    const {user} = useGithubUser(username)
    const {location, error, loading, getCurrentLocation} = useCurrentLocation({})

    if (!user) {
        return <h1>{loading}...</h1>;
    } else {
        return (
            <div>
                <h1>{location}</h1>
                <h2>{user.name}</h2>
                <h2>{user.login}</h2>
                <img src={user.avatar_url}/>
            </div>
        )
    }
}