import React, { useState } from 'react'

const ControlledFormHandling = () => {
    const[formData,setformData]=useState({
        usename:"",
        email:"",
        password:"",
        phone:""
    })
    const handleInput=(e)=>{
        const{name,value}=e.target
        setformData({...formData,[name]:value})
    }
    const handleForm=(e)=>{
        e.preventDefault()
        console.log(formData)
    }
  return (
    <div>
        <form onSubmit={handleForm} className='form'>
            <input type="text" placeholder='username' name='username' onChange={handleInput} />
            <input type="emai" placeholder='email' name='email' onChange={handleInput} />
            <input type="password" placeholder='password' name='password' onChange={handleInput} />
            <input type="number" placeholder='phoneno' name='phoneno' onChange={handleInput} />
            <br />
            <button>submit</button>

        </form> 
    </div>
  )
}

export default ControlledFormHandling