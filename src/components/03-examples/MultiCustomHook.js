import React from "react";
import { useCounter } from "../../hooks/useCounter";
import useFecth from "../../hooks/useFetch";

const MultiCustomHook = () => {
  const { counter, increment } = useCounter();

  const {
    data, loading 
  } = useFecth(`https://www.breakingbadapi.com/api/quotes/${counter}`, true);

  // Condicional Importante
  const { author, quote } = !!data && data[0];

  //console.log(loading);

  return (
    <div>
      <p className='counter'>{counter}</p>
      <h1>Breaking Quotes</h1>
      {loading ? (
        <div className="alert alert-info text-center">Loading...</div>
      ) : (
        <blockquote className="blockquote text-right">
          <p className="mb-0">{quote}</p>
          <footer className="block">{author}</footer>
        </blockquote>
      )}
      <button className="btn btn-primary" onClick={increment}>
        Siguiente quote
      </button>
    </div>
  );
};

export default MultiCustomHook;
