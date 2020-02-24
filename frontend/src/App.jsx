import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import Dashboard from "./components/Dashboard/Dashboard.jsx";
import Restriction from "./auth/PrivateAuth.jsx";

function App() {
  return (
    <Router>
      <Switch>
        <Restriction.Routing
          path="/dashboard"
          exact
          component={Dashboard}
          restricted={true}
        />
        <Restriction.Routing
          path="/"
          exact
          component={Home}
          restricted={false}
        />
      </Switch>
    </Router>
  );
}

export default App;
