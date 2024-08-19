import React, { useState } from 'react'

function HookCounterTwo() {

    let initialstate = 0
    const [count,setCount] = useState(initialstate)

    const handlereset = () =>{
        setCount(initialstate)
    }
    const handleincrement = () =>{
        setCount(pstate => pstate +1)
    }
    const handledecrement = () =>{
        // setCount(count -1)
        count === 0 ? setCount(initialstate):setCount(pstate => pstate-1)
    }

  return (
    <div>
        <p>count {count}</p>
        <button onClick={handlereset}>reset</button>
        <button onClick={handleincrement}>+</button>
        <button onClick={handledecrement}>-</button>

    </div>
  )
}

export default HookCounterTwo