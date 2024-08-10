import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';

const Footer = () => {
  return (
    <Container fluid className="footer">
      <Container>
        <div className="footer-cta pt-2 pb-2">
          <Row>
            <Col xl={4} md={4} className="mb-30">
              <div className="single-cta">
                <FaMapMarkerAlt />
                <div className="cta-text">
                  <h4>Find us</h4>
                  <span>Delhi NCR</span>
                </div>
              </div>
            </Col>
            <Col xl={4} md={4} className="mb-30">
              <div className="single-cta">
                <FaPhone />
                <div className="cta-text">
                  <h4>Call us</h4>
                  <span>+91 7827055990</span>
                </div>
              </div>
            </Col>
            <Col xl={4} md={4} className="mb-30">
              <div className="single-cta">
                <FiMail />
                <div className="cta-text">
                  <h4>Mail us</h4>
                  <span>imyadavpinki@gmail.com</span>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </Container>
  );
};

export default Footer;
