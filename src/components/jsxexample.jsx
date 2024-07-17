
import React, {Component} from "react";

class JsxExample extends Component {
    render() {
        let msg = "Welcome"
        let result = '';
        let x= 5;

        if(x===5) {
            result = 'Inside if block';
        }else{
            result = 'Inside else block';
        }

        let list = (<ul><li>Item1</li><li>Item2</li></ul>);
        let accounts = ['Fedex', 'DentalPlans', 'extend'];

        return (
            <div>
                <h1>JSX Example...</h1>
                <p>Variable value {msg}</p>
                <p>Sum is {2+2}</p>
                <p>Conditional rendering {result}</p>
                <p>{x===5? 'true': 'false'}</p>
                {list}
                <p>Account names are {accounts.map((ele)=>ele+ ", ")}</p>
            </div>
        )

    }
} 

export default JsxExample;