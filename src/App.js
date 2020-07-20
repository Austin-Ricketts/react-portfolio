import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Background from "./components/Background";


import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Background>
          <Route exact path="/" component={About} />
          <Route exact path="/portfolio" component={Portfolio} />
        </Background>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
