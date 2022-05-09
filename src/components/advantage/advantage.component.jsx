import React from 'react';

import { ReactComponent as TruckFast } from '../../assets/icon/truck-fast.svg';
import { ReactComponent as Box } from '../../assets/icon/box.svg';
import { ReactComponent as CurrencyOff } from '../../assets/icon/currency-off.svg';
import { ReactComponent as Return } from '../../assets/icon/return.svg';

import './advantage.styles.scss';

const Advantage = () => {
    return (
        <section className="section-advantage">
            <h2 className="section-advantage__title">WHY US?</h2>
            <ul className="content">
                <li className="content__list">
                    <Box
                        className="content__icon"
                        style={{ width: '3.6rem', height: '3.6rem' }}
                    />
                    <p className="content__text">
                        We carefully parcel every single plant to deliver so
                        that they will be ready to decorate on arrival.
                    </p>
                </li>
                <li className="content__list">
                    <TruckFast
                        className="content__icon"
                        style={{ width: '3.6rem', height: '3.6rem' }}
                    />
                    <p className="content__text">
                        We start delivering process as soon as ordering is done.
                        It will only take delivering time for you to receive
                        your order.
                    </p>
                </li>
                <li className="content__list">
                    <Return
                        className="content__icon"
                        style={{ width: '3.6rem', height: '3.6rem' }}
                    />
                    <p className="content__text">
                        If the plant you bought doesn't match your mood or
                        change your mind later, we accept plants exchange in one
                        month if the plant you bought is still in good shape.
                    </p>
                </li>
                <li className="content__list">
                    <CurrencyOff
                        className="content__icon"
                        style={{ width: '3.6rem', height: '3.6rem' }}
                    />
                    <p className="content__text">
                        No payment for delivery is required for orders over
                        $250.
                    </p>
                </li>
            </ul>
        </section>
    );
};

export default Advantage;
