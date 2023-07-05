import React, { useState } from 'react'
import Itemdisplay from './Itemdisplay'
import { useSelector } from 'react-redux'
// import image from "../ Components"

export default function Tasklist(props) {
    let tlist
    const tasklist=useSelector(state=>state.tasklist)
    if(props.sort[0]===false){
       tlist=tasklist
    }
    else{
        tlist=tasklist.filter((task)=>{
            return task.status===props.sort[1]
        })
    }

    // console.log(tasklist)
   
    let style1={
        width:'55%',
        margin:'25px 25%'
        // backgroundColor:'#70737694'
    }

    return (
        <div className='conatainer-fluid mx-5  ' >
            {tlist.length===0 && 
            <>
                     <div className=' d-flex justify-content-center rounded ' style={{...style1}}>
                     <img src={"/src/Components/techny-empty-clipboard.png"} alt="empty"/>
                     </div>
                     </>
                    }
                    <div style={{...style1}}>
            {tlist[0] && tlist.map((item, index) => {
                return (
                    
                    
                    <Itemdisplay key={item.id} index={index} item={item} darkmode={props.darkmode}/>
                    
                    )
                })}
                </div>
        </div>
    )
}
