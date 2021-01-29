import React, { useState, useEffect, useContext } from "react";
import { UserNameContext } from "../WelcomePage/UserNameContext";

import Header from "../Header";
import Nav from "../Nav";
import SubmitFormButton from "../WelcomePage/SubmitFormButton";
import MealSelect from "../WelcomePage/MealSelect";
import Pulpit from "../Pulpit";

import "../../../scss/components/MealsApp/AddPlan/AddPlan.scss";

const MY_URL = "https://cors-anywhere.herokuapp.com/https://firebasestorage.googleapis.com/v0/b/food-planner-7754f.appspot.com/o/db.json?alt=media&token=538068e1-3446-4406-84ad-c9240b665775";
const MY_DB = "http://localhost:3005/users";

const EditPlan = () => {
    const { userName } = useContext(UserNameContext);
    const [data, setData] = useState();
    const [view, setView] = useState(false);
    const [form, setForm] = useState({
        planName: '',
        planDescription: '',
        weekNumber: 1,
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
    })

    useEffect(() => {
        setData(JSON.parse(localStorage.getItem('editData')));
        let itemSentToEdit = JSON.parse(localStorage.getItem('editDescription'));
        console.log(itemSentToEdit[0].Monday.Breakfast)
        console.log(itemSentToEdit[0].Tuesday.Breakfast)
        console.log(itemSentToEdit[0].Wednesday.Breakfast)
        setForm(prev => ({
            ...prev,
            planName: itemSentToEdit[0].planName,
            planDescription: itemSentToEdit[0].planDescription,
            weekNumber: itemSentToEdit[0].weekNumber,
            MondayBreakfast: itemSentToEdit[0].Monday.Breakfast,
            MondaySecondBreakfast: itemSentToEdit[0].Monday.SecondBreakfast,
            MondayLunch: itemSentToEdit[0].Monday.Lunch,
            MondayTea: itemSentToEdit[0].Monday.Tea,
            MondayDinner: itemSentToEdit[0].Monday.Dinner,
            TuesdayBreakfast: itemSentToEdit[0].Tuesday.Breakfast,
            TuesdaySecondBreakfast: itemSentToEdit[0].Tuesday.SecondBreakfast,
            TuesdayLunch: itemSentToEdit[0].Tuesday.Lunch,
            TuesdayTea: itemSentToEdit[0].Tuesday.Tea,
            TuesdayDinner: itemSentToEdit[0].Tuesday.Dinner,
            WednesdayBreakfast: itemSentToEdit[0].Wednesday.Breakfast,
            WednesdaySecondBreakfast: itemSentToEdit[0].Wednesday.SecondBreakfast,
            WednesdayLunch: itemSentToEdit[0].Wednesday.Lunch,
            WednesdayTea: itemSentToEdit[0].Wednesday.Tea,
            WednesdayDinner: itemSentToEdit[0].Wednesday.Dinner,
            ThursdayBreakfast: itemSentToEdit[0].Thursday.Breakfast,
            ThursdaySecondBreakfast: itemSentToEdit[0].Thursday.SecondBreakfast,
            ThursdayLunch: itemSentToEdit[0].Thursday.Lunch,
            ThursdayTea: itemSentToEdit[0].Thursday.Tea,
            ThursdayDinner: itemSentToEdit[0].Thursday.Dinner,
            FridayBreakfast: itemSentToEdit[0].Friday.Breakfast,
            FridaySecondBreakfast: itemSentToEdit[0].Friday.SecondBreakfast,
            FridayLunch: itemSentToEdit[0].Friday.Lunch,
            FridayTea: itemSentToEdit[0].Friday.Tea,
            FridayDinner: itemSentToEdit[0].Friday.Dinner,
            SaturdayBreakfast: itemSentToEdit[0].Saturday.Breakfast,
            SaturdaySecondBreakfast: itemSentToEdit[0].Saturday.SecondBreakfast,
            SaturdayLunch: itemSentToEdit[0].Saturday.Lunch,
            SaturdayTea: itemSentToEdit[0].Saturday.Tea,
            SaturdayDinner: itemSentToEdit[0].Saturday.Dinner,
            SundayBreakfast: itemSentToEdit[0].Sunday.Breakfast,
            SundaySecondBreakfast: itemSentToEdit[0].Sunday.SecondBreakfast,
            SundayLunch: itemSentToEdit[0].Sunday.Lunch,
            SundayTea: itemSentToEdit[0].Sunday.Tea,
            SundayDinner: itemSentToEdit[0].Sunday.Dinner
        }));
        localStorage.clear()
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
                                <h1>EDIT PLAN</h1>
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
                                            <td><MealSelect initialValue={form.MondayBreakfast} name="MondayBreakfast" onDone={handleChange}/></td>
                                            <td><MealSelect initialValue={form.MondaySecondBreakfast} name="MondaySecondBreakfast" onDone={handleChange}/></td>
                                            <td><MealSelect initialValue={form.MondayLunch} name="MondayLunch" onDone={handleChange}/></td>
                                            <td><MealSelect initialValue={form.MondayTea} name="MondayTea" onDone={handleChange}/></td>
                                            <td><MealSelect initialValue={form.MondayDinner} name="MondayDinner" onDone={handleChange}/></td>
                                        </tr>
                                        <tr>
                                            <th>TUESDAY</th>
                                            <td><MealSelect initialValue={form.TuesdayBreakfast} name="TuesdayBreakfast" onDone={handleChange}/></td>
                                            <td><MealSelect initialValue={form.TuesdaySecondBreakfast} name="TuesdaySecondBreakfast" onDone={handleChange}/></td>
                                            <td><MealSelect initialValue={form.TuesdayLunch} name="TuesdayLunch" onDone={handleChange}/></td>
                                            <td><MealSelect initialValue={form.TuesdayTea} name="TuesdayTea" onDone={handleChange}/></td>
                                            <td><MealSelect initialValue={form.TuesdayDinner} name="TuesdayDinner" onDone={handleChange}/></td>
                                        </tr>
                                        <tr>
                                            <th>WEDNESDAY</th>
                                            <td><MealSelect initialValue={form.WednesdayBreakfast} name="WednesdayBreakfast" onDone={handleChange}/></td>
                                            <td><MealSelect initialValue={form.WednesdaySecondBreakfast} name="WednesdaySecondBreakfast" onDone={handleChange}/></td>
                                            <td><MealSelect initialValue={form.WednesdayLunch} name="WednesdayLunch" onDone={handleChange}/></td>
                                            <td><MealSelect initialValue={form.WednesdayTea} name="WednesdayTea" onDone={handleChange}/></td>
                                            <td><MealSelect initialValue={form.WednesdayDinner} name="WednesdayDinner" onDone={handleChange}/></td>
                                        </tr>
                                        <tr>
                                            <th>THURSDAY</th>
                                            <td><MealSelect initialValue={form.ThursdayBreakfast} name="ThursdayBreakfast" onDone={handleChange}/></td>
                                            <td><MealSelect initialValue={form.ThursdaySecondBreakfast} name="ThursdaySecondBreakfast" onDone={handleChange}/></td>
                                            <td><MealSelect initialValue={form.ThursdayLunch} name="ThursdayLunch" onDone={handleChange}/></td>
                                            <td><MealSelect initialValue={form.ThursdayTea} name="ThursdayTea" onDone={handleChange}/></td>
                                            <td><MealSelect initialValue={form.ThursdayDinner} name="ThursdayDinner" onDone={handleChange}/></td>
                                        </tr>
                                        <tr>
                                            <th>FRIDAY</th>
                                            <td><MealSelect initialValue={form.FridayBreakfast} name="FridayBreakfast" onDone={handleChange}/></td>
                                            <td><MealSelect initialValue={form.FridaySecondBreakfast} name="FridaySecondBreakfast" onDone={handleChange}/></td>
                                            <td><MealSelect initialValue={form.FridayLunch} name="FridayLunch" onDone={handleChange}/></td>
                                            <td><MealSelect initialValue={form.FridayTea} name="FridayTea" onDone={handleChange}/></td>
                                            <td><MealSelect initialValue={form.FridayDinner} name="FridayDinner" onDone={handleChange}/></td>
                                        </tr>
                                        <tr>
                                            <th>SATURDAY</th>
                                            <td><MealSelect initialValue={form.SaturdayBreakfast} name="SaturdayBreakfast" onDone={handleChange}/></td>
                                            <td><MealSelect initialValue={form.SaturdaySecondBreakfast} name="SaturdaySecondBreakfast" onDone={handleChange}/></td>
                                            <td><MealSelect initialValue={form.SaturdayLunch} name="SaturdayLunch" onDone={handleChange}/></td>
                                            <td><MealSelect initialValue={form.SaturdayTea} name="SaturdayTea" onDone={handleChange}/></td>
                                            <td><MealSelect initialValue={form.SaturdayDinner} name="SaturdayDinner" onDone={handleChange}/></td>
                                        </tr>
                                        <tr>
                                            <th>SUNDAY</th>
                                            <td><MealSelect initialValue={form.SundayBreakfast} name="SundayBreakfast" onDone={handleChange}/></td>
                                            <td><MealSelect initialValue={form.SundaySecondBreakfast} name="SundaySecondBreakfast" onDone={handleChange}/></td>
                                            <td><MealSelect initialValue={form.SundayLunch} name="SundayLunch" onDone={handleChange}/></td>
                                            <td><MealSelect initialValue={form.SundayTea} name="SundayTea" onDone={handleChange}/></td>
                                            <td><MealSelect initialValue={form.SundayDinner} name="SundayDinner" onDone={handleChange}/></td>
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

export default EditPlan;