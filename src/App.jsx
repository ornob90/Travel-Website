import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Destinations from "./components/Destinations";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import viteLogo from "/vite.svg";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Destinations />
    </>
  );
}

export default App;
