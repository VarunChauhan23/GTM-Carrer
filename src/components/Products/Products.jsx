import Card from "./Card";
import styles from "./products.module.css";
import img1 from "../../assets/img1.png";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Products = () => {
  // const cardsData = [
  //   {
  //     id: 1,
  //     imageUrl: img1,
  //     heading: "Win Go",
  //     text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  //     price: "1,70,000",
  //   },
  //   {
  //     id: 2,
  //     imageUrl: img1,
  //     heading: "Win Go 2",
  //     text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  //     price: "1,70,000",
  //   },
  //   {
  //     id: 3,
  //     imageUrl: img1,
  //     heading: "Win Go 3",
  //     text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  //     price: "1,70,000",
  //   },
  // ];
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios.get('https://gtm-backend.onrender.com/api/product/get')
      .then(response => {
        const firstThreeProducts = response.data.data.slice(0, 3);
        setProducts(firstThreeProducts);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
        setLoading(false);
      });
  }, []);

  return (
    <>
  <div className={styles.productsheading}>
    <h2 className={styles.headingtext}>Products</h2>
  </div>

  <div className={styles.cardcontainer}>
    {products.map((product, index) => (
      <Card
        key={index} 
        imgUrl={product.avatar}
        heading={product.name} 
        text={product.description} 
        price={product.price} 
        productId={product._id}
        // animationType={index % 2 === 0 ? "left-side" : "right-side"} 
      />
    ))}
  </div>

  <div className={styles.viewallbtncontainer}>
  <Link to="/product" className={styles.viewallbtn}>view all</Link>
  </div>
</>
  );
};

export default Products;
