import React from 'react'

//? HOC higher order component
// function wraps component
function CompanyName(WrappedComponent) {
  return function EnhancedComponent({name}) {
    return <WrappedComponent name='Udemy'/>
  }
}

// wrapped component
function DisplayName({name}){
    return <div className='company-name'>Company: {name}</div>
}

export const EnhancedDisplayName = CompanyName(DisplayName);