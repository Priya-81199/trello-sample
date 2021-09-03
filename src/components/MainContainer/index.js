import React from 'react';
import CardList from '../CardList';
import './MainContainer.css';

const MainContainer = ({cards}) => {

    return(
    <div className ='container'>
      <CardList type = 'todo' cards={cards.todo} />
      <CardList type = 'doing' cards={cards.doing}/>
      <CardList type = 'done' cards={cards.done}/>
    </div>
    );
};

export default MainContainer;