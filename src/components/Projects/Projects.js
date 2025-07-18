import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

// Project images
import logiverse from "../../Assets/Projects/logiverse.png";
import teamTalk from "../../Assets/Projects/teamtalk.jpg";
import zoomRoom from "../../Assets/Projects/zoomroom.webp";
import timesheet from "../../Assets/Projects/timesheet.png";
import devConnect from "../../Assets/Projects/devconnect.webp";
import support from "../../Assets/Projects/support.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Projects</strong>
        </h1>
        <p style={{ color: "white" }}>
          These projects reflect my journey as a developer — focused on solving
          real problems with practical solutions.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={logiverse}
              isBlog={false}
              title="LogiVerse – KPI Analytics Dashboard"
              description="Logistics analytics dashboard built with MERN stack. Visualizes KPIs like ARR, growth rate, and team size for 300+ companies. Features client-side filters, CRUD, and Chart.js visualizations."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={teamTalk}
              isBlog={false}
              title="TeamTalk – Real-Time Feedback App"
              description="Collaborative platform for teams to share projects and drop real-time feedback. Built with React, Node.js, MongoDB, and Socket.IO for live updates."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={zoomRoom}
              isBlog={false}
              title="Zoom Room – Dog Training Franchise"
              description="Worked on backend integration, JWT auth, and data migration using Azure Data Factory. Contributed to API planning and system design."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={timesheet}
              isBlog={false}
              title="TimeSheet Pro 365"
              description="A timesheet tracking app using React + SPFx integrated with Microsoft 365. Role-based routing, improved UX, and seamless logging with Power Automate."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={devConnect}
              isBlog={false}
              title="DevConnect – Developer Social Hub"
              description="A MERN stack social platform where developers can create profiles, list projects, and give feedback. Includes full CRUD, routing, and Tailwind-based UI."
            />
          </Col>
        </Row>

        <h2 className="project-heading" style={{ marginTop: "40px" }}>
          Client-Facing <strong className="purple">Enterprise Projects</strong>
        </h2>
        <Row style={{ justifyContent: "center", paddingBottom: "30px" }}>
          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={support}
              isBlog={false}
              title="Enterprise Projects – Ignatiuz Software"
              description="Contributed to multiple client-facing projects involving automation, data migration, and production support:
    • Zoom Room – Performed ETL using Azure Data Factory for client onboarding.
    • OCUA – Developed Power Automate flows and Microsoft Forms for business process automation.
    • CertainTeed – Designed Power Automate workflows for task routing and data sync.
    • Innotive – Handled technical support tickets, issue resolution, and production-level enhancements."
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
