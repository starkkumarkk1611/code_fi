import React from 'react';

const Loader = () => {
     return (
          <div display={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
               <div className="hero-section" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <span style={{ fontSize: "30rem", color: "#eb0c1c" }}>&lt;</span>
                    <span style={{ fontSize: "10rem", color: "#fff" }}>Code</span>
                    <span style={{ fontSize: "20rem", color: "#1f1f1f" }}>/</span>
                    <span style={{ fontSize: "10rem", color: "#fff" }}>Fi</span>
                    <span style={{ fontSize: "30rem", color: "#eb0c1c" }}>&gt;</span>
               </div>
               <div className="spinner-container">
                    <div className="loading-spinner"></div>
               </div>

          </div>
     )
}

export default Loader