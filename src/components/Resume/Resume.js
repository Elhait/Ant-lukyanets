import React from "react";
import "./Resume.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Translate } from "react-localize-redux";
import Lottie from "react-lottie";
import animationData from "../Media/animation/stol.json";
import resumeDocx from "../Media/Resume Anton Lukyanets.docx"

function Resume() {
    return (
        <section className="resume" id="resume">
            <div className="volna">
                {/* <Wavy/> */}
                <svg
                    viewBox="0 0 500 150"
                    preserveAspectRatio="none"
                    style={{height: "100%", width: "100%"}}
                >
                    <path
                        d="M-7.05,28.13 C231.09,130.75 301.63,14.30 505.36,71.53 L500.00,0.00 L0.00,0.00 Z"
                        style={{stroke: "none", fill: "#100C22"}}
                    ></path>
                </svg>
            </div>
            <Container>
                <Row>
                <Col sm={6}>
                        <Animation />
                    </Col>
                    <Col sm={6}>
                        <div className="resume__info">
                            <h3>
                                <Translate id="main.resume.title" />
                            </h3>
                            <p>
                                <Translate id="main.resume.p1" />
                            </p>
                            <a
                                href={resumeDocx}
                                className="resume-btn"
                            >
                                <Translate id="main.resume.button" />
                            </a>
                        </div>
                    </Col>
                    
                </Row>
            </Container>
        </section>
    );
}
class Animation extends React.Component {
    render() {
        const defaultOptions = {
            loop: true,
            autoplay: true,
            animationData: animationData,
            rendererSettings: {
                preserveAspectRatio: "xMidYMid slice"
            }
        };

        return (
            <div className="bg">
                <Lottie options={defaultOptions} />
            </div>
        );
    }
}

export default Resume;
