import React, { createContext } from 'react'
import C1 from './C1'
import A1 from './A1'

export const GlobalContext=createContext()
const ContextApiConcept = () => {
    const data={
        name:"sourav",
        message:"hello"
    }
  return (
    <div>
        <GlobalContext.Provider value={data}>
            <C1/>
            <A1/>
        </GlobalContext.Provider>
    </div>
  )
}

export default ContextApiConcept