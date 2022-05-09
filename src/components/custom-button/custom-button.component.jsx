import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({ children, isGreen, isGoogleButton, ...otherProps }) => {
    return (
        <button
            className={`custom-button ${isGreen ? 'green' : ''} ${
                isGoogleButton ? 'google-button' : ''
            }`}
            {...otherProps}
        >
            {children}
        </button>
    );
};

export default CustomButton;
