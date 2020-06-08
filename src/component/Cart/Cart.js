import React from 'react';
import { useState } from 'react';
import './Cart.css'

const Cart = (props) => {
    const cart = props.cart;

    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total += product.price;
    }

    let shipping = 0;
    if (total > 50){
        shipping = 0;
    }else if (total > 35){
        shipping = 4.99;
    }
    else if(total > 0){
        shipping = 12.99;
    }

    let tax = (total / 10).toFixed(2);
    const grandTotal = (total + shipping + Number(tax)).toFixed(2);
    
    return (
        <div className="cart">
            <h2>Order Summery</h2>
            <h4>Items Count: {cart.length} </h4>
            <p>Total Price: ${total.toFixed(2)}</p>
            <p>Shipping cost: ${shipping.toFixed(2)}</p>
            <p>Tax cost: ${tax}</p>
            <hr/>
            <p><strong>Grand Total Price: ${grandTotal}</strong></p>
            <button className="cart-button">Order</button>
        </div>
    );
};

export default Cart;