import React from "react";

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