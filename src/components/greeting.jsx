import React, {Component} from "react";
import PropTypes from 'prop-types';

class Greeting extends Component {
    render(){
        return(
            <div>
                <h1>Example of using props</h1>
                <p>Name: {this.props.name}</p>
                <p>Age: {this.props.age}</p>
            </div>
        )
    }
}

Greeting.defaultProp = {
    name: 'unknown',
    age: 18
}

Greeting.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number
}
export default Greeting;

// React.fragment allows you to return multiple child element and it's not create any extra dom node.