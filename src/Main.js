import React, {useState} from "react";
import { Switch, Route } from "react-router-dom";
import Guitars from "./Guitars";
import Home from "./Home";
import SingleGuitar from "./SingleGuitar";
import AddGuitar from "./AddGuitar"
import guitarData from "./guitarData"

function Main() {

  const [allGuitars, setAllGuitars] = useState(guitarData)

  return (
    <div className="body-container">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/guitars">
          <Guitars data={allGuitars} function={setAllGuitars}/>
        </Route>
        <Route exact path="/guitars/:guitarId">
          <SingleGuitar data={allGuitars} function={setAllGuitars}/>
        </Route>
        <Route exact path="/addGuitar">
          <AddGuitar data={allGuitars} function={setAllGuitars}/>
        </Route>
      </Switch>
    </div>
  );
}

export default Main
