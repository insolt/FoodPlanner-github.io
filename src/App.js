import React from "react";
import { 
  Switch, 
  HashRouter,
  Route
} from "react-router-dom";

import LandingPage from "./components/LandingPage";

import MealsApp from "./components/MealsApp";

function App() {
  return (
    <div className="App">
      <HashRouter>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/mealsapp" component={MealsApp} />
          </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
