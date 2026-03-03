// Conditional Rendering-- based upon a condition which html is need to load
const ConditionRender=()=>{
    let value=true;
    if(value){
        return (
            <div>
                <h1>Hello</h1>
            </div>
        )
    }
    else{
        return (
            <div>
                <h1>Bye</h1>
            </div>
        )
    }
    return (
        <div>
            <h1> conditional rendering</h1>
        </div>
    )
}
export default ConditionRender
