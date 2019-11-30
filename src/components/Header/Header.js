import React, { Component, useRef, useState, useEffect } from "react";
import "./Header.scss";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Link } from "react-router-dom";
import Logo from "../Media/Image/logo/logo3.png";
import Active from "../LangBtn/Active/Active";
import LangBtn from "../LangBtn/LangBtn";
import { Translate } from "react-localize-redux";
import Dropdown from "react-bootstrap/Dropdown";

function Header(props) {
    const [headerClassIsActive, setHeaderClassIsActive] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            setHeaderClassIsActive(window.scrollY !== 0 ? true : false);
        });
    }, []);

    return (
        <header id="header" className={headerClassIsActive ? "top" : "normal"}>
            <div className="container-custom">
                <Row noGutters="false">
                    <a className="logo" href="/" target="_blank" rel="noopener noreferrer">
                        <img src={Logo} alt="Logo" />
                    </a>
                    <div className="nav-bar">
                        <div className="nav-bar__box">
                            <AnchorLink
                                className="router-link"
                                offset="100"
                                href="#firstSection"
                            >
                                Про мене
                            </AnchorLink>
                            <AnchorLink
                                className="router-link"
                                offset="100"
                                href="#secondSection"
                            >
                                Навички
                            </AnchorLink>
                            <AnchorLink
                                className="router-link"
                                offset="100"
                                href="#secondSection"
                            >
                                Резюме
                            </AnchorLink>
                            <AnchorLink
                                className="router-link"
                                offset="100"
                                href="#secondSection"
                            >
                                Освіта
                            </AnchorLink>
                            <AnchorLink
                                className="router-link"
                                offset="100"
                                href="#secondSection"
                            >
                                Портфоліо
                            </AnchorLink>
                            <AnchorLink
                                className="router-link"
                                offset="100"
                                href="#secondSection"
                            >
                                Контакти
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
                    </div>
                </Row>
            </div>
        </header>
    );
}

export default Header;
