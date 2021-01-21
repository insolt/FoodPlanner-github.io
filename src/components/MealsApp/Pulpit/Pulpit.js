import React, { useState, useEffect } from "react";

import AddButton from "./AddButton";
import InfoBox from "./InfoBox";
import WeekReview from "./WeekReview";

import "../../../scss/components/MealsApp/Pulpit/Pulpit.scss";

const Pulpit = () => {
    const [data, setData] = useState();

    useEffect(() => {
        fetch('http://localhost:3001/db')
            .then(res => {
                if (res.ok) {
                    return res
                } 
                throw new Error(res.status);
                // console.log(res);
            })
            .then(resp => resp.json())
            .then(res => setData(res))
            .catch(err => console.log(err));
    }, []);

    const rAmount = () => {
        if (!data) {
            console.log('Ladowanie danych')
         } else {
         console.log(data.mbornikowski.recipes.length)
         }
    }

    return(
        <section className="pulpit">
            <div className="main_view">
                <div className="top_row">
                    <div className="add_buttons">
                        <AddButton text="recipe" to="/addrecipe"/>
                        <AddButton text="plan" to="/addplan"/>
                        <AddButton text="shopping" to="/shoppinglist"/>
                    </div>
                    <div className="info_boxes">
                        <InfoBox color="var(--info)" top="0%" icon="fas fa-info-circle" text={`You saved ${(!data) ? (<p>Ladowanie danych</p>) : (data.Michal.recipes.length)} recipes and ${(!data) ? (<p>Ladowanie danych</p>) : (data.Michal.plans.length)} plans, well done!`} />
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