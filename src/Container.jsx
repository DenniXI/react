import { useState } from "react"

export function Container({ title, children }) {
    const [collapsed, setCollapsible] = useState()

    function handleCollapse() {
        setCollapsible((item) => !item)
    }

    return (
        <div className="app">
            <div className="title">
                {title}
                <button onClick={handleCollapse}>Toggle</button>
            </div>
            <div className={!collapsed ? 'app-content' : 'app-content-hidden'}>
                {children}
            </div>
        </div>
    )
}