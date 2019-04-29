import React from 'react';

const Navbar = () => {
    return (
        <header>
            <nav className="navbar navbar-light bg-light">
                <a className="navbar-brand" href="#">
                    <img src="/docs/4.3/assets/brand/bootstrap-solid.svg" width="30" height="30" class="d-inline-block align-top" alt="Clicky Cat">
                    <p className="navbar-text">Clicky Cat</p>
                </a>
                <p>You guessed</p>
                <p>Score: | Top Score:</p>
            </nav>
        </header>
    );
}

export default Navbar;