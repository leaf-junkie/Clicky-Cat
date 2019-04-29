import React from "react";
import { Container, Row, Col } from 'react-grid-system';

const Grid = () => {
    return (
        <Container fluid style={{ lineHeight: '32px' }}>
        <Row align="start" style={{ height: '75px' }} debug>
            <Col debug>1 of 3</Col>
            <Col debug>2 of 3</Col>
            <Col debug>3 of 3</Col>
        </Row>
        <br />
        <Row align="center" style={{ height: '75px' }} debug>
            <Col debug>1 of 3</Col>
            <Col debug>2 of 3</Col>
            <Col debug>3 of 3</Col>
        </Row>
        <br />
        <Row align="end" style={{ height: '75px' }} debug>
            <Col debug>1 of 3</Col>
            <Col debug>2 of 3</Col>
            <Col debug>3 of 3</Col>
        </Row>
        <br />
        <Row align="stretch" debug>
            <Col debug>1 of 3</Col>
            <Col debug>2 of 3</Col>
            <Col debug>3 of 3</Col>
        </Row>
        </Container>
    );
}

// const gridWidth = 4;
// const gridHeight = 4;
// const Grid = [];
// for (let y = 0; y < gridHeight; y++) {
//     Grid.push([]);
//     for (let x = 0; x < gridWidth; x++) {
//         Grid[y].push(0);
//     }
// }

export default { Container, Row, Col };