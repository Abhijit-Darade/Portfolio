import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import stock from "../../Assets/Projects/Stock.png";
import college from "../../Assets/Projects/College_Admission.png";
import hotel from "../../Assets/Projects/Hotel_Management.png";
import travel from "../../Assets/Projects/Travel_Management.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={stock}
              isBlog={false}
              title="Visualization of Stocks"
              description="Web application created using Django app to predict real time stock prices for NSE and NYSE using LSTM machine learning model. Users can select from predefined list of stock names to predict prices."
              ghLink="https://github.com/Abhijit-Darade/Stocks"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={college}
              isBlog={false}
              title="College Admission"
              description="Web Application to develop an online college admission system built using Django framework. Students can apply for any branch in an engineering college by giving their personal and education details."
              ghLink="https://github.com/Abhijit-Darade/Online-College-Admission-System"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hotel}
              isBlog={false}
              title="Hotel Management System"
              description="Hotel management system is a free and open source project. This application is pretty simple and easy to use. The whole system is built in Java programming language with the help of NetBeans IDE. Also to make records available for future use it’s back-end is Sqlite database. This is simple yet complete hotel management system. This system performs all the necessary tasks that a hotel software application performs."
              ghLink="https://github.com/Abhijit-Darade/HotelManagement"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={travel}
              isBlog={false}
              title="Travel Management System "
              description="This project entitled Travel Management System, developed in Java, is an attempt to computerize the different operations in travel agencies. The project is very flexible and secured; admins can incorporate new features and manage the modules of the system as per requirements"
              ghLink="https://github.com/Abhijit-Darade/TravelManagement"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
