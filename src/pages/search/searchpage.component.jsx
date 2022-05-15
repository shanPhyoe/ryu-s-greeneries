import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectAllPlants } from '../../redux/shop/shop.selector';

import SearchBar from '../../components/search-bar/search-bar.component';
import PlantsList from '../../components/plants-list/plants-list.component';

import './searchpage.styles.scss';

const SearchPage = ({ allPlants }) => {
    const [searchField, setSearchField] = useState('');

    const handleChange = event => {
        setSearchField(event.target.value);
    };

    const searchedPlants = allPlants.filter(plant =>
        plant.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
        <div className="search-page">
            <h3 className="search-page__heading">
                Which plant are you looking for?
            </h3>
            <SearchBar
                placeHolder="Type any 'keywords' to search the plant"
                handleChange={handleChange}
            />
            {searchField === '' || searchedPlants.length === 0 ? (
                <div className="search-page__empty">No plants found</div>
            ) : (
                <PlantsList items={searchedPlants} />
            )}
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    allPlants: selectAllPlants,
});

export default connect(mapStateToProps)(SearchPage);
