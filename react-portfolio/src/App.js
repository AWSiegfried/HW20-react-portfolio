import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./pages/About/about";
import Portfolio from "./pages/Portfolio/portfolio";
import Contact from "./pages/Contact/contact";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Wrapper from "./components/Wrapper/wrapper";
import Background from "./assets/images/guitarbody.png"
import Background2 from "./assets/images/0.png"
import Background3 from "./assets/images/guitarbody2.png"
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"




function App() {
  
  const [backgroundImage, changeBackground] = useState(Background);
  
  const styles = {
      mainpage: {
          background: "url(" + backgroundImage + ") no-repeat center center fixed",
          backgroundSize: "cover",
          overFlow: "scroll"
      }
  }

  return (
    <Router >
      <div style={{ ...styles.mainpage, 
        // height: "auto" 
        }}>
        <Navbar changeBackground = {changeBackground}/>
        <Wrapper>
          <Route exact path={["/", "/about"]} component={About} 
          onClick={() => changeBackground(Background2)}
          />
          {/* <Route exact path="/about" component={About} 
          onClick={() => changeBackground(Background2)}
          /> */}
          <Route exact path="/portfolio" component={Portfolio} 
          onClick={() => changeBackground(Background3)}
          />
          <Route exact path="/contact" component={Contact} 
          onClick={() => changeBackground(Background)}
          />

        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
