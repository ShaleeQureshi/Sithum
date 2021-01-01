import React from "react";
import Typical from "react-typical";
import { Container, Row, Col, Button } from "react-bootstrap";
import Footer from "../components/footer";
import NonIndexNav from "../components/non-index-nav";
import CarouselCode from "../components/carousel-code";

import IMG1 from "../assets/images/coding-contest/img1.jpg";
import IMG2 from "../assets/images/coding-contest/img2.jpg";
import IMG3 from "../assets/images/coding-contest/img3.jpg";

const CodingContestApp = () => {
  return (
    <div>
      <section className="wrapper section-hack">
        <NonIndexNav />
        <Container>
          <div className="text-center " style={{ paddingTop: "20%" }}>
            <Typical
              steps={[
                "Problem Solve",
                1000,
                "Code",
                1000,
                "Repeat",
                1000,
                "Coming Soon 2021",
                1000,
              ]}
              loop={1}
              wrapper="h1"
            />
          </div>
          <div className="row-txt">
            <Row className="mt-5">
              <Col sm={true} className="mb-5">
                <div className="text-center">
                  <h1>Coding Contest</h1>
                  <p>Coming Soon ~ 2021</p>
                  <Button variant="outline-light" href="/Sithum/#/register">
                    Register Now
                  </Button>
                </div>
              </Col>
              <Col sm={true}>
                <CarouselCode img1={IMG1} img2={IMG2} img3={IMG3} />
              </Col>
            </Row>
          </div>
        </Container>
      </section>
      <Footer />
    </div>
  );
};
export default CodingContestApp;
