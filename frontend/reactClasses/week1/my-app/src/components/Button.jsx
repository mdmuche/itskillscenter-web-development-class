import React from 'react'

function Button({onClick, label}) {
  return (
    <button className='btn' onClick={onClick}>{label}</button>
  )
}

export default Button