import React from "react";
import "./Skills.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProgressBar from 'react-bootstrap/ProgressBar'
// import { Translate } from "react-localize-redux";

function Skills(props) {
    return (
        <section className="skills" id="skills">
        <Container>
            <Row>
                <Col className="skills__text" sm={6} xs={12}>
                    <h2>Навички</h2>
                    <p> Вільно володію HTML5 і СSS3. Позиціонування об'єктів переважно роблю за допомогою Flexbox.
                        Впевнено використовую в роботі препроцесор SASS, а також CSS фреймворк Bootstrap 4. Знання JS /
                        JQUERY на рівні вільної інтеграції готових плагінів. Є досвід роботи з WordPress. Розробляю
                        повністю адаптивні, кроссбраузерні сайти з валідним кодом. Англійська мова на рівні читання
                        документації.</p>
                    <p>Надішліть мені повідомлення, для реалізації вашого ідеального проекту.</p>
                    <a href="#contact" className="contact-btn">Зв'яжіться зі мною</a>
                </Col>
                <Col className="skills__bar" sm={6} xs={12}>
                    <p class="wide">HTML 5</p>
                    <ProgressBar now={90} animated variant="info" label={90}/>

                    <p class="wide">CSS 3 / SASS</p>
                    <ProgressBar now={80} animated variant="info" label={80}/>

                    <p class="wide">Javascript / jquery</p>
                    <ProgressBar now={40} animated variant="info" label={40}/>
                </Col>
            </Row>
        </Container>
    </section>
    );
}
export default Skills;
