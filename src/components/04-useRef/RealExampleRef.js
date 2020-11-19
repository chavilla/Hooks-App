import React, { useState } from 'react';
import '../02-useEffect/effects.css';
import  MultiCustomHook from '../03-examples/MultiCustomHook';

export const RealExampleRef =()=>{

    const [show,setShow]=useState(false);

    return(
        <>
       <h2>Real Example Ref</h2>
       <hr/>

      { show && <MultiCustomHook/>}
        <button
        className='btn btn-primary mt-5'
        onClick={()=>setShow(!show)}
        >Ocultar/mostrar</button>
       </>
    )

}