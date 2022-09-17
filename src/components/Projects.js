import React from "react";
import CarouselNew from "./CarouselNew";
import Projectlist from "./Projectlist";
import Container from "react-bootstrap/Container";
const projectdict = [
  {
    src: "https://mdbootstrap.com/img/new/standard/city/041.webp",
    title: "Fyurr",
    text: "Artists meet Venues",
  },
  {
    src: "https://mdbootstrap.com/img/new/standard/city/042.webp",
    title: "Trivia",
    text: "Quiz game with cross origin resource sharing",
  },
  {
    src: "https://mdbootstrap.com/img/new/standard/city/043.webp",
    title: "Coffee shop",
    text: "Access management with users,roles and RBAC using Auth0",
  },
];
class Projects extends React.Component {
  render() {
    const projectDict = projectdict;
    return (
      <div>
        <h1>Welcome to my Projects</h1>
        <Container>
          <Projectlist />
        </Container>
      </div>
    );
  }
}
export default Projects;
