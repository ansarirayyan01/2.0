import React, { useState, useEffect } from "react";

function useInterval(fn, timeout) {
  useEffect(() => {
    const int = setInterval(() => {
      fn();
    }, timeout);
    return () => clearInterval(int);
  }, []);
}

function App() {
  const [count, setCount] = useState(0);
  useInterval(() => {
    setCount((c) => c + 1);
  }, 1000);

  return <div>this is your {count}</div>;
}

export default App;
