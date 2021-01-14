import React, { useState } from "react";

import SubmitFormButton from "./SubmitFormButton"

import "../../../scss/components/MealsApp/WelcomePage/WelcomePage.scss"
import { Route, Switch } from "react-router-dom";

const WelcomePage = () => {
    const [userName, setUserName] = useState('')

    const handleClick = (e) => {
        e.preventDefault()
        console.log(userName)
    }

    return(
        <section className="app_content">
            <div className="welcome_board">
                <div>
                    <h1>Hi,</h1>
                    <h2>Let us know your name <br /> and we will set the App up for you</h2>
                    <input name="name" value={userName} placeholder="your name" onChange={(e) => setUserName(e.target.value)}/>
                    <Switch>
                        <Route exact path="/mealsapp/planner" component={WelcomePage} />
                    </Switch>
                    <SubmitFormButton onDone={handleClick} width="150px" height="40px" text="Go!" />
                </div>
            </div>
        </section>
    )
}

export default WelcomePage;