import React from "react";

import AppNavButton from "./AppNavButton";

import "../../../scss/components/MealsApp/Nav/Nav.scss";

const Nav = () => {
    return(
        <section className="app_main_view">
            <aside>
                <nav>
                    <ul id="app_nav" className="aside_menu_list">
                        <AppNavButton to="/pulpit" text="Pulpit" />
                        <AppNavButton to="/recipeslist" text="Recipes" />
                        <AppNavButton to="/planslist" text="Plans" />
                        <AppNavButton to="/shoppinglist" text="Shopping" />
                    </ul>
                </nav>
            </aside>
        </section>

    )
}

export default Nav;