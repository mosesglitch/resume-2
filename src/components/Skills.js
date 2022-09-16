import React, { useState } from "react";
import {
  MDBIcon,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
} from "mdb-react-ui-kit";

export default function () {
  const [iconsActive, setIconsActive] = useState("pill1");

  const handleIconsClick = (value: string) => {
    if (value === iconsActive) {
      return;
    }

    setIconsActive(value);
  };

  return (
    <>
      <MDBTabs pills className="mb-3">
        <MDBTabsItem>
          <MDBTabsLink
            onClick={() => handleIconsClick("pill1")}
            active={iconsActive === "pill1"}
          >
            <MDBIcon fas icon="table" className="me-2" /> Data Analysis
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink
            onClick={() => handleIconsClick("pill2")}
            active={iconsActive === "pill2"}
          >
            <MDBIcon fas icon="chart-line" className="me-2" /> Data Science
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink
            onClick={() => handleIconsClick("pill3")}
            active={iconsActive === "pill3"}
          >
            <MDBIcon fas icon="globe" className="me-2" /> Web Development
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink
            onClick={() => handleIconsClick("pill1")}
            active={iconsActive === "pill1"}
          >
            <MDBIcon fas icon="laptop" className="me-2" /> Programming
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink
            onClick={() => handleIconsClick("pill2")}
            active={iconsActive === "pill2"}
          >
            <MDBIcon fas icon="database" className="me-2" /> RDBMS
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink
            onClick={() => handleIconsClick("pill3")}
            active={iconsActive === "pill3"}
          >
            <MDBIcon fas icon="chart-pie" className="me-2" /> Data Visualization
          </MDBTabsLink>
        </MDBTabsItem>
      </MDBTabs>

      <MDBTabsContent>
        <MDBTabsPane show={iconsActive === "pill1"}>Tab 1 content</MDBTabsPane>
        <MDBTabsPane show={iconsActive === "pill2"}>Tab 2 content</MDBTabsPane>
        <MDBTabsPane show={iconsActive === "pill3"}>Tab 3 content</MDBTabsPane>
      </MDBTabsContent>
    </>
  );
}
