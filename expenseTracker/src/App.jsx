import { useState } from "react";
import { Header } from "./Components/header.jsx";
import "./App.css";
import "./index.css";

function App() {
  const [balance, setBalance] = useState();

  const handleBalanceChange = (e) => {
    setBalance(e.target.value);
  };

  return (
    <div className=" w-[400px] h-[500px] mx-auto mt-10 border-red-500 border-2 rouunded-lg shadow-lg">
      <div className="text-center">
        <Header />
      </div>
      <div className="text-left mt-5">
        <h1 className="text-xl font-bold pl-8">My Balance</h1>
        <div className="flex items-center pl-8 pt-2">
          <span className="text-lg font-bold">$</span>
          <input
            type="number"
            value={balance}
            onChange={handleBalanceChange}
            className="text-lg font-bold bg-transparent border-none outline-none w-32"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
