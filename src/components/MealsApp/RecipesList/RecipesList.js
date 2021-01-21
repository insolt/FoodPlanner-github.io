import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Header from "../Header";
import Nav from "../Nav";

import "../../../scss/components/MealsApp/RecipesList/RecipesList.scss";

const RecipesList = () => {
    const [data, setData] = useState();
    const [userName, setUserName] = useState();

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
    
    // useEffect(() => {
    //     setUserName(userName);
    // }, [userName]);

    console.log(data)
    const handleClickEdit = (e) => {
        console.log(e.target.dataset)
    }

    const handleClickRemove = (e) => {
        console.log(e.target.dataset)
    }
    
    return(
        <>
            <Header />
                <div className="app">
                    <Nav />
                    <section className="recipes_list">
                        <div className="recipes_list_view">
                            <div className="recipes_list_header">
                                <h1 className="recipes_list_title">RECIPES LIST</h1>
                                <Link to="/addrecipe"><i className="fas fa-plus-square"></i></Link>
                            </div>
                            <div className="recipes_list_body">
                                <table className="recipes_table">
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>NAME</th>
                                            <th>DESCRIPTION</th>
                                            <th>ACTION</th>
                                        </tr>
                                    </thead>
                                <tbody>
                                    {(!data) ? (
                                        <tr><td className="meal">Ladowanie danych</td></tr>
                                        ) : (
                                        data.Michal.recipes.map(el => (
                                            <tr key={el.id}>
                                                <td>{el.id}</td>
                                                <td>{el.recipeName}</td>
                                                <td>{el.recipeDescription}</td>
                                                <td><i className="fas fa-edit" data-element={el} onClick={handleClickEdit}></i><i className="far fa-trash-alt" data-element={el} onClick={handleClickRemove}></i></td>
                                            </tr>
                                    )))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default RecipesList;