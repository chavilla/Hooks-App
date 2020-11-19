import React, { useMemo, useState } from 'react';
import { weightProccess } from '../../helpers/WeightProccess';
import { useCounter } from '../../hooks/useCounter';
import '../02-useEffect/effects.css';

const MemoHook = () => {

    const { counter, increment }=useCounter(1500);
    const [show,setShow]=useState(true);
    const memoWeightProcess=useMemo(()=> weightProccess(counter), [counter]);


    return ( 
        <div>
            <h1>MemoHook</h1>
            <h3>Counter  <small>{counter}</small>  </h3>
            <hr/>

            <p>{memoWeightProcess}</p>

            <button
            className='btn btn-primary'
            onClick={increment}
            >+1</button>

            <button className='btn btn-outline-primary ml-3'
            onClick={ ()=> { setShow(!show) } }
            >
                { JSON.stringify(show) }
            </button>
        </div>
     );
}
 
export default MemoHook;