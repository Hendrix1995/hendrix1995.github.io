import React, { useState } from "react";
import { Link } from "react-scroll";
import Menu from "../components/Menu";

function Header() {
    const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);
    const openMenuHandler = () => {
        setIsOpenMenu(!isOpenMenu);
    };

    return (
        <header className="header-container">
            <i className="fas fa-bars" onClick={openMenuHandler} />
            <nav className="name" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                Hyeonseong Lim/@Hendrix
            </nav>
            <div className="navigation-container">
                <nav className="navigation-text" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                    Home
                </nav>
                <Link to="page-about" smooth={true}>
                    <nav className="navigation-text">About</nav>
                </Link>
                <Link to="page-skills" smooth={true}>
                    <nav className="navigation-text">Skills</nav>
                </Link>
                <Link to="page-project" smooth={true}>
                    <nav className="navigation-text">Projects</nav>
                </Link>
                <Link to="page-contact" smooth={true}>
                    <nav className="navigation-text">Contact</nav>
                </Link>
            </div>
            <Menu isOpenMenu={isOpenMenu} openMenuHandler={openMenuHandler} />
        </header>
    );
}

export default Header;
