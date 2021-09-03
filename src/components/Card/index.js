import React from 'react';
import './Card.css';

const Card = ({card}) => {

    return(
        <div className = 'card'>
            <div className = 'title'>{card.title}</div>
            <div className = 'description'>{card.description}</div>
        </div>
    );
};

export default Card;