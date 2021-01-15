import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home/Home.js";
import About from "./pages/About/About";
import Portfolio from "./pages/Portfolio/Portfolio";
import Contact from "./pages/Contact/Contact";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Wrapper from "./components/Wrapper/Wrapper";
import Background from "./assets/images/guitarbody.png"

const styles = {
    main: {
        background: "url(" + Background + ")",
        webkitBackgroundSize: "cover",
        mozBackgroundSize: "cover",
        oBackgroundSize: "cover",
        backGroundSize: "cover",
        height: "500px"
    }
}

function App() {
  return (
    <Router >
      <div style = {styles.main}>
        <Navbar />
        <Wrapper>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/contact" component={Contact} />
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
