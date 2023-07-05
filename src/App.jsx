import { useEffect, useState } from 'react'

import './App.css'
import Additem from './Components/Additem'
import Navbar from './Components/Navbar'
import Tasklist from './Components/Tasklist'
import { nanoid } from 'nanoid'
import Sidebar from './Components/Sidebar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'



function App() {
  const [darkmode, setdarkMode] = useState(false)
  const [tasklist, setTaskList] = useState([])
  const addtask = (val) => {
    setTaskList(prev => prev.concat(val))
  }

  const deltask = (val) => {
    console.log(val)
    setTaskList(prev => {
      let newarr = []
      for (let i = 0; i < prev.length; i++) {
        if (prev[i].id !== val)
          newarr.push(prev[i])
      }
      return newarr
    })
  }
  function updmode() {
    if (darkmode !== true) {
      document.body.style.backgroundColor = '#343a40'
    }
    else {
      document.body.style.backgroundColor = 'white'

    }

    setdarkMode(prev => !prev)
  }
  // console.log(tasklist)
  let updatetask = (item, index) => {
    // console.log(item)
    setTaskList(prev => {
      return prev.slice(0, index).concat(item).concat(prev.slice(index + 1))
    })
  }

  const [show, setShow] = useState(['',true])

  let handleclick = () => {
   
    // console.log("coming here")
    setShow((prev) => {
      return prev[0] === 'show' ?['',prev[1]]:[ 'show',prev[1]]
    })
  }

  let handlesort=(val)=>{
    setShow(prev=>[prev[0],val])
  }
  //   body.offcanvas-open .content-push {
  //     transform: translateX(300px);
  // }


  return (
    <>
    <BrowserRouter>
      <Sidebar show={show} handleclick={handleclick} darkmode={darkmode} handlesort={handlesort} />
      <Navbar darkmode={darkmode} updmode={updmode} handleclick={handleclick} />

      <div className='content-push' style={{ transform: show === 'show' ? 'translateX(200px)' : '' }}>

        <Additem addtask={addtask} />
       {show[1] && <Tasklist tasklist={tasklist} deltask={deltask} updatetask={updatetask} darkmode={darkmode} sort={[false]} />}
        {!show[1] && <Routes>

        
                 {/* <Route  exact path='/all' element={<Tasklist tasklist={tasklist} deltask={deltask} updatetask={updatetask} darkmode={darkmode} sort={[false]} />}></Route> */}

                 <Route exact path='/incomplete' element={<Tasklist tasklist={tasklist} deltask={deltask} updatetask={updatetask} darkmode={darkmode} sort={[true,'incomplete']} />}></Route>


                 <Route exact path='/complete' element={<Tasklist tasklist={tasklist} deltask={deltask} updatetask={updatetask} darkmode={darkmode} sort={[true,'complete']} />}></Route>

            
          </Routes>}
      </div>
        </BrowserRouter>

    </>
  )
}

export default App


{/* <Tasklist tasklist={tasklist} deltask={deltask} updatetask={updatetask} darkmode={darkmode} sort={[false]} /> */}