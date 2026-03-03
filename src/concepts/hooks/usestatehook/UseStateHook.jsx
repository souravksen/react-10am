import { useState } from "react"

const UseStateHook=()=>{
    // useStateHook--> It is used to store the data and update the data dynamically
    const [count,setCount]=useState(0)
    
    const updateValue=()=>{
        setCount(count+1)
    }
    const sub=()=>{
        setCount(count-1)
    }
    const reset=()=>{
        setCount(0)
    }
    // console.log("hello")

    return (
        <div>
            
            <h1>{count}</h1>
            <div className="div1">
            <button onClick={updateValue}>+</button>
            <button onClick={sub}>-</button>
            <button onClick={reset}>reset</button>
             </div>
           


        </div>
    )
}
export default UseStateHook