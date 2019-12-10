import React from "react";
import "./Active.css";
import { Translate, withLocalize } from "react-localize-redux";

const ActiveLanguage = ({ activeLanguage }) => (
    <span className="lang__active active" styles="cursor: pointer"><Translate id="lang.langs"/></span>
);

export default withLocalize(ActiveLanguage);