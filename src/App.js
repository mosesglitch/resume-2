import "./App.css";
import React from "react";
import Home from "./components/Home";
import Experience from "./components/Experience";
import Academics from "./components/Academics";
import Projects from "./components/Projects";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="page-container">
      <BrowserRouter>
        <NavBar />
        <div className="content-wrap">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route exact path="/experience" element={<Experience />} />
            <Route exact path="/academics" element={<Academics />} />
            <Route exact path="/projects" element={<Projects />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
