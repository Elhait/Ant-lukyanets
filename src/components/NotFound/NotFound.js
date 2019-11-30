import React from 'react';
import "./NotFound.css"
import "./NotFound_media.css"
import Header from "../Header/Header"
import broken from "../Media/Image/broken.png"

function NotFound() {
    return (
        <div className="notfound-main">
            <Header />
            <div className="notfound">
                <div className="notfound__content">
                    <h2>
                        Opps, the page is broken
                    </h2>
                    <p className="nums">
                        4 <img src={broken} alt="0" /> 4
                    </p>
                    <p className="text">
                        Sorry, but the page you are looking for was either not found or does not exist.
                        Try refreshing the page or go back.
                    </p>
                    <div className="btn">
                        <button className="back-btn" onClick={() => this.props.history.goBack()}>
                            GO BACK
                    </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NotFound