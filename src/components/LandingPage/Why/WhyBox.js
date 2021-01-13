import React from "react";

import "../../../scss/components/LandingPage/Why/WhyBox.scss";

const WhyBox = ({ icon, title, description }) => {
    return(
        <div className="box">
            <h1 className="why_icon"><i className={icon}></i></h1>
            <h2 className="why_title">{title}</h2>
            <p className="why_description">{description}</p>
        </div>  
    )
}

export default WhyBox;