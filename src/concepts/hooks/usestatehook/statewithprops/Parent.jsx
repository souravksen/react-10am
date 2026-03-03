import { useState } from "react"
import Child from "./Child"

const Parent=()=>{
    const[count,setCount]=useState(0)
        return (
        <div>
            <h1>{count}in parent</h1>
            <button onClick={()=>setCount(count+1)}></button>
            <hr />
            <Child count={count} setCount={setCount}/>
        </div>
    )

}
export default Parent