import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 100); // Add a delay if needed
    return () => clearTimeout(timer);
  }, []);

  return (
    <Card className={`quote-card-view ${animate ? "animate" : ""}`}>
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Priyanka Yadav </span>
            from <span className="purple"> Delhi NCR, India.</span>
            <br />
            <br />
            I am a highly skilled and adaptable web developer with a strong
            foundation in front-end and back-end development.
            <br />
            <br />
            My experience includes building responsive and user-friendly
            websites, optimizing performance, and ensuring cross-browser
            compatibility.
            <br />
            <br />
            I am dedicated to staying up-to-date with the latest industry trends
            and best practices to deliver high-quality web solutions that meet
            client needs and exceed expectations.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Dancing
            </li>
            <li className="about-activity">
              <ImPointRight /> Painting
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring new Technologies
            </li>
          </ul>

          <p style={{ color: "rgb(126 154 172)" }}>
            "Become that can not be replaced! "{" "}
          </p>
          <footer className="blockquote-footer">Priyanka</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
