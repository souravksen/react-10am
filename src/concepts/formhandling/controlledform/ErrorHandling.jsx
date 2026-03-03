import React, { useState } from 'react'

const ErrorHandling = () => {
  const[formData,setformData]=useState({
          username:""
      })
      const[errors,setErrors]=useState(null)
      const handleInput=(e)=>{
          const{name,value}=e.target
          setErrors(null)
          setformData({...formData,[name]:value})
      }
      const handleForm=(e)=>{
          e.preventDefault()
          if(!formData.username){
            setErrors(true)
          }
          setformData({
            username:""
          })
      }
    return (
      <div>
          <form onSubmit={handleForm} className='form'>
              <input type="text" placeholder='username' name='username' onChange={handleInput} value={formData.username}/>
              {
                errors?<p style={{color:"red"}}>username is required <sup>*</sup></p>:""
              }
              {/* <input type="emai" placeholder='email' name='email' onChange={handleInput} />
              <input type="password" placeholder='password' name='password' onChange={handleInput} />
              <input type="number" placeholder='phoneno' name='phoneno' onChange={handleInput} /> */}
              <br />
              <button>submit</button>
              
  
          </form> 
          
      </div>
    )
  }
  
export default ErrorHandling