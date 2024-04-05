import React, { useEffect, useState } from 'react';
import { useDispatch } from "react-redux";
import ProductCard from './ProductCard';
import axios from 'axios';
import toast from "react-hot-toast";

const Home = () => {

  const [product, setProduct] = useState([]);

  useEffect(() => {
    const fetchProduct = async () => {
      const { data } = await axios.get("https://fakestoreapi.com/products")
      console.log(data);
      setProduct(data);
    }

    fetchProduct();
  }, [])

  const dispatch = useDispatch();
  
  const addToCartHandler = (options) => {
    dispatch({
      type: "addToCart",
      payload: options
    });
    dispatch({type: "calculatePrice"});
    toast.success("Added To Cart!");
  }

  return (
    <div className='home'>
      {
        product.map((i) => (
          <ProductCard
          key={i.id}
          name={i.title}
          id={i.id}
          price={i.price}
          imgSrc={i.image}
          handler={addToCartHandler}
           />
        ))
      }
    </div>
  )
}

export default Home