import { useEffect, useState } from 'react'

import './App.css'
import Additem from './Components/Additem'
import Navbar from './Components/Navbar'
import Tasklist from './Components/Tasklist'
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
    if(darkmode!==true){
      document.body.style.backgroundColor='#343a40'
    }
    else{
      document.body.style.backgroundColor='white'

    }
    
    setdarkMode(prev=>!prev)
  }
  // console.log(tasklist)
  let updatetask=(item,index)=>{
    // console.log(item)
    setTaskList(prev=>{
      return prev.slice(0,index).concat(item).concat(prev.slice(index+1))
    })
  }
  

  return (
    <>
       <Navbar darkmode={darkmode} updmode={updmode} />
      <Additem addtask={addtask} />
      <Tasklist tasklist={tasklist} deltask={deltask} updatetask={updatetask} darkmode={darkmode} />
    </>
  )
}

export default App
