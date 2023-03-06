import "./App.css";
import React from "react";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";

class App extends React.Component {
  render() {
    return (
      <div>
        <Container>
          <div className="page-container">
            <NavBar />
          </div>
        </Container>
        {/* <div style={{ paddingTop: 50 }}> */}
        <Footer />
        {/* </div> */}
      </div>
    );
  }
}

export default App;
