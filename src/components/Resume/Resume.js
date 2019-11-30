import React from "react";
import "./Resume.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import { Translate } from "react-localize-redux";

function Resume() {
    return (
        <section className="resume" id="resume">
            <div className="resume__bg"></div>
            <Container>
                <Row>
                    <Col className="resume__info">
                        <h2>Резюме</h2>
                        <p>Ви можете побачити мої досягнення, перераховані нижче, або завантажити копію для друку.</p>
                        <a href="download/Резюме — Front-end розробник, верстальщик, Антон Лук'янець.docx" clasName="resume-btn" download="">Завантажити</a>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
export default Resume;
