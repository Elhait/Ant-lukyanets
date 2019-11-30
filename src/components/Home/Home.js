import React, { } from "react";
import { Helmet } from "react-helmet";
import "./Home.css";
import { Translate } from "react-localize-redux";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Banner from "../Banner/Banner";
import AboutMe from "../AboutMe/AboutMe"
import Skills from "../Skills/Skills";
import Resume from "../Resume/Resume";
import Bio from "../Bio/Bio";
import Portfolio from "../Portfolio/Portfolio";
import Contact from "../Contact/Contact";
import BgAnimation from "../Banner/bg";




function Home() {
    return (
        <article>
            <Helmet>
                {/* <title>GemLink.space</title> */}
                {/* <meta
                    name="description"
                    content="GemLink.io is revolutionizing the gaming industry using the TRON blockchain.  We offer instant play, provably-fair, no transaction fees…"
                />
                <meta
                    name="keywords"
                    content="GemLink, GemLink.io, gemlink, dividends, dapps, dice, TronLink, Tron"
                ></meta> */}
            </Helmet>
            <main className="home-page">
                {/* <BgAnimation/> */}
                <Banner/>
                <AboutMe/>
                <Skills/>
                <Resume/>
                <Bio/>
                <Portfolio/>
                <Contact/>
            </main>
        </article>
    );
}

export default Home;
