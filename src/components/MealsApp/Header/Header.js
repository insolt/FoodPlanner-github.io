import React, { useContext } from "react";
import { UserNameContext } from "../WelcomePage/UserNameContext";

import Logo from "../../LandingPage/Header/Logo";

import "../../../scss/components/MealsApp/Header/Header.scss";

const Header = () => {
    const { userName } = useContext(UserNameContext);
    
    return(
        <header className="app_header">
            <Logo />
            <div className="login_details">
                <h2 className="loginUserName">{userName}</h2>
                <i className="far fa-user-circle"></i>
            </div>
        </header>
    )
}

export default Header;