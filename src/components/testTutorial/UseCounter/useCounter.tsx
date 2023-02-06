import { useState } from "react";

const useCounter = (initialVal = 0) => {
  const [count, setCount] = useState(initialVal);

  const Increament = () => setCount((prev) => prev + initialVal);
  const Decreament = () => setCount((prev) => prev - initialVal);
  const Reset = () => setCount(initialVal);

  return { count, Increament, Decreament, Reset };
};

export default useCounter;
