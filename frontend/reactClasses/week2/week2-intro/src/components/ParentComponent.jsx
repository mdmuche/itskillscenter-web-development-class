//! Without useCallback:
import { useState } from 'react';
import MemoizedButton from './MemoizedButton';

function ParentComponent() {
  const [count, setCount] = useState(0);

  // A new function is created on every render
  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <MemoizedButton onClick={handleClick} />
    </div>
  );
}

export default ParentComponent;