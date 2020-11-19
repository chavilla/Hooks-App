import React from 'react';

const Increment = React.memo(({ increment}) => {

    console.log('Me volví a generar');

    return ( 
        <button className='btn btn-primary'
        onClick={ ()=> increment(5)}
        >
            Incrementa
        </button>
     );
})
 
export default Increment;