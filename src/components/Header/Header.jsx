import { useState } from "react";
import "./Header.css"

export default function Header() {
  const [now, setNow] = useState(new Date());
  setInterval(() => setNow(new Date()), 1000);

  return (
    <header className="App-header">
      <h3>My site</h3>      
      <span>Time now: {now.toLocaleTimeString()}</span>
    </header>
  );
}
