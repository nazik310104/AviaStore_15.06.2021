import React, { useContext, useEffect, useState } from "react";
import HeroSlider from "../../components/HeroSlider/";
import ProductsList from "../../components/ProductsList";
import ProductsPagination from "../../components/ProductsPagination";
import { storeContext } from "../../contexts/StoreContext";
import MainLayout from "../../Layouts/MainLayout";
import HeroImg from "../../assets/images/barselona.aspx";
import HeroImg2 from "../../assets/images/Colosseum-Rome.jpg";
import HeroVideo from "../../components/HeroVideo/HeroVideo";
import { Button } from "../../components/Button/Button";
import "../../components/HeroSection/HeroSection.css";
export default function MainPage() {
  const { products, fetchProducts, total } = useContext(storeContext);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchProducts(page - 1);
  }, [page]);

  const heroSlider = [
    { src: HeroImg, title: "hero", text: "Barselona" },
    { src: HeroImg2, title: "hero", text: "Rome" },
  ];

  return (
    <MainLayout>
      {/* <HeroSlider slider={heroSlider} /> */}
      <div className="hero-container">
        <video src="/videos/video-1.mp4" autoPlay loop muted />
        <h1>ADVENTURE AWAITS</h1>
        <p>What are you waiting for?</p>
        <div className="hero-btns">
          <Button
            className="btns"
            buttonStyle="btn--outline"
            buttonSize="btn--large"
          >
            GET STARTED
          </Button>
          <Button
            className="btns"
            buttonStyle="btn--primary"
            buttonSize="btn--large"
            onClick={console.log("hey")}
          >
            WATCH TRAILER <i className="far fa-play-circle" />
          </Button>
        </div>
      </div>
      {/* <HeroVideo /> */}
      <ProductsList products={products} />
      <ProductsPagination
        setPage={setPage}
        page={page}
        count={Math.ceil(total / 4)}
      />
    </MainLayout>
  );
}
