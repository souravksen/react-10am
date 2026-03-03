import React from 'react'
import C1 from './C1'

const C2 = ({data}) => {
  return (
    <div>
        <C3 props={data}/>
        <C2/>
    </div>
  )
}

export default C2