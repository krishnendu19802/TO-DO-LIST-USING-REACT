import React, { useState } from 'react'
import Itemdisplay from './Itemdisplay'
import { useSelector } from 'react-redux'
// import image from "../ Components"

export default function Tasklist(props) {

    const tasklist=useSelector(state=>state.tasklist)
    // console.log(tasklist)
   
    let style1={
        width:'55%',
        margin:'25px 25%'
        // backgroundColor:'#70737694'
    }

    return (
        <div className='conatainer-fluid mx-5  ' >
            {tasklist.length===0 && 
            <>
                     <div className=' d-flex justify-content-center rounded ' style={style1}>
                     <img src={"/src/Components/techny-empty-clipboard.png"} alt="empty"/>
                     </div>
                     </>
                    }
                    <div style={{...style1}}>
            {tasklist[0] && tasklist.map((item, index) => {
                return (
                    
                    
                    <Itemdisplay index={index} item={item} darkmode={props.darkmode}/>
                    
                    )
                })}
                </div>
        </div>
    )
}
