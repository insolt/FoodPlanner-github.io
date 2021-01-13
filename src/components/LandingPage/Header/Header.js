import React from "react";

import Logo from "./Logo";
import Navigation from "./Navigation";

import "../../../scss/components/LandingPage/Header/Header.scss";


const Header = () => {
    return(
            <div className="header">
                <div className="container">
                    <div className="top_nav">
                        <Logo />
                        <Navigation />
                    </div>
                </div>
            </div>
    )
}

export default Header