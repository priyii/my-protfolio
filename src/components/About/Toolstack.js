import React from "react";
import { Col, Row, OverlayTrigger, Tooltip } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiWindows,
  SiJira,
  SiGithub,
} from "react-icons/si";

function Toolstack() {
  const tools = [
    { icon: <SiWindows />, name: "Windows" },
    { icon: <SiVisualstudiocode />, name: "Visual Studio Code" },
    { icon: <SiPostman />, name: "Postman" },
    { icon: <SiGithub />, name: "GitHub" },
    { icon: <SiJira />, name: "Jira" },
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {tools.map((tool, index) => (
        <Col key={index} xs={4} md={2} className="tech-icons">
          <OverlayTrigger
            placement="top"
            overlay={<Tooltip id={`tooltip-${index}`}>{tool.name}</Tooltip>}
          >
            <div>{tool.icon}</div>
          </OverlayTrigger>
        </Col>
      ))}
    </Row>
  );
}

export default Toolstack;
