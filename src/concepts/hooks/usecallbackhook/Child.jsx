import React, { useState } from 'react'

const Child = ({data}) => {
    console.log("data")

  return (
    <div>
        <p>{data}</p>
        
    </div>
  )
}

export default Child