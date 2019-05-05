import React from "react";
import Cat from "../Cat";
import cats from "../../../src/cats.json";
import { Container, Col, Row } from "../Grid";

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
        let id = event.target.id;
        if(this.state.selected.includes(id)) {
            this.lose();
        } else if (this.state.selected.length === 16) {
            this.win()
        } else {
            this.state.selected.push(id);
            this.setState({ score: this.state.score });
            this.shuffle();
        }
    }

    render() {
        return (
            <Container fluid>
                <Row>
                    <Col size="md-3">
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
        )
    }
}

export default GameLogic;