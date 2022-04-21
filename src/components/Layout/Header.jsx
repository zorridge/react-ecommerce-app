import React from 'react';

import HeaderCartButton from './HeaderCartButton';
import classes from './Header.module.css';
// import headerImage from '../../assets/header.jpg';

const Header = props => {
    return (
        <React.Fragment>
            <header className={classes.header}>
                <h1>Reactcha</h1>
                <HeaderCartButton onClick={props.onShowCartChange} />
            </header>
            <div className={classes['main-image']}>
                {/* <img src={headerImage} alt='A cuppa matcha' /> */}
            </div>
        </React.Fragment>
    );
};

export default Header;