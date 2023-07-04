import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import {actionCreators} from "../state/index"

export default function Itemdisplay({item,index,deltask,updatetask,darkmode}) {
    const dispatch=useDispatch()
   const actions=bindActionCreators(actionCreators,dispatch)
    
    let style2 = {
        backgroundColor:'#70737694',
        borderRadius:'5px',

        boxShadow: '2px 2px grey',
        margin: '25px 1%',
        padding: '5px',
        width: '98%',
        color:item.status==='complete'?'gray':'',
        textDecoration:item.status==='complete'?'line-through':'none'


        
    }
    const [edit, setedit] = useState(true)
    const [newitem,setNewItem]=useState(item)

    const handlechange=(event)=>{
         setNewItem((prev)=>{
            return {...prev,body:event.target.value}
         })
    }
    let handleedit = () => {
        // console.log("clicked")
        setedit(prev=>!prev)
    }

    let confirmedit=()=>{
        // console.log(newitem)
        setedit(prev=>!prev)
        actions.changeitem(newitem,index)
        // updatetask(newitem,index)
    }
    let handlekey=(event)=>{
       if(event.key==='Enter')
       confirmedit()
    }

    let handledelete=(val)=>{
        actions.delitem(val)
    //   deltask(val)
    }
 
    let handlecomplete=()=>{
        actions.completeitem(index)
    }

  return (
    <>
                    <div className='d-flex align-items-center' style={style2}>
                        {edit && <input className='mx-2' style={{backgroundColor:'#70737694',
        borderRadius:'5px'}} type={'checkbox'} onClick={handlecomplete} checked={item.status==='complete'} readOnly={item.status==='complete'} /> }
                        {edit && item.body}

                        {edit && item.status!=='complete'&& <button className={`btn ms-auto ${darkmode?"text-light":""} `} onClick={handleedit} >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                            </svg>
                        </button>}

                        {!edit  && <input type="text" value={newitem.body} style={{backgroundColor:'#70737694',
        borderRadius:'5px',}} onChange={handlechange} onKeyDown={handlekey} />}
                        {!edit &&  
                            <button className={`btn ms-auto ${darkmode?"text-light":""}`} onClick={confirmedit}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check2" viewBox="0 0 16 16">
                                    <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                                </svg>
                            </button>
                        }


                        <button className={`btn mx-3 ${darkmode?"text-light":""} ${item.status!=='complete'?"":"ms-auto"}`} onClick={() => { handledelete(item.id) }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash3-fill" viewBox="0 0 16 16">
                                <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z" />
                            </svg>
                        </button>
                    </div>
                </>
  )
}
