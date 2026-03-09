// With useCallback: correct way of doing it
import { useState, useCallback } from 'react';
import MemoizedButton from './MemoizedButton';

function ParentComponentCorrect() {
  const [count, setCount] = useState(0);

  // The function is memoized and only re-created if `count` changes
  const handleClick = useCallback(() => {
    setCount(c => c + 1);
  }, []); // The empty dependency array means the function is only created once

  return (
    <div>
      <p>Count: {count}</p>
      <MemoizedButton onClick={handleClick} />
    </div>
  );
}

export default ParentComponentCorrect;

// In this improved version, useCallback memoizes the handleClick function. The empty dependency array [] tells React to only create this function once when the component mounts. Now, when the count state changes, ParentComponent re-renders, but the handleClick function remains the same object reference. Since the onClick prop of MemoizedButton hasn't changed, React.memo prevents the button from re-rendering, thus optimizing performance.
