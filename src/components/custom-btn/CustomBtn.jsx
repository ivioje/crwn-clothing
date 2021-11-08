import React from 'react';
import './customBtn.style.scss';

const CustomBtn = ({ children, ...otherProps }) => {
    return (
        <div>
            <button className='custom-button' {...otherProps}>
                {children}
            </button>
        </div>
    )
}

export default CustomBtn
