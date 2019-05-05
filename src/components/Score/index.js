import React from "react";

class Score extends React.Component {
   
    handleChange(event) {
        this.setState({ name: event.name });
        console.log(event);
    }

    render() {
        return (
            <div>
                <p 
                    name="score"
                    onChange={this.handleChange.bind(this)}
                >Score: {this.props.score}
                </p>
                <p 
                    name="highScore"
                    onChange={this.handleChange.bind(this)} 
                >High Score: {this.props.highScore}
                </p>
            </div>
        );
    }
}

export default Score;