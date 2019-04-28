import React from "react";
import { col, row, container } from "../Grid"

class Cat extends Component {
    state = {
        cat: {}
    }

    // When this component mounts, grab cat with _id of this.props.match.params.id
    // e.g. localhost:3000/cats/_id...
    componentDidMount() {
        API.getCat(this.props.match.params.id)
            .then(res => this.setState({ cat:res.data }))
            .catch(err => console.log(err));
    }

    render() {
        return(
            <div className="Cat">
                <img className="">
                
                </img>
            </div>
        )
    }
}

export default Cat;