import React from "react";
import "./globals.css";
import Header from "./header";
import TopCardList from "./top-card-list";
import Switch from "./switch";
import Overview from "./overview";

function App() {
  return (
    <>
      <Header>
        <Switch />
      </Header>
      <TopCardList />
      <Overview />
    </>
  );
}

export default App;
