import React, { useState } from "react";

import "../../../scss/components/MealsApp/WelcomePage/MealSelect.scss";

const MealSelect = ({ onDone, name, options }) => {
    const [selectedMeal, setSelectedMeal] = useState();
    const data = options;

    const handleChange = (e) => {
        setSelectedMeal(e.target.value)
        onDone(e)
    }   
    
    return(
        <select name={name} value={selectedMeal} className="select_options" onChange={handleChange}>
            <option>choose...</option>
            {(!data) ? <p>Ladowanie danych</p> : data.Michal.recipes.map(el => (
                <option value={el.recipeDescription}>{el.recipeDescription}</option>
            ))}
        </select>
    )
}

export default MealSelect;   