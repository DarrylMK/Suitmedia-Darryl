import { useState } from "react";
import "./App.css";
import Navbar from "./components/navbar";
import Banner from "./components/banner";
import Container from "./components/container";

function App() {
  const [menu, setMenu] = useState("Ideas");
  

  return (
    <div className="App">
      <Navbar currentMenu={menu} setCurrentMenu={setMenu} />
      <Banner menu={menu} />
      <Container />
    </div>
  );
}

export default App;
