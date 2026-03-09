import React from 'react'
import Header from '../components/Header'
// import Welcome from '../components/Welcome'
import Products from '../components/Products'
import InputField from '../components/InputField'
import BreadCrumbs from '../components/BreadCrumbs'
import Greeting from '../components/Greeting'

export default function Home() {

  return (
    <div>
      <Header />
      <h1>Welcome to Esther's collection</h1>
      <Greeting />
      {/* <Welcome name={'john doe'} country={'Nigerian'} />
      <Welcome name={'Sarah joe'} country={'Ghanaian'} />
      <Welcome name={'joe doe'} country={'Gabonesse'} /> */}
      <Products />
      <InputField label={'Username'} onChange={(e) => console.log(e.target.value)}/>
      <BreadCrumbs paths={['Home', 'Blogs', 'Articles']}/>
    </div>
  )
}
