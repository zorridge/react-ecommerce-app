import React from 'react';

import HeaderCartButton from './HeaderCartButton';
import classes from './Header.module.css';

const Header = props => {
    return (
        <React.Fragment>
            <header className={classes.header}>
                <h1>Reactcha</h1>
                <HeaderCartButton onClick={props.onShowCartChange} />
            </header>
            <div className={classes['main-image']}></div>
        </React.Fragment>
    );
};

export default Header;
