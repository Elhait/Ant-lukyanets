import React from "react";
import "./Contact.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Lottie from "react-lottie";
import animationData from "../Media/animation/contact2.json";
// import { Translate } from "react-localize-redux";

function Contact() {
    return (
        <section className="contact" id="contact">
            <div className="volna">
                <svg
                    viewBox="0 0 500 150"
                    preserveAspectRatio="none"
                    style={{height: "100%", width: "100%"}}
                >
                    <path
                        d="M-7.05,28.13 C231.09,130.75 301.63,14.30 505.36,71.53 L500.00,0.00 L0.00,0.00 Z"
                        style={{stroke: "none", fill: "#382E53"}}
                    ></path>
                </svg>
            </div>
            <Container>
                <Row>
                    <Col md={6} xs={12}>
                        <div className="contact__info">
                            <div className="contact__infoWrap">
                                <i className="far fa-envelope"></i>
                                <p>
                                    <a
                                        title="Email"
                                        href="mailto:ant.lukyanets@gmail.com"
                                    >
                                        ant.lukyanets@gmail.com
                                    </a>
                                </p>
                            </div>

                            <div className="contact__infoWrap">
                                <i className="fab fa-telegram-plane"></i>
                                <p>
                                    <a
                                        title="Telegram"
                                        href="https://t.me/ant_lukyanets"
                                    >
                                        ant_lukyanets
                                    </a>
                                </p>
                            </div>
                            <div className="contact__infoWrap">
                                <i className="fab fa-facebook-square"></i>
                                <p>
                                    <a
                                        title="Facebook"
                                        href="https://www.facebook.com/profile.php?id=100017181435414"
                                    >
                                        Антон Лук`янець
                                    </a>
                                </p>
                            </div>
                            <div className="contact__infoWrap">
                                <i className="fab fa-instagram"></i>
                                <p>
                                    <a
                                        title="Instagram"
                                        href="https://www.instagram.com/ant_lukyanets/"
                                    >
                                        ant_lukyanets
                                    </a>
                                </p>
                            </div>
                            <div className="contact__infoWrap">
                                <i className="fab fa-linkedin"></i>
                                <p>
                                    <a
                                        title="LinkedIn"
                                        href="https://www.linkedin.com/in/антон-лукьянец-ba8135199"
                                    >
                                        Антон Лукьянец
                                    </a>
                                </p>
                            </div>
                        </div>
                    </Col>
                    <Col md={6} xs={12}>
                        <Animation/>
                    </Col>
                    {/* <Col md={6} xs={12}>
                        <Basic/>
                        <form
                            className="form"
                            encType="multipart/form-data"
                            method="post"
                            id="form"
                        >
                            <h3>Відправити повідомлення</h3>
                            <p>Всі поля обов'язкові !</p>
                            <input placeholder="Ім'я" name="name" required="" />
                            <input
                                type="tel"
                                pattern="^[0-9-+s()]*$"
                                placeholder="Номер телефону"
                                name="phone"
                                required=""
                            />
                            <input
                                type="email"
                                placeholder="Email"
                                name="email"
                                required=""
                            />
                            <textarea
                                rows="4"
                                cols="50"
                                placeholder="Введіть ваше повідомлення..."
                                name="text"
                                required=""
                            ></textarea>
                            <input
                                type="submit"
                                value="Відправити"
                                className="button"
                            />
                        </form>
                    </Col> */}
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

export default Contact;
