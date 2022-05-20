import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';


import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [recentName, setrecentName] = useState([]);
    const [displayProducts, setDisplayProducts] = useState([]);
    const [carts, setCarts] = useState([]);
    useEffect(() => {
        fetch('./foods.JSON').then(res => res.json()).then(data => {
            setProducts(data);
            setDisplayProducts(data)

        });
    }, [])
    // console.log(products)
    // const [products, setProducts] = useState([]);
    // //const [carts, setCarts] = useState([])
    // useEffect(() => {
    //     fetch('./products.JSON').then(res => res.json()).then(data => setProducts(data))
    // }, [])

    const handleProduct = (product, myname) => {
        const newCarts = [...carts, product]
        setCarts(newCarts);
        setrecentName(myname);
        console.log(myname)
        //console.log(newCarts)
    }

    // console.log(products)
    const handleChange = event => {
        console.log(event.target.value)
        const searchText = event.target.value;
        const matchText = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()));
        console.log(matchText.length)
        setDisplayProducts(matchText)
        // setDisplayProducts(matchText)

    }
    return (
        <div>
            <div className="search-container">
                <input type="text"
                    onChange={handleChange}
                    placeholder='Search Food' />
            </div>
            <div className='shop'>

                <div className="food ">
                    <h1 class='center'>Menu</h1>
                    <div class='grid'>

                        {

                            displayProducts.map(product => <Product product={product} handleProduct={handleProduct} ></Product>)
                        }
                    </div>


                </div>
                <div className="cart">
                    <Cart cart={carts} recentProduct={recentName}></Cart>

                </div>


            </div>
        </div>


    );
};

export default Shop;