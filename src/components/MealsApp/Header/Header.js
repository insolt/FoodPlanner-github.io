import React from "react";

import Logo from "../../LandingPage/Header/Logo"

import "../../../scss/components/MealsApp/Header/Header.scss"

const Header = () => {
    return(
        <header className="app_header">
            <Logo />
            <div className="login_details">
                <h2 className="loginUserName">Name</h2>
                <i className="far fa-user-circle"></i>
            </div>
        </header>
    )
}

export default Header;