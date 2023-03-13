import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
     return (
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "3rem", padding: "1rem" }}>
               <div className='nav-item' >
                    <Link to="/">HOME</Link>
               </div>
               <div className='nav-item'>
                    <Link to="about">ABOUT US</Link>
               </div>
               <div style={{ display: 'flex', flexDirection: "column" }}>
                    <div style={{ color: "#eb0c1c", margin: "0.5rem", fontWeight: "600", fontSize: "2rem" }}> <span>Code</span> Fi</div>
                    <button className='connect_wallet_btn' style={{ background: "#eb0c1c", padding: "0.5rem 1rem", border: "none", fontSize: "1rem", fontWeight: "600" }}>Connect Wallet</button>
               </div>
               <div className='nav-item'>
                    <Link>HELP</Link></div>
               <div className='nav-item'> <Link>CONTACT US</Link></div>

          </div>
     )
}

export default Navbar