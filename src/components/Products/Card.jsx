
import './card.css'
const Card = ({imgUrl,heading,text,price,animationType}) => {
 
  return (
    <div className={`card ${animationType}`}>
        <img src={imgUrl} alt="Card" className='card-image'/>
        <div className='card-content'>
        <h2 className='card-heading'>{heading}</h2>
        <p className='card-text'>{text}</p>
        <p className='card-price'>Price: ₹{price}</p>
        <div className='btn-container'>
        <button className='read-more-btn'>READ MORE</button>
        </div>
        
        </div>
    </div>
  )
}

export default Card