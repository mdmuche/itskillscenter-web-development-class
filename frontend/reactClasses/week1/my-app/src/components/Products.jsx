import React from 'react'
import Card from './Card'

function Products() {
  return (
  <>
    <h2>Products</h2>
    <div className='products'>
        <Card
          src={'./images/brazilian1.jfif'}
          title={'Brazilian wig'} 
          description={'a black curly brazilian wig'}
          price={1000}
          />

          <Card
          src={'./images/brazilian2.jfif'}
          title={'Brazilian wig'} 
          description={'a black curly brazilian wig'}
          price={5000}
          />

          <Card
          src={'./images/brazilian3.jfif'}
          title={'Brazilian wig'} 
          description={'a black curly brazilian wig'}
          price={2000}
          />
    </div>
  </>
  )
}

export default Products