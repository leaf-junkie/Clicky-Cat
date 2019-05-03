import React from "react";
import Navbar from "./components/Navbar/index";
import Jumbotron from "./components/Jumbotron/index";
import { Container } from "./components/Grid";
import Footer from "./components/Footer/index";

class App extends React.Component {
  render() {
    return(
      <div>
        <Jumbotron/>
        <Navbar/>
        <Container />
        <Footer/>
      </div>
    )
  }
}

export default App;