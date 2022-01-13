import React, { FC } from "react";
import { Link } from "react-scroll";

interface Props {
    openMenuHandler(): void;
}

const Menu: FC<Props> = ({ openMenuHandler }) => {
    const closedAndToTop = () => {
        openMenuHandler();
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
    return (
        <>
            <div className="menu-backdrop" onClick={() => openMenuHandler()}>
                <div className="menu-container" onClick={(e) => e.stopPropagation()}>
                    <div className="menu-contents" onClick={() => closedAndToTop()}>
                        To Top
                    </div>
                    <Link to="page-about" smooth={true}>
                        <div className="menu-contents" onClick={() => openMenuHandler()}>
                            About
                        </div>
                    </Link>
                    <Link to="page-skills" smooth={true}>
                        <div className="menu-contents" onClick={() => openMenuHandler()}>
                            Skills
                        </div>
                    </Link>
                    <Link to="page-project" smooth={true}>
                        <div className="menu-contents" onClick={() => openMenuHandler()}>
                            Projects
                        </div>
                    </Link>
                    <Link to="page-contact" smooth={true}>
                        <div className="menu-contents" onClick={() => openMenuHandler()}>
                            Contact
                        </div>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Menu;
