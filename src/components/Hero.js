import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import styled from "styled-components";
const Container = styled.div`
  background: #e6efdd;
  width: 100%;
  padding-top: 100px;
  padding-bottom: 2em;
  font-family: "Roboto Slab";
  .carousel.carousel-slider .control-arrow {
    top: 50%;
    border-radius: 50px;
    height: 40px;
    position: absolute;
    padding-left: 15px;
    padding-left: 13px;
    padding-right: 10px;
    transform: translateY(-50%);
    margin-right: 2em;
    background: rgba(0, 0, 0, 0.2);
    z-index: 1;
    &:hover {
      background: rgba(0, 0, 0, 0.4);
    }
  }
  .control-prev {
    padding-left: 10px !important;
    padding-right: 13px !important;
    margin-left: 2em;
  }
  .slide {
    background: #e6f0dd;
  }
  .carousel-item {
    display: grid;
    grid-template-columns: 50% 50%;
  }
  .content {
    max-width: 450px;
    color: #383d41;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 25%;
    text-align: left;
  }
  .img {
    width: 100%;
    height: 500px;
    max-width: 700px;
  }
  h1 {
    font-size: 48px;
    margin-bottom: 0.5em;
  }
  .btn-fill {
    width: 150px;
  }
  @media only screen and (max-width: 1100px) {
    .carousel-item {
      display: grid;
      grid-template-columns: 100%;
    }
    .img {
      grid-row: 1/2;
      position: relative;
      left: 50%;
      transform: translateX(-50%);
    }
    .content {
      padding: 10px;
      position: relative;
      left: 50%;
      transform: translateX(-50%);
      align-items: center;
      margin-left: 0%;
    }
  }
`;
const Hero = () => {
  return (
    <Container>
      <Carousel
        showStatus={false}
        showThumbs={false}
        showArrows={true}
        showIndicators={false}
        transitionTime={1000}
        emulateTouch={true}
        infiniteLoop={true}
        autoPlay={true}
        interval={8000}
      >
        <div className="carousel-item">
          <div className="content">
            <h1
              data-sal="slide-up"
              data-sal-delay="300"
              data-sal-easing="ease"
              data-sal-duration="1000"
            >
              Wonder Herbs Dealer's Kit
            </h1>
            <p
              data-sal="slide-up"
              data-sal-delay="300"
              data-sal-easing="ease"
              data-sal-duration="1400"
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </p>
            <button
              className="btn-fill"
              data-sal="slide-up"
              data-sal-duration="1800"
              data-sal-delay="300"
              data-sal-easing="ease"
            >
              Discover
            </button>
          </div>
          <img src={require("../images/1.png")} alt="item" className="img" />
        </div>
        <div className="carousel-item">
          <div className="content">
            <h1
              data-sal="slide-up"
              data-sal-delay="300"
              data-sal-easing="ease"
              data-sal-duration="1000"
            >
              24 Wonder Herbs
            </h1>
            <p
              data-sal="slide-up"
              data-sal-delay="300"
              data-sal-easing="ease"
              data-sal-duration="1400"
            >
              Reduces risk of cancer and heart disease, relieves back pain and rheumatism. 
              Helps Boost immune system and prevents migranes.
            </p>
            <button
              className="btn-fill"
              data-sal="slide-up"
              data-sal-duration="1800"
              data-sal-delay="300"
              data-sal-easing="ease"
            >
              DISCOVER
            </button>
          </div>
          <img src={require("../images/2.png")} alt="item" className="img" />
        </div>
      </Carousel>
    </Container>
  );
};

export default Hero;
