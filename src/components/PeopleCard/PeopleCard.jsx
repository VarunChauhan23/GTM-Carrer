
import people from '../../assets/people.jpg'
import './PeopleCard.module.css'
const PeopleCard = () => {
  return (
    <div className='people-container'>
        <div className="people-card">
        <div className="people-card-bg">
        <img src={people} className='people-image'></img>
        </div>
        <h2 className="people-name">Akhila Bai</h2>
        <p className='people-designation'>Managing Director</p>
        </div>
        
        <div className="people-card">
        <div className="people-card-bg">
        <img src={people} className='people-image'></img>
        </div>
        <h2 className="people-name">Akhila Bai</h2>
        <p className='people-designation'>Managing Director</p>
        </div>
        <div className="people-card">
        <div className="people-card-bg">
        <img src={people} className='people-image'></img>
        </div>
        <h2 className="people-name">Akhila Bai</h2>
        <p className='people-designation'>Managing Director</p>
        </div>
    </div>
  )
}

export default PeopleCard