import React, { useLayoutEffect, useRef, useState } from "react";
import { useCounter } from "../../hooks/useCounter";
import useFecth from "../../hooks/useFetch";
import './LayoutEffects.css';

const LayoutEffect = () => {


  const { state, increment } = useCounter();

  const {
    state: { data },
  } = useFecth(`https://www.breakingbadapi.com/api/quotes/${state}`, true);

  const [boxSize,setBoxSize]=useState(0);

  // Condicional Importante
  const { quote } = !!data && data[0];

  //console.log(loading);

  const pTag=useRef();

  useLayoutEffect(() => {
      setBoxSize(pTag.current.getBoundingClientRect().width);
  },[quote])

  return (
    <div>
      <h1>Breaking Quotes</h1>
     
        <blockquote className="blockquote text-right">
          <p 
          ref={pTag}
          className="mb-0">{quote}</p>
        </blockquote>

        <pre>{boxSize}</pre>

      <button className="btn btn-primary" onClick={increment}>
        Siguiente quote
      </button>
    </div>
  );
};

export default LayoutEffect;
