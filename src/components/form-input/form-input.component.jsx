import React from 'react';

import './form-input.styles.scss';

const FormInput = ({ onChange, label, value, ...otherProps }) => {
    return (
        <div className={`form-input__group ${value.length ? 'active' : ''}`}>
            <input
                onChange={onChange}
                {...otherProps}
                className="form-input__input"
            />
            <label className="form-input__label">{label}</label>
        </div>
    );
};

export default FormInput;
