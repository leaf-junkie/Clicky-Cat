import React from "react";

class Score extends React.Component {
   
    handleChange(event) {
        this.setState({ name: event.name });
        console.log(event);
    }

    render() {
        return (
            <div className="container">
                <span 
                    name="score"
                    onChange={this.handleChange.bind(this)}
                    style={{
                        display: "block",
                        position: "relative",
                        left: "1em"
                    }}
                >Score: {this.props.score}
                </span>
                <span 
                    name="highScore"
                    onChange={this.handleChange.bind(this)} 
                    style={{
                        display: "block",
                        position: "relative",
                        left: "1em"
                    }}
                >High Score: {this.props.highScore}
                </span>
            </div>
        );
    }
}

export default Score;