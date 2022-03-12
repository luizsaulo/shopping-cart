import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faArrowTurnUp } from '@fortawesome/free-solid-svg-icons';
import './header.css';
import { Link } from 'react-router-dom';

export const Header = () => {
    return (
        <div className='header'>
            <div className='navbar'>
                <div className='links'>
                    <Link to='/' className='women'>WOMEN</Link>
                    <a className='men'>MEN</a>
                    <a className='kids'>KIDS</a>
                </div>
                <div className='arrow'>
                    <FontAwesomeIcon icon={faArrowTurnUp} />
                </div>
                <div className='cart'>
                    <Link to='/Cart'>
                        <FontAwesomeIcon icon={faCartShopping} className='carrinho' />
                    </Link>
                </div>

            </div>
        </div>
    )
}

export default Header