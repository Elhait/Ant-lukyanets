import React from "react";
import "./AboutMe.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ScrollAnimation from "react-animate-on-scroll";
import me from "../Media/Image/photo/me.jpg";
import { Translate } from "react-localize-redux";

function AboutMe() {
    return (
        <section className="aboutMe" id="aboutMe">
            <Container>
                <Row>
                    <Col lg={4} sm={5} xs={12}>
                        <ScrollAnimation
                            animateIn="fadeInLeft"
                            offset={0}
                            animateOnce
                            duration={1.5}
                        >
                            <div className="aboutMe__photo">
                                <img src={me} alt="Anton" />
                            </div>
                        </ScrollAnimation>
                    </Col>
                    <Col lg={8} sm={7} xs={12}>
                        <ScrollAnimation
                            animateIn="fadeInRight"
                            animateOnce
                            offset={0}
                            duration={1.5}
                        >
                            <div className="aboutMe__info">
                                <h3>
                                    <Translate id="main.aboutMe.title" />
                                </h3>
                                <p>
                                    <Translate id="main.aboutMe.p1" />
                                </p>
                                <p>
                                    <Translate id="main.aboutMe.p2" />
                                </p>
                            </div>
                        </ScrollAnimation>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
export default AboutMe;
