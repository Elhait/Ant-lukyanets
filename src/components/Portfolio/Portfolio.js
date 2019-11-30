import React from "react";
import "./Portfolio.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import { Translate } from "react-localize-redux";

import carService from "../Media/Image/portfolio/cars.png";

function Portfolio(props) {
    return (
        <section className="portfolio" id="portfolio">
            <Container>
                <Row>
                    <Col xs={12}>
                        <h2>Мої роботи</h2>
                    </Col>
                    <Works
                        image={carService}
                        name="Car services"
                        link="http://ant-lukyanets.co.ua/car-service"
                        linkName="http://ant-lukyanets.co.ua/car-service"
                        text="Розробка сайту автосалону, зробленного
                        на базі макету. Були використані такі
                        технології:"
                        oneTechnologyImg={<i className="fab fa-html5"></i>}
                        oneTechnologyName="HTML 5"
                        twoTechnologyImg={<i className="fab fa-sass"></i>}
                        twoTechnologyName="SASS"
                        threeTechnologyImg={<i className="fab fa-js-square"></i>}
                        threeTechnologyName="jQuery"
                        fourTechnologyImg={<i className="fab fa-bootstrap"></i>}
                        fourTechnologyName="Bootstrap 4"
                    />
                    <div className="portfolio__works">
                        <Row>
                            <Col
                                md={6}
                                xs={12}
                                className="aos-init aos-animate"
                            >
                                <div className="workPict">
                                    <img src={carService} alt="carService" />
                                </div>
                            </Col>
                            <Col md={6} xs={12}>
                                <div className="workInfo">
                                    <h3>Car services</h3>
                                    <a
                                        href="http://ant-lukyanets.co.ua/car-service"
                                        target="_blank"
                                    >
                                        http://ant-lukyanets.co.ua/car-service
                                    </a>
                                    <p>
                                        Розробка сайту автосалону, зробленного
                                        на базі макету. Були використані такі
                                        технології:
                                    </p>
                                    <Row>
                                        <Col xs={6}>
                                            <div className="technology">
                                                <i className="fab fa-html5"></i>
                                                <p>HTML 5</p>
                                            </div>
                                        </Col>
                                        <Col xs={6}>
                                            <div className="technology">
                                                <i className="fab fa-sass"></i>
                                                <p>SASS</p>
                                            </div>
                                        </Col>
                                        <Col xs={6}>
                                            <div className="technology">
                                                <i className="fab fa-js-square"></i>
                                                <p>jQuery</p>
                                            </div>
                                        </Col>
                                        <Col xs={6}>
                                            <div className="technology">
                                                <i className="fab fa-bootstrap"></i>
                                                <p>Bootstrap 4</p>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <div className="col-12 row portfolio__works">
                        <div className="col-md-6 col-12">
                            <div className="workPict">
                                <a
                                    data-fancybox="images"
                                    href="./img/te-vntu.png"
                                >
                                    <img
                                        src="./img/te-vntu.png"
                                        width="100"
                                        height="100"
                                        alt=""
                                    />
                                </a>
                            </div>
                        </div>
                        <div
                            className="col-md-6 col-12 workInfo aos-init aos-animate"
                            data-aos="fade-left"
                            data-aos-duration="1500"
                            data-aos-offset="0"
                        >
                            <h3>Кафедра теплоенергетики ВНТУ</h3>
                            <a
                                href="https://anton-lukyanets.000webhostapp.com"
                                target="_blank"
                            >
                                https://anton-lukyanets.000webhostapp.com
                            </a>
                            <p>
                                Сайт для кафедри теплоенергетики ВНТУ, в якій я
                                навчаюсь. На данний момент ще в розробці. Були
                                використані такі технології:
                            </p>
                            <div className="row">
                                <div className="col-6 technology">
                                    <i className="fab fa-html5"></i>
                                    <p>HTML 5</p>
                                </div>
                                <div className="col-6 technology">
                                    <i className="fab fa-css3-alt"></i>
                                    <p>CSS 3</p>
                                </div>
                                <div className="col-6 technology">
                                    <i className="fab fa-js-square"></i>
                                    <p>jQuery</p>
                                </div>
                                <div className="col-6 technology">
                                    <i className="fab fa-wordpress"></i>
                                    <p>WordPress</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 row portfolio__works">
                        <div
                            className="col-md-6 col-12 aos-init aos-animate"
                            data-aos="fade-right"
                            data-aos-duration="1500"
                            data-aos-offset="0"
                        >
                            <div className="workPict">
                                <a
                                    data-fancybox="images"
                                    href="./img/testove.png"
                                >
                                    <img
                                        src="./img/testove.png"
                                        width="100"
                                        height="100"
                                        alt=""
                                    />
                                </a>
                            </div>
                        </div>
                        <div
                            className="col-md-6 col-12 workInfo aos-init aos-animate"
                            data-aos="fade-left"
                            data-aos-duration="1500"
                            data-aos-offset="0"
                        >
                            <h3>Propper</h3>
                            <a
                                href="http://ant-lukyanets.co.ua/propper"
                                target="_blank"
                            >
                                http://ant-lukyanets.co.ua/propper
                            </a>
                            <p>
                                Тестове завдання на базі макету. Були
                                використані такі технології:
                            </p>
                            <div className="row">
                                <div className="col-6 technology">
                                    <i className="fab fa-html5"></i>
                                    <p>HTML 5</p>
                                </div>
                                <div className="col-6 technology">
                                    <i className="fab fa-sass"></i>
                                    <p>SASS</p>
                                </div>
                                <div className="col-6 technology">
                                    <i className="fab fa-js-square"></i>
                                    <p>jQuery</p>
                                </div>
                                <div className="col-6 technology">
                                    <i className="fab fa-bootstrap"></i>
                                    <p>Bootstrap 4</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 row portfolio__works">
                        <div
                            className="col-md-6 col-12 aos-init aos-animate"
                            data-aos="fade-right"
                            data-aos-duration="1500"
                            data-aos-offset="0"
                        >
                            <div className="workPict">
                                <a data-fancybox="images" href="./img/ryco.png">
                                    <img
                                        src="./img/ryco.png"
                                        width="100"
                                        height="100"
                                        alt=""
                                    />
                                </a>
                            </div>
                        </div>
                        <div
                            className="col-md-6 col-12 workInfo aos-init aos-animate"
                            data-aos="fade-left"
                            data-aos-duration="1500"
                            data-aos-offset="0"
                        >
                            <h3>RYCO</h3>
                            <a
                                href="http://ant-lukyanets.co.ua/ryco"
                                target="_blank"
                            >
                                http://ant-lukyanets.co.ua/ryco
                            </a>
                            <br />
                            <br />
                            <a
                                href="http://ant-lukyanets.co.ua/ryco/properties.html"
                                target="_blank"
                            >
                                http://ant-lukyanets.co.ua/ryco-properties
                            </a>
                            <p>
                                Тестове завдання по розробці сайту для продажу
                                нерухомості на базі макету. Були використані
                                такі технології:
                            </p>
                            <div className="row">
                                <div className="col-6 technology">
                                    <i className="fab fa-html5"></i>
                                    <p>HTML 5</p>
                                </div>
                                <div className="col-6 technology">
                                    <i className="fab fa-sass"></i>
                                    <p>SASS</p>
                                </div>
                                <div className="col-6 technology">
                                    <i className="fab fa-js-square"></i>
                                    <p>jQuery</p>
                                </div>
                                <div className="col-6 technology">
                                    <i className="fab fa-bootstrap"></i>
                                    <p>Bootstrap 4</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 row portfolio__works">
                        <div
                            className="col-md-6 col-12 aos-init aos-animate"
                            data-aos="fade-right"
                            data-aos-duration="1500"
                            data-aos-offset="0"
                        >
                            <div className="workPict">
                                <a
                                    data-fancybox="images"
                                    href="./img/brander.png"
                                >
                                    <img
                                        src="./img/brander.png"
                                        width="100"
                                        height="100"
                                        alt=""
                                    />
                                </a>
                            </div>
                        </div>
                        <div
                            className="col-md-6 col-12 workInfo aos-init aos-animate"
                            data-aos="fade-left"
                            data-aos-duration="1500"
                            data-aos-offset="0"
                        >
                            <h3>Brandero</h3>
                            <a
                                href="http://ant-lukyanets.co.ua/brandero"
                                target="_blank"
                            >
                                http://ant-lukyanets.co.ua/brandero
                            </a>
                            <p>
                                Тестове завдання на базі макету. Були
                                використані такі технології:
                            </p>
                            <div className="row">
                                <div className="col-6 technology">
                                    <i className="fab fa-html5"></i>
                                    <p>HTML 5</p>
                                </div>
                                <div className="col-6 technology">
                                    <i className="fab fa-sass"></i>
                                    <p>SASS</p>
                                </div>
                                <div className="col-6 technology">
                                    <i className="fab fa-js-square"></i>
                                    <p>jQuery</p>
                                </div>
                                <div className="col-6 technology">
                                    <i className="fab fa-bootstrap"></i>
                                    <p>Bootstrap 4</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 row portfolio__works">
                        <div
                            className="col-md-6 col-12 aos-init aos-animate"
                            data-aos="fade-right"
                            data-aos-duration="1500"
                            data-aos-offset="0"
                        >
                            <div className="workPict">
                                <a
                                    data-fancybox="images"
                                    href="./img/misocial.png"
                                >
                                    <img
                                        src="./img/misocial.png"
                                        width="100"
                                        height="100"
                                        alt=""
                                    />
                                </a>
                            </div>
                        </div>
                        <div
                            className="col-md-6 col-12 workInfo aos-init aos-animate"
                            data-aos="fade-left"
                            data-aos-duration="1500"
                            data-aos-offset="0"
                        >
                            <h3>Misocial</h3>
                            <a
                                href="http://ant-lukyanets.co.ua/misocial"
                                target="_blank"
                            >
                                http://ant-lukyanets.co.ua/misocial
                            </a>
                            <br />
                            <br />
                            <a
                                href="http://ant-lukyanets.co.ua/misocial/pricing.html"
                                target="_blank"
                            >
                                http://ant-lukyanets.co.ua/misocial/pricing
                            </a>
                            <p>
                                Перша повноцінно виконана робота по макету. Були
                                використані такі технології:
                            </p>
                            <div className="row">
                                <div className="col-6 technology">
                                    <i className="fab fa-html5"></i>
                                    <p>HTML 5</p>
                                </div>
                                <div className="col-6 technology">
                                    <i className="fab fa-sass"></i>
                                    <p>SASS</p>
                                </div>
                                <div className="col-6 technology">
                                    <i className="fab fa-js-square"></i>
                                    <p>jQuery</p>
                                </div>
                                <div className="col-6 technology">
                                    <i className="fab fa-bootstrap"></i>
                                    <p>Bootstrap 4</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Row>
            </Container>
        </section>
    );
}
export default Portfolio;

function Works(props) {
    return (
        <div className="portfolio__works">
            <Row>
                <Col md={6} xs={12}>
                    <div className="workPict">
                        <img src={props.image} alt={props.image} />
                    </div>
                </Col>
                <Col md={6} xs={12}>
                    <div className="workInfo">
                        <h3>{props.name}</h3>
                        <a
                            href={props.link}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {props.linkName}
                        </a>
                        <p>{props.text}</p>
                        <Row>
                            <Col xs={6}>
                                <div className="technology">
                                    {props.oneTechnologyImg}
                                    <p>{props.oneTechnologyName}</p>
                                </div>
                            </Col>
                            <Col xs={6}>
                                <div className="technology">
                                    {props.twoTechnologyImg}
                                    <p>{props.twoTechnologyName}</p>
                                </div>
                            </Col>
                            <Col xs={6}>
                                <div className="technology">
                                    {props.threeTechnologyImg}
                                    <p>{props.threeTechnologyName}</p>
                                </div>
                            </Col>
                            <Col xs={6}>
                                <div className="technology">
                                    {props.fourTechnologyImg}
                                    <p>{props.fourTechnologyName}</p>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>
        </div>
    );
}
