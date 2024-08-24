import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import { Button } from "@mui/material";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const HomeSectionCard = ({ item }) => {
  return (
    <div className="cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden w-[15rem] mx-3 border">
      <div className="h-[13rem] w-[10rem]">
        <img
          src="https://www.ethnicplus.in/media/catalog/product/cache/1d5df636cf8c8988ea2d2c570bb7c21d/5/3/5330-dark-colour-7_53781889189_o1.jpg"
          alt="saree"
        />
      </div>
      <h3>{item}</h3>
      <div className="p-4">
        <h3 className="text-large font-medium text-grey-900">Green Saree</h3>
        <p className="mt-sm text-sm text-grey-400">
          Alluring Green Embroidered Tissue Silk Mehendi Wear Saree With Blouse
        </p>
      </div>
    </div>
  );
};

const HomeSectionCardCarousel = ({ Section_name }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: activeIndex,
    afterChange: (current) => setActiveIndex(current),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const items = [1, 1, 1, 1, 1, 1, 1, 1, 1].map((item, key) => (
    <HomeSectionCard key={key} item={key + item} />
  ));

  const prevIndex = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const nextIndex = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(activeIndex);
    }
  }, [activeIndex]);

  return (
    <div className="relative px-4 lg:px-8 border">
      <h3 className="text-2xl font-extrabold text-grey-800 py-3 text-left">
        {Section_name}
      </h3>
      <div className="relative p-5">
        <Slider ref={sliderRef} {...settings}>
          {items}
        </Slider>
        {activeIndex !== items.length - 1 && (
          <Button
            onClick={nextIndex}
            variant="contained"
            sx={{
              position: "absolute",
              top: "8rem",
              right: "0rem",
              transform: "translateX(-50%) rotate(90deg)",
              bgcolor: "white",
            }}
            aria-label="next"
          >
            <KeyboardDoubleArrowLeftIcon
              sx={{ transform: "rotate(-90deg)", color: "black" }}
            />
          </Button>
        )}
        {activeIndex !== 0 && (
          <Button
            onClick={prevIndex}
            variant="contained"
            sx={{
              position: "absolute",
              top: "8rem",
              left: "0rem",
              transform: "translateX(50%) rotate(-90deg)",
              bgcolor: "white",
            }}
            aria-label="prev"
          >
            <KeyboardDoubleArrowLeftIcon
              sx={{ transform: "rotate(-90deg)", color: "black" }}
            />
          </Button>
        )}
      </div>
    </div>
  );
};

export default HomeSectionCardCarousel;
