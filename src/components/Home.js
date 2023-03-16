import React from "react";
import Buttonp from "./Buttonp";
import LightSpeed from "react-reveal/LightSpeed";
import "./Home.css";
function Home() {
  return (
    <div className="food" id="home">
      <div className="content">
        <LightSpeed left>
          <h1 className="font">Online Food Delivery Website</h1>
        </LightSpeed>
        <p className="fonts">
          Retail food delivery is a courier service in which a restaurant,
          store, or independent food-delivery company delivers food to a
          customer. An order is typically made either through a restaurant or
          grocer's website or mobile app, or through a food ordering company.
          The delivered items can include entrees, sides, drinks, desserts, or
          grocery items and are typically delivered in boxes or bags.
        </p>
        {/* <Buttonp/> */}
      </div>
    </div>
  );
}
export default Home;
