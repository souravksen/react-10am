import Child from "./Child"
const Parent=()=>{
    return (
        <div id='parent' className='parent'>
            <Child name="sundari" age={22} email="abc@gmail.com"/>
            <Child name="leela" age={24} email="leela@gmail.com"/>
            <Child name="mala" age={26} email="mala@gmail.com"/>
        </div>
    )
}
export default Parent