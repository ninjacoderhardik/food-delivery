import React from "react";
import Home from "./Home";
import Services from "./services/Services";
import ContactUs from "./contactus/ContactUs";
import Navbar from "../navbar/Navbar";
const HomePage = () => {
  return (
    <div>
      <Navbar/>
      <Home />
      <Services />
      <ContactUs />
      </div>
  );
};
export default HomePage;
