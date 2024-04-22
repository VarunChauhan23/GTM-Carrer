import Card from "./Card";
import styles from "./products.module.css";
import img1 from "../../assets/img1.png";

const Products = () => {
  const cardsData = [
    {
      id: 1,
      imageUrl: img1,
      heading: "Win Go",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      price: "1,70,000",
    },
    {
      id: 2,
      imageUrl: img1,
      heading: "Win Go 2",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      price: "1,70,000",
    },
    {
      id: 3,
      imageUrl: img1,
      heading: "Win Go 3",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      price: "1,70,000",
    },
  ];

  return (
    <>
      <div className={styles.productsheading}>
        <h2 className={styles.headingtext}>Products</h2>
      </div>

      <div className={styles.cardcontainer}>
        <Card
          imgUrl={cardsData[0].imageUrl}
          heading={cardsData[0].heading}
          text={cardsData[0].text}
          price={cardsData[0].price}
          animationType="left-side"
        />
        <Card
          imgUrl={cardsData[1].imageUrl}
          heading={cardsData[1].heading}
          text={cardsData[1].text}
          price={cardsData[1].price}
          animationType="forward-side"
        />
        <Card
          imgUrl={cardsData[2].imageUrl}
          heading={cardsData[2].heading}
          text={cardsData[2].text}
          price={cardsData[2].price}
          animationType="right-side"
        />
      </div>

      <div className={styles.viewallbtncontainer}>
        <button className={styles.viewallbtn}>view all</button>
      </div>
    </>
  );
};

export default Products;
