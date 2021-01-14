import React from "react";

import "../../../scss/components/MealsApp/PlansList/PlansList.scss";

const PlansList = () => {
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
        <section className="plans_list">
            <div className="plans_list_view">
                <div className="plans_list_header">
                    <h1 className="plans_list_title">PLANS LIST</h1>
                    <p><i className="fas fa-plus-square" onClick={handleClickAdd}></i></p>
                </div>
                <div className="plans_list_body">
                    <table className="plans_table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>NAME</th>
                                <th>DESCRIPTION</th>
                                <th>WEEK</th>
                                <th>ACTION</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Tydzien jarski</td>
                                <td>Kuchnia wegetarianska dla kzdego. Kazdy znajdzie tu cos dla siebie. Bo my musimy byc mezni i zdrowi chocby na skrobni. Bo my musimy byc dzis mniej pazerni - roslinozerni. Nam poledwica oraz schab, nie smakuja tak jak szczaw</td>
                                <td>17</td>
                                <td><i className="fas fa-edit" onClick={handleClickEdit}></i><i className="far fa-trash-alt" onClick={handleClickRemove}></i></td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>Tydzien jarski</td>
                                <td>Kuchnia wegetarianska dla kzdego. Kazdy znajdzie tu cos dla siebie. Bo my musimy byc mezni i zdrowi chocby na skrobni. Bo my musimy byc dzis mniej pazerni - roslinozerni. Nam poledwica oraz schab, nie smakuja tak jak szczaw</td>
                                <td>14</td>
                                <td><i className="fas fa-edit" onClick={handleClickEdit}></i><i className="far fa-trash-alt" onClick={handleClickRemove}></i></td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>Tydzien jarski</td>
                                <td>Kuchnia wegetarianska dla kzdego. Kazdy znajdzie tu cos dla siebie. Bo my musimy byc mezni i zdrowi chocby na skrobni. Bo my musimy byc dzis mniej pazerni - roslinozerni. Nam poledwica oraz schab, nie smakuja tak jak szczaw</td>
                                <td>37</td>
                                <td><i className="fas fa-edit" onClick={handleClickEdit}></i><i className="far fa-trash-alt" onClick={handleClickRemove}></i></td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>Tydzien jarski</td>
                                <td>Kuchnia wegetarianska dla kzdego. Kazdy znajdzie tu cos dla siebie. Bo my musimy byc mezni i zdrowi chocby na skrobni. Bo my musimy byc dzis mniej pazerni - roslinozerni. Nam poledwica oraz schab, nie smakuja tak jak szczaw</td>
                                <td>17</td>
                                <td><i className="fas fa-edit" onClick={handleClickEdit}></i><i className="far fa-trash-alt" onClick={handleClickRemove}></i></td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>Tydzien jarski</td>
                                <td>Kuchnia wegetarianska dla kzdego. Kazdy znajdzie tu cos dla siebie. Bo my musimy byc mezni i zdrowi chocby na skrobni. Bo my musimy byc dzis mniej pazerni - roslinozerni. Nam poledwica oraz schab, nie smakuja tak jak szczaw</td>
                                <td>43</td>
                                <td><i className="fas fa-edit" onClick={handleClickEdit}></i><i className="far fa-trash-alt" onClick={handleClickRemove}></i></td>
                            </tr>  <tr>
                                <td>1</td>
                                <td>Tydzien jarski</td>
                                <td>Kuchnia wegetarianska dla kzdego. Kazdy znajdzie tu cos dla siebie. Bo my musimy byc mezni i zdrowi chocby na skrobni. Bo my musimy byc dzis mniej pazerni - roslinozerni. Nam poledwica oraz schab, nie smakuja tak jak szczaw</td>
                                <td>17</td>
                                <td><i className="fas fa-edit" onClick={handleClickEdit}></i><i className="far fa-trash-alt" onClick={handleClickRemove}></i></td>
                            </tr>  <tr>
                                <td>1</td>
                                <td>Tydzien jarski</td>
                                <td>Kuchnia wegetarianska dla kzdego. Kazdy znajdzie tu cos dla siebie. Bo my musimy byc mezni i zdrowi chocby na skrobni. Bo my musimy byc dzis mniej pazerni - roslinozerni. Nam poledwica oraz schab, nie smakuja tak jak szczaw</td>
                                <td>17</td>
                                <td><i className="fas fa-edit" onClick={handleClickEdit}></i><i className="far fa-trash-alt" onClick={handleClickRemove}></i></td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>Tydzien jarski</td>
                                <td>Kuchnia wegetarianska dla kzdego. Kazdy znajdzie tu cos dla siebie. Bo my musimy byc mezni i zdrowi chocby na skrobni. Bo my musimy byc dzis mniej pazerni - roslinozerni. Nam poledwica oraz schab, nie smakuja tak jak szczaw</td>
                                <td>17</td>
                                <td><i className="fas fa-edit" onClick={handleClickEdit}></i><i className="far fa-trash-alt" onClick={handleClickRemove}></i></td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>Tydzien jarski</td>
                                <td>Kuchnia wegetarianska dla kzdego. Kazdy znajdzie tu cos dla siebie. Bo my musimy byc mezni i zdrowi chocby na skrobni. Bo my musimy byc dzis mniej pazerni - roslinozerni. Nam poledwica oraz schab, nie smakuja tak jak szczaw</td>
                                <td>17</td>
                                <td><i className="fas fa-edit" onClick={handleClickEdit}></i><i className="far fa-trash-alt" onClick={handleClickRemove}></i></td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>Tydzien jarski</td>
                                <td>Kuchnia wegetarianska dla kzdego. Kazdy znajdzie tu cos dla siebie. Bo my musimy byc mezni i zdrowi chocby na skrobni. Bo my musimy byc dzis mniej pazerni - roslinozerni. Nam poledwica oraz schab, nie smakuja tak jak szczaw</td>
                                <td>17</td>
                                <td><i className="fas fa-edit" onClick={handleClickEdit}></i><i className="far fa-trash-alt" onClick={handleClickRemove}></i></td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>Tydzien jarski</td>
                                <td>Kuchnia wegetarianska dla kzdego. Kazdy znajdzie tu cos dla siebie. Bo my musimy byc mezni i zdrowi chocby na skrobni. Bo my musimy byc dzis mniej pazerni - roslinozerni. Nam poledwica oraz schab, nie smakuja tak jak szczaw</td>
                                <td>17</td>
                                <td><i className="fas fa-edit" onClick={handleClickEdit}></i><i className="far fa-trash-alt" onClick={handleClickRemove}></i></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    )
}

export default PlansList;