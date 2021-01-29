import React, { useState } from "react";
import { 
  Switch, 
  HashRouter,
  Route
} from "react-router-dom";
import { UserNameContext } from "./components/MealsApp/WelcomePage/UserNameContext";

import RecipesList from "./components/MealsApp/RecipesList";
import PlansList from "./components/MealsApp/PlansList";
import ShoppingList from "./components/MealsApp/ShoppingList";
import LandingPage from "./components/LandingPage";
import AddRecipe from "./components/MealsApp/AddRecipe";
import AddPlan from "./components/MealsApp/AddPlan";
import EditRecipe from "./components/MealsApp/EditRecipe";
import EditPlan from "./components/MealsApp/EditPlan";

import MealsApp from "./components/MealsApp";


const App = () => {
  const [userName, setUserName] = useState('');
 
  return (
    <div className="App">
      
      <HashRouter>
          <Switch>
              <UserNameContext.Provider value={{ userName, setUserName }}>
                <Route exact path="/" component={LandingPage} />
                <Route path="/mealsapp" component={MealsApp} />
                <Route path="/pulpit" component={MealsApp} />
                <Route path="/recipeslist" component={RecipesList} />
                <Route path="/planslist" component={PlansList} />
                <Route path="/shoppinglist" component={ShoppingList} />
                <Route path="/addrecipe" component={AddRecipe} />
                <Route path="/addplan" component={AddPlan} />
                <Route path="/editrecipe" component={EditRecipe} />
                <Route path="/editplan" component={EditPlan} />
              </UserNameContext.Provider>
          </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
