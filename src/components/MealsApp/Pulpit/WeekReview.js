import React, { useState, useEffect } from "react";

import Meal from "./Meal";
import "../../../scss/components/MealsApp/Pulpit/WeekReview.scss";

const WeekReview = () => {
    const [data, setData] = useState();
    const [weekNumber, setWeekNumber] = useState(1);
    
    useEffect(() => {
        fetch('http://localhost:3001/db')
            .then(res => {
                if (res.ok) {
                    return res
                } 
                throw new Error(res.status);
                // console.log(res);
            })
            .then(resp => resp.json())
            .then(res => setData(res))
            .catch(err => console.log(err));
    }, [weekNumber]);

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
                <tbody>
                    <tr>
                        <td><Meal meal="Breakfast" weekNumber={weekNumber} day="Monday" data={data}/></td>
                        <td><Meal meal="Breakfast" weekNumber={weekNumber} day="Tuesday" data={data}/></td>
                        <td><Meal meal="Breakfast" weekNumber={weekNumber} day="Wednesday" data={data}/></td>
                        <td><Meal meal="Breakfast" weekNumber={weekNumber} day="Thursday" data={data}/></td>
                        <td><Meal meal="Breakfast" weekNumber={weekNumber} day="Friday" data={data}/></td>
                        <td><Meal meal="Breakfast" weekNumber={weekNumber} day="Saturday" data={data}/></td>
                        <td><Meal meal="Breakfast" weekNumber={weekNumber} day="Sunday" data={data}/></td>
                    </tr>
                    <tr>
                        <td><Meal meal="SecondBreakfast" weekNumber={weekNumber} day="Monday" data={data}/></td>
                        <td><Meal meal="SecondBreakfast" weekNumber={weekNumber} day="Tuesday" data={data}/></td>
                        <td><Meal meal="SecondBreakfast" weekNumber={weekNumber} day="Wednesday" data={data}/></td>
                        <td><Meal meal="SecondBreakfast" weekNumber={weekNumber} day="Thursday" data={data}/></td>
                        <td><Meal meal="SecondBreakfast" weekNumber={weekNumber} day="Friday" data={data}/></td>
                        <td><Meal meal="SecondBreakfast" weekNumber={weekNumber} day="Saturday" data={data}/></td>
                        <td><Meal meal="SecondBreakfast" weekNumber={weekNumber} day="Sunday" data={data}/></td>
                    </tr>
                    <tr>
                        <td><Meal meal="Lunch" weekNumber={weekNumber} day="Monday" data={data}/></td>
                        <td><Meal meal="Lunch" weekNumber={weekNumber} day="Tuesday" data={data}/></td>
                        <td><Meal meal="Lunch" weekNumber={weekNumber} day="Wednesday" data={data}/></td>
                        <td><Meal meal="Lunch" weekNumber={weekNumber} day="Thursday" data={data}/></td>
                        <td><Meal meal="Lunch" weekNumber={weekNumber} day="Friday" data={data}/></td>
                        <td><Meal meal="Lunch" weekNumber={weekNumber} day="Saturday" data={data}/></td>
                        <td><Meal meal="Lunch" weekNumber={weekNumber} day="Sunday" data={data}/></td>
                    </tr>
                    <tr>
                        <td><Meal meal="Tea" weekNumber={weekNumber} day="Monday" data={data}/></td>
                        <td><Meal meal="Tea" weekNumber={weekNumber} day="Tuesday" data={data}/></td>
                        <td><Meal meal="Tea" weekNumber={weekNumber} day="Wednesday" data={data}/></td>
                        <td><Meal meal="Tea" weekNumber={weekNumber} day="Thursday" data={data}/></td>
                        <td><Meal meal="Tea" weekNumber={weekNumber} day="Friday" data={data}/></td>
                        <td><Meal meal="Tea" weekNumber={weekNumber} day="Saturday" data={data}/></td>
                        <td><Meal meal="Tea" weekNumber={weekNumber} day="Sunday" data={data}/></td>
                    </tr>
                    <tr>
                        <td><Meal meal="Dinner" weekNumber={weekNumber} day="Monday" data={data}/></td>
                        <td><Meal meal="Dinner" weekNumber={weekNumber} day="Tuesday" data={data}/></td>
                        <td><Meal meal="Dinner" weekNumber={weekNumber} day="Wednesday" data={data}/></td>
                        <td><Meal meal="Dinner" weekNumber={weekNumber} day="Thursday" data={data}/></td>
                        <td><Meal meal="Dinner" weekNumber={weekNumber} day="Friday" data={data}/></td>
                        <td><Meal meal="Dinner" weekNumber={weekNumber} day="Saturday" data={data}/></td>
                        <td><Meal meal="Dinner" weekNumber={weekNumber} day="Sunday" data={data}/></td>
                    </tr>
                </tbody>
            </table>
            <div className="prev_next_box">
                <p onClick={() => (weekNumber>1) ? setWeekNumber(prev => prev - 1) : setWeekNumber(1)}><i className="fas fa-angle-double-left"></i>previous</p>
                <p onClick={() => setWeekNumber(prev => prev + 1)}>next<i className="fas fa-angle-double-right"></i></p>
            </div>
        </section>
    )
}

export default WeekReview;
