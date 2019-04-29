import React from 'react';
import './App.css';
import { ScreenClassProvider } from 'react-grid-system';
import { Container, Row, Col } from '../src/components/Grid/index'

class App extends Component {
  
  constructor(props) {

  }
  // Initialize state
  // this.state = {
  //   cat: { clicked: false }
  // }

  handleClick() {
    this.setState(
      { clicked: true }
    ), function() {
      console.log("a cat was clicked");
    }
  };

  // When this component mounts, grab the cat with 
  // an _id of this.props.match.params.id
  componentDidMount() {
      
  }

  // TODO:
  // 1. Create array of image objects (image, x-coor, y-coord, clicked t/f)
  // 2. Use .map() to loop through each item in the array and
  // 3. Assign a random number: Math.floor(Math.random()*10 +1)
}

export default function App() {
  return (
    <ScreenClassProvider>
      <Header />
      <Page />
      <Footer />
    </ScreenClassProvider>
  );
}