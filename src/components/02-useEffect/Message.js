import React, { useEffect, useState } from 'react';

const Message = () => {

    const [coords,setCoords]=useState({ x:0, y:0 });

    const { x, y }=coords;

    useEffect(() => {

        const mouseMoved=(e)=>{
            const coords={ x:e.x, y:e.y };
           setCoords(coords);
        }

        window.addEventListener('mousemove', mouseMoved);

        return ()=>{

            //Se ejecuta cuando el componente es desmontado
           window.removeEventListener('mousemove', mouseMoved);
        }
    }, [])

    return ( 
        <>
        <div>Hola Jesús</div>
        <p>x: {x} y:{y}</p>
        </>
     );
}
 
export default Message;