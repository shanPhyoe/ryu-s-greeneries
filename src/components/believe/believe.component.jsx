import React from 'react';

import Image from '../../assets/img/believe-img.jpg';

import './believe.styles.scss';

const Believe = () => {
    return (
        <section className="section-believe">
            <div className="section-believe__content">
                <h2 className="section-believe__heading">WHAT WE BELIEVE</h2>
                <p className="section-believe__text">
                    We believe only plants can save the earth from natural
                    disasters by reducing global warming. We may love planting
                    trees if we gradually make the habit of planting trees
                    starting from houseplants.
                </p>
                <p className="section-believe__text">
                    We also believe our lovely homeplants can help in improving
                    your moods and reducing your stress and anxiety. They will
                    make your day amazing and increase your focus level while in
                    your accommodation.
                </p>
            </div>
            <img
                src={Image}
                alt="several houseplants"
                className="section-believe__image"
            />
        </section>
    );
};

export default Believe;
