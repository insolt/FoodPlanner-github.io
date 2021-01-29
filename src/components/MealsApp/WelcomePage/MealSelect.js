import React, { useState, useEffect, useContext } from "react";
import {UserNameContext} from "./UserNameContext";

import "../../../scss/components/MealsApp/WelcomePage/MealSelect.scss";

const MY_URL = "https://cors-anywhere.herokuapp.com/https://firebasestorage.googleapis.com/v0/b/food-planner-7754f.appspot.com/o/emails.json?alt=media&token=77074169-91f9-4b0d-abc6-6b55d3ba9aee";
const MY_DB = "http://localhost:3005";

const MealSelect = ({ onDone, name, initialValue }) => {
    const { userName } = useContext(UserNameContext);
    const [selectedMeal, setSelectedMeal] = useState();
    const [data, setData] = useState();

    useEffect(() => {
        fetch(`${MY_URL}/users`)
            .then(resp => resp.json())
            .then(res => setData(res))
            .catch(error => console.log(error));
    }, [])

    let recipesObjToArr = [];
    if ((data) && (userName)) {
        recipesObjToArr.push((data.filter(el => el.name === `${userName}`))[0].recipes);
    }

    const handleChange = (e) => {
        setSelectedMeal(e.target.value)
        onDone(e)
    }   
    
    return(
        <select name={name} value={selectedMeal} className="select_options" onChange={handleChange}>
            { (initialValue) ? <option>{initialValue}</option> : <option>choose...</option> }
            {(!data) || (!userName) ? <p>Ladowanie danych</p> : recipesObjToArr[0].map(el => (
                <option value={el.recipeName}>{el.recipeDescription}</option>
            ))}
        </select>
    )
}

export default MealSelect;   