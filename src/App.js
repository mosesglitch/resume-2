import "./App.css";
import React from "react";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import { BrowserRouter, Route, Routes } from "react-router-dom";
class App extends React.Component {
  render() {
    return (
      <Container>
        <div className="page-container">
          <NavBar />
          <Footer />
        </div>
      </Container>
    );
  }
}

export default App;
