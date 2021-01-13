import React from "react";

import AddButton from "./AddButton";
import InfoBox from "./InfoBox";
import WeekReview from "./WeekReview";

import "../../../scss/components/MealsApp/Pulpit/Pulpit.scss";

const Pulpit = () => {
    const handleClick = (e) => {
        console.log(e.currentTarget.value)
    }
   
    return(
        <section className="pulpit">
            <div className="main_view">
                <div className="top_row">
                    <div className="add_buttons">
                        <AddButton text="recipe" value="AddRecipe" onDone={handleClick}/>
                        <AddButton text="plan" value="AddPlan" onDone={handleClick}/>
                        <AddButton text="shopping" value="AddShopping" onDone={handleClick}/>
                    </div>
                    <div className="info_boxes">
                        <InfoBox color="var(--info)" top="0%" icon="fas fa-info-circle" text="You saved {} recipes, well done!"/>
                        <InfoBox color="var(--button)" top="37%" icon="fas fa-exclamation-circle" text="Do not forget to add a plan!" />
                        <InfoBox color="var(--success)" top="74%" icon="fas fa-check-circle" text="Great you are here! Enjoy food planning!"/>
                    </div>
                </div>
                <WeekReview />
            </div>
        </section>
    )
}

export default Pulpit;