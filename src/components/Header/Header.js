import React from 'react'
import "./header.scss"

function Header() {
    return (
        <header className="header">
            <div className="logo">GraphQL Jobs</div>
            <div className="header-menu">
                <a href="/">Post a Job</a>
            </div>
        </header>
    )
}

export default Header
