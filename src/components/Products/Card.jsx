
import styles from './card.module.css'
const Card = ({imgUrl,heading,text,price,animationType}) => {
 
  return (
    <div className={styles.card}>
        <img src={imgUrl} alt="Card" className={styles.cardimage}/>
        <div className={styles.cardcontent}>
        <h2 className={styles.cardheading}>{heading}</h2>
        <p className={styles.cardtext}>{text}</p>
        <p className={styles.cardprice}>Price: ₹{price}</p>
        <div className={styles.btncontainer}>
        <button className={styles.readmorebtn}>READ MORE</button>
        </div>
        
        </div>
    </div>
  )
}

export default Card