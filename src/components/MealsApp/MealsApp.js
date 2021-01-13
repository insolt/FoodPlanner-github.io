import React from "react";

import Header from "./Header/Header";
import Nav from "./Nav/Nav";
// import WelcomePage from "./WelcomePage/WelcomePage"
// import Pulpit from "./Pulpit/Pulpit"
// import RecipesList from "./RecipesList/RecipesList";
// import PlansList from "./PlansList/PlansList";
import AddRecipe from "./AddRecipe/AddRecipe";

import "../../scss/components/MealsApp/MealsApp.scss";

const MealsApp = () => {

    return(
        <>
            <Header />
            <main className="app">
                <Nav />
                {/* <WelcomePage />  */}
                {/* <Pulpit /> */}
                {/* <RecipesList /> */}
                {/* <PlansList /> */}
                <AddRecipe />
            </main>
        </>
    )
}

export default MealsApp;