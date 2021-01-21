import React from "react";
import { NavLink } from "react-router-dom";

import "../../../scss/components/MealsApp/Nav/AppNavButton.scss";

const AppNavButton = ({ to, text }) => {
    return(
        <li className="aside_menu_item">
            <NavLink to={to} activeClassName="active">{text}</NavLink>
            <span><i className="fas fa-angle-right"></i></span>
        </li>
    )
}

export default AppNavButton;