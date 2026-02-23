import React from 'react'

function withUserName(WrappedComponent) {
    // function addNumbers(...nums) {
    //     let sum = 0;
    //     return nums.reduce((acc, curr, i, arr) => acc + curr, sum)
    // }
  return function EnhancedComponent(props) {
     return <WrappedComponent {...props} userName='John doe' />;
  }
}

function DisplayUser(props) {
    return <h1>User: {props.userName}</h1>;
}

export const EnhancedDisplayUser = withUserName(DisplayUser);