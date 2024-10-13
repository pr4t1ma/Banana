import { useState } from "react";
import "./App.css";
import "./index.css";
import Banner from "./Banner";
import Card from "./Card";
import Accordian from "./Accordia";
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
    <div className="">
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
      <Banner />

      <div>
        <Card
          title="Yello banana"
          img="https://as2.ftcdn.net/v2/jpg/01/62/34/03/1000_F_162340363_G8RrYxxLfu6k39ZiZHavrmcOYVzUn33t.jpg "
          text="this is a yellow banana which is very healthy and help to prevent the different disease s like heart abnd some dibatoes"
        />
        <Card
          title="Banana 2"
          text="her is the more text information about the bananaq. which is has more benifits and prevent the helth and the improve the living standards"
          img="https://static.toiimg.com/thumb/imgsize-125550,msid-98944347,width-375,height-210,resizemode-75/98944347.jpg"
        />
      </div>
      <Accordian
        header="Apple"
        text="Apple is red and green, which is healthy and have so many benifits to eat."
      />
      <Accordian
        header="Apple"
        text="Apple is red and green, which is healthy and have so many benifits to eat."
      />
      <Accordian
        header="Apple"
        text="Apple is red and green, which is healthy and have so many benifits to eat."
      />
    </div>
  );
}

export default App;
