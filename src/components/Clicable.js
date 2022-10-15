import React from "react";

function Clickable() {
    function handleClick(){
        console.log("click");
    }

    return <button onClick={handleClick}>ClickMe Please!</button>
}

export default Clickable;
