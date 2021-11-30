import React from 'react';
import { useHistory } from 'react-router';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import { clearTheCart, removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

const OrderReview = () => {
    const [products] = useProducts();
    const [cart, setCart] = useCart(products);
    const history = useHistory();

    const handleRemoveItem = key => {
        //Remove From UI
        const newCart = cart.filter(product => product.key !== key);
        setCart(newCart);
        //Remove From LocalStorage
        removeFromDb(key);
    }

    const handlePlaceOrder = () =>{
        history.push('/shipping')
        // setCart([]);
        // clearTheCart();
    }
    return (
        <div className="container">
            <div className="shop-container">
                <div className="product-container">
                    {
                        cart.map(product => <ReviewItem 
                            key={product.key} 
                            product={product} 
                            handleRemoveItem={handleRemoveItem}
                            />)
                    }
                </div>
                <div className="cart-container">
                    <Cart cart={cart}>
                        <button onClick={handlePlaceOrder} className="btnCart">Proceed To Shipping</button>
                    </Cart>
                </div>
            </div>
        </div>
    );
};

export default OrderReview;