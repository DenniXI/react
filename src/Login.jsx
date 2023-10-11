import { Checkbox } from "./Checkbox";
import { Password } from "./Password";
import {Username} from "./Username";

export function Login(){


    return(
        <div>
            <Username/>
            <Password/>
            <Checkbox/>
            <button disabled={""}>Login</button>
        </div>
    )
}