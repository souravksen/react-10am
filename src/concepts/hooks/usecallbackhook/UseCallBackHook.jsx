import React, { useCallback, useState } from 'react'
import Child from './Child'

const UseCallBackHook = () => {
    const[count,setCount]=useState(0)
    const deleteUser=useCallback(()=>{
      console.log("user deleted")
    })
  return (
    <div>
       <h1>UseCallBackHook</h1>
        <p className='text-7xl'>{count}</p>
        <button className='p-3.5 backdrop-grayscale cursor-pointer 'onClick={()=>setCount(count+1)}>update</button>
        <hr />
        <Child data={count}/>
    </div>
  )
}

export default UseCallBackHook