import React from "react";
import Navbar from "./components/Navbar/index";
import Jumbotron from "./components/Jumbotron/index";
import Grid from "./components/Grid/index";
import Footer from "./components/Footer/index";

class App extends React.Component {
  render() {
    return(
      <div>
        <Jumbotron/>
        <Navbar/>
        <Grid/>
        <Footer/>
      </div>
    )
  }
}

export default App;