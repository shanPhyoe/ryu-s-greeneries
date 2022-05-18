import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({
    children,
    isGreen,
    isGrey,
    isSquared,
    isGoogleButton,
    isItemButton,
    isDefault,
    ...otherProps
}) => {
    return (
        <button
            className={`custom-button ${isGreen ? 'green' : ''} ${
                isGoogleButton ? 'google-button' : ''
            } ${isGrey ? 'grey' : ''} ${isDefault ? 'default' : ''} ${
                isSquared ? 'square' : ''
            } ${isItemButton ? 'item-button' : ''}`}
            {...otherProps}
        >
            {children}
        </button>
    );
};

export default CustomButton;
