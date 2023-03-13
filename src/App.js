import React from "react";
// import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from "./components/Header";
import Main from "./components/Main";
import HomePage from './pages/HomePage';
import ContactPage from "./pages/ContactPage";
import AboutPage from './pages/AboutPage';
import Counter from "./components/Counter";
import Footer from "./components/Footer";
import "./index.css";

function App() {
  const title = "Andrea Gates";
  
  return (
    <>
      <Header title={title} />
      <Main title={title} />

      {/* <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/contact" component={ContactPage} />
        </Switch>
      </BrowserRouter> */}

      <Counter />
      <Footer />
    </>
  );
}


export default App;
