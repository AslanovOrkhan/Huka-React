import React from "react";
import Button from "../components/Button";
import ShishaTasts from "../components/ShishaTasts";
import CustomerCommentCard from "../components/CustomerCommentCard";
import AboutCard from "../components/AboutCard";
import Footer from "../components/Footer";
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
      <div className="container AboutEnvironment">
        <div className="bgLeftImage">
          <img src={require("../assets/u3t4ybgt4.png")} alt="" />
        </div>
        <AboutCard />
        <div className="bgRightImage">
          <img src={require("../assets/43ut8hgt4.png")} alt="" />
        </div>
      </div>
      <div className="ShishaTasts">
        <ShishaTasts
          image={require("../assets/oerugbjrg.png")}
          title="Double Apple"
        />
        <ShishaTasts
          image={require("../assets/9urehgb9rg.png")}
          title="Orange mint"
        />
        <ShishaTasts
          image={require("../assets/pi3u5htvt.png")}
          title="Kiwi mint"
        />
        <ShishaTasts
          image={require("../assets/rughbrg.png")}
          title="Fruit mix"
        />
      </div>
      <div className="ProductContainer">
        <div className="product-item">
          <img src={require("../assets/i5v6h-1.png")} alt="" />
        </div>
        <div className="product-item">
          <img src={require("../assets/4uyvh6i46v.png")} alt="" />
        </div>
        <div className="product-item">
          <img src={require("../assets/i34u6hv.png")} alt="" />
        </div>
        <div className="product-item">
          <img src={require("../assets/3y5gcui3.png")} alt="" />
        </div>
        <div className="product-item">
          <img src={require("../assets/5y3ug5c.png")} alt="" />
        </div>
        <div className="product-item">
          <img src={require("../assets/t4cfyc.png")} alt="" />
        </div>
      </div>
      <div className="ClientThink container">
        <div className="BgImage">
          <img src={require("../assets/ryheryj.png")} alt="" />
        </div>
        <div className="title">
          <h4>Testimonials</h4>
          <span>What People Think About Us</span>
        </div>
        <div className="CommentCardItem">
          <CustomerCommentCard
            image={require("../assets/riyxgd.png")}
            name="Zoe Jim"
          />
          <CustomerCommentCard
            image={require("../assets/oeuhr.png")}
            name="Mark Rojers"
          />
          <CustomerCommentCard
            image={require("../assets/u3y4g.png")}
            name="James Swan"
          />
        </div>
        <div className="BgRightImage">
          <img src={require("../assets/5yhu5yh.png")} alt="" />
        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
