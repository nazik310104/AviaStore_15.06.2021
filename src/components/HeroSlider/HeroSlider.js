import React from "react";
import { Carousel } from "react-responsive-carousel";

import classes from "./heroSlider.module.css";
import "react-responsive-carousel/lib/styles/carousel.css";

export default function HeroSlider({ slider }) {
  return (
    <Carousel
      className={classes.sliderWrapper}
      showArrows={true}
      showThumbs={false}
      infiniteLoop={true}
      autoFocus={true}
      autoPlay={true}
      interval={7000}
    >
      {slider.map((image) => (
        <div className={classes.heroImg}>
          <p
            style={{
              fontSize: "40px",
              position: "absolute",
              color: "white",
              fontWeight: "bold",
              margin: "40px",
            }}
          >
            {image.text}
          </p>
          <img src={image.src} alt={image.title} />
        </div>
      ))}
    </Carousel>
  );
}
