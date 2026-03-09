// Example 2: Functions with Dependencies
// Often, your memoized function will depend on props or state. In this case, you need to include those dependencies in the dependency array of useCallback.


import { useState, useCallback } from 'react';

function MyComponent({ onSave }) {
  const [inputValue, setInputValue] = useState('');

  // The saveHandler depends on `inputValue` and `onSave`
  const saveHandler = useCallback(() => {
    // This function will only be re-created if `inputValue` or `onSave` changes
    onSave(inputValue);
  }, [inputValue, onSave]);

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={saveHandler}>Save</button>
    </div>
  );
}

export default MyComponent;