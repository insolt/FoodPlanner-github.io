import React from "react";

import SubmitFormButton from "../WelcomePage/SubmitFormButton"

import "../../../scss/components/MealsApp/AddRecipe/AddRecipe.scss";

const AddRecipe = () => {
    const handleClick = (e) => {
        e.preventDefault();
        console.log("zapisuje nowy przepis");
    }
    
    return(
        <section className="add_new_recipe">
            <div className="add_new_recipe">
                <form className="add_new_recipe_form">
                    <div className="new_recipe_header">
                        <h1>NEW RECIPE</h1>
                        <SubmitFormButton onDone={handleClick} width="150px" height="35px" text="Save & close" />
                    </div>
                    <div className="description">
                        <div className="input_text_area">
                            <label>Recipe name</label><input type="text" name="recipe_name"/>
                        </div>
                        <div className="input_text_area">
                            <label>Recipe description</label><textarea name="recipe_desc"></textarea>
                        </div>
                    </div>
                    <div className="method">
                        <div className="instructions">
                            <h2>INSTRUCTIONS</h2>
                            <div>
                                <textarea name="instruction"></textarea>
                                <i className="add_instruction fas fa-plus-square"></i>
                            </div>
                            <div className="inst_list">
                                <ul className="inst_list"></ul>
                            </div>
                        </div>
                        <div className="ingredients">
                            <h2>INGREDIENTS</h2>
                            <div>
                                <input type="text" name="ingredient"/>
                                <i className="add_ingredient fas fa-plus-square"></i>
                            </div>
                            <div className="ingr_list">
                                <ul className="ingr_list"></ul>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default AddRecipe;