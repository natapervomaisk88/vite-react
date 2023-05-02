import { useMemo, useState } from "react";

const calc = (n: number) => {
  let i = 0;
  while (i < 1000000) i++;
  const result: number = n * 10;
  console.log("Run calc", n, result);
  return result;
};

const MyUseMemo = () => {
  const [name, setName] = useState("");
  const [counter, setCounter] = useState(0);
  const [price, setPrice] = useState(100);
  useMemo(() => calc(price), [price]);
  return (
    <>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        OK {counter}
      </button>
      <button onClick={() => setPrice(price + 10)}>UP</button>

      <p>{price}</p>
    </>
  );
};
export default MyUseMemo;
