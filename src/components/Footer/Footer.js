import React, { Component } from "react";
import "./Footer.scss";
import facebook from "../Media/Image/social/facebook.svg";
import twitter from "../Media/Image/social/twitter.svg";
import telegram from "../Media/Image/social/telegram.svg";
import youtube from "../Media/Image/social/youtube.svg"

function Footer() {
    return (
        <footer>
            <p>Copyright © 2019 All rights reserved.</p>
            {/* <div className="social">
                <a href="https://www.facebook.com/GemIinkspace-100188178098844" target="_blank" rel="noopener noreferrer">
                    <img src={facebook} alt="facebook" />
                </a>
                <a href="https://www.youtube.com/channel/UCU0Hu2pzRhiJhzT5QGH7IUQ" target="_blank" rel="noopener noreferrer">
                    <img src={youtube} alt="twitter" />
                </a>
                <a href="https://t.me/gemlink_group" target="_blank" rel="noopener noreferrer">
                    <img src={telegram} alt="telegram" />
                </a>
            </div> */}
        </footer>
    );
}
export default Footer;
