import React from "react";
import style from "./style.css";

const Jumbotron = () => {
    return (
        <div className="jumbotron jumbotron-fluid">
            <h1>Clicky Cat</h1>
            <p className="lead">Pet each kitty one time and one time only!</p>
            <p>The game ends when you click any image more than once.</p>
        </div>
    );
}

export default Jumbotron;