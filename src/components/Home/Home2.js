import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.webp";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              Hi, I'm <b className="purple">Yashasviny Verma</b>, a tech
              enthusiast turned full-stack developer with a passion for building
              meaningful digital products.
              <br />
              <br />I enjoy working across the stack and am fluent in languages
              like&nbsp;
              <i>
                <b className="purple">JavaScript, C++, and SQL</b>
              </i>
              .
              <br />
              <br />
              I'm especially interested in creating impactful&nbsp;
              <i>
                <b className="purple">
                  Web Applications, Dashboards, and Scalable Tools
                </b>
              </i>
              , with a keen focus on user experience and real-world problem
              solving.
              <br />
              <br />I love working with&nbsp;
              <b className="purple">Node.js</b> on the backend and modern
              frontend frameworks like&nbsp;
              <i>
                <b className="purple">React.js.</b><br />
              </i>
              I also enjoy experimenting with new technologies and
              contributing to collaborative projects that challenge me to grow.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/code-here7"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/yashasviny-verma-25088012a/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
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
