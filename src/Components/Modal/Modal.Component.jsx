import React, { Fragment, useState, useEffect } from 'react';

const Modal = ({ modalState, unloadModal, children }) => {

    const [addActiveClass, setAddActiveClass] = useState('');

    const handleCloseButtonClicked = ()=> {
        setAddActiveClass('');
        modalState = false;
        unloadModal();
    }

    useEffect(()=> {
        if (modalState) {
            setAddActiveClass('bg-active');
        }
    }, [modalState]);

    return (
        <Fragment>
            <div className={`modal-bg ${addActiveClass}`}>
                <div className="modal">
                    <span><button onClick={handleCloseButtonClicked} className="btn btn-secondary btn-close">Close</button></span>
                    {children}
                </div>
            </div>
        </Fragment>
    )
}

export default Modal
