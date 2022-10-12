import { handler } from "./Reducercake"

const initialstate={
    quantity:300
}

 const function3=(state=initialstate , action)=>{
    let t = parseInt(action.payload)

    switch(action.type){
        case 'CHOCOLATE':
            return {...state , quantity:handler(state.quantity , t)}
        default:
            return state;
    }
}
export default function3;