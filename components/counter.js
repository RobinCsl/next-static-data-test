import React, { useState } from 'react';

export default function Counter({init = 0}) {
  const [count, setCount] = useState(init);

  return (
    <div>
      You clicked {count} times{" "}
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}