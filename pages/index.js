import Head from "next/head";
import styles from "../styles/Home.module.css";
import HeroImage from "../components/carousel";
import Header from "../components/header/header";
import MainCarousel from "../components/carousel";
import About from "../components/about/about";
import Portfolio from "../components/Portfolio/portfolio";
import Contact from "../components/contact/contact";
import Footer from "../components/footer/footer";
import Social from "../components/social/social";
import dynamic from "next/dynamic";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

//const MainCarousel = dynamic(() => import("../components/carousel"));

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <>
      <Header />
      <MainCarousel />
      <div data-aos="fade-right" id="about">
        <About />
      </div>
      <div data-aos="fade-left">
        <Portfolio />
      </div>
      <div data-aos="fade-right" id="contact">
        <Contact />
        <Social />
      </div>

      <Footer />
    </>
  );
}
