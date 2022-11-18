import React from "react";
import Corpo from "./Corpo";
import NavBar from "./NavBar";
import FundoMobile from "./FundoMobile";

export default function App() {
  return (
    <React.Fragment>
      <NavBar />
      <Corpo />
      <FundoMobile />
    </React.Fragment>
  );
}
