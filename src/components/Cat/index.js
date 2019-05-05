import React from "react";
import { clickCat } from "../GameLogic/GameLogic"

class Cat extends React.Component {
    render() {
        return (
            <div className="cat">
                <img 
                    src={this.props.image} 
                    className="clicked" 
                    alt="cat"
                    style={{ 
                        maxWidth: 200, 
                        margin: 8,
                        borderRadius: 25 
                    }}
                    onClick={this.props.clickCat}
                >
                </img>
            </div>
        );
    }
}

export default Cat;