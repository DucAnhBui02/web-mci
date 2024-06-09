"use client";

import Navbar from "./Components/Navbar/Navbar";
import About from "./Components/About/About";
import Job from "./Components/Job/Job";
import Advance from "./Components/Advance/Advance";
import Knowledge from "./Components/Knowledge/Knowledge";
import Connect from "./Components/Connect/Connect";
import Trend from "./Components/Trend/Trend";
import Footer from "./Components/Footer/Footer";
import Banner from "./Components/Banner/Banner";
import Solution from "./Components/Solution/Solution";
import Navigation from "./Components/Navigation/Navigation";
export default function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <Solution />
      <Navigation />
      <About />
      <Job />
      <Advance />
      <Knowledge />
      <Connect />
      <Trend />
      <Footer />
      <div className="py-[30px] flex items-center justify-center font-bold">
        Copyright © 2023 MCI Solutions
      </div>
    </>
  );
}
