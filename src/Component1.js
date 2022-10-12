import React, { useState } from 'react'
import { connect } from 'react-redux';
import { MapDispatchToProps, MapStateToProps } from './Mapstate';

const Component1 = (props) => {
  const[cake , setCake]=useState('')
  const handler1=(event)=>{
  
    setCake(event.target.value)
  }

  return (
    <div>
      <table>
        <tbody>
        <tr><td>Buy Cake </td><td><input type="number" value={cake} name="cake" onChange={handler1}/></td><td><input type="submit" onClick={()=>props.cakefun(cake)} value="Order"/></td><td>{props.state.function1.quantity}</td></tr>
        </tbody>
      </table>
    </div>
  )
}


export default connect(MapStateToProps,MapDispatchToProps)(Component1);