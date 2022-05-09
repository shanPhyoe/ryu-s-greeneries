import React from 'react';

import serviceData from './service.data';

import Card from '../card/card.component';

import './service.styles.scss';

const Service = () => {
    return (
        <div className="services">
            <h2 className="services__heading">OUR SERVICES</h2>
            <div className="services__services">
                {serviceData.map(service => {
                    return <Card key={service.id} content={service} />;
                })}
            </div>
        </div>
    );
};

export default Service;
