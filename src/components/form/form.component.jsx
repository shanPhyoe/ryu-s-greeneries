import React from 'react';

import './form.styles.scss';

const Form = ({ mainTitle, subTitle, children }) => {
    return (
        <div className="form-container">
            <div className="form__title">
                <h2 className="form__title--main">{mainTitle}</h2>
                <h4 className="form__title--sub">{subTitle}</h4>
            </div>
            <form className="form">{children}</form>
        </div>
    );
};

export default Form;
