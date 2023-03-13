import React, { useState } from "react";
import Nav from "./Nav";

function Header(props) {
  return (
    <header>
      <Nav title={props.title} />
    </header>
  );
}

export default Header;
