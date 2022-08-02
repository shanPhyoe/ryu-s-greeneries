import React from 'react';
import { connect, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

import { addItemToCart } from '../../redux/cart/cart.action';
import { selectPlant } from '../../redux/shop/shop.selector';

import Loading from '../../components/loading/loading.component';
import CustomButton from '../../components/custom-button/custom-button.component';

import './plant-details.styles.scss';

const variants = {
    hidden: { opacity: 0 },
    enter: { opacity: 1 },
    exit: { opacity: 0 },
};

const PlantDetails = ({ addItem }) => {
    const navigate = useNavigate();
    const { plantId } = useParams();
    const plant = useSelector(selectPlant(plantId));

    return (
        <motion.div
            className="plant-details-page"
            initial="hidden"
            animate="enter"
            exit="exit"
            variants={variants}
            transition={{ duration: 0.5, type: 'easeInOut' }}
        >
            {plant ? (
                <>
                    <div className="panels">
                        <div className="panels__panel">
                            <div className="panels__image-container">
                                <img
                                    src={plant.imageUrl}
                                    alt={plant.name}
                                    className="panels__image"
                                />
                            </div>
                        </div>
                        <div className="panels__panel">
                            <div className="details">
                                <h3 className="details__heading">
                                    {plant.name}
                                </h3>
                                <h4 className="details__sub-heading">
                                    {plant.type}
                                </h4>
                                <span className="details__price">
                                    ${plant.price}
                                </span>
                                <p className="details__about">{plant.about}</p>
                                <CustomButton
                                    isGreen
                                    onClick={() => addItem(plant)}
                                >
                                    Add to Cart
                                </CustomButton>
                            </div>
                        </div>
                    </div>
                    <CustomButton isDefault onClick={() => navigate(-1)}>
                        Go Back
                    </CustomButton>
                </>
            ) : (
                <Loading />
            )}
        </motion.div>
    );
};

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItemToCart(item)),
});

export default connect(null, mapDispatchToProps)(PlantDetails);
