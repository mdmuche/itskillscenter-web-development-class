import React from 'react'

function Contactt() {
  return (
    <div>
      <h1>Connect with me</h1>
      <p>I am always excited to explore new opportunities and<br /> collaborate on innovative projects.</p>
      <div className='container'>
        <div className='img-container'>
          <img src="./images/banji.svg" alt="banji" />
        </div>
        <div className='connect-on'>
          <h4>If you'd like to get in touch or discuss potential<br /> collaborations, please feel free to contact me.</h4>
          <h3>Connect on <a className='linkedin-connect' href="https://www.linkedin.com/in/martins-abula-3389b5171">LinkedIn</a></h3>
          <div className='email-container'>
            <i class="fa fa-envelope-o email-phone"></i>
            <a className='email' href='mailto:abulamartins@gmail.com'>4designspacce@gmail.com</a>
          </div>
          <div className='phone-container'>
            <i class="fa fa-phone email-phone"></i>
            <div className='phones'>
              <a href='tel:+2348111883671'>(+234) 811 1883 671</a>
              <a href="tel:+2349077489627">(+234) 907 7489 627</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contactt