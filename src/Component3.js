import React, { useState } from 'react'
import { connect } from 'react-redux'
import { MapDispatchToProps, MapStateToProps } from './Mapstate'

const Component3 = (props) => {
    const[ice , setIce]=useState('')
    const handler1=(event)=>{
      setIce(event.target.value)
    }
  return (
    <div>
        <table>
            <tbody>
            <tr><td>Buy Icecream </td><td><input type="number" value={ice} name="ice" onChange={handler1}/></td><td><input type="submit" onClick={()=>props.icefun(ice)} value="Order"/></td><td>{props.state.function2.quantity}</td></tr>
            </tbody>
        </table>
    </div>
  )
}

export default connect(MapStateToProps,MapDispatchToProps)(Component3);