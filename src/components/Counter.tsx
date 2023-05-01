import { useEffect, useRef, useState } from "react";

const Counter = () => {
  const [val, setValue] = useState("");
  const count = useRef(1);
  useEffect(() => {
    count.current++;
  }, [val]);
  return (
    <>
      <p>
        Render: {count.current} {val}
      </p>
      <input
        type="text"
        onChange={(e) => setValue(e.target.value)}
        value={val}
      />
    </>
  );
};
export default Counter;
