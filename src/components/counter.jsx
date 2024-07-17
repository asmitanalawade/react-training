import React from "react";
import IncreamentCounter from "./increamentcounter";
import DecreamentCounter from "./decreamentCounter";

// This is a parent component for IncreamentCounter and DecreamentCounter compo

class Counter extends React.Component {

    constructor(props) {      // if we use construcator in class the super keyword must be mandatory.
        super(props);     // super keyword is used inside the construcator to access the few variables in parenwt class. 
        this.state = {
            count: 0,
        }
    }

    increamentHandler=(val) =>{
        this.setState({count: this.state.count+val})
    }

    decreamentHandler=(val)=> {
        this.setState({count: this.state.count-val})
    }

    render() {
        return(
            <React.Fragment>
                <h1>Count: {this.state.count}</h1>
                {/* <button onClick={()=>this.increamentHandler(1)}>Inc++</button> */}
                
                {/* <button onClick={()=>this.decreamentHandler(1)}>Dec++</button> */}
                <IncreamentCounter inc={this.increamentHandler}></IncreamentCounter>
                <DecreamentCounter dec={this.decreamentHandler}></DecreamentCounter>
            </React.Fragment>
        )
    }
}

export default Counter;