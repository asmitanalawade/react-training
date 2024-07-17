import React from "react";

// This is child component for counter.jsx

const DecreamentCounter = (props) => {
    return(
        <React.Fragment>
            <button onClick={()=>props.dec(1)}>Dec++</button>
        </React.Fragment>
    )
}

export default DecreamentCounter;