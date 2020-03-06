import React from 'react';
import Carousel from "./Carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const About = props => {
	return (
        <>
        <h1>About Me Page! Here you can find all sorts of info about me.</h1>
        <div className="portfolio">
        <a href="https://michelle-cupp.com/"><p>My Portfolio</p></a>
        <a href="https://michelle-cupp.com/"><img src="../images/portfolio.png" alt="Portfolio Link"/></a>
        </div>
        <Carousel />
        </>
    )
    }
export default About;