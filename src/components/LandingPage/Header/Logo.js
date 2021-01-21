import React from "react";
import { Link } from "react-router-dom";

import "../../../scss/components/LandingPage/Header/Logo.scss";

const Logo = () => {
    return(
        <Link to="/"><h1 className="logo">Food <span>Planner</span></h1></Link>
    )
}

export default Logo