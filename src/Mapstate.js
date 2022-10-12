import { cakeentry ,  chocolatesentry, icecreamentry} from './Reduceraction';

export const MapStateToProps=(state)=>{
    return {
       state
    }
    
  }
export const MapDispatchToProps=(dispatch)=>{
    return{
       cakefun:(t)=>dispatch(cakeentry(t)) ,
       chocofun:(t)=>dispatch(chocolatesentry(t)) ,
       icefun:(t)=>dispatch(icecreamentry(t))
    }
  }
  