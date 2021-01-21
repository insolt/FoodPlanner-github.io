import React from "react";

import "../../../scss/components/MealsApp/Pulpit/Meal.scss";

const Meal = ({ data, weekNumber, day, meal }) => {

    return (
        <div className="meal">{
            (!data) ? (
                <p className="meal">Ladowanie danych</p>
            ) : (
                <p>{data.Michal.plans.filter(el => el.weekNumber === +`${weekNumber}`)[0][`${day}`][`${meal}`]}</p>
            )
        }
        </div>
    )
}

export default Meal;