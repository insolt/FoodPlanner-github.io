import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { UserNameContext } from "../WelcomePage/UserNameContext";

import Header from "../Header";
import Nav from "../Nav";

import "../../../scss/components/MealsApp/RecipesList/RecipesList.scss";

const MY_URL = "https://cors-anywhere.herokuapp.com/https://firebasestorage.googleapis.com/v0/b/food-planner-7754f.appspot.com/o/emails.json?alt=media&token=77074169-91f9-4b0d-abc6-6b55d3ba9aee";
const MY_DB = "http://localhost:3005";

const RecipesList = () => {
    const { userName } = useContext(UserNameContext);
    const [data, setData] = useState();

    useEffect(() => {
        fetch(`${MY_URL}/users`)
            .then(resp => resp.json())
            .then(res => setData(res))
            .catch(err => console.log(err));
    }, [data]);

    let userID;
    let mealsObjToArr = [];
    let weekFilteredMealsRecipes = [];
    let weekFilteredMealsPlans = [];

    if ((data) && (userName)) {
        mealsObjToArr.push(data.filter(el => el.name == `${userName}`));
        userID = mealsObjToArr[0][0].id;
        weekFilteredMealsRecipes = mealsObjToArr[0][0].recipes;
        weekFilteredMealsPlans = mealsObjToArr[0][0].plans;
    }
    
    const handleClickEdit = (e) => {
        localStorage.setItem('editDescription', JSON.stringify(weekFilteredMealsRecipes.filter(el => el.recipeDescription == e.target.dataset.name)));
        localStorage.setItem('editData', JSON.stringify(data));
    }

    const handleClickRemove = (e) => {
        let reducedWeekRecipes = weekFilteredMealsRecipes.filter(el => el.recipeDescription != e.target.dataset.name);
        weekFilteredMealsRecipes = reducedWeekRecipes;

        const filteredUserRecipe = {
            "name": `${userName}`,
            "recipes": weekFilteredMealsRecipes,
            "plans": weekFilteredMealsPlans
        };
        
        fetch(`${MY_URL}/users/${userID}`, {
            method: 'PUT',
            body: JSON.stringify(filteredUserRecipe),
            headers: {
              'Content-Type': 'application/json'
            }
        })
            .then(resp => resp.json())
            .then(res => console.log(res))
            .catch(error => console.log(error));
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
                                <Link to="/addrecipe" ><i className="fas fa-plus-square"></i></Link>
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
                                    {(!data) || (!userName) ? (
                                        <tr><td className="meal">Ladowanie danych</td></tr>
                                        ) : (
                                            weekFilteredMealsRecipes.map(el => (
                                            <tr key={el.id}>
                                                <td>{el.id}</td>
                                                <td>{el.recipeName}</td>
                                                <td>{el.recipeDescription}</td>
                                                <td><Link to="/editrecipe"><i className="fas fa-edit" data-name={el.recipeDescription} onClick={handleClickEdit}></i></Link><i data-name={el.recipeDescription} className="far fa-trash-alt" data-element={el} onClick={handleClickRemove}></i></td>
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