import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Slider from "./components/Slider/Slider";
import Title from "./components/Title/Title";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Title title={"Slider"} subTitle={"Our Favorite Items"} />
      <Slider />
    </div>
  );
}

export default App;
