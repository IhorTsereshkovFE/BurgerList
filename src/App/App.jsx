import { useState } from "react";
import CreateMenu from "../Components/CreateMenu/CreateMenu";
import data from "../data/data.json";
import menu from "../data/menu.json";
import Header from "../Components/Header/Header";
import Nav from "../Components/Nav/Nav";
import Main from "../Components/Main/Main";
import styleApp from "./App.module.scss";

function App() {
  return (
    <div className={styleApp.container}>
      <Header />
      <Nav item={menu} />
      <Main item={data} />
    </div>
  );
}

export default App;
