import React from 'react';
import { useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';

import Image from '../../assets/img/vine.png';

import { selectPlant } from '../../redux/shop/shop.selector';

import Loading from '../../components/loading/loading.component';
import CustomButton from '../../components/custom-button/custom-button.component';

import './plant-details.styles.scss';

const PlantDetails = () => {
    const navigate = useNavigate();
    const { plantId } = useParams();
    const plant = useSelector(selectPlant(plantId));

    return (
        <div className="plant-details-page">
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
                                {/* <div className="details__vine-container">
                                    <img
                                        src={Image}
                                        alt="vine"
                                        className="details__vine"
                                    />
                                </div> */}
                                <p className="details__about">{plant.about}</p>
                            </div>
                        </div>
                    </div>
                    <CustomButton onClick={() => navigate(-1)}>
                        Go Back
                    </CustomButton>
                </>
            ) : (
                <Loading />
            )}
        </div>
    );
};

export default PlantDetails;
