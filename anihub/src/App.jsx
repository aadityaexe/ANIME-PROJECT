import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Slider from "./components/Slider/Slider";
import Title from "./components/Title/Title";
import AnimeGirls from "./components/AnimeGirls/AnimeGirls";
import Wifu from "./components/Wifu/Wifu";
import { useState } from "react";

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
          <Wifu showWifu={showWifu} setShowWifu={setShowWifu} />
        </>
      ) : (
        <>
          <Wifu />
          <AnimeGirls />
        </>
      )}
    </div>
  );
}

export default App;
