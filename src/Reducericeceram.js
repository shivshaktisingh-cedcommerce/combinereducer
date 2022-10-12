import { handler } from "./Reducercake"

const initialstate={
    quantity:200
}

 const function2=(state=initialstate , action)=>{
    let t = parseInt(action.payload)
    
    switch(action.type){
        case 'ICECREAM':
            return {...state , quantity:handler(state.quantity , t)}
        default:
            return state;
    }
}
export default function2;