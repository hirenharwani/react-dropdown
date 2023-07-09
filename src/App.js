import React from "react";
import DropDown from "./components/dropDown";
import "./assets/css/style.scss";
import { options } from "./data/options";

class App extends React.Component {
  render() {
    return <DropDown options={options} />;
  }
}

export default App;
