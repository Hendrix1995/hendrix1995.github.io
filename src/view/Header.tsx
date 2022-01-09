import React from "react";

function Header() {
    return (
        <header className="header-container">
            <nav className="name-box">Hyeonseong Lim</nav>
            <div className="navigation-container">
                <nav className="navigation-text">Skills</nav>
                <nav className="navigation-text">Projects</nav>
                <nav className="navigation-text">Contact</nav>
            </div>
            <i className="fas fa-bars" />
        </header>
    );
}

export default Header;
