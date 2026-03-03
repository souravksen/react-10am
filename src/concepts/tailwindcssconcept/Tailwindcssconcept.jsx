import React from 'react'

const Tailwindcssconcept = () => {
    const arr=[1,2,3,4,5,6,7,8,9]
  return (
    <div className='flex flex-wrap gap-7 justify-evenly'>
        {

        
       arr.map((ele,index)=>{
        return(
            <div key={index} className='bg-[#800000] text-cyan-200 text-4xl h-[200px] w-[200px] flex
    items-center flex justify-center ... border-b-orange-100 rounded-full ... bg-black hover:bg-fuchsia-500 ... cursor-pointer ...'>{ele}</div>

        )
       })
    }
    
    

    </div>
  )
}

export default Tailwindcssconcept