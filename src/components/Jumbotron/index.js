import React from "react";
import style from "./style.css";

const Jumbotron = () => {
    return (
        <div className="jumbotron jumbotron-fluid">
            <h1 style={{fontSize:50}}>Clicky Cat</h1>
            <h3 style={{textAlign:'center'}}>Pet each kitty one time and one time only!</h3>
            <p>The game ends when you click any image more than once.</p>
        </div>
    );
}

export default Jumbotron;