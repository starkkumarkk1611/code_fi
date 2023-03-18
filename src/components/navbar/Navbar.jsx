import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useWeb3Auth } from "../../hooks/useWeb3Auth";
import { EthHashInfo } from "@safe-global/safe-react-components";
import user from "../../schemas/user";
const Navbar = () => {
  const { onLogin, onLogout, isLoggedIn, getPrefix, safeAuthSignInResponse } =
    useWeb3Auth();
  const [pub, setPub] = useState("");

  useEffect(() => {
    if (isLoggedIn) {
      try {
        console.log(safeAuthSignInResponse.eoa);
        user().then((db) => {
          db.collection("userdata")
            .create([safeAuthSignInResponse.eoa])
            .then((res) => {
              console.log(res);
            });
        });
      } catch (error) {
        console.log(error);
      }
    }
  }, [pub]);

  const handleLogin = async () => {
    console.log("hey from handle");
    console.log(user);
    const logged = await onLogin();
    setPub("addr");
  };
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "3rem",
        padding: "1rem",
        height: "10vh",
      }}
    >
      <div className="nav-item">
        <Link to="/">HOME</Link>
      </div>
      <div className="nav-item">
        <Link to="about">ABOUT US</Link>
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div
          style={{
            color: "#eb0c1c",
            margin: "0.5rem",
            fontWeight: "600",
            fontSize: "2rem",
          }}
        >
          {" "}
          <span>Code</span> Fi
        </div>
        {isLoggedIn ? (
          <div>
            {safeAuthSignInResponse.eoa}{" "}
            <button
              className="connect_wallet_btn"
              style={{
                background: "#eb0c1c",
                padding: "0.5rem 1rem",
                border: "none",
                fontSize: "1rem",
                fontWeight: "600",
              }}
              onClick={onLogout}
            >
              Logout
            </button>{" "}
          </div>
        ) : (
          <button
            className="connect_wallet_btn"
            style={{
              background: "#eb0c1c",
              padding: "0.5rem 1rem",
              border: "none",
              fontSize: "1rem",
              fontWeight: "600",
            }}
            onClick={handleLogin}
          >
            Login
          </button>
        )}
      </div>
      <div className="nav-item">
        <Link to="arena"> 1 VS 1 IDE</Link>
      </div>
      <div className="nav-item">
        {" "}
        <Link>CONTACT US</Link>
      </div>
      {safeAuthSignInResponse?.eoa && (
        <div>
          {/* <div address={safeAuthSignInResponse.eoa} showCopyButton showPrefix prefix={getPrefix(safeAuthSignInResponse.chainId)} /> */}
        </div>
      )}
    </div>
  );
};

export default Navbar;
