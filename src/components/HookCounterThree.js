import React, { useState } from 'react'

const HookCounterThree = () => {

    const [name,setName] = useState({firstName : '',lastName : ''})

    const firstNameChange =(e)=>{
        setName({...name,firstName : e.target.value})

    }
    const lastNameChange = (e)=>{
        setName({...name,lastName : e.target.value})
    }

  return (
    <div>
        <input type="text" value={name.firstName} onChange={firstNameChange} />
        <input type="text" value={name.lastName} onChange={lastNameChange} />

        <h2>firstName is {name.firstName}</h2>
        <h2>lastName is {name.lastName}</h2>

    </div>
  )
}

export default HookCounterThree