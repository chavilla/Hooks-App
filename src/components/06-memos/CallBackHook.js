import React, { useCallback, useState } from 'react';
import '../02-useEffect/effects.css';
import Increment from './Increment';

const CallBackHook = () => {

    const [counter,setCounter]=useState(0);

    /* const increment=()=>{
        setCounter(counter+1);
    } */

    const increment=useCallback((num)=>{
        setCounter(c=>c+num)
    },[setCounter] )

    return ( 
        <div>
            <h1>UseCallBack Hook:  { counter } </h1>
            <hr/>
            <Increment
            increment={ increment }
            />        
        </div>
     );
}
 
export default CallBackHook;