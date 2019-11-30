//react
import React, {
    StrictMode,
    useState,
    useEffect
} from "react";

import { withLocalize } from "react-localize-redux";
import { renderToStaticMarkup } from "react-dom/server";
import { Route, Switch, BrowserRouter } from "react-router-dom";

//custom components and npm components
import "./App.css";
import Header from "../Header/Header";
import NotFound from "../NotFound/NotFound.js";
import Home from "../Home/Home";
import Footer from "../Footer/Footer";
import Cookies from "js-cookie";
import globalTranslations from "../translation/global.json";


function App(props) {
    useEffect(() => {
        props.initialize({
            languages: [
                { name: "EN", code: "en" },
                { name: "РУС", code: "ru" },
                { name: "中国", code: "zh" }
            ],
            translation: globalTranslations,
            options: { renderToStaticMarkup }
        });

        const langCode = Cookies.get("ActiveLanguage");
        if (langCode) props.setActiveLanguage(langCode);
    }, []);

    return (
        <StrictMode>
            <div className="App-main">
                <BrowserRouter>
                    <Switch>
                        <Route path="/" exact component={MainPage} />
                        <Route path="*" exact component={NotFound} />
                    </Switch>
                </BrowserRouter>
            </div>
        </StrictMode>
    );
}

function MainPage(props) {
    return (
        <div className="antonLukyanets">
            <Header />
            <Home/>
            <Footer />
        </div>
    );
}

export default withLocalize(App);
