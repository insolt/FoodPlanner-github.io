import React from "react";

import "../../../scss/components/LandingPage/MealsPlanner/ButtonCallToAction.scss";

const ButtonCallToAction = ({ target, width, height, text }) => {
    

    return(
        <div className="button">
            <a href={target}><button className="button" style={{ width:width, height:height }}>{text}</button></a>
        </div>
    )
}

export default ButtonCallToAction