import React, { useState, FC } from "react";
import { Link } from "react-scroll";

interface Props {
    isOpenMenu: boolean;
    openMenuHandler(): void;
}

const Menu: FC<Props> = ({ isOpenMenu, openMenuHandler }) => {
    const closedAndToTop = () => {
        openMenuHandler();
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
    return (
        <>
            <div className={isOpenMenu ? "menu-backdrop" : "menu-backdrop-close"} onClick={() => openMenuHandler()} />
            <div className={isOpenMenu ? "menu-container" : "menu-container-close"} onClick={(e) => e.stopPropagation()}>
                <div className="menu-header-container">
                    <i className="fas fa-bars" onClick={openMenuHandler} />
                    <div className="go-top-button-container">
                        <span className="go-top-button-icon">Hendrix</span>
                    </div>
                </div>
                <nav className="menu-contents" onClick={() => closedAndToTop()}>
                    To Top
                </nav>
                <Link to="page-about" smooth={true}>
                    <nav className="menu-contents" onClick={() => openMenuHandler()}>
                        About
                    </nav>
                </Link>
                <Link to="page-skills" smooth={true}>
                    <nav className="menu-contents" onClick={() => openMenuHandler()}>
                        Skills
                    </nav>
                </Link>
                <Link to="page-project" smooth={true}>
                    <nav className="menu-contents" onClick={() => openMenuHandler()}>
                        Projects
                    </nav>
                </Link>
                <Link to="page-contact" smooth={true}>
                    <nav className="menu-contents" onClick={() => openMenuHandler()}>
                        Contact
                    </nav>
                </Link>
            </div>
        </>
    );
};

export default Menu;
