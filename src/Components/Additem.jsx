import React, { useState } from 'react'
import { nanoid } from 'nanoid'


export default function Additem(props) {
   let style1={
       height:'40px'

   }

   const [task,settask]=useState({
      body:"",
      id:0
      
   })
//    console.log(task.id)

   let handlechange=(event)=>{
    settask(prev=>{
        return {...prev,body:event.target.value}
    })
   }
   let handleclick=()=>{
      settask(prev=>{return {...prev,id:nanoid()}})
      console.log(task.id)
      props.addtask(task)
   }
// console.log(task)
  return (
    <div className='d-flex justify-content-center align-items-center '>
          <input type='text' placeholder ='Add item'  style={{...style1,width:'300px'}} value={task.body} onChange={handlechange}  />
          <button className='btn btn-success mx-2 fs-4   d-flex align-items-center justify-content-center' style={style1} onClick={handleclick}>+</button>
    </div>
  )
}
