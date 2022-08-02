import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({
    children,
    isGreen,
    isCartDropdown,
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
            } ${isCartDropdown ? 'cart' : ''} ${isDefault ? 'default' : ''} ${
                isSquared ? 'square' : ''
            } ${isItemButton ? 'item-button' : ''}`}
            {...otherProps}
        >
            {children}
        </button>
    );
};

export default CustomButton;
