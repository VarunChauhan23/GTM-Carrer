
import chair from '../../assets/chair.jpg'
import people from '../../assets/people.jpg'
import img1 from '../../assets/img1.png';
import director from '../../assets/profile-pic.png';
import styles from './PeopleCard.module.css'
const PeopleCard = () => {
  return (
    <>
    <div className={styles.topcontainer}>
      
      <img
        src={chair}
        alt="Background Image"
        className={styles.bgimg}
      />
      
      <img
        src={director}
        alt="Small Image"
        className={styles.directorimg}
      />
      <div className={styles.cardname}>
      <h2 >Gokulnanda Ghorai</h2>
      <p >Managing Director</p>
      </div>
      
    </div>
    <div className={styles.peoplecontainer}>
        <div className={styles.peoplecard}>
        <div className={styles.peoplecardbg}>
        <img src={people} className={styles.peopleimage}></img>
        </div>
        <h2 className={styles.peoplename}>Akhila Bai</h2>
        <p className={styles.peopledesignation}>Managing Director</p>
        </div>
        
        <div className={styles.peoplecard}>
        <div className={styles.peoplecardbg}>
        <img src={people} className={styles.peopleimage}></img>
        </div>
        <h2 className={styles.peoplename}>Akhila Bai</h2>
        <p className={styles.peopledesignation}>Managing Director</p>
        </div>
        <div className={styles.peoplecard}>
        <div className={styles.peoplecardbg}>
        <img src={people} className={styles.peopleimage}></img>
        </div>
        <h2 className={styles.peoplename}>Akhila Bai</h2>
        <p className={styles.peopledesignation}>Managing Director</p>
        </div>
    </div>
    </>
  )
}

export default PeopleCard;