import React from "react";
import Jumbotron from "./components/Jumbotron/index";
import Footer from "./components/Footer/index";
import GameLogic from "./components/GameLogic/GameLogic";
import face from "./blackcat.png";

class App extends React.Component {
  render() {
    return(
      <div>
        <Jumbotron/>
        <GameLogic/>
        <img 
        style={{position:'relative', left:"45%", bottom:0}}
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6-9mRQHN7-LA-qLd4vuVR4tiM27aw-n204hGuNaRL3z-xxiBIdg"/>
        <Footer/>
      </div>
    )
  }
}

export default App;