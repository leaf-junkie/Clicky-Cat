import React from "react";
import Cat from "../Cat";
import cats from "../../../src/cats.json";

import { Container, Col, Row } from "../Grid";

class GameLogic extends React.Component {
    state = {
      score: 0,  
      highScore: 0,
      cats: cats,
      clicked: []
    }  

    // This seems to break things
    componentWillMount() {
        this.shuffle();
    }

    // gameOver = () => {
    //
    // }

    // resetGame = () => {
    //     this.setState({
    //         score: 0,
    //         clicked: []
    //     });
    //     this.shuffle();
    // }

    // Shuffle cats when an image is clicked
    shuffle = () => {
        let arr = this.state.cats;
        for (let i = arr.length - 1; i > 0; i --) {
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
        let randomNum = Math.floor((Math.random() * 5) + 1);
        // make ternary operator
        if(this.state.clicked.includes(id)) {
            this.lose();
        } else {
            this.state.clicked.push(id);
            this.setState({ score: this.state.score + randomNum });
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
                                clicked={kitty.clicked}
                            />
                        )})}
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default GameLogic;