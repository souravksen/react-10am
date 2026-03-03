import { useRef } from "react"
import "./userefhook.css"
const UseRefHookTask1=()=>{
    const themeRef=useRef()
    const changeTheme=()=>{
        themeRef.current.classList.toggle("dark")
    }

    return(
        <div className="homepage demo remo"ref={themeRef}>
            <button onClick={changeTheme}>Theme</button>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis earum dolores dolorum corporis ullam fugiat asperiores quo, atque non id, quia, deserunt at nam tenetur cumque voluptatem quam et perferendis?</p>

        </div>
    )
}
export default UseRefHookTask1