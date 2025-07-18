import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Yashasviny Verma </span>
            from <span className="purple">Indore, India.</span>
            <br />
            <br />
            I’m currently working as an Application Associate Developer and
            transitioning into a Full-Stack Developer role.
            <br />
            <br />
            I experience in building scalable web applications and analytics
            dashboards that solve real business problems.
            <br />
            <br />
            Beyond coding, here are a few things I enjoy doing!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Exploring new tech tools & frameworks
            </li>
            <li className="about-activity">
              <ImPointRight /> Sketching and creative design
            </li>
            <li className="about-activity">
              <ImPointRight /> Nature walks & self-reflection
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Build with purpose, grow with curiosity."
          </p>
          <footer className="blockquote-footer">Yashasviny</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
