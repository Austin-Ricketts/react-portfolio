import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navigator from "./components/Navigator";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Background from "./components/Background";

// import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <Navigator />
        <Background>
          <Route exact path="/" component={About} />
          <Route exact path="/portfolio" component={Portfolio} />
        </Background>
      </div>
    </Router>
  );
}

export default App;
