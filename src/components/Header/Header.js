import React from 'react';
import './Header.scss';
import{Link}  from 'react-router-dom';

const Header = () => {
    return (
        <header className='header'>
            <Link to='/'className='header__class'>
                 <h1 className='header__title'>
                    THE BARK OFF
                </h1>
            </Link>

            <Link to='/leaderboard' className='header__class'>
                <h2 className='header__subtitle'> 
                    LeaderBoard</h2>
                </Link>

        </header>
    );
};

export default Header;