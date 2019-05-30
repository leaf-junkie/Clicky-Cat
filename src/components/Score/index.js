import React from "react";

class Score extends React.Component {
   
    handleChange(event) {
        this.setState({ name: event.name });
        console.log(event);
    }

    render() {
        return (
            <div className="container" style={{textAlign:'center', display:'flex', flexDirection:'column', width:'100%', margin:'0 auto'}}>
                <h5 
                    name="score"
                    onChange={this.handleChange.bind(this)}
                    style={{
                        position: "relative",
                        width:'100%', 
                        margin:'0 auto'
                    }}
                >Score: {this.props.score}
                </h5>
                <h5 
                    name="highScore"
                    onChange={this.handleChange.bind(this)} 
                    style={{
                        position: "relative",
                        width:'100%', 
                        margin:'0 auto'
                    }}
                >High Score: {this.props.highScore}
                </h5>
            </div>
        );
    }
}

export default Score;