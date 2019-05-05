import React from "react";
import style from "./style.css"

class Cat extends React.Component {
    componentDidMount() {
        this.id = this.props.id
    }

    render() {
        return (
            <div className="cat">
                <img
                    id={this.props.id}
                    src={this.props.image} 
                    className="clicked" 
                    alt="cat"
                    onClick={this.props.clickCat}
                >
                </img>
            </div>
        );
    }
}

export default Cat;