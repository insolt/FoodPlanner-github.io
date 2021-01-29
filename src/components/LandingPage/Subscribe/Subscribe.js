import React, { useState } from "react";

import SubmitFormButton from "../../MealsApp/WelcomePage/SubmitFormButton"

import "../../../scss/components/LandingPage/Subscribe/Subscribe.scss";

const MY_URL = "https://cors-anywhere.herokuapp.com/https://firebasestorage.googleapis.com/v0/b/food-planner-7754f.appspot.com/o/emails.json?alt=media&token=77074169-91f9-4b0d-abc6-6b55d3ba9aee";

const Subscribe = () => {
    const[emailAddress, setEmailAddress] = useState()
    const[subscribtionView, setSubscribtionView] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        
        fetch(`${MY_URL}/emails`, {
            method: 'POST',
            body: JSON.stringify(emailAddress),
            headers: {
              'Content-Type': 'application/json'
            }
          })
            .then(resp => resp.json())
            .then(res => console.log(res))
            .catch(error => console.log(error));  

        setSubscribtionView(true);
    }

    return(
        <section className="form">
            <div className="container">
                <form className="subscribe">
                    {
                        (!subscribtionView) ? (
                        <div className="form_input">
                            <label>Newsletter subscribtion
                                <input type="email" name="email" value={emailAddress} placeholder="your@email" onChange={(e) => setEmailAddress(e.target.value)}/>
                            </label>
                            <SubmitFormButton onDone={handleSubmit} width="150px" height="55px" text="Subscribe" />
                        </div>
                        ) : (
                        <div className="form_input">
                            <label>Check your email box for great news!</label>
                        </div>
                        )
                    }
                </form>
            </div>
        </section>
    )
}

export default Subscribe;