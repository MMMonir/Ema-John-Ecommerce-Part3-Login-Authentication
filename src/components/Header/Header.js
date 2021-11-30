import React from 'react';
import useAuth from '../../hooks/useAuth';
import logo from '../../images/logo.png';
import './Header.css'

const Header = () => {
    const {user, LogOut} = useAuth();
    return (
        <div className="logo">
            <img src={logo} alt="" />
            <nav>
                <a href="/shop">Shop</a>
                <a href="/review">Order Review</a>
                <a href="/inventory">Manage Inventory</a>
                {
                    user.email ?
                    <>
                        <span style={{color: 'white'}}><i>{user.displayName}</i> </span>
                        <button onClick={LogOut}>Log Out</button>
                    </> :
                    <>
                        <a href="/login">Login</a>
                        <a href="/register">Register</a>
                    </>
                }
            </nav>
        </div>
    );
};

export default Header;