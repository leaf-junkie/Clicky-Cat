import React from "react";

const gridWidth = 4;
const gridHeight = 4;
const Grid = [];
for (let y = 0; y < gridHeight; y++) {
    Grid.push([]);
    for (let x = 0; x < gridWidth; x++) {
        Grid[y].push(0);
    }
}

export default Grid;