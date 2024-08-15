/* eslint-disable react/jsx-no-undef */
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Slider from "./components/Slider/Slider";
import Title from "./components/Title/Title";
import AnimeGirls from "./components/AnimeGirls/AnimeGirls";
import { useState } from "react";
import PhotosColectionTitle from "./components/PhotosColectionTitle/PhotosColectionTitle";
import MommySlider from "./components/MommySlider/MommySlider";
function App() {
  const [showWifu, setShowWifu] = useState(false);
  const [showMommy, setShowMommy] = useState(false);
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Title title={"Slider"} subTitle={"Our Favorite Items"} />
      <Slider />
      <PhotosColectionTitle
        showhuk={showMommy}
        sethuk={setShowMommy}
        titel={"Mommys"}
        subTitel={"These are some Milf"}
      />
      <MommySlider />
      <PhotosColectionTitle
        showWifu={showWifu}
        setShowWifu={setShowWifu}
        titel={"Wifu"}
        subTitel={"These are some hot wifu"}
      />
      <PhotosColectionTitle showhuk={showWifu} sethuk={setShowWifu} />
      {showWifu ? <AnimeGirls /> : ""}
    </div>
  );
}
export default App;
