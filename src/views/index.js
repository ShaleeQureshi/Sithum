import React from "react";
import { Link } from "react-scroll";
import { Button, Container, Row, Col } from "react-bootstrap";

import Navigation from "../components/navigation";
import Footer from "../components/footer";

import SAMPLE from "../assets/images/me.jpg";

const IndexApp = () => {
  return (
    <div>
      <section className="wrapper bg-home" id="home">
        <Navigation />
        <div className="left">
          <h1>Sample title</h1>
          <p>Sample subtitle</p>
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            <Button variant="outline-dark">Sample button text</Button>
          </Link>
        </div>
      </section>
      <section className="section-about" id="about">
        <Container>
          <Row className="pt-5">
            <Col sm={true} className="pt-5 text-center">
              <img src={SAMPLE} alt="Sample img" />
            </Col>
            <Col sm={true} className="pt-5">
              <div className="about">
                <h3>Sample about title</h3>
                <p>Sample about text</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="section-contact" id="contact">
        <Container>
          <div className="text-center pt-5">
            <h1 className="pt-5">Contact</h1>
            <Button
              className="w-50 mt-3 mb-5"
              variant="outline-dark"
              href="mailto:shaleequreshi2019@gmail.com"
            >
              Send me an email
            </Button>
          </div>
        </Container>
      </section>
      <Footer />
    </div>
  );
};
export default IndexApp;
