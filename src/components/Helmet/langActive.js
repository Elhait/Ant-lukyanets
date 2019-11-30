import React from "react";
import { withLocalize } from "react-localize-redux";
import { Translate } from "react-localize-redux";

function LangActive() {
    return (
        <>
            <Translate id="code" />
        </>
    );
}
export default withLocalize(LangActive);
