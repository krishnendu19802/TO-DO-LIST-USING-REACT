import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Sidebar(props) {
    useNavigate
    let bgcol, textcol
    if (props.darkmode === true) {
        bgcol = 'gray'
        textcol = 'light'

    }
    else {
        bgcol = 'white'
        textcol = 'dark'
    }
    const navigate = useNavigate()

    let handlesort = (event) => {
        // let newpath=`/${event.target.value
        if (event.target.value === 'all')
            props.handlesort(true)
        else {
            props.handlesort(false)
            console.log(`/${event.target.value}`) /
                // history.push(newpath)
                // if()
                navigate(`/${event.target.value}`)
        }
    }


    return (
        <>
            <div class={`offcanvas offcanvas-start ${props.show[0]} text-${textcol}`} tabindex="-1" id="offcanvas" aria-labelledby="offcanvasLabel" style={{ width: '200px', backgroundColor: bgcol }}>
                <div class="offcanvas-header" style={{ backgroundColor: props.darkmode ? '#343a40' : 'gray' }}>
                    <h5 class="offcanvas-title" id="offcanvasLabel" >Filter</h5>
                    <button type="button" class={`btn btn-close `} data-bs-dismiss="offcanvas" aria-label="Close"
                        onClick={props.handleclick}></button>
                </div>
                <div className='d-flex align-items-center my-5 mx-2'>

                    <form action="#" >
                        <div>

                            <input type="radio" id='opt1' className='my-2 mx-2' name='sort-option' onClick={handlesort} value={'all'} defaultChecked />
                            <label htmlFor="opt1">

                                All

                            </label>
                        </div>

                        <div>

                            <input type="radio" id='opt2' className='my-2 mx-2' name='sort-option' onClick={handlesort} value={'incomplete'} />
                            <label htmlFor="opt2">

                                Incomplete
                            </label>
                        </div>

                        <div>

                            <input type="radio" id='opt3' className='my-2 mx-2' name='sort-option' onClick={handlesort} value='complete' />
                            <label htmlFor="opt3" value={'complete'}>

                                Complete
                            </label>
                        </div>



                    </form>
                </div>


            </div>
        </>
    )
}
