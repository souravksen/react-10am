import { useRef } from "react"

const UseRefHookHome=()=>{
   const nameRef=useRef()
   const updateText=()=>{
    nameRef.current.innerText="Leela"
   }
   console.log("hii")
    return(
        <div>
            <h1 ref={nameRef}>Sundari</h1>
            <button onClick={updateText}>Update name</button>
        </div>
    )
}
export default UseRefHookHome