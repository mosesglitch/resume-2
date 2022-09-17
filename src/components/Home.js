import React from "react";
import Skills from "./Skills";
import CarouselNew from "./CarouselNew";
import Container from "react-bootstrap/Container";
import DataVisualization from "./skillsInDepth/DataVisualization";
import RDBMS from "./skillsInDepth/RDBMS";
import Programming from "./skillsInDepth/Programming";
import DataScience from "./skillsInDepth/DataScience";
import WebDev from "./skillsInDepth/WebDev";
import DataAnalysis from "./skillsInDepth/DataAnalysis";

const inskill = [
  {
    id: 1,
    icon: "table",
    item: "DataAnalysis",
    comp: <DataAnalysis />,
  },
  {
    id: 2,
    icon: "chart-line",
    item: "DataScience",
    comp: <DataScience />,
  },
  {
    id: 3,
    icon: "globe",
    item: "Web Development",
    comp: <WebDev />,
  },
  {
    id: 4,
    icon: "database",
    item: "RDBMS",
    comp: <RDBMS />,
  },
  {
    id: 5,
    icon: "laptop",
    item: "Programming",
    comp: <Programming />,
  },
  {
    id: 6,
    icon: "chart-pie",
    item: "Data Visualization",
    comp: <DataVisualization />,
  },
];
class Home extends React.Component {
  render() {
    return (
      <Container>
        <div class="newsec">
          <p className="tops">
            A highly motivated and hard-working individual with a strong
            understanding of key business concepts.I have a strong belief in how
            data and technology can help us work together better, innovate and
            solve urgent problems. I look foward to joining a like-minded team
            and create value together.
          </p>

          <Skills name={"paps"} inskill={inskill} />

          {/* <CarouselNew /> */}
        </div>
      </Container>
    );
  }
}
export default Home;
