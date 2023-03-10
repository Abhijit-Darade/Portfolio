import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Abhijit Darade </span>
            from <span className="purple"> Ahmednagar, India.</span>
            <br />I am a pursuing B.Tech Information Technology from VIT, wadala
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight />Listening Music
            </li>
            <li className="about-activity">
              <ImPointRight /> Work In Agriculture
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Abhijit</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
