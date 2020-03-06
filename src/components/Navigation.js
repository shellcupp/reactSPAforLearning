import React from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';
import Random from './Random';
import About from './About';
import useDarkMode from '../hooks/useDarkMode';

const Navigation = (key, initialValue) => {
    const [value, toggleMode] = useDarkMode('key', initialValue);
return(
<>

<nav className="navigation">
<div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={value ? 'toggle toggled' : 'toggle'}
        />
      </div>
<NavLink className="links" to="/Home">Home</NavLink>
<NavLink className="links" to="/Contact">Contact</NavLink>
<NavLink className="links" to="/Random">Random</NavLink>
<NavLink className="links" to="/About">About</NavLink>
</nav>

<Switch>
<Route path="/home" component={Home}/>
<Route path="/contact" component={Contact}/>
<Route path="/random" component={Random}/>
<Route path="/about" component={About}/>
</Switch>
</>
);
};
export default Navigation;