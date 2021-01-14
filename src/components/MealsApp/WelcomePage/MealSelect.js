import React, { useState } from "react";

import "../../../scss/components/MealsApp/WelcomePage/MealSelect.scss";

const MealSelect = () => {
    const [selectedMeal, setSelectedMeal] = useState ()

    return(
        <select value={selectedMeal} className="select_options" onChange={(e) => setSelectedMeal(e.target.value)}>
            <option value="option1">nadajemy option 1</option>
            <option value="option2">nadajemy option 2</option>
            <option value="option3">nadajemy option 3</option>
            <option value="option4">nadajemy option 4</option>
            <option value="option5">nadajemy option 5</option>
            <option value="option6">nadajemy option 6</option>
            <option value="option7">nadajemy option 7</option>
        </select>
    )
}

export default MealSelect;