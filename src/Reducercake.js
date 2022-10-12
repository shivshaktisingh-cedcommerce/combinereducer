const initialstate={
    quantity:100
}

 const function1=(state=initialstate , action)=>{
    console.log("cake")
    let t = parseInt(action.payload) 
    switch(action.type){
        case 'CAKE':
            return {...state , quantity:handler(state.quantity , t)}
        default:
            return state;
    }
}

 export function handler(quantity , change){
   if(quantity<change){
    alert("Out of Stock")
    return quantity 
   }
   if(quantity>=change){
      return quantity - change
   } 

}
export default function1;