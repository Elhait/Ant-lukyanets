import React from "react";
import "./Skills.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProgressBar from 'react-bootstrap/ProgressBar'
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Translate } from "react-localize-redux";

function Skills() {
    return (
        <section className="skills" id="skills">
        <Container>
            <Row>
                <Col className="skills__text" sm={6} xs={12}>
                    <h3><Translate id="main.skills.title" /></h3>
                    <p><Translate id="main.skills.p1" /></p>
                    <p><Translate id="main.skills.p2" /></p>
                    <AnchorLink className="contact-btn" offset="100" href="#contact">
                        <Translate id="main.skills.button" />
                    </AnchorLink>
                </Col>
                <Col className="skills__bar" sm={6} xs={12}>
                    <p className="wide">HTML 5</p>
                    <ProgressBar now={95} animated/>
                    <p className="wide">CSS 3 / SASS</p>
                    <ProgressBar now={86} animated />
                    <p className="wide">Bootstrap 4</p>
                    <ProgressBar now={90}  animated />
                    <p className="wide">React</p>
                    <ProgressBar now={50}  animated />
                    <p className="wide">Git</p>
                    <ProgressBar now={60}  animated />
                </Col>
            </Row>
        </Container>
    </section>
    );
}
export default Skills;
