import React, { useState, useEffect, useContext } from "react";
import { UserNameContext } from "../WelcomePage/UserNameContext";

import Meal from "./Meal";
import "../../../scss/components/MealsApp/Pulpit/WeekReview.scss";

const MY_URL = "https://cors-anywhere.herokuapp.com/https://firebasestorage.googleapis.com/v0/b/food-planner-7754f.appspot.com/o/emails.json?alt=media&token=77074169-91f9-4b0d-abc6-6b55d3ba9aee";
const MY_DB = "http://localhost:3005";

const WeekReview = () => {
    const [weekNumber, setWeekNumber] = useState(1);
    const [data, setData] = useState();
    const { userName } = useContext(UserNameContext);

    useEffect(() => {
        fetch(`${MY_URL}/users`)
            .then(resp => resp.json())
            .then(res => setData(res))
            .catch(err => console.log(err));  
    }, []);
    
    let mealsObjToArr = [];
    let weekFilteredMealsArr = [];
    let filteredMealsArray = [];
    let readyMealsArray = [];

    if ((userName) && (data)) {
        mealsObjToArr.push(data.filter(el => el.name == `${userName}`));
        weekFilteredMealsArr = mealsObjToArr[0][0].plans;       
        filteredMealsArray =  weekFilteredMealsArr.filter(el => el.weekNumber == `${weekNumber}`);
        readyMealsArray = filteredMealsArray[0];
    }

    return (
        <section className="week_review">
            <h3>Your plan for week number: <span className="week_number">{weekNumber}</span></h3>
            <table>
                <thead>
                    <tr>
                        <th>Monday</th>
                        <th>Tuesday</th>
                        <th>Wednesday</th>
                        <th>Thursday</th>
                        <th>Friday</th>
                        <th>Saturday</th>
                        <th>Sunday</th>
                    </tr>
                </thead>
                {(!data) ? (<tbody>Ladowanie danych</tbody>) : (
                <tbody>  
                    <tr>
                        <td><Meal weekMenu={readyMealsArray.Monday.Breakfast} /></td>
                        <td><Meal weekMenu={readyMealsArray.Tuesday.Breakfast} /></td>
                        <td><Meal weekMenu={readyMealsArray.Wednesday.Breakfast} /></td>
                        <td><Meal weekMenu={readyMealsArray.Thursday.Breakfast} /></td>
                        <td><Meal weekMenu={readyMealsArray.Friday.Breakfast} /></td>
                        <td><Meal weekMenu={readyMealsArray.Saturday.Breakfast} /></td>
                        <td><Meal weekMenu={readyMealsArray.Sunday.Breakfast} /></td>
                    </tr>
                    <tr>
                        <td><Meal weekMenu={readyMealsArray.Monday.SecondBreakfast} /></td>
                        <td><Meal weekMenu={readyMealsArray.Tuesday.SecondBreakfast} /></td>
                        <td><Meal weekMenu={readyMealsArray.Wednesday.SecondBreakfast} /></td>
                        <td><Meal weekMenu={readyMealsArray.Thursday.SecondBreakfast} /></td>
                        <td><Meal weekMenu={readyMealsArray.Friday.SecondBreakfast} /></td>
                        <td><Meal weekMenu={readyMealsArray.Saturday.SecondBreakfast} /></td>
                        <td><Meal weekMenu={readyMealsArray.Sunday.SecondBreakfast} /></td>
                    </tr>
                    <tr>
                        <td><Meal weekMenu={readyMealsArray.Monday.Lunch} /></td>
                        <td><Meal weekMenu={readyMealsArray.Tuesday.Lunch} /></td>
                        <td><Meal weekMenu={readyMealsArray.Wednesday.Lunch} /></td>
                        <td><Meal weekMenu={readyMealsArray.Thursday.Lunch} /></td>
                        <td><Meal weekMenu={readyMealsArray.Friday.Lunch} /></td>
                        <td><Meal weekMenu={readyMealsArray.Saturday.Lunch} /></td>
                        <td><Meal weekMenu={readyMealsArray.Sunday.Lunch} /></td>
                    </tr>
                    <tr>
                        <td><Meal weekMenu={readyMealsArray.Monday.Tea} /></td>
                        <td><Meal weekMenu={readyMealsArray.Tuesday.Tea} /></td>
                        <td><Meal weekMenu={readyMealsArray.Wednesday.Tea} /></td>
                        <td><Meal weekMenu={readyMealsArray.Thursday.Tea} /></td>
                        <td><Meal weekMenu={readyMealsArray.Friday.Tea} /></td>
                        <td><Meal weekMenu={readyMealsArray.Saturday.Tea} /></td>
                        <td><Meal weekMenu={readyMealsArray.Sunday.Tea} /></td>
                    </tr>
                    <tr>
                        <td><Meal weekMenu={readyMealsArray.Monday.Dinner} /></td>
                        <td><Meal weekMenu={readyMealsArray.Tuesday.Dinner} /></td>
                        <td><Meal weekMenu={readyMealsArray.Wednesday.Dinner} /></td>
                        <td><Meal weekMenu={readyMealsArray.Thursday.Dinner} /></td>
                        <td><Meal weekMenu={readyMealsArray.Friday.Dinner} /></td>
                        <td><Meal weekMenu={readyMealsArray.Saturday.Dinner} /></td>
                        <td><Meal weekMenu={readyMealsArray.Sunday.Dinner} /></td>
                    </tr>
                </tbody>
                )}
            </table>
            <div className="prev_next_box">
                <p onClick={() => (weekNumber>1) ? setWeekNumber(prev => prev - 1) : setWeekNumber(1)}><i className="fas fa-angle-double-left"></i>previous</p>
                <p onClick={() => setWeekNumber(prev => prev + 1)}>next<i className="fas fa-angle-double-right"></i></p>
            </div>
        </section>
    )
}

export default WeekReview;