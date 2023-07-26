import React from 'react'
import { useReducer } from 'react'

const reducer=(state,action)=>{
    if(action.type==='INCR')
    {
        state=state+1;
    }

    else if(action.type==='DECR')
    {
        state=state-1;
    }
    return state;
};

const UseReducer = () => {

    const [state,dispatch]=useReducer(reducer,0);  //0 is the initial data.
  return (
    <>
    <div className='heading'>INCREEMENT AND DECREEMENT BUTTONS</div>
    <h1 align='center' className='count'>{state}</h1>
      
      <div className='container'>
        <button className="shattering-button" onClick={()=> dispatch({type:"INCR"})}>INCR</button>
        <button className="shattering-button" onClick={()=> dispatch({type:"DECR"})}>DECR</button>
      </div>
    </>
  )
}

export default UseReducer
