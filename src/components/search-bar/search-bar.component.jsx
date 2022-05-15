import React from 'react';

import './search-bar.styles.scss';

const SearchBar = ({ placeHolder, handleChange }) => {
    return (
        <input
            type="search"
            className="search"
            placeholder={placeHolder}
            onChange={handleChange}
        />
    );
};

export default SearchBar;
