import React from 'react';
import CardList from '../CardList';
import './MainContainer.css';

const MainContainer = ({cards, setTitle, setDescription, setListType, setOpen, setPreviousListType, setIndex}) => {

    return(
      <div className ='container'>
        <CardList 
          type = 'todo' 
          cards={cards.todo}
          setTitle={setTitle}
          setDescription={setDescription}
          setListType={setListType}
          setOpen={setOpen} 
          setPreviousListType={setPreviousListType}
          setIndex={setIndex}
        />
        <CardList 
          type = 'doing' 
          cards={cards.doing}
          setTitle={setTitle}
          setDescription={setDescription}
          setListType={setListType}
          setOpen={setOpen}
          setPreviousListType={setPreviousListType}
          setIndex={setIndex}
        />
        <CardList 
          type = 'done' 
          cards={cards.done}
          setTitle={setTitle}
          setDescription={setDescription}
          setListType={setListType}
          setOpen={setOpen}
          setPreviousListType={setPreviousListType}
          setIndex={setIndex}
        />
      </div>
    );
};

export default MainContainer;