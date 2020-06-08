import React, {useState} from 'react';
import './Shop.css';
import Cart from '../Cart/Cart';
import fakeData from '../../fakeData';
import Product from '../Product/Product';

const Shop = () => {
    const first10 = fakeData.splice(0, 10)
    const [products, setProdcts] = useState(first10);
    const[cart, setCart] = useState([]);
    const handleAddProduct = (product) =>{
        const newCart = [...cart, product];
        setCart(newCart);
    }
    return (
        <div className="shop-container">

            <div className="product-container">
               {
                   products.map(pd => <Product handleAddProduct={handleAddProduct} product={pd}></Product>)
               }
           </div>   

            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>

        </div>
    );
};

export default Shop;