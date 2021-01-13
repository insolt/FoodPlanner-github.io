import React, { useState } from "react";

import SubmitFormButton from "../../MealsApp/WelcomePage/SubmitFormButton"

import "../../../scss/components/LandingPage/Subscribe/Subscribe.scss";

const Subscribe = () => {
    const[emailAddress, setEmailAddress] = useState()

    const handleClick = (e) => {
        e.preventDefault();
        console.log(emailAddress);
    }

    return(
        <section className="form">
            <div className="container">
                <form className="subscribe">
                    <div className="form_input">
                        <label>Newsletter subscribtion
                            <input type="email" name="email" value={emailAddress} placeholder="your@email" onChange={(e) => setEmailAddress(e.target.value)}/>
                        </label>
                        <SubmitFormButton onDone={handleClick} width="150px" height="55px" text="Subscribe" />
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Subscribe;