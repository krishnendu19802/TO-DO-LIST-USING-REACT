export const additem=(task)=>{
    return (dispatch)=>{
        dispatch({
            type:'additem',
            item :task
        })
    }
}

export const delitem=(id)=>{
    return (dispatch)=>{
        dispatch({
            type:'delitem',
            
            id:id
        })
    }
}

export const changeitem=(item)=>{
    return (dispatch)=>{
        dispatch({
            type:'changeitem',
            item:item
            // index:index
        })
    }
}

export const completeitem=(id)=>{
    return (dispatch)=>{
        dispatch({
            type:'completeitem',
            id:id
        })
    }
}