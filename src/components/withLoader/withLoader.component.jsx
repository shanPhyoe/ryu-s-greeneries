import React from 'react';

import Loading from '../loading/loading.component';

const WithLoader = DefaultComponent => {
    const LoaderComponent = ({ isFetchingDone, ...otherProps }) => {
        return isFetchingDone ? (
            <DefaultComponent {...otherProps} />
        ) : (
            <Loading />
        );
    };

    return LoaderComponent;
};

export default WithLoader;
