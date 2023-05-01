import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

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
              imgPath={chatify}
              isBlog={false}
              title="Real Estate Agency Website (HTML, CSS, Bootstrap, jQuery, JS)"
              description="Practiced HTML and CSS skills to create a visually appealing and responsive multi-page website for a real estate agency.
              Implemented Bootstrap framework for efficient and responsive layout design.
              Utilized jQuery and JavaScript to add interactivity to the website, such as property listings filtering and form validation.
              Gained experience in front-end web development principles, including responsive design, cross-browser compatibility, and user experience (UX) design."
              ghLink="https://github.com/enigma-rina/estate_agency"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Todo List App (HTML, CSS, JavaScript)"
              description="Developed a simple yet functional todo list application using HTML, CSS, and JavaScript.
              Implemented CRUD (Create, Read, Update, Delete) functionality for tasks, allowing users to add, edit, and delete tasks dynamically.
              Practiced event handling and DOM manipulation to update the UI in real-time based on user interactions.
              Gained experience in working with local storage to persist task data across page reloads.
              Tested and debugged the application to ensure smooth functionality across different browsers and devices."
              ghLink="https://github.com/enigma-rina/todo"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Word Counter (HTML, CSS, JavaScript)"
              description="Created a word counter tool using HTML, CSS, and JavaScript to analyze the text input and count the number of words, characters, and special symbols.
              Implemented JavaScript logic for accurate word counting, including handling different word delimiters and ignoring whitespaces.
              Practiced string manipulation and regular expressions in JavaScript to extract and process text data efficiently.
              Implemented form validation to ensure accurate results and provide error feedback to users for better usability."
              ghLink="https://github.com/enigma-rina/textcounter"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
