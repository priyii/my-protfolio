import React from "react";
import { Col, Row, OverlayTrigger, Tooltip } from "react-bootstrap";
import {
  SiHtml5,
  SiCss3,
  SiAmazonaws,
  SiMysql,
  SiJquery,
  SiTypescript,
  SiBootstrap,
  SiExpress,
} from "react-icons/si";
import { DiJavascript1, DiReact, DiNodejs, DiMongodb } from "react-icons/di";
import { SiRedux, SiNextdotjs } from "react-icons/si";

function Techstack() {
  const tools = [
    { icon: <SiHtml5 />, name: "HTML5" },
    { icon: <SiCss3 />, name: "CSS3" },
    { icon: <DiJavascript1 />, name: "JavaScript" },
    { icon: <SiJquery />, name: "jQuery" },
    { icon: <SiTypescript />, name: "TypeScript" },
    { icon: <SiBootstrap />, name: "Bootstrap" },
    { icon: <DiReact />, name: "React" },
    { icon: <SiRedux />, name: "Redux" },
    { icon: <SiNextdotjs />, name: "Next.js" },
    { icon: <SiExpress />, name: "Express.js" },
    { icon: <DiNodejs />, name: "Node.js" },
    { icon: <DiMongodb />, name: "MongoDB" },
    { icon: <SiMysql />, name: "MySQL" },
    { icon: <SiAmazonaws />, name: "AWS" },
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

export default Techstack;
