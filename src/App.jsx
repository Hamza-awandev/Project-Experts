import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./navbar";
import Heading from "./heading";
import Aboutus from "./aboutus";
import Aikuji from "./Aikuji";
import Mackenzie from "./Mackenzie";
import Smilimedia from "./Smilimedia";
import Blit from "./Blit";
import Developer from "./developer";
import Review from "./review";
import Work from "./work";
import Get from "./get";
import Footer from "./footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Heading />
      <Aboutus />
      <Aikuji />
      <Mackenzie />
      <Smilimedia />
      <Blit />
      <Developer />
      <Review />
      <Work />
      <Get />
      <Footer />
    </>
  );
}

export default App;
