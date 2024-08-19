

import React,{createContext,useContext,useState} from 'react'

    const UserContext = createContext();

export default function Parentusingusecontext() {

    const [user] = useState('React')

  return (
    <UserContext.Provider value={user}>
        <h1>parent</h1>
        <Component1/>
    </UserContext.Provider>
  )
}

function Component1() {
    const user = useContext(UserContext)
    return(
        <h3>{`user :${user}`}</h3>
    )
    
}