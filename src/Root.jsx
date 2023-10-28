import App from "./App";
import React from 'react';
import { BrowserRouter } from "react-router-dom"
import { SWRConfig } from "swr";

export function Root() {

    return (
        <SWRConfig>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </SWRConfig>

    )
}