import { useState, useEffect } from "react";

export const MyComponent = () => {
  const [count, setCount] = useState(0);

  function addCount() {
    setCount((c) => c + 1);
  }

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={addCount}>Add</button>
    </div>
  );
};

export default MyComponent;
