import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
     <nav class="navbar navbar-light bg-light">
        <p class="navbar-text">Clicky Cat</p>
        <p>You guessed</p>
        <p>Score: | Top Score:</p>
      </nav>
      <div className="jumbotron">
        <h1>Clicky Cat</h1>
        <p>Pet each kitty one time and one time only!</p>
        <p>The game ends when you click any image more than once.</p>
      </div>
      <div className="imageGrid">
        {/* TODO:
        1. Create array of image objects (image, x-coor, y-coord, clicked t/f)
        2. Use .map() to loop through each item in the array and
        3. Assign a random number: Math.floor(Math.random()*10 +1)
        */}
        {
          
        }
      </div>
    </div>
  );
}

export default App;
