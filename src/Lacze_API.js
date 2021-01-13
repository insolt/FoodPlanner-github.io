import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
 
const MY_URL = "https://firebasestorage.googleapis.com/v0/b/food-planner-7754f.appspot.com/o/db.json?alt=media&token=bfa3b245-7a7c-4aaa-a038-f2d77e1387d4"

const Navigation = () => {
    const [menuItems, setMenuItems] = useState([])

    useEffect(() => {
        fetch("https://cors-anywhere.herokuapp.com/" + MY_URL)
            .then(resp => {
                if (resp.ok) {
                    return resp.json()
                }
                throw new Error('Blad przy probie pobrania danych')})
            .then(res => (res.menu))
            .then(re => setMenuItems(re))
            .catch(err => console.log(err));
    }, [])
    
    return(
        <ul>
            {menuItems.map((el) => (
                <li key={el.id}>
                    <NavLink to={el.link} activeClassName="active">{el.name}</NavLink>
                </li>
            ))}
        </ul>
    )
    
}


export default Navigation