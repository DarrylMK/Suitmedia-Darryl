import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/navbar";
import Banner from "./components/banner";
import Container from "./components/container";

function App() {
  const [menu, setMenu] = useState("Ideas");
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://suitmedia-backend.suitdev.com/api/ideas?page[number]=1&page[size]=10&append[]=small_image&append[]=medium_image&sort=-published_at")
      .then((response) => response.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <div className="App">
      <Navbar currentMenu={menu} setCurrentMenu={setMenu} />
      <Banner menu={menu} />
      <Container />
    </div>
  );
}

export default App;
