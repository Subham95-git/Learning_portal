import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import LandingPage from "./Components/LandingPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import java from "./Components/Courses/java/Java2";
import js from "./Components/Courses/Javascript/Javascript";
//import Compiler from './Components/Compiler/Compiler';
import whatisJava from "./Components/Courses/java/tutorials/Whatisjava/Whatisjava";
import JavaHistory from "./Components/Courses/java/tutorials/JavaHistory/JavaHistory";
import JavaFeature from "./Components/Courses/java/tutorials/FeatureOfJava/JavaFeature";
import JavaFirst from "./Components/Courses/java/tutorials/JavaFirstProgram/JavaFirstProg";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        {/* <Compiler/> */}
        {/* <LandingPage/> */}

        <Switch>
          <Route exact path="/java/java-first" component={JavaFirst}></Route>
          <Route exact path="/java/java-feature" component={JavaFeature}></Route>
          <Route exact path="/java/java-what" component={whatisJava}></Route>
          <Route
            exact
            path="/java/java-history"
            component={JavaHistory}
          ></Route>
          <Route exaxt path="/java" component={java}></Route>
          <Route exaxt path="/JavaScript" component={js}></Route>
          <Route exaxt path="/" component={LandingPage}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
