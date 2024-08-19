import React, {useState} from 'react'

export const FunctionCounter = () => {

    const [state,setState] = useState(0)

    const incrementcount = () => {
        setState(state + 1)
    }

  return (
    <div>
        <button onClick={incrementcount}>count {state}</button>
    </div>
  )
}
