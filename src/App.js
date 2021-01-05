import React from "react";
import { 
  
  Switch, 
  HashRouter,
  Route
} from "react-router-dom";

import Home from "./components/Home";
import Navigation from "./components/Navigation";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <>
          <Navigation />
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </>
      </HashRouter>
    </div>
  );
}

export default App;
