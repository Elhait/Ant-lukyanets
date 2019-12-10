import React from "react";
import "./Bio.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Translate } from "react-localize-redux";

function Bio(props) {
    return (
        <section className="bio" id="bio">
            <Container>
                <Row className="bio__info">
                    <Col className="left" sm={6} xs={12}>
                        <h3><Translate id="main.bio.titleEdu" /></h3>
                        <p>
                            <Translate id="main.bio.textEdu" />
                        </p>
                    </Col>
                    <Col className="right" sm={6} xs={12}>
                        <div className="right__institution">
                            <h4>
                                <Translate id="main.bio.titleEdu1_1" />
                            </h4>
                            <p>
                                <Translate id="main.bio.textEdu1_1" />
                            </p>
                        </div>
                        <div className="right__institution">
                            <h4>
                                <Translate id="main.bio.titleEdu1_2" />
                            </h4>
                            <p>
                                <Translate id="main.bio.textEdu1_2" />
                            </p>
                        </div>
                    </Col>
                </Row>
                <div className="band" />
                <Row className="bio__info">
                    <Col className="left" sm={6} xs={12}>
                        <h3><Translate id="main.bio.titleExp" /></h3>
                        <p><Translate id="main.bio.textExp1_1" /></p>
                        <p><Translate id="main.bio.textExp1_2" /></p>
                    </Col>
                    <Col className="right" sm={6} xs={12}>
                        <div className="right__institution">
                            <h4>SmartPixel</h4>
                            <p>
                                <Translate id="main.bio.textSmart" />
                            </p>
                        </div>
                        <div className="right__institution">
                            <h4>DareDapps</h4>
                            <p>
                                <Translate id="main.bio.textDD" />
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
export default Bio;
