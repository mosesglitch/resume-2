import React from "react";
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardGroup,
} from "mdb-react-ui-kit";

class Projectlist extends React.Component {
  render() {
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
    const how = "however";
    console.log(projectdict);
    const projectmap = projectdict.map((project) => (
      <MDBCard>
        <MDBCardImage src={project.src} alt="..." position="top" />
        <MDBCardBody>
          <MDBCardTitle>{project.title}</MDBCardTitle>
          <MDBCardText>{project.text}</MDBCardText>
          <MDBCardText>
            <small className="text-muted">Last updated 3 mins ago</small>
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>
    ));
    return <MDBCardGroup>{projectmap}</MDBCardGroup>;
  }
}
export default Projectlist;
