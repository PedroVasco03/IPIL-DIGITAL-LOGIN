import React from "react";

function ButtonConfirm ({value}){
    return(
        <>
            <input type="submit" value={value} className="btn solid"/>
        </>
    )
}

export default ButtonConfirm