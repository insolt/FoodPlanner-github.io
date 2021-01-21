import React, { useState, useEffect } from "react";

import SubmitFormButton from "./SubmitFormButton"

import Pulpit from "../Pulpit/Pulpit"
// import RecipesList from "../RecipesList/RecipesList";
// import PlansList from "../PlansList/PlansList";
// import ShoppingList from "../ShoppingList/ShoppingList";

import "../../../scss/components/MealsApp/WelcomePage/WelcomePage.scss"
// import { Route, Switch } from "react-router-dom";

const WelcomePage = ({ onDone }) => {
    const [userName, setUserName] = useState('')
    const [data, setData] = useState();

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
    }, [userName]);

    
    
    const handleClick = (e) => {
        e.preventDefault();
        console.log(userName)
        onDone(userName)
        // setUserName(document.forms[0].[0].value)
       
        // setUserName(e.target.value)
        // console.log(data.[`${userName}`], userName)
        // if (!data) {
        //     console.log('Ladowanie danych')
        // } else if (!data.[`${userName}`]) {
        //     setUserName(data.[`${userName}`])
        // } 
    }

    return(
        // (!data) && (!data.[`${userName}`]) ? (
        <section className="app_content">
            <div className="welcome_board">
            
                <form>
                    <h1>Hi,</h1>
                    <h2>Let us know your name <br /> and we will set the App up for you</h2>
                    <input name="name" value={userName} placeholder="your name" onChange={(e) => setUserName(e.target.value)}/>
                    <SubmitFormButton onDone={handleClick} width="150px" height="40px" text="Go!" />
                </form>
               
            </div>
        </section>
        // ) : (
        //     <Pulpit />
        // )
    )
}

export default WelcomePage;