import React from "react";
import "./Active.css";
import { Translate, withLocalize } from "react-localize-redux";

const ActiveLanguage = ({ activeLanguage }) => (
    <button className="lang__active active" styles="cursor: pointer"><Translate id="lang.langs"/></button>
);

export default withLocalize(ActiveLanguage);