import App from "./App";
import React from 'react';
import { BrowserRouter } from "react-router-dom"
import { SWRConfig } from "swr";

export function Root() {

    const fetcher = (url) => fetch(url).then ((response)=>response.json())
    return (
        <SWRConfig value={{fetcher}}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </SWRConfig>

    )
}