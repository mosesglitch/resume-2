import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Home from "./components/Home";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import { Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Home} />
      <Route exact path="/experience" component={Experience} />
      <Route exact path="/skills" component={Skills} />
      <Route exact path="/projects" component={Projects} />
    </div>
  );
}

export default App;
