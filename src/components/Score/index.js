import React from "react";

class Score extends React.Component {
    render() {
        return (
            <div>
                <p>score: {this.props.score}</p>
                <p>highScore: {this.props.highScore}</p>
            </div>
        );
    }
}

export default Score;