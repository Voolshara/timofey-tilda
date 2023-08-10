import React from "react";
import { observer } from "mobx-react-lite";

import HelloBlock from "./components/HelloBlock";
import About from "./components/About";
import Directions from "./components/Directions";
import Advantage from "./components/Advantage";
import Contacts from "./components/Contacts";

function App() {
  return (
    <div className="flex justify-center items-center font-regular flex-col ">
      <HelloBlock />
      <About />
      <Directions />
      <Advantage />
      <Contacts />
    </div>
  );
}

export default observer(App);
