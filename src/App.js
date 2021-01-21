import React from "react";
import { 
  Switch, 
  HashRouter,
  Route
} from "react-router-dom";

import RecipesList from "./components/MealsApp/RecipesList";
import PlansList from "./components/MealsApp/PlansList";
import ShoppingList from "./components/MealsApp/ShoppingList";
import LandingPage from "./components/LandingPage";
import AddRecipe from "./components/MealsApp/AddRecipe";
import AddPlan from "./components/MealsApp/AddPlan";

import MealsApp from "./components/MealsApp";

function App() {
  return (
    <div className="App">
      
      <HashRouter>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/mealsapp" component={MealsApp} />
            <Route path="/pulpit" component={MealsApp} />
            <Route path="/recipeslist" component={RecipesList} />
            <Route path="/planslist" component={PlansList} />
            <Route path="/shoppinglist" component={ShoppingList} />
            <Route path="/addrecipe" component={AddRecipe} />
            <Route path="/addplan" component={AddPlan} />
          </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
