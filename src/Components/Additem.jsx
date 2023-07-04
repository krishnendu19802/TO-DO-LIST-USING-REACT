import React, { useState } from 'react'
import { nanoid } from 'nanoid'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import {actionCreators} from "../state/index"

export default function Additem(props) {
   const dispatch=useDispatch()
   const actions=bindActionCreators(actionCreators,dispatch)

   // const dispatch=useDispatch()
   // const actions=bindActionCreators(actionCreators,dispatch)


   let style1={
       height:'40px',
       padding:'5px'
   }

   const [task,settask]=useState({
      body:"",
      id:0,
      status:'incomplete'
      
   })
//    console.log(task.id)
   let handlekeypress=(event)=>{
      // console.log(event.key)
      if(event.key==='Enter')
      handleclick()
   }
   
   let handlechange=(event)=>{
    settask(prev=>{
        return {...prev,body:event.target.value}
    })
   }
   let handleclick=()=>{
      if(task.body==="")
      return
      settask(prev=>{return {...prev,id:nanoid()}})
      console.log(task.id)
      actions.additem(task)
      props.addtask(task)
   }
// console.log(task)
  return (
    <div className='d-flex justify-content-center align-items-center '>
          <input type='text' placeholder ='Add item'  style={{...style1,width:'300px',borderRadius:'5px'}} value={task.body} onChange={handlechange} onKeyDown={handlekeypress} />
          <button className='btn btn-success mx-2 btn-lg   d-flex align-items-center justify-content-center' style={{...style1,width:'50px'}} onClick={handleclick}>+</button>
    </div>
  )
}
