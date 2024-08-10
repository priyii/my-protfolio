import React from "react";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { Card, Row, Col } from "react-bootstrap";

function ProjectCards(props) {
  return (
    <Card className="mb-3 project-card-view">
      <Row className="g-0">
        <Col md={4}>
          <Card.Img variant="top" src={props.imgPath} alt="card-img" />
        </Col>
        <Col md={8}>
          <Card.Body className="text-md-start text-center">
            <Card.Title className="mb-4 purple">{props.title}</Card.Title>
            <Card.Text style={{ textAlign: "justify" }}>
              {props.description}
            </Card.Text>
            {!props.isBlog && props.demoLink && (
              <Button
                variant="primary"
                href={props.demoLink}
                target="_blank"
                className="mt-3"
              >
                <CgWebsite /> &nbsp;
                {"Live"}
              </Button>
            )}
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
}

export default ProjectCards;
