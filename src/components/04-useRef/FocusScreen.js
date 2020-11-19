import React, { useRef } from 'react';
import '../02-useEffect/effects.css';

const FocusScreen = () => {

    const inputRef = useRef();

    console.log(inputRef);

    const handleClick=()=>{
       inputRef.current.select();
       console.log(inputRef);
    }

    return (
        <> 
        <h1>Focus Screen</h1>
        <hr/>
        <input
        ref={inputRef}
        type='text'
        className='form-control'
        placeholder='Su nombre'
        />

        <button className='my-2 btn btn-success'
        onClick={handleClick}
        >Focus</button>
        </>
     );
}
 
export default FocusScreen;