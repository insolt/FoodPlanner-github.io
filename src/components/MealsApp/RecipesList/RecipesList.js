import React from "react";

import "../../../scss/components/MealsApp/RecipesList/RecipesList.scss";

const RecipesList = () => {
    const handleClickAdd = () => {
        console.log("dodaje")
    }

    const handleClickEdit = () => {
        console.log("edytuje")
    }

    const handleClickRemove = () => {
        console.log("usuwam")
    }
    
    return(
        <section className="recipes_list">
            <div className="recipes_list_view">
                <div className="recipes_list_header">
                    <h1 className="recipes_list_title">RECIPES LIST</h1>
                    <p><i className="fas fa-plus-square" onClick={handleClickAdd}></i></p>
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
                            <tr>
                                <td>1</td>
                                <td>Zapiekanak z ziemniakami</td>
                                <td>Mamusina zapiekanka najlepsza pod sloncem mozna ja podawac na zimno i na cieplo Mamusina zapiekanka najlepsza pod sloncem mozna ja podawac na zimno i na cieplo Mamusina zapiekanka najlepsza pod sloncem mozna ja podawac na zimno i na cieplo Mamusina zapiekanka najlepsza pod sloncem mozna ja podawac na zimno i na cieplo</td>
                                <td><i className="fas fa-edit" onClick={handleClickEdit}></i><i className="far fa-trash-alt" onClick={handleClickRemove}></i></td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>Zapiekanak z ziemniakami</td>
                                <td>Mamusina zapiekanka najlepsza pod sloncem mozna ja podawac na zimno i na cieplo Mamusina zapiekanka najlepsza pod sloncem mozna ja podawac na zimno i na cieplo Mamusina zapiekanka najlepsza pod sloncem mozna ja podawac na zimno i na cieplo Mamusina zapiekanka najlepsza pod sloncem mozna ja podawac na zimno i na cieplo</td>
                                <td><i className="fas fa-edit" onClick={handleClickEdit}></i><i className="far fa-trash-alt" onClick={handleClickRemove}></i></td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>Zapiekanak z ziemniakami</td>
                                <td>Mamusina zapiekanka najlepsza pod sloncem mozna ja podawac na zimno i na cieplo Mamusina zapiekanka najlepsza pod sloncem mozna ja podawac na zimno i na cieplo Mamusina zapiekanka najlepsza pod sloncem mozna ja podawac na zimno i na cieplo Mamusina zapiekanka najlepsza pod sloncem mozna ja podawac na zimno i na cieplo</td>
                                <td><i className="fas fa-edit" onClick={handleClickEdit}></i><i className="far fa-trash-alt" onClick={handleClickRemove}></i></td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>Zapiekanak z ziemniakami</td>
                                <td>Mamusina zapiekanka najlepsza pod sloncem mozna ja podawac na zimno i na cieplo Mamusina zapiekanka najlepsza pod sloncem mozna ja podawac na zimno i na cieplo Mamusina zapiekanka najlepsza pod sloncem mozna ja podawac na zimno i na cieplo Mamusina zapiekanka najlepsza pod sloncem mozna ja podawac na zimno i na cieplo</td>
                                <td><i className="fas fa-edit" onClick={handleClickEdit}></i><i className="far fa-trash-alt" onClick={handleClickRemove}></i></td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>Zapiekanak z ziemniakami</td>
                                <td>Mamusina zapiekanka najlepsza pod sloncem mozna ja podawac na zimno i na cieplo Mamusina zapiekanka najlepsza pod sloncem mozna ja podawac na zimno i na cieplo Mamusina zapiekanka najlepsza pod sloncem mozna ja podawac na zimno i na cieplo Mamusina zapiekanka najlepsza pod sloncem mozna ja podawac na zimno i na cieplo</td>
                                <td><i className="fas fa-edit" onClick={handleClickEdit}></i><i className="far fa-trash-alt" onClick={handleClickRemove}></i></td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>Zapiekanak z ziemniakami</td>
                                <td>Mamusina zapiekanka najlepsza pod sloncem mozna ja podawac na zimno i na cieplo Mamusina zapiekanka najlepsza pod sloncem mozna ja podawac na zimno i na cieplo Mamusina zapiekanka najlepsza pod sloncem mozna ja podawac na zimno i na cieplo Mamusina zapiekanka najlepsza pod sloncem mozna ja podawac na zimno i na cieplo</td>
                                <td><i className="fas fa-edit" onClick={handleClickEdit}></i><i className="far fa-trash-alt" onClick={handleClickRemove}></i></td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>Zapiekanak z ziemniakami</td>
                                <td>Mamusina zapiekanka najlepsza pod sloncem mozna ja podawac na zimno i na cieplo Mamusina zapiekanka najlepsza pod sloncem mozna ja podawac na zimno i na cieplo Mamusina zapiekanka najlepsza pod sloncem mozna ja podawac na zimno i na cieplo Mamusina zapiekanka najlepsza pod sloncem mozna ja podawac na zimno i na cieplo</td>
                                <td><i className="fas fa-edit" onClick={handleClickEdit}></i><i className="far fa-trash-alt" onClick={handleClickRemove}></i></td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>Zapiekanak z ziemniakami</td>
                                <td>Mamusina zapiekanka najlepsza pod sloncem mozna ja podawac na zimno i na cieplo Mamusina zapiekanka najlepsza pod sloncem mozna ja podawac na zimno i na cieplo Mamusina zapiekanka najlepsza pod sloncem mozna ja podawac na zimno i na cieplo Mamusina zapiekanka najlepsza pod sloncem mozna ja podawac na zimno i na cieplo</td>
                                <td><i className="fas fa-edit" onClick={handleClickEdit}></i><i className="far fa-trash-alt" onClick={handleClickRemove}></i></td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>Zapiekanak z ziemniakami</td>
                                <td>Mamusina zapiekanka najlepsza pod sloncem mozna ja podawac na zimno i na cieplo Mamusina zapiekanka najlepsza pod sloncem mozna ja podawac na zimno i na cieplo Mamusina zapiekanka najlepsza pod sloncem mozna ja podawac na zimno i na cieplo Mamusina zapiekanka najlepsza pod sloncem mozna ja podawac na zimno i na cieplo</td>
                                <td><i className="fas fa-edit" onClick={handleClickEdit}></i><i className="far fa-trash-alt" onClick={handleClickRemove}></i></td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>Zapiekanak z ziemniakami</td>
                                <td>Mamusina zapiekanka najlepsza pod sloncem mozna ja podawac na zimno i na cieplo Mamusina zapiekanka najlepsza pod sloncem mozna ja podawac na zimno i na cieplo Mamusina zapiekanka najlepsza pod sloncem mozna ja podawac na zimno i na cieplo Mamusina zapiekanka najlepsza pod sloncem mozna ja podawac na zimno i na cieplo</td>
                                <td><i className="fas fa-edit" onClick={handleClickEdit}></i><i className="far fa-trash-alt" onClick={handleClickRemove}></i></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    )
}

export default RecipesList;