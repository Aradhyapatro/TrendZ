import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { HomeCarouselData } from "./HomeCarouselData";

const items = HomeCarouselData.map((item) => (
  <img className="cursor-pointer" src={item.image} alt={item.path} />
));

const HomeCarousel = () => (
  <div className="relative z-2">
    <AliceCarousel
      items={items}
      autoPlay
      infinite
      autoPlayInterval={1800}
      disableButtonsControls
    />
  </div>
);

export default HomeCarousel;
