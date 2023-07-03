import React, { useState } from 'react'
import Itemdisplay from './Components/Itemdisplay'
// import image from "../ Components"

export default function Tasklist(props) {
   
    let style1={
        width:'55%',
        margin:'25px 25%',
        // backgroundColor:'#70737694'
    }

    return (
        <div className='conatainer-fluid mx-5  ' >
            {props.tasklist.length===0 && 
            <>
                     <div className=' d-flex justify-content-center rounded ' style={style1}>
                     <img src={"/src/Components/techny-empty-clipboard.png"} alt="empty"/>
                     </div>
                     </>
                    }
                    <div style={{...style1}}>
            {props.tasklist[0] && props.tasklist.map((item, index) => {
                return (
                    
                    
                    <Itemdisplay index={index} item={item} deltask={props.deltask} updatetask={props.updatetask}/>
                    
                    )
                })}
                </div>
        </div>
    )
}
