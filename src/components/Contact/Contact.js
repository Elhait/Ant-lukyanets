import React from "react";
import "./Contact.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import { Translate } from "react-localize-redux";

function Contact() {
    return (
        <section class="contact" id="contact">
            <Container>
                <Row>
                    <div class="col-md-6 col-12 contact__info aos-init aos-animate" data-aos="fade-right" data-aos-duration="1500" data-aos-offset="0">
                        <div class="row contact__info-wrap">
                            <i class="far fa-envelope"></i>
                            <p><a title="Email" href="mailto:ant.lukyanets@gmail.com">
                                    ant.lukyanets@gmail.com</a></p>
                        </div>

                        <div class="row contact__info-wrap">
                            <i class="fab fa-telegram-plane"></i>
                            <p><a title="Telegram" href="https://t.me/ant_lukyanets"> ant_lukyanets</a></p>
                        </div>
                        <div class="row contact__info-wrap">
                            <i class="fab fa-facebook-square"></i>
                            <p><a title="Facebook" href="https://www.facebook.com/profile.php?id=100017181435414">Антон
                                    Лук`янець</a></p>
                        </div>
                        <div class="row contact__info-wrap">
                            <i class="fab fa-instagram"></i>
                            <p><a title="Instagram" href="https://www.instagram.com/ant_lukyanets/">ant_lukyanets</a>
                            </p>
                        </div>

                    </div>
                    <form class="col-md-6 col-12 form aos-init aos-animate" enctype="multipart/form-data" method="post" id="form" data-aos="fade-left" data-aos-duration="1500" data-aos-offset="0">
                        <h2>Відправити повідомлення</h2>
                        <p>Всі поля обов'язкові !</p>
                        <input placeholder="Ім'я" name="name" required=""/>
                        <input type="tel" pattern="^[0-9-+s()]*$" placeholder="Номер телефону" name="phone" required=""/>
                        <input type="email" placeholder="Email" name="email" required=""/>
                        <textarea rows="4" cols="50" placeholder="Введіть ваше повідомлення..." name="text" required=""></textarea>
                        <input type="submit" value="Відправити" class="button"/>
                    </form>
                    </Row>
                </Container>
        </section>
    );
}
export default Contact;
