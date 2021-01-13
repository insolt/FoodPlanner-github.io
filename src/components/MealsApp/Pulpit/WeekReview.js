import React, { useState } from "react";

import "../../../scss/components/MealsApp/Pulpit/WeekReview.scss";

const WeekReview = () => {
    const [weekNumber, setWeekNumber] = useState(1);

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
                        <td>breakfast</td>
                        <td>breakfast</td>
                        <td>breakfast</td>
                        <td>breakfast</td>
                        <td>breakfast</td>
                        <td>breakfast</td>
                        <td>breakfast</td>
                    </tr>
                    <tr>
                        <td>2nd breakfast</td>
                        <td>2nd breakfast</td>
                        <td>2nd breakfast</td>
                        <td>2nd breakfast</td>
                        <td>2nd breakfast</td>
                        <td>2nd breakfast</td>
                        <td>2nd breakfast</td>
                    </tr>
                    <tr>
                        <td>lunch</td>
                        <td>lunch</td>
                        <td>lunch</td>
                        <td>lunch</td>
                        <td>lunch</td>
                        <td>lunch</td>
                        <td>lunch</td>
                    </tr>
                    <tr>
                        <td>tea</td>
                        <td>tea</td>
                        <td>tea</td>
                        <td>tea</td>
                        <td>tea</td>
                        <td>tea</td>
                        <td>tea</td>
                    </tr>
                    <tr>
                        <td>dinner</td>
                        <td>dinner</td>
                        <td>dinner</td>
                        <td>dinner</td>
                        <td>dinner</td>
                        <td>dinner</td>
                        <td>dinner</td>
                    </tr>
                </tbody>
            </table>
            <div className="prev_next_box">
                <p onClick={() => setWeekNumber(prev => prev - 1)}><i className="fas fa-angle-double-left"></i>previous</p>
                <p onClick={() => setWeekNumber(prev => prev + 1)}>next<i className="fas fa-angle-double-right"></i></p>
            </div>
        </section>
    )
}

export default WeekReview;
