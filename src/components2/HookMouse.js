import React , {useState,useEffect} from 'react'

function HookMouse(){
    const [x,setX] = useState(0)
    const [y,setY] = useState(0)

    const logMousePosition = (e) => {
        console.log("log mouse position ")
        setX(e.clientX)
        setY(e.clientY)
    }
    useEffect(()=>{
        console.log("use Effect called")
        window.addEventListener("mouse event", logMousePosition)
        return(
            window.removeEventListener("unmounting event",logMousePosition)
        )
    },[])

    return (<div>Hook X ={x} and Y ={y}</div>)
}

export default HookMouse