import function1 from "./Reducercake"
import function2 from "./Reducericeceram"
import function3 from "./Reducerchocolate"
import { combineReducers } from "redux" 



const rootReducers = combineReducers({
    function1 , function2 , function3
}) 


export default rootReducers;