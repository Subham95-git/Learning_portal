import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import LandingPage from "./Components/LandingPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import java from "./Components/Courses/java/Java";
import js from "./Components/Courses/Javascript/Javascript";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        {/* <LandingPage/> */}

        <Switch>
          <Route exaxt path="/java" component={java}></Route>
          <Route exaxt path="/JavaScript" component={js}></Route>
          <Route exaxt path="/" component={LandingPage}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
