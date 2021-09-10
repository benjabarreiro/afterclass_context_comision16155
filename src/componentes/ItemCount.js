import React, { useState } from "react";

export default function ItemCount({addItem}) {
  const [count, setCount] = useState(1);
  return (
    <div>
      <button onClick={() => setCount(count+1)}>Sumar</button>
      <button onClick={() => setCount(count-1)}>Restar</button>
	  <button onClick={() => addItem({title: 'producto2', id: '2'}, count)}>Agregar</button>
      <h1>{count}</h1>
    </div>
  );
}
