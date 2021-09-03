import React from 'react';
import Card from '../Card';
import './CardList.css';

const CardList = ({type, cards}) => {

    return(
        <div className = {type}>
            {
                cards.map(card => {
                    return <Card card={card} />
                })
            }
        </div>
    );
};

export default CardList;