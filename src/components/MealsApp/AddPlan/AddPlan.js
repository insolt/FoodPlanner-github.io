import React from "react";

import SubmitFormButton from "../WelcomePage/SubmitFormButton"
import MealSelect from "../WelcomePage/MealSelect"

import "../../../scss/components/MealsApp/AddPlan/AddPlan.scss";

const AddPlan = () => {
    const handleClick = (e) => {
        e.preventDefault();
        console.log("zapisuje nowy plan");
    }
    
    return(
        <section className="add_new_plan">
            <div className="add_new_plan">
                <form className="add_new_plan_form">
                    <div className="new_plan_header">
                        <h1>NEW PLAN</h1>
                        <SubmitFormButton onDone={handleClick} width="150px" height="35px" text="Save & close" />
                    </div>
                    <div className="description">
                        <div className="input_text_area">
                            <label>Plan name</label><input className="input_plan_name" type="text" name="plan_name"/>
                        </div>
                        <div className="input_text_area">
                            <label>Plan description</label><textarea name="plan_desc"></textarea>
                        </div>
                        <div className="input_text_area">
                            <label>Week number</label><input className="input_week_number" type="number" name="week_number"></input>
                        </div>
                    </div>
                    <div className="new_plan_table">
                        <table>
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>BREAKFAST</th>
                                        <th>2nd BREAKFAST</th>
                                        <th>LUNCH</th>
                                        <th>TEA</th>
                                        <th>DINNER</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th>MONDAY</th>
                                        <td><MealSelect /></td>
                                        <td><MealSelect /></td>
                                        <td><MealSelect /></td>
                                        <td><MealSelect /></td>
                                        <td><MealSelect /></td>
                                    </tr>
                                    <tr>
                                        <th>TUESDAY</th>
                                        <td><MealSelect /></td>
                                        <td><MealSelect /></td>
                                        <td><MealSelect /></td>
                                        <td><MealSelect /></td>
                                        <td><MealSelect /></td>
                                    </tr>
                                    <tr>
                                        <th>WEDNESDAY</th>
                                        <td><MealSelect /></td>
                                        <td><MealSelect /></td>
                                        <td><MealSelect /></td>
                                        <td><MealSelect /></td>
                                        <td><MealSelect /></td>
                                    </tr>
                                    <tr>
                                        <th>THURSDAY</th>
                                        <td><MealSelect /></td>
                                        <td><MealSelect /></td>
                                        <td><MealSelect /></td>
                                        <td><MealSelect /></td>
                                        <td><MealSelect /></td>
                                    </tr>
                                    <tr>
                                        <th>FRIDAY</th>
                                        <td><MealSelect /></td>
                                        <td><MealSelect /></td>
                                        <td><MealSelect /></td>
                                        <td><MealSelect /></td>
                                        <td><MealSelect /></td>
                                    </tr>
                                    <tr>
                                        <th>SATURDAY</th>
                                        <td><MealSelect /></td>
                                        <td><MealSelect /></td>
                                        <td><MealSelect /></td>
                                        <td><MealSelect /></td>
                                        <td><MealSelect /></td>
                                    </tr>
                                    <tr>
                                        <th>SUNDAY</th>
                                        <td><MealSelect /></td>
                                        <td><MealSelect /></td>
                                        <td><MealSelect /></td>
                                        <td><MealSelect /></td>
                                        <td><MealSelect /></td>
                                    </tr>
                                </tbody>
                        </table>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default AddPlan;