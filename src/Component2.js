import React, { useState } from 'react'
import { connect } from 'react-redux';
import { MapDispatchToProps, MapStateToProps } from './Mapstate';

const Component2 = (props) => {
    const[choco , setChoco]=useState('')
    const handler1=(event)=>{
        setChoco(event.target.value)
      }
  return (
    <div>
        <table>
            <tbody>
            <tr><td>Buy Chocolates </td><td><input type="number" value={choco} name="choco" onChange={handler1}/></td><td><input type="submit" onClick={()=>props.chocofun(choco)} value="Order"/></td><td>{props.state.function3.quantity}</td></tr>
            </tbody>
        </table>
    </div>
  )
}

export default connect(MapStateToProps,MapDispatchToProps)(Component2);