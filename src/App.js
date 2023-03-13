import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Counter from "./components/Counter";
import Footer from "./components/Footer";
import "./index.css";
function App() {
  const title = "Andrea Gates";
  
  return (
    <>
      <Header title={title} />

      <Counter />

      <Main title={title} />
      <Footer />
    </>
  );
}

export default App;
