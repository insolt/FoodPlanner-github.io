import React, { useState, useEffect } from "react"
import { NavLink } from "react-router-dom"
 


const Navigation = () => {
    const [menuItems, setMenuItems] = useState([])

    useEffect(() => {
        fetch("http://localhost:3005/menu")
            .then(resp => resp.json())
            .then(res => setMenuItems(res))
            .catch(err => console.log(err));
    }, [])
    console.log(menuItems)
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