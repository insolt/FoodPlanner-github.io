import React from "react";
import { Link } from "react-router-dom";

import "../../../scss/components/LandingPage/MealsPlanner/ButtonCallToAction.scss";

const ButtonCallToAction = ({ target, width, height, text }) => {
    
    return(
        <div className="button">
            <Link to={target}><button className="button" style={{ width:width, height:height }}>{text}</button></Link>
        </div>
    )
}

export default ButtonCallToAction