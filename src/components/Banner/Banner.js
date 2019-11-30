import React from "react";
import "./Banner.css";
// import { Translate } from "react-localize-redux";
import BgAnimation from "./bg";

function Banner() {
    return (
        <section className="banner centered" id="banner">
            <BgAnimation />
            <div className="container-fluid">
                <div className="center">
                    <h1>Anton Lukyanets</h1>
                    <h2>FRONT-END DEVELOPER</h2>
                </div>
            </div>
        </section>
    );
}
export default Banner;
