import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Image from '../../assets/img/ivy-art-3.png';

import { selectAllPlants } from '../../redux/shop/shop.selector';

import SearchBar from '../../components/search-bar/search-bar.component';
import PlantsList from '../../components/plants-list/plants-list.component';
import ScrollToReveal from '../../components/scroll-to-reveal/scroll-to-reveal.component';

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
            <ScrollToReveal threshold=".2" fromTop={true}>
                <img src={Image} className="search-page__art" alt="" />
            </ScrollToReveal>
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
