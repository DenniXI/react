import { useParams } from "react-router-dom";
import { GitHubUser } from "./GitHubUser";

export function ShowGithubUser(){
    const { username = 'user'} = useParams()

    return (
        <div>
            <GitHubUser username={'DenniXI'}/>
        </div>
    )
}