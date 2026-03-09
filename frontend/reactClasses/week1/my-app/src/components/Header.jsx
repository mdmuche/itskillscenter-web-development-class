import React from 'react'
import Button from './Button'

export default function Header() {
  // const register = () => {
  //   alert('User Registration was successful!');
  // }

  // const login = () => {
  //   alert('User logged in successfully!')
  // }

  const contact = () => {
    alert('contact');
  }

  return (
    <nav>
        {/* <h1>Esty</h1> */}
       <img className='header-img' src="./images/banji-logo.svg" alt="logo" />
       <ul className='header-items'>
          <li className='header-item'>Home</li>
          <li className='header-item'>About</li>
          <Button className='header-item' label={'Contact'} onClick={contact} />
       </ul>
       {/* <div>
          <Button label={'Register'} onClick={register} />
          <Button label={'Login'} onClick={login} />
       </div> */}
    </nav>
  )
}

// rfc or rfce
