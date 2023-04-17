import React, { Component } from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
} from "mdb-react-ui-kit";
let skillsInDepth = {
  Programming: ["Python", "C", "Javascript", "HTML", "CSS"],
  "Web Development": [
    "Django",
    "Flask",
    "Express",
    "Javascript",
    "ReactJS",
    "APIs",
    "Access Management",
  ],
  RDBMS: [
    "SQL",
    "NoSQL",
    "Object Relational Mapping",
    "DB Theory",
    "DB Modelling",
  ],

  "Data Analysis": [
    "Defining goal",
    "Data Exploration",
    "Data Preparation",
    "Model Building",
    "Data Collection",
    "Model Production",
  ],
  "Data Science": [
    "Classification",
    "Forecasting",
    "Clustering",
    "Natural Language Processing",
    "Computer Vision",
  ],
  "Data Visualization": [
    "Ms Excel",
    "Power BI",
    "Tableau",
    "Matplotlib",
    "Plotly",
  ],
};

class SkillsInDepth extends Component {
  render() {
    const tools = skillsInDepth[this.props.selectedSkill].map((tool, i) => (
      <MDBCardText key={i}>{tool}</MDBCardText>
    ));

    return (
      <div>
        <MDBCard>
          <MDBCardBody>
            <MDBCardTitle>{this.props.selectedSkill}</MDBCardTitle>
            {tools}
          </MDBCardBody>
        </MDBCard>
      </div>
    );
  }
}

export default SkillsInDepth;
