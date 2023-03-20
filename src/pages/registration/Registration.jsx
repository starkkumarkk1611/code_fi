import React, { useState, useEffect } from "react";
import { useWeb3Auth } from "../../hooks/useWeb3Auth";
import user from "../../schemas/user";
import redp from "../../img/redp.png";
const Registration = () => {
  const [pub, setPub] = useState(null);
  const {
    onLogin,
    onLogout,
    isLoggedIn,
    getPrefix,
    safeAuthSignInResponse,
    safeAuth,
  } = useWeb3Auth();
  const error = new Error("Did not match");
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (e.target[1].value != e.target[2].value) {
      throw error;
    }
    console.log("hey from handle");
    console.log(user);
    const logged = await onLogin();
    const dict = {
      name: e.target[0].value,
      password: e.target[1].value,
      email: e.target[3].value,
      // image: e.target[4].files[0],
    };
    setPub(dict);
  };
  useEffect(() => {
    console.log(isLoggedIn);
    if (isLoggedIn) {
      try {
        console.log(safeAuthSignInResponse.eoa);
        user().then((db) => {
          db.collection("userdata")
            .create([
              safeAuthSignInResponse.eoa,
              pub["name"],
              pub["password"],
              pub["email"],
            ])
            .then((res) => {
              console.log(res);
            });
        });
      } catch (error) {
        console.log(error);
      }
    }
  }, [pub]);
  return (
    <div
      className="register"
      style={{
        display: "flex",
        flexDirection: "row",
        height: "100vh",
      }}
    >
      <div
        className="col-1"
        style={{
          flex: "1",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h2>Sign Up</h2>
        <span
          style={{
            marginBottom: "50px",
          }}
        >
          Register and Enjoy the game
        </span>
        <form
          id="form"
          className="flex flex-col"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "start",
          }}
          onSubmit={handleSubmit}
        >
          <input
            style={{
              marginBottom: "10px",
              width: "350px",
              height: "30px",
              borderRadius: "8px",
              outline: "none",
              color: "black",
            }}
            type="text"
            placeholder="Username"
          />

          {/* <input
            style={{
              marginBottom: "10px",
              width: "350px",
              height: "30px",
              borderRadius: "8px",
              outline: "none",
              color: "black",
            }}
            type="text"
            placeholder="Password"
          />
          <input
            style={{
              marginBottom: "10px",
              width: "350px",
              height: "30px",
              borderRadius: "8px",
              outline: "none",
              color: "black",
            }}
            type="text"
            placeholder="Confirm password"
          /> */}
          <input
            style={{
              marginBottom: "10px",
              width: "350px",
              height: "30px",
              borderRadius: "8px",
              outline: "none",
              color: "black",
            }}
            type="text"
            placeholder="Email-id"
          />
          <input required style={{ display: "none" }} type="file" id="file" />
          <label
            htmlFor="file"
            style={{ display: "flex", alignItems: "center" }}
          >
            <img
              src={redp}
              style={{
                width: "30px",
                height: "30px",
                marginTop: "5px",
                marginRight: "10px",
                cursor: "pointer",
              }}
              alt=""
            />
            <span>Add an avatar</span>
          </label>
          <button
            className="btn"
            style={{
              backgroundColor: "#E50914",
              fontSize: "1em",
              marginTop: "20px",
              color: "white",
              borderRadius: "8px",
              width: "100px",
              height: "50px",
              marginLeft: "120px",
              cursor: "pointer",
            }}
          >
            Sign Up
          </button>
        </form>
      </div>
      <div
        className="col-2"
        style={{
          flex: "1",
          backgroundColor: "#E50914",
        }}
      >
        {/* <img src={bgImg} alt="" /> */}
      </div>
    </div>
  );
};

export default Registration;
