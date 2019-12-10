import React, { useState } from "react";
import "./Portfolio.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";
import ScrollAnimation from "react-animate-on-scroll";
import { Translate } from "react-localize-redux";

import carService__small from "../Media/Image/portfolio/cars__small.jpg";
import teVNTU__small from "../Media/Image/portfolio/te-vntu__small.jpg";
import propper__small from "../Media/Image/portfolio/testove__small.jpg";
import ryco__small from "../Media/Image/portfolio/ryco__small.jpg";
import brandero__small from "../Media/Image/portfolio/brander__small.jpg";
import misocial__small from "../Media/Image/portfolio/misocial__small.jpg";
import gemlinkDice__small from "../Media/Image/portfolio/gemlink-dice__small.png";
import gemlinkCraps__small from "../Media/Image/portfolio/gemlink-craps__small.jpg";
import gemlinkHome__small from "../Media/Image/portfolio/gemlink-home__small.jpg";
import gemlinkAuc__small from "../Media/Image/portfolio/gemlink-auc__small.jpg";
import gemlinkDt__small from "../Media/Image/portfolio/gemlink-dt__small.jpg";
import gemlinkRing__small from "../Media/Image/portfolio/gemlink-ring__small.jpg";
import gemlinkSpace__small from "../Media/Image/portfolio/gemlink-space__small.jpg";
import timerGuardBox__small from "../Media/Image/portfolio/tgb__small.jpg";


// import carService from "../Media/Image/portfolio/cars.png";
// import teVNTU from "../Media/Image/portfolio/te-vntu.png";
// import propper from "../Media/Image/portfolio/testove.png";
// import ryco from "../Media/Image/portfolio/ryco.png";
// import brandero from "../Media/Image/portfolio/brander.png";
// import misocial from "../Media/Image/portfolio/misocial.png";
// import gemlinkDice from "../Media/Image/portfolio/gemlink-dice.png";
// import gemlinkCraps from "../Media/Image/portfolio/gemlink-craps.png";
// import gemlinkHome from "../Media/Image/portfolio/gemlink-home.png";
// import gemlinkAuc from "../Media/Image/portfolio/gemlink-auc.png";
// import gemlinkDt from "../Media/Image/portfolio/gemlink-dt.png";
// import gemlinkRing from "../Media/Image/portfolio/gemlink-ring.png";
// import gemlinkSpace from "../Media/Image/portfolio/gemlink-space.png";
// import timerGuardBox from "../Media/Image/portfolio/tgb.png";

function Portfolio(props) {
    return (
        <section className="portfolio" id="portfolio">
            <Wave />
            <Container>
                <Row>
                    <Col xs={12}>
                        <h3>
                            <Translate id="main.portfolio.title" />
                        </h3>
                    </Col>
                    <Col xs={12}>
                        <Works
                            slider
                            sliderImageOne={gemlinkHome__small}
                            sliderImageTwo={gemlinkDice__small}
                            sliderImageThree={gemlinkCraps__small}
                            sliderImageFour={gemlinkRing__small}
                            sliderImageFive={gemlinkAuc__small}
                            sliderImageSix={gemlinkDt__small}
                            // image={gemlinkDice}
                            name="Gemlink.io"
                            link="https://gemlink.io"
                            linkName="gemlink.io"
                            linkTwo="http://gemlink.ant-lukyanets.co.ua/about"
                            linkNameTwo="gemlink.ant-lukyanets.co.ua/about"
                            text={<Translate id="main.portfolio.gemlink" />}
                            oneTechnologyImg={<i className="fab fa-html5"></i>}
                            oneTechnologyName="HTML 5"
                            twoTechnologyImg={<i className="fab fa-sass"></i>}
                            twoTechnologyName="SASS"
                            threeTechnologyImg={
                                <i className="fab fa-react"></i>
                            }
                            threeTechnologyName="React"
                            fourTechnologyImg={
                                <i className="fab fa-bootstrap"></i>
                            }
                            fourTechnologyName="Bootstrap 4"
                        />
                    </Col>
                    <Col xs={12}>
                        <Works
                            image={gemlinkSpace__small}
                            name="Gemlink.space"
                            link="https://gemlink.space"
                            linkName="gemlink.space"
                            linkTwo="https://gemlink-space.ant-lukyanets.co.ua"
                            linkNameTwo="gemlink-space.ant-lukyanets.co.ua"
                            text={
                                <Translate id="main.portfolio.gemlinkSpace" />
                            }
                            oneTechnologyImg={<i className="fab fa-html5"></i>}
                            oneTechnologyName="HTML 5"
                            twoTechnologyImg={<i className="fab fa-sass"></i>}
                            twoTechnologyName="SASS"
                            threeTechnologyImg={
                                <i className="fab fa-react"></i>
                            }
                            threeTechnologyName="React"
                            fourTechnologyImg={
                                <i className="fab fa-bootstrap"></i>
                            }
                            fourTechnologyName="Bootstrap 4"
                        />
                    </Col>
                    <Col xs={12}>
                        <Works
                            image={timerGuardBox__small}
                            name="Timer guard box"
                            link="https://timerguardbox.io"
                            linkName="timerguardbox.io"
                            text={
                                <Translate id="main.portfolio.timerGuardBox" />
                            }
                            oneTechnologyImg={<i className="fab fa-html5"></i>}
                            oneTechnologyName="HTML 5"
                            twoTechnologyImg={<i className="fab fa-sass"></i>}
                            twoTechnologyName="SASS"
                            threeTechnologyImg={
                                <i className="fab fa-js-square"></i>
                            }
                            threeTechnologyName="jQuery"
                            fourTechnologyImg={
                                <i className="fab fa-bootstrap"></i>
                            }
                            fourTechnologyName="Bootstrap 4"
                        />
                    </Col>
                    <Col xs={12}>
                        <Works
                            image={carService__small}
                            name="Car services"
                            link="https://ant-lukyanets.co.ua/car-service"
                            linkName="ant-lukyanets.co.ua/car-service"
                            text={<Translate id="main.portfolio.carService" />}
                            oneTechnologyImg={<i className="fab fa-html5"></i>}
                            oneTechnologyName="HTML 5"
                            twoTechnologyImg={<i className="fab fa-sass"></i>}
                            twoTechnologyName="SASS"
                            threeTechnologyImg={
                                <i className="fab fa-js-square"></i>
                            }
                            threeTechnologyName="jQuery"
                            fourTechnologyImg={
                                <i className="fab fa-bootstrap"></i>
                            }
                            fourTechnologyName="Bootstrap 4"
                        />
                    </Col>
                    <Col xs={12}>
                        <Works
                            image={teVNTU__small}
                            name={<Translate id="main.portfolio.titleTeVNTU" />}
                            link="https://anton-lukyanets.000webhostapp.com"
                            linkName="anton-lukyanets.000webhostapp.com"
                            text={<Translate id="main.portfolio.teVNTU" />}
                            oneTechnologyImg={<i className="fab fa-html5"></i>}
                            oneTechnologyName="HTML 5"
                            twoTechnologyImg={
                                <i className="fab fa-css3-alt"></i>
                            }
                            twoTechnologyName="CSS 3"
                            threeTechnologyImg={
                                <i className="fab fa-js-square"></i>
                            }
                            threeTechnologyName="jQuery"
                            fourTechnologyImg={
                                <i className="fab fa-wordpress"></i>
                            }
                            fourTechnologyName="WordPress"
                        />
                    </Col>
                    <Col xs={12}>
                        <Works
                            image={propper__small}
                            name="Propper"
                            link="https://ant-lukyanets.co.ua/propper"
                            linkName="ant-lukyanets.co.ua/propper"
                            text={<Translate id="main.portfolio.propper" />}
                            oneTechnologyImg={<i className="fab fa-html5"></i>}
                            oneTechnologyName="HTML 5"
                            twoTechnologyImg={<i className="fab fa-sass"></i>}
                            twoTechnologyName="SASS"
                            threeTechnologyImg={
                                <i className="fab fa-js-square"></i>
                            }
                            threeTechnologyName="jQuery"
                            fourTechnologyImg={
                                <i className="fab fa-bootstrap"></i>
                            }
                            fourTechnologyName="Bootstrap 4"
                        />
                    </Col>
                    <Col xs={12}>
                        <Works
                            image={ryco__small}
                            name="Ryco"
                            link="https://ant-lukyanets.co.ua/ryco"
                            linkName="ant-lukyanets.co.ua/ryco"
                            linkTwo="https://ant-lukyanets.co.ua/ryco/properties.html"
                            linkNameTwo="ant-lukyanets.co.ua/ryco/properties"
                            text={<Translate id="main.portfolio.ryco" />}
                            oneTechnologyImg={<i className="fab fa-html5"></i>}
                            oneTechnologyName="HTML 5"
                            twoTechnologyImg={<i className="fab fa-sass"></i>}
                            twoTechnologyName="SASS"
                            threeTechnologyImg={
                                <i className="fab fa-js-square"></i>
                            }
                            threeTechnologyName="jQuery"
                            fourTechnologyImg={
                                <i className="fab fa-bootstrap"></i>
                            }
                            fourTechnologyName="Bootstrap 4"
                        />
                    </Col>
                    <Col xs={12}>
                        <Works
                            image={brandero__small}
                            name="Brandero"
                            link="https://ant-lukyanets.co.ua/brandero"
                            linkName="ant-lukyanets.co.ua/brandero"
                            text={<Translate id="main.portfolio.brandero" />}
                            oneTechnologyImg={<i className="fab fa-html5"></i>}
                            oneTechnologyName="HTML 5"
                            twoTechnologyImg={<i className="fab fa-sass"></i>}
                            twoTechnologyName="SASS"
                            threeTechnologyImg={
                                <i className="fab fa-js-square"></i>
                            }
                            threeTechnologyName="jQuery"
                            fourTechnologyImg={
                                <i className="fab fa-bootstrap"></i>
                            }
                            fourTechnologyName="Bootstrap 4"
                        />
                    </Col>
                    <Col xs={12}>
                        <Works
                            image={misocial__small}
                            name="Misocial"
                            link="https://ant-lukyanets.co.ua/misocial"
                            linkName="ant-lukyanets.co.ua/misocial"
                            linkTwo="https://ant-lukyanets.co.ua/misocial/pricing.html"
                            linkNameTwo="ant-lukyanets.co.ua/misocial/pricing"
                            text={<Translate id="main.portfolio.misocial" />}
                            oneTechnologyImg={<i className="fab fa-html5"></i>}
                            oneTechnologyName="HTML 5"
                            twoTechnologyImg={<i className="fab fa-sass"></i>}
                            twoTechnologyName="SASS"
                            threeTechnologyImg={
                                <i className="fab fa-js-square"></i>
                            }
                            threeTechnologyName="jQuery"
                            fourTechnologyImg={
                                <i className="fab fa-bootstrap"></i>
                            }
                            fourTechnologyName="Bootstrap 4"
                        />
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
export default Portfolio;

function Works(props) {
    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(null);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
        setDirection(e.direction);
    };
    const slider = props.slider;

    if (slider) {
        return (
            <div className="portfolio__works">
                <Row>
                    <Col md={6} xs={12}>
                        <ScrollAnimation
                            animateIn="fadeInLeft"
                            offset={0}
                            animateOnce
                            duration={1.5}
                        >
                            <Carousel
                                activeIndex={index}
                                direction={direction}
                                onSelect={handleSelect}
                                indicators={false}
                                interval={3000}
                            >
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={props.sliderImageOne}
                                        alt="First slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={props.sliderImageTwo}
                                        alt="Second slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={props.sliderImageThree}
                                        alt="Third slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={props.sliderImageFour}
                                        alt="Four slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={props.sliderImageFive}
                                        alt="Five slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={props.sliderImageSix}
                                        alt="Six slide"
                                    />
                                </Carousel.Item>
                            </Carousel>
                        </ScrollAnimation>
                    </Col>

                    <Col md={6} xs={12}>
                        <ScrollAnimation
                            animateIn="fadeInRight"
                            animateOnce
                            offset={0}
                            duration={1.5}
                        >
                            <div className="workInfo">
                                <p className="title">{props.name}</p>
                                <div className="link">
                                    <a
                                        href={props.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {props.linkName}
                                    </a>
                                    <a
                                        href={props.linkTwo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {props.linkNameTwo}
                                    </a>
                                </div>
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
                        </ScrollAnimation>
                    </Col>
                </Row>
            </div>
        );
    }
    return (
        <div className="portfolio__works">
            <Row>
                <Col md={6} xs={12}>
                    <ScrollAnimation
                        animateIn="fadeInLeft"
                        animateOnce
                        offset={0}
                        duration={1.5}
                    >
                        <div className="workPict">
                            <img src={props.image} alt={props.image} />
                        </div>
                    </ScrollAnimation>
                </Col>
                <Col md={6} xs={12}>
                    <ScrollAnimation
                        animateIn="fadeInRight"
                        animateOnce
                        offset={0}
                        duration={1.5}
                    >
                        <div className="workInfo">
                            <p className="title">{props.name}</p>
                            <div className="link">
                                <a
                                    href={props.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {props.linkName}
                                </a>
                                <a
                                    href={props.linkTwo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {props.linkNameTwo}
                                </a>
                            </div>
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
                    </ScrollAnimation>
                </Col>
            </Row>
        </div>
    );
}

function Wave() {
    return (
        <div className="waves">
            <svg width="100%" height="20%" fill="none">
                <path
                    fill="#3B335B"
                    d="
          M0 67
          C 273,183
            822,-40
            1920.00,106 

          V 359 
          H 0 
          V 67
          Z"
                >
                    <animate
                        repeatCount="indefinite"
                        fill="#3B335B"
                        attributeName="d"
                        dur="15s"
                        values="
            M0 77 
            C 473,283
              822,-40
              1920,116 

            V 359 
            H 0 
            V 67 
            Z; 

            M0 77 
            C 473,-40
              1222,283
              1920,136 

            V 359 
            H 0 
            V 67 
            Z; 

            M0 77 
            C 973,260
              1722,-53
              1920,120 

            V 359 
            H 0 
            V 67 
            Z; 

            M0 77 
            C 473,283
              822,-40
              1920,116 

            V 359 
            H 0 
            V 67 
            Z
            "
                    ></animate>
                </path>
            </svg>
        </div>
    );
}
