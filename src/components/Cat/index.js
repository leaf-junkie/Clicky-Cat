import React from "react";

class Cat extends React.Component {
    render() {
        
        const catArray = [
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
        
        // assign x-coordinate
        let x = catArray.map(this.x.Math.floor(Math.random() * 10 + 1));

        // assign y-coordinate
        let y = catArray.map(this.y.Math.floor(Math.random() * 10 + 1));
    
        let image = this.catArray.image; 

        return(
            <div className="cat">
                <img src={ image } className="clicked">
                </img>
            </div>
        );
    }
}

export default Cat;