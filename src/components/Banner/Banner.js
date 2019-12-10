import React from "react";
import "./Banner.css";
// import ScrollAnimation from "react-animate-on-scroll";
import { Translate } from "react-localize-redux";
import BgAnimation from "./bg";

function Banner() {
    return (
        <section className="banner centered" id="banner">
            <BgAnimation />
            <div className="container-fluid">
                <div className="title">
                    <h1>
                        <Translate id="main.banner.h1" />
                    </h1>
                    <h2>
                        Front-end <Translate id="main.banner.h2" />{" "}
                    </h2>
                </div>
            </div>
        </section>
    );
}
export default Banner;
