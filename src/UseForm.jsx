import { useState } from "react";

export function useForm(){
    const [value, setValue] = useState({
        username: '',
        password: '',
    });

    function handleUsername(event){
        setValue(prev => {
            return {
                ...prev,
                username: event.target.value
            }
        })
    }

    function handlePassword(event){
        setValue(prev => {
            return {
                ...prev,
                password: event.target.value
            }
        })
    }

    return {
        value: value,
        onChangeUsername: handleUsername,
        onChangePassword: handlePassword,
    }
}