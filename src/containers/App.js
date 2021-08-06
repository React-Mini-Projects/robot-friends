import React, { useState, useEffect } from "react";
import "tachyons";
import CardList from "../components/CardList/CardList";
import SearchBox from "../components/SearchBox/SearchBox";
import "./App.css";
import Scroll from "../components/Scroll/Scroll";
import Footer from "../components/Footer/Footer";
function App() {
  const [robots, setRobots] = useState([]);
  const [searchField, setSearchField] = useState("");

  useEffect(() => {
    fetch("http://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setRobots(users))
      .catch((err) => console.log(err));
  }, []);

  const onSearchChange = (event) => {
    setSearchField(event.target.value);
  };

  const filteredRobots = robots.filter((robot) => {
    return robot.name.toLowerCase().includes(searchField.toLowerCase());
  });

  return !robots.length ? (
    <h2>Loading</h2>
  ) : (
    <div className="App tc">
      <h1 className="f1">Robo Friends</h1>
      <SearchBox searchChange={onSearchChange} />
      <Scroll>
        <CardList robots={filteredRobots} />
      </Scroll>
      <Footer/>
    </div>
  );
}

export default App;
