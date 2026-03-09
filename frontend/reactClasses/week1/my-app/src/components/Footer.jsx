import React from 'react'

function Footer() {
  return (
    <footer>
        <h2>Designer for 7+ years. I've<br /> loved every minute of it.</h2>
        <div className='cards'>
            <div className='card'>
                <div className='list-num'>1</div>
                <div className='card-item'>I enjoy the process</div>
            </div>
            <div className='card'>
                <div className='list-num'>2</div>
                <div className='card-item'>I know what it means to be on a team</div>
            </div>
            <div className='card always-curious'>
                <div className='list-num'>3</div>
                <div className='card-item'>Always curious and always learning</div>
            </div>
        </div>
        <div className="social-icons">
            <div className="social-icon">
                <i class="fa fa-twitter"></i>
            </div>
            <div className="social-icon be-li">
                <i class="fa fa-behance"></i>
            </div>
            <div className="social-icon be-li">
                <i class="fa fa-linkedin"></i>
            </div>
        </div>
    </footer>
  )
}

export default Footer