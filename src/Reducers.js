
import React, { useReducer } from 'react'


const transactionReducer = (state,action)=>{
    switch (action.type) {
        case 'withdraw':
            return state - action.payload
        case 'deposit':
            return state + action.payload
        default :
            return state
    }

}

export default function Reducers() {

    const withdraw = (amount)=>{
        dispatch({type:'withdraw',payload:amount})
    }
    const deposit = (amount)=>{
        dispatch({type:'deposit',payload:amount})
    }

    const [state,dispatch] = useReducer(transactionReducer,1000)

  return (
   <>
    <h3>{`balance is ${state}`}</h3>
    <button onClick={()=>withdraw(100)}>withdraw</button>
    <button onClick={()=>deposit(100)}>deposit</button>   
   </>
  )
}
