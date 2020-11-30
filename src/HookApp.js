import React, { useState } from "react";

const HookApp = () => {
  const [state, setState] = useState(1);

  return (
    <>
      <h1>Hola mundo 2</h1>
      <p>{state}</p>
      <button onClick={() => setState(state + 1)}>aumenta</button>
    </>
  );
};

export default HookApp;
