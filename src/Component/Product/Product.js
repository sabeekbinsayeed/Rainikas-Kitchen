import React from 'react';
import './Product.css'

const Product = (props) => {
    const { name, imgs, shelf, price, review } = props.product
    return (
        <div className='grid' >
            <div className='product-info'>
                <div className="product-img">
                    <img src={imgs} alt="" />

                </div>
                <div className="product-detail">
                    <h1>{name}</h1>
                    <h2>{price}</h2>
                    <h2>{shelf}</h2>
                    <button class='button' onClick={() => { props.handleProduct(props.product, name) }}>Add to Cart</button>

                </div>

            </div>
        </div>

    );
};

export default Product;