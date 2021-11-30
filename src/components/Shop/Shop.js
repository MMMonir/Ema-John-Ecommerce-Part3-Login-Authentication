import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import { Link } from 'react-router-dom';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [displayProducts, setDisplayProducts] = useState([]);

    useEffect( () =>{
        fetch('./products.JSON')
        .then(res => res.json())
        .then(data => {
            setProducts(data);
            setDisplayProducts(data);
        })
    }, [])

    //GetStore cart from LocalStore
    useEffect( () => {
        if(products.length){
            const savedCart = getStoredCart();
            const storedCart = [];
            for(const key in savedCart){
                const addedProduct = products.find( product => product.key === key);
                if(addedProduct){
                    const quantity = savedCart[key];
                    addedProduct.quantity = quantity;
                    storedCart.push(addedProduct);
                }
            }
            setCart(storedCart);
        }
    }, [products])

    const handleAddToCart = (product) =>{
        const exists = cart.find(pd => pd.key === product.key);
        let newCart = [];
        if(exists){
            const rest = cart.filter(pd => pd.key !== product.key);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, product];
        }
        else{
            product.quantity = 1;
            newCart = [...cart, product];
        }

        setCart(newCart);
        addToDb(product.key);
    }

    const handleSearch = event => {
        const searchText = event.target.value;
        const matchProducts = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()));
        setDisplayProducts(matchProducts);
    }
    return (
        <>
            <div className="search-container">
                <input 
                    type="text" 
                    onChange={handleSearch}
                    placeholder="Search Product"
                />
            </div>
            <div className="container">
                <div className="shop-container">
                    <div className="product-container">
                        {
                            displayProducts.map(product => <Product 
                                key={product.key}
                                product={product} 
                                handleAddToCart={handleAddToCart}
                                ></Product>)
                        }
                    </div>
                    <div className="cart-container">
                        <Cart cart={cart}>
                            <Link to='/review'><button className="btnCart">Review Your Order</button></Link>
                        </Cart>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Shop;