import React, { useState, useEffect, useContext } from "react";
import { UserNameContext } from "../WelcomePage/UserNameContext";

import AddButton from "./AddButton";
import InfoBox from "./InfoBox";
import WeekReview from "./WeekReview";

import "../../../scss/components/MealsApp/Pulpit/Pulpit.scss";

const MY_URL = "https://cors-anywhere.herokuapp.com/https://firebasestorage.googleapis.com/v0/b/food-planner-7754f.appspot.com/o/emails.json?alt=media&token=77074169-91f9-4b0d-abc6-6b55d3ba9aee";
const MY_DB = "http://localhost:3005";

const Pulpit = () => {
    const { userName } = useContext(UserNameContext);
    const [data, setData] = useState();
    const [recipesAmount, setRecipesAmount] = useState(0);
    const [plansAmount, setPlansAmount] = useState(0);

    useEffect(() => {
        fetch(`${MY_URL}/users`)
            .then(resp => resp.json())
            .then(res => setData(res))
            .catch(err => console.log(err));    
        
        if (data) {
            let recipes = data.filter(el => el.name === `${userName}`)[0];
            setRecipesAmount(recipes.recipes.length);
            setPlansAmount(recipes.plans.length);
        }
    }, []);
   
    return(
        <section className="pulpit">
            <div className="main_view">
                <div className="top_row">
                    <div className="add_buttons">
                        <AddButton text="recipe" to="/addrecipe" h1title="NEW RECIPE" edit="" />
                        <AddButton text="plan" to="/addplan" h1title="NEW PLAN" edit="" />
                        <AddButton text="shopping" to="/shoppinglist" />
                    </div>
                    <div className="info_boxes">
                        <InfoBox color="var(--info)" top="0%" icon="fas fa-info-circle" text={`You saved ${recipesAmount} recipes and ${plansAmount} plans, well done!`} />
                        <InfoBox color="var(--button)" top="37%" icon="fas fa-exclamation-circle" text="Do not forget to add a plan!" />
                        <InfoBox color="var(--success)" top="74%" icon="fas fa-check-circle" text="Great you are here! Enjoy food planning!"/>
                    </div>
                </div>
                {
                (!userName) ? (<p>Ladowanie danych</p>) : (<WeekReview />)
                }
            </div>
        </section>
    )
}

export default Pulpit;