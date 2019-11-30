import React from "react";
import { withLocalize } from "react-localize-redux";
import "./LangBtn.css"
import Dropdown from 'react-bootstrap/Dropdown'
import 'js-cookie'
const LanguageToggle = ({ languages, activeLanguage, setActiveLanguage }) => (
  <ul className="selector">
    {languages.map(lang => (
      <li key={lang.code}>
        <Dropdown.Item onClick={() => {
            setActiveLanguage(lang.code);
            document.cookie = "ActiveLanguage=" + lang.code;
          }}>
          {lang.name}
        </Dropdown.Item>
      </li>
    ))}
  </ul>
);

export default withLocalize(LanguageToggle);