import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({
    children,
    isGreen,
    isGrey,
    isSquared,
    isGoogleButton,
    fontDefault,
    ...otherProps
}) => {
    return (
        <button
            className={`custom-button ${isGreen ? 'green' : ''} ${
                isGoogleButton ? 'google-button' : ''
            } ${isGrey ? 'grey' : ''} ${isSquared ? 'square' : ''} ${
                fontDefault ? 'font-default' : ''
            }`}
            {...otherProps}
        >
            {children}
        </button>
    );
};

export default CustomButton;
