const JsxExpression=()=>{
    //jsx expression is used to access the js variables or functions inside the jsx | html
    // syntax--> {}
    // Note--> inside the jsx expression it is not possible to declare a variable
    // how to use js functions || how to call js functions
    // if a function is returning a jsx element then only we called as a component, if it is not returning any jsx element then it is a js function.
    // react use synthetic event
    // inside jsx expression if i want to use condition statement then we need to use ternary operator. if i want to use loop then map method.
 

    let username;
    let demo=()=>{
        console.log("demo function")
    }
    let is_active=true
    if(is_active==true)
        console.log("true block")
    else
        console.log("false block")
    let arr=["ram","shyam","jadu","madhu"]
    return (
        <div>
            {/* <h1>{username}</h1>
            {username="leela"}
            <br />
            {username} */}
            <button onClick={demo}>click</button>
            {
                is_active?<h1>i am safe</h1>:<h1>i am dead</h1>    
            }
            {
            arr.map((user)=>{
                return (
                    <h1>{user}</h1>
                )
            })
        }
        </div>
    )
}
export default JsxExpression