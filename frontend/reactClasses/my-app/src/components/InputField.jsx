import React from 'react'

function InputField({ label, type = 'text', onChange }) {
  return (
    <div>
        <label>{label}</label>
        <input type={type} onChange={onChange} />
    </div>
  )
}

export default InputField