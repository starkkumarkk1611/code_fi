import React from "react";
import Navbar from "../../components/navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      {/* <img src={process.env.PUBLIC_URL + 'images/HeroBG.jpg'} alt="" /> */}
      {/* <video autoPlay muted loop id="myVideo" style={{ position: "absolute" }}>
                    <source src={process.env.PUBLIC_URL + "videos/HeroBG.mp4"} type="video/mp4" />
               </video> */}
      <div
        className="hero-section"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <span style={{ fontSize: "30rem", color: "#eb0c1c" }}>&lt;</span>
        <span style={{ fontSize: "10rem", color: "#fff" }}>Code</span>
        <span style={{ fontSize: "20rem", color: "#1f1f1f" }}>/</span>
        <span style={{ fontSize: "10rem", color: "#fff" }}>Fi</span>
        <span style={{ fontSize: "30rem", color: "#eb0c1c" }}>&gt;</span>
      </div>
    </div>
  );
};

export default Home;
