import React, { useState, useEffect, useContext } from "react";
import { UserNameContext } from "./WelcomePage/UserNameContext";

import Header from "./Header";
import Nav from "./Nav";
import WelcomePage from "./WelcomePage";
import Pulpit from "./Pulpit";

import "../../scss/components/MealsApp/MealsApp.scss";

const MY_URL = "https://cors-anywhere.herokuapp.com/https://firebasestorage.googleapis.com/v0/b/food-planner-7754f.appspot.com/o/emails.json?alt=media&token=77074169-91f9-4b0d-abc6-6b55d3ba9aee";
const MY_DB = "http://localhost:3005";

const MealsApp = () => {
    const [data, setData] = useState();
    const { userName } = useContext(UserNameContext);
    
    useEffect(() => {
        fetch(`${MY_URL}/users`)
            .then(resp => resp.json())
            .then(res => setData(res))
            .catch(err => console.log(err));
    }, []);

    return(
        <>
            <Header />
                <div className="app">
                    <Nav />
                    {(!data) || (!userName) ? <WelcomePage /> : <Pulpit />}
                </div>
        </>
    )
}

export default MealsApp;