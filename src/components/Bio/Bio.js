import React from "react";
import "./Bio.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProgressBar from "react-bootstrap/ProgressBar";
// import { Translate } from "react-localize-redux";

function Bio(props) {
    return (
        <section class="bio" id="bio">
            <Container>
                <Row className="bio__info">
                    <Col className="left" sm={6} xs={12}>
                        <h2>Оcвіта</h2>
                        <p>
                            Навчався 4 роки в коледжі ВКНУХТ, на стаціонарному
                            відділенні / На данний час навчаюсь на 1 курсі
                            Магістратури ВНТУ
                        </p>
                    </Col>
                    <Col className="right" sm={6} xs={12}>
                        <div className="right__institution">
                            <h3>
                                Вінницький коледж національного університету
                                харчових технологій (ВКНУХТ)
                            </h3>
                            <p>
                                Факультет та кафедра теплоенергетики (з 09.2011
                                по 07.2015)
                            </p>
                        </div>
                        <div className="right__institution">
                            <h3>
                                Вінницький національний технічний університет
                                (ВНТУ)
                            </h3>
                            <p>
                                Факультет будівництва, кафедра теплоенергетик.
                                (з 09.2015 по 06.2019)
                            </p>
                        </div>
                    </Col>
                </Row>
                <div className="band" />
                <Row className="bio__info">
                    <Col className="left" sm={6} xs={12}>
                        <h2>Досвід</h2>
                        <p>Проходив стажування в веб-студії SmartPixel</p>
                    </Col>
                    <Col className="right" sm={6} xs={12}>
                        <div className="right__institution">
                            <h3>SmartPixel</h3>
                            <p>
                                Front-end розробник (з 01.2019 по 03.2019),
                                пішов в зв'язку з тим, що після 2 місяців
                                стажування був запропонований грошовий оклад
                                нижчий мінімальної заробітньої плати
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
export default Bio;
