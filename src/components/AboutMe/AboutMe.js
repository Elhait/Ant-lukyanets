import React from "react";
import "./AboutMe.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import me from "../Media/Image/photo/me.jpg";
// import { Translate } from "react-localize-redux";

function AboutMe() {
    return (
        <section className="aboutMe" id="aboutMe">
            <Container>
                <Row>
                    <Col lg={4} sm={5} xs={12}>
                        <div className="aboutMe__photo">
                            <img src={me} alt="Anton" />
                        </div>
                    </Col>
                    <Col lg={8} sm={7} xs={12}>
                        <div className="aboutMe__info">
                            <h3>Про мене</h3>
                            <p>
                                Привіт! Я займаюся розробкою сайтів будь-якої
                                складності з використанням різних сучасних
                                технологій починаючи стандартними HTML5 / CSS3 і
                                завершуючи фреймворком React і препроцесорами
                                Sass, Scss. Код завжди відповідає стандартам W3C
                                та порівняно з білдерами немає зайвого коду.
                                Сайти відмінно адаптовані під різні пристрої.
                                Результат вас гарантовано задовольнить.
                            </p>
                            <p>
                                Відкритий для нових знань. На данний час
                                знаходжусь в пошуку працевлаштування, на якому
                                буду покращувати свої навички та здібності.
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
export default AboutMe;
