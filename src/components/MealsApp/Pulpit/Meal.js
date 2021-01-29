import React from "react";

import "../../../scss/components/MealsApp/Pulpit/Meal.scss";

const Meal = ({ weekMenu }) => {

    return(
        <div>        
            {weekMenu}
        </div>
    )
}

export default Meal;