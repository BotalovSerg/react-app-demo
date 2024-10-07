import { useState } from "react";
import logo from "../logo.svg";

export default function Header() {
  const [now, setNow] = useState(new Date());
  setInterval(() => setNow(new Date()), 1000);

  return (
    <header className="App-header">
      <img className="App-logo" src={logo} alt="Image" />
      <h3>My site</h3>      
      <span>Time now: {now.toLocaleTimeString()}</span>
    </header>
  );
}
