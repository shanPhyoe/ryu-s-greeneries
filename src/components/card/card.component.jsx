import React from 'react';

import sprite from '../../assets/icon/sprite.svg';

import './card.styles.scss';

const Card = ({ content }) => {
    const { title, icon, text } = content;

    return (
        <div className="card">
            <svg className="card__icon">
                <use href={`${sprite}#${icon}`} />
            </svg>
            <h3 className="card__heading">{title}</h3>
            <p className="card__text">{text}</p>
        </div>
    );
};

export default Card;
