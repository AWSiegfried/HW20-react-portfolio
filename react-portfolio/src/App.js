import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./pages/About/about";
import Portfolio from "./pages/Portfolio/portfolio";
import Contact from "./pages/Contact/contact";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Wrapper from "./components/Wrapper/wrapper";
import Background from "./assets/images/guitarbody.png"
import "bootstrap/dist/css/bootstrap.min.css";


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
          <Route exact path="/" component={About} />
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
