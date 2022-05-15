import React from 'react';

import { ReactComponent as Spinner } from '../../assets/icon/leaf.svg';

import './loading.styles.scss';

const Loading = () => {
    return (
        <div className="loading-container">
            <Spinner className="loading" />
        </div>
    );
};

export default Loading;
