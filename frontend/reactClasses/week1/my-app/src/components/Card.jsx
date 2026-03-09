import Button from './Button'

function Card({ src ,title ,description, price }) {
  const buyProduct = () => {
    alert('bought product successfully');
  }

  return (
    <div className='product-card'>
        <img className='prod-img' src={src} alt={description} />
        <h3 className='card-h3'>{title}</h3>
        <p className='para'>{description}</p>
        <span className='prod-price'>${price}</span>
        <Button label={'Buy Now'} onClick={buyProduct}/>
    </div>
  )
}

export default Card