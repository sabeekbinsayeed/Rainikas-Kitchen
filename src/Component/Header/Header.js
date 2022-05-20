import React from 'react';
import pic from '../../Capture.PNG'
import './Header.css'

const Header = () => {
    return (
        <div className='Header'>
            <div className='half header-detail'>
                <h1>Rainika's <span class='rain-color'>Store</span></h1>
                <h3>A Place where your <span class='rain-color'>expectation</span> <br /> and products <span className='rain-color'>quality</span> will explore</h3>
            </div>

            <div className='half'>
                <img src={pic} alt="" />
            </div>



        </div>
    );
};

export default Header;