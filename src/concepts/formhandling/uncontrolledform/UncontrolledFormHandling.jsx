import { useRef } from "react"
import { toast } from "react-toastify"

const UncontrolledFormHandling=()=>{
    const usernameRef=useRef(null)
    const handleForm=(e)=>{
        e.preventDefault()
        const username=usernameRef.current.value
        if(!username){
            toast.error("All fields are required",{position:"top-center"}) 
                return
        }
        console.log("hello")

    }

    return(
        <div>
        <form onSubmit={handleForm}>
            <input type="text" placeholder="Enter your name" ref={usernameRef} />
            <br />
            <label htmlFor="male">
               <input type="radio" value="male" id="male" name="gender"/>
                male</label>
                
            <input type="radio" value="female"/>
            <input type="radio" value="others"/>
            <button>submit</button>
        </form>
        </div>
    )
}
export default UncontrolledFormHandling