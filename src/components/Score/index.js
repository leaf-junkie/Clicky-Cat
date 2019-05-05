import React from "react";

class Score extends React.Component {
   
    handleChange(event) {
        this.setState({ name: event.name });
        console.log(event);
    }

    render() {
        return (
            <div>
                <p onChange={this.handleChange.bind(this)} name="score">Score: {this.props.score}</p>
                <p onChange={this.handleChange.bind(this)} name="highScore">High Score: {this.props.highScore}</p>
            </div>
        );
    }
}

export default Score;