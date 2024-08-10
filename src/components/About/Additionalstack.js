import React from "react";
import { Col, Row, OverlayTrigger, Tooltip } from "react-bootstrap";
import {
  SiFormstack,
  SiBitbucket,
  SiSalesforce,
  SiMicrosoftazure,
  SiFigma,
} from "react-icons/si";

function Additionalstack() {
  const tools = [
    { icon: <SiFormstack />, name: "Formstack" },
    { icon: <SiBitbucket />, name: "Bitbucket" },
    { icon: <SiSalesforce />, name: "Salesforce" },
    { icon: <SiMicrosoftazure />, name: "Microsoft Azure" },
    { icon: <SiFigma />, name: "Figma" },
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Additional tools <strong className="purple">I am proficient in</strong>
      </h1>
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
    </Row>
  );
}

export default Additionalstack;
