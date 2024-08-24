import React from "react";
import Nav from "../Components/Navigation/Nav";
import HomeCarousel from "../Components/HomeCarousel/HomeCarousal";
import HomeSectionCardCarousel from "../Components/HomeSectionCard/HomeSectionCard";
import Footer from "../Components/Footer/Footer";

const HomePage = ({ data }) => {
  return (
    <div>
      <div>
        <HomeCarousel></HomeCarousel>
      </div>
      <div className="space-y-10 py-20 flex flex-col justify-center px-5 lg:px-1">
        <HomeSectionCardCarousel
          Section_name={"Kurta"}
        ></HomeSectionCardCarousel>
        <HomeSectionCardCarousel
          Section_name={"Saree"}
        ></HomeSectionCardCarousel>
        <HomeSectionCardCarousel
          Section_name={"Legha"}
        ></HomeSectionCardCarousel>
      </div>
    </div>
  );
};

export default HomePage;
