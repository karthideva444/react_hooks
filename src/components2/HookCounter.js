import React ,{useEffect, useState} from 'react'

const HookCounter = () => {
    const [count,setCount] = useState(0)
    const [name,setName] = useState('')

    const handlecount = () => {
        setCount(count+1)
    }
    useEffect(()=>{
        console.log("Updated");
        document.title = `you clicked ${count} times`
    },[count])

    const handlename = (e)=>{
        setName(e.target.value)
    }

  return (
    <div>
        <input type='text' value={name} onChange={handlename}/>
        <button onClick={handlecount}>count{count}</button>
    </div>
  )
}

export default HookCounter