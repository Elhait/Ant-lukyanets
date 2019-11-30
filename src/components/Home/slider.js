import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Translate } from "react-localize-redux";
import YouTube from "react-youtube";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Nav from "react-bootstrap/Nav";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LeftArrow from "../Media/svg/left-arrow";
import RightArrow from "../Media/svg/right-arrow";
// import step1 from "../Media/image/htp/step1.png";
// import step2 from "../Media/image/htp/step2.png";
// import step3 from "../Media/image/htp/step3.png";
// import step4 from "../Media/image/htp/step4.png";
// import step5 from "../Media/image/htp/step5.png";
// import step6 from "../Media/image/htp/step6.png";
// import step7 from "../Media/image/htp/step7.png";
// import step8 from "../Media/image/htp/step8.png";
// import step9 from "../Media/image/htp/step9.png";
// import { relative } from "upath";

export default class VideoSlider extends Component {
    render() {
        const opts = {
            height: "100%",
            width: "100%",
            playerVars: {
                // https://developers.google.com/youtube/player_parameters
                controls: 2
            }
        };
        return (
            <Tab.Container id="right-tabs" defaultActiveKey="one">
                <Row>
                    <Col md={8} sm={12}>
                        <Tab.Content>
                            <Tab.Pane eventKey="one">
                                <div className="video">
                                    <YouTube
                                        videoId="1dYOeYRhpVM"
                                        opts={opts}
                                        onReady={this._onReady}
                                    />
                                </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="two">
                                <div className="video">
                                    <YouTube
                                        videoId="nfPGx3UVKYE"
                                        opts={opts}
                                        onReady={this._onReady}
                                    />
                                </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="three">
                                <div className="video">
                                    <YouTube
                                        videoId="_6de5fLCAm4"
                                        opts={opts}
                                        onReady={this._onReady}
                                    />
                                </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="four">
                                <div className="video">
                                    <YouTube
                                        videoId="CKJwVueoiQg"
                                        opts={opts}
                                        onReady={this._onReady}
                                    />
                                </div>
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                    <Col md={4} sm={12}>
                        <Nav variant="pills" className="flex-column">
                            <div className="box">
                                <Nav.Item>
                                    <Nav.Link eventKey="one">
                                        <div className="video-img">
                                            <img src="//img.youtube.com/vi/1dYOeYRhpVM/maxresdefault.jpg" />
                                        </div>
                                        <p>
                                            <Translate id="main.gemlink" />
                                        </p>
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="two">
                                        <div className="video-img">
                                            <img src="//img.youtube.com/vi/nfPGx3UVKYE/maxresdefault.jpg" />
                                        </div>
                                        <p>
                                            <Translate id="main.dice" />
                                        </p>
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="three">
                                        <div className="video-img">
                                            <img src="//img.youtube.com/vi/_6de5fLCAm4/maxresdefault.jpg" />
                                        </div>
                                        <p>
                                            <Translate id="main.extraX" />
                                        </p>
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="four">
                                        <div className="video-img">
                                            <img src="//img.youtube.com/vi/CKJwVueoiQg/maxresdefault.jpg" />
                                        </div>
                                        <p>
                                            <Translate id="main.dividends" />
                                        </p>
                                    </Nav.Link>
                                </Nav.Item>
                            </div>
                        </Nav>
                    </Col>
                </Row>
            </Tab.Container>
        );
    }
}
