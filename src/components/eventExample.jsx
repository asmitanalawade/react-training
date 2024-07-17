import React from "react";

class EventExample extends React.Component {
    constructor(props) {
        super(props);
        this.age = 40;

        // first way to bind value to function
        // this.handleClick = this.handleClick.bind(this);  // need to bind the value to the event handler to show the data in console.
    }

    handleClick() {
        console.log('Clicked...' + this.age);
    }

    // 3rd way using arrow function
    handleClick1 =() => {
        console.log('Clicked...' + this.age);
    }

    handleClick2(name, event) {
        console.log('Event Type '+ event.type);
        console.log('Clicked with regular function with argument ' + name);
    }

    handleClick3 =(name, event) => {
        console.log('Event Type '+ event.type);
        console.log('Clicked arraowfunction with arguments' + name);
    }

    render() {
        return(
            <React.Fragment>
                {/* <button onClick={this.handleClick}>Click me!</button> */}

                {/* 2nd way to to bind the value to function but because this it's performance issue. */}
                <button onClick={this.handleClick.bind(this)}>Click me!</button>
                <button onClick={this.handleClick1}>Click me with arrow function!</button>
                <button onClick={this.handleClick2.bind(this, 'Asmi')}>Click me with regular function with argument!</button>
                {/* <button onClick={()=>this.handleClick3(' google')}>Click me with arrow function with argument!</button> */}

                {/* if we have object then we write code below */}
                <button onClick={(event)=>this.handleClick3(' google', event)}>Click me with arrow function with argument for large data!</button>

            </React.Fragment>
        )
    }
}

export default EventExample;