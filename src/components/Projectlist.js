import React from "react";
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBIcon,
  MDBCardGroup,
} from "mdb-react-ui-kit";

class Projectlist extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const projectmap = this.props.projectdict.map((project) => (
      <MDBCard>
        <MDBCardImage src={project.src} alt="..." position="top" />
        <MDBCardBody>
          <MDBCardTitle>{project.title}</MDBCardTitle>
          <MDBCardText>{project.text}</MDBCardText>
          <MDBCardText>
            <MDBIcon far icon="file-code" />
            <a href={project.code} className="stretched-link"></a>
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>
    ));
    return <MDBCardGroup>{projectmap}</MDBCardGroup>;
  }
}
export default Projectlist;
