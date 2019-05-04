import React from "react";
import Score from "./components/Score/index";
import Jumbotron from "./components/Jumbotron/index";
import { Container } from "./components/Grid";
import Footer from "./components/Footer/index";
import GameLogic from "./components/GameLogic/GameLogic"

class App extends React.Component {
  render() {
    return(
      <div>
        <Jumbotron/>
        <Score/>
        {/* <Container /> */}
        <GameLogic/>
        <Footer/>
      </div>
    )
  }
}

export default App;