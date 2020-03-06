import React from 'react';
import {Link} from 'react-router-dom';

const Home = props => {
	return (
        <>
        <header className="header">
            <h1>This is the Home Page, the purpose of the home page is to give the user easy access to all the parts of the Single Page Application</h1>
            <img className="homepageicon" src="../images/homepage.png" alt="homepage icon"/>
        </header>
        <div className="homepageLinks">
        <div className="contactLink">
        <h2>Contact Me</h2>
            <Link to="/Contact"><img className="contacticon" src="../images/contact.png" alt="Contact icon"/></Link>
        </div>
        <div className="randomLink">
        <h2>Random</h2>
            <Link to="/Random"><img className="randomicon" src="../images/random.png" alt="Random icon"/></Link>
        </div>
        <div className="aboutLink">
        <h2>About Me</h2>
            <Link to="/About"><img className="abouticon" src="../images/about.png" alt="About icon"/></Link>
        </div>
        </div>
        </>
    )
    }
export default Home;