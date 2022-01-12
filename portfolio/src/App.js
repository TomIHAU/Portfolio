import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import "./App.css";

import MainPage from "./components/MainPage";
import About from "./components/About";
import Contact from "./components/Contact";
import Work from "./components/Work";
import Edit from "./components/Edit";

import Particles from "react-tsparticles";
import { part } from "./components/particlesobj";

import { HiArrowLeft } from "react-icons/hi";

function App() {
  const links = [
    { link: "/work", title: "My Work" },
    { link: "/about", title: "About" },
    { link: "/contact", title: "Contact" },
  ];
  const [background, setBackground] = useState(0);

  const [particleRefresher, setParticleRefresher] = useState();

  useEffect(() => {
    setParticleRefresher(
      <Particles
        id="tsparticles"
        init={(main) => {}}
        loaded={(container) => {}}
        options={part[background]}
      />
    );
  }, [background]);

  const handleBackground = () => {
    background >= part.length - 1
      ? setBackground(0)
      : setBackground(background + 1);
  };

  const linkBack = (
    <Link className="back" to="/">
      <HiArrowLeft />
    </Link>
  );

  return (
    <BrowserRouter>
      {particleRefresher}

      <Routes>
        <Route
          path="/"
          element={
            <MainPage
              links={links}
              handleBackground={handleBackground}
              part={part}
            />
          }
        />
        <Route path="/about" element={<About linkBack={linkBack} />} />
        <Route path="/work" element={<Work linkBack={linkBack} />} />
        <Route path="/contact" element={<Contact linkBack={linkBack} />} />
        <Route path="/whatisthisplace" element={<Edit linkBack={linkBack} />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
