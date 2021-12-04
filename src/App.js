import "./App.css";
import MainPage from "./components/MainPage";
import styles from "../src/components/MainPage.module.css";
import { Fragment } from "react";
import DropDownMenu from "./components/DropdownMenu";
import GameFps from "./components/GameFps";
import FpsScore from "./components/FpsScore";

function App() {
  return (
    <Fragment>
      <MainPage />
      <DropDownMenu />
      <GameFps />
      <FpsScore />
    </Fragment>
  );
}

export default App;
