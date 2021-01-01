import React from "react";
import { Carousel } from "react-bootstrap";

const CarouselCode = (props) => {
  return (
    <Carousel className="carousel-code">
      <Carousel.Item interval={1000}>
        <img className="d-block w-100" src={props.img1} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img className="d-block w-100" src={props.img2} alt="Third slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={props.img3} alt="Third slide" />
      </Carousel.Item>
    </Carousel>
  );
};
export default CarouselCode;
