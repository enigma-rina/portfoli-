import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello, my name is <span className="purple">Marina Grib </span>
             I am from <span className="purple"> Minsk, Belarus.</span>
            <br />I am a front-end developer. My journey in front-end development began in 2019 when I took courses at IT school Comp-As. From there, I continued to learn and improve my skills through various free and paid courses, including a Coursera course on becoming a "Meta Frontend Developer." I taught myself HTML, CSS, and JavaScript and continued to learn new technologies as I went along.
            </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
