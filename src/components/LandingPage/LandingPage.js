import React from "react";

import Header from "./Header/Header";
import Carousel from "./Carousel/Carousel";
import MealsPlanner from "./MealsPlanner/MealsPlanner";
import Why from "./Why/Why";
import Subscribe from "./Subscribe/Subscribe";
import AboutMe from "./AboutMe/AboutMe";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";

import "../../scss/components/LandingPage/LandingPage.scss";


const LandingPage = () => {
    return(
        <div>
            <Header />
            <Carousel />
            <MealsPlanner />
            <Why />
            <Subscribe />
            <AboutMe />
            <Contact />
            <Footer />
        </div>
    )
}

export default LandingPage;