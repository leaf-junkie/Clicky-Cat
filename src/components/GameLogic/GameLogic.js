import React from "react";
import Cat from "../Cat";
import cats from "../../../src/cats.json";
import { Container, Col, Row } from "../Grid";
import Score from "../Score";

class GameLogic extends React.Component {
    state = {
      score: 0,  
      highScore: 0,
      cats: cats,
      selected: []
    }  

    componentWillMount() {
        this.shuffle();
    }

    resetGame() {
        this.setState({
            score: 0,
            selected: []
        });
        this.shuffle();
    }

    win = () => {
        alert("W I N N E R");
        this.resetGame();
    }

    lose = () => {
        alert("G A M E   O V E R");
        this.resetGame();
    }

    // Shuffle cats when an image is clicked
    shuffle = () => {
        let arr = this.state.cats;
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        this.setState({
            cats: arr
        });
    }

    // Check if image has been clicked
    clickCat = (event) => {
        console.log(this.state.selected.length);
        let id = event.target.id;
        if(this.state.selected.includes(id)) {
            this.lose();
        } else {
            this.state.selected.push(id);
            let score = this.state.score + 1;
            let highScore = score > this.state.highScore ? score : this.state.highScore;
            this.setState({ 
                score, 
                highScore
            });
            if (this.state.selected.length === 15) {
                this.win();
            }
            this.shuffle();

        }
    }

    render() {
        return (
            <div>
                <Score
                    score={this.state.score}
                    highScore={this.state.highScore}
                />
                <Container fluid>
                    <Row>
                        <Col>
                            {this.state.cats.map((kitty, index) => {
                                return(
                                <Cat
                                    clickCat={this.clickCat.bind(this)}
                                    id={kitty.id}
                                    key={kitty.id}
                                    image={kitty.image}
                                    selected={kitty.selected}
                                />
                            )})}
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default GameLogic;