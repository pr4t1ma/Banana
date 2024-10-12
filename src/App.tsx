import { useState } from "react";
import "./App.css";
const items = [
  { label: "name", href: "./" },
  { label: "about", href: "./about" },
  { label: "services", href: "./services" },
  { label: "portfolio", href: "./portfolio" },
  { label: "contact", href: "./contact" },
  { label: "blog", href: "./blog" },
];

function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <h2>Here is the my Project name is called banana</h2>
      <div className="menu">
        <ul>
          {isOpen ? (
            <div>
              <button onClick={() => setIsOpen(false)}>Close</button>

              {items.map((item) => {
                return <li>{item.label}</li>;
              })}
            </div>
          ) : (
            <button onClick={() => setIsOpen(true)}>Open</button>
          )}
        </ul>
      </div>
    </div>
  );
}

export default App;
