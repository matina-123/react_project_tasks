import { useState } from "react";

function User({ name, age }) {
  return <p>{name} - {age}</p>;
}

function DestructuringTasks() {
  const [count, setCount] = useState(0);

  return (
    <>
      <User name="aluprasad" age={20} />
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
    </>
  );
}

export default DestructuringTasks;