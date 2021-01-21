import React from "react";

import ButtonCallToAction from "./ButtonCallToAction"

import "../../../scss/components/LandingPage/MealsPlanner/MealsPlanner.scss";

const MealsPlanner = () => {
    
    return(
        <section className="calltoaction">
            <div className="container">
                <div className="bowl">
                    <div className="a">
                        <h3 className="opening_header">Switch to our app</h3>
                        <p className="opening_heading">It has never been easier to change food habbits and get fit!</p>
                    </div>
                    <ButtonCallToAction target="/pulpit" width="200px" height="60px" text="Start" 
                    />
                </div>
            </div>
        </section>
    )
}

export default MealsPlanner;