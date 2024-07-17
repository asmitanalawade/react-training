import React from "react";

// This is child component for counter.jsx

const IncreamentCounter = (props) => {
    return(
        <React.Fragment>
            <button onClick={()=>props.inc(1)}>Inc++</button>
        </React.Fragment>
    )
}

export default IncreamentCounter;