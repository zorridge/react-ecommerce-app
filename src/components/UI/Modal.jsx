import React from 'react';
import ReactDom from 'react-dom';

import classes from './Modal.module.css';

const Backdrop = props => {
    return <div className={classes.backdrop} onClick={props.onClick}></div>;
};

const ModalOverlay = props => {
    return (
        <div className={classes.modal}>
            <div className={classes.content}>
                {props.children}
            </div>
        </div>
    );
};

const modalPortal = document.querySelector('#overlays');

const Modal = props => {

    return (
        <React.Fragment>
            {ReactDom.createPortal(<Backdrop onClick={props.onShowCartChange} />, modalPortal)}
            {ReactDom.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, modalPortal)}
        </React.Fragment>
    );
};

export default Modal;