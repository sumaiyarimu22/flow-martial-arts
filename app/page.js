"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import OurTeam from "./components/OurTeam";
import GalleryCom from "./components/GalleryCom";
import Contact from "./components/Contact";

const HomePage = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="min-h-screen ">
      <div
        className="overflow-hidden "
        style={{
          backgroundImage: `url("https://images.pexels.com/photos/7991662/pexels-photo-7991662.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")`,
          height: "calc(100vh-5rem)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <HeroSection />
      </div>
      <About />
      <OurTeam />
      <GalleryCom />
      <Contact />
    </div>
  );
};

export default HomePage;
