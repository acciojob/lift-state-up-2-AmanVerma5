import React from "react";

const Child=(prop)=>{
    return(
        <div className="child">
            <h2>Child Component</h2>
            <input type="text"  onChange={(event)=>prop.change(event.target.value)}/>
        </div>
    )
}
export default Child