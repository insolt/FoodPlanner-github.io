import React from "react";
import { Link } from "react-scroll";

import "../../../scss/components/LandingPage/Header/Navigation.scss";

const Navigation = () => {
    return(
            <div>
                <ul className="top_navigation">
                    <li><Link activeClass="active" to="meals_planner" spy={true} smooth={true} offset={-120} duration={800}>Meals Planner</Link></li>
                    <li><Link activeClass="active" to="why" spy={true} smooth={true} offset={-120} duration={800}>Why ?</Link></li>
                    <li><Link activeClass="active" to="about_me" spy={true} smooth={true} offset={-120} duration={800}>About Me</Link></li>
                    <li><Link activeClass="active" to="contact" spy={true} smooth={true} offset={-120} duration={800}>Contact</Link></li>
                </ul>
            </div>     
    )
}

export default Navigation