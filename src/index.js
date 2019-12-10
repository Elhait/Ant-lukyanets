import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/App.js";
// import * as serviceWorker from "./serviceWorker";
import "./normalize.css";
import "./animate.css";
import "./styles/bootstrap.min.css";
import "./styles/global-styles.scss";
import { LocalizeProvider } from "react-localize-redux";
import Application from "./components/Helmet/Helmet";
/* import './bootstrap.min.js'; */

ReactDOM.render(
    <LocalizeProvider>
        <Application />
        <App />
    </LocalizeProvider>,
    document.getElementById("root")
);

// serviceWorker.unregister();
