import { useEffect, useState } from 'react'

import './App.css'
import Additem from './Components/Additem'
import Navbar from './Components/Navbar'
import Tasklist from './Tasklist'
import { nanoid } from 'nanoid'


function App() {
  const [darkmode, setdarkMode] = useState(false)
  const [tasklist,setTaskList]=useState([])
  const addtask=(val)=>{
     setTaskList(prev=>prev.concat(val))
  }

  const deltask=(val)=>{
    console.log(val)
    setTaskList(prev=>{
      let newarr=[]
      for(let i=0;i<prev.length;i++)
       {
        if(prev[i].id!==val)
        newarr.push(prev[i])
       }
       return newarr
    })
  }
  function updmode(){
    setdarkMode(prev=>!prev)
  }
  // console.log(tasklist)
  let nid
  

  return (
    <>
       <Navbar darkmode={darkmode} updmode={updmode} />
      <Additem addtask={addtask} id={nid}/>
      <Tasklist tasklist={tasklist} deltask={deltask} />
    </>
  )
}

export default App
