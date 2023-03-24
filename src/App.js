import React, { useState } from "react";
// import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from "./components/Header";
// import Footer from "./components/StickyFooter";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Links from "./pages/Links";
import Background from "./components/Background";
import OpeningAnima from "./components/OpeningAnima";
import "./components/OpeningAnima.css";
import "./index.css";

function App() {
  const title = "Andrea Gates";
  const [page, setPage] = useState("home");

  const handlePageView = () => {
    // eslint-disable-next-line default-case
    switch (page) {
      case "home":
        return <Home title={title} />;
      case "contact":
        return <Contact />;
      case "about":
        return <About />;
      case "portfolio":
        return <Portfolio />;
      case "links":
        return <Links />;
    }
  };

  return (
    <div className="App">
      <OpeningAnima />
      <Header title={title} setPage={setPage} />
      {handlePageView()}
      <Background />
    </div>
  );
}

export default App;
