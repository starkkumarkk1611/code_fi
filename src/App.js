import logo from "./logo.svg";
import "./App.css";
import Routes from "./navigation";
import { Web3AuthProvider } from "./hooks/useWeb3Auth";
import { useContext, useEffect } from "react";
function App() {
  return (
    <div className="App">
      <Web3AuthProvider>
        <Routes />
      </Web3AuthProvider>
    </div>
  );
}

export default App;
