import App from "./App";
import React from 'react';
import {BrowserRouter} from "react-router-dom"

export function Root(){

    return(
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    )
}