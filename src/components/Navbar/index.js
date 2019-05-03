import React from "react";

const Navbar = (props) => {
    return (
        <nav className="navbar navbar-light bg-light">
            <p className="navbar-text">Clicky Cat</p>
            <p>You guessed</p>
            <p>Score: | Top Score:</p>
        </nav>
    )
}

export default Navbar;