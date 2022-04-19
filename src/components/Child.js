import React from "react";
const Child =( { name,parentCallBack})=>{
    return(
        <div className="bg-info">
            <h3>hello {name}</h3>
            <button onClick={()=>{parentCallBack("Abccc")}}> click Child</button>
        </div>
    )
}
export default Child