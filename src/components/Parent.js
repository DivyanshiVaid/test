import React from "react";
import { useState } from "react";
import Child from "./Child";
const Parent =()=>{

    const [name, setName]= useState("")
    const callBackFunction=(name)=>{
        setName(name)

    }
return(
    <div  className="bg-primary">
        <h2> hello parent </h2>
        <h3>{name}</h3>

        <Child parentCallBack={callBackFunction} name={name}/>
        <section >
        <div>
            <label for="">UserNames</label>
            <input type="text"/>
        </div>
    </section>
    </div>
)}
export default Parent