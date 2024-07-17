
import React, {Fragment}from "react";
import Login from "./login";
import Profile from "./profile";


class UserGreeting extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoggerIn: false
        }
        
    }

    toggleState = () => {
        const toggle = this.state.isLoggerIn? false: true;
        console.log(toggle)
        this.setState({isLoggerIn: toggle})
    }

    render(){
        let element;
        if(this.state.isLoggerIn) {
            element = <Profile></Profile>
        }else {
            element = <Login></Login>
        }
        return(
            <Fragment>
                {/* {element} */}
                {/* another way to to handle conditions */}

                {/* {this.state.isLoggerIn? <div><Profile></Profile></div>: <div><Login></Login></div>} */}

                {/* 3rd way */}
                {this.state.isLoggerIn && <div><Profile></Profile></div>} 
                <button onClick={this.toggleState}>Toggle State</button>
            </Fragment>
        )
    }
}

export default UserGreeting;