import React from 'react'
import Button from './Button'

function Welcome({name, country}) {
  const login = () => {
    alert('Login successful');
  }

  return (
    <>
        <div>Welcome, {name}. you are {country}</div>
        <Button label={'login'} onClick={login}/>
    </>
  )
}

export default Welcome