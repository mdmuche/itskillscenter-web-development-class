import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Contactt from '../components/Contactt'

function Contact() {
  return (
    <div>
        <Header />
        <div className='contact'>
            <Contactt />
            <Footer />
        </div>
    </div>
  )
}

export default Contact