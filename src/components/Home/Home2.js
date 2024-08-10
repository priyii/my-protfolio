import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/home-me.png";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiOutlineMail, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              An Introduction
              <span className="purple"> to </span> Who I Am
            </h1>
            <p className="home-about-body">
              Passionate <b className="purple">Full-stack Developer </b>{" "}
              dedicated to delivering seamless and engaging user experiences.
              <br />
              <br />
              Driven by a love for
              <i>
                <b className="purple"> continuous learning and innovation</b>
              </i>
              , I constantly seek out new challenges and technologies to
              experiment with and master.
              <br />
              <br />I believe in the power of &nbsp;
              <i>
                <b className="purple">collaboration and knowledge sharing </b>{" "}
                often working with cross-functional teams to deliver
                <b className="purple"> comprehensive solutions.</b>
              </i>
              <br />
              <br />I have a strong commitment to{" "}
              <b className="purple">lifelong learning,</b> staying ahead of
              industry trends and continuously refining my skill set.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img
                src={myImg}
                className="img-fluid home-logo-animation"
                alt="avatar"
              />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>Join Me Here</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/priyii"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:imyadavpinki@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiOutlineMail />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/priyanka-yadav-909953215/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/pri.ya0802/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
