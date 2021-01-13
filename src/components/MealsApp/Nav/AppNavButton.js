import React from "react";

import "../../../scss/components/MealsApp/Nav/AppNavButton.scss"

const AppNavButton = ({ text }) => {
    return(
        <li className="aside_menu_item"><a className="app_nav_buttons" href='#plany'>{text}</a><span><i className="fas fa-angle-right"></i></span></li>

    )
}

export default AppNavButton;