import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { motion } from 'framer-motion';

import {
    selectAllPlants,
    selectFetchingStatus,
} from '../../redux/shop/shop.selector';

import SearchBar from '../../components/search-bar/search-bar.component';
import PlantsList from '../../components/plants-list/plants-list.component';

import './searchpage.styles.scss';
import { fetchPlantsInit } from '../../redux/shop/shop.action';

const variants = {
    hidden: { opacity: 0 },
    enter: { opacity: 1 },
    exit: { opacity: 0 },
};

const SearchPage = ({ allPlants, isFetchingDone, fetchPlantsInit }) => {
    const [searchField, setSearchField] = useState('');

    useEffect(() => {
        !isFetchingDone && fetchPlantsInit();
    }, [isFetchingDone, fetchPlantsInit]);

    const handleChange = event => {
        setSearchField(event.target.value);
    };

    const searchedPlants = allPlants.filter(plant =>
        plant.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
        <motion.div
            className="search-page"
            initial="hidden"
            animate="enter"
            exit="exit"
            variants={variants}
            transition={{ duration: 0.5, type: 'easeInOut' }}
        >
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
        </motion.div>
    );
};

const mapStateToProps = createStructuredSelector({
    allPlants: selectAllPlants,
    isFetchingDone: selectFetchingStatus,
});

const mapDispatchToProps = dispatch => ({
    fetchPlantsInit: () => dispatch(fetchPlantsInit()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);
