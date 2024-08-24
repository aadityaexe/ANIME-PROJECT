import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Slider from "./components/Slider/Slider";
import AnimeGirls from "./components/AnimeGirls/AnimeGirls";
import { useState } from "react";
import PhotosColectionTitle from "./components/PhotosColectionTitle/PhotosColectionTitle";
import MommySlider from "./components/MommySlider/MommySlider";
import MommyPhotes from "./components/MommySlider/MoomyPhotes";
import WebPageCreater from "./components/WebPageCreater/WebPageCreater";
import Footer from "./components/Footer/Footer";
import Contact from "./components/Contact/Contact";
import FullSlider from "./components/Slider/FullSlider";
function App() {
  const [showMitsuri, setShowMitsuri] = useState(false);
  const [showWifu, setShowWifu] = useState(false);
  const [showMommy, setShowMommy] = useState(false);
  return (
    <div className="App overflow-hidden font-serif">
      <Navbar />
      <Hero />

      <PhotosColectionTitle
        showhuk={showMitsuri}
        sethuk={setShowMitsuri}
        titel={"MITSURI KANROJI"}
        subTitel={"These are the photos of Mitsuri"}
        Id={"MITSURI"}
      />
      {!showMitsuri ? <Slider /> : <FullSlider />}

      <PhotosColectionTitle
        showhuk={showMommy}
        sethuk={setShowMommy}
        titel={"Mommys"}
        subTitel={"These are some Milf"}
        Id={"MOMMY"}
      />
      {!showMommy ? <MommySlider /> : <MommyPhotes />}
      <PhotosColectionTitle
        showhuk={showWifu}
        sethuk={setShowWifu}
        titel={"PDF FILE"}
        subTitel={"These are some photos for PDF FILE"}
        Id={"WIFU"}
      />
      {showWifu ? <AnimeGirls /> : ""}
      <WebPageCreater />
      <Contact />
      <Footer />
    </div>
  );
}
export default App;
