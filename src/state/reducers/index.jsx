import { combineReducers } from "redux";
import tasklistReducer from "./tasklistReducer"

const reducers=combineReducers({
    tasklist:tasklistReducer
})

export default reducers