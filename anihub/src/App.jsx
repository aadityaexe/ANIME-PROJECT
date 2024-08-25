/* eslint-disable no-unused-vars */
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Contact from "./components/Contact/Contact";
import { Outlet } from "react-router-dom";
function App() {
  return (
    <div className="App overflow-hidden font-serif">
      <header>
        <Navbar />
      </header>
      <Outlet />

      <Footer />
    </div>
  );
}
export default App;
