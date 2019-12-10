import React, { useState, useEffect } from "react";
import "./Header.css";
import Row from "react-bootstrap/Row";
import AnchorLink from "react-anchor-link-smooth-scroll";
// import { Link } from "react-router-dom";
import Logo from "../Media/Image/logo/logo3.png";
import Active from "../LangBtn/Active/Active";
import LangBtn from "../LangBtn/LangBtn";
import { Translate } from "react-localize-redux";
import Dropdown from "react-bootstrap/Dropdown";
import Sidebar from "react-sidebar";

import menuIco from "../Media/Image/header/menu.png";

function Header(props) {
    const [sidebarOpenMenu, setSidebarOpenMenu] = useState(false);
    const [headerClassIsActive, setHeaderClassIsActive] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            setHeaderClassIsActive(window.scrollY !== 0 ? true : false);
        });
    }, []);
    function closeAllSides() {
        setSidebarOpenMenu(false);
    }
    function onSetSidebarOpenMenu() {
        if (sidebarOpenMenu === true) {
            setSidebarOpenMenu(false);
        } else {
            closeAllSides();
            setSidebarOpenMenu(true);
        }
    }

    return (
        <header id="header" className={headerClassIsActive ? "top" : "normal"}>
            <div className="container-custom">
                <Row noGutters="false">
                    <AnchorLink className="logo" offset="100" href="#banner">
                        <img src={Logo} alt="Logo" />
                    </AnchorLink>
                    <div className="nav-bar">
                        <div className="nav-bar__box">
                            <AnchorLink
                                className="router-link"
                                offset="100"
                                href="#aboutMe"
                            >
                                  <Translate id="header.aboutMe" />  
                            </AnchorLink>
                            <AnchorLink
                                className="router-link"
                                offset="100"
                                href="#skills"
                            >
                                <Translate id="header.skills" />
                            </AnchorLink>
                            <AnchorLink
                                className="router-link"
                                offset="100"
                                href="#resume"
                            >
                                <Translate id="header.resume" />
                            </AnchorLink>
                            <AnchorLink
                                className="router-link"
                                offset="100"
                                href="#bio"
                            >
                                <Translate id="header.bio" />
                            </AnchorLink>
                            <AnchorLink
                                className="router-link"
                                offset="100"
                                href="#portfolio"
                            >
                                <Translate id="header.portfolio" />
                            </AnchorLink>
                            <AnchorLink
                                className="router-link"
                                offset="100"
                                href="#contact"
                            >
                                <Translate id="header.contact" />
                            </AnchorLink>
                            <Dropdown className="lang">
                                <Dropdown.Toggle
                                    className=""
                                    variant="success"
                                    id="dropdown-basic"
                                >
                                    <Active />
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <LangBtn />
                                </Dropdown.Menu>
                            </Dropdown>
                            {/* <div className="lang">
							<Active />
							<div className="lang__more">
								<LangBtn />
							</div>
						</div> */}
                        </div>
                        <div className="nav-bar__mobile">
                            <Dropdown className="lang">
                                <Dropdown.Toggle
                                    className=""
                                    variant="success"
                                    id="dropdown-basic"
                                >
                                    <Active />
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <LangBtn />
                                </Dropdown.Menu>
                            </Dropdown>
                            <div className="sidebarMenu">
                                <Sidebar
                                    sidebarClassName="sidebar"
                                    open={sidebarOpenMenu}
                                    onSetOpen={onSetSidebarOpenMenu}
                                    touch={true}
                                    pullRight={true}
                                    touchHandleWidth={0}
                                    sidebar={
                                        <div className="sidebar__body">
                                            <AnchorLink
                                                className="router-link"
                                                offset="100"
                                                href="#aboutMe"
                                            >
                                                    <Translate id="header.aboutMe" />
                                            </AnchorLink>
                                            <AnchorLink
                                                className="router-link"
                                                offset="100"
                                                href="#skills"
                                            >
                                                <Translate id="header.skills" />
                                            </AnchorLink>
                                            <AnchorLink
                                                className="router-link"
                                                offset="100"
                                                href="#resume"
                                            >
                                                <Translate id="header.resume" />
                                            </AnchorLink>
                                            <AnchorLink
                                                className="router-link"
                                                offset="100"
                                                href="#bio"
                                            >
                                                <Translate id="header.bio" />
                                            </AnchorLink>
                                            <AnchorLink
                                                className="router-link"
                                                offset="100"
                                                href="#portfolio"
                                            >
                                                <Translate id="header.portfolio" />
                                            </AnchorLink>
                                            <AnchorLink
                                                className="router-link"
                                                offset="100"
                                                href="#contact"
                                            >
                                                <Translate id="header.contact" />
                                            </AnchorLink>
                                        </div>
                                    }
                                >
                                    <button
                                        id="menu-btn"
                                        aria-label="side"
                                        className="side-btn btn-menu"
                                        onClick={() => onSetSidebarOpenMenu()}
                                    >
                                        <img src={menuIco} alt="Menu" />
                                    </button>
                                </Sidebar>
                            </div>
                        </div>
                    </div>
                </Row>
            </div>
        </header>
    );
}

export default Header;
