import React from "react";

const Butonel = (props) => {
    return <button onClick={() => props.setter(props.counter + 1) }>{props.btnText} </button>
}

export default Butonel;