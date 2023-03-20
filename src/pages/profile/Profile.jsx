import React from "react";
import monkey from "../../img/monkey.jpg";
import lieutenant from "../../img/lieutenant.png";
import colonel from "../../img/colonel.png";
import admiral from "../../img/admiral.png";

const Profile = () => {
  return (
    <div
      className="prof"
      style={{
        display: "flex",
        height: "100vh",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        className="container"
        style={{
          height: "80vh",
          width: "70%",
          backgroundColor: "#303030",
          borderRadius: "12px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          className="part1"
          style={{ flex: "2", display: "flex", flexDirection: "row" }}
        >
          <div
            className="first"
            style={{
              flex: "2",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src={monkey}
              alt=""
              style={{
                height: "150px",
                width: "150px",
                borderRadius: "12px",
                objectFit: "cover",
              }}
            ></img>
          </div>
          <div
            className="second"
            style={{ flex: "3", display: "flex", flexDirection: "column" }}
          >
            <div
              className="top"
              style={{ flex: 1, display: "flex", alignItems: "center" }}
            >
              <span style={{ color: "#E50914" }}>Name-</span>
              <span style={{ color: "white" }}>Aakash</span>
            </div>
            <div
              className="middle"
              style={{ flex: 1, display: "flex", alignItems: "center" }}
            >
              <span style={{ color: "#E50914" }}>E-mail-</span>
              <span style={{ color: "white" }}>aakashrana000q@gmail.com</span>
            </div>
            <div
              className="bottom"
              style={{ flex: 1, display: "flex", alignItems: "center" }}
            >
              <span style={{ color: "#E50914" }}>Balance-</span>
              <span style={{ color: "white" }}>200</span>
            </div>
          </div>
          <div
            className="third"
            style={{ flex: "3", display: "flex", flexDirection: "column" }}
          >
            <div
              className="top"
              style={{ flex: 1, display: "flex", alignItems: "center" }}
            >
              <span style={{ color: "#E50914" }}>Matches Played-</span>
              <span style={{ color: "white" }}>100</span>
            </div>
            <div
              className="middle"
              style={{ flex: 1, display: "flex", alignItems: "center" }}
            >
              <span style={{ color: "#E50914" }}>Matches Won-</span>
              <span style={{ color: "white" }}>100</span>
            </div>
            <div
              className="bottom"
              style={{ flex: 1, display: "flex", alignItems: "center" }}
            >
              <span style={{ color: "#E50914" }}>Rank-</span>
              <span style={{ color: "white" }}>1</span>
            </div>
          </div>
        </div>
        <div
          className="part2"
          style={{ flex: "3", display: "flex", flexDirection: "row" }}
        >
          <div
            className="lieutenant"
            style={{
              flex: "1",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              backgroundColor: "#636363",
            }}
          >
            <span style={{ color: "white", marginBottom: "10px" }}>
              Lieutenant
            </span>
            <img src={lieutenant} style={{ height: "100px" }} alt=""></img>
            <button
              style={{
                height: "30px",
                width: "100px",
                backgroundColor: "#E50914",
                outline: "none",
                borderRadius: "12px",
                cursor: "pointer",
              }}
            >
              Mint
            </button>
            <button
              style={{
                height: "30px",
                width: "100px",
                backgroundColor: "#595958",
                marginTop: "10px",
                outline: "none",
                borderRadius: "12px",
                cursor: "pointer",
              }}
            >
              Switch
            </button>
          </div>
          <div
            className="colonel"
            style={{
              flex: "1",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <span style={{ color: "white", marginBottom: "10px" }}>
              Colonel
            </span>
            <img
              src={colonel}
              style={{ height: "100px", marginBottom: "10px" }}
              alt=""
            ></img>
            <button
              style={{
                height: "30px",
                width: "100px",
                backgroundColor: "#E50914",
                outline: "none",
                borderRadius: "12px",
                cursor: "pointer",
              }}
            >
              Mint
            </button>
            <button
              style={{
                height: "30px",
                width: "100px",
                backgroundColor: "#595958",
                marginTop: "10px",
                outline: "none",
                borderRadius: "12px",
                cursor: "pointer",
              }}
            >
              Switch
            </button>
          </div>
          <div
            className="admiral"
            style={{
              flex: "1",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <span style={{ color: "white", marginBottom: "10px" }}>
              Admiral
            </span>
            <img
              src={admiral}
              style={{ height: "100px", marginBottom: "10px" }}
              alt=""
            ></img>
            <button
              style={{
                height: "30px",
                width: "100px",
                backgroundColor: "#E50914",
                outline: "none",
                borderRadius: "12px",
                cursor: "pointer",
              }}
            >
              Buy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
