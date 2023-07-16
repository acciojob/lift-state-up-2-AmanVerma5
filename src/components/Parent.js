import React, { useState } from "react";
import Child from "./Child";

const Parent=()=>{
    let [x,setX]=useState('');
    return (
        <div className="parent">
            <h1>Parent Component</h1>
            {
                x && <p>{x}</p>
            }
            <Child change={setX} />
        </div>
        
    )
}
export default Parent