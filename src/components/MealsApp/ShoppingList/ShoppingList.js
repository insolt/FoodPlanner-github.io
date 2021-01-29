import React, { useContext } from "react";
import  {UserNameContext} from "../WelcomePage/UserNameContext";

import Header from "../Header";
import Nav from "../Nav";

import "../../../scss/components/MealsApp/MealsApp.scss";
import "../../../scss/components/MealsApp/ShoppingList/ShoppingList.scss";

const ShoppingList = () => {
    const { userName, setUserName } = useContext(UserNameContext);
  
    
    return(
        <>
        <Header />
            <div className="app">
                <Nav />
                <section className="shopping_list">
                    <div className="shopping_list">
                        <form className="shopping_list_form">
                            <div className="shopping_list_header">
                                <h1>COLLECT SHOPPING LIST</h1>
                            </div>
                        </form>
                    </div>
                </section>
        </div>
        </>
    )
}

export default ShoppingList;