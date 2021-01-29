import React, { useState, useEffect, useContext } from "react";
import {UserNameContext} from "./UserNameContext";

import SubmitFormButton from "./SubmitFormButton";

import "../../../scss/components/MealsApp/WelcomePage/WelcomePage.scss";

const MY_URL = "https://cors-anywhere.herokuapp.com/https://firebasestorage.googleapis.com/v0/b/food-planner-7754f.appspot.com/o/emails.json?alt=media&token=77074169-91f9-4b0d-abc6-6b55d3ba9aee";
const MY_DB = "http://localhost:3005";

const WelcomePage = () => {
    const [inputName, setInputName] = useState('');
    const { userName, setUserName } = useContext(UserNameContext);
    const [data, setData] = useState(null);
  

    useEffect(() => {
        fetch(`${MY_URL}/users`)
            .then(resp => resp.json())
            .then(res => setData(res))
            .catch(err => console.log(err));
    }, []);

    const handleClick = () => {
        if (data.some(el => el.name === `${inputName}`)) {
            setUserName(inputName);
        } else {
            setUserName(inputName);
            const newUser = {    
                "name": `${inputName}`,
                "recipes": [{
                    "id": "",
                    "recipeName": "",
                    "recipeDescription": "",
                    "ingredients":[
                        {
                            "id": "",
                            "ingredient": ""
                        }
                    ],
                    "instructions": [
                        {
                        "id": "",
                        "instruction": ""
                        }
                    ]
                }],
                "plans": [{
                    "id": "",
                    "planName": "",                          
                    "planDescription": "",
                    "weekNumber": "1",
                    "Monday": {
                        "Breakfast": "",
                        "SecondBreakfast": "",
                        "Lunch": "",
                        "Tea": "",
                        "Dinner": ""
                    },
                    "Tuesday": {
                        "Breakfast": "",
                        "SecondBreakfast": "",
                        "Lunch": "",
                        "Tea": "",
                        "Dinner": ""
                    },
                        "Wednesday": {
                        "Breakfast": "",
                        "SecondBreakfast": "",
                        "Lunch": "",
                        "Tea": "",
                        "Dinner": ""
                    },
                        "Thursday": {
                        "Breakfast": "",
                        "SecondBreakfast": "",
                        "Lunch": "",
                        "Tea": "",
                        "Dinner": ""
                    },
                        "Friday": {
                        "Breakfast": "",
                        "SecondBreakfast": "",
                        "Lunch": "",
                        "Tea": "",
                        "Dinner": ""
                    },
                        "Saturday": {
                        "Breakfast": "",
                        "SecondBreakfast": "",
                        "Lunch": "",
                        "Tea": "",
                        "Dinner": ""
                    },
                        "Sunday": {
                        "Breakfast": "",
                        "SecondBreakfast": "",
                        "Lunch": "",
                        "Tea": "",
                        "Dinner": ""
                    }
                }]
            }

            fetch(`${MY_URL}/users`, {
                method: 'POST',
                body: JSON.stringify(newUser),
                headers: {
                  'Content-Type': 'application/json'
                }
              })
                .then(resp => resp.json())
                .then(res => console.log(res, 'Wyslane'))
                .catch(error => console.log(error));
        
        }
    }

    return(
        <section className="app_content">
            <div className="welcome_board">
                <div>
                    <h1>Hi,</h1>
                    <h2>Let us know your name <br /> and we will set the App up for you</h2>
                    <input name="name" value={inputName} placeholder="your name" onChange={e => setInputName(e.target.value)}/>
                    <SubmitFormButton onDone={handleClick} width="150px" height="40px" text="Go!" />
                </div>
            </div>
        </section>
    )
}

export default WelcomePage;