import React, { useState, useEffect } from "react";

import Header from "../Header";
import Nav from "../Nav";
import SubmitFormButton from "../WelcomePage/SubmitFormButton";
import MealSelect from "../WelcomePage/MealSelect";

import "../../../scss/components/MealsApp/AddPlan/AddPlan.scss";

const AddPlan = () => {
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
    })

    useEffect(() => {
        fetch('http://localhost:3001/db')
            .then(resp => resp.json())
            .then(res => setData(res))
            .catch(err => console.log(err));
    }, []);

    const handleChange = ({ target: { name, value }}) => {
        setForm(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const newPlan = {
            planName: form.planName,
            planDescription: form.planDescription,
            weekNumber: form.weekNumber,
            Monday: {
                Breakfast: form.MondayBreakfast,
                SecondBreakfast: form.MondaySecondBreakfast,
                Lunch: form.MondayLunch,
                Tea: form.MondayTea,
                Dinner: form.MondayDinner
            },
            Tuesday: {
                Breakfast: form.TuesdayBreakfast,
                SecondBreakfast: form.TuesdaySecondBreakfast,
                Lunch: form.TuesdayLunch,
                Tea: form.TuesdayTea,
                Dinner: form.TuesdayDinner
            },
            Wednesday: {
                Breakfast: form.WednesdayBreakfast,
                SecondBreakfast: form.WednesdaySecondBreakfast,
                Lunch: form.WednesdayLunch,
                Tea: form.WednesdayTea,
                Dinner: form.WednesdayDinner
            },
            Thursday: {
                Breakfast: form.ThursdayBreakfast,
                SecondBreakfast: form.ThursdaySecondBreakfast,
                Lunch: form.ThursdayLunch,
                Tea: form.ThursdayTea,
                Dinner: form.ThursdayDinner
            },
            Friday: {
                Breakfast: form.FridayBreakfast,
                SecondBreakfast: form.FridaySecondBreakfast,
                Lunch: form.FridayLunch,
                Tea: form.FridayTea,
                Dinner: form.FridayDinner
            },
            Saturday: {
                Breakfast: form.SaturdayBreakfast,
                SecondBreakfast: form.SaturdaySecondBreakfast,
                Lunch: form.SaturdayLunch,
                Tea: form.SaturdayTea,
                Dinner: form.SaturdayDinner
            },
            Sunday: {
                Breakfast: form.SundayBreakfast,
                SecondBreakfast: form.SundaySecondBreakfast,
                Lunch: form.SundayLunch,
                Tea: form.SundayTea,
                Dinner: form.SundayDinner
            }
        }
     
        // fetch

        console.log(newPlan)
    }

    return(
        <>
        <Header />
            <div className="app">
                <Nav />
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
                                            <td><MealSelect options={data} name="MondayBreakfast" onDone={handleChange}/></td>
                                            <td><MealSelect options={data} name="MondaySecondBreakfast" onDone={handleChange}/></td>
                                            <td><MealSelect options={data} name="MondayLunch" onDone={handleChange}/></td>
                                            <td><MealSelect options={data} name="MondayTea" onDone={handleChange}/></td>
                                            <td><MealSelect options={data} name="MondayDinner" onDone={handleChange}/></td>
                                        </tr>
                                        <tr>
                                            <th>TUESDAY</th>
                                            <td><MealSelect options={data} name="TuesdayBreakfast" onDone={handleChange}/></td>
                                            <td><MealSelect options={data} name="TuesdaySecondBreakfast" onDone={handleChange}/></td>
                                            <td><MealSelect options={data} name="TuesdayLunch" onDone={handleChange}/></td>
                                            <td><MealSelect options={data} name="TuesdayTea" onDone={handleChange}/></td>
                                            <td><MealSelect options={data} name="TuesdayDinner" onDone={handleChange}/></td>
                                        </tr>
                                        <tr>
                                            <th>WEDNESDAY</th>
                                            <td><MealSelect options={data} name="WednesdayBreakfast" onDone={handleChange}/></td>
                                            <td><MealSelect options={data} name="WednesdaySecondBreakfast" onDone={handleChange}/></td>
                                            <td><MealSelect options={data} name="WednesdayLunch" onDone={handleChange}/></td>
                                            <td><MealSelect options={data} name="WednesdayTea" onDone={handleChange}/></td>
                                            <td><MealSelect options={data} name="WednesdayDinner" onDone={handleChange}/></td>
                                        </tr>
                                        <tr>
                                            <th>THURSDAY</th>
                                            <td><MealSelect options={data} name="ThursdayBreakfast" onDone={handleChange}/></td>
                                            <td><MealSelect options={data} name="ThursdaySecondBreakfast" onDone={handleChange}/></td>
                                            <td><MealSelect options={data} name="ThursdayLunch" onDone={handleChange}/></td>
                                            <td><MealSelect options={data} name="ThursdayTea" onDone={handleChange}/></td>
                                            <td><MealSelect options={data} name="ThursdayDinner" onDone={handleChange}/></td>
                                        </tr>
                                        <tr>
                                            <th>FRIDAY</th>
                                            <td><MealSelect options={data} name="FridayBreakfast" onDone={handleChange}/></td>
                                            <td><MealSelect options={data} name="FridaySecondBreakfast" onDone={handleChange}/></td>
                                            <td><MealSelect options={data} name="FridayLunch" onDone={handleChange}/></td>
                                            <td><MealSelect options={data} name="FridayTea" onDone={handleChange}/></td>
                                            <td><MealSelect options={data} name="FridayDinner" onDone={handleChange}/></td>
                                        </tr>
                                        <tr>
                                            <th>SATURDAY</th>
                                            <td><MealSelect options={data} name="SaturdayBreakfast" onDone={handleChange}/></td>
                                            <td><MealSelect options={data} name="SaturdaySecondBreakfast" onDone={handleChange}/></td>
                                            <td><MealSelect options={data} name="SaturdayLunch" onDone={handleChange}/></td>
                                            <td><MealSelect options={data} name="SaturdayTea" onDone={handleChange}/></td>
                                            <td><MealSelect options={data} name="SaturdayDinner" onDone={handleChange}/></td>
                                        </tr>
                                        <tr>
                                            <th>SUNDAY</th>
                                            <td><MealSelect options={data} name="SundayBreakfast" onDone={handleChange}/></td>
                                            <td><MealSelect options={data} name="SundaySecondBreakfast" onDone={handleChange}/></td>
                                            <td><MealSelect options={data} name="SundayLunch" onDone={handleChange}/></td>
                                            <td><MealSelect options={data} name="SundayTea" onDone={handleChange}/></td>
                                            <td><MealSelect options={data} name="SundayDinner" onDone={handleChange}/></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </form>
                    </div>
                </section>
            </div>
        </>
    )
}

export default AddPlan;