import React from "react";
import { Col, Row } from "react-bootstrap";

function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        My <strong className="purple">Education</strong>
      </h1>
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={2} md={12} className="education">
      Minsk Branch of the Belarusian Trade and Economic University of Consumer Cooperation (2020-2024)
      <br></br>
      <strong className="purple">Software Engineering for Information Technology</strong>
      </Col>
      <Col xs={2} md={12} className="education">
      <a href="https://coursera.org/share/a25e37309a6116a87ca6bab90ec9936b">Meta Front-End Developer</a> (2022-2023)
      <br></br>
      <strong className="purple">Front-End Developer</strong>
      </Col>
      <Col xs={2} md={12} className="education">
      <a href="https://www.coursera.org/account/accomplishments/professional-cert/Z8PVZR3TFHKW">Google UX Design</a> (2022-2023)
      <br></br>
      <strong className="purple">UX/UI Designer</strong>
      </Col>
      <Col xs={2} md={12} className="education">
      IT school "Comp-As" (2019-2020)
      <br></br>
      <strong className="purple">Web-design</strong>
      </Col>
      </Row>
    </Row>
  );
}

export default Github;
