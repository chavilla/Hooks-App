import React, { useState } from 'react';
import { useCounter } from '../../hooks/useCounter';
import '../02-useEffect/effects.css';
import Small from './Small';

const Memorize = () => {

    const { counter, increment }=useCounter(10);

    const [show,setShow]=useState(true);

    return ( 
        <div>
            <h1>Counter <small><Small value={counter}/></small></h1>
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
 
export default Memorize;