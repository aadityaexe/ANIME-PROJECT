import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Hero from "./components/Hero/Hero.jsx";
import Slider from "./components/Slider/Slider.jsx";
import FullSlider from "./components/Slider/FullSlider.jsx";
import MommyPhotes from "./components/MommySlider/MoomyPhotes.jsx";
import MommySlider from "./components/MommySlider/MommySlider.jsx";
import Contact from "./components/Contact/Contact.jsx";
import WebPageCreater from "./components/WebPageCreater/WebPageCreater.jsx";
import AnimeGirls from "./components/AnimeGirls/AnimeGirls.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Hero />,
      },
      {
        path: "/mitsuri",
        element: <Slider />,
      },
      {
        path: "/mitsuri-all",
        element: <FullSlider />,
      },
      {
        path: "/mommy",
        element: <MommySlider />,
      },
      {
        path: "/mommy-all",
        element: <MommyPhotes />,
      },
      {
        path: "/wifu",
        element: <AnimeGirls />,
      },
      {
        path: "/we",
        element: <WebPageCreater />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
