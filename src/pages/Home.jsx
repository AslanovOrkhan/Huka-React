import React from "react";
import Button from "../components/Button";
const Home = () => {
  return (
    <div>
      <div className="homeContainer">
        <div className="homeText">
          <h4>Hookah Lounge</h4>
          <h2>The Place Full of Hookah</h2>
          <span>
            We are a Shisha Lounge, Bar and Mediterranean Restaurant based in
            Oxford. Don’t miss out on this exotic fusion of cultures!
          </span>
          <Button />
          <div className="count">
            <div>
              <h2>$10</h2>
              <p>Shisha in august</p>
            </div>
            <div>
              <h2>10+</h2>
              <p>Years of experience</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
