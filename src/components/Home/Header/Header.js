import React from 'react';
import HeaderBottom from '../HeaderBottom/HeaderBottom';
import HeaderMain from '../HeaderMain/HeaderMain';
import NavBar from '../NavBar/NavBar';

const Header = () => {
    return (
        <div>
            <NavBar></NavBar>
            <HeaderMain></HeaderMain>
            <HeaderBottom></HeaderBottom>
        </div>
    );
};

export default Header;