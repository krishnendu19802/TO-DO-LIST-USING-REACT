const reducer =(state=[],action)=>{
    if(action.type==='additem'){
        let newarr= state.concat(action.item)
        // console.log(newarr)
        return newarr
    }
    else if(action.type==='delitem'){
        
        let newarr=state.filter((item)=>{return item.id!==action.id})
        // console.log(newarr)
        return newarr
    }

    else if(action.type==='changeitem'){
        // let newarr=state.slice(0,action.index).concat(action.item).concat(state.slice(action.index+1))
        let newarr=state.map((task)=>{
            if(task.id===action.item.id)
            return action.item
            else
            return task
        })
        // console.log(newarr)
        return newarr
    }
    else if(action.type==='completeitem'){
        // let newarr={...state[action.index],status:'complete'}
        // console.log(newarr)
        let newarr=state.map((task)=>{
            if(task.id===action.id)
            return {...task,status:'complete'}
            else
            return task
        })
        // for(let i=0;i<state.length;i++){
        //     if(state[i].id===action.id)
        // }
        // newarr=state.slice(0,action.index).concat(newarr).concat(state.slice(action.index+1))
        return newarr
    }
    else{
        return state
    }

}
export default reducer