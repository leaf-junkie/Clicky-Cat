import React from "react";

class Cat extends React.Component {
    render() {
        return (
            <div className="cat">
                <img 
                    src={this.props.image} 
                    className="clicked" 
                    alt="cat"
                    style={{ maxWidth: 200, margin: 8 }}
                >
                </img>
            </div>
        );
    }
}

export default Cat;