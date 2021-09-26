import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ImageSlider() {
  let settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <Carousal {...settings}>
      <Wrap>
        <a href="">
          <img alt="" src="images/slider-badging.jpg" />
        </a>
      </Wrap>
      <Wrap>
        <a href="">
          <img alt="" src="images/slider-badag.jpg" />
        </a>
      </Wrap>
      <Wrap>
        <a href="">
          <img alt="" src="images/slider-scale.jpg" />
        </a>
      </Wrap>
      <Wrap>
        <a href="">
          <img alt="" src="images/slider-scales.jpg" />
        </a>
      </Wrap>
    </Carousal>
  );
}

export default ImageSlider;

const Carousal = styled(Slider)`
  ul li button {
    &:before {
      font-size: 10px;
      color: rgb(150, 150, 171);
    }
  }
  li.slick-active button::before {
    color: white;
  }

  .slick-list {
    overflow: visible;
  }

  button {
    z-index: 1;
  }
`;

const Wrap = styled.div`
  cursor: pointer;
  img {
    border: 4px solid transparent;
    border-radius: 10px;
    width: 100%;
    height: 100%;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition-duration: 500ms;
    &:hover {
      border: 4px solid rgba(249, 249, 249, 0.8);
    }
  }
`;
