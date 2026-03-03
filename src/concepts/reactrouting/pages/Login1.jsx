import { useRef, useState } from "react"
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {


    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const [showPass, setShowPass] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData)
    }

   const  handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value

        })
    }


    return (
        <div className='w-full h-screen flex justify-center items-center p-7'>
            <form  onSubmit={handleSubmit} className='w-[500px] h-[500px] rounded-xl  border-2 flex flex-col gap-3 p-10'>
                <label htmlFor="email" className='text-gray-500'>Email</label>
                <input type="text" name="email" id="email" placeholder='Email' className='bg-gray-200 px-2 py-2 rounded-md' 
                 onChange={handleChange}
                />
                <label htmlFor="pass" className='text-gray-500'>Password</label>
                <div className="relative w-full">
                    <input type={showPass ? "password" : "text"} name="password" id="pass" placeholder='password' className='bg-gray-200 px-2 py-2 rounded-md w-full ' 
                onChange={handleChange}
                />
                <div className="absolute top-3 right-3 opacity-50 z-20 w-30 h-30 flex justify-center items-center" 
                 onClick={() => 
                    setShowPass(!showPass)
                 }
                >
                     {
                 showPass ? <FaEye /> : <FaEyeSlash />
               }
                </div>
               
                </div>
                <button className='mt-3'>Login</button>
                <div className='flex justify-between text-sm'>
                    <p className='text-gray-400'>Already have account</p>
                    <span className='text-purple-500 underline'>Register</span>
                </div>
            </form>
        </div>
    )
}

export default Login