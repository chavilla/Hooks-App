import React from 'react';
import { useCounter } from '../../hooks/useCounter';

const CounterCustomHook = () => {

    const { state, increment, decrement, reset }=useCounter();
    return ( 
        <>
            <h1>Counter Custom Hook {state}</h1>
            <hr/>
            <button className='btn btn-primary'
             onClick={()=>increment(2)}
            >+1</button>
            <button className='btn btn-warning'
             onClick={()=>decrement(2)}
            >-1</button>
             <button className='btn btn-secondary'
             onClick={ reset}
            >Reset</button>
        </>
     );
}
 
export default CounterCustomHook;