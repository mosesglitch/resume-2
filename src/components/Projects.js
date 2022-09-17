import React from "react";
import Projectlist from "./Projectlist";
import Container from "react-bootstrap/Container";
const projectdict = [
  {
    src: "https://cdn2.vectorstock.com/i/1000x1000/09/61/musician-playing-music-together-music-band-vector-22690961.jpg",
    title: "Fyurr",
    text: "Artists meet Venues",
    code: "https://github.com/mosesglitch/Fyyur",
  },
  {
    src: "https://mdbootstrap.com/img/new/standard/city/042.webp",
    title: "Trivia",
    text: "Quiz game with cross origin resource sharing",
    code: "https://github.com/mosesglitch/trivia_app",
  },
  {
    src: "https://springboard-cdn.appadvice.com/generated-app-plays/618125951/170323968-half-thumb/00001.jpg",
    title: "Coffee shop",
    text: "Access management with users,roles and RBAC using Auth0",
    code: "https://github.com/mosesglitch/Coffee-shop-app",
  },
];
class Projects extends React.Component {
  render() {
    return (
      <Container>
        <Projectlist projectdict={projectdict} />
      </Container>
    );
  }
}
export default Projects;
