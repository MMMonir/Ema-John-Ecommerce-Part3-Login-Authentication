import React from 'react';

const ReviewItem = ({ product, handleRemoveItem }) => {
    const { name, price, quantity, key } = product;

    return (
        <div>
            <h4>{name}</h4>
            <p>Price: ${price}</p>
            <p>Quantity: {quantity}</p>
            <button className="btnCart" onClick={() => handleRemoveItem(key)}>Remove</button>
        </div>
    );
};

export default ReviewItem;