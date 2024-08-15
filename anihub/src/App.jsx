/* eslint-disable react/jsx-no-undef */
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Slider from "./components/Slider/Slider";
import Title from "./components/Title/Title";
import AnimeGirls from "./components/AnimeGirls/AnimeGirls";
import { useState } from "react";
import PhotosColectionTitle from "./components/PhotosColectionTitle/PhotosColectionTitle";

function App() {
  const [showWifu, setShowWifu] = useState(false);

  return (
    <div className="App">
      <Navbar />
      {!showWifu ? (
        <>
          <Hero />
          <Title title={"Slider"} subTitle={"Our Favorite Items"} />
          <Slider />
          <PhotosColectionTitle showWifu={showWifu} setShowWifu={setShowWifu} />
        </>
      ) : (
        <>
          <PhotosColectionTitle showWifu={showWifu} setShowWifu={setShowWifu} />
          <AnimeGirls />
        </>
      )}
    </div>
  );
}
export default App;
