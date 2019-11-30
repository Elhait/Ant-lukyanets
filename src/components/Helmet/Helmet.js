import React from "react";
import { Helmet } from "react-helmet";
import { withLocalize } from "react-localize-redux";
// import { Translate } from "react-localize-redux";
import Cookies from "js-cookie";
// import ReactGA from 'react-ga';
// ReactGA.initialize('UA-150813195-1', {
//     debug: true,
//     titleCase: false,
//     gaOptions: {
//       userId: 123
//     }
//   });
// ReactGA.pageview(window.location.pathname + window.location.search);

function Application() {
    return (
        <Helmet>
            <htmlAttributes lang={Cookies.get("ActiveLanguage")} />
            <meta charSet="utf-8" />
            <title>Anton Lukyanets</title>
            <link rel="manifest" href="manifest.json"></link>
            <link href="https://fonts.googleapis.com/css?family=Roboto:300i,400,400i,500,700&display=swap&subset=cyrillic,greek,vietnamese" rel="stylesheet"/>
            <link href="https://fonts.googleapis.com/css?family=Noto+Sans+SC:300,400,500,700&display=swap&subset=chinese-simplified" rel="stylesheet"/>
        </Helmet>
    );
}
export default withLocalize(Application);
