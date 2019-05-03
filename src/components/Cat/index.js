import React from "react";
import { Shuffle } from "";

class Cat extends React.Component {
    render() {
        
        return(
            <div className="cat">
                <img 
                    src={image} 
                    className="clicked" 
                    alt="cat"
                >
                </img>
            </div>
        );
    }
}

export default Cat;