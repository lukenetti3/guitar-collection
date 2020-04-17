import React from "react";
import { Link, Switch, Route } from "react-router-dom";
import Guitars from "./Guitars";
import Home from "./Home";
import SingleGuitar from "./SingleGuitar";

function Main() {

  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/guitars">
          <Guitars />
        </Route>
        <Route exact path="/guitars/:guitarId">
          <SingleGuitar />
        </Route>
      </Switch>
    </div>
  );
}

export default Main;
