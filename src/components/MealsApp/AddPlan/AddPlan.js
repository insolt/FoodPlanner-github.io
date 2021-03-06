import React, { useState, useEffect, useContext } from "react";
import { UserNameContext } from "../WelcomePage/UserNameContext";

import Header from "../Header";
import Nav from "../Nav";
import SubmitFormButton from "../WelcomePage/SubmitFormButton";
import MealSelect from "../WelcomePage/MealSelect";
import Pulpit from "../Pulpit/Pulpit";

import "../../../scss/components/MealsApp/AddPlan/AddPlan.scss";

const MY_URL = "https://cors-anywhere.herokuapp.com/https://firebasestorage.googleapis.com/v0/b/food-planner-7754f.appspot.com/o/emails.json?alt=media&token=77074169-91f9-4b0d-abc6-6b55d3ba9aee";
const MY_DB = "http://localhost:3005";

const AddPlan = () => {
    const { userName } = useContext(UserNameContext);
    const [data, setData] = useState();
    const [form, setForm] = useState({
        planName: '',
        planDescription: '',
        weekNumber: 0,
        MondayBreakfast: "",
        MondaySecondBreakfast: "",
        MondayLunch: "",
        MondayTea: "",
        MondayDinner: "",
        TuesdayBreakfast: "",
        TuesdaySecondBreakfast: "",
        TuesdayLunch: "",
        TuesdayTea: "",
        TuesdayDinner: "",
        WednesdayBreakfast: "",
        WednesdaySecondBreakfast: "",
        WednesdayLunch: "",
        WednesdayTea: "",
        WednesdayDinner: "",
        ThursdayBreakfast: "",
        ThursdaySecondBreakfast: "",
        ThursdayLunch: "",
        ThursdayTea: "",
        ThursdayDinner: "",
        FridayBreakfast: "",
        FridaySecondBreakfast: "",
        FridayLunch: "",
        FridayTea: "",
        FridayDinner: "",
        SaturdayBreakfast: "",
        SaturdaySecondBreakfast: "",
        SaturdayLunch: "",
        SaturdayTea: "",
        SaturdayDinner: "",
        SundayBreakfast: "",
        SundaySecondBreakfast: "",
        SundayLunch: "",
        SundayTea: "",
        SundayDinner: ""
    });
    const [view, setView] = useState(false);

    useEffect(() => {
        fetch(`${MY_URL}/users`)
            .then(resp => resp.json())
            .then(res => setData(res))
            .catch(error => console.log(error));
    }, [])

    const handleChange = ({ target: { name, value }}) => {
        setForm(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let userID;
        let mealsObjToArr = [];
        let weekFilteredMealsRecipes = [];
        let weekFilteredMealsPlans = [];
        let freshPlan = {};

        if ((data) && (userName)) {
            mealsObjToArr.push(data.filter(el => el.name == `${userName}`));
            userID = mealsObjToArr[0][0].id;
            weekFilteredMealsRecipes = mealsObjToArr[0][0].recipes;
            weekFilteredMealsPlans = mealsObjToArr[0][0].plans;

            freshPlan = {
                "planName": form.planName,
                "planDescription": form.planDescription,
                "weekNumber": form.weekNumber,
                "Monday": {
                    "Breakfast": form.MondayBreakfast,
                    "SecondBreakfast": form.MondaySecondBreakfast,
                    "Lunch": form.MondayLunch,
                    "Tea": form.MondayTea,
                    "Dinner": form.MondayDinner
                },
                "Tuesday": {
                    "Breakfast": form.TuesdayBreakfast,
                    "SecondBreakfast": form.TuesdaySecondBreakfast,
                    "Lunch": form.TuesdayLunch,
                    "Tea": form.TuesdayTea,
                    "Dinner": form.TuesdayDinner
                },
                "Wednesday": {
                    "Breakfast": form.WednesdayBreakfast,
                    "SecondBreakfast": form.WednesdaySecondBreakfast,
                    "Lunch": form.WednesdayLunch,
                    "Tea": form.WednesdayTea,
                    "Dinner": form.WednesdayDinner
                },
                "Thursday": {
                    "Breakfast": form.ThursdayBreakfast,
                    "SecondBreakfast": form.ThursdaySecondBreakfast,
                    "Lunch": form.ThursdayLunch,
                    "Tea": form.ThursdayTea,
                    "Dinner": form.ThursdayDinner
                },
                "Friday": {
                    "Breakfast": form.FridayBreakfast,
                    "SecondBreakfast": form.FridaySecondBreakfast,
                    "Lunch": form.FridayLunch,
                    "Tea": form.FridayTea,
                    "Dinner": form.FridayDinner
                },
                "Saturday": {
                    "Breakfast": form.SaturdayBreakfast,
                    "SecondBreakfast": form.SaturdaySecondBreakfast,
                    "Lunch": form.SaturdayLunch,
                    "Tea": form.SaturdayTea,
                    "Dinner": form.SaturdayDinner
                },
                "Sunday": {
                    "Breakfast": form.SundayBreakfast,
                    "SecondBreakfast": form.SundaySecondBreakfast,
                    "Lunch": form.SundayLunch,
                    "Tea": form.SundayTea,
                    "Dinner": form.SundayDinner
                } 
            };

            weekFilteredMealsPlans.push(freshPlan);
        }

        const newPlan = {
                "name": `${userName}`,
                "recipes": weekFilteredMealsRecipes,
                "plans": weekFilteredMealsPlans
        }
        
        fetch(`${MY_URL}/users/${userID}`, {
            method: 'PUT',
            body: JSON.stringify(newPlan),
            headers: {
              'Content-Type': 'application/json'
            }
          })
            .then(resp => resp.json())
            .then(res => console.log(res))
            .catch(error => console.log(error));

        setView(true)
    }
    
   
    return(
        <>
        <Header />
            <div className="app">
                <Nav />
                {
                    (!view) ? (
                <section className="add_new_plan">
                    <div className="add_new_plan">
                        <form className="add_new_plan_form">
                            <div className="new_plan_header">
                                <h1>NEW PLAN</h1>
                                <SubmitFormButton onDone={handleSubmit} width="150px" height="35px" text="Save & close" />
                            </div>
                            <div className="description">
                                <div className="input_text_area">
                                    <label>Plan name</label><input className="input_plan_name" name="planName" value={form.planName} onChange={handleChange}/>
                                </div>
                                <div className="input_text_area">
                                    <label>Plan description</label><textarea name="planDescription" value={form.planDescription} onChange={handleChange}></textarea>
                                </div>
                                <div className="input_text_area">
                                    <label>Week number</label><input className="input_week_number" type="number" name="weekNumber" value={form.weekNumber} onChange={handleChange}></input>
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
                                            <td><MealSelect name="MondayBreakfast" onDone={handleChange}/></td>
                                            <td><MealSelect name="MondaySecondBreakfast" onDone={handleChange}/></td>
                                            <td><MealSelect name="MondayLunch" onDone={handleChange}/></td>
                                            <td><MealSelect name="MondayTea" onDone={handleChange}/></td>
                                            <td><MealSelect name="MondayDinner" onDone={handleChange}/></td>
                                        </tr>
                                        <tr>
                                            <th>TUESDAY</th>
                                            <td><MealSelect name="TuesdayBreakfast" onDone={handleChange}/></td>
                                            <td><MealSelect name="TuesdaySecondBreakfast" onDone={handleChange}/></td>
                                            <td><MealSelect name="TuesdayLunch" onDone={handleChange}/></td>
                                            <td><MealSelect name="TuesdayTea" onDone={handleChange}/></td>
                                            <td><MealSelect name="TuesdayDinner" onDone={handleChange}/></td>
                                        </tr>
                                        <tr>
                                            <th>WEDNESDAY</th>
                                            <td><MealSelect name="WednesdayBreakfast" onDone={handleChange}/></td>
                                            <td><MealSelect name="WednesdaySecondBreakfast" onDone={handleChange}/></td>
                                            <td><MealSelect name="WednesdayLunch" onDone={handleChange}/></td>
                                            <td><MealSelect name="WednesdayTea" onDone={handleChange}/></td>
                                            <td><MealSelect name="WednesdayDinner" onDone={handleChange}/></td>
                                        </tr>
                                        <tr>
                                            <th>THURSDAY</th>
                                            <td><MealSelect name="ThursdayBreakfast" onDone={handleChange}/></td>
                                            <td><MealSelect name="ThursdaySecondBreakfast" onDone={handleChange}/></td>
                                            <td><MealSelect name="ThursdayLunch" onDone={handleChange}/></td>
                                            <td><MealSelect name="ThursdayTea" onDone={handleChange}/></td>
                                            <td><MealSelect name="ThursdayDinner" onDone={handleChange}/></td>
                                        </tr>
                                        <tr>
                                            <th>FRIDAY</th>
                                            <td><MealSelect name="FridayBreakfast" onDone={handleChange}/></td>
                                            <td><MealSelect name="FridaySecondBreakfast" onDone={handleChange}/></td>
                                            <td><MealSelect name="FridayLunch" onDone={handleChange}/></td>
                                            <td><MealSelect name="FridayTea" onDone={handleChange}/></td>
                                            <td><MealSelect name="FridayDinner" onDone={handleChange}/></td>
                                        </tr>
                                        <tr>
                                            <th>SATURDAY</th>
                                            <td><MealSelect name="SaturdayBreakfast" onDone={handleChange}/></td>
                                            <td><MealSelect name="SaturdaySecondBreakfast" onDone={handleChange}/></td>
                                            <td><MealSelect name="SaturdayLunch" onDone={handleChange}/></td>
                                            <td><MealSelect name="SaturdayTea" onDone={handleChange}/></td>
                                            <td><MealSelect name="SaturdayDinner" onDone={handleChange}/></td>
                                        </tr>
                                        <tr>
                                            <th>SUNDAY</th>
                                            <td><MealSelect name="SundayBreakfast" onDone={handleChange}/></td>
                                            <td><MealSelect name="SundaySecondBreakfast" onDone={handleChange}/></td>
                                            <td><MealSelect name="SundayLunch" onDone={handleChange}/></td>
                                            <td><MealSelect name="SundayTea" onDone={handleChange}/></td>
                                            <td><MealSelect name="SundayDinner" onDone={handleChange}/></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </form>
                    </div>
                </section>
                ) : (
                        <Pulpit />
                    )
                }
            </div>
        </>
    )
}

export default AddPlan;