import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { cart } = props;
    console.log(cart)
    let total = 0;
    for (const product of cart) {
        total = total + product.price;
    }
    return (
        <div class='cart-detail'>
            {/* <h1>hello from cart {props.product.name}</h1> */}
            <h1>Price: {total} </h1>
            <h2>product added  : </h2>
            <h4>{props.recentProduct}</h4>

        </div>
    );
};

export default Cart;