import React from "react";
import Header from "../components/Layout/Header";
import Hero from "../components/Route/Hero/Hero"
import Categoreis from "../components/Route/Categoreis/Categoreis";
import BestDeals from "../components/Route/BestDeals/BestDeals";
import FeaturedProduct from "../components/Route/FeaturedProduct/FeaturedProduct";
import Events from "../components/Events/Events";
import Sponsored from "../components/Route/Sponsored/Sponsored";
import Footer from "../components/Layout/Footer.jsx";

const HomePage = () => {
  return (
    <div>
      <Header activeHeading={1} />
      <Hero/>
      <Categoreis/>
      <BestDeals/>
      <Events/>
      <FeaturedProduct/>
      <Sponsored/>
      <Footer/>
    </div>
  );
};

export default HomePage;
