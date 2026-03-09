import React from 'react';

const MemoizedButton = React.memo(({ onClick }) => {
  console.log('Button rendered');
  return <button onClick={onClick}>Click Me</button>;
});

export default MemoizedButton;
