import React, { useState } from "react";
import {
  MDBIcon,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
} from "mdb-react-ui-kit";

class Skills extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeskill: this.props.inskill[0]["comp"],
      skilldisplay: this.props.skilldisplay,
      trialstate: "red",
    };
    this.handleIconsClick = this.handleIconsClick.bind();
  }
  handleIconsClick = (e) => {
    const newActiveSkill = this.props.inskill[e - 1]["comp"];
    this.setState((state, props) => ({
      activeskill: newActiveSkill,
      trialstate: "blue",
    }));
  };
  render() {
    const skilllist = this.props.inskill.map((skill, i) => (
      <MDBTabsItem key={i}>
        <MDBTabsLink
          onClick={(e) => this.handleIconsClick(skill.id)}
          // active={iconsActive==}
          // active={iconsActive === this.state.activeskill}
        >
          <MDBIcon fas icon={skill.icon} className="me-2" /> {skill.item}
        </MDBTabsLink>
      </MDBTabsItem>
    ));
    const aptitude = this.state.trialstate;

    return (
      <>
        <MDBTabs pills className="mb-3">
          {skilllist}
        </MDBTabs>
        <MDBTabsContent show={this.state.trialstate === this.state.trialstate}>
          {/* <MDBTabsPane show={iconsActive === "pill6"}> */}
          <MDBTabsPane>
            {aptitude}
            <h1>What is this</h1>
            {console.log(aptitude)}
          </MDBTabsPane>
        </MDBTabsContent>
      </>
    );
  }
}
export default Skills;
