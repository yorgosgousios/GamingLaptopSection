import "./App.css";
import MainPage from "./components/MainPage";
import { Fragment } from "react";
import DropDownMenu from "./components/DropdownMenu";
import GameFps from "./components/GameFps";
import FpsScore from "./components/FpsScore";
import LastSection from "./components/LastSection";
import { useEffect, useState } from "react";

function App() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const fetchGames = async () => {
      const response = await fetch(
        "https://kotsovolos.blob.core.windows.net/data/assignment/benchmark.json"
      );
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      const responseData = await response.json();
      console.log();

      const transformedGames = responseData[0].Games;
      // console.log(Object.keys(transformedGames));
      setGames(transformedGames);
    };

    fetchGames();
  }, []);
  return (
    <Fragment>
      <MainPage />
      <DropDownMenu games={games} />
      <GameFps />
      <FpsScore />
      <LastSection />
    </Fragment>
  );
}

export default App;
