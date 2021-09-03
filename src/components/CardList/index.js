import React from 'react';
import Card from '../Card';
import './CardList.css';

const CardList = ({type, cards, setTitle, setDescription, setListType, setOpen, setPreviousListType, setIndex}) => {
    const Cards = [];
    for(let i = 0; i < cards.length; i++) {
        Cards.push(
            <div
                onClick={()=>{
                    console.log(cards[i]);
                    setTitle(cards[i].title);
                    setDescription(cards[i].description);
                    setListType(type);
                    setPreviousListType(type);
                    setOpen(true);
                    setIndex(i);
                }}
            >
                <Card
                    card={cards[i]}
                />
            </div>
        );
    }
    return(
        <div className = {type}>
            {Cards}
        </div>
    );
};

export default CardList;