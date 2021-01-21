import React, { useState, useEffect } from "react";

import Header from "./Header";
import Nav from "./Nav";
import WelcomePage from "./WelcomePage";
import Pulpit from "./Pulpit";

import "../../scss/components/MealsApp/MealsApp.scss";

const MealsApp = () => {
    const [data, setData] = useState();
    const [userName, setUserName] = useState('')

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
    }, []);

    console.log(userName)

    let mainScreen;
    if (!userName) {
        mainScreen = <WelcomePage onDone={setUserName}/>
    } else {
        mainScreen = <Pulpit />
    }
    // const handleClick = (e) => {
    //     setUserName(e.target.value)
        // console.log(data)
        
        // if (!data) {
        //     console.log('Ladowanie danych')
        // } else if (!data.[`${userName}`]) {
        //     setUserName(data.[`${userName}`])
        // } 
    // }
    // setUserName(data.[`${userName}`])
    // userName={data.[`${userName}`]}
    // (!data.[`${userName}`]) ? (
    return(
        <>
        {/* (!data) ? ( */}
            <Header userName={userName}/>
                <div className="app">
                    <Nav />
                    {mainScreen}
                </div>
     
        </>
    )
}

export default MealsApp;