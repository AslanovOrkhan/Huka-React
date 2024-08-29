import React from "react";
import Button from "./Button";

const AboutCard = () => {
  return (
    <div>
      <div className="aboutCardContainer">
        <div className="aboutImage">
          <img src={require("../assets/about.png")} alt="" />
        </div>
        <div className="content">
          <h3>About Us</h3>
          <span>Truly Relaxing and Authentic Environment</span>
          <p>
            Don’t miss out on this exotic fusion of cultures! We serve dishes
            from all over the Mediterranean, including Turkey, Greece, Spain,
            and Italy. The chefs who created these wonders have decades of
            experience working in these lands. The kitchen is gorgeous in every
            way.
          </p>
          <Button />
        </div>
      </div>
    </div>
  );
};

export default AboutCard;
