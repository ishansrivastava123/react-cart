import React from 'react';
import CartItem from './CartItem';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const Cart = () => {
  const {cartItems, subTotal, shipping, tax, total} = useSelector(state => state.cart)
  const dispatch = useDispatch();

  const increment = (id) => {
    dispatch({
      type: "addToCart",
      payload: { id }
    });
    dispatch({type: "calculatePrice"});
  }

  const decrement = (id) => {
    dispatch({
      type: "decrement",
      payload: id
    })
    dispatch({type: "calculatePrice"});
  }

  const deleteHandler = (id) => {
    dispatch({
      type: "deleteFromCart",
      payload: id
    })
    dispatch({type: "calculatePrice"});
  }

  return (
    <div className='cart'>
        <main>
            {
              (cartItems.length > 0) ? (
                cartItems.map((i) => (
                  <CartItem
                  key={i.id}
                  imgSrc={i.imgSrc}
                  name={i.name}
                  price={i.price}
                  qty={i.quantity}
                  id={i.id}
                  increment={increment}
                  decrement={decrement}
                  deleteHandler={deleteHandler} />
                ))
              ) : (
                <h1>No Items Yet</h1>
              )
            }
        </main>
        <aside>
            <h2>Subtotal: ${subTotal}</h2>
            <h2>Shipping: ${shipping}</h2>
            <h2>Tax: ${tax}</h2>
            <h2>Total: ${total}</h2>
        </aside>
    </div>
  )
}

export default Cart