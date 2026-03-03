import React from 'react'
import Bike from './Bike'

const Hoc = () => {
  return (
    <div>
        <PetrolPump>
            <Bike name="H2R"/>
        </PetrolPump>
        <Bike name="RS100"/>
    </div>
  )
}

export default Hoc