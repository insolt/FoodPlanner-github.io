import React, { useState } from "react";

import Header from "../Header";
import Nav from "../Nav";
import SubmitFormButton from "../WelcomePage/SubmitFormButton";
import Pulpit from "../Pulpit";

import "../../../scss/components/MealsApp/AddRecipe/AddRecipe.scss";


const AddRecipe = () => {
    const [form, setForm] = useState({
        recipeName: '',
        recipeDescription: ''
    })

    const [instruction, setInstruction] = useState('');
    const [ingredient, setIngredient] = useState('');
    const [arrOfInstructions, setArrOfInstructions] = useState([]);
    const [arrOfIngredients, setArrOfIngredients] = useState([]);
    
    const handleAdd = ({ target: { dataset }}) => {
        if (dataset.name==='instruction') { 
            setArrOfInstructions(prev => ([
                ...prev,
                instruction
            ]));
            setInstruction('')
        } else {
            setArrOfIngredients(prev => ([
                ...prev,
                ingredient
            ]));
            setIngredient('')
        }
    }
    
    const handleEditInst = ({ target: { id, dataset }}) => {
        setArrOfInstructions((prev) => (prev.filter((el, i) => i != id)));
        setInstruction(dataset.value);
    }

    const handleRemoveInst = ({ target: { id }}) => {
        setArrOfInstructions((prev) => (prev.filter((el, i) => i != id)))    
    }

    const handleEditIngr = ({ target: { id, dataset }}) => {
        setArrOfIngredients((prev) => (prev.filter((el, i) => i != id)))
        setIngredient(dataset.value);
    }

    const handleRemoveIngr = ({ target: { id }}) => {
        setArrOfIngredients((prev) => (prev.filter((el, i) => i != id)))
    }
    
    const handleChange = ({ target: { name, value }}) => {
        setForm(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const newRecipe = {
            recipeName: form.recipeName,
            recipeDescription: form.recipeDescription,
            recipeInstructionsList: [
                arrOfInstructions.map((el, i) => ({id: i, instruction: el}))
            ],
            recipeIngredientsList: [
                arrOfIngredients.map((el, i) => ({id: i, ingredient: el}))
            ],
        }
     
        // fetch

        
    }

    return(
        <>
        <Header />
            <div className="app">
                <Nav />
                {/* {(handleSubmit) ? <Pulpit /> : ( */}
                <section className="add_new_recipe">
                    <div className="add_new_recipe">
                        <form className="add_new_recipe_form">
                            <div className="new_recipe_header">
                                <h1>NEW RECIPE</h1>
                                <SubmitFormButton onDone={handleSubmit} width="150px" height="35px" text="Save & close" />
                            </div>
                            <div className="description">
                                <div className="input_text_area">
                                    <label>Recipe name</label><input type="text" name="recipeName" value={form.recipeName} onChange={handleChange}/>
                                </div>
                                <div className="input_text_area">
                                    <label>Recipe description</label><textarea name="recipeDesc" value={form.recipeDesc} onChange={handleChange}></textarea>
                                </div>
                            </div>
                            <div className="method">
                                <div className="instructions">
                                    <h2>INSTRUCTIONS</h2>
                                    <div>
                                        <textarea name="instruction" value={instruction} onChange={e => setInstruction(e.target.value)}></textarea>
                                        <i data-name="instruction" className="add_instruction fas fa-plus-square" onClick={handleAdd}></i>
                                    </div>
                                    <div className="inst_list">
                                        <ul className="inst_list">
                                            {arrOfInstructions.map((el, i) => (
                                                <li key={i}>{el}<i data-value={el} id={+i} className="fas fa-edit" onClick={handleEditInst}></i><i id={+i} className="far fa-trash-alt" onClick={handleRemoveInst}></i></li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                                <div className="ingredients">
                                    <h2>INGREDIENTS</h2>
                                    <div>
                                        <input type="text" name="ingredient" value={ingredient} onChange={e => setIngredient(e.target.value)}/>
                                        <i data-name="ingredient" className="add_ingredient fas fa-plus-square" onClick={handleAdd}></i>
                                    </div>
                                    <div className="ingr_list">
                                        <ul className="ingr_list">
                                        {arrOfIngredients.map((el, i) => (
                                                <li key={i}>{el}<i data-value={el} id={+i} className="fas fa-edit" onClick={handleEditIngr}></i> <i id={+i} className="far fa-trash-alt" onClick={handleRemoveIngr}></i></li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </section>
                {/* )} */}
            </div>
        </>
    )
}

export default AddRecipe;