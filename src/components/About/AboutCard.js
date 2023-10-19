import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Badrinath Ayyamperumal </span>
            from <span className="purple"> TamilNadu, India.</span>
            <br /> I am an UnderGraduate Engineering in Electronics and Communication Engineering at University College of Engineering(BIT Campus), Anna University, Tiruchirappalli-620024.
            <br />
            Additionally, I am currently a freelance blogger
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Surfing for latest tech news
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Touching people with Knowledge"{" "}
          </p>
          <footer className="blockquote-footer">Badrinath</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
