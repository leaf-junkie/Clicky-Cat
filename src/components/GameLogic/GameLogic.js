import React from "react";
import Cat from "../Cat/index";
import { Container, Col, Row } from "./components/Grid";

class GameLogic extends React.Component {
    state = {
      score: 0,
      highScore: 0,
      cats: cats,
      clicked: []
    }

    componentWillMount() {
        this.shuffle();
    }

    gameOver = () => {
        // ternary operator

    }

    resetGame = () => {
        this.setState({
            score: 0,
            clicked: []
        });
        this.shuffle();
    }

    // Shuffle cats when an image is clicked
    shuffle = () => {
        let arr = this.state.cats;
        for (let i = arr.length - 1; i > 0; i - 1) {
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
                        <Cat
                            id={Cat.id}
                            image={Cat.image}
                            clicked={Cat.clicked}
                        />
                    </Col>
                </Row>
            </Container>

    // Cat array with id, url, and tracks whethere image has been clicked
    const catArr = [
        {
            "id": 1,
            "image": "../Images/cat-0.jpg", 
            "x": "",
            "y": "",
            "clicked": false
        },
        {
            "id": 2,
            "image": "../Images/cat-1.jpg",
            "x": "",
            "y": "",
            "clicked": false
        },
        {
            "id": 3,
            "image": "../Images/cat-3.jpg",
            "x": "",
            "y": "",
            "clicked": false
        },
        {
            "id": 4,
            "image": "../Images/cat-4.jpg",
            "x": "",
            "y": "",
            "clicked": false
        },
        {
            "id": 5,
            "image": "../Images/cat-5.jpg",
            "x": "",
            "y": "",
            "clicked": false
        },
        {
            "id": 6,
            "image": "../Images/cat-6.jpg",
            "x": "",
            "y": "",
            "clicked": false
        },
        {
            "id": 7,
            "image": "../Images/cat-7.jpg",
            "x": "",
            "y": "",
            "clicked": false
        },
        {
            "id": 8,
            "image": "../Images/cat-8.jpg",
            "x": "",
            "y": "",
            "clicked": false
        },
        {
            "id": 9,
            "image": "../Images/cat-9.jpg",
            "x": "",
            "y": "",
            "clicked": false
        },
        {
            "id": 10,
            "image": "../Images/cat-10.jpg",
            "x": "",
            "y": "",
            "clicked": false
        },
        {
            "id": 11,
            "image": "../Images/cat-11.jpg",
            "x": "",
            "y": "",
            "clicked": false
        },
        {
            "id": 12,
            "image": "../Images/cat-12.jpg",
            "x": "",
            "y": "",
            "clicked": false
        },
        {
            "id": 13,
            "image": "../Images/cat-13.jpg",
            "x": "", 
            "y": "", 
            "clicked": false
        },
        {
            "id": 14,
            "image": "../Images/cat-15.jpg",
            "x": "",
            "y": "",
            "clicked": false
        },
        {
            "id": 15,
            "image": "../Images/cat-16.jpg",
            "x": "",
            "y": "",
            "clicked": false
        },
        {
            "id": 16,
            "image": "../Images/cat-18.jpg",
            "x": "",
            "y": "",
            "clicked": false
        }
    ]

    let image = this.catArr[i].image; 


}

export default GameLogic;