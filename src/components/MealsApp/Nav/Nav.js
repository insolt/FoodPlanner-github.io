import React from "react";

import AppNavButton from "./AppNavButton"

import "../../../scss/components/MealsApp/Nav/Nav.scss"

const Nav = () => {
    return(
        <section className="app_main_view">
            <aside>
                <nav>
                    <ul id="app_nav" className="aside_menu_list">
                        <AppNavButton text="Desktop" />
                        <AppNavButton text="Recipes" />
                        <AppNavButton text="Plans" />
                        <AppNavButton text="Shopping" />
                    </ul>
                </nav>
            </aside>
        </section>

    )
}

export default Nav;