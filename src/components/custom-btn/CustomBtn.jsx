import React from 'react';
import './customBtn.style.scss';

const CustomBtn = ({ children,isGoogleSignIn, ...otherProps }) => {
    return (
        <div>
            <button className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} {...otherProps}>
                {children}
            </button>
        </div>
    )
}

export default CustomBtn
