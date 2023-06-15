import { useState } from "react";
import { Counter } from "./Counter";
const CounterContainer = () => {
  const [contador, setContador] = useState(0);
  const sumar = () => {};
  return (
    <div>
      <Counter contador={contador} setContador={setContador} />
    </div>
  );
};

export default CounterContainer;
