import { useState } from "react";

function EventTasks() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  const [show, setShow] = useState(true);

  return (
    <>
      <button onClick={() => alert("Button Clicked!")}>Alert</button>

      <h3>{count}</h3>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>

      <input onChange={(e) => setText(e.target.value)} />
      <p>{text}</p>

      <button onClick={() => setShow(!show)}>Toggle</button>
      {show && <p>Hello React</p>}
    </>
  );
}

export default EventTasks;